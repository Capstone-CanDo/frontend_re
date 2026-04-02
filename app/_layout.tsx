import { AuthProvider } from "@/context/AuthContext";
import { useFonts } from "expo-font";
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";
import 'react-native-reanimated';




export default function RootLayout() {
  

  const [fontsLoaded] = useFonts({
    Pretendard: require("../assets/font/Pretendard-Regular.ttf"),
    PretendardMedium: require("../assets/font/Pretendard-Medium.ttf"), // 추가 추천
    PretendardBold: require("../assets/font/Pretendard-Bold.ttf"),
  });

  // 🔥 폰트 로딩 끝날 때까지 렌더링 막기
  if (!fontsLoaded) {
    console.log("폰트");
  return (
    
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading...</Text>
    </View>
  );
}

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </AuthProvider>
  );
}