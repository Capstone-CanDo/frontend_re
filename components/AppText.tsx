import { Text, TextProps } from "react-native";
import { theme } from "../constants/index";

export function AppText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        { fontFamily: theme.fontFamily.regular },
        props.style,
      ]}
    />
  );
}