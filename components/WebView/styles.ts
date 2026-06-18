import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /* SCREEN */
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  /* =========================
     HEADER
  ========================= */
  header: {
    height: 52,

    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 1,

    backgroundColor: "#FFFFFF",

    borderBottomWidth: 1,
    borderBottomColor: "#ECEDF5",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",

    flex: 1,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",

    gap: 8,
  },

  headerIconBtn: {
    width: 34,
    height: 34,

    borderRadius: 10,
    backgroundColor: "#EDEEF7",

    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    marginLeft: 8,

    fontSize: 15,
    fontWeight: "700",

    color: "#111827",
  },

  /* =========================
     URL BAR
  ========================= */
  urlBarWrapper: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 8,

    flexDirection: "row",
    alignItems: "center",

    gap: 8,

    backgroundColor: "#FFFFFF",
  },

  urlContainer: {
    flex: 1,
    height: 34,

    borderRadius: 10,
    backgroundColor: "#EEF2FF",

    paddingHorizontal: 10,

    flexDirection: "row",
    alignItems: "center",
  },

  protocolBadge: {
    minWidth: 40,
    height: 18,

    paddingHorizontal: 6,

    borderRadius: 6,

    justifyContent: "center",
    alignItems: "center",
  },

  protocolText: {
    fontSize: 9,
    fontWeight: "800",
    lineHeight: 14,

    color: "#FFFFFF",
  },

  urlText: {
    flex: 1,

    marginLeft: 8,

    fontSize: 13,
    fontWeight: "600",

    color: "#1E1B4B",
  },

  domainText: {
    marginLeft: 8,

    fontSize: 13,
    fontWeight: "700",

    color: "#1E1B4B",
  },

  pathText: {
    flex: 1,

    marginLeft: 4,

    fontSize: 13,
    fontWeight: "400",

    color: "#9097B8",
  },

  /* =========================
     JS TOGGLE
  ========================= */
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 10,
    height: 34,

    borderRadius: 10,
    backgroundColor: "#F3F4F6",
  },

  toggleLabel: {
    marginRight: 6,

    fontSize: 12,
    fontWeight: "700",

    color: "#374151",
  },

  /* =========================
     JS CARD
  ========================= */
  jsCard: {
    marginTop: 14,
    marginHorizontal: 14,
    marginBottom: 14,

    borderRadius: 20,

    paddingHorizontal: 16,
    paddingTop: 13,
    paddingBottom: 14,
  },

  jsCardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  jsLeft: {
    flexDirection: "row",
    alignItems: "center",

    flex: 1,
  },

  jsIconBox: {
    width: 38,
    height: 38,

    borderRadius: 13,
    backgroundColor: "rgba(255,255,255,0.18)",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,
  },

  jsTextContainer: {
    flex: 1,
    justifyContent: "center",
  },

  jsTitle: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 20,

    color: "#FFFFFF",

    marginBottom: 2,
  },

  jsSub: {
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16,

    color: "rgba(255,255,255,0.65)",
  },

  toggle: {
    width: 40,
    height: 24,

    borderRadius: 12,

    justifyContent: "center",

    paddingHorizontal: 3,
  },

  toggleCircle: {
    width: 18,
    height: 18,

    borderRadius: 999,
  },

  /* =========================
     WEBVIEW
  ========================= */
  webview: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  loader: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 10,

    fontSize: 13,
    color: "#6B7280",
  },

  /* =========================
     ALERT
  ========================= */
  alertBox: {
    position: "absolute",

    left: 16,
    right: 16,
    bottom: 24,

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    padding: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 20,

    elevation: 10,
  },

  alertTitle: {
    fontSize: 15,
    fontWeight: "700",

    color: "#111827",

    marginBottom: 6,
  },

  alertDesc: {
    fontSize: 13,
    lineHeight: 20,

    color: "#6B7280",

    marginBottom: 16,
  },

  alertBtns: {
    flexDirection: "row",

    gap: 10,
  },

  ignoreBtn: {
    flex: 1,
    height: 44,

    borderRadius: 12,
    backgroundColor: "#F3F4F6",

    justifyContent: "center",
    alignItems: "center",
  },

  closeBtn: {
    flex: 1,
    height: 44,

    borderRadius: 12,
    backgroundColor: "#4338CA",

    justifyContent: "center",
    alignItems: "center",
  },
  browserHeader: {
  backgroundColor: "#FFFFFF",

  borderBottomWidth: 1,
  borderBottomColor: "#ECEDF5",

  paddingHorizontal: 12,
  paddingTop: 6,
  paddingBottom: 1,
},

headerRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 6,
  paddingBottom: 8,
  gap: 8,
},

iconButton: {
  width: 34,
  height: 34,

  borderRadius: 10,
  backgroundColor: "#EDEEF7",

  justifyContent: "center",
  alignItems: "center",
},

urlBar: {
  flex: 1,
  height: 34,

  borderRadius: 10,
  backgroundColor: "#EEF2FF",

  flexDirection: "row",
  alignItems: "center",

  paddingHorizontal: 10,
  marginHorizontal: 8,
},

webviewContainer: {
  flex: 1,
  backgroundColor: "#FFFFFF",
},
  
});