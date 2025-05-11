'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  
  
  useEffect(() => {
    // Check if user has previously set a theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.body.classList.add('light-mode');
    }
  }, []);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    
    if (isDark) {
      // Switch to light mode
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark mode
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };
  
  return (
    <div 
      className="theme-btn fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[color:var(--color-jacarta)] to-[color:var(--color-scampi)] cursor-pointer flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
      onClick={toggleTheme}
    >
      <i className="fas fa-adjust"></i>
    </div>
  );
}