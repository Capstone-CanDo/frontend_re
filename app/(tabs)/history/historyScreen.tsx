import { StyleSheet, View } from "react-native";
import { ScanHistory } from "../../../components/ScanHistory/ScanHistory";

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <ScanHistory />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});