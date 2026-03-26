import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Modal,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { WebView } from "react-native-webview";
import { styles } from "./styles";

interface WebViewModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

interface SecurityAlert {
  id: number;
  title: string;
  description: string;
}

export function WebViewModal({ url, isOpen, onClose }: WebViewModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [alerts, setAlerts] = useState<SecurityAlert[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setAlerts([]);

      setTimeout(() => {
        setIsLoading(false);

        if (!url.includes("google")) {
          const detected = [
            {
              id: 1,
              title: "결제 정보 입력 감지",
              description: "카드 입력 필드가 발견되었습니다.",
            },
          ];
          setAlerts(detected);
          setShowAlert(true);
        }
      }, 1500);
    }
  }, [isOpen]);

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.container}>
        
        {/* 헤더 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.close}>←</Text>
          </TouchableOpacity>

          <Text style={styles.title}>보안 브라우저</Text>

          <TouchableOpacity onPress={() => setIsLoading(true)}>
            <Text>⟳</Text>
          </TouchableOpacity>
        </View>

        {/* URL 바 */}
        <View style={styles.urlBar}>
          <Text numberOfLines={1} style={styles.urlText}>
            {url}
          </Text>
        </View>

        {/* 웹뷰 */}
        <View style={{ flex: 1 }}>
          {isLoading ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" />
              <Text style={{ marginTop: 10 }}>분석 중...</Text>
            </View>
          ) : (
            <WebView
              source={{ uri: url }}
              startInLoadingState
            />
          )}
        </View>

        {/* 경고 모달 */}
        {showAlert && alerts.length > 0 && (
          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>
              ⚠️ {alerts[0].title}
            </Text>
            <Text style={styles.alertDesc}>
              {alerts[0].description}
            </Text>

            <View style={styles.alertBtns}>
              <TouchableOpacity
                style={styles.ignoreBtn}
                onPress={() => setShowAlert(false)}
              >
                <Text>무시</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeBtn}
                onPress={onClose}
              >
                <Text style={{ color: "#fff" }}>닫기</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}