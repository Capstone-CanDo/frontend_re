import { Globe, MapPin, QrCode, Search, TrendingDown, TrendingUp } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { theme } from "../../constants/index";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { styles } from "./styles";


interface ScanRecord {
  id: number;
  url: string;
  status: "safe" | "malicious" | "suspicious";
  date: string;
  time: string;
  location: string;
  riskScore: number;
}

export function ScanHistory() {
  const [searchQuery, setSearchQuery] = useState("");
   const [filterStatus, setFilterStatus] = useState<"all" | "safe" | "malicious" | "suspicious">("all");

  const scanRecords: ScanRecord[] = [
    {
      id: 1,
      url: "https://restaurant-menu.com/special",
      status: "safe",
      date: "2026-03-05",
      time: "14:30",
      location: "도쿄 신주쿠",
      riskScore: 5,
    },
    {
      id: 2,
      url: "https://g00gle-login-verify.suspicious.xyz",
      status: "malicious",
      date: "2026-03-05",
      time: "10:15",
      location: "도쿄 시부야",
      riskScore: 87,
    },
    {
      id: 3,
      url: "https://bit.ly/hotel-promo",
      status: "suspicious",
      date: "2026-03-04",
      time: "18:45",
      location: "도쿄 아키하바라",
      riskScore: 45,
    },
    {
      id: 4,
      url: "https://museum-tickets.jp/buy",
      status: "safe",
      date: "2026-03-04",
      time: "11:20",
      location: "도쿄 우에노",
      riskScore: 8,
    },
    {
      id: 5,
      url: "https://free-wifi-login.net/connect",
      status: "malicious",
      date: "2026-03-03",
      time: "16:00",
      location: "도쿄 하라주쿠",
      riskScore: 92,
    },
    {
      id: 6,
      url: "https://official-store.co.jp/sale",
      status: "safe",
      date: "2026-03-03",
      time: "13:30",
      location: "도쿄 긴자",
      riskScore: 3,
    },
  ];

  const filteredRecords = scanRecords.filter((record) => {
  const matchesSearch =
    record.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.location.toLowerCase().includes(searchQuery.toLowerCase());

  const matchesFilter =
    filterStatus === "all" ? true : record.status === filterStatus;

  return matchesSearch && matchesFilter;
});

  const stats = {
    total: scanRecords.length,
    safe: scanRecords.filter((r) => r.status === "safe").length,
    malicious: scanRecords.filter((r) => r.status === "malicious").length,
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
        {/*<Text style={[styles.headerTitle, { position: "absolute", top: 24, left: 0, right: 0 }]}>스캔 기록</Text>
        <Text style={[styles.headerSub, { position: "absolute", top: 59, left: 0, right: 0 }]}>내 QR 스캔 히스토리</Text>*/}
        <Text style={styles.headerTitle}>스캔 기록</Text>
        <Text style={styles.headerSub}>내 QR 스캔 히스토리</Text>
        </View>
      </View>
<View style={styles.content}>
  {/* Stats 등 */}
     

      {/* Stats */}
      <Card style={styles.statsCard}>
        <View style={styles.statsRow}>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{stats.total}</Text>
            <Text style={styles.statLabel}>총 스캔</Text>
          </View>

          <View style={styles.statcenterItem}>
            <View style={styles.statRow}>
              <TrendingUp size={16} color= {theme.colors.safe} />
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

      <View style={styles.filterRow}>

        {/* 종류별 분류 버튼 */}
  <Button
    variant={filterStatus === "all" ? "default" : "outline"}
    onPress={() => setFilterStatus("all")}
    style={[filterStatus === "all" && styles.allActive, { paddingHorizontal: 13, paddingVertical: 6 }]}
  >
    전체
  </Button>

  <Button
    variant={filterStatus === "safe" ? "default" : "outline"}
    onPress={() => setFilterStatus("safe")}
    style={[filterStatus === "safe" && styles.safeActive, { paddingHorizontal: 13, paddingVertical: 6 }]}
  >
    안전
  </Button>

  <Button
    variant={filterStatus === "malicious" ? "default" : "outline"}
    onPress={() => setFilterStatus("malicious")}
    style={[filterStatus === "malicious" && styles.dangerActive, { paddingHorizontal: 13, paddingVertical: 6 }]}
  >
    위험
  </Button>

  <Button
    variant={filterStatus === "suspicious" ? "default" : "outline"}
    onPress={() => setFilterStatus("suspicious")}
    style={[filterStatus === "suspicious" && styles.warningActive, { paddingHorizontal: 13, paddingVertical: 6 }]}
  >
    주의
  </Button>
</View>

      {/* Scan list */}
      {filteredRecords.map((record) => (
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

            <QrCode size={20} color="#4b5563" />

            <View style={styles.cardContent}>

              <Text numberOfLines={1} style={styles.url}>
                {record.url}
              </Text>

              <View style={styles.metaRow}>
                <Text style={styles.metaText}>{record.date}</Text>
                <Text style={styles.metaText}>{record.time}</Text>
              </View>

              <View style={styles.bottomRow}>
                
                <View style={styles.locationRow}>
                  <MapPin size={12} color={theme.fontcolor.second} />
                  <Text style={styles.locationText}>{record.location}</Text>
                </View>

                {getStatusBadge(record.status)}

              </View>

            </View>
          </View>
          {record.status === "safe" && (
    <View style={styles.safebrowserbuttonview}>
      <Button style = {styles.safebrowserbutton} onPress={() => console.log(record.url)}>
        <Globe size={14} color={theme.fontcolor.defaultblack} />
      <Text style = {styles.safebuttontext}>  보안 브라우저로 다시 열기</Text>
    </Button>
    </View>
  )}
        </Card>
      ))}
      </View>
    </ScrollView>
      </View>
  );
}
