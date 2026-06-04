import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Switch,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

import { BrowserBottomSheet } from "../components/WebView/BrowserBottomSheet";
import { styles } from "../components/WebView/styles";
export default function WebViewScreen() {
  const { url } =
    useLocalSearchParams<{ url: string }>();

  const router = useRouter();

  const webviewRef = useRef<WebView>(null);

  const [canGoBack, setCanGoBack] =
    useState(false);

  const [jsEnabled, setJsEnabled] =
    useState(false);

  const insets = useSafeAreaInsets();

  const safeUrl = url || "";

  const protocol = safeUrl.startsWith("https")
    ? "HTTPS"
    : "HTTP";

  const cleanUrl = safeUrl.replace(
    /^https?:\/\//,
    ""
  );

  const domain = cleanUrl.split("/")[0];

  const path =
    cleanUrl.replace(domain, "") || "/";

  const [currentUrl, setCurrentUrl] =
  useState(safeUrl);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      {/* ================= HEADER ================= */}
      <View style={styles.browserHeader}>
        <View style={styles.headerRow}>
          {/* BACK */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              if (canGoBack) {
                webviewRef.current?.goBack();
              } else {
                router.back();
              }
            }}
          >
            <Ionicons
              name="chevron-back"
              size={18}
              color="#4B5274"
            />
          </TouchableOpacity>

          {/* URL BAR */}
          <View style={styles.urlBar}>
            <View
  style={[
    styles.protocolBadge,
    {
      backgroundColor:
        protocol === "HTTPS"
          ? "#059669"
          : "#C86D3E",
    },
  ]}
>
              <Text style={styles.protocolText}>
                {protocol}
              </Text>
            </View>

            <Text
              style={styles.domainText}
              numberOfLines={1}
            >
              {domain}
            </Text>

            <Text
              style={styles.pathText}
              numberOfLines={1}
            >
              {path}
            </Text>
          </View>

          {/* REFRESH */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() =>
              webviewRef.current?.reload()
            }
          >
            <Ionicons
              name="refresh"
              size={16}
              color="#4B5274"
            />
          </TouchableOpacity>

          {/* CLOSE */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="close"
              size={16}
              color="#4B5274"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* ================= JS CARD ================= */}
      <View
        style={[
          styles.jsCard,
          {
            backgroundColor: jsEnabled
              ? "#154FFC"
              : "#154FFC",
          },
        ]}
      >
        <View style={styles.jsCardRow}>
          <View style={styles.jsLeft}>
            <View style={styles.jsIconBox}>
              <Ionicons
                name={
                  jsEnabled
                    ? "warning-outline"
                    : "shield-outline"
                }
                size={18}
                color="#FFFFFF"
              />
            </View>

            <View>
              <Text style={styles.jsTitle}>
                {jsEnabled
                  ? "보안 브라우저 비활성화"
                  : "보안 브라우저 활성화"}
              </Text>

              <Text style={styles.jsSub}>
                {jsEnabled
                  ? "모든 기능이 작동합니다"
                  : "기능이 일부 차단된 상태입니다"}
              </Text>
            </View>
          </View>

          {/* TOGGLE */}
          <Switch
            value={jsEnabled}
            onValueChange={() =>
              setJsEnabled((prev) => !prev)
            }
            trackColor={{
              false:
                "rgba(255,255,255,0.25)",
              true:
                "rgba(255,255,255,0.9)",
            }}
            thumbColor={
              jsEnabled
                ? "#154FFC"
                : "#154FFC"
            }
          />
        </View>
      </View>

      {/* ================= WEBVIEW ================= */}
      <View style={styles.webviewContainer}>
        <WebView
  key={jsEnabled ? "js-on" : "js-off"}
  ref={webviewRef}
  source={{ uri: safeUrl }}
  javaScriptEnabled={jsEnabled}
  domStorageEnabled={jsEnabled}
  setSupportMultipleWindows={false}
  onNavigationStateChange={(navState) => {
    setCanGoBack(navState.canGoBack);
    setCurrentUrl(navState.url);
  }}
/>
      </View>

      {/* ================= BOTTOM SHEET ================= */}
      <BrowserBottomSheet
        bottomInset={insets.bottom}
        url = {currentUrl}
      />
    </View>
  );
}