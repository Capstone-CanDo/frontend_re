import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Badge } from "../ui/badge";
import { Card, CardTitle } from "../ui/card";

interface TravelCardProps {
  country: string;
  startDate: string;
  endDate: string;
  duration: number;
  status: string;

  onPressInfo?: () => void;
  onPressDate?: () => void;
}

export function TravelCard({
  country,
  startDate,
  endDate,
  duration,
  status,
  onPressInfo,
  onPressDate,
}: TravelCardProps) {
  return (
    <View style={styles.container}>

      {/* 여행 정보 카드 */}
      <Pressable
        onPress={onPressInfo}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed,
        ]}
      >
        <Card style={styles.card}>
          <View style={styles.topRow}>

            <View style={styles.titleGroup}>
              <CardTitle>내 여행</CardTitle>

              <View style={styles.countryRow}>
                <Ionicons
                  name="location-outline"
                  size={16}
                  color="#4A5565"
                />

                <Text style={styles.countryText}>
                  {country}
                </Text>
              </View>
            </View>

            <Badge variant="outline">
              {status}
            </Badge>

          </View>
        </Card>
      </Pressable>

      {/* 기간 카드 */}
      <Pressable
        onPress={onPressDate}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed,
        ]}
      >
        <Card style={styles.card}>
          <View style={styles.dateRow}>

            <Ionicons
              name="calendar-outline"
              size={16}
              color="#6A7282"
            />

            <Text style={styles.dateText}>
              {startDate} - {endDate}
            </Text>

            <Text style={styles.durationText}>
              ({duration}일)
            </Text>

          </View>
        </Card>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 0,
  },

  pressable: {
    borderRadius: 18,
  },

  pressed: {
    opacity: 0.8,
  },

  card: {
    padding: 24,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  titleGroup: {
    gap: 4,
  },

  countryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  countryText: {
    fontSize: 16,
    color: "#4A5565",
    lineHeight: 24,
  },

  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  dateText: {
    fontSize: 14,
    color: "#4A5565",
    lineHeight: 20,
  },

  durationText: {
    fontSize: 14,
    color: "#99A1AF",
    lineHeight: 20,
  },
});