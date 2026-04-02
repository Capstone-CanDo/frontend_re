import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#155DFC",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "스캔기록",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />

      {/* 중앙 스캔 버튼 */}
      <Tabs.Screen
        name="scan"
        options={{
          title: "",
          tabBarButton: () => (
            <TouchableOpacity
              style={styles.scanButton}
              onPress={() => router.navigate("/scan")}
            >
              <Ionicons name="scan" size={28} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="emergency"
        options={{
          title: "긴급연락처",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="my"
        options={{
          title: "마이",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 100,
    paddingBottom: 10,
  },

  scanButton: {
    position: "absolute",
    top: -20,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#155DFC",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
