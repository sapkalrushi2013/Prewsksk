import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MessageCircle, 
  Send, 
  Heart, 
  ExternalLink, 
  Play, 
  BookOpen, 
  FolderKanban, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight,
  Layers
} from 'lucide-react';
import { PlatformCategory, PortalApp, PORTALS_DATA, SOCIAL_LINKS } from '../data/portalsData';

interface AppsPageProps {
  onBack: () => void;
  onOpenPortals: (slug: string) => void;
  onLaunchApp: (app: PortalApp, shouldEmbed?: boolean) => void;
}

export const AppsPage: React.FC<AppsPageProps> = ({
  onBack,
  onOpenPortals,
  onLaunchApp
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllApps, setShowAllApps] = useState(false);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const toggleFavorite = (slug: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [slug]: !prev[slug] }));
  };

  const copyCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredPlatforms = PORTALS_DATA.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.tagline?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.apps.some(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const visiblePlatforms = showAllApps || searchQuery ? filteredPlatforms : filteredPlatforms.slice(0, 6);

  // Top featured PW App
  const pwPlatform = PORTALS_DATA.find(p => p.slug === 'pw')!;
  const officialPwApp = pwPlatform.apps[0];

  return (
    <div className="min-h-screen bg-grid-pattern bg-[#fafbfc] text-slate-900 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Back Link */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Title Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-[11px] font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PREPPRO STUDY APPS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-3">
            THE ONLY <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">APPS</span> YOU NEED
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Hand-picked premium coaching platforms — tap to launch. Free access, full syllabus coverage.
          </p>
        </div>

        {/* Featured PW Widget (matching screenshot 3) */}
        <div className="mb-8 rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-7 shadow-xl shadow-pink-500/5 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-black text-lg shadow-md flex-shrink-0">
              PW
            </div>
            <div>
              <div className="text-[10px] font-bold text-rose-600 uppercase tracking-wider mb-1">
                PREPPRO SPECIAL
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                PrepPro Network Physics Wallah
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-xl">
                Your complete PW learning space for JEE and NEET — batches, live and recorded classes, notes, DPPs, and practice resources in one focused experience.
              </p>
            </div>
          </div>

          {/* 3 action pill buttons */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
            <button
              onClick={() => onLaunchApp(officialPwApp, true)}
              className="flex flex-col sm:flex-row items-center justify-center gap-1.5 p-2.5 sm:p-3 rounded-2xl bg-slate-50 hover:bg-pink-50/70 border border-slate-200/70 transition-colors text-slate-700 hover:text-pink-600 cursor-pointer text-center"
            >
              <Play className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span className="text-xs font-bold">Classes</span>
            </button>

            <button
              onClick={() => onOpenPortals('pw')}
              className="flex flex-col sm:flex-row items-center justify-center gap-1.5 p-2.5 sm:p-3 rounded-2xl bg-slate-50 hover:bg-pink-50/70 border border-slate-200/70 transition-colors text-slate-700 hover:text-pink-600 cursor-pointer text-center"
            >
              <FolderKanban className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-xs font-bold">Batches</span>
            </button>

            <button
              onClick={() => onOpenPortals('pw')}
              className="flex flex-col sm:flex-row items-center justify-center gap-1.5 p-2.5 sm:p-3 rounded-2xl bg-slate-50 hover:bg-pink-50/70 border border-slate-200/70 transition-colors text-slate-700 hover:text-pink-600 cursor-pointer text-center"
            >
              <FileText className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-xs font-bold">Notes & DPPs</span>
            </button>
          </div>

          {/* Launch bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
            <button
              onClick={() => onLaunchApp(officialPwApp, true)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-extrabold text-xs shadow-md shadow-rose-500/30 flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <Play className="w-3 h-3 fill-white" />
              <span>Launch PW App</span>
            </button>
            <span className="text-[11px] text-slate-400 font-medium text-center sm:text-right">
              Free access • Full-screen experience • Powered by PrepPro
            </span>
          </div>
        </div>

        {/* Highlight Card: PrepPro Network Portal (All Study Portals — One Place) */}
        <div
          onClick={() => onOpenPortals('pw')}
          className="mb-6 rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4 cursor-pointer hover:border-pink-300 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 p-[2px] flex-shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                <Layers className="w-5 h-5 text-pink-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-pink-600 transition-colors">
                  PrepPro Network Portal
                </h4>
                <span className="px-2 py-0.5 rounded-full border border-pink-400 text-[10px] font-bold text-pink-600 bg-pink-50">
                  Portal
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-700 mt-0.5">
                All Study Portals — One Place
              </p>
              <p className="text-[11px] text-slate-400">
                PW, Vibrant, Next Toppers & all portals in one place
              </p>
            </div>
          </div>
          <div className="p-2 text-slate-400 group-hover:text-pink-600 transition-colors">
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search apps..."
            className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-sm"
          />
        </div>

        {/* WhatsApp & Telegram channel banner pills */}
        <div className="space-y-3 mb-8">
          {/* WhatsApp Pill */}
          <div className="rounded-2xl border border-emerald-200/80 bg-gradient-to-r from-emerald-50/50 via-teal-50/30 to-white p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-wider">
                    JOIN REQUEST
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Free</span>
                </div>
                <h5 className="text-xs sm:text-sm font-black text-slate-900">
                  WhatsApp Channel — Study Apps Updates
                </h5>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                  Tap to follow PrepPro Network on WhatsApp for instant updates.
                </p>
              </div>
            </div>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1 cursor-pointer flex-shrink-0"
            >
              <span>Join</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Telegram Pill */}
          <div className="rounded-2xl border border-sky-200/80 bg-gradient-to-r from-sky-50/50 via-blue-50/30 to-white p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Send className="w-4 h-4 fill-white translate-x-[-1px] translate-y-[1px]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold text-sky-700 uppercase tracking-wider">
                    JOIN REQUEST
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Free</span>
                </div>
                <h5 className="text-xs sm:text-sm font-black text-slate-900">
                  Telegram Channel — Study Apps Updates
                </h5>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                  Tap to follow PrepPro Network on Telegram for instant updates.
                </p>
              </div>
            </div>
            <a
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1 cursor-pointer flex-shrink-0"
            >
              <span>Join</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Numbered List of Platforms (matching exact items 01, 02, 03... from screenshot) */}
        <div className="space-y-3 mb-8">
          {visiblePlatforms.map((platform, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');
            const isFav = favorites[platform.slug];

            return (
              <div
                key={platform.slug}
                onClick={() => onOpenPortals(platform.slug)}
                className="group relative rounded-2xl bg-white border border-slate-200/80 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all hover:border-pink-300 cursor-pointer"
              >
                <div className="flex items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    {/* Index number */}
                    <span className="text-xs font-extrabold text-slate-400 font-mono w-5">
                      {formattedIndex}
                    </span>

                    {/* Logo */}
                    <div className={`w-11 h-11 rounded-full ${platform.logoBg} flex items-center justify-center font-black text-xs shadow-sm flex-shrink-0 overflow-hidden`}>
                      {platform.logoText}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-black text-sm sm:text-base text-slate-900 group-hover:text-pink-600 transition-colors uppercase tracking-tight">
                          {platform.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1 sm:line-clamp-none">
                        {platform.tagline}
                      </p>

                      {/* Access code pill if applicable (e.g. Unacademy PUSHPARAJ) */}
                      {platform.accessCode && (
                        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-pink-50 border border-pink-200 text-pink-700 text-[11px] font-bold">
                          <span>Access Code: {platform.accessCode}</span>
                          <button
                            onClick={(e) => copyCode(platform.accessCode!, e)}
                            className="hover:text-pink-900 cursor-pointer ml-1"
                            title="Copy code"
                          >
                            {copiedCode === platform.accessCode ? (
                              <Check className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <button
                      onClick={(e) => toggleFavorite(platform.slug, e)}
                      className={`p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer ${
                        isFav ? 'text-rose-500 fill-rose-500' : 'text-slate-300 hover:text-slate-500'
                      }`}
                      title="Favorite"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(SOCIAL_LINKS.telegram, '_blank');
                      }}
                      className="px-2.5 py-1 rounded-full border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span className="hidden sm:inline">Channel</span>
                    </button>

                    <div className="p-2 text-slate-400 group-hover:text-pink-600 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Get More Apps (15+) Toggle Button */}
        {!searchQuery && filteredPlatforms.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAllApps(!showAllApps)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
            >
              <span>{showAllApps ? "Show Less" : `Get More Apps (${filteredPlatforms.length - 6}+)`}</span>
              {showAllApps ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
