import React, {
  useEffect,
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

import RiskAnalysisLoadingCard from "./RiskAnalysisLoadingCard";
import RiskAnalysisResultCard from "./RiskAnalysisResultCard";

import RiskBuyResultCard from "./RiskBuyResultCard";
import TranslationBuyScreen from "./TranslationBuyScreen";
import TranslationGiftcard from "./TranslationGiftcard";
import TranslationLoadingCard from "./TranslationLoadingCard";
import TranslationResultScreen from "./TranslationResultScreen";

const COLLAPSED_HEIGHT = 80;
const EXPANDED_HEIGHT = 500;
const DRAG_THRESHOLD = 300;

type Tab = "translate" | "warning";

type BrowserBottomSheetProps = {
  bottomInset?: number;
  url: string;
};

export function BrowserBottomSheet({
  bottomInset = 0,
  url,
}: BrowserBottomSheetProps) {
  const [isExpanded, setIsExpanded] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState<Tab>("translate");

  // 로딩 여부
  const [isLoading, setIsLoading] =
    useState(true);

  const timerRef = useRef<
    ReturnType<typeof setTimeout> | null
  >(null);

  const translateY = useRef(
    new Animated.Value(
      EXPANDED_HEIGHT -
        COLLAPSED_HEIGHT
    )
  ).current;

  // URL 판별
  const isGiftcardPage =
    url == "https://swillhouse.wrapped.store/gift-card/restaurant-hubert-gift-card";

  const isCheckoutPage =
    url == "https://swillhouse.com/venues/restaurant-hubert/";


  const isBuyPage = 
   url == "https://swillhouse.wrapped.store/checkout";
  // 모달 열릴 때마다
  // 3초 로딩 시작
  useEffect(() => {
    if (!isExpanded) return;

    setIsLoading(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(
      () => {
        setIsLoading(false);
      },
      3000
    );

    return () => {
      if (timerRef.current) {
        clearTimeout(
          timerRef.current
        );
      }
    };
  }, [isExpanded, activeTab, url]);

  const snapTo = (
    expanded: boolean
  ) => {
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
          Math.abs(
            gestureState.dy
          ) > 5,

      onPanResponderMove: (
        _,
        gestureState
      ) => {
        const newValue =
          isExpanded
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
          translateY.setValue(
            newValue
          );
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
          transform: [
            { translateY },
          ],
        },
      ]}
    >
      {/* HEADER */}
      <View
        style={styles.handleArea}
        {...panResponder.panHandlers}
      >
        <View style={styles.handle} />

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

              if (!isExpanded) {
                snapTo(true);
              }
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
              setActiveTab(
                "warning"
              );

              if (!isExpanded) {
                snapTo(true);
              }
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
        {activeTab ===
        "translate" ? (
          isLoading ? (
            <TranslationLoadingCard />
          ) : isGiftcardPage ? (
            <TranslationGiftcard />
          ) : isBuyPage ? (
            <TranslationBuyScreen/>
          ) : (
            <TranslationResultScreen />
          )
        ) : isLoading ? (
          <RiskAnalysisLoadingCard />
        ) : isCheckoutPage ? (
          <RiskAnalysisResultCard />
        ) : isBuyPage ? (
          <RiskBuyResultCard/>
        ) :  (
          <RiskAnalysisResultCard />
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
  },

  tabText: {
    fontSize: 12,
    fontWeight: "500",

    color: "#9097B8",
  },

  activeTabText: {
    fontWeight: "700",
    color: "#4338CA",
  },

  content: {
    flex: 1,
  },
});