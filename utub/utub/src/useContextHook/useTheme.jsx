import { useContext, createContext, useState } from "react";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setisDarkMode] = useState();
  const ToggleTheme = () => {
    setisDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ ToggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
