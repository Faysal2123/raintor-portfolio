import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex justify-center items-center">
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={40}
        sunColor="#FFC107"  
        moonColor="#4B5563" 
      />
    </div>
  );
};

export default ThemeToggle;
