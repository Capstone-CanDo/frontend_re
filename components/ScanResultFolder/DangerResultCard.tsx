import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DangerResultCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusWrapper}>
        <Text style={styles.statusText}>위험 감지</Text>
      </View>

      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>악성 URL이에요</Text>
      </View>

      <View style={styles.paragraphWrapper}>
        <Text style={styles.paragraph}>
          피싱 시도가 탐지됐어요
        </Text>
      </View>
    </View>
  );
};

export default DangerResultCard;

const styles = StyleSheet.create({
  container: {
    height: 229,
    backgroundColor: "#BB6868",
    borderRadius: 24,
    alignSelf: "stretch",
    position: "relative",
    alignItems: "center",
    marginBottom: 16,
  },

  statusWrapper: {
    position: "absolute",
    width: 321,
    height: 17,
    top: 116,
    justifyContent: "center",
    alignItems: "center",
  },

  statusText: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 1.1,
    textAlign: "center",
    color: "rgba(255,255,255,0.7)",
  },

  headingWrapper: {
    position: "absolute",
    width: 321,
    height: 33,
    top: 140,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontFamily: "Inter",
    fontWeight: "800",
    fontSize: 22,
    lineHeight: 33,
    textAlign: "center",
    color: "#FFFFFF",
  },

  paragraphWrapper: {
    position: "absolute",
    width: 321,
    height: 20,
    top: 181,
    justifyContent: "center",
    alignItems: "center",
  },

  paragraph: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(255,255,255,0.7)",
  },
});