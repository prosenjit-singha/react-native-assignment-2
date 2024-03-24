export const createTheme = (darkMode) => ({
  darkMode,
  background: {
    0: darkMode ? "hsl(204, 15%, 18%)" : "hsl(204, 10%, 80%)",
    1: darkMode ? "hsl(204, 15%, 25%)" : "hsl(204, 10%, 85%)",
    2: darkMode ? "hsl(204, 15%, 35%)" : "hsl(204, 10%, 90%)",
    3: darkMode ? "hsl(204, 15%, 40%)" : "hsl(204, 10%, 98%)",
  },
  palette: {
    primary: {
      main: darkMode ? "" : "",
      light: darkMode ? "" : "",
      dark: darkMode ? "" : "",
    },
    secondary: {
      main: darkMode ? "" : "",
      light: darkMode ? "" : "",
      dark: darkMode ? "" : "",
    },
    text: {
      primary: darkMode ? "hsl(0, 0%, 100%)" : "hsl(204, 5%, 18%)",
      secondary: darkMode ? "hsl(0, 0%, 85%)" : "hsl(204, 5%, 25%)",
      disabled: darkMode
        ? "hsla(0, 0%, 100%, 0.5)"
        : "hsla(204, 5%, 100%, 0.5)",
    },
    outline: darkMode ? "hsla(0, 0%, 100%, 0.75)" : "hsla(204, 5%, 100%, 0.75)",
  },
});
