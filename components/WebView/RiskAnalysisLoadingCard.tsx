import { ShieldAlert } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RiskAnalysisLoadingCard() {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <ShieldAlert
          size={20}
          color="#4338CA"
        />
      </View>

      <Text style={styles.title}>
        위험 요소 분석 준비 중
      </Text>

      <Text style={styles.description}>
        페이지 로드 후{"\n"}
        자동으로 위험 요소를 분석합니다
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
  },

  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#6B7280",
    textAlign: "center",
  },
});