import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  reasons: string[];
  warningText?: string;
}

const XaiDangerCard = ({
  title,
  reasons,
  warningText,
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

      {/* Warning Box */}
      <View style={styles.warningBox}>
        <Text style={styles.warningText}>
          {warningText?.trim() ||
            "절대 접속하지 마세요! 개인정보가 유출될 수 있어요."}
        </Text>
      </View>

    </View>
  );
};

export default XaiDangerCard;

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

  warningBox: {
    backgroundColor: "#FBEAEA",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  warningText: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: "500",
    color: "#881818",
  },
});