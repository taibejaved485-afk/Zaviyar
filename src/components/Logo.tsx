import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export function LogoSVG({ className = "w-10 h-10", isLight = false }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        {/* Modern Vibrant Gradient */}
        <linearGradient id="zaviyarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" /> {/* Indigo-600 */}
          <stop offset="100%" stopColor="#2563EB" /> {/* Blue-600 */}
        </linearGradient>

        <linearGradient id="accentGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38BDF8" /> {/* Sky Blue */}
          <stop offset="100%" stopColor="#818CF8" /> {/* Indigo Accent */}
        </linearGradient>
      </defs>

      {/* Outer Hexagon / Shield Container */}
      <rect 
        x="5" 
        y="5" 
        width="90" 
        height="90" 
        rx="22" 
        fill={isLight ? "#FFFFFF" : "url(#zaviyarGrad)"} 
      />

      {/* Geometric 'Z' merged with Growth Trend Arrow */}
      {/* Top Bar of Z */}
      <path 
        d="M28 32 H72 L58 46 H28 Z" 
        fill={isLight ? "#4F46E5" : "#FFFFFF"} 
      />

      {/* Diagonal Growth Line */}
      <path 
        d="M62 38 L32 70 H48 L72 44 Z" 
        fill={isLight ? "#2563EB" : "url(#accentGrad)"} 
      />

      {/* Bottom Bar of Z */}
      <path 
        d="M28 68 H42 L28 82 H72 L58 68 Z" 
        fill={isLight ? "#1E293B" : "#FFFFFF"} 
        opacity="0.9"
      />

      {/* Top Right Small Growth Spark/Arrow Dot */}
      <circle 
        cx="72" 
        cy="28" 
        r="5" 
        fill={isLight ? "#38BDF8" : "#38BDF8"} 
      />
    </svg>
  );
}
