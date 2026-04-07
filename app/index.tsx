import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";
import { Text } from "react-native";

export default function Index() {
  const { user, isLoading } = useAuth();

  // 🔥 로딩 중이면 아무것도 안 보여줌 (중요)
  if (isLoading) return <Text>Loading...</Text>;

  if (user) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/login" />;
}