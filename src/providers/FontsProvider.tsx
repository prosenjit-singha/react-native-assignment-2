import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const FontsProvider = ({ children }) => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <View onLayout={onLayoutRootView}>{children}</View>;
};

export default FontsProvider;
