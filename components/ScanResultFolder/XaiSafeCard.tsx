import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  reasons: string[];
  safeText?: string;
}

const XaiSafeCard = ({
  title,
  reasons,
  safeText,
}: Props) => {
  return (
    <View style={styles.container}>

      {/* Reason Box */}
      <View style={styles.reasonBox}>

        <Text style={styles.reasonTitle}>
          {title}
        </Text>

        <View style={styles.reasonList}>
          {reasons.map((reason, index) => (
            <Text key={index} style={styles.reasonItem}>
              • {reason}
            </Text>
          ))}
        </View>

      </View>

      {/* Safe Box */}
      <View style={styles.safeBox}>
        <Text style={styles.safeText}>
          {safeText ??
            "안심하고 방문하셔도 괜찮아요. 다만 개인정보 입력 시에는 항상 주의하세요."}
        </Text>
      </View>

    </View>
  );
};

export default XaiSafeCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
  },

  reasonBox: {
    backgroundColor: "#EDEEF5",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingTop: 13,
    paddingBottom: 14,
    marginBottom: 12,
  },

  reasonTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E1B4B",
    marginBottom: 10,
  },

  reasonList: {
    gap: 6,
  },

  reasonItem: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: "600",
    color: "#6B7080",
  },

  safeBox: {
    backgroundColor: "#DEF4ED",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  safeText: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: "500",
    color: "#0D553F",
  },
});