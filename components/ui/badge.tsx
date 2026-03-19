import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/index";

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
    fontFamily: theme.fontFamily.regular,
  },
});

const variantStyles = {
  default: {
    backgroundColor: theme.colors.safe,
    borderColor: "transparent",
  },

  secondary: {
    backgroundColor: theme.colors.warning,
    borderColor: "transparent",
  },

  destructive: {
    backgroundColor: theme.colors.danger,
    borderColor: "transparent",
  },

  outline: {
    backgroundColor: "transparent",
    borderColor: theme.colors.border,
  },
};

const textVariantStyles = {
  default: {
    color: theme.fontcolor.safe,
  },

  secondary: {
    color: theme.fontcolor.warning,
  },

  destructive: {
    color: theme.fontcolor.danger,
  },

  outline: {
    color: theme.fontcolor.outline,
  },
};