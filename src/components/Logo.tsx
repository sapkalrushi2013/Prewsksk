import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const iconSize = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-12 h-12' : 'w-9 h-9';
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg';

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      <div className={`${iconSize} relative rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-rose-500 p-[2px] shadow-sm flex items-center justify-center flex-shrink-0`}>
        <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white stroke-[2.5]" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${textSize} font-extrabold bg-gradient-to-r from-slate-900 via-purple-950 to-pink-600 bg-clip-text text-transparent`}>
          PrepPro Network
        </span>
        {size === 'lg' && (
          <span className="text-xs text-slate-500 font-medium tracking-normal mt-0.5">
            Prep Like A Pro
          </span>
        )}
      </div>
    </div>
  );
};
