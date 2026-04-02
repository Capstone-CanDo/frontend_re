import { StyleSheet, View } from "react-native";
import QRScannerScreen from "../../../components/Scan/QRScanCamera";

export default function ScancameraScreen() {
  return (
    <View style={styles.container}>
          <QRScannerScreen />
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