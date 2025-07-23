import React, { useState } from "react";

const LightNDarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      onClick={handleToggle}
      className={`p-2 rounded-full hover:bg-[#5d5fef1a]  cursor-pointer transition-all duration-75 ${
        isDarkMode && "bg-[#222]"
      }`}
    >
      {isDarkMode ? (
        <img src="/DarkModeIcon.svg" alt="dark mode" />
      ) : (
        <img src="/LightModeIcon.svg" alt="light mode" />
      )}
    </div>
  );
};

export default LightNDarkModeToggle;
