import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Button({ label, endIcon, ...props }) {
  return (
    <TouchableOpacity {...props} style={[styles.container, props.style]}>
      <Text style={[styles.label]}>{label}</Text>
      <View>{endIcon}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 99,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingVertical: 6,
    paddingLeft: 12,
    paddingRight: 6,
    shadowColor: "rgb(0, 0, 0)",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: -3,
    },
  },
  label: {
    color: "black",
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: 600,
  },
});
