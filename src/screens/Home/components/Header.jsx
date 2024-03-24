import { Image, Text, View, StyleSheet } from "react-native";

export default function HomeHeader() {
  return (
    <View>
      <View>
        <Text>
          "The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value."
        </Text>
        <Text></Text>
      </View>
      <Image source={require("../../../../assets/reload-icon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: 14,
  },
});
