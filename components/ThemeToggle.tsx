'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  
  useEffect(() => {
    // Check if user has previously set a theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light-mode');
      document.body.setAttribute('data-theme', 'light');
    } else {
      // Default to dark mode if no preference is saved
      localStorage.setItem('theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      // Switch to dark mode
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    } else {
      // Switch to light mode
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      document.body.setAttribute('data-theme', 'light');
    }
  };
  
  return (
    <div 
      className={`theme-btn fixed bottom-4 right-8 w-12 h-12 rounded-full cursor-pointer flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg z-1000
                 ${isDark 
                   ? "bg-gradient-to-r from-[color:var(--color-jacarta-d)] to-[color:var(--color-scampi-d)] text-white" 
                   : "bg-white border-2 border-[color:var(--color-scampi-l)] text-[color:var(--color-jacarta-l)]"}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
    </div>
  );
}