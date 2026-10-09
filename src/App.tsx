import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AppsPage } from './components/AppsPage';
import { PortalsPage } from './components/PortalsPage';
import { IframeEmbedViewer } from './components/IframeEmbedViewer';
import { TelegramModal } from './components/TelegramModal';
import { 
  TestSeriesView, 
  PrepBooksView, 
  StudyTrackerView, 
  PrepChatView 
} from './components/OtherTabs';
import { StudyMaterialView, StudyToolsView } from './components/StudyMaterialView';
import { PortalApp, PORTALS_DATA } from './data/portalsData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedPlatformSlug, setSelectedPlatformSlug] = useState<string>('pw');
  const [activeEmbedApp, setActiveEmbedApp] = useState<PortalApp | null>(null);
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Show Telegram modal once on initial visit (matching screenshot)
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('preppro_telegram_seen');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsTelegramModalOpen(true);
        sessionStorage.setItem('preppro_telegram_seen', 'true');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenPortals = (slug: string = 'pw') => {
    setSelectedPlatformSlug(slug);
    setCurrentView('portals');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchApp = (app: PortalApp, shouldEmbed: boolean = true) => {
    if (shouldEmbed || app.mode === 'iframe') {
      setActiveEmbedApp(app);
      setCurrentView('embed');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.open(app.src, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSelectAnotherAppInEmbed = (app: PortalApp) => {
    setActiveEmbedApp(app);
  };

  const handleNavigate = (tab: string, slug?: string) => {
    if (slug) {
      setSelectedPlatformSlug(slug);
    }
    setCurrentView(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-[#fafbfc] text-slate-900'} flex flex-col font-sans transition-colors duration-200`}>
      {/* Telegram Modal */}
      <TelegramModal
        isOpen={isTelegramModalOpen}
        onClose={() => setIsTelegramModalOpen(false)}
      />

      {/* Main Top Navigation (Only shown when not in full embedded workspace or adapted) */}
      {currentView !== 'embed' && (
        <Navbar
          activeTab={currentView}
          onSelectTab={(tab) => handleNavigate(tab)}
          onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentView === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenPortals={handleOpenPortals}
            onOpenTelegramModal={() => setIsTelegramModalOpen(true)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {currentView === 'apps' && (
          <AppsPage
            onBack={() => setCurrentView('home')}
            onOpenPortals={handleOpenPortals}
            onLaunchApp={handleLaunchApp}
          />
        )}

        {currentView === 'portals' && (
          <PortalsPage
            initialSlug={selectedPlatformSlug}
            onBack={() => setCurrentView('apps')}
            onLaunchApp={handleLaunchApp}
            isDarkMode={isDarkMode}
            onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          />
        )}

        {currentView === 'embed' && activeEmbedApp && (
          <div className="max-w-6xl mx-auto px-2 sm:px-4 py-2">
            <IframeEmbedViewer
              app={activeEmbedApp}
              onBack={() => setCurrentView(selectedPlatformSlug ? 'portals' : 'apps')}
              onSelectAnotherApp={handleSelectAnotherAppInEmbed}
            />
          </div>
        )}

        {currentView === 'tests' && <TestSeriesView />}
        {currentView === 'books' && <PrepBooksView />}
        {currentView === 'material' && <StudyMaterialView />}
        {currentView === 'tracker' && <StudyTrackerView />}
        {currentView === 'chat' && <PrepChatView />}
        {currentView === 'tools' && <StudyToolsView />}
      </main>
    </div>
  );
}
