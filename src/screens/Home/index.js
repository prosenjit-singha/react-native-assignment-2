import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  View,
} from "react-native";
import React, { useState } from "react";
import HomeHeader from "./components/Header";
import MiddleSection from "./components/MiddleSection";
import BottomSection from "./components/BottomSection";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useCustomTheme } from "../../context/theme.context";
import { timingOptions } from "./home.const";

export default function Home() {
  const [more, setMore] = useState(false);
  const [maxYToTranslate, setMaxYToTranslate] = useState(200);
  const { theme } = useCustomTheme();
  const opacity = useSharedValue(theme.darkMode ? 0 : 1);

  const updateMaxY = (value) =>
    setMaxYToTranslate((prev) => (value > prev ? value : prev));

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: withTiming(more ? -maxYToTranslate : 0, timingOptions) },
    ],
  }));

  React.useEffect(() => {
    opacity.value = withTiming(theme.darkMode ? 0 : 1, timingOptions);
  }, [theme.darkMode]);

  return (
    <ImageBackground
      source={require("../../../assets/bg-1.png")}
      resizeMode="cover"
      style={{ flex: 1, zIndex: 1, position: "relative" }}
    >
      <Animated.Image
        source={require("../../../assets/bg-light.jpg")}
        style={[
          {
            position: "absolute",
            height: "110%",
            width: "120%",
            objectFit: "cover",
            opacity: theme.darkMode ? 0 : 1,
          },
          {
            opacity,
          },
        ]}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Animated.View
          style={[
            {
              flex: 1,
              position: "relative",
              justifyContent: "flex-end",
              // transform: [{ translateY: 100 }],
            },
            animatedStyle,
          ]}
        >
          <HomeHeader
            maxY={maxYToTranslate}
            more={more}
            updateMaxY={updateMaxY}
          />
          <MiddleSection maxY={maxYToTranslate} more={more} setMore={setMore} />
          <BottomSection
            maxY={maxYToTranslate}
            more={more}
            updateMaxY={updateMaxY}
          />
        </Animated.View>
      </SafeAreaView>
      <StatusBar style={theme.darkMode ? "light" : "dark"} />
    </ImageBackground>
  );
}
