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
        fontFamily: "Poppins",
        color: theme.palette.text.primary,
        fontWeight: 800,
        fontSize: 80,
      }}
    >
      {date.format("HH:MM")}
    </Text>
  );
};

export default Time;
