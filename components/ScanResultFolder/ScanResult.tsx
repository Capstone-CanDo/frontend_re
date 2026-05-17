import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Sparkles } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { XAI_EXPLANATIONS } from "../../data/xaiTexts";
import { AnalyzeResult, analyzeUrl, Explanation } from "../../util/urlAnaylze";
import { validateUrl } from "../../util/UrlValid";
import DangerResultCard from "./DangerResultCard";
import SafeRedirectLog from "./Saferedirectlog";
import SafeResultCard from "./SafeResultCard";
import { styles } from "./styles";
import XaiDangerCard from "./XaiDangerCard";
import XaiSafeCard from "./XaiSafeCard";

interface ScanResultProps {
  url: string;
  onBack: () => void;
}



export function ScanResult({ url, onBack }: ScanResultProps) {
  
  const [result, setResult] = useState<AnalyzeResult | null>(null);
  const [XaiExplanation, setXaiExplanation] = 
  useState<Explanation | null>(null);
  const [showRedirects, setShowRedirects] = useState(false);
  const [copied, setCopied] = useState(false);

  type ExplanationLevel = "beginner" | "intermediate" | "expert";
  const [explanationLevel, setExplanationLevel] =
    useState<ExplanationLevel>("beginner");

  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // ✅ 1. URL 분석
useEffect(() => {
  const fetchResult = async () => {
    try {
      // URL 검증
      const validation = validateUrl(url);

      if (!validation.isValid || !validation.normalizedUrl) {
        setErrorMessage("유효하지 않은 URL입니다.");
        setError(true);
        return;
      }

      const normalizedUrl = validation.normalizedUrl;
      console.log("검증된 URL:", normalizedUrl);

      // SecureStore에서 JWT 꺼내기
      const token = await SecureStore.getItemAsync("token");
      console.log("토큰 확인:", token);

      if (!token) {
        throw new Error("토큰이 없습니다");
      }

      // 서버에 URL 분석 요청
      const res = await analyzeUrl(normalizedUrl, token);
      setResult(res);
      console.log("서버 응답:", res);
    } catch (e) {
      console.error("URL 분석 실패:", e);
      setError(true);
    }
  };

  if (url) {
    fetchResult();
  }
}, [url]);

  type Status = "safe" | "malicious";
// status 변환 함수 추가
const convertStatus = (is_phishing: boolean): Status => {
  return is_phishing ? "malicious" : "safe";
};

// useEffect 후 상태 변환
const status = result ? convertStatus(result.is_phishing) : "safe";

 
  // 유효한 url이 아닌 경우
  if (error) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Image
      source={require("../../assets/images/Qtravel_logo.png")}
     style={styles.logo} 
     resizeMode="contain" 
  />
      </View>
      <View style={styles.errorcontainer}>
      <Text style={styles.errortext}>{errorMessage || "분석 실패"}</Text>
    </View>
    </View>
    
  );
}
if (!result) 
return (<View style={styles.errorcontainer}>
  <ActivityIndicator size="large" color="#2563EB" />
  <Text style={styles.errortext}>분석중...</Text>
  </View>);
  const handleCopy = async () => {
  try {
    if (!url) return;

    await Clipboard.setStringAsync(url);
    setCopied(true);

    // 2초 후 상태 초기화
    setTimeout(() => setCopied(false), 2000);
  } catch (error) {
    console.error("복사 실패:", error);
  }
};
  // ✅ 안전하게 사용
  const currentExplanation =
  status && XAI_EXPLANATIONS[status]
    ? XAI_EXPLANATIONS[status][explanationLevel]
    : { title: "정보 없음", points: [], advice: "" };

  return (
    
    <View style={styles.container}>
      {/* 헤더 */}
<View style={styles.header}>
  <TouchableOpacity
    onPress={onBack}
    style={styles.headerBackButton}
  >
    <Ionicons
      name="chevron-back"
      size={20}
      color="#4B5274"
    />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>
    스캔 결과
  </Text>

  {/* 오른쪽 공간 맞춤용 */}
  <View style={{ width: 36 }} />
</View>
      {/* 안전할 때만 */}
        {status === "safe" && (
  <TouchableOpacity
    style={styles.floatingButton}
    onPress={() => {
      router.push(`/WebViewScreen?url=${encodeURIComponent(url)}`);
    }}
  >
    <Text style={styles.securityButtonText}>
      보안 브라우저로 열기
    </Text>
  </TouchableOpacity>
)}

      <ScrollView contentContainerStyle={styles.content}>
        
        {status === "safe" && <SafeResultCard />}

        {status === "malicious" && <DangerResultCard />}


       

        {result.explanation?.redirect && (
  <SafeRedirectLog
    redirect={{
      ...result.explanation.redirect,
      status,
    }}
  />
)}
        
      
      <View style={styles.xaicontainer}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={styles.iconBox}>
          <Sparkles size={16} color="#404040" />
        </View>
        <Text style={styles.xaititle}>AI 판단 근거</Text>
        
      </View>
      {status === "safe" && <XaiSafeCard
  title={
    "피싱 패턴 미탐지"
  }
  reasons={
    result.explanation?.parsedSummary?.outputs ?? []
  }
  safeText={result.explanation?.parsedSummary?.reason ??
    "안전한 사이트로 판단되었어요."
  }
/>}

      {status === "malicious" && (
  <XaiDangerCard
  title={
    "피싱 패턴 다수 탐지"
  }
  reasons={
    result.explanation?.parsedSummary?.outputs ?? []
  }
  warningText={result.explanation?.parsedSummary?.reason ??
    "피싱 위험 요소가 발견되었어요."}
/>)}

    </View>

      
         
      </ScrollView>

      
    </View>
  );
  }