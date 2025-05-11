'use client';

import { useEffect, useRef } from 'react';

interface ProgressBarProps {
  title: string;
  percentage: number;
}

export default function ProgressBar({ title, percentage }: ProgressBarProps) {
  const progressRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    // Animate progress bar on mount
    const timeout = setTimeout(() => {
      if (progressRef.current) {
        progressRef.current.style.width = `${percentage}%`;
      }
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [percentage]);
  
  return (
    <div className="progress-bar">
      <p className="prog-title capitalize text-lg mb-2">{title}</p>
      <div className="progress-con flex justify-between items-center">
        <p className="prog-text text-sm mb-1">{percentage}%</p>
        <div className="progress-container">
          <span 
            ref={progressRef} 
            className="progress-span" 
            style={{ width: '0%', transition: 'width 1.5s ease-in-out' }}
          ></span>
        </div>
      </div>
    </div>
  );
}