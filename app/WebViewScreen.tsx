import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { WebView } from "react-native-webview";

export default function WebViewScreen() {
  const { url } = useLocalSearchParams<{ url: string }>();
  const router = useRouter();

  const webviewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* 헤더 */}
      <View style={{ flexDirection: "row", padding: 10 }}>
        <TouchableOpacity
          onPress={() => {
            if (canGoBack) {
              webviewRef.current?.goBack();
            } else {
              router.back();
            }
          }}
        >
          <Text>←</Text>
        </TouchableOpacity>

        <Text style={{ marginLeft: 10 }}>보안 브라우저</Text>
      </View>

      {/* 웹뷰 */}
      <WebView
        ref={webviewRef}
        source={{ uri: url }}
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
        }}
      />
    </View>
  );
}