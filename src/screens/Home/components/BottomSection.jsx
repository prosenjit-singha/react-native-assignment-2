import React from "react";
import { View, StyleSheet, Text, useColorScheme } from "react-native";
import { BlurView } from "expo-blur";
import { useCustomTheme } from "../../../context/theme.context";

import Animated, {
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { timingOptions } from "../home.const";

const BottomSection = ({ updateMaxY, more, maxY }) => {
  const { theme } = useCustomTheme();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(more ? 0 : maxY, timingOptions) }],
  }));

  return (
    <Animated.View
      onLayout={(e) => updateMaxY(e.nativeEvent.layout.height)}
      style={[
        {
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          overflow: "hidden",
          zIndex: 2,
          position: "absolute",
          left: 0,
          width: "113%",
          backgroundColor: theme.darkMode
            ? "rgba(0,0, 0, 0.25)"
            : "rgba(255,255, 255, 0)",
          transform: [{ translateY: 220 }],
        },
        animatedStyle,
      ]}
    >
      <BlurView
        intensity={30}
        tint={theme.darkMode ? "dark" : "light"}
        style={styles.wrapper}
      >
        <Item label="Current time zone" value="Europe/London" />
        <Item label="Day of the year" value="295" />
        <Item label="Day of the week" value="5" />
        <Item label="Week number" value="42" />
      </BlurView>
    </Animated.View>
  );
};

const Item = ({ label, value }) => {
  const { theme } = useCustomTheme();
  return (
    <View style={styles.itemWrapper}>
      <Text style={[styles.itemLabel, { color: theme.palette.text.secondary }]}>
        {label}
      </Text>
      <Text style={[styles.itemValue, { color: theme.palette.text.primary }]}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 16,
    minHeight: 100,
    padding: 24,
    borderRadius: 15,
  },
  itemWrapper: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemLabel: {
    textTransform: "uppercase",
    fontFamily: "Inter Regular",
  },
  itemValue: {
    textTransform: "capitalize",
    fontFamily: "Inter Bold",
    fontSize: 24,
  },
});

export default BottomSection;
