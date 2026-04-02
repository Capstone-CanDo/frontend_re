import { StyleSheet } from "react-native";
import { theme } from "../../constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  back: {
    fontSize: 20,
    marginRight: 12,
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
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  primaryBtn: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  warning: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#ffe5e5",
    marginTop: 10,
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