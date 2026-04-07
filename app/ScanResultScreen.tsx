import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScanResult } from "../components/ScanResultFolder/ScanResult";

export default function ScanResultScreen() {
  const { url } = useLocalSearchParams<{ url: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets(); // 여기서 안전 영역 가져오기
  console.log("ScanResultScreen 렌더링됨");

  const handleBack = () => {
    router.back();
  };

  // URL 없으면 임시 메시지
  if (!url) {
    return <ScanResult url="URL이 없습니다" onBack={handleBack} />;
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* Stack 옵션 */}
      <Stack.Screen options={{ title: "큐트래블", headerShown: false }} />
      <ScanResult url={url} onBack={handleBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});