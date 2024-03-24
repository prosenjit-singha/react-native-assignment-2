import { Image, Text, View, TouchableOpacity } from "react-native";
import { useCustomTheme } from "../../../context/theme.context";

export default function HomeHeader() {
  const { theme } = useCustomTheme();
  return (
    <View
      style={{
        gap: 24,
        flexDirection: "row",
        padding: 18,
      }}
    >
      <View style={{ gap: 14 }}>
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
    </View>
  );
}
