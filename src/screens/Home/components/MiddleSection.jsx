import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Time from "./HomeTime";
import { useCustomTheme } from "../../../context/theme.context";
import Button from "./Button";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { timingOptions } from "../home.const";

const MiddleSection = ({ more, setMore }) => {
  const iconRotation = useSharedValue(0);
  const { theme, toggleTheme } = useCustomTheme();

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
    <View
      style={{
        alignItems: "flex-start",
        width: "100%",
        marginVertical: 24,
        paddingHorizontal: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 16,
          height: 40,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={toggleTheme}
          style={{ borderRadius: 100, overflow: "hidden" }}
        >
          {theme.darkMode ? (
            <Image
              source={require(`../../../../assets/moon.png`)}
              style={{ width: 25 }}
            />
          ) : (
            <Image
              source={require(`../../../../assets/sunny.png`)}
              style={{ width: 25, height: 25, objectFit: "cover" }}
            />
          )}
        </TouchableOpacity>
        <Text style={{ color: theme.palette.text.primary, fontWeight: 500 }}>
          Good Evening
        </Text>
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
    </View>
  );
};

export default MiddleSection;
