import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../constants/index";
import { ScanRecord } from "../../data/scanRecords";
import { loadScanRecords } from "../../util/storage";
import { timeAgo } from "../../util/timeAgo";
import { Badge } from "../ui/badge";
import { Card, CardTitle } from "../ui/card";

export function RecentScanCard() {
  const [records, setRecords] = useState<ScanRecord[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      const data = await loadScanRecords();

const latestThree = [...data]
  .sort(
    (a, b) =>
      new Date(b.created_at).getTime() -
      new Date(a.created_at).getTime()
  )
  .slice(0, 3);

setRecords(latestThree);
    };
    fetch();
  }, []);

  const getStatusBadge = (status: ScanRecord["status"]) => {
    if (status === "safe") return <Badge>안전</Badge>;
    if (status === "malicious") return <Badge variant="destructive">위험</Badge>;
    return <Badge variant="secondary">주의</Badge>;
  };

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="scan-outline" size={20} color={theme.colors.primary} />
        <CardTitle>최근 스캔 활동</CardTitle>
      </View>

      <View style={styles.list}>
        {records.length === 0 ? (
          <Text style={styles.emptyText}>스캔 기록이 없습니다</Text>
        ) : (
          records.map((record) => (
            <View key={record.id} style={styles.item}>
              <View style={styles.itemInner}>
                <Ionicons name="qr-code-outline" size={20} color="#4A5565" />
                <View style={styles.itemContent}>
                  <View style={styles.urlRow}>
                    <Text numberOfLines={1} style={styles.url}>
                      {record.url.replace(/^https?:\/\//, "")}
                    </Text>
                    {getStatusBadge(record.status)}
                  </View>
                  <Text style={styles.timeText}>
                    {timeAgo(record.date, record.time)}
                  </Text>
                </View>
              </View>

              {record.status === "safe" && (
                <TouchableOpacity
                  style={styles.openBtn}
                  onPress={() => router.push(`/WebViewScreen?url=${encodeURIComponent(record.url)}`)}
                >
                  <Ionicons name="globe-outline" size={16} color={theme.colors.primary} />
                  <Text style={styles.openBtnText}>보안 브라우저로 다시 열기</Text>
                </TouchableOpacity>
              )}
            </View>
          ))
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingTop: 24,
    gap: 24,
    overflow: "hidden",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 24,
  },

  list: {
    gap: 12,
  },

  emptyText: {
    fontSize: 14,
    color: "#6A7282",
    textAlign: "center",
    paddingVertical: 24,
  },

  item: {
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: "#E0DEDE",
    borderRadius: 10,
    marginHorizontal: 12,
  },

  itemInner: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },

  itemContent: {
    flex: 1,
    gap: 4,
    marginBottom: 12,
  },

  urlRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  url: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: "#0A0A0A",
  },

  timeText: {
    fontSize: 12,
    color: "#6A7282",
  },

  openBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 32,
    borderWidth: 1,
    borderColor: "rgba(37, 99, 235, 0.3)",
    backgroundColor: "rgba(37, 99, 235, 0.1)",
    borderRadius: 8,
    marginBottom: 12,
    marginTop: -12,
  },

  openBtnText: {
    fontSize: 14,
    fontWeight: "500",
    color: theme.colors.primary,
  },
});
