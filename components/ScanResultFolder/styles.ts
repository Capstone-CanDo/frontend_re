import { StyleSheet } from "react-native";
import { theme } from "../../constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12, 
  },
  errortext: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  errorcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    fontSize: 20,
    marginRight: 12,
  },
  logo: {
    width: 120, // 원하는 너비
    height: 40, // 원하는 높이
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  content: {
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  statusCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    gap: 12,

    height: 82,
    borderRadius: 16,

    borderWidth: 1,
    marginBottom: 12,  },
  statusText: {
    fontSize: 16,
    fontWeight: "600",
  },
  // safe
  safeCard: {
    backgroundColor: "#F0FDF4",
    borderColor: "#B9F8CF",
  },
  safeText: {
    color: "#008236",
  },

  // malicious
  maliciousCard: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FFC9C9"
  },
  maliciousText: {
    color: "#C10007",
  },
  iconWrapper: {
  width: 48,
  height: 48,
  borderRadius: 9999,
  justifyContent: "center",
  alignItems: "center",
},
  safeiconWrapper: {
    backgroundColor: "#DCFCE7",
    borderRadius: 9999,
  },
  maliciousiconWrapper: {
    borderColor: "#FFC9C9",
    borderRadius: 9999,
  },
  button: {
    backgroundColor: theme.colors.defalut,
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  resultButton: {
    backgroundColor: theme.colors.defalut,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 16,
  paddingVertical: 14,
  paddingHorizontal: 16,
  marginBottom: 10,
},

leftContent: {
  flexDirection: "row",
  alignItems: "center",
},

searchIcon: {
  marginRight: 8,
},

resultText: {
  fontSize: 14,
  color: "#374151",
},
  primaryBtn: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  warning: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#ffe5e5",
    marginTop: 10,
  },
  xaicontainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
  },
  xaiheader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 27,
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  

  levelContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },

  levelBtn: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f3f4f6",
    height: 60,
  },

  activeBtn: {
    backgroundColor: "#dbeafe",
    borderWidth: 2,
    borderColor: "#2563eb",
  },

  levelText: {
    fontSize: 12,
    marginTop: 4,
    color: "#374151",
  },

  activeText: {
    color: "#2563eb",
  },

  explainBox: {
    backgroundColor: "#f9fafb",
    padding: 12,
    borderRadius: 10,
  },

  explainTitle: {
    fontWeight: "600",
    marginBottom: 6,
  },

  point: {
    fontSize: 13,
    color: "#374151",
    marginBottom: 4,
  },

  adviceBox: {
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
  },

  safe: {
    backgroundColor: "#ecfdf5",
  },

  suspicious: {
    backgroundColor: "#fef9c3",
  },

  danger: {
    backgroundColor: "#fee2e2",
  },

  adviceText: {
    fontSize: 13,
    fontWeight: "500",
  },
});