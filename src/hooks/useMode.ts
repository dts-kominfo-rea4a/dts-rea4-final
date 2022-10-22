/* eslint-disable indent */
import { useEffect, useMemo, useState } from 'react';

export type themeType = 'dark' | 'light';

export default function useMode(): [
  themeType,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [theme, setTheme] = useState<string>(localStorage.theme);
  const colorTheme = useMemo<themeType>(
    () => (theme === 'dark' ? 'light' : 'dark'),
    [theme]
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to the localStorage for persistence
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
