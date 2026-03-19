import { StyleSheet } from "react-native";
import { theme } from "../../constants/index";

export const styles = StyleSheet.create({

  container: {
  flex: 1,
  backgroundColor: "#f9fafb",
},

scrollContent: {
  alignItems: "center",
},

content: {
  width: "100%",
  maxWidth: 393,
  paddingHorizontal: 24,
  marginTop: -60,
},

  header: {
    height: 144,
     width: "100%",
    backgroundColor: theme.colors.primary,
    padding: 24,
    paddingBottom: 48,
  },
  Headercontent: {
    paddingHorizontal: 12,
  width: "100%",
  maxWidth: 393,

  
},

  headerTitle: {
  fontSize: theme.fontSize.xl,
  lineHeight: 32,
  fontWeight: "500",
  color: theme.fontcolor.historyheader,
  fontFamily: theme.fontFamily.bold,
},

  headerSub: {
    fontSize: theme.fontSize.md,
  lineHeight: 24,
    color: theme.fontcolor.historysub,
    marginTop: 5,
    fontFamily: theme.fontFamily.medium,
  },

  statsCard: {
   
  height: 80,
  marginHorizontal: 0,
  marginVertical: 16,
  paddingVertical: 16,
  paddingLeft: 16,
  paddingRight: 16,
  backgroundColor: "#FFFFFF",
  borderWidth: 1,
  borderColor: "rgba(0,0,0,0.1)",
  borderRadius: 14,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.15,
  shadowRadius: 10,
  elevation: 6,
  },

  statsRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  },

  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statcenterItem: {
    flex: 1,
    alignItems: "center",
    borderRightWidth: 1,       // 오른쪽 세로 테두리
    borderRightColor: "#ccc",
    borderLeftWidth: 1,       // 오른쪽 세로 테두리
    borderLeftColor: "#ccc",
  },

  statRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  statNumber: {
    fontSize: 22,
    fontWeight: "bold",
  },

  safeNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.safe,
    fontFamily: theme.fontFamily.regular,
  },

  dangerNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.danger,
    fontFamily: theme.fontFamily.regular,
  },

  statLabel: {
    fontSize: 12,
    color: theme.fontcolor.second,
    fontFamily: theme.fontFamily.regular,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingBottom: 8,
  },

  filterRow: {
  flexDirection: "row",
  gap: 8,
  marginHorizontal: 0,
  marginBottom: 16,
},

allActive: {
  backgroundColor: theme.colors.primary,
},

safeActive: {
  backgroundColor: theme.colors.safe,
},

dangerActive: {
  backgroundColor: theme.colors.danger,
},

warningActive: {
  backgroundColor: theme.colors.warning,
},

  input: {
    flex: 1,
  },

  card: {
    width: 344,
    height: 100,
    marginHorizontal: 0,
    padding: 16,
    borderRadius: 12,
  },
  safeCard: {
  borderColor: theme.colors.safe,
},

maliciousCard: {
  borderColor: theme.colors.danger,
},

suspiciousCard: {
  borderColor: theme.colors.warning,
},

  cardRow: {
    flexDirection: "row",
    gap: 12,
  },

  cardContent: {
    flex: 1,
  },

  url: {
    fontSize: 14,
    fontWeight: "500",
  },

  metaRow: {
    flexDirection: "row",
    gap: 8,
  },

  metaText: {
    fontSize: 12,
    color: theme.fontcolor.second,
    fontFamily: theme.fontFamily.regular,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  locationText: {
    fontSize: 12,
    color: theme.fontcolor.second,
    fontFamily: theme.fontFamily.regular,
  },


});