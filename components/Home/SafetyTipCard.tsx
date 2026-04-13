import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardTitle } from "../ui/card";

interface SafetyTipCardProps {
  tip: string;
}

export function SafetyTipCard({ tip }: SafetyTipCardProps) {
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.emoji}>💡</Text>
        <View style={styles.textGroup}>
          <CardTitle>오늘의 안전 팁</CardTitle>
          <Text style={styles.body}>{tip}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },

  emoji: {
    fontSize: 24,
    lineHeight: 32,
  },

  textGroup: {
    flex: 1,
    gap: 8,
  },

  body: {
    fontSize: 14,
    color: "#364153",
    lineHeight: 20,
  },
});
