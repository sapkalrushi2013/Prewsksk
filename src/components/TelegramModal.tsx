import React from 'react';
import { Send, X, Check, BellRing } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portalsData';

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TelegramModal: React.FC<TelegramModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleJoin = () => {
    window.open(SOCIAL_LINKS.telegram, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Telegram Icon with glowing background */}
        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-500 p-1 shadow-lg shadow-blue-500/25 flex items-center justify-center mb-5">
          <div className="w-full h-full rounded-full bg-blue-500 flex items-center justify-center text-white">
            <Send className="w-9 h-9 fill-white translate-x-[-1px] translate-y-[1px]" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold mb-3">
          <BellRing className="w-3.5 h-3.5" />
          <span>FREE UPDATES</span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          Join PrepPro Network on Telegram
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto mb-6">
          New apps, test series, study material & instant alerts — never miss an update.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleJoin}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Join Now</span>
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 px-6 rounded-2xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Already Joined (Continue)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
