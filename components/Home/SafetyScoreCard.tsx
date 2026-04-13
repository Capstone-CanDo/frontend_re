import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/index";
import { Card, CardTitle } from "../ui/card";

interface SafetyScoreCardProps {
  totalScans: number;
  dangerScans: number;
}

export function SafetyScoreCard({ totalScans, dangerScans }: SafetyScoreCardProps) {
  const safeScans = totalScans - dangerScans;
  const score = totalScans === 0 ? 100 : Math.round((safeScans / totalScans) * 100);

  return (
    <Card style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.titleGroup}>
          <Ionicons name="shield-checkmark-outline" size={20} color={theme.colors.primary} />
          <CardTitle>여행 안전도</CardTitle>
        </View>
        <View style={styles.scoreGroup}>
          <Text style={styles.score}>{score}</Text>
          <Text style={styles.scoreMax}>/100</Text>
        </View>
      </View>

      <View style={styles.progressBg}>
        <View style={[styles.progressFill, { width: `${score}%` as any }]} />
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <View style={styles.statLabelRow}>
            <Ionicons name="trending-up-outline" size={16} color={theme.colors.safe} />
            <Text style={styles.statLabel}>안전 스캔</Text>
          </View>
          <Text style={styles.statValue}>{safeScans}회</Text>
        </View>

        <View style={styles.statItem}>
          <View style={styles.statLabelRow}>
            <Ionicons name="trending-down-outline" size={16} color={theme.colors.danger} />
            <Text style={styles.statLabel}>위험 차단</Text>
          </View>
          <Text style={styles.statValue}>{dangerScans}회</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 24,
    paddingHorizontal: 36,
    gap: 32,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  titleGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  scoreGroup: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },

  score: {
    fontSize: 24,
    fontWeight: "700",
    color: theme.colors.primary,
    lineHeight: 32,
  },

  scoreMax: {
    fontSize: 16,
    color: "#6A7282",
    lineHeight: 24,
  },

  progressBg: {
    width: "100%",
    height: 12,
    backgroundColor: "rgba(37, 99, 235, 0.2)",
    borderRadius: 999,
    overflow: "hidden",
  },

  progressFill: {
    height: 12,
    backgroundColor: theme.colors.primary,
    borderRadius: 999,
  },

  statsRow: {
    flexDirection: "row",
    borderTopWidth: 1.35,
    borderTopColor: "rgba(37, 99, 235, 0.2)",
    paddingTop: 13,
  },

  statItem: {
    flex: 1,
    gap: 4,
  },

  statLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  statLabel: {
    fontSize: 12,
    color: "#6A7282",
    lineHeight: 16,
  },

  statValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0A0A0A",
    lineHeight: 24,
  },
});
