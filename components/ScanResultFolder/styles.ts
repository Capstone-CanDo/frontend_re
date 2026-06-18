import { StyleSheet } from "react-native";
import { theme } from "../../constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
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
    paddingBottom: 80,
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
    marginTop: 8,
    marginBottom: 12,
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

  xaicontainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },

  iconBox: {
    width: 30,
    height: 30,
    borderRadius: 9,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

 xaititle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E1B4B",
  },

  floatingButton: {
  position: "absolute",
  left: 16,
  right: 16,
  bottom: 12,

  height: 56,

  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "#404040",
  borderRadius: 18,
   zIndex: 999,
  elevation: 10,

  shadowColor: "#404040",
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.2,
  shadowRadius: 24,


},
securityButtonText: {
fontSize: 15,
  fontWeight: "700",
  lineHeight: 22,
  textAlign: "center",
  color: "#FFFFFF",
},
header: {
  height: 60,

  backgroundColor: "#FFFFFF",

  borderBottomWidth: 1,
  borderBottomColor: "#ECEDF5",

  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  paddingLeft: 16,
  paddingRight: 16,
},

headerBackButton: {
  width: 36,
  height: 36,

  borderRadius: 10,
  backgroundColor: "#EDEEF7",

  justifyContent: "center",
  alignItems: "center",
},

headerTitle: {
  fontSize: 16,
  fontWeight: "700",
  lineHeight: 24,

  color: "#1E1B4B",
},
});