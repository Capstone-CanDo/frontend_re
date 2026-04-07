import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Login } from "../../components/Login/login";

export default function LoginScreen() {
 const router = useRouter();
    const handleLogin = () => {
    router.push("/(tabs)"); // 원하는 경로
  };
  return (
    <View style={styles.container}>
      <Login onLogin={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});