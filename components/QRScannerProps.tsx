import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface QRScannerProps {
  onScan: (url: string) => void;
}

export default function QRScanner({ onScan }: QRScannerProps) {
  const router = useRouter();
  const mockScans = [
    {
      label: "정상 URL 테스트",
      url: "https://www.google.com",
    },
    {
      label: "악성 URL 테스트 (피싱)",
      url: "https://g00gle-login-verify.suspicious-domain.xyz/secure",
    },
    {
      label: "의심 URL 테스트",
      url: "https://bit.ly/unknown-redirect",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>

        {/* 상단 아이콘 */}
        <View style={styles.header}>
          <View style={styles.iconCircle}>
            <Ionicons name="qr-code" size={40} color="white" />
          </View>

          <Text style={styles.title}>QR 안심 스캔</Text>

          <Text style={styles.subtitle}>
            해외여행 시 QR 코드를 안전하게 확인하세요
          </Text>
        </View>

        {/* 카메라 영역 */}
        <View style={styles.cameraBox}>
          <Ionicons name="camera-outline" size={60} color="#9ca3af" />

          <Text style={styles.cameraText}>
            실제 환경에서는 카메라를 통해{"\n"}
            QR 코드를 스캔합니다
          </Text>
        </View>

        {/* 테스트 버튼 */}
        <Text style={styles.sampleTitle}>테스트용 샘플:</Text>

        {mockScans.map((scan, index) => (
          <TouchableOpacity
            key={index}
              style={styles.scanButton}
               onPress={() => router.push(`/ScanResultScreen?url=${encodeURIComponent(scan.url)}`)}
               >
            <Ionicons name="qr-code-outline" size={20} color="#000" />

            <View style={styles.scanTextBox}>
              <Text style={styles.scanLabel}>{scan.label}</Text>
              <Text style={styles.scanUrl} numberOfLines={1}>
                {scan.url}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* 사용 팁 */}
        <View style={styles.tipBox}>
          <Text style={styles.tipTitle}>💡 사용 팁</Text>

          <Text style={styles.tip}>• QR 코드 스캔 전 주변을 확인하세요</Text>
          <Text style={styles.tip}>• 의심스러운 위치의 QR 코드는 주의하세요</Text>
          <Text style={styles.tip}>• 스캔 결과를 꼼꼼히 확인하세요</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },

  inner: {
    padding: 24,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  iconCircle: {
    width: 80,
    height: 80,
    backgroundColor: "#2563eb",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 6,
  },

  subtitle: {
    color: "#6b7280",
    textAlign: "center",
  },

  cameraBox: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#d1d5db",
    backgroundColor: "white",
    padding: 40,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 25,
  },

  cameraText: {
    color: "#6b7280",
    textAlign: "center",
    marginTop: 10,
  },

  sampleTitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 10,
  },

  scanButton: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 10,
    alignItems: "center",
  },

  scanTextBox: {
    marginLeft: 10,
    flex: 1,
  },

  scanLabel: {
    fontWeight: "600",
    marginBottom: 3,
  },

  scanUrl: {
    fontSize: 12,
    color: "#6b7280",
  },

  tipBox: {
    marginTop: 30,
    backgroundColor: "#f3f4f6",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  tipTitle: {
    fontWeight: "600",
    marginBottom: 6,
  },

  tip: {
    fontSize: 13,
    color: "#374151",
  },

});