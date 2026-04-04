import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/WebView/styles";
import { BrowserBottomSheet } from "../components/WebView/BrowserBottomSheet";

export default function WebViewScreen() {
  const { url } = useLocalSearchParams<{ url: string }>();
  const router = useRouter();
  const webviewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [jsEnabled, setJsEnabled] = useState(false);
  // 기본값 false = JS 비활성 (안전 미리보기 모드)

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() =>
              canGoBack ? webviewRef.current?.goBack() : router.back()
            }
            style={styles.headerIconBtn}
          >
            <Ionicons name="chevron-back" size={16} color="#0A0A0A" />
          </TouchableOpacity>
          <Ionicons
            name="shield-checkmark"
            size={20}
            color="rgb(20, 71, 230)"
          />
          <Text style={styles.headerTitle}>보안 브라우저</Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => webviewRef.current?.reload()}
            style={styles.headerIconBtn}
          >
            <Ionicons name="refresh" size={16} color="#0A0A0A" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.headerIconBtn}
          >
            <Ionicons name="close" size={16} color="#0A0A0A" />
          </TouchableOpacity>
        </View>
      </View>

      {/* URL 바 */}
      <View style={styles.urlBarWrapper}>
        <View style={styles.urlContainer}>
          <Text style={{ fontSize: 12 }}>🌐</Text>
          <Text numberOfLines={1} style={styles.urlText}>
            {url}
          </Text>
        </View>

        {!jsEnabled && (
          <TouchableOpacity
            onPress={() => setJsEnabled(true)}
            style={styles.detailBtn}
          >
            <Text style={styles.detailBtnText}>자세히 보기</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* 웹뷰 */}
      <WebView
        key={jsEnabled ? "js-on" : "js-off"}
        ref={webviewRef}
        source={{ uri: url }}
        javaScriptEnabled={jsEnabled}
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
        }}
      />

      {/* 바텀시트 */}
      <BrowserBottomSheet />
    </View>
  );
}
