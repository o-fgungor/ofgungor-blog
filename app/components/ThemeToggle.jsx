'use client'

import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
    const { darkMode, toggleDarkMode } = useTheme();
  
    return (
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 transition-all duration-300 shadow-md hover:shadow-xl z-50"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>
    );
}