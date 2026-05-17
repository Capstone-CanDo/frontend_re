import {
  Globe,
  ShieldAlert
} from "lucide-react-native";

import React, { useEffect, useRef, useState } from "react";

import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { WebView } from "react-native-webview";

import { BrowserBottomSheet } from "./BrowserBottomSheet";

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

export function WebViewModal({
  url,
  isOpen,
  onClose,
}: WebViewModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  const [alerts, setAlerts] = useState<
    SecurityAlert[]
  >([]);

  const [showAlert, setShowAlert] =
    useState(false);

  const [javascriptEnabled, setJavascriptEnabled] =
    useState(false);

  const [canGoBack, setCanGoBack] =
    useState(false);

  const webviewRef = useRef<WebView>(null);

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
              description:
                "카드 입력 필드가 발견되었습니다.",
            },
          ];

          setAlerts(detected);
          setShowAlert(true);
        }
      }, 1500);
    }
  }, [isOpen]);

  const protocol = url.startsWith("https")
    ? "HTTPS"
    : "HTTP";

  const cleanUrl = url.replace(
    /^https?:\/\//,
    ""
  );

  const domain = cleanUrl.split("/")[0];

  const path =
    cleanUrl.replace(domain, "").slice(0, 20) ||
    "/";

  return (
    <Modal visible={isOpen} animationType="slide">
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        {/* HEADER */}
        

        {/* JS CARD */}
        <View
          style={[
            styles.jsCard,
            {
              backgroundColor:
                javascriptEnabled
                  ? "#C86D3E"
                  : "#5D57A9",
            },
          ]}
        >
          <View style={styles.jsCardRow}>
            {/* LEFT */}
            <View style={styles.jsLeft}>
              <View style={styles.jsIconBox}>
                {javascriptEnabled ? (
                  <ShieldAlert
                    size={18}
                    color="#FFFFFF"
                  />
                ) : (
                  <Globe
                    size={18}
                    color="#FFFFFF"
                  />
                )}
              </View>

              <View style={styles.jsTextWrap}>
                <Text style={styles.jsTitle}>
                  {javascriptEnabled
                    ? "자바스크립트 활성화"
                    : "안전 미리보기 모드"}
                </Text>

                <Text style={styles.jsSub}>
                  {javascriptEnabled
                    ? "모든 기능이 작동합니다"
                    : "스크립트가 차단돼 있어요"}
                </Text>
              </View>
            </View>

            {/* TOGGLE */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.toggle,
                {
                  backgroundColor:
                    javascriptEnabled
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.25)",

                  alignItems:
                    javascriptEnabled
                      ? "flex-end"
                      : "flex-start",
                },
              ]}
              onPress={() =>
                setJavascriptEnabled(
                  !javascriptEnabled
                )
              }
            >
              <View
                style={[
                  styles.toggleCircle,
                  {
                    backgroundColor:
                      javascriptEnabled
                        ? "#C86D3E"
                        : "#FFFFFF",
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* WEBVIEW */}
        <View style={styles.webviewContainer}>
          {isLoading ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" />

              <Text style={styles.loadingText}>
                분석 중...
              </Text>
            </View>
          ) : (
            <WebView
              ref={webviewRef}
              source={{ uri: url }}
              javaScriptEnabled={
                javascriptEnabled
              }
              domStorageEnabled={
                javascriptEnabled
              }
              startInLoadingState
              onNavigationStateChange={(
                navState
              ) => {
                setCanGoBack(
                  navState.canGoBack
                );
              }}
            />
          )}
        </View>

        {/* BOTTOM SHEET */}
        <BrowserBottomSheet bottomInset={0} />

        {/* ALERT */}
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
                onPress={() =>
                  setShowAlert(false)
                }
              >
                <Text style={styles.ignoreText}>
                  무시
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeBtn}
                onPress={onClose}
              >
                <Text style={styles.closeText}>
                  닫기
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  /* HEADER */
  browserHeader: {
  minHeight: 52,

  flexDirection: "row",
  alignItems: "center",

  paddingHorizontal: 12,
  paddingVertical: 6,

  backgroundColor: "#FFFFFF",

  borderBottomWidth: 1,
  borderBottomColor: "#ECEDF5",
},
  iconButton: {
    width: 34,
    height: 34,

    borderRadius: 10,

    backgroundColor: "#EDEEF7",

    justifyContent: "center",
    alignItems: "center",
  },

  urlBar: {
    flex: 1,
    height: 34,

    marginHorizontal: 8,
    paddingHorizontal: 10,

    borderRadius: 10,

    backgroundColor: "#EEF2FF",

    flexDirection: "row",
    alignItems: "center",
  },

  protocolBadge: {
    minWidth: 40,
    height: 18,

    borderRadius: 6,

    paddingHorizontal: 6,

    justifyContent: "center",
    alignItems: "center",
  },

  protocolText: {
    fontSize: 9,
    fontWeight: "800",
    lineHeight: 14,

    color: "#FFFFFF",
  },

  domainText: {
    marginLeft: 8,

    maxWidth: 95,

    fontSize: 13,
    fontWeight: "700",
    lineHeight: 20,

    color: "#1E1B4B",
  },

  pathText: {
    flex: 1,

    marginLeft: 4,

    fontSize: 13,
    fontWeight: "400",
    lineHeight: 20,

    color: "#9097B8",
  },

  /* JS CARD */
  jsCard: {
    marginTop: 16,
    marginHorizontal: 14,

    borderRadius: 20,

    paddingHorizontal: 16,
    paddingVertical: 13,
  },

  jsCardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  jsLeft: {
    flexDirection: "row",
    alignItems: "center",

    flex: 1,
  },

  jsIconBox: {
    width: 38,
    height: 38,

    borderRadius: 13,

    backgroundColor:
      "rgba(255,255,255,0.18)",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,
  },

  jsTextWrap: {
    justifyContent: "center",
  },

  jsTitle: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 20,

    color: "#FFFFFF",

    marginBottom: 2,
  },

  jsSub: {
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16,

    color: "rgba(255,255,255,0.65)",
  },

  toggle: {
    width: 40,
    height: 24,

    borderRadius: 12,

    justifyContent: "center",

    paddingHorizontal: 3,
  },

  toggleCircle: {
    width: 18,
    height: 18,

    borderRadius: 999,
  },

  /* WEBVIEW */
  webviewContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",

    overflow: "hidden",
  },

  loader: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 10,

    fontSize: 13,

    color: "#6B7280",
  },

  /* ALERT */
  alertBox: {
    position: "absolute",

    left: 16,
    right: 16,
    bottom: 24,

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    padding: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 20,

    elevation: 10,
  },

  alertTitle: {
    fontSize: 15,
    fontWeight: "700",

    color: "#111827",

    marginBottom: 6,
  },

  alertDesc: {
    fontSize: 13,
    lineHeight: 20,

    color: "#6B7280",

    marginBottom: 16,
  },

  alertBtns: {
    flexDirection: "row",
    gap: 10,
  },

  ignoreBtn: {
    flex: 1,
    height: 44,

    borderRadius: 12,

    backgroundColor: "#F3F4F6",

    justifyContent: "center",
    alignItems: "center",
  },

  closeBtn: {
    flex: 1,
    height: 44,

    borderRadius: 12,

    backgroundColor: "#4338CA",

    justifyContent: "center",
    alignItems: "center",
  },

  ignoreText: {
    fontSize: 14,
    fontWeight: "600",

    color: "#374151",
  },

  closeText: {
    fontSize: 14,
    fontWeight: "700",

    color: "#FFFFFF",
  },
});