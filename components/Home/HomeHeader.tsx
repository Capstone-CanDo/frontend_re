import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../constants/index";

export function HomeHeader() {
  return (
    <View style={styles.container}>
      {/* 왼쪽: 인사말 */}
      <View style={styles.textGroup}>
        <Text style={styles.heading}>안녕하세요!</Text>
        <Text style={styles.subheading}>안전한 여행 되세요</Text>
      </View>

      {/* 오른쪽: 아이콘 버튼 */}
      <TouchableOpacity style={styles.iconBtn}>
        <Ionicons name="shield-checkmark-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 28,
    paddingHorizontal: 24,
    height: 144,
    backgroundColor: theme.colors.primary,
  },

  textGroup: {
    flexDirection: "column",
    gap: 4,
  },

  heading: {
    fontSize: 24,
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: 32,
  },

  subheading: {
    fontSize: 16,
    fontWeight: "400",
    color: "#E0DEDE",
    lineHeight: 24,
  },

  iconBtn: {
    width: 48,
    height: 48,
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
});
