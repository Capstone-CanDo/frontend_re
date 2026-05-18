
import { ArrowRightLeft } from "lucide-react-native";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const descriptionItems = [
  {
    original: "The perfect gift for food lovers",
    translated: "미식가를 위한 완벽한 선물",
  },
  {
    original:
      "Valid at Restaurant Hubert, Sydney",
    translated:
      "시드니 레스토랑 휴버트에서 사용 가능",
  },
  {
    original:
      "Valid for 3 years from purchase date",
    translated:
      "구매일로부터 3년간 유효",
  },
];

const amountItems = [
  {
    original: "Select Amount",
    translated: "금액 선택",
  },
  {
    original:
      "$50 / $100 / $150 / $200 / $250",
    translated:
      "$50 / $100 / $150 / $200 / $250",
  },
  {
    original:
      "$500 / $1,000 / $1,500 / $2,000",
    translated:
      "$500 / $1,000 / $1,500 / $2,000",
  },
  {
    original:
      "CUSTOM — Enter your own amount",
    translated:
      "직접 입력 — 원하는 금액 설정 가능",
  },
];

const buttonItems = [
  {
    original: "Buy Now",
    translated: "지금 구매하기",
  },
  {
    original: "Add to Cart",
    translated: "장바구니에 추가",
  },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>

      <View style={styles.sectionLine} />
    </View>
  );
}

function TranslationCard({
  original,
  translated,
  variant = "default",
}: {
  original: string;
  translated: string;
  variant?: "default" | "purple" | "green";
}) {
  return (
    <View
      style={[
        styles.translationCard,
        variant === "purple" &&
          styles.purpleCard,
        variant === "green" &&
          styles.greenCard,
      ]}
    >
      <Text style={styles.originalText}>
        {original}
      </Text>

      <Text
        style={[
          styles.translatedText,
          variant === "purple" &&
            styles.purpleText,
          variant === "green" &&
            styles.greenText,
        ]}
      >
        {translated}
      </Text>
    </View>
  );
}

export default function TranslationGiftcard() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* TOP */}
      <View style={styles.topRow}>
        <View style={styles.languageRow}>
          <View style={styles.languageBadge}>
            <Text style={styles.languageText}>
              EN
            </Text>
          </View>

          <ArrowRightLeft
            size={13}
            color="#9097B8"
          />

          <View style={styles.languageBadge}>
            <Text style={styles.languageText}>
              한국어
            </Text>
          </View>
        </View>

        <View style={styles.countBadge}>
          <Text style={styles.countText}>
            9문장
          </Text>
        </View>
      </View>

      {/* TITLE */}
      <View style={styles.section}>
        <SectionHeader title="페이지 제목" />

        <View style={styles.titleCard}>
          <Text style={styles.originalText}>
            Restaurant Hubert Gift Card
          </Text>

          <Text style={styles.pageTitle}>
            레스토랑 휴버트 기프트카드
          </Text>
        </View>
      </View>

      {/* DESCRIPTION */}
      <View style={styles.section}>
        <SectionHeader title="상품 설명" />

        <View style={styles.cardGroup}>
          {descriptionItems.map((item) => (
            <TranslationCard
              key={item.original}
              original={item.original}
              translated={item.translated}
            />
          ))}
        </View>
      </View>

      {/* AMOUNT */}
      <View style={styles.section}>
        <SectionHeader title="금액 옵션" />

        <View style={styles.cardGroup}>
          {amountItems.map((item) => (
            <TranslationCard
              key={item.original}
              original={item.original}
              translated={item.translated}
              variant="purple"
            />
          ))}
        </View>
      </View>

      {/* BUTTON */}
      <View style={styles.section}>
        <SectionHeader title="버튼" />

        <View style={styles.cardGroup}>
          {buttonItems.map((item) => (
            <TranslationCard
              key={item.original}
              original={item.original}
              translated={item.translated}
              variant="green"
            />
          ))}
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          총 9문장 번역 완료
        </Text>

        <View style={styles.dot} />

        <Text style={styles.footerText}>
          Google Translate
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 32,
    gap: 20,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  languageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  languageBadge: {
    backgroundColor: "#EEF2FF",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 32,
    justifyContent: "center",
  },

  languageText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#4338CA",
  },

  countBadge: {
    height: 30,
    borderRadius: 20,
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 10,
    justifyContent: "center",
  },

  countText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#4338CA",
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
    color: "#9097B8",
  },

  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ECEDF5",
  },

  titleCard: {
    backgroundColor: "#EEF2FF",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 14,
    gap: 4,
  },

  pageTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#1E1B4B",
  },

  cardGroup: {
    gap: 5,
  },

  translationCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: "#EEF2FF",
    paddingHorizontal: 14,
    paddingTop: 9,
    paddingBottom: 12,
    gap: 2,
  },

  purpleCard: {
    backgroundColor: "#F5F3FF",
    borderLeftColor: "#C7D2FE",
  },

  greenCard: {
    backgroundColor: "#ECF9F5",
    borderLeftColor: "#C7E7DD",
  },

  originalText: {
    fontSize: 11,
    fontWeight: "400",
    color: "#9CA3AF",
    lineHeight: 16,
  },

  translatedText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
    lineHeight: 19,
  },

  purpleText: {
    color: "#1E1B4B",
  },

  greenText: {
    color: "#065F46",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },

  footerText: {
    fontSize: 11,
    fontWeight: "400",
    color: "#9097B8",
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#D1D5DB",
  },
});

