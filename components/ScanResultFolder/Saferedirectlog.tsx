import { Copy, Globe, ShieldAlert } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Status = "safe" | "malicious";

interface RedirectInfo {
  final_url: string;
  redirect_count: number;
  chain: string[];
  status_codes: number[];
  status: Status;
}

interface Props {
  redirect?: RedirectInfo;
  onCopy?: () => void;
}

const SafeRedirectLog = ({ redirect, onCopy }: Props) => {
  if (!redirect) {
    return null;
  }

  const protocol = redirect.final_url
    .split("://")[0]
    ?.toUpperCase();

  const displayUrl = redirect.final_url.replace(
    /^https?:\/\//,
    ""
  );

  return (
    <>
      {/* URL CARD */}
      <View style={styles.urlCard}>
        <View style={styles.urlRow}>
          {/* Status Icon */}
          {redirect.status === "malicious" ? (
            <View style={styles.dangerIconBox}>
              <ShieldAlert size={18} color="#DC2626" />
            </View>
          ) : (
            <View style={styles.iconBox}>
              <Globe size={18} color="#404040" />
            </View>
          )}

          {/* URL */}
          <View style={styles.urlTextContainer}>
            <Text style={styles.urlLabel}>
              분석된 URL
            </Text>

            <Text
              style={styles.urlText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {displayUrl}
            </Text>
          </View>
        </View>

        {/* Copy Button */}
        <TouchableOpacity
          style={styles.copyButton}
          onPress={onCopy}
        >
          <Copy size={16} color="#4B5274" />
        </TouchableOpacity>
      </View>



      {/* INFO */}
      <View style={styles.infoRow}>
        {/* Redirect */}
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>
            리다이렉션
          </Text>

          <Text style={styles.infoValue}>
            {redirect.redirect_count}회
          </Text>

          <Text style={styles.infoSubText}>
            {redirect.redirect_count <= 3
              ? "이동 경로 추적됨"
              : "비정상적으로 많음"}
          </Text>
        </View>

        {/* Protocol */}
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>
            최종 도메인
          </Text>

          <Text style={styles.infoValue}>
            {protocol}
          </Text>

          <Text style={styles.infoSubText}>
            {protocol === "HTTPS"
              ? "안전한 연결"
              : "보안 연결 아님"}
          </Text>
        </View>
      </View>
      <View style={styles.urllistCard}>
  <Text style={styles.infoLabel}>
    리다이렉션 로그
  </Text>

  {redirect.chain.map((url, index) => (
    <View key={index} style={styles.logItem}>
      <View style={styles.numberCircle}>
        <Text style={styles.numberText}>
          {index + 1}
        </Text>
      </View>

      <View style={styles.logTextContainer}>
        <Text
          style={styles.urlList}
          numberOfLines={1}
          ellipsizeMode="middle"
        >
          {url}
        </Text>

        <Text style={styles.urlLabel}>
          상태 코드:{" "}
          {redirect.status_codes[index] ?? 200}
        </Text>
      </View>
    </View>
  ))}
</View>

    </>
  );
};

export default SafeRedirectLog;

const styles = StyleSheet.create({
  urlCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 12,
  },

  urlRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 12,
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#EEF2FF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,
  },

  dangerIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#FEE2E2",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,
  },

  urlTextContainer: {
    flex: 1,
  },

  urlLabel: {
    fontSize: 10,
    fontWeight: "600",
    lineHeight: 15,
    color: "#9097B8",
    marginBottom: 2,
  },

  urlText: {
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 20,
    color: "#1E1B4B",
  },

  copyButton: {
    width: 32,
    height: 32,
    borderRadius: 9,
    backgroundColor: "#EDEEF7",

    justifyContent: "center",
    alignItems: "center",
  },

  infoRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },

  infoCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
  },

  infoLabel: {
    fontSize: 10,
    fontWeight: "600",
    lineHeight: 15,
    color: "#9097B8",
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 24,
    color: "#1E1B4B",
    marginBottom: 2,
  },
  urllistCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  urlList: {
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 24,
    color: "#1E1B4B",
    marginBottom: 2,
  },

  infoSubText: {
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 15,
    color: "#9097B8",
  },
  logItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  numberCircle: {
    width: 16,
    height: 16,
    borderRadius: 14,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: 6,
  },
   logTextContainer: {
    flex: 1,
  },

  numberText: {
  fontSize: 9,
  fontWeight: "700",
  color: "#4B5274",
  lineHeight: 11,
},

});