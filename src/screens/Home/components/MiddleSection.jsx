import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import Time from "./HomeTime";
import { useCustomTheme } from "../../../context/theme.context";
import Button from "./Button";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { timingOptions } from "../home.const";

const MiddleSection = ({ more, setMore, maxY }) => {
  const iconRotation = useSharedValue(0);
  const { theme, toggleTheme } = useCustomTheme();

  const wrapperAnimationStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(more ? -maxY : 0, timingOptions) }],
  }));

  const handleToggleMore = () => {
    setMore((prev) => {
      iconRotation.value = withTiming(prev ? 0 : 1, timingOptions);
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
    <Animated.View
      style={[
        {
          alignItems: "flex-start",
          width: "100%",
          marginVertical: 24,
        },
        wrapperAnimationStyles,
      ]}
    >
      <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
        <TouchableHighlight onPress={toggleTheme}>
          <Image source={require("../../../../assets/moon.png")} />
        </TouchableHighlight>
        <Text style={{ color: theme.palette.text.primary }}>Good Evening</Text>
      </View>

      <Time />

      {/* Location */}
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Inter Bold",
          textTransform: "uppercase",
          color: theme.palette.text.primary,
        }}
      >
        In London, UK
      </Text>

      {/* More Less Button */}
      <Button
        style={{ width: 105, marginTop: 24 }}
        onPress={handleToggleMore}
        label={more ? "Less" : "More"}
        endIcon={
          <Animated.View style={[animatedIconStyles]}>
            <Image source={require("../../../../assets/arrow-up.png")} />
          </Animated.View>
        }
      />
    </Animated.View>
  );
};

export default MiddleSection;
