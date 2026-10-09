import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Play, 
  Zap, 
  Shield, 
  Star, 
  Users, 
  BookOpen, 
  Clock, 
  Share2, 
  MessageCircle,
  Sun,
  Moon,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PlatformCategory, PortalApp, PORTALS_DATA, SOCIAL_LINKS } from '../data/portalsData';
import { OfficialPWModal } from './OfficialPWModal';

interface PortalsPageProps {
  initialSlug?: string;
  onBack: () => void;
  onLaunchApp: (app: PortalApp, shouldEmbed?: boolean) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const PortalsPage: React.FC<PortalsPageProps> = ({
  initialSlug = 'pw',
  onBack,
  onLaunchApp,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(initialSlug);
  const [isOfficialModalOpen, setIsOfficialModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentPlatform: PlatformCategory = 
    PORTALS_DATA.find((p) => p.slug === selectedSlug) || PORTALS_DATA[0];

  const officialApp = currentPlatform.apps.find((a) => a.rating === 'best' || a.mode === 'iframe') || currentPlatform.apps[0];
  const otherPortals = currentPlatform.apps;

  const filteredPortals = otherPortals.filter((p) => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLaunchOfficial = () => {
    // If it's mode 'iframe', we automatically embed it in the website!
    onLaunchApp(officialApp, true);
  };

  const handleLaunchPortal = (app: PortalApp) => {
    // If the portal is an iframe, embed directly. If external, we can either embed or open depending on link
    if (app.mode === 'iframe') {
      onLaunchApp(app, true);
    } else {
      // User can choose embed or direct
      onLaunchApp(app, true);
    }
  };

  return (
    <div className={`min-h-screen bg-grid-pattern transition-colors duration-200 ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-[#fafbfc] text-slate-900'}`}>
      {/* Official PW Recommendation Modal */}
      <OfficialPWModal
        isOpen={isOfficialModalOpen}
        onClose={() => setIsOfficialModalOpen(false)}
        onUseOfficial={handleLaunchOfficial}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Top Bar matching screenshot */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
              title="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Platform Switcher Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {PORTALS_DATA.map((plat) => (
            <button
              key={plat.slug}
              onClick={() => setSelectedSlug(plat.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                plat.slug === selectedSlug
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md shadow-pink-500/25 scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              {plat.name} ({plat.apps.length})
            </button>
          ))}
        </div>

        {/* Header Tagline & Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 mb-4">
            <div className="w-4 h-4 rounded-full bg-pink-500 flex items-center justify-center text-white text-[9px] font-bold">
              P
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              PREPPRO NETWORK • {currentPlatform.apps.length} portals available
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight sm:leading-none text-slate-900 dark:text-white mb-4">
            THE ONLY <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              PORTALS
            </span>{" "}
            YOU NEED
          </h1>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            {currentPlatform.tagline}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 text-xs italic">
            <span>✨ "Your limited time is not a disadvantage, it's an emergency — act like it."</span>
          </div>
        </div>

        {/* Featured Hero Card (Matches PrepPro Network - Physics Wallah in screenshot) */}
        <div className="relative mb-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-xl shadow-pink-500/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-pink-600 via-rose-500 to-purple-600 p-[2px] shadow-lg flex-shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-900 flex flex-col items-center justify-center p-2 text-slate-900 dark:text-white">
                <span className="text-[8px] font-black text-pink-600 uppercase tracking-wider">PREPPRO</span>
                <span className="text-base font-black">{currentPlatform.shortName || 'PW'}</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950/70 text-pink-700 dark:text-pink-300 text-[10px] font-bold tracking-wider uppercase mb-2">
                <Sparkles className="w-3 h-3" />
                OFFICIAL APP • HIGH SPEED EMBED
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                PrepPro Network – {currentPlatform.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                A complete {currentPlatform.name} learning destination by PrepPro Network, built for focused access to classes, courses, batches and study resources.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-100 dark:border-slate-800 text-center mb-6">
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">4.9</div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase">STUDENT RATING</div>
            </div>
            <div className="p-2 border-x border-slate-100 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-pink-600">100K+</div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase">LEARNERS</div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">24/7</div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase">ACCESS</div>
            </div>
          </div>

          {/* 3 Value props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-900/40 text-pink-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Complete Library</div>
                <div className="text-[11px] text-slate-400">Courses and batches</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Fast Access</div>
                <div className="text-[11px] text-slate-400">Optimized experience</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-600">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Student First</div>
                <div className="text-[11px] text-slate-400">Made for daily study</div>
              </div>
            </div>
          </div>

          {/* Giant Launch PW App Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => setIsOfficialModalOpen(true)}
              className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#e11d48] to-[#be123c] hover:from-[#be123c] hover:to-[#9f1239] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2.5 transition-all transform active:scale-[0.99] cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>LAUNCH {currentPlatform.shortName || 'PW'} APP</span>
            </button>

            <button
              onClick={() => window.open(officialApp.src, '_blank', 'noopener,noreferrer')}
              className="w-full sm:w-auto py-4 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              title="Open in new tab directly"
            >
              <span>New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Portal Cards List Heading */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              All Available Portals ({filteredPortals.length})
            </h3>
            <p className="text-xs text-slate-400">
              Multiple high-speed mirrors and backup servers
            </p>
          </div>
        </div>

        {/* List of Portal Cards (Exact card style from prepproportals.lovable.app.jpg) */}
        <div className="space-y-4">
          {filteredPortals.map((portal, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:border-pink-300 dark:hover:border-pink-900"
            >
              {/* Top Row with POP badge & Title */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  {/* Circular PrepPro Network icon */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 p-[2px] flex-shrink-0 flex items-center justify-center shadow-md shadow-pink-500/10">
                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white">
                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white stroke-[2.5]" stroke="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300 uppercase">
                        POP
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        {portal.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">
                      {portal.desc}
                    </p>
                  </div>
                </div>

                {portal.mode === 'iframe' && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Embed Ready
                  </span>
                )}
              </div>

              {/* Portal Metadata Details */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  PORTAL BY: <span className="text-pink-600 font-bold">PrepPro Network</span>
                </span>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-300">
                    <Zap className="w-3 h-3 text-amber-500" />
                    Fast Servers
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-300">
                    <Shield className="w-3 h-3 text-emerald-500" />
                    Safe
                  </span>
                </div>
              </div>

              {/* Bottom Row with Students, Stars, and LET'S STUDY Button */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="text-xs">
                    <span className="text-slate-400 font-medium text-[11px]">STUDENTS </span>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200">
                      {portal.studentsCount || '1,00,000+'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-full border border-amber-200/60 dark:border-amber-900/60">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>★ {portal.stars || 4.8}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {/* Primary pink LET'S STUDY button */}
                  <button
                    onClick={() => handleLaunchPortal(portal)}
                    className="flex-1 sm:flex-initial py-3 px-6 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-pink-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] cursor-pointer"
                  >
                    <span>LET'S STUDY</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </button>

                  {/* Secondary open in new tab */}
                  <button
                    onClick={() => window.open(portal.src, '_blank', 'noopener,noreferrer')}
                    className="p-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Open in new window"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info matching screenshot */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
            <div className="w-4 h-4 rounded-full bg-pink-500 flex items-center justify-center text-white text-[8px] font-bold">
              P
            </div>
            <span>Powered by PrepPro Network</span>
          </div>
          <div>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-600 hover:underline font-semibold inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Join WhatsApp for support</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
