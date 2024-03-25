import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import React, { useState } from "react";
import HomeHeader from "./components/Header";
import MiddleSection from "./components/MiddleSection";
import BottomSection from "./components/BottomSection";

export default function Home() {
  const [more, setMore] = useState(false);
  const [maxYToTranslate, setMaxYToTranslate] = useState(200);

  const updateMaxY = (value) =>
    setMaxYToTranslate((prev) => (value > prev ? value : prev));

  return (
    <ImageBackground
      source={require("../../../assets/bg-1.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <HomeHeader maxY={maxYToTranslate} more={more} updateMaxY={updateMaxY} />
      <MiddleSection maxY={maxYToTranslate} more={more} setMore={setMore} />
      <BottomSection
        maxY={maxYToTranslate}
        more={more}
        updateMaxY={updateMaxY}
      />
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    padding: 24,
    paddingTop: 50,
    position: "relative",
    zIndex: 1,
  },
});
