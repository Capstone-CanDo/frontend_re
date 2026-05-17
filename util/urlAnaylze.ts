export interface RedirectInfo {
  final_url: string;
  redirect_count: number;
  chain: string[];
  status_codes: number[];
}

export interface ParsedSummary {
  judgement: string;
  reason: string;
  outputs: string[];
}

export interface Explanation {
  method: string;
  top_features: [string, number][];
  summary: string;
  redirect: RedirectInfo;

  // ✅ 추가
  parsedSummary?: ParsedSummary;
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

// ==============================
// summary 파싱 함수
// ==============================

const parseSummary = (summary: string): ParsedSummary => {
  const lines = summary
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  let judgement = "";
  let reason = "";
  const outputs: string[] = [];

  lines.forEach((line) => {
    // 판정
    if (line.startsWith("판정:")) {
      judgement = line.replace("판정:", "").trim();
    }

    // 의심 이유
    else if (line.startsWith("의심 이유:")) {
      reason = line.replace("의심 이유:", "").trim();
    }

    // numbered outputs
    else if (/^\d+\./.test(line)) {
      outputs.push(
        line.replace(/^\d+\.\s*/, "").trim()
      );
    }
  });

  return {
    judgement,
    reason,
    outputs,
  };
};

// ==============================
// BE 연동
// ==============================

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

  // ✅ message 생성
  const message = data.is_phishing
    ? "위험한 사이트일 수 있습니다."
    : "안전한 사이트입니다.";

  // ✅ summary 파싱
  const parsedSummary =
    data.explanation?.summary
      ? parseSummary(data.explanation.summary)
      : undefined;

  return {
    ...data,

    message,

    explanation: data.explanation
      ? {
          ...data.explanation,
          parsedSummary,
        }
      : null,
  };
};