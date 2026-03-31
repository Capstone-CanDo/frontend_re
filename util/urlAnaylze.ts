

export type Status = "safe" | "suspicious" | "malicious";

export interface AnalyzeResult {
  status: Status;
  message: string;
  riskScore: number; // ✅ 추가
}

export const analyzeUrl = async (url: string): Promise<AnalyzeResult> => {
  try {
    const res = await fetch("http://10.240.68.7:8000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    console.log("서버 응답 확인:", data); // 🔥 추가

    return {
      status: data.status || "suspicious",
      riskScore: data.riskScore ?? 0,
      message: data.message || "분석 실패, 안전 처리",
    };
  } catch (err: any) {
    console.error("analyzeUrl 에러:", err);
    return {
      status: "suspicious",
      riskScore: 0,
      message: "분석 실패, 안전 처리",
    };
  }
};