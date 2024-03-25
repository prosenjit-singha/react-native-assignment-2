import { Easing, ReduceMotion } from "react-native-reanimated";

export const duration = 500;
export const timingOptions = {
  duration: duration,
  easing: Easing.inOut(Easing.cubic),
  reduceMotion: ReduceMotion.System,
};
