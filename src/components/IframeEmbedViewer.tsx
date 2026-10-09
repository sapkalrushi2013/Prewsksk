import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  RefreshCw, 
  Copy, 
  Check, 
  ShieldCheck, 
  AlertCircle, 
  Maximize2, 
  Minimize2,
  Share2,
  Sparkles
} from 'lucide-react';
import { PortalApp, PORTALS_DATA } from '../data/portalsData';

interface IframeEmbedViewerProps {
  app: PortalApp;
  onBack: () => void;
  onSelectAnotherApp?: (app: PortalApp) => void;
}

export const IframeEmbedViewer: React.FC<IframeEmbedViewerProps> = ({
  app,
  onBack,
  onSelectAnotherApp
}) => {
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [hasLoadError, setHasLoadError] = useState<boolean>(false);

  // If the app is marked as external or errored in dataset, or has known CORS restrictions
  const isEmbeddable = app.mode === 'iframe' || app.src.includes('pearlspark') || app.src.includes('vercel.app');

  useEffect(() => {
    setIsLoading(true);
    setHasLoadError(false);
    
    // Automatically auto-detect if the link is known to block iframes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [app.src, iframeKey]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(app.src);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenExternal = () => {
    window.open(app.src, '_blank', 'noopener,noreferrer');
  };

  const handleReload = () => {
    setIsLoading(true);
    setHasLoadError(false);
    setIframeKey((prev) => prev + 1);
  };

  // Find related portals from the same category
  const currentCategory = PORTALS_DATA.find((c) => c.slug === app.source) || PORTALS_DATA[0];
  const siblingApps = currentCategory.apps;

  return (
    <div className={`flex flex-col bg-slate-900 text-white min-h-[92vh] ${isFullscreen ? 'fixed inset-0 z-50 h-screen' : 'rounded-2xl overflow-hidden shadow-2xl border border-slate-800 my-4'}`}>
      {/* Top Navigation & Controls Bar */}
      <header className="bg-slate-950/90 border-b border-slate-800/80 px-4 py-3 flex flex-wrap items-center justify-between gap-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-100 truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                {app.title}
              </span>
              {app.mode === 'iframe' ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  Embedded
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-semibold border border-amber-500/30">
                  External
                </span>
              )}
            </div>
            <span className="text-[11px] text-slate-400 truncate max-w-[250px] sm:max-w-sm">
              {app.src}
            </span>
          </div>
        </div>

        {/* Quick Portal Selector dropdown / tabs */}
        {siblingApps.length > 1 && onSelectAnotherApp && (
          <div className="hidden lg:flex items-center gap-1.5 bg-slate-900 px-2 py-1 rounded-xl border border-slate-800 overflow-x-auto max-w-sm">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold px-1">Portals:</span>
            {siblingApps.slice(0, 4).map((sib, i) => (
              <button
                key={i}
                onClick={() => onSelectAnotherApp(sib)}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer truncate max-w-[90px] ${
                  sib.title === app.title
                    ? 'bg-pink-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {sib.title.replace('PW Portal ', 'P').replace('PW Thor Portal 1', 'Thor 1').replace('PrepPro Network – Physics Wallah', 'Official')}
              </button>
            ))}
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReload}
            title="Reload frame"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-pink-500' : ''}`} />
          </button>

          <button
            onClick={handleCopyLink}
            title="Copy portal URL"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer relative"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            className="hidden sm:flex p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={handleOpenExternal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold shadow-md shadow-pink-600/30 transition-all cursor-pointer"
          >
            <span>Open In Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Security / Embed helper note */}
      <div className="bg-slate-950 px-4 py-1.5 text-xs text-slate-400 border-b border-slate-800 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 truncate">
          <Sparkles className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" />
          <span className="truncate">
            Automated Embedding Active. If any portal blocks iframes due to server security (CSP/X-Frame-Options), tap <b>Open In Tab</b>.
          </span>
        </div>
        <button
          onClick={handleOpenExternal}
          className="text-pink-400 hover:text-pink-300 font-semibold underline text-xs flex-shrink-0 cursor-pointer"
        >
          Direct Link ↗
        </button>
      </div>

      {/* Frame Container */}
      <div className="relative flex-1 w-full bg-slate-950 flex flex-col items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm gap-3">
            <div className="w-10 h-10 border-4 border-pink-500/20 border-t-pink-500 rounded-full animate-spin"></div>
            <p className="text-xs text-slate-400 font-medium">Embedding {app.title}...</p>
          </div>
        )}

        {/* Embedded Iframe */}
        <iframe
          key={iframeKey}
          src={app.src}
          title={app.title}
          className="w-full h-full min-h-[75vh] flex-1 border-0 bg-white"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads allow-modals"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          onError={() => setHasLoadError(true)}
          onLoad={() => setIsLoading(false)}
        />

        {/* Floating fallback bar if iframe encounters cross-origin restriction */}
        <div className="w-full bg-slate-900/95 border-t border-slate-800 p-2 sm:p-3 text-center flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            Facing blank screen or login redirection in frame?
          </span>
          <button
            onClick={handleOpenExternal}
            className="px-3 py-1 rounded-md bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <span>Open {app.title} In New Tab</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
