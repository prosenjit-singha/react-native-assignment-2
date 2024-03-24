import { ThemeProvider } from "../context/theme.context";

export default function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
