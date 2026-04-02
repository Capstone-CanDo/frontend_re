import { Redirect } from "expo-router";

export default function Index() {
  const isLoggedIn = false; // 나중에 context로 변경

  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/login" />;
}