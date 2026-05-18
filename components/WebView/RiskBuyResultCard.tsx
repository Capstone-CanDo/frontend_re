import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function RiskBuyResultCard() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* 상단 경고 */}
      <View style={styles.warningBanner}>
        <View style={styles.warningIconBox}>
          <Text style={styles.warningEmoji}>
            ⚠️
          </Text>
        </View>

        <View style={styles.warningContent}>
          <Text style={styles.warningTitle}>
            위험 문구 3건 감지
          </Text>

          <Text style={styles.warningDesc}>
            위험한 개인/금융정보를
            요구 중입니다
          </Text>
        </View>
      </View>

      {/* 감지된 문구 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            감지된 문구
          </Text>

          <View style={styles.line} />
        </View>

        {/* 금융정보 */}
        <View style={styles.detectCard}>
          <View style={styles.detectHeader}>
            <View style={styles.dot} />

            <Text style={styles.detectType}>
              금융정보 요구
            </Text>
          </View>

          <View style={styles.highlightBox}>
            <Text style={styles.highlightText}>
              "Card number / Expiry
              date"
            </Text>
          </View>

          <Text style={styles.detectDesc}>
            신용 또는 직불 카드의
            번호와 만료 날짜를 요구하고
            있어요. 사이트의 신뢰 여부를
            확인 후 입력하세요.
          </Text>
        </View>

        {/* 보안코드 */}
        <View style={styles.detectCard}>
          <View style={styles.detectHeader}>
            <View style={styles.dot} />

            <Text style={styles.detectType}>
              보안코드 요구
            </Text>
          </View>

          <View style={styles.highlightBox}>
            <Text style={styles.highlightText}>
              "CVV / Security code"
            </Text>
          </View>

          <Text style={styles.detectDesc}>
            카드 뒷면의 보안 코드를
            요구하고 있습니다. 피싱
            사이트일 가능성을 확인하세요.
          </Text>
        </View>

        {/* 개인정보 */}
        <View style={styles.detectCard}>
          <View style={styles.detectHeader}>
            <View style={styles.dot} />

            <Text style={styles.detectType}>
              개인정보 수집
            </Text>
          </View>

          <View style={styles.highlightBox}>
            <Text style={styles.highlightText}>
              "Cardholder name"
            </Text>
          </View>

          <Text style={styles.detectDesc}>
            카드 소지자의 이름을
            요구하고 있습니다. 개인정보
            악용 가능성을 주의하세요.
          </Text>
        </View>
      </View>

      {/* 하단 경고 */}
      <View style={styles.bottomWarning}>
        <Text style={styles.bottomEmoji}>
          ⚠️
        </Text>

        <Text style={styles.bottomText}>
          신뢰되지 않은 사이트일 경우
          입력한 금융정보가 외부로
          전송될 수 있습니다.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  warningBanner: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFF8F8",

    borderRadius: 14,

    padding: 14,
    gap: 12,

    marginBottom: 14,
  },

  warningIconBox: {
    width: 44,
    height: 44,

    borderRadius: 14,

    backgroundColor: "#F7E2E2",

    justifyContent: "center",
    alignItems: "center",
  },

  warningEmoji: {
    fontSize: 22,
  },

  warningContent: {
    flex: 1,
    gap: 2,
  },

  warningTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#881818",
  },

  warningDesc: {
    fontSize: 11,
    lineHeight: 16,
    color: "#4E5561",
  },

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
    color: "#4E5561",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ECEDF5",
  },

  detectCard: {
    backgroundColor: "#FFF8F8",

    borderRadius: 12,

    padding: 13,

    gap: 6,
  },

  detectHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  dot: {
    width: 8,
    height: 8,

    borderRadius: 4,

    backgroundColor: "#374151",
  },

  detectType: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: "#374151",
  },

  highlightBox: {
    backgroundColor: "#F7E2E2",

    borderRadius: 7,

    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  highlightText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#881818",
  },

  detectDesc: {
    fontSize: 11,
    lineHeight: 17,
    color: "#4E5561",
  },

  bottomWarning: {
    flexDirection: "row",
    alignItems: "flex-start",

    gap: 10,

    backgroundColor: "#FEF6ED",

    borderWidth: 0.9,
    borderColor: "#F6D7B4",

    borderRadius: 10,

    padding: 12,

    marginTop: 14,
    marginBottom: 40,
  },

  bottomEmoji: {
    fontSize: 14,
    color: "#9D5F19",
  },

  bottomText: {
    flex: 1,

    fontSize: 11,
    lineHeight: 18,
    fontWeight: "500",

    color: "#9D5F19",
  },
});