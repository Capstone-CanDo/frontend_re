import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Card({ children, style }: any) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function CardHeader({ children, style }: any) {
  return <View style={[styles.header, style]}>{children}</View>;
}

export function CardTitle({ children, style }: any) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export function CardDescription({ children, style }: any) {
  return <Text style={[styles.description, style]}>{children}</Text>;
}

export function CardContent({ children, style }: any) {
  return <View style={[styles.content, style]}>{children}</View>;
}

export function CardFooter({ children, style }: any) {
  return <View style={[styles.footer, style]}>{children}</View>;
}

export function CardAction({ children, style }: any) {
  return <View style={[styles.action, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    paddingVertical: 16,
    marginBottom: 16,
  },

  header: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  description: {
    fontSize: 14,
    color: "#666",
  },

  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  action: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});