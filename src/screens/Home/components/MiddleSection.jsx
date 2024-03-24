import React from "react";
import { Image, Text, View } from "react-native";
import Time from "./HomeTime";

const MiddleSection = () => {
  return (
    <View>
      <View>
        <Image source={require("../../../../assets/moon.png")} />
        <Text>Good Evening</Text>
      </View>
      <View>
        <Time />
      </View>
    </View>
  );
};

export default MiddleSection;
