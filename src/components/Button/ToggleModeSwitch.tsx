import { useState } from 'react';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';
import useMode from '@/hooks/useMode';

const ToggleModeSwitch: React.FC<{ size: number }> = ({ size = 56 }) => {
  const [colorTheme, setTheme] = useMode();
  const [darkMode, setDarkMode] = useState<boolean>(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <div className="flex items-center m-2">
      <DarkModeToggle
        isDarkMode={darkMode}
        onChange={toggleDarkMode}
        size={size}
      />
    </div>
  );
};

export default ToggleModeSwitch;
