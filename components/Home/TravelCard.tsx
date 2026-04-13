import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Badge } from "../ui/badge";
import { Card, CardTitle } from "../ui/card";

interface TravelCardProps {
  country: string;
  startDate: string;
  endDate: string;
  duration: number;
  status: string;
}

export function TravelCard({ country, startDate, endDate, duration, status }: TravelCardProps) {
  return (
    <Card style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.titleGroup}>
          <CardTitle>내 여행</CardTitle>
          <View style={styles.countryRow}>
            <Ionicons name="location-outline" size={16} color="#4A5565" />
            <Text style={styles.countryText}>{country}</Text>
          </View>
        </View>
        <Badge variant="outline">{status}</Badge>
      </View>

      <View style={styles.dateRow}>
        <Ionicons name="calendar-outline" size={16} color="#6A7282" />
        <Text style={styles.dateText}>{startDate} - {endDate}</Text>
        <Text style={styles.durationText}>({duration}일)</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
    gap: 40,
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
