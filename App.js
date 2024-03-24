import { ActivityIndicator } from "react-native";
import Providers from "./src/providers";
import Home from "./src/screens/Home";
import useFonts from "./src/hooks/useFonts";

export default function App() {
  const [fontsLoaded] = useFonts();

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
