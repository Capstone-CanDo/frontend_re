import React from "react";
import { StyleProp, StyleSheet, TextInput, TextStyle } from "react-native";
import { theme } from "../../constants/index";

interface InputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
}

export function Input({ value, onChangeText, placeholder, style }: InputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[styles.input, style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: theme.fontFamily.regular,
  },
});

/*

//style={[styles.input, style]} 오류로 인해 잠시 폐기

import React from "react";
import { StyleSheet, TextInput, TextStyle, ViewStyle } from "react-native";

interface InputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Input({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  style,
}: InputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
      placeholderTextColor="#888"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "#ffffff",
  },
});*/