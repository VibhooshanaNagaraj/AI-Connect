import React from 'react';

export default function Logo({ className = '', size = 'md' }) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`inline-flex items-center font-display font-extrabold select-none cursor-pointer group ${sizeClasses[size]} ${className}`}>
      {/* Unified Clean Text Logo: AI (Red #FF2638) + CONNECT (White #FFFFFF) */}
      <span className="text-brand-red font-black tracking-tight">AI</span>
      <span className="text-white font-bold ml-1.5 tracking-wider">CONNECT</span>
    </div>
  );
}
