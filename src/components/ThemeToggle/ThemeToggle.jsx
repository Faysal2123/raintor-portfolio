import React from "react";
import { useTheme } from "../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center w-10 h-10 rounded-full 
        bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-gray-200 
        transition-colors duration-300"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
    </button>
  );
};

export default ThemeToggle;
