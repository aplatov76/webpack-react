import { FC, ReactNode, useMemo, useState } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
