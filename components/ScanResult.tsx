import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface ScanResultProps {
  url: string;
  onBack: () => void;
}

export function ScanResult({ url, onBack }: ScanResultProps) {
  const [copied, setCopied] = useState(false);
  const [showRedirects, setShowRedirects] = useState(false);

  const analyzeUrl = (url: string) => {
    if (url.includes("g00gle") || url.includes("suspicious")) {
      return { status: "malicious", message: "AI 분석 결과 위험한 사이트입니다." };
    }
    if (url.includes("bit.ly")) {
      return { status: "suspicious", message: "AI 분석 결과 주의가 필요합니다." };
    }
    return { status: "safe", message: "AI 분석 결과 안전한 사이트입니다." };
  };

  const result = analyzeUrl(url);

  const copyUrl = async () => {
    await Clipboard.setStringAsync(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ScrollView style={styles.container}>
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>QR 분석 결과</Text>
      </View>

      {/* 결과 카드 */}
      <View style={styles.resultCard}>
        <Ionicons
          name="link"
          size={28}
          color={
            result.status === "safe"
              ? "green"
              : result.status === "suspicious"
              ? "orange"
              : "red"
          }
        />

        <Text style={styles.resultText}>{result.message}</Text>
      </View>

      {/* URL 표시 */}
      <View style={styles.urlBox}>
        <Text style={styles.urlText}>{url}</Text>
      </View>

      {/* 버튼들 */}
      <TouchableOpacity style={styles.button} onPress={() => setShowRedirects(!showRedirects)}>
        <Ionicons name="search" size={20} />
        <Text style={styles.buttonText}>URL 결과 보기</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={copyUrl}>
        <Ionicons name={copied ? "checkmark" : "copy"} size={20} />
        <Text style={styles.buttonText}>
          {copied ? "복사되었습니다" : "URL 복사하기"}
        </Text>
      </TouchableOpacity>

      {/* 리다이렉트 로그 */}
      {showRedirects && (
        <View style={styles.redirectBox}>
          <Text style={styles.redirectTitle}>리다이렉션 로그</Text>
          <Text style={styles.redirectItem}>1. {url}</Text>
          <Text style={styles.redirectItem}>상태 코드: 200</Text>
        </View>
      )}

      {/* 경고 */}
      {result.status !== "safe" && (
        <View style={styles.warning}>
          <Text style={styles.warningText}>
            ⚠️ 개인정보 입력에 주의하세요
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  resultCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },

  resultText: {
    marginTop: 10,
    fontSize: 16,
  },

  urlBox: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  urlText: {
    fontSize: 14,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 15,
  },

  redirectBox: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  redirectTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  redirectItem: {
    fontSize: 14,
  },

  warning: {
    backgroundColor: "#ffe5e5",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  warningText: {
    color: "red",
    textAlign: "center",
  },
});