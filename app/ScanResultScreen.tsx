import { Stack, useLocalSearchParams } from "expo-router"; // 쿼리 받기
import React from "react";
import { ScanResult } from "../components/ScanResult";

export default function ScanResultScreen() {
  const { url } = useLocalSearchParams<{ url: string }>(); // 쿼리 타입 명시
  console.log("ScanResultScreen 렌더링됨");
  const handleBack = () => {
    // 뒤로가기 로직j
    console.log("뒤로가기 클릭됨");
  };

  // URL이 없으면 임시 메시지 표시
  if (!url) {
    return <ScanResult url="URL이 없습니다" onBack={handleBack} />;
  }
  console.log("체크1 - url:", url);
console.log("체크2 - ScanResult 타입:", typeof ScanResult);

if (typeof ScanResult !== 'function') {
  //return <View><Text>ScanResult 컴포넌트 로드 실패!</Text></View>;
}
  return (<>
    <Stack.Screen options={{ title: "큐트래블" }} />
  <ScanResult url={url} onBack={handleBack} />
  </>);
}