import { StyleSheet, Text, View } from "react-native";

export default function EmergencyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>긴급연락처 화면</Text>
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