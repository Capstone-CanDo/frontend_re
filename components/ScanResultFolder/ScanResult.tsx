import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebViewModal } from "../WebView/WebView";
import { styles } from "./styles";

interface ScanResultProps {
  url: string;
  onBack: () => void;
}

export function ScanResult({ url, onBack }: ScanResultProps) {
  const [showRedirects, setShowRedirects] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isWebViewOpen, setIsWebViewOpen] = useState(false);

  const analyzeUrl = (url: string) => {
    if (url.includes("g00gle") || url.includes("suspicious")) {
      return { status: "malicious", message: "위험한 사이트에요" };
    }
    if (url.includes("bit.ly")) {
      return { status: "suspicious", message: "주의가 필요해요" };
    }
    return { status: "safe", message: "안전한 사이트에요" };
  };

  const result = analyzeUrl(url);

  const handleCopy = () => {
    // RN에서는 Clipboard 따로 필요
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>큐트캡</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* 상태 */}
        <View style={styles.card}>
          <Text style={styles.statusText}>{result.message}</Text>
        </View>

        {/* 버튼 */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowRedirects(!showRedirects)}
        >
          <Text>URL 결과 보기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCopy}>
          <Text>{copied ? "복사됨!" : "URL 복사"}</Text>
        </TouchableOpacity>

        {/* 리다이렉션 */}
        {showRedirects && (
          <View style={styles.card}>
            <Text>리다이렉션 정보 (예시)</Text>
            <Text>{url}</Text>
          </View>
        )}

        {/* 안전할 때만 */}
        {result.status === "safe" && (
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => setIsWebViewOpen(true)}
          >
            <Text style={{ color: "#fff" }}>보안 브라우저로 열기</Text>
          </TouchableOpacity>
        )}

        {/* 위험 */}
        {result.status !== "safe" && (
          <View style={styles.warning}>
            <Text style={{ color: "red" }}>
              ⚠️ 위험할 수 있습니다
            </Text>
          </View>
        )}
      </ScrollView>

      {/* WebView */}
      <WebViewModal
        url={url}
        isOpen={isWebViewOpen}
        onClose={() => setIsWebViewOpen(false)}
      />
    </View>
  );
}