import * as SecureStore from "expo-secure-store";


// scanRecords.ts
export interface ScanRecord {
  id: number;
  url: string;
  status: "safe" | "malicious" | "suspicious";
  date: string;
  time: string;
  riskScore: number;
}

// 기존 addScanRecord는 FE 상태용
export function addScanRecord(
  records: ScanRecord[],
  newRecord: Omit<ScanRecord, "id">
): ScanRecord[] {
  const recordWithId: ScanRecord = {
    id: Date.now(),
    ...newRecord,
  };

  return [recordWithId, ...records];
}

async function getAccessToken(): Promise<string> {
  const token = await SecureStore.getItemAsync("token");
  console.log("불러온 토큰:", token);
  if (!token) {
    throw new Error("토큰 없음 (로그인 필요)");
  }

  return token;
}

export async function fetchScanRecords(): Promise<ScanRecord[]> {
  try {
    console.log("📡 GET 요청 시작");

    const token = await SecureStore.getItemAsync("token");

    if (!token) {
      throw new Error("Access Token이 존재하지 않습니다.");
    }

    console.log("🔑 사용할 토큰:", token);

    const response = await fetch(
      "https://backend-production-6ff2.up.railway.app/scanner/scan-history/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.trim()}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 401) {
      throw new Error("인증 실패(401): 토큰이 만료되었거나 유효하지 않습니다.");
    }

    if (!response.ok) {
      throw new Error(`서버 오류: ${response.status}`);
    }

    const data = await response.json();

    const mappedData: ScanRecord[] = data.map((item: any) => ({
      ...item,
      status: item.is_phishing === "True" ? "malicious" : "safe",
    }));

    return mappedData;
  } catch (error) {
    console.error("❌ GET 실패:", error);
    return [];
  }
}
export const scanRecords: ScanRecord[] = [
    {
      id: 1,
      url: "https://restaurant-menu.com/special",
      status: "safe",
      date: "2026-03-05",
      time: "14:30",
      riskScore: 5,
    },
    {
      id: 2,
      url: "https://g00gle-login-verify.suspicious.xyz",
      status: "malicious",
      date: "2026-03-05",
      time: "10:15",
      riskScore: 87,
    },
    {
      id: 3,
      url: "https://bit.ly/hotel-promo",
      status: "suspicious",
      date: "2026-03-04",
      time: "18:45",
      riskScore: 45,
    },
    {
      id: 4,
      url: "https://museum-tickets.jp/buy",
      status: "safe",
      date: "2026-03-04",
      time: "11:20",
      riskScore: 8,
    },
    {
      id: 5,
      url: "https://free-wifi-login.net/connect",
      status: "malicious",
      date: "2026-03-03",
      time: "16:00",
      riskScore: 92,
    },
    {
      id: 6,
      url: "https://official-store.co.jp/sale",
      status: "safe",
      date: "2026-03-03",
      time: "13:30",
      riskScore: 3,
    },
  ];
