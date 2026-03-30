export interface ScanRecord {
  id: number;
  url: string;
  status: "safe" | "malicious" | "suspicious";
  date: string;
  time: string;
  location: string;
  riskScore: number;
}


export function addScanRecord(
  records: ScanRecord[],
  newRecord: Omit<ScanRecord, "id">
): ScanRecord[] {
  const nextId =
    records.length > 0 ? records[records.length - 1].id + 1 : 1;

  const recordWithId: ScanRecord = {
    id: nextId,
    ...newRecord,
  };

  return [recordWithId, ...records]; // 최신이 위로 오게
}

export const scanRecords: ScanRecord[] = [
    {
      id: 1,
      url: "https://restaurant-menu.com/special",
      status: "safe",
      date: "2026-03-05",
      time: "14:30",
      location: "도쿄 신주쿠",
      riskScore: 5,
    },
    {
      id: 2,
      url: "https://g00gle-login-verify.suspicious.xyz",
      status: "malicious",
      date: "2026-03-05",
      time: "10:15",
      location: "도쿄 시부야",
      riskScore: 87,
    },
    {
      id: 3,
      url: "https://bit.ly/hotel-promo",
      status: "suspicious",
      date: "2026-03-04",
      time: "18:45",
      location: "도쿄 아키하바라",
      riskScore: 45,
    },
    {
      id: 4,
      url: "https://museum-tickets.jp/buy",
      status: "safe",
      date: "2026-03-04",
      time: "11:20",
      location: "도쿄 우에노",
      riskScore: 8,
    },
    {
      id: 5,
      url: "https://free-wifi-login.net/connect",
      status: "malicious",
      date: "2026-03-03",
      time: "16:00",
      location: "도쿄 하라주쿠",
      riskScore: 92,
    },
    {
      id: 6,
      url: "https://official-store.co.jp/sale",
      status: "safe",
      date: "2026-03-03",
      time: "13:30",
      location: "도쿄 긴자",
      riskScore: 3,
    },
  ];