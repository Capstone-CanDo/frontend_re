import { StyleSheet } from "react-native";
import { theme } from "../../constants/index";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  close: {
    fontSize: 20,
  },

  urlBar: {
    padding: 10,
    backgroundColor: "#eee",
  },

  urlText: {
    fontSize: 12,
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