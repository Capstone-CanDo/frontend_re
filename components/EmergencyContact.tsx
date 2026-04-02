import React, { useState } from "react";
import {
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import {
    AlertCircle,
    Building2,
    Hospital,
    Info,
    MapPin,
    Phone,
    Search,
    Shield,
} from "lucide-react-native";

interface EmergencyProps {
  country: string;
}

interface EmergencyContact {
  id: number;
  name: string;
  type: "embassy" | "police" | "hospital" | "helpline";
  phone: string;
  address: string;
  hours: string;
  distance?: string;
}

export default function Emergency({ country }: EmergencyProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const emergencyContacts: EmergencyContact[] = [
    {
      id: 1,
      name: "주일본 대한민국 대사관",
      type: "embassy",
      phone: "+81-3-3452-7611",
      address: "도쿄도 미나토구 미나미아자부 1-2-5",
      hours: "평일 09:00 - 17:30",
      distance: "2.3km",
    },
    {
      id: 2,
      name: "긴급영사 콜센터",
      type: "helpline",
      phone: "+81-3-3452-7860",
      address: "24시간 운영",
      hours: "연중무휴 24시간",
    },
    {
      id: 3,
      name: "일본 경찰 (긴급)",
      type: "police",
      phone: "110",
      address: "전국 어디서나",
      hours: "연중무휴 24시간",
    },
    {
      id: 4,
      name: "일본 구급차/소방서",
      type: "hospital",
      phone: "119",
      address: "전국 어디서나",
      hours: "연중무휴 24시간",
    },
  ];

  const filteredContacts = emergencyContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "embassy":
        return <Building2 size={20} color="#2563eb" />;
      case "police":
        return <Shield size={20} color="#dc2626" />;
      case "hospital":
        return <Hospital size={20} color="#16a34a" />;
      case "helpline":
        return <Phone size={20} color="#9333ea" />;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>긴급 연락처</Text>
        <Text style={styles.headerSub}>{country} 긴급 상황 대응</Text>
      </View>

      {/* 긴급 안내 */}
      <View style={styles.alertCard}>
        <AlertCircle size={24} color="#dc2626" />
        <Text style={styles.alertText}>
          생명이 위험한 상황에서는 즉시 110(경찰) 또는 119(구급)으로 연락하세요.
        </Text>
      </View>

      {/* 검색 */}
      <View style={styles.searchBox}>
        <Search size={16} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="기관명 또는 위치 검색..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* 연락처 리스트 */}
      {filteredContacts.map((contact) => (
        <View key={contact.id} style={styles.card}>
          <View style={styles.row}>
            {getIcon(contact.type)}

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{contact.name}</Text>

              <View style={styles.infoRow}>
                <Phone size={12} />
                <Text style={styles.infoText}>{contact.phone}</Text>
              </View>

              <View style={styles.infoRow}>
                <MapPin size={12} />
                <Text style={styles.infoText}>{contact.address}</Text>
              </View>

              <View style={styles.infoRow}>
                <Info size={12} />
                <Text style={styles.infoText}>{contact.hours}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.callButton}
            onPress={() => handleCall(contact.phone)}
          >
            <Phone size={16} color="white" />
            <Text style={styles.callText}>전화하기</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  header: {
    backgroundColor: "#dc2626",
    padding: 20,
  },

  headerTitle: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },

  headerSub: {
    color: "#fecaca",
  },

  alertCard: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#fee2e2",
    padding: 16,
    margin: 16,
    borderRadius: 10,
  },

  alertText: {
    flex: 1,
    color: "#7f1d1d",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 16,
    padding: 10,
    borderRadius: 10,
    gap: 8,
  },

  searchInput: {
    flex: 1,
  },

  card: {
    backgroundColor: "white",
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  infoText: {
    fontSize: 13,
    color: "#555",
  },

  callButton: {
    marginTop: 12,
    backgroundColor: "#dc2626",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },

  callText: {
    color: "white",
    fontWeight: "bold",
  },
});