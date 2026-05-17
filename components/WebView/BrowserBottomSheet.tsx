import {
  Globe,
  ShieldAlert,
} from "lucide-react-native";
import React, {
  useRef,
  useState,
} from "react";

import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const COLLAPSED_HEIGHT = 80; 
const EXPANDED_HEIGHT = 400; 
const DRAG_THRESHOLD = 200;

type Tab = "translate" | "warning";

type BrowserBottomSheetProps = {
  bottomInset?: number;
};

export function BrowserBottomSheet({
  bottomInset = 0,
}: BrowserBottomSheetProps) {
  const [isExpanded, setIsExpanded] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState<Tab>("translate");

  const translateY = useRef(
    new Animated.Value(
      EXPANDED_HEIGHT - COLLAPSED_HEIGHT
    )
  ).current;

  const snapTo = (expanded: boolean) => {
    Animated.spring(translateY, {
      toValue: expanded
        ? 0
        : EXPANDED_HEIGHT -
          COLLAPSED_HEIGHT,

      useNativeDriver: true,
      bounciness: 0,
    }).start();

    setIsExpanded(expanded);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder:
        (_, gestureState) =>
          Math.abs(gestureState.dy) > 5,

      onPanResponderMove: (
        _,
        gestureState
      ) => {
        const newValue = isExpanded
          ? gestureState.dy
          : EXPANDED_HEIGHT -
              COLLAPSED_HEIGHT +
            gestureState.dy;

        if (
          newValue >= 0 &&
          newValue <=
            EXPANDED_HEIGHT -
              COLLAPSED_HEIGHT
        ) {
          translateY.setValue(newValue);
        }
      },

      onPanResponderRelease: (
        _,
        gestureState
      ) => {
        if (
          gestureState.dy <
          -DRAG_THRESHOLD
        ) {
          snapTo(true);
        } else if (
          gestureState.dy >
          DRAG_THRESHOLD
        ) {
          snapTo(false);
        } else {
          snapTo(isExpanded);
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          bottom: bottomInset,
          transform: [{ translateY }],
        },
      ]}
    >
      {/* HANDLE + TABS */}
      <View
        style={styles.handleArea}
        {...panResponder.panHandlers}
      >
        <View style={styles.handle} />

        {/* Tabs */}
        <View style={styles.tabWrapper}>
          {/* 번역 */}
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab ===
                "translate" &&
                styles.activeTab,
            ]}
            onPress={() => {
              setActiveTab(
                "translate"
              );

              if (!isExpanded)
                snapTo(true);
            }}
          >
            <Text
              style={[
                styles.tabText,
                activeTab ===
                  "translate" &&
                  styles.activeTabText,
              ]}
            >
              번역
            </Text>
          </TouchableOpacity>

          {/* 위험 요소 */}
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab ===
                "warning" &&
                styles.activeTab,
            ]}
            onPress={() => {
              setActiveTab("warning");

              if (!isExpanded)
                snapTo(true);
            }}
          >
            <Text
              style={[
                styles.tabText,
                activeTab ===
                  "warning" &&
                  styles.activeTabText,
              ]}
            >
              위험 요소
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        {activeTab === "translate" ? (
          <>
            <View style={styles.iconBox}>
              <Globe
                size={20}
                color="#4338CA"
              />
            </View>

            <Text style={styles.title}>
              번역 기능 준비 중
            </Text>

            <Text
              style={styles.description}
            >
              페이지 로드 후{"\n"}
              자동으로 번역됩니다
            </Text>
          </>
        ) : (
          <>
            <View style={styles.iconBox}>
              <ShieldAlert
                size={20}
                color="#4338CA"
              />
            </View>

            <Text style={styles.title}>
              위험 요소 분석 준비 중
            </Text>

            <Text
              style={styles.description}
            >
              페이지 로드 후{"\n"}
              자동으로 위험 요소를
              분석합니다
            </Text>
          </>
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

    height: EXPANDED_HEIGHT,

    backgroundColor: "#FFFFFF",

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    shadowColor: "#4338CA",
    shadowOffset: {
      width: 0,
      height: -6,
    },

    shadowOpacity: 0.08,
    shadowRadius: 30,

    elevation: 10,
  },

  handleArea: {
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },

  handle: {
    width: 36,
    height: 4,

    borderRadius: 2,

    backgroundColor: "#ECEDF5",

    alignSelf: "center",
    marginBottom: 14,
  },

  tabWrapper: {
    flexDirection: "row",

    backgroundColor: "#EEF2FF",

    borderRadius: 12,

    padding: 3,
    gap: 4,
  },

  tabButton: {
    flex: 1,
    height: 34,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 9,
  },

  activeTab: {
    backgroundColor: "#FFFFFF",

    shadowColor: "#4338CA",
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.13,
    shadowRadius: 8,

    elevation: 3,
  },

  tabText: {
    fontSize: 12,
    fontWeight: "500",

    lineHeight: 18,

    color: "#9097B8",
  },

  activeTabText: {
    fontWeight: "700",
    color: "#4338CA",
  },

  content: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    paddingBottom: 24,
  },

  iconBox: {
    width: 40,
    height: 40,

    borderRadius: 14,

    backgroundColor: "#EEF2FF",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 12,
  },

  title: {
    fontSize: 13,
    fontWeight: "700",

    lineHeight: 20,

    color: "#4B5274",

    marginBottom: 4,
  },

  description: {
    fontSize: 11,
    fontWeight: "400",

    lineHeight: 18,

    textAlign: "center",

    color: "#9097B8",
  },
});