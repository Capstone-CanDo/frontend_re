import { useRouter } from "expo-router";
import { ScanLine } from "lucide-react-native";
import React, { useState } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import {
    Camera,
    useCameraDevice,
    useCameraPermission,
    useCodeScanner
} from "react-native-vision-camera";
import { Button } from "../ui/button";
import { styles } from "./camerastyle";

export default function QRScannerScreen() {
    console.log("QRScannerScreen 렌더링됨");
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");
    const router = useRouter();
  const [scanned, setScanned] = useState(false);

const codeScanner = useCodeScanner({
  codeTypes: ["qr"],
  onCodeScanned: (codes) => {
    if (scanned) return;

    const value = codes[0]?.value;
    if (!value) return;

    setScanned(true);

    router.push(`/ScanResultScreen?url=${encodeURIComponent(value)}`);
  },
});

  // ❗ 권한 확인 중
  console.log("hasPermission:", hasPermission);

  // ❗ 권한 없음
  if (!hasPermission) {
    console.log("권한 확인용");
  return (
    
    <View style={styles.center}>
      <Text>카메라 권한이 필요합니다</Text>
    
      <Button onPress={requestPermission}>
        <Text>권한 요청</Text>
      </Button>

      <Button onPress={() => Linking.openSettings()}>
        <Text>설정으로 이동</Text>
      </Button>
    </View>
    
  );
}
  /*if (!hasPermission) {
    return (
      <View style={localStyles.center}>
        <Text>카메라 권한이 필요합니다</Text>
        <Button onPress={requestPermission}>
          <Text>권한 허용하기</Text>
        </Button>
      </View>
    );
  }*/

  // ❗ 카메라 준비 안됨
  if (!device) {
    
    return (
      <View style={localStyles.center}>
        <Text>카메라 준비 중...</Text>
      </View>
    );
  }
  // ✅ 정상 렌더링

  return (
    
    <View style={{width: "100%", flex: 1}}>
      {/* 📷 카메라 */}
      <Camera
        style={{flex:1}}
        device={device}
        isActive={true}
        photo={true}
        video={false}
        codeScanner={codeScanner}
      />
      <View style={styles.scanWrapper}>
        <View style={styles.scanBox}>
          {/* 코너 4개 */}
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />

          {/* 중앙 아이콘 */}
          <View style={styles.iconcenter}>
            <ScanLine size={64} color="white" />
          </View>
        </View>

        {/* 텍스트 */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            QR코드를 스캔하여 결제해보세요.
          </Text>
          <Text style={styles.desc}>
            QR코드가 작동하지 않으면 카메라 권한을 확인하세요.
          </Text>
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});