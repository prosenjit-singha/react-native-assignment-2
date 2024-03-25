import React from "react";
import dayjs from "dayjs";
import { useCustomTheme } from "../../../context/theme.context";
import { Text } from "react-native";
import "dayjs/locale/en"; // Import English locale
import utc from "dayjs/plugin/utc"; // Import UTC plugin
import timezone from "dayjs/plugin/timezone"; // Import timezone plugin

// Extend dayjs with plugins
dayjs.extend(utc);
dayjs.extend(timezone);

// Set the timezone to 'Asia/Dhaka'
dayjs.tz.setDefault("Asia/Dhaka");

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
          fontSize: 24,
        }}
      >
        BST
      </Text>
    </Text>
  );
};

export default Time;
