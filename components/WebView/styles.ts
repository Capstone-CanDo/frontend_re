import { StyleSheet } from "react-native";
import { theme } from "../../constants/index";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // 헤더
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 36,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  headerIconBtn: {
    width: 36,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0A0A0A",
  },

  // URL 바
  urlBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },

  urlContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 36,
    paddingHorizontal: 12,
    gap: 8,
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    marginRight: 8,
  },

  urlText: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },

  detailBtn: {
    height: 32,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(20, 71, 230, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(20, 71, 230, 0.3)",
    borderRadius: 8,
  },

  detailBtnText: {
    fontSize: 12,
    color: "rgb(20, 71, 230)",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  close: {
    fontSize: 20,
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  alertBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  alertTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: theme.fontFamily.regular,
  },

  alertDesc: {
    fontSize: 14,
    marginBottom: 16,
  },

  alertBtns: {
    flexDirection: "row",
    gap: 10,
  },

  ignoreBtn: {
    flex: 1,
    padding: 12,
    backgroundColor: "#eee",
    alignItems: "center",
    borderRadius: 8,
  },

  closeBtn: {
    flex: 1,
    padding: 12,
    backgroundColor: "red",
    alignItems: "center",
    borderRadius: 8,
  },
});
