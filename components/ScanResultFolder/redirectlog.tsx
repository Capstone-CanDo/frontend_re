import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface RedirectInfo {
  final_url: string;
  redirect_count: number;
  chain: string[];
  status_codes: number[];
}

interface Props {
  redirect?: RedirectInfo;
}

const RedirectLog = ({ redirect }: Props) => {
  if (!redirect || redirect.chain.length === 0) {
    return null;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>리다이렉션 로그</Text>

      {redirect.chain.map((url, index) => (
        <View key={index} style={styles.logItem}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>{index + 1}</Text>
          </View>

          <View style={styles.logTextContainer}>
            <Text style={styles.url}>{url}</Text>
            <Text style={styles.status}>
              상태 코드: {redirect.status_codes[index] ?? 200}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111827",
  },
  logItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  numberCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#E0E7FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  numberText: {
    color: "#4F46E5",
    fontWeight: "bold",
  },
  logTextContainer: {
    flex: 1,
  },
  url: {
    fontSize: 14,
    color: "#1F2937",
    marginBottom: 2,
  },
  status: {
    fontSize: 12,
    color: "#6B7280",
  },
});

export default RedirectLog;