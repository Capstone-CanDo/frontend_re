import { StyleSheet } from "react-native";
import { theme } from "../../constants/index";

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  scanWrapper: {
     ...StyleSheet.absoluteFillObject,
    gap: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  scanBox: {
    width: 260,
    height: 260,
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 24,
    position: "relative",
  },

  corner: {
    position: "absolute",
    width: 32,
    height: 32,
    borderColor: "#FDC700",
  },

  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 24,
  },

  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 24,
  },

  iconcenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 24,
  },

  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 24,
  },

  

  

  textContainer: {
    alignItems: "center",
    gap: 8,
  },

  title: {
    color: theme.fontcolor.defalut,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: theme.fontFamily.medium,
  },

  desc: {
    color: theme.fontcolor.defalut,
    fontSize: 14,
    fontFamily: theme.fontFamily.regular,
    textAlign: "center",
  },
  
});