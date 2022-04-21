// utils
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  // is gonna be undefined if we try to use it outside the scope of the context
  if (context === undefined) {
    throw new Error("useTheme () must be inside a themeProvider");  
  }

  return context;
};
