import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScanRecord } from "../data/scanRecords";

const STORAGE_KEY = "scanRecords";

// 저장
export const saveScanRecords = async (records: ScanRecord[]) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (e) {
    console.error("저장 실패", e);
  }
};

// 불러오기
export const loadScanRecords = async (): Promise<ScanRecord[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("불러오기 실패", e);
    return [];
  }
};

//데이터 삭제 용
export const clearScanRecords = async () => {
  await AsyncStorage.removeItem(STORAGE_KEY);
  console.log("모든 스캔 기록 삭제됨");
};