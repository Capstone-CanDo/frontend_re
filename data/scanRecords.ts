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

// 백엔드 전송 함수
export async function sendScanRecordToBackend(record: ScanRecord, token: string) {
  try {
    const response = await fetch("https://your-backend.com/scan-records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(record),
    });

    const data = await response.json();
    console.log("백엔드 응답:", data);
    return data;
  } catch (error) {
    console.error("백엔드 전송 실패:", error);
  }
}

// 통합: FE 상태 추가 + 백엔드 전송
export async function addAndSendScanRecord(
  records: ScanRecord[],
  newRecord: Omit<ScanRecord, "id">,
  token: string
): Promise<ScanRecord[]> {
  const recordWithId: ScanRecord = {
    id: Date.now(),
    ...newRecord,
  };

  const updatedRecords = [recordWithId, ...records];

  try {
    await sendScanRecordToBackend(recordWithId, token);
  } catch (error) {
    console.error("백엔드 전송 실패:", error);
  }

  return updatedRecords;
}


//하드코딩용 함수

export const scanRecords: ScanRecord[] = [
  {
    id: 1,
    url: "https://www.kmooc.kr/",
    status: "safe",
    created_at: "2026-04-02T15:25:55.335467+09:00",
    is_phishing: "False",
    explanation: null,
    travel: 1,
    location: "Seoul, Korea",
  },
  {
    id: 2,
    url: "https://cyber.ewha.ac.kr/mod/ubboard/view.php?id=2682513",
    status: "safe",
    created_at: "2026-04-02T15:36:59.675973+09:00",
    is_phishing: "False",
    explanation: null,
    travel: 1,
    location: "Seoul, Korea",
  },
  {
    id: 3,
    url: "http://malicious.example.com/phish",
    status: "malicious",
    created_at: "2026-04-02T16:00:00.000000+09:00",
    is_phishing: "True",
    explanation: "의심스러운 피싱 사이트",
    travel: 0,
    location: "Busan, Korea",
  },
  {
    id: 4,
    url: "http://suspicious.example.com",
    status: "suspicious",
    created_at: "2026-04-02T16:15:00.000000+09:00",
    is_phishing: "False",
    explanation: "의심 URL",
    travel: 0,
    location: "Incheon, Korea",
  },
];