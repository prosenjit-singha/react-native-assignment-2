import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, Image } from "react-native";
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

  React.useEffect(() => {
    opacity.value = withTiming(theme.darkMode ? 0 : 1, timingOptions);
  }, [theme.darkMode]);

  return (
    <ImageBackground
      source={require("../../../assets/bg-1.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <Animated.Image
        source={require("../../../assets/bg-light.jpg")}
        style={[
          {
            position: "absolute",
            height: "110%",
            width: "120%",
            objectFit: "cover",
          },
          {
            opacity,
          },
        ]}
      />
      <HomeHeader maxY={maxYToTranslate} more={more} updateMaxY={updateMaxY} />
      <MiddleSection maxY={maxYToTranslate} more={more} setMore={setMore} />
      <BottomSection
        maxY={maxYToTranslate}
        more={more}
        updateMaxY={updateMaxY}
      />
      <StatusBar style={theme.darkMode ? "light" : "dark"} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    padding: 24,
    paddingTop: 50,
    position: "relative",
    zIndex: 1,
  },
});
