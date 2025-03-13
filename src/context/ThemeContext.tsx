import { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export const lightTheme = {
  background: "#f9f6f1", // Light beige
  text: "#1a1a1a", // Dark text
  accent: "#C1A5AB",
  cardBackground: "#89767a",
};

export const darkTheme = {
  background: "#363439", // Dark mode
  text: "#f4f4f4", // Light text
  accent: "#714a43",
  cardBackground: "#4c322d",
};

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
