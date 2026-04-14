export interface RedirectInfo {
  final_url: string;
  redirect_count: number;
  chain: string[];
  status_codes: number[];
}

export interface Explanation {
  method: string;
  top_features: [string, number][];
  summary: string;
  redirect: RedirectInfo;
}

export interface AnalyzeResult {
  id: number;
  url: string;
  is_phishing: boolean;
  explanation: Explanation | null;
  travel: number;
  created_at: string;
  message: string;
}

 
//BE 연동용 코드


export const analyzeUrl = async (
  url: string,
  token: string
): Promise<AnalyzeResult> => {
  const response = await fetch(
    "https://backend-production-6ff2.up.railway.app/scanner/scan/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        url: url,
        travel_id: 1,
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("에러 응답:", errorText);
    throw new Error("분석 실패");
  }

  const data = await response.json();
  console.log("📦 JSON 응답:", data);

  // ✅ 여기서 message 생성
  const message = data.is_phishing
    ? "위험한 사이트일 수 있습니다"
    : "안전한 사이트입니다.";

  return {
    ...data,
    message,
  };
};
