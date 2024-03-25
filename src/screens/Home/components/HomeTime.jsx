import React from "react";
import dayjs from "dayjs";
import { useCustomTheme } from "../../../context/theme.context";
import { Text } from "react-native";

const Time = () => {
  const [date, setDate] = React.useState(dayjs());
  const { theme, setTheme } = useCustomTheme();

  React.useEffect(() => {
    const dateInterval = setInterval(() => {
      setDate(dayjs());
    }, 1000);

    return () => {
      clearInterval(dateInterval);
    };
  }, []);
  return (
    <Text
      style={{
        fontFamily: "Inter Black",
        color: theme.palette.text.primary,
        fontSize: 100,
      }}
    >
      {date.format("HH:MM")}{" "}
      <Text
        style={{
          fontFamily: "Inter Bold",
          fontSize: 28,
        }}
      >
        BST
      </Text>
    </Text>
  );
};

export default Time;
