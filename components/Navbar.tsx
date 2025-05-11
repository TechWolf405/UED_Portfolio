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
    <div className="fixed h-full flex flex-col justify-center px-6 z-10">
      <div className="bg-black/20 backdrop-blur-sm rounded-full py-8 flex flex-col gap-8">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavigation(item.path)}
            className={`control cursor-pointer w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:bg-gradient-to-r from-[color:var(--color-jacarta)] to-[color:var(--color-scampi)] ${
              pathname === item.path ? 'bg-gradient-to-r from-[color:var(--color-jacarta)] to-[color:var(--color-scampi)]' : 'bg-black/30'
            }`}
          >
            <i className={item.icon}></i>
          </div>
        ))}
      </div>
    </div>
  );
}