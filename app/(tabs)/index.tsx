import { SafetyTipCard } from "@/components/Home/SafetyTipCard";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CountrySelectModal from "../../components/Home/CountrySelectModal";
import DateRangeModal from "../../components/Home/DateRangeModal";
import { HomeHeader } from "../../components/Home/HomeHeader";
import { RecentScanCard } from "../../components/Home/RecentScanCard";
import { SafetyScoreCard } from "../../components/Home/SafetyScoreCard";
import { TravelCard } from "../../components/Home/TravelCard";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] =
    useState(false);
  
  const [selectedCountry, setSelectedCountry] =
  useState("프랑스");

const [tempCountry, setTempCountry] =
  useState("프랑스");

  const [dateModalVisible, setDateModalVisible] =
  useState(false);

const [startDate, setStartDate] =
  useState("2026-03-10");

const [endDate, setEndDate] =
  useState("2026-03-14");

// 임시 선택용
const [tempStartDate, setTempStartDate] =
  useState<string | null>(startDate);

const [tempEndDate, setTempEndDate] =
  useState<string | null>(endDate);

  const calculateDuration = (
  startDate: string,
  endDate: string
) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diff =
    end.getTime() - start.getTime();

  return Math.floor(
    diff / (1000 * 60 * 60 * 24)
  ) + 1;
};

const calculateStatus = (
  startDate: string,
  endDate: string
) => {
  const today = new Date();

  const start = new Date(startDate);
  const end = new Date(endDate);

  // 시간 제거
  today.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  // 아직 시작 전
  if (today < start) {
    return "예정";
  }

  // 여행 중
  if (today >= start && today <= end) {
    return "여행중";
  }

  // 종료됨
  return "완료";
};
  return (
    
    <ScrollView>
      <HomeHeader />
      <View style={styles.viewcontent}>
        <TravelCard
  country={selectedCountry}

  startDate={startDate}
  endDate={endDate}

  duration={calculateDuration(
    startDate,
    endDate
  )}

  status={calculateStatus(
    startDate,
    endDate
  )}

  onPressInfo={() => {
    setTempCountry(selectedCountry);

    setModalVisible(true);
  }}

  onPressDate={() => {
    setTempStartDate(startDate);
    setTempEndDate(endDate);

    setDateModalVisible(true);
  }}
/>
        <CountrySelectModal
  visible={modalVisible}

  selectedCountry={tempCountry}

  onClose={() => {
    setModalVisible(false);
  }}

  onSelectCountry={(country) => {
    // 임시 선택만 변경
    setTempCountry(country);
  }}

  onConfirm={() => {
    // 여기서 실제 반영
    setSelectedCountry(tempCountry);

    setModalVisible(false);
  }}
/>
<DateRangeModal
  visible={dateModalVisible}

  startDate={tempStartDate}
  endDate={tempEndDate}

  onSelectStart={setTempStartDate}
  onSelectEnd={setTempEndDate}

  onClose={() => {
    setDateModalVisible(false);
  }}

  onConfirm={() => {
    setStartDate(tempStartDate!);
    setEndDate(tempEndDate!);

    setDateModalVisible(false);
  }}
/>
        <SafetyScoreCard totalScans={24} dangerScans={3} />
        <RecentScanCard />
        <SafetyTipCard tip="프랑스에서는 공공 Wi-Fi 사용 시 특히 주의가 필요합니다. QR 코드 스캔 전 주변 환경을 확인하고, 의심스러운 URL은 반드시 검사하세요." />

      </View>
    </ScrollView>
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
  viewcontent:{
    width: "100%",
  maxWidth: 393,
  paddingHorizontal: 24,
  marginTop: -40,
  }
});
