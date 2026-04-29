import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-12 h-12" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
      >
        {/* Monogram S */}
        <path d="M40 30 L20 30 L20 50 L40 50 L40 70 L20 70" />
        
        {/* Monogram B */}
        <path d="M60 30 L60 70" />
        <path d="M60 30 L75 30 L75 50 L60 50" />
        <path d="M60 50 L75 50 L75 70 L60 70" />
      </svg>
      <span className="text-[8px] uppercase tracking-[0.3em] font-body font-medium whitespace-nowrap">
        Shoaib Bakshi Sifat
      </span>
    </div>
  );
}
