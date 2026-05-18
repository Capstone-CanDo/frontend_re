import React from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const countries = [
  { code: "JP", name: "일본", flag: "🇯🇵" },
  { code: "US", name: "미국", flag: "🇺🇸" },
  { code: "GB", name: "영국", flag: "🇬🇧" },
  { code: "FR", name: "프랑스", flag: "🇫🇷" },
  { code: "TH", name: "태국", flag: "🇹🇭" },
  { code: "VN", name: "베트남", flag: "🇻🇳" },
  { code: "CN", name: "중국", flag: "🇨🇳" },
  { code: "IT", name: "이탈리아", flag: "🇮🇹" },
  { code: "ES", name: "스페인", flag: "🇪🇸" },
  { code: "AU", name: "호주", flag: "🇦🇺" },
];

interface Props {
  visible: boolean;
  selectedCountry: string;

  onClose: () => void;
  onSelectCountry: (country: string) => void;
  onConfirm: () => void;
}

export default function CountrySelectModal({
  visible,
  selectedCountry,
  onClose,
  onSelectCountry,
  onConfirm,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>

        <View style={styles.modalContainer}>

          <Text style={styles.title}>
            여행 국가 수정
          </Text>

          <ScrollView
            contentContainerStyle={styles.grid}
            showsVerticalScrollIndicator={false}
          >
            {countries.map((country) => {
              const selected =
                selectedCountry === country.name;

              return (
                <Pressable
                  key={country.code}
                  onPress={() =>
                    onSelectCountry(country.name)
                  }
                  style={[
                    styles.countryButton,
                    selected && styles.selectedButton,
                  ]}
                >
                  <Text style={styles.flag}>
                    {country.flag}
                  </Text>

                  <Text
                    style={[
                      styles.countryText,
                      selected &&
                        styles.selectedCountryText,
                    ]}
                  >
                    {country.name}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <Pressable
            style={styles.confirmButton}
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
    paddingHorizontal: 24,
  },

  modalContainer: {
    width: "100%",
    maxHeight: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  countryButton: {
    width: "47%",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  selectedButton: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  flag: {
    fontSize: 24,
    marginRight: 10,
  },

  countryText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  selectedCountryText: {
    color: "#FFFFFF",
  },

  confirmButton: {
    marginTop: 20,
    backgroundColor: "#2563EB",
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: "center",
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
    fontSize: 14,
    color: "#6B7280",
  },
});