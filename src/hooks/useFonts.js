import {
  useFonts as useGoogleFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

const useFonts = () =>
  useGoogleFonts({
    "Inter Regular": Inter_400Regular,
    "Inter Bold": Inter_700Bold,
    "Inter Extra Bold": Inter_800ExtraBold,
    "Inter Black": Inter_900Black,
  });

export default useFonts;
