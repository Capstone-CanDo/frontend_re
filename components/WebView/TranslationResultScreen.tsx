import React from "react";
import { StyleSheet, Text, View } from "react-native";

const summaryItems = [
  "시드니 CBD 지하에 자리한 프랑스 파인다이닝 레스토랑 위베르(Hubert)의 공식 안내 페이지입니다.",
  "고풍스러운 파리 분위기 속 촛불과 매일 저녁 라이브 재즈 공연이 어우러집니다.",
  "XO 버터 에스카르고, 오리 오 랑주, 김치 그라탱 등 시즌마다 바뀌는 메뉴를 제공합니다.",
  "점심 매일 낮 12시~, 저녁 오후 5시~늦게까지 운영하며 주소는 15 Bligh St, Sydney입니다.",
  "예약, 기프트 카드 구매, 프라이빗 이벤트 문의도 이 페이지에서 가능합니다.",
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