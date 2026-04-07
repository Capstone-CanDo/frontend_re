import * as SecureStore from "expo-secure-store";


// scanRecords.ts
export interface ScanRecord {
  id: number;
  url: string;
  status: "safe" | "malicious" | "suspicious";
  created_at: string;
  is_phishing: "True" | "False";
  explanation: string | null;
  travel: number;
  location?: string;
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

export async function fetchScanRecords(token: string) {
  try {
    console.log("📡 GET 요청 시작");
    const token = await getAccessToken();
    console.log("🔑 사용할 토큰:", token);


    const response = await fetch(
      "https://backend-production-6ff2.up.railway.app/scanner/scan-history/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    console.log("📡 GET 응답:", data);
    // is_phishing 기반으로 status 추가
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
  
];