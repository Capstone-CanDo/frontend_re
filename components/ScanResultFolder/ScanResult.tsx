import { Brain, GraduationCap, Shield, User } from "lucide-react-native";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button } from "../../components/ui/button";
import { WebViewModal } from "../WebView/WebView";
import { styles } from "./styles";

interface ScanResultProps {
  url: string;
  onBack: () => void;
}


export function ScanResult({ url, onBack }: ScanResultProps) {
  const [showRedirects, setShowRedirects] = useState(false);
  const [copied, setCopied] = useState(false);
  type ExplanationLevel = "beginner" | "intermediate" | "expert";
  const [explanationLevel, setExplanationLevel] = useState<ExplanationLevel>("beginner");
  const [isWebViewOpen, setIsWebViewOpen] = useState(false);

  const analyzeUrl = (url: string): { status: Status; message: string } => {
  if (url.includes("g00gle") || url.includes("suspicious")) {
    return { status: "malicious", message: "위험한 사이트에요" };
  }
  if (url.includes("bit.ly")) {
    return { status: "suspicious", message: "주의가 필요해요" };
  }
  return { status: "safe", message: "안전한 사이트에요" };
};

  type Status = "safe" | "suspicious" | "malicious";

  const result = analyzeUrl(url);
  
  const handleCopy = () => {
    // RN에서는 Clipboard 따로 필요
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

    const getXAIExplanation = (status: Status, level: ExplanationLevel) => {
    const explanations = {
      safe: {
        beginner: {
          title: "안전한 사이트에요",
          points: [
            "✓ 공식적으로 등록된 도메인이에요",
            "✓ 보안 인증서가 정상적으로 설정되어 있어요",
            "✓ 의심스러운 리다이렉션이 없어요",
            "✓ 악성 코드가 발견되지 않았어요"
          ],
          advice: "안심하고 방문하셔도 괜찮아요. 다만 개인정보 입력 시에는 항상 주의하세요."
        },
        intermediate: {
          title: "안전성 검증 완료",
          points: [
            "✓ HTTPS 프로토콜 사용 및 SSL 인증서 유효",
            "✓ 도메인 등록 정보가 정상적으로 확인됨",
            "✓ 악성 리다이렉션 패턴 미발견",
            "✓ 피싱 데이터베이스에 미등록"
          ],
          advice: "보안 요소들이 정상적으로 확인되었습니다. 거래 시 URL을 재확인하세요."
        },
        expert: {
          title: "보안 분석 결과",
          points: [
            "✓ TLS 1.3, Valid Certificate Chain",
            "✓ Domain Age: 5+ years, WHOIS verified",
            "✓ No suspicious HTTP 3xx redirects detected",
            "✓ Clean reputation score across threat feeds",
            "✓ Content-Security-Policy headers present"
          ],
          advice: "All security indicators nominal. Standard precautions apply for PII submission."
        }
      },
      suspicious: {
        beginner: {
          title: "주의가 필요해요",
          points: [
            "⚠️ URL이 짧게 변환되어 실제 주소를 숨기고 있어요",
            "⚠️ 다른 사이트로 여러 번 이동시켜요",
            "⚠️ 도메인이 최근에 만들어졌어요"
          ],
          advice: "개인정보나 결제정보를 입력하지 마세요. 공식 사이트인지 확인이 필요해요."
        },
        intermediate: {
          title: "의심스러운 요소 발견",
          points: [
            "⚠️ URL 단축 서비스 사용으로 최종 목적지 불명확",
            "⚠️ 다중 리다이렉션 체인 감지 (2+ hops)",
            "⚠️ 신규 도메인 (등록 30일 이내)",
            "⚠️ SSL 인증서 발급 기관 신뢰도 낮음"
          ],
          advice: "신뢰할 수 있는 경로로 재확인 후 이용하시길 권장합니다."
        },
        expert: {
          title: "위험 요소 분석",
          points: [
            "⚠️ Shortened URL obfuscates final destination",
            "⚠️ HTTP 301/302 redirect chain detected",
            "⚠️ Domain created < 30 days ago",
            "⚠️ Low-trust CA, possible DV-only cert",
            "⚠️ Missing security headers (X-Frame-Options, etc.)"
          ],
          advice: "Verify through official channels. Avoid credential/payment submission."
        }
      },
      malicious: {
        beginner: {
          title: "위험한 사이트에요",
          points: [
            "🚫 유명 사이트를 흉내낸 가짜 주소에요",
            "🚫 개인정보를 훔치려는 피싱 사이트로 의심돼요",
            "🚫 여러 번 다른 사이트로 넘어가며 추적을 회피해요",
            "🚫 악성 코드 배포 이력이 있어요"
          ],
          advice: "절대 접속하지 마세요! 개인정보가 유출될 수 있어요."
        },
        intermediate: {
          title: "악성 사이트 탐지",
          points: [
            "🚫 타이포스쿼팅 기법 사용 (예: g00gle)",
            "🚫 피싱 데이터베이스에 등록된 URL",
            "🚫 복잡한 리다이렉션으로 탐지 회피 시도",
            "🚫 멀웨어 배포 이력 확인됨",
            "🚫 자격 증명 탈취 시도 패턴"
          ],
          advice: "즉시 페이지를 닫고 접속하지 마세요. 이미 방문했다면 비밀번호를 변경하세요."
        },
        expert: {
          title: "위협 분석 상세",
          points: [
            "🚫 Typosquatting attack vector (homograph/substitution)",
            "🚫 Listed in PhishTank, OpenPhish databases",
            "🚫 Multi-hop redirect chain to evade detection",
            "🚫 Known malware distribution (Trojan/Stealer)",
            "🚫 Credential harvesting form detected",
            "🚫 Suspicious JavaScript obfuscation patterns"
          ],
          advice: "DO NOT ACCESS. If visited, change credentials immediately and run AV scan."
        }
      }
    };
    
    return explanations[status][level];
  };
  const currentExplanation = getXAIExplanation(result.status, explanationLevel);

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

        <View style={styles.card}>
      
      {/* 헤더 */}
      <View style={styles.header}>
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

      {/* 조언 */}
      <View style={[
        styles.adviceBox,
        result.status === "safe" && styles.safe,
        result.status === "suspicious" && styles.suspicious,
        result.status === "malicious" && styles.danger,
      ]}>
        <Text style={styles.adviceText}>
          💡 {currentExplanation.advice}
        </Text>
      </View>
    </View>
        
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