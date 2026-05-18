import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function RiskAnalysisResultCard() {
  const items = [
    {
      title: "피싱 문구",
      count: "0건",
    },
    {
      title: "긴급 결제",
      count: "0건",
    },
    {
      title: "계정 탈취",
      count: "0건",
    },
    {
      title: "개인정보 요구",
      count: "0건",
    },
  ];

  return (
    <View style={styles.container}>
      {/* 상단 상태 카드 */}
      <View style={styles.safeCard}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>
            ✅
          </Text>
        </View>

        <View style={styles.safeContent}>
          <Text style={styles.safeTitle}>
            위험 문구 없음
          </Text>

          <Text style={styles.safeDesc}>
            이 페이지는 안전합니다
          </Text>

          <Text style={styles.safeStatus}>
            검사 완료
          </Text>
        </View>
      </View>

      {/* 검사 항목 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            검사 항목 (4 / 4 통과)
          </Text>

          <View style={styles.line} />
        </View>

        <View style={styles.grid}>
          {items.map((item) => (
            <View
              key={item.title}
              style={styles.gridCard}
            >
              <Text style={styles.gridLabel}>
                {item.title}
              </Text>

              <Text style={styles.gridValue}>
                {item.count}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.noticeBox}>
          <Text style={styles.noticeText}>
            결제 단계로 이동하면 개인정보
            입력 요구 여부를 다시 자동으로
            검사합니다.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 14,
    gap: 12,
  },

  /* SAFE CARD */
  safeCard: {
    flexDirection: "row",
    alignItems: "flex-start",

    backgroundColor: "#ECF9F5",

    borderRadius: 14,

    padding: 14,
    gap: 12,
  },

  iconBox: {
    width: 44,
    height: 44,

    borderRadius: 14,

    backgroundColor: "#C7E7DD",

    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 22,
  },

  safeContent: {
    flex: 1,
  },

  safeTitle: {
    fontSize: 14,
    fontWeight: "800",

    lineHeight: 21,

    color: "#0D553F",

    marginBottom: 2,
  },

  safeDesc: {
    fontSize: 11,
    fontWeight: "400",

    lineHeight: 16,

    color: "#0D553F",

    marginBottom: 4,
  },

  safeStatus: {
    fontSize: 10,
    fontWeight: "400",

    lineHeight: 15,

    color: "#059669",
  },

  /* SECTION */
  section: {
    gap: 8,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: "800",

    letterSpacing: 0.7,
    textTransform: "uppercase",

    color: "#9097B8",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ECEDF5",
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 6,
  },

  gridCard: {
    width: "49%",

    backgroundColor: "#ECF9F5",

    borderRadius: 10,

    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 12,
  },

  gridLabel: {
    fontSize: 11,
    fontWeight: "700",

    lineHeight: 16,

    color: "#374151",

    marginBottom: 3,
  },

  gridValue: {
    fontSize: 18,
    fontWeight: "800",

    lineHeight: 18,

    color: "#065F46",
  },

  /* NOTICE */
  noticeBox: {
    backgroundColor: "#F9FAFB",

    borderRadius: 10,

    paddingHorizontal: 13,
    paddingVertical: 10,
  },

  noticeText: {
    fontSize: 11,
    fontWeight: "400",

    lineHeight: 18,

    color: "#6B7280",
  },
});