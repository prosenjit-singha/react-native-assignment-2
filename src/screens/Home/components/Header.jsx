import { Image, Text, View, TouchableOpacity } from "react-native";
import { useCustomTheme } from "../../../context/theme.context";
import { timingOptions } from "../home.const";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import React from "react";

export default function HomeHeader({ updateMaxY, maxY, more }) {
  const { theme } = useCustomTheme();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(more ? -maxY : 0, timingOptions) }],
  }));

  return (
    <Animated.View
      onLayout={(e) => updateMaxY(e.nativeEvent.layout.height)}
      style={[
        {
          gap: 24,
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          top: 0,
          left: 24,
          paddingTop: 50,
        },
        animatedStyle,
      ]}
    >
      <View style={{ gap: 14, width: "80%" }}>
        <Text
          style={{
            color: theme.palette.text.primary,
          }}
        >
          "The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value."
        </Text>
        <Text
          style={{
            color: theme.palette.text.primary,
            fontWeight: 800,
            fontSize: 16,
          }}
        >
          Ada Loveless
        </Text>
      </View>
      <TouchableOpacity>
        <Image
          style={{ marginTop: 16 }}
          source={require("../../../../assets/reload-icon.png")}
        />
      </TouchableOpacity>
    </Animated.View>
  );
}
