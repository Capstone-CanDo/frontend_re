import { ArrowRight } from "lucide-react-native";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const introItems = [
  {
    en: "Fine dining experience in the heart of Sydney",
    ko: "시드니 중심부에 파인 다이닝 경험",
  },
  {
    en: "Award-winning cuisine since 2017",
    ko: "2017년부터 수상 경력에 빛나는 요리",
  },
  {
    en: "Open Tuesday to Sunday, 6pm onwards",
    ko: "화요일부터 일요일, 오후 6시부터 운영",
  },
  {
    en: "Private dining rooms available for events",
    ko: "이벤트를 위한 프라이빗 다이닝룸 이용 가능",
  },
];

const menuItems = [
  {
    en: "Seasonal menu updated monthly",
    ko: "매월 업데이트되는 시즌 메뉴",
  },
  {
    en: "Vegetarian and vegan options available",
    ko: "채식주의자 및 비건 메뉴 이용 가능",
  },
  {
    en: "Curated wine list featuring local producers",
    ko: "지역 생산자를 중심으로 엄선한 와인 리스트",
  },
];

const buttonItems = [
  {
    en: "Book your table now",
    ko: "지금 바로 테이블 예약하기",
  },
  {
    en: "View full menu",
    ko: "전체 메뉴 보기",
  },
  {
    en: "Purchase a gift card",
    ko: "기프트카드 구매하기",
  },
];

const SectionHeader = ({ title }: { title: string }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.divider} />
  </View>
);

const TranslationCard = ({
  en,
  ko,
  green = false,
}: {
  en: string;
  ko: string;
  green?: boolean;
}) => (
  <View
    style={[
      styles.card,
      green ? styles.greenCard : styles.purpleCard,
    ]}
  >
    <Text style={styles.enText}>{en}</Text>
    <Text
      style={[
        styles.koText,
        green && styles.greenKoText,
      ]}
    >
      {ko}
    </Text>
  </View>
);

export default function TranslationResultScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.languageRow}>
          <View style={styles.languageChip}>
            <Text style={styles.chipText}>EN</Text>
          </View>

          <ArrowRight
            size={14}
            color="#9097B8"
            strokeWidth={1.8}
          />

          <View style={styles.languageChip}>
            <Text style={styles.chipText}>한국어</Text>
          </View>
        </View>

        <View style={styles.countChip}>
          <Text style={styles.chipText}>11문장</Text>
        </View>
      </View>

      {/* Restaurant Title */}
      <View style={styles.section}>
        <SectionHeader title="레스토랑 제목" />

        <View style={styles.titleCard}>
          <Text style={styles.enText}>
            Welcome to Restaurant Hubert
          </Text>

          <Text style={styles.titleKo}>
            레스토랑 휴버트에 오신 것을 환영합니다
          </Text>
        </View>
      </View>

      {/* Intro */}
      <View style={styles.section}>
        <SectionHeader title="소개 문구" />

        <View style={styles.cardList}>
          {introItems.map((item, index) => (
            <TranslationCard
              key={index}
              en={item.en}
              ko={item.ko}
            />
          ))}
        </View>
      </View>

      {/* Menu */}
      <View style={styles.section}>
        <SectionHeader title="메뉴 안내" />

        <View style={styles.cardList}>
          {menuItems.map((item, index) => (
            <TranslationCard
              key={index}
              en={item.en}
              ko={item.ko}
            />
          ))}
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.section}>
        <SectionHeader title="버튼 • 링크" />

        <View style={styles.cardList}>
          {buttonItems.map((item, index) => (
            <TranslationCard
              key={index}
              en={item.en}
              ko={item.ko}
              green
            />
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          총 11문장 번역 완료
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
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
  },

  content: {
    paddingHorizontal: 8,
    paddingTop: 20,
    paddingBottom: 40,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  languageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  languageChip: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 10,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  countChip: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 12,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  chipText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#4338CA",
  },

  section: {
    marginBottom: 24,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: "800",
    color: "#9097B8",
    letterSpacing: 0.7,
    textTransform: "uppercase",
  },

  divider: {
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

  cardList: {
    gap: 5,
  },

  card: {
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingTop: 9,
    paddingBottom: 12,
    borderLeftWidth: 3,
    gap: 2,
  },

  purpleCard: {
    backgroundColor: "#F9FAFB",
    borderLeftColor: "#EEF2FF",
  },

  greenCard: {
    backgroundColor: "#ECF9F5",
    borderLeftColor: "#C7E7DD",
  },

  enText: {
    fontSize: 11,
    lineHeight: 16,
    color: "#9CA3AF",
    fontWeight: "400",
  },

  koText: {
    fontSize: 13,
    lineHeight: 19,
    color: "#111827",
    fontWeight: "600",
  },

  titleKo: {
    fontSize: 14,
    lineHeight: 20,
    color: "#1E1B4B",
    fontWeight: "800",
  },

  greenKoText: {
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
    lineHeight: 16,
    color: "#9097B8",
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#D1D5DB",
  },
});