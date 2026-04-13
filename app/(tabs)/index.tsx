import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { HomeHeader } from "../../components/Home/HomeHeader";
import { RecentScanCard } from "../../components/Home/RecentScanCard";
import { SafetyScoreCard } from "../../components/Home/SafetyScoreCard";
import { TravelCard } from "../../components/Home/TravelCard";
import { SafetyTipCard } from "@/components/Home/SafetyTipCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.content}>
        <TravelCard
          country="프랑스"
          startDate="2026년 3월 10일"
          endDate="3월 14일"
          duration={5}
          status="완료"
        />
        <SafetyScoreCard totalScans={24} dangerScans={3} />
        <RecentScanCard />
        <SafetyTipCard tip="프랑스에서는 공공 Wi-Fi 사용 시 특히 주의가 필요합니다. QR 코드 스캔 전 주변 환경을 확인하고, 의심스러운 URL은 반드시 검사하세요." />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },

  content: {
    padding: 16,
    gap: 16,
  },
});
