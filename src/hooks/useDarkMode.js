// Example useDarkMode.js
import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme'); // Use getItem for clarity
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }
  // If localStorage.theme is invalid or not set, default to 'dark'
  // and update localStorage to ensure consistency.
  localStorage.setItem('theme', 'dark'); 
  return 'dark';
};

export default function useDarkMode() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme); // Use setItem for consistency
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return [theme, toggleTheme];
}