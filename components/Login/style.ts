import { StyleSheet } from "react-native";
import { theme } from "../../constants/index";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb" },

  header: { padding: 20, flexDirection: "row", alignItems: "center" },
  logoBox: {
    width: 32,
    height: 32,
    backgroundColor: "#2563eb",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  logoText: { marginLeft: 8, fontSize: 18, fontWeight: "bold", color: "#2563eb" },

  content: { flex: 1, justifyContent: "center", padding: 20 },
  centerBox: { width: "100%", maxWidth: 400, alignSelf: "center" },

  titleBox: { alignItems: "center", marginBottom: 20 },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#dbeafe",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: { fontSize: 24, fontWeight: "bold" },
  subtitle: { color: theme.fontcolor.second },

  form: { gap: 12 },

  label: { fontSize: 14, marginBottom: 4 },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    padding: 10,
    borderRadius: 8,
  },
  input: { flex: 1 },

  error: { color: "red", fontSize: 12 },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  remember: { fontSize: 14 },
  link: { color: "#2563eb" },

  noticeBox: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#eff6ff",
    padding: 10,
    borderRadius: 8,
  },
  noticeTitle: { fontSize: 12, fontWeight: "bold" },
  noticeText: { fontSize: 12 },

  signup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  footer: { marginTop: 20, alignItems: "center" },
  footerText: { fontSize: 12, color: "#9ca3af" },
});