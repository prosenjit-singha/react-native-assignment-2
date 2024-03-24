import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import Button from "./components/Button";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  ReduceMotion,
} from "react-native-reanimated";
import HomeHeader from "./components/Header";
import MiddleSection from "./components/MiddleSection";

const iconRotationDuration = 500;
const iconTimingOptions = {
  duration: iconRotationDuration,
  easing: Easing.inOut(Easing.cubic),
  reduceMotion: ReduceMotion.System,
};

export default function Home() {
  const iconRotation = useSharedValue(0);
  const [more, setMore] = useState(false);

  const toggleMore = () => {
    setMore((prev) => {
      if (prev) {
        iconRotation.value = withTiming(0, iconTimingOptions);
      } else {
        iconRotation.value = withTiming(1, iconTimingOptions);
      }
      return !prev;
    });
  };

  const animatedIconStyles = useAnimatedStyle(
    () => ({
      // opacity: iconRotation.value,
      transform: [{ rotate: iconRotation.value * 180 + "deg" }],
    }),
    []
  );

  return (
    <ImageBackground
      source={require("../../../assets/bg-1.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <HomeHeader />
      <MiddleSection />
      {/* More Less Button */}
      <Button
        style={{ width: 105 }}
        onPress={toggleMore}
        label={more ? "Less" : "More"}
        endIcon={
          <Animated.View style={[animatedIconStyles]}>
            <Image source={require("../../../assets/arrow-up.png")} />
          </Animated.View>
        }
      />
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    padding: 18,
  },
});
