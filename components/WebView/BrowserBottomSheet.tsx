import React, { useRef, useState } from "react";
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const COLLAPSED_HEIGHT = 80;
const EXPANDED_HEIGHT = 460;
const DRAG_THRESHOLD = 50;

type Tab = "translate" | "warning";

export function BrowserBottomSheet() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("translate");
  const translateY = useRef(
    new Animated.Value(EXPANDED_HEIGHT - COLLAPSED_HEIGHT)
  ).current;

  const snapTo = (expanded: boolean) => {
    Animated.spring(translateY, {
      toValue: expanded ? 0 : EXPANDED_HEIGHT - COLLAPSED_HEIGHT,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
    setIsExpanded(expanded);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 5,
      onPanResponderMove: (_, gestureState) => {
        const newValue = isExpanded
          ? gestureState.dy
          : EXPANDED_HEIGHT - COLLAPSED_HEIGHT + gestureState.dy;
        if (newValue >= 0 && newValue <= EXPANDED_HEIGHT - COLLAPSED_HEIGHT) {
          translateY.setValue(newValue);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -DRAG_THRESHOLD) {
          snapTo(true);
        } else if (gestureState.dy > DRAG_THRESHOLD) {
          snapTo(false);
        } else {
          snapTo(isExpanded);
        }
      },
    })
  ).current;

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      {/* 핸들 영역 */}
      <View style={styles.handleArea} {...panResponder.panHandlers}>
        <View style={styles.handle} />

        {/* 탭 */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "translate" && styles.tabActive]}
            onPress={() => {
              setActiveTab("translate");
              if (!isExpanded) snapTo(true);
            }}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "translate" && styles.tabTextActive,
              ]}
            >
              번역
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "warning" && styles.tabActive]}
            onPress={() => {
              setActiveTab("warning");
              if (!isExpanded) snapTo(true);
            }}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "warning" && styles.tabTextActive,
              ]}
            >
              위험 문구
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 콘텐츠 */}
      <View style={styles.content}>
        {activeTab === "translate" ? (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>번역 기능 준비 중</Text>
            <Text style={styles.placeholderSub}>
              Google Translation API 연동 후 활성화됩니다
            </Text>
          </View>
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>위험 문구 탐지 준비 중</Text>
          </View>
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: EXPANDED_HEIGHT,
    backgroundColor: "#fff",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
  },

  handleArea: {
    paddingTop: 12,
    paddingHorizontal: 24,
    gap: 12,
  },

  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#D1D5DB",
    borderRadius: 2,
    alignSelf: "center",
  },

  tabRow: {
    flexDirection: "row",
    gap: 8,
  },

  tab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
  },

  tabActive: {
    backgroundColor: "rgba(20, 71, 230, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(20, 71, 230, 0.3)",
  },

  tabText: {
    fontSize: 14,
    color: "#6B7280",
  },

  tabTextActive: {
    color: "rgb(20, 71, 230)",
    fontWeight: "600",
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },

  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  placeholderText: {
    fontSize: 14,
    color: "#6B7280",
    fontWeight: "600",
  },

  placeholderSub: {
    fontSize: 12,
    color: "#9CA3AF",
  },
});
