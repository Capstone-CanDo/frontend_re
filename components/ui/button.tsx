import React from "react";
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import { theme } from "../../constants/index";


type Variant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type Size = "default" | "sm" | "lg" | "icon";

interface ButtonProps {
  children?: React.ReactNode;
  onPress?: () => void;
  variant?: Variant;
  size?: Size;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export function Button({
  children,
  onPress,
  variant = "default",
  size = "default",
  style,
  textStyle,
  disabled = false,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        variantStyles[variant],
        sizeStyles[size],
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={[styles.text, textVariantStyles[variant], textStyle]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    flexDirection: "row",
  },

  text: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: theme.fontFamily.regular
  },

  disabled: {
    opacity: 0.5,
  },
});

const variantStyles = {
  default: {
    backgroundColor: theme.colors.primary,
  },

  destructive: {
    backgroundColor: theme.colors.danger,
  },

  outline: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: "transparent",
  },

  secondary: {
    backgroundColor: theme.colors.secondbackground,
  },

  ghost: {
    backgroundColor: "transparent",
  },

  link: {
    backgroundColor: "transparent",
  },
};

const textVariantStyles = {
  default: {
    color: "white",
  },

  destructive: {
    color: "white",
  },

  outline: {
    color: "#111",
  },

  secondary: {
    color: "#111",
  },

  ghost: {
    color: "#111",
  },

  link: {
    color: "#2563eb",
  },
};

const sizeStyles = {
  default: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  sm: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  lg: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },

  icon: {
    width: 36,
    height: 36,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
};