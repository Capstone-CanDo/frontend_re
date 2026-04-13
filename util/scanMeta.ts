export interface ScanMeta {
  date: string;
  time: string;
}

// 현재 시간 생성
export const getScanMeta = (): ScanMeta => {
  const now = new Date();

  const date = now.toLocaleDateString("ko-CA"); // YYYY-MM-DD
  const time = now.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return { date, time };
};