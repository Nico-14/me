import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  useEffect(() => {
    const savedStated = JSON.parse(localStorage.getItem('darkmode'));
    if (savedStated !== null) {
      setIsDarkModeEnabled(savedStated === true);
    } else {
      setIsDarkModeEnabled(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
    localStorage.setItem('darkmode', JSON.stringify(!isDarkModeEnabled));
  };

  return { isDarkModeEnabled, toggleDarkMode };
}
