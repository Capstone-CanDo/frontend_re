import { ArrowRightLeft } from "lucide-react-native";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function TranslationBuyScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* TOP */}
      <View style={styles.topRow}>
        <View style={styles.languageRow}>
          <View style={styles.langBox}>
            <Text style={styles.langText}>
              EN
            </Text>
          </View>

          <ArrowRightLeft
            size={13}
            color="#9097B8"
          />

          <View style={styles.langBox}>
            <Text style={styles.langText}>
              한국어
            </Text>
          </View>
        </View>

        <View style={styles.countBox}>
          <Text style={styles.countText}>
            9문장
          </Text>
        </View>
      </View>

      {/* PAGE TITLE */}
      <SectionTitle title="페이지 제목" />

      <View style={styles.titleCard}>
        <Text style={styles.originalText}>
          Checkout
        </Text>

        <Text style={styles.translatedTitle}>
          결제
        </Text>
      </View>

      {/* 개인정보 */}
      <SectionTitle title="개인 정보" />

      <View style={styles.fieldList}>
        <FieldCard
          original="First name"
          translated="이름"
        />

        <FieldCard
          original="Last name"
          translated="성"
        />

        <FieldCard
          original="Email"
          translated="이메일 주소"
        />
      </View>

      {/* 결제 정보 */}
      <SectionTitle title="결제 정보" />

      <View style={styles.fieldList}>
        <WarningFieldCard
          original="Card number"
          translated="카드 번호"
        />

        <WarningFieldCard
          original="Expiry date"
          translated="카드 만료일"
        />

        <WarningFieldCard
          original="CVC / Security code"
          translated="보안 코드 (CVC)"
        />
      </View>

      {/* 버튼 */}
      <SectionTitle title="버튼" />

      <View style={styles.fieldList}>
        <SafeFieldCard
          original="Pay now"
          translated="바로 구매하기"
        />

        <SafeFieldCard
          original="Your payment information is secure and encrypted"
          translated="결제 정보는 암호화로 보호됩니다"
        />
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

function SectionTitle({
  title,
}: {
  title: string;
}) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>

      <View style={styles.line} />
    </View>
  );
}

function FieldCard({
  original,
  translated,
}: {
  original: string;
  translated: string;
}) {
  return (
    <View style={styles.fieldCard}>
      <Text style={styles.fieldOriginal}>
        {original}
      </Text>

      <Text style={styles.fieldTranslated}>
        {translated}
      </Text>
    </View>
  );
}

function WarningFieldCard({
  original,
  translated,
}: {
  original: string;
  translated: string;
}) {
  return (
    <View style={styles.warningCard}>
      <Text style={styles.fieldOriginal}>
        {original}
      </Text>

      <Text style={styles.warningText}>
        {translated}
      </Text>
    </View>
  );
}

function SafeFieldCard({
  original,
  translated,
}: {
  original: string;
  translated: string;
}) {
  return (
    <View style={styles.safeCard}>
      <Text style={styles.fieldOriginal}>
        {original}
      </Text>

      <Text style={styles.safeText}>
        {translated}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  languageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  langBox: {
    height: 32,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
  },

  langText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#4338CA",
  },

  countBox: {
    height: 30,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
  },

  countText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#4338CA",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
    marginTop: 6,
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

  titleCard: {
    backgroundColor: "#EEF2FF",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 14,
    marginBottom: 12,
  },

  originalText: {
    fontSize: 11,
    color: "#9097B8",
    marginBottom: 4,
  },

  translatedTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#1E1B4B",
  },

  fieldList: {
    gap: 5,
    marginBottom: 12,
  },

  fieldCard: {
    backgroundColor: "#F9FAFB",
    borderLeftWidth: 2.5,
    borderLeftColor: "#EEF2FF",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingTop: 9,
    paddingBottom: 12,
  },

  warningCard: {
    backgroundColor: "#FEF6ED",
    borderLeftWidth: 2.5,
    borderLeftColor: "#F6D7B4",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingTop: 9,
    paddingBottom: 12,
  },

  safeCard: {
    backgroundColor: "#ECF9F5",
    borderLeftWidth: 2.5,
    borderLeftColor: "#C7E7DD",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingTop: 9,
    paddingBottom: 12,
  },

  fieldOriginal: {
    fontSize: 11,
    color: "#9CA3AF",
    marginBottom: 2,
  },

  fieldTranslated: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
  },

  warningText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#9D5F19",
  },

  safeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#0D553F",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
    marginBottom: 20,
  },

  footerText: {
    fontSize: 11,
    color: "#9097B8",
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#D1D5DB",
  },
});