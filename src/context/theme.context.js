import { createContext, useContext, useState } from "react";
import { createTheme } from "../helpers/theme.helper";

const ThemeContext = createContext({
  theme: createTheme(true),
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(createTheme(true));

  const toggleTheme = () => setTheme((prev) => createTheme(!prev.darkMode));

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useCustomTheme = () => useContext(ThemeContext);
