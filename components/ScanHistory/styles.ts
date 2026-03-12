import { StyleSheet } from "react-native";

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
    backgroundColor: "#2563eb",
    padding: 24,
    paddingBottom: 48,
  },
  Headercontent: {
    paddingHorizontal: 12,
  width: "100%",
  maxWidth: 393,

  
},

  headerTitle: {
  fontSize: 24,
  lineHeight: 32,
  fontWeight: "500",
  color: "#FFFFFF",
},

  headerSub: {
    fontSize: 16,
  lineHeight: 24,
    color: "#DBEAFE",
    marginTop: 5,
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
    color: "#16a34a",
  },

  dangerNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#dc2626",
  },

  statLabel: {
    fontSize: 12,
    color: "#6b7280",
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
  backgroundColor: "#2563eb",
},

safeActive: {
  backgroundColor: "#16a34a",
},

dangerActive: {
  backgroundColor: "#dc2626",
},

warningActive: {
  backgroundColor: "#ca8a04",
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
  borderColor: "#16a34a",
},

maliciousCard: {
  borderColor: "#dc2626",
},

suspiciousCard: {
  borderColor: "#ca8a04",
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
    color: "#6b7280",
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
    color: "#6b7280",
  },


});