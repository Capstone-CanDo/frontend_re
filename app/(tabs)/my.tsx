import { Button } from "@/components/ui/button";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function MyPageScreen() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.replace("/(auth)/login"); // 🔥 추가 추천
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>마이페이지</Text>
      <Button onPress={handleLogout}>로그아웃</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});