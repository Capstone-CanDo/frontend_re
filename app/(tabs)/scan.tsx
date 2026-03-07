import React from "react";
import { Alert } from "react-native";
import QRScanner from "../../components/QRScannerProps";

export default function ScanScreen() {

  const handleScan = (url: string) => {
    Alert.alert("QR 스캔 결과", url);
  };

  return <QRScanner onScan={handleScan} />;
}