import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchScanRecords, ScanRecord } from "../data/scanRecords";


const STORAGE_KEY = "@scan_records"; // ✅ 키 명확하게

// 저장 (서버 데이터 그대로 캐싱)
export const saveScanRecords = async (records: ScanRecord[]) => {
  try {
    const json = JSON.stringify(records);
    await AsyncStorage.setItem(STORAGE_KEY, json);
    console.log("✅ 로컬 저장 완료:", records.length);
  } catch (e) {
    console.error("❌ 저장 실패", e);
  }
};




// 불러오기 (앱 시작 시 캐시용)
export const loadScanRecords = async (): Promise<ScanRecord[]> => {
  try {
    console.log("📡 서버 요청 시작");

    const serverData = await fetchScanRecords();
    console.log("📡 서버 데이터:", serverData.length);

    return serverData;
  } catch (e) {
    console.error("❌ loadScanRecords 실패", e);
    return [];
  }
};

// 전체 교체 (서버 동기화 전용)
export const replaceScanRecords = async (records: ScanRecord[]) => {
  console.log("🔄 서버 데이터로 교체");
  await saveScanRecords(records);
};

// 데이터 삭제
export const clearScanRecords = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log("🗑️ 모든 스캔 기록 삭제됨");
  } catch (e) {
    console.error("❌ 삭제 실패", e);
  }
};