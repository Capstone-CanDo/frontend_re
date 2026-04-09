import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Brain, Clipboard } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { XAI_EXPLANATIONS } from "../../data/xaiTexts";
import { AnalyzeResult, analyzeUrl } from "../../util/urlAnaylze";
import { validateUrl } from "../../util/UrlValid";
import { styles } from "./styles";

interface ScanResultProps {
  url: string;
  onBack: () => void;
}



export function ScanResult({ url, onBack }: ScanResultProps) {
  
  const [result, setResult] = useState<AnalyzeResult | null>(null);
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
  <Text style={styles.errortext}>분석중...</Text>
  </View>);
  const handleCopy = () => {
    // RN에서는 Clipboard 따로 필요
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Image
      source={require("../../assets/images/Qtravel_logo.png")}
     style={styles.logo} // 스타일로 크기 조절 가능
     resizeMode="contain" // 이미지 비율 유지
  />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* 상태 */}
        <View
  style={[
    styles.statusCard,
    status === "safe" && styles.safeCard,
    status === "malicious" && styles.maliciousCard,
  ]}
>
  <View style={[styles.iconWrapper,
    status === "safe" && styles.safeiconWrapper,
    status === "malicious" && styles.maliciousiconWrapper,
  ]}>
        <Ionicons
           name="link-outline"
           size={20}
           color={
            status === "safe"
            ? "#008236"
           : status === "malicious"
            ? "#C10007"
            : "#999" // optional (suspicious 등)
  }
/>
      </View>
  <Text
    style={[
      styles.statusText,
      status === "safe" && styles.safeText,
      status === "malicious" && styles.maliciousText,
    ]}
  >
    {result.message}
  </Text>
</View>


        {/* 버튼 */}
        <TouchableOpacity
  style={styles.resultButton}
  onPress={() => setShowRedirects(!showRedirects)}
>
  {/* 왼쪽 영역: 돋보기 아이콘 + 텍스트 */}
  <View style={styles.leftContent}>
    <Ionicons
      name="search-outline"
      size={20}
      color="#4A6CF7"
      style={styles.searchIcon}
    />
    <Text style={styles.resultText}>URL 결과</Text>
  </View>

  {/* 오른쪽 영역: 드롭다운 아이콘 */}
  <Ionicons
    name={showRedirects ? "chevron-up-outline" : "chevron-down-outline"}
    size={20}
    color="#6B7280"
  />
</TouchableOpacity>

        {/* 리다이렉션 */}
        {showRedirects && (
          <View style={styles.card}>
            <Text>리다이렉션 정보 (예시)</Text>
            <Text>{url}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={handleCopy}>
          <View style={styles.leftContent}>
    <Clipboard size={20} color="#6B7280" style={{ marginRight: 8 }} />
    <Text style={styles.resultText}>{copied ? "복사됨!" : "URL 복사"}</Text>
  </View>
        </TouchableOpacity>

        

        {/* 안전할 때만 */}
        {status === "safe" && (
  <TouchableOpacity
    style={styles.primaryBtn}
    onPress={() => {
      router.push(`/WebViewScreen?url=${encodeURIComponent(url)}`);
    }}
  >
    <Text style={{ color: "#fff"}}>보안 브라우저로 열기</Text>
  </TouchableOpacity>
)}

        {/* 위험 */}
        {status !== "safe" && (
          <View style={styles.warning}>
            <Text style={{ color: "red" }}>
              ⚠️ 위험할 수 있습니다
            </Text>
          </View>
        )}


      <View style = {styles.xaicontainer}>
      {/* 헤더 */}
      <View style={styles.xaiheader}>
        <View style={styles.headerLeft}>
          <Brain size={18} color="#2563eb" />
          <Text style={styles.title}>AI 판단 근거</Text>
        </View>
      </View>
      

      {/* 설명 */}
      <View style={styles.explainBox}>
        <Text style={styles.explainTitle}>
          {currentExplanation.title}
        </Text>

        {currentExplanation.points.map((point, i) => (
          <Text key={i} style={styles.point}>
            {point}
          </Text>
        ))}
      </View>
        </View>
      {/* 조언 */}
      <View style={[
        styles.adviceBox,
        status === "safe" && styles.safe,
        status === "malicious" && styles.danger,
      ]}>
        <Text style={styles.adviceText}>
          💡 {currentExplanation.advice}
        </Text>

    </View>
        
      </ScrollView>


    </View>
  );
  }