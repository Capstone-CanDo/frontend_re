import { useFocusEffect, useRouter } from "expo-router";
import { Globe, QrCode, Search, TrendingDown, TrendingUp } from "lucide-react-native";
import React, { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { theme } from "../../constants/index";
import { ScanRecord } from "../../data/scanRecords";
import { loadScanRecords } from "../../util/storage";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { styles } from "./styles";




export function ScanHistory() {
// JWT 토큰 가져오기 예시


  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "safe" | "malicious" | "suspicious">("all");
  const router = useRouter();
  const [records, setRecords] = useState<ScanRecord[]>([]);

  // 스캔 기록 로드
  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        const data = await loadScanRecords();
        console.log("불러온 데이터:", data);
        setRecords(data);
      };
      fetchData();
    }, [])
  );

  // 필터링
  const filteredRecords = records
  .filter((record) => {
    const matchesSearch =
      record.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (record.location?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

    const matchesFilter =
      filterStatus === "all" ? true : record.status === filterStatus;

    return matchesSearch && matchesFilter;
  })
  .sort(
    (a, b) =>
      new Date(b.created_at).getTime() -
      new Date(a.created_at).getTime()
  );

  const stats = {
    total: records.length,
    safe: records.filter((r) => r.status === "safe").length,
    malicious: records.filter((r) => r.status === "malicious").length,
  };

  const getStatusBadge = (status: string) => {
    if (status === "safe") return <Badge>안전</Badge>;
    if (status === "malicious") return <Badge variant="destructive">위험</Badge>;
    return <Badge variant="secondary">주의</Badge>;
  };


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.Headercontent}>
            <Text style={styles.headerTitle}>스캔 기록</Text>
            <Text style={styles.headerSub}>내 QR 스캔 히스토리</Text>
          </View>
        </View>

        <View style={styles.content}>
          {/* Stats */}
          <Card style={styles.statsCard}>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{stats.total}</Text>
                <Text style={styles.statLabel}>총 스캔</Text>
              </View>

              <View style={styles.statcenterItem}>
                <View style={styles.statRow}>
                  <TrendingUp size={16} color={theme.colors.safe} />
                  <Text style={styles.safeNumber}>{stats.safe}</Text>
                </View>
                <Text style={styles.statLabel}>안전</Text>
              </View>

              <View style={styles.statItem}>
                <View style={styles.statRow}>
                  <TrendingDown size={16} color={theme.colors.danger} />
                  <Text style={styles.dangerNumber}>{stats.malicious}</Text>
                </View>
                <Text style={styles.statLabel}>위험 차단</Text>
              </View>
            </View>
          </Card>

          {/* Search */}
          <View style={styles.searchRow}>
            <Search size={16} color="#9ca3af" />
            <Input
              placeholder="URL 또는 위치 검색..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.input}
            />
          </View>

          {/* Filter 버튼 */}
          <View style={styles.filterRow}>
            {(["all", "safe", "malicious"] as const).map((status) => (
              <Button
                key={status}
                variant={filterStatus === status ? "default" : "outline"}
                onPress={() => setFilterStatus(status)}
                style={{ paddingHorizontal: 13, paddingVertical: 6 }}
              >
                {status === "all"
                  ? "전체"
                  : status === "safe"
                  ? "안전"
                  : "위험"}
              </Button>
            ))}
          </View>

          {/* Scan list */}
          {filteredRecords.map((record) => {
            const [date, time] = record.created_at.split("T");
            const formattedTime = time.split(".")[0];

            return (
              <Card
                key={record.id}
                style={[
                  styles.card,
                  record.status === "safe" && styles.safeCard,
                  record.status === "malicious" && styles.maliciousCard,
                  record.status === "suspicious" && styles.suspiciousCard,
                ]}
              >
                <View style={styles.cardRow}>
                  <View style={{ marginTop: 4 }}>
                    <QrCode size={20} color="#4b5563" />
                  </View>
                  <View style={styles.cardContent}>
                    <Text numberOfLines={1} style={styles.url}>
                      {record.url}
                    </Text>

                    <View style={styles.metaRow}>
                      <Text style={styles.metaText}>{date}</Text>
                      <Text style={styles.metaText}>{formattedTime}</Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 4 }}>
                    {getStatusBadge(record.status)}
                  </View>
                </View>

                {record.status === "safe" && (
                  <View style={styles.safebrowserbuttonview}>
                    <Button style={styles.safebrowserbutton}>
                      <Globe size={14} color={theme.fontcolor.defaultblack} />
                      <Text
                        style={styles.safebuttontext}
                        onPress={() =>
                          router.push(`/WebViewScreen?url=${encodeURIComponent(record.url)}`)
                        }
                      >
                        {" "}
                        보안 브라우저로 다시 열기
                      </Text>
                    </Button>
                  </View>
                )}
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}