import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Emergency from "../../components/EmergencyContact";

export default function EmergencyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Emergency country="프랑스" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});