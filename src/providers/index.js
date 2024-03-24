import { ThemeProvider } from "../context/theme.context";
import FontsProvider from "./FontsProvider";

export default function Providers({ children }) {
  return (
    <FontsProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </FontsProvider>
  );
}
