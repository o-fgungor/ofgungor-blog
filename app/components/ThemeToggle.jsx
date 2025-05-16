'use client'

import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => {
      toggleDarkMode();
      setAnimating(false);
    }, 400); // Animation duration
  };

  return (
    <button
      onClick={handleClick}
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg transition-colors duration-300 relative flex items-center justify-center"
      aria-label="Toggle dark mode"
      style={{ outline: "none" }}
    >
      {/* Sun Icon */}
      <span
        className={`
          absolute transition-all duration-500 ease-in-out
          ${darkMode || animating ? "opacity-0 scale-75 rotate-180" : "opacity-100 scale-100 rotate-0"}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </span>
      {/* Moon Icon */}
      <span
        className={`
          absolute transition-all duration-500 ease-in-out
          ${darkMode && !animating ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-180"}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700 dark:text-yellow-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
          />
        </svg>
      </span>
    </button>
  );
}