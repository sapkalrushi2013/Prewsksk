import React from 'react';
import { 
  Send, 
  MessageCircle, 
  Sun, 
  Moon, 
  User, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';
import { Logo } from './Logo';
import { SOCIAL_LINKS } from '../data/portalsData';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenTelegramModal: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenTelegramModal,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'apps', label: 'Apps' },
    { id: 'tests', label: 'Tests' },
    { id: 'material', label: 'Material' },
    { id: 'tracker', label: 'Tracker' },
    { id: 'chat', label: 'Chat' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div 
          onClick={() => onSelectTab('home')} 
          className="cursor-pointer"
        >
          <Logo size="md" />
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1 rounded-full border border-slate-200/60 dark:border-slate-800">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onSelectTab(link.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === link.id
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action Icons & Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Telegram Trigger */}
          <button
            onClick={onOpenTelegramModal}
            className="p-2 rounded-full text-sky-600 hover:bg-sky-50 dark:hover:bg-sky-950/50 transition-colors cursor-pointer"
            title="Telegram Updates"
          >
            <Send className="w-4 h-4 fill-sky-500 text-sky-500" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* User Icon */}
          <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            <User className="w-4 h-4" />
          </div>

          {/* Sign In Button */}
          <button
            onClick={() => onOpenTelegramModal()}
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold shadow-sm transition-all cursor-pointer"
          >
            Sign In
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onSelectTab(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between ${
                activeTab === link.id
                  ? 'bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-300'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              <span>{link.label}</span>
              {activeTab === link.id && <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>}
            </button>
          ))}
          <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                onOpenTelegramModal();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2 rounded-xl bg-pink-600 text-white font-bold text-xs text-center"
            >
              Join PrepPro on Telegram
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
