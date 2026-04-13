import { Stack } from "expo-router";

export default function AuthLayout() {
    console.log("🔥 login 화면 진입");
  return <Stack screenOptions={{ headerShown: false }} />;
}