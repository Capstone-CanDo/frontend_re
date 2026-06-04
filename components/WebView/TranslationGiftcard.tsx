import React from "react";
import { StyleSheet, Text, View } from "react-native";

const summaryItems = [
   "레스토랑 휴버트 기프트 카드 구매 페이지입니다.", 
   "친구, 가족, 동료에게 선물하기 좋으며, 마티니부터 코냑까지 특별한 밤을 선물하는 페이지입니다.", 
   "금액은 $50, $100, $150, $200, $250, $500, $1,000, $1,500, $2,000 중 선택하거나 직접 입력(CUSTOM)할 수 있습니다.", 
   "선물로 보내기, 장바구니 담기, 바로 구매 버튼이 있습니다.", 
];

export default function PageSummaryCard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>페이지 요약</Text>
        </View>

        <Text style={styles.countText}>
          {summaryItems.length}개 핵심 정보
        </Text>
      </View>

      {/* Summary List */}
      <View style={styles.content}>
        {summaryItems.map((item, index) => (
          <View key={index} style={styles.bulletRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.summaryText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>AI 요약 제공</Text>

        <View style={styles.dot} />

        <Text style={styles.footerText}>Google Translate</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  badge: {
    backgroundColor: "#EEF2FF",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#4338CA",
  },

  countText: {
    fontSize: 11,
    color: "#6B7280",
  },

  content: {
    marginTop: 12,
    gap: 10,
  },

  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  bullet: {
    width: 14,
    fontSize: 16,
    lineHeight: 23,
    color: "#4338CA",
  },

  summaryText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 23,
    color: "#111827",
  },

  footer: {
    marginTop: 12,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    fontSize: 11,
    color: "#9097B8",
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 6,
  },
});