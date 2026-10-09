import React from 'react';
import { X, Play, ArrowRight } from 'lucide-react';

interface OfficialPWModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUseOfficial: () => void;
}

export const OfficialPWModal: React.FC<OfficialPWModalProps> = ({
  isOpen,
  onClose,
  onUseOfficial
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-sm bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 text-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Circular Logo */}
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 p-[3px] shadow-lg shadow-pink-500/20 mb-4 flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-1 text-slate-900">
            <span className="text-[7px] font-black text-pink-600 tracking-wider">PREPPRO</span>
            <span className="text-xs font-black">PW</span>
          </div>
        </div>

        {/* Recommended Badge */}
        <div className="inline-block px-3 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-[11px] font-bold tracking-wider uppercase mb-2">
          RECOMMENDED
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-slate-900 mb-2">
          Use Our Official PW App
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto mb-6">
          Get the complete PrepPro Network Physics Wallah learning experience in one focused app with live lectures, tests & DPPs.
        </p>

        {/* Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={() => {
              onClose();
              onUseOfficial();
            }}
            className="w-full py-3 px-5 rounded-2xl bg-[#e11d48] hover:bg-[#be123c] text-white font-bold text-sm shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Use Our PW App</span>
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-5 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Use Others</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
