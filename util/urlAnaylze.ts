export interface AnalyzeResult {
  id: number;
  url: string;
  is_phishing: boolean;
  explanation: string | null;
  travel: number;
  created_at: string;
  message: string;
}

export const analyzeUrl = async (
  url: string,
  token?: string // UI 확인용이므로 token 필요 없음
): Promise<AnalyzeResult> => {
  // UI 테스트용 하드코딩 데이터
  return new Promise((resolve) => {
    setTimeout(() => {
      // URL 패턴에 따라 상태를 다르게 설정
      let is_phishing = false;
      let message = "안전한 사이트입니다";

      if (url.includes("malicious") || url.includes("phish")) {
        is_phishing = true;
        message = "위험한 사이트일 수 있습니다";
      }

      if (url.includes("suspicious")) {
        is_phishing = false;
        message = "주의가 필요합니다";
      }

      resolve({
        id: Date.now(),
        url,
        is_phishing,
        explanation: null,
        travel: 1,
        created_at: new Date().toISOString(),
        message,
      });
    }, 500); // 0.5초 딜레이로 실제 호출 느낌
  });
};

/*  
//BE 연동용 코드

export const analyzeUrl = async (
  url: string,
  token: string
): Promise<AnalyzeResult> => {
  const response = await fetch("YOUR_SERVER_URL/scan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // 🔥 핵심
    },
    body: JSON.stringify({
      url: url,
      travel_id: 1, // 필요하면 상태에서 관리
    }),
  });

  if (!response.ok) {
    throw new Error("분석 실패");
  }

  const data = await response.json();
  return data;

  
};

*/
