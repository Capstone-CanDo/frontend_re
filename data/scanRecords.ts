import * as SecureStore from "expo-secure-store";


// scanRecords.ts
export interface ScanRecord {
  id: number;
  url: string;
  status: "safe" | "malicious" | "suspicious";
  created_at: string;
  date: string;
  time: string;
  is_phishing: "True" | "False";
  explanation: string | null;
  travel: number;
  location?: string;
}

function splitDateTime(createdAt: string): { date: string; time: string } {
  const dateObj = new Date(createdAt);

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  return {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}`,
  };
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

    const mappedData: ScanRecord[] = data.map((item: any) => {
      const { date, time } = splitDateTime(item.created_at);

      return {
        ...item,
        status: item.is_phishing === "True" ? "malicious" : "safe",
        date,
        time,
      };
    });

    return mappedData;
  } catch (error) {
    console.error("❌ GET 실패:", error);
    return [];
  }
}
export const scanRecords: ScanRecord[] = [
  
];
