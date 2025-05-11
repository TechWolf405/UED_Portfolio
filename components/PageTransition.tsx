'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [content, setContent] = useState(children);
  
  useEffect(() => {
    setIsAnimating(true);
    
    // Start exit animation
    const timeout = setTimeout(() => {
      setContent(children);
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [pathname, children]);
  
  return (
    <div
      className={`transition-all duration-500 ${
        isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
      }`}
    >
      {content}
    </div>
  );
}