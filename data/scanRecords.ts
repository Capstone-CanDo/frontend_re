export interface ScanRecord {
  id: number;
  url: string;
  status: "safe" | "malicious" | "suspicious";
  date: string;
  time: string;
  riskScore: number;
}


export function addScanRecord(
  records: ScanRecord[],
  newRecord: Omit<ScanRecord, "id">
): ScanRecord[] {
  const recordWithId: ScanRecord = {
    id: Date.now(), // 🔥 핵심
    ...newRecord,
  };

  return [recordWithId, ...records];
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