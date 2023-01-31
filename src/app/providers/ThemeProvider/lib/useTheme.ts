import { useContext, useState } from "react";
import { ThemeContext, Theme } from "./ThemeContext";

interface UseThemeResult {
  toogleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toogleTheme = () => {
    console.log("x");
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return { theme, toogleTheme };
}
