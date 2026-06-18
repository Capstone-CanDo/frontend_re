import React from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Calendar } from "react-native-calendars";

interface Props {
  visible: boolean;

  startDate: string | null;
  endDate: string | null;

  onSelectStart: (date: string) => void;
  onSelectEnd: (date: string) => void;

  onClose: () => void;
  onConfirm: () => void;
}

export default function DateRangeModal({
  visible,
  startDate,
  endDate,
  onSelectStart,
  onSelectEnd,
  onClose,
  onConfirm,
}: Props) {

  const handleDayPress = (day: any) => {
    const selected = day.dateString;

    // 시작일 없으면 시작 선택
    if (!startDate || (startDate && endDate)) {
      onSelectStart(selected);
      onSelectEnd("");
    }

    // 종료일 선택
    else {
      if (selected >= startDate) {
        onSelectEnd(selected);
      } else {
        onSelectStart(selected);
      }
    }
  };

  // 날짜 범위 표시
  const markedDates: any = {};

  if (startDate) {
    markedDates[startDate] = {
      startingDay: true,
      color: "#2563EB",
      textColor: "white",
    };
  }

  if (endDate) {
    markedDates[endDate] = {
      endingDay: true,
      color: "#2563EB",
      textColor: "white",
    };

    let current = new Date(startDate!);

    while (
      current <
      new Date(endDate)
    ) {
      const date =
        current.toISOString().split("T")[0];

      markedDates[date] = {
        color: "#93C5FD",
        textColor: "#111827",
      };

      current.setDate(
        current.getDate() + 1
      );
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>

        <View style={styles.modalContainer}>

          <Text style={styles.title}>
            여행 기간 수정
          </Text>

          <Calendar
            markingType="period"
            markedDates={markedDates}
            onDayPress={handleDayPress}
          />

          <Pressable
            style={[
              styles.confirmButton,
              (!startDate || !endDate) &&
                styles.disabledButton,
            ]}
            disabled={!startDate || !endDate}
            onPress={onConfirm}
          >
            <Text style={styles.confirmButtonText}>
              수정 완료
            </Text>
          </Pressable>

          <Pressable
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>
              닫기
            </Text>
          </Pressable>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  modalContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
    color: "#111827",
  },

  confirmButton: {
    marginTop: 20,
    backgroundColor: "#2563EB",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
  },

  disabledButton: {
    opacity: 0.5,
  },

  confirmButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  closeButton: {
    marginTop: 12,
    alignItems: "center",
  },

  closeButtonText: {
    color: "#6B7280",
    fontSize: 14,
  },
});