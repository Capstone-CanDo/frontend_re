

export type Status = "safe" | "suspicious" | "malicious";

export interface AnalyzeResult {
  status: Status;
  message: string;
  riskScore: number; // ✅ 추가
}

export const analyzeUrl = async (url: string): Promise<AnalyzeResult> => {
  // 임시 로직 (나중에 API로 교체)
  if (url.includes("g00gle") || url.includes("suspicious")) {
    return {
      status: "malicious",
      message: "위험한 사이트에요",
      riskScore: 10, // ✅ 고정값
    };
  }

  if (url.includes("bit.ly")) {
    return {
      status: "suspicious",
      message: "주의가 필요해요",
      riskScore: 10,
    };
  }

  return {
    status: "safe",
    message: "안전한 사이트에요",
    riskScore: 10,
  };
};