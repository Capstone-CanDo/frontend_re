export const XAI_EXPLANATIONS = {
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