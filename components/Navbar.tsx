'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', icon: 'fas fa-home', path: '/' },
  { id: 'about', icon: 'fas fa-user', path: '/about' },
  { id: 'portfolio', icon: 'fas fa-briefcase', path: '/portfolio' },
  { id: 'blogs', icon: 'far fa-newspaper', path: '/blogs' },
  { id: 'contact', icon: 'fas fa-envelope-open', path: '/contact' }
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [theme, setTheme] = useState('dark');
  
  // Detect theme
  useEffect(() => {
    // Check for theme preference (you can adjust this based on how you manage themes)
    const isDarkMode = document.documentElement.classList.contains('dark');
    setTheme(isDarkMode ? 'dark' : 'light');
    console.log(isTransitioning)
    // Optional: listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  // Handle navigation with transition
  const handleNavigation = (path: string) => {
    if (pathname === path) return;
    
    setIsTransitioning(true);
    
    // Add fade-out animation
    document.querySelector('main')?.classList.add('page-exit-active');
    
    // After animation finishes, navigate to new page
    setTimeout(() => {
      router.push(path);
      setIsTransitioning(false);
    }, 500);
  };
  
  // Add fade-in animation when component mounts
  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.classList.add('page-enter');
      
      // Trigger animation after a small delay
      setTimeout(() => {
        mainElement.classList.remove('page-enter');
        mainElement.classList.add('page-enter-active');
      }, 10);
      
      // Remove animation classes after transition completes
      setTimeout(() => {
        mainElement.classList.remove('page-enter-active');
      }, 500);
    }
  }, [pathname]);

  return (
    <>
      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="fixed h-full hidden md:flex flex-col justify-center px-6 z-30">
        <div className="dark:bg-black/20 bg-white/20 backdrop-blur-sm rounded-full py-8 flex flex-col gap-8">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`control cursor-pointer w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                pathname === item.path 
                  ? theme === 'light'
                    ? 'bg-[var(--my-gradient-l)] text-[var(--color-background-d)] dark:text-[var(--color-background-l)] font-bold shadow-md' 
                    : 'bg-[var(--my-gradient-d)] text-black shadow-md'
                  : theme === 'light'
                    ? 'bg-black/10 ring-1 ring-black/20 hover:ring-2 hover:ring-black/30 text-white/50'
                    : 'dark:bg-black/30 text-gray-600 hover:bg-black/40'
              }`}
            >
              <i className={item.icon}></i>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-center px-4 py-2 z-30">
        <div className="dark:bg-black/60 bg-white/60 backdrop-blur-md rounded-full px-4 py-2 flex justify-between gap-2 shadow-lg">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`control cursor-pointer w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                pathname === item.path 
                  ? theme === 'light'
                    ? 'bg-[var(--my-gradient-l)] text-[var(--color-background-d)] dark:text-[var(--color-background-l)] font-bold shadow-md' 
                    : 'bg-[var(--my-gradient-d)] text-black shadow-md'
                  : theme === 'light'
                    ? 'bg-black/10 ring-1 ring-black/20 hover:ring-2 hover:ring-black/30 text-white/50'
                    : 'dark:bg-black/30 text-gray-400 hover:bg-black/40'
              }`}
            >
              <i className={item.icon}></i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}