export interface ScanMeta {
  date: string;
  time: string;
  location: string;
}

// 현재 시간 + 위치 생성
export const getScanMeta = (): ScanMeta => {
  const now = new Date();

  const date = now.toLocaleDateString("ko-CA"); // YYYY-MM-DD
  const time = now.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // 지금은 임시 (나중에 GPS로 교체 가능)
  const location = "서울 강남";

  return { date, time, location };
};