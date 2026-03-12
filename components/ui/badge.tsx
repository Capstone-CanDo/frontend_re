import React from "react";
import { StyleSheet, Text, View } from "react-native";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  style?: any;
  textStyle?: any;
}

export function Badge({
  children,
  variant = "default",
  style,
  textStyle,
}: BadgeProps) {
  return (
    <View style={[styles.badge, variantStyles[variant], style]}>
      <Text style={[styles.text, textVariantStyles[variant], textStyle]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
  },

  text: {
    fontSize: 12,
    fontWeight: "500",
  },
});

const variantStyles = {
  default: {
    backgroundColor: "#16a34a",
    borderColor: "transparent",
  },

  secondary: {
    backgroundColor: "#ca8a04",
    borderColor: "transparent",
  },

  destructive: {
    backgroundColor: "#ef4444",
    borderColor: "transparent",
  },

  outline: {
    backgroundColor: "transparent",
    borderColor: "#d1d5db",
  },
};

const textVariantStyles = {
  default: {
    color: "white",
  },

  secondary: {
    color: "white",
  },

  destructive: {
    color: "white",
  },

  outline: {
    color: "#111",
  },
};