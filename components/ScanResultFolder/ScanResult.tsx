import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Brain, GraduationCap, Shield, User } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button } from "../../components/ui/button";
import { XAI_EXPLANATIONS } from "../../data/xaiTexts";
import { AnalyzeResult, analyzeUrl } from "../../util/urlAnaylze";
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
  

  // ✅ 1. URL 분석
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const token = await SecureStore.getItemAsync("token"); // SecureStore에서 JWT 꺼내기
        console.log("토큰 확인:", token);
        if (!token) throw new Error("토큰이 없습니다");

        const res = await analyzeUrl(url, token);
        setResult(res);
        console.log("서버 응답:", res);
      } catch (e) {
        console.error(e);
        setError(true);
      }
    };

    fetchResult();
  }, [url]);

  type Status = "safe" | "malicious";
// status 변환 함수 추가
const convertStatus = (is_phishing: boolean): Status => {
  return is_phishing ? "malicious" : "safe";
};

// useEffect 후 상태 변환
const status = result ? convertStatus(result.is_phishing) : "safe";

 
  // ✅ 로딩 처리 (필수)
  if (error) return <Text>분석 실패</Text>;
if (!result) return <Text>분석중...</Text>;
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
          style={styles.button}
          onPress={() => setShowRedirects(!showRedirects)}
        >
          <Text>URL 결과 보기</Text>
        </TouchableOpacity>

        {/* 리다이렉션 */}
        {showRedirects && (
          <View style={styles.card}>
            <Text>리다이렉션 정보 (예시)</Text>
            <Text>{url}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={handleCopy}>
          <Text>{copied ? "복사됨!" : "URL 복사"}</Text>
        </TouchableOpacity>

        

        {/* 안전할 때만 */}
        {status === "safe" && (
  <TouchableOpacity
    style={styles.primaryBtn}
    onPress={() => {
      router.push(`/WebViewScreen?url=${encodeURIComponent(url)}`);
    }}
  >
    <Text style={{ color: "#fff" }}>보안 브라우저로 열기</Text>
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

      {/* 버튼 */}
      <View style={styles.levelContainer}>
        
        {/* 쉽게 */}
        <Button
          onPress={() => setExplanationLevel("beginner")}
          style={[
            styles.levelBtn,
            explanationLevel === "beginner" && styles.activeBtn
          ]}
        >
          <User
            size={14}
            color={explanationLevel === "beginner" ? "#2563eb" : "#6b7280"}
          />
          <Text style={[
            styles.levelText,
            explanationLevel === "beginner" && styles.activeText
          ]}>
            쉽게
          </Text>
        </Button>

        {/* 보통 */}
        <Button
          onPress={() => setExplanationLevel("intermediate")}
          style={[
            styles.levelBtn,
            explanationLevel === "intermediate" && styles.activeBtn
          ]}
        >
          <GraduationCap
            size={14}
            color={explanationLevel === "intermediate" ? "#2563eb" : "#6b7280"}
          />
          <Text style={[
            styles.levelText,
            explanationLevel === "intermediate" && styles.activeText
          ]}>
            보통
          </Text>
        </Button>

        {/* 전문가 */}
        <Button
          onPress={() => setExplanationLevel("expert")}
          style={[
            styles.levelBtn,
            explanationLevel === "expert" && styles.activeBtn
          ]}
        >
          <Shield
            size={14}
            color={explanationLevel === "expert" ? "#2563eb" : "#6b7280"}
          />
          <Text style={[
            styles.levelText,
            explanationLevel === "expert" && styles.activeText
          ]}>
            전문가
          </Text>
        </Button>
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