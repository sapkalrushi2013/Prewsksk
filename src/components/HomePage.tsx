import React, { useState } from 'react';
import { 
  Search, 
  Smartphone, 
  BookOpen, 
  MessageSquare, 
  FileText, 
  Library, 
  Timer, 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  Check, 
  Users, 
  Target, 
  ShieldCheck, 
  Flame, 
  Zap, 
  Heart,
  ChevronRight,
  Info,
  Send,
  MessageCircle,
  GraduationCap
} from 'lucide-react';
import { PORTALS_DATA, SOCIAL_LINKS, QUICK_LINKS } from '../data/portalsData';
import { Logo } from './Logo';

interface HomePageProps {
  onNavigate: (tab: string, slug?: string) => void;
  onOpenPortals: (slug: string) => void;
  onOpenTelegramModal: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenPortals,
  onOpenTelegramModal,
  searchQuery,
  setSearchQuery
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselItems = [
    {
      badge: "LIVE NOW • PrepPro Pick",
      title: "PrepBooks is now live",
      desc: "Every book, module & PYQ set you need — now live, free forever.",
      cta: "Open PrepBooks",
      action: () => onNavigate('books')
    },
    {
      badge: "UPDATED • Physics Wallah",
      title: "PW Thor Portal 1 & PW OTT Active",
      desc: "Instant live class streaming and fast lecture notes mirror.",
      cta: "Launch Portals",
      action: () => onOpenPortals('pw')
    },
    {
      badge: "CBT MOCKS • 2026",
      title: "Real Exam CBT Simulator",
      desc: "Practice with actual JEE/NEET timing, questions & negative marking.",
      cta: "Start Test",
      action: () => onNavigate('tests')
    }
  ];

  // Quick action items (7 main feature categories)
  const featureCards = [
    {
      id: "apps",
      title: "Study Apps",
      badgeText: "Premium Coaching — Free Access",
      desc: "PW, Unacademy, Next Toppers & 10+ platforms",
      borderColor: "border-pink-300 hover:border-pink-500",
      accentBg: "bg-pink-500",
      lightBg: "bg-pink-50/50",
      icon: Smartphone,
      iconColor: "text-pink-600",
      iconBg: "bg-pink-100",
      tagColor: "bg-pink-100 text-pink-700",
      actionText: "Explore Now",
      onExplore: () => onNavigate('apps')
    },
    {
      id: "tests",
      title: "Test Series",
      badgeText: "CBT Practice — Real Exam Feel",
      desc: "PW Test Series, PYQs & Chapter Tests",
      borderColor: "border-purple-300 hover:border-purple-500",
      accentBg: "bg-purple-600",
      lightBg: "bg-purple-50/50",
      icon: BookOpen,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      tagColor: "bg-purple-100 text-purple-700",
      actionText: "Explore Now",
      onExplore: () => onNavigate('tests')
    },
    {
      id: "chat",
      title: "PrepChat",
      badgeText: "Connect & Discuss",
      desc: "Chat rooms, AI doubts, study groups",
      borderColor: "border-sky-300 hover:border-sky-500",
      accentBg: "bg-sky-500",
      lightBg: "bg-sky-50/50",
      icon: MessageSquare,
      iconColor: "text-sky-600",
      iconBg: "bg-sky-100",
      tagColor: "bg-sky-100 text-sky-700",
      actionText: "Explore Now",
      onExplore: () => onNavigate('chat')
    },
    {
      id: "material",
      title: "Study Material",
      badgeText: "Notes, Books & Resources",
      desc: "Allen, FIITJEE, Resonance + Cengage, Arihant",
      borderColor: "border-emerald-300 hover:border-emerald-500",
      accentBg: "bg-emerald-500",
      lightBg: "bg-emerald-50/50",
      icon: FileText,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100",
      tagColor: "bg-emerald-100 text-emerald-700",
      actionText: "Explore Now",
      onExplore: () => onNavigate('material')
    },
    {
      id: "books",
      title: "PrepBooks",
      badgeText: "Now Live — Free Book Library",
      desc: "NCERTs, modules & reference books — read online, free",
      borderColor: "border-blue-300 hover:border-blue-500",
      accentBg: "bg-blue-600",
      lightBg: "bg-blue-50/50",
      icon: Library,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      tagColor: "bg-blue-100 text-blue-700",
      actionText: "Explore Now",
      onExplore: () => onNavigate('books')
    },
    {
      id: "tracker",
      title: "Study Tracker",
      badgeText: "YPT Style — Track, Compete & Grow",
      desc: "Timer, Analytics, Study Rooms, Leaderboard & Friends",
      borderColor: "border-amber-300 hover:border-amber-500",
      accentBg: "bg-amber-500",
      lightBg: "bg-amber-50/50",
      icon: Timer,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-100",
      tagColor: "bg-amber-100 text-amber-700",
      actionText: "Explore Now",
      onExplore: () => onNavigate('tracker')
    },
    {
      id: "tools",
      title: "PrepPro Study Tools",
      badgeText: "Pro Academic Toolkit",
      desc: "Roadmap, AI Doubt Solver, Test Forge, Flashcards & more",
      borderColor: "border-violet-300 hover:border-violet-500",
      accentBg: "bg-violet-600",
      lightBg: "bg-violet-50/50",
      icon: Sparkles,
      iconColor: "text-violet-600",
      iconBg: "bg-violet-100",
      tagColor: "bg-violet-100 text-violet-700",
      actionText: "Explore Now",
      onExplore: () => onNavigate('tools')
    }
  ];

  const featuredInstitutions = [
    { name: "Unacademy", slug: "unacademy", symbol: "UA" },
    { name: "Next Toppers", slug: "nexttoppers", symbol: "NT" },
    { name: "Vibrant Academy", slug: "vibrant", symbol: "VA" },
    { name: "Career Will", slug: "pw", symbol: "CW" },
    { name: "KGS", slug: "kgs", symbol: "KGS" },
    { name: "IIT School", slug: "iitschool", symbol: "IIT" },
    { name: "Utkarsh", slug: "utkarsh", symbol: "UTK" },
  ];

  const filteredFeatures = featureCards.filter(c =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.badgeText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        {/* Top Carousel Banner (matching Screenshot 1) */}
        <div className="relative mb-6 rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-purple-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl">
          <div className="relative z-10 max-w-lg">
            <span className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-bold tracking-wider uppercase border border-pink-500/30 mb-3">
              {carouselItems[carouselIndex].badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              {carouselItems[carouselIndex].title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              {carouselItems[carouselIndex].desc}
            </p>
            <button
              onClick={carouselItems[carouselIndex].action}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-pink-500/30 transition-transform active:scale-95 cursor-pointer"
            >
              <span>{carouselItems[carouselIndex].cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Carousel footer pagination */}
          <div className="absolute bottom-4 right-6 flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            <span>FEATURED • {carouselIndex + 1}/{carouselItems.length}</span>
            <div className="flex gap-1 ml-1">
              {carouselItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    i === carouselIndex ? 'w-5 bg-pink-500' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 2 Quick Action Buttons matching Screenshot 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {/* Card 1: Open Community */}
          <div 
            onClick={() => window.open(SOCIAL_LINKS.telegram, '_blank')}
            className="group rounded-2xl bg-gradient-to-r from-purple-900 to-pink-900 text-white p-4 flex items-center justify-between cursor-pointer hover:shadow-lg transition-all"
          >
            <div>
              <div className="text-[10px] font-extrabold text-pink-300 uppercase tracking-wider mb-0.5">
                • LIVE • VERIFIED ADMINS
              </div>
              <h4 className="font-extrabold text-sm sm:text-base">Open Community</h4>
              <p className="text-[11px] text-purple-200 mt-0.5">
                Official posts • react with emojis • drop your thoughts
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-pink-500/30 group-hover:bg-pink-500 flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Card 2: Message the Owner */}
          <div 
            onClick={() => window.open(SOCIAL_LINKS.ownerChat, '_blank')}
            className="group rounded-2xl bg-gradient-to-r from-sky-900 to-blue-900 text-white p-4 flex items-center justify-between cursor-pointer hover:shadow-lg transition-all"
          >
            <div>
              <div className="text-[10px] font-extrabold text-sky-300 uppercase tracking-wider mb-0.5">
                • PRIVATE • 1-ON-1
              </div>
              <h4 className="font-extrabold text-sm sm:text-base">Message the Owner</h4>
              <p className="text-[11px] text-sky-200 mt-0.5">
                A direct line to Saurabh. Only you & owner can chat.
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-sky-500/30 group-hover:bg-sky-500 flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search apps, test series, books, notes, modules..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
          />
        </div>

        {/* Quick Access Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-[11px] font-bold uppercase tracking-wider mb-2">
            <span>❖ Quick Access</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Explore <span className="text-pink-600">PrepPro Network</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Everything for JEE, NEET & competitive exams
          </p>
        </div>

        {/* 7 Big Feature Category Cards (Exact matching Screenshot 1) */}
        <div className="space-y-6 mb-16">
          {filteredFeatures.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`rounded-3xl bg-white border-2 ${card.borderColor} p-6 sm:p-7 shadow-sm hover:shadow-md transition-all relative overflow-hidden`}
              >
                {/* Top Corner Icon */}
                <div className={`absolute top-6 right-6 p-2 rounded-2xl ${card.tagColor}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Card Title & PrepPro Icon */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 p-[2px] flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white">
                        <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white stroke-[2.5]" stroke="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {card.title}
                    </h3>
                    <Info className="w-4 h-4 text-slate-300" />
                  </div>
                </div>

                {/* Subtitle & Description */}
                <div className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5">
                  {card.badgeText}
                </div>
                <p className="text-xs text-slate-500 mb-5">
                  {card.desc}
                </p>

                {/* Explore Pill Button */}
                <div className="mb-4">
                  <button
                    onClick={card.onExplore}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-800 text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                      {card.actionText}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>

                {/* WhatsApp & Telegram join pill rows */}
                <div className="space-y-2">
                  {/* WhatsApp */}
                  <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-2.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold text-slate-800 text-[11px] sm:text-xs">
                        Join WhatsApp Channel — <span className="font-bold">{card.title}</span>
                      </span>
                    </div>
                    <a
                      href={SOCIAL_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] transition-colors"
                    >
                      Join ↗
                    </a>
                  </div>

                  {/* Telegram */}
                  <div className="rounded-xl border border-sky-200/80 bg-sky-50/50 p-2.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4 text-sky-600" />
                      <span className="font-semibold text-slate-800 text-[11px] sm:text-xs">
                        Join Telegram Channel — <span className="font-bold">{card.title}</span>
                      </span>
                    </div>
                    <a
                      href={SOCIAL_LINKS.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-[10px] transition-colors"
                    >
                      Join ↗
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Institutions (matching Screenshot 1) */}
        <div className="text-center mb-16">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
            Featured <span className="text-pink-600">Institutions</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            India's top coaching platforms — all in one place
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {featuredInstitutions.map((inst) => (
              <div
                key={inst.slug}
                onClick={() => onOpenPortals(inst.slug)}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-pink-300 transition-all flex flex-col items-center justify-center cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center mb-2 group-hover:scale-105 transition-transform shadow-sm">
                  {inst.symbol}
                </div>
                <span className="text-[11px] font-bold text-slate-700 group-hover:text-pink-600 transition-colors truncate max-w-full">
                  {inst.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section (6 cards matching screenshot 1) */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-[11px] font-bold uppercase tracking-wider mb-2">
            <span>❖ Why Choose Us</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
            Why <span className="text-pink-600">PrepPro Network?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-8 max-w-lg mx-auto">
            Everything you need for competitive exams — organized, free & effective
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { title: "Concept-Focused", desc: "Strong foundations with clear explanations", icon: Target, color: "text-purple-600 bg-purple-50" },
              { title: "Smart Practice", desc: "AI-powered recommendations for weak areas", icon: Sparkles, color: "text-rose-600 bg-rose-50" },
              { title: "Track Progress", desc: "Detailed analytics to monitor your growth", icon: Zap, color: "text-emerald-600 bg-emerald-50" },
              { title: "Exam-Oriented", desc: "Curated for JEE, NEET & boards", icon: BookOpen, color: "text-amber-600 bg-amber-50" },
              { title: "100% Free", desc: "No hidden charges, ever. Free forever.", icon: ShieldCheck, color: "text-sky-600 bg-sky-50" },
              { title: "Trusted Content", desc: "Verified resources from top educators", icon: Users, color: "text-teal-600 bg-teal-50" },
            ].map((feat, i) => {
              const FIcon = feat.icon;
              return (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className={`w-9 h-9 rounded-xl ${feat.color} flex items-center justify-center mb-3`}>
                    <FIcon className="w-4 h-4" />
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 mb-1">{feat.title}</h4>
                  <p className="text-xs text-slate-500">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Who is PrepPro for? (4 pastel cards matching screenshot 1) */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-[11px] font-bold uppercase tracking-wider mb-2">
            <span>❖ Built for You</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
            Who is <span className="text-pink-600">PrepPro for?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-8">
            Designed for Indian competitive exam aspirants
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-blue-50/50 border border-indigo-100 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">JEE Aspirants</h4>
                <p className="text-xs text-slate-500 mt-0.5">Physics, Chemistry & Maths — all levels covered</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-teal-50/50 border border-emerald-100 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">NEET Aspirants</h4>
                <p className="text-xs text-slate-500 mt-0.5">Biology, Physics & Chemistry prep materials</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/70 to-yellow-50/50 border border-amber-100 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Class 11-12</h4>
                <p className="text-xs text-slate-500 mt-0.5">Boards + competitive exam preparation</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50/70 to-pink-50/50 border border-rose-100 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-rose-100 text-rose-700">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Self-Learners</h4>
                <p className="text-xs text-slate-500 mt-0.5">Structured paths for beginners to advanced</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Creator / Meet Saurabh (matching screenshot 1) */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-[11px] font-bold uppercase tracking-wider mb-2">
            <span>❖ The Creator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
            Meet <span className="text-pink-600">Saurabh</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            The mind behind PrepPro Network
          </p>

          <div className="max-w-md mx-auto p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            {/* Pink 'S' Avatar */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-pink-600 to-rose-500 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-pink-500/25 mb-4">
              S
            </div>

            <h4 className="text-xl font-black text-slate-900 mb-1">Saurabh</h4>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                🎓 12th — JEE Aspirant
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                ⚡ Age 17
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              Passionate developer who built PrepPro Network to make quality education accessible for every aspirant across India — completely free.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
              <div className="p-2 rounded-xl bg-slate-50 flex items-center justify-center gap-1.5">
                <span className="text-blue-500">💻</span> Coding
              </div>
              <div className="p-2 rounded-xl bg-slate-50 flex items-center justify-center gap-1.5">
                <span className="text-rose-500">🎥</span> Content Creation
              </div>
              <div className="p-2 rounded-xl bg-slate-50 flex items-center justify-center gap-1.5">
                <span className="text-purple-500">✂️</span> Editing
              </div>
              <div className="p-2 rounded-xl bg-slate-50 flex items-center justify-center gap-1.5">
                <span className="text-amber-500">✨</span> And more...
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Start? CTA Card (matching screenshot 1) */}
        <div className="max-w-md mx-auto rounded-3xl bg-white border border-slate-200 p-8 text-center shadow-sm mb-16">
          <div className="w-10 h-10 mx-auto rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mb-3">
            <Check className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">
            Ready to <span className="text-pink-600">Start?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
            Join thousands of students who cracked their exams with PrepPro Network.
          </p>
          <button
            onClick={() => onNavigate('apps')}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-extrabold text-sm shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="text-[11px] text-slate-400 font-semibold mt-3">
            Trusted by <span className="text-slate-700 font-bold">50,000+</span> students
          </div>
        </div>

        {/* Footer (matching Screenshot 1) */}
        <footer className="pt-8 border-t border-slate-200 text-center">
          <div className="flex flex-col items-center gap-3">
            <Logo size="md" />
            <a
              href="https://preppronetwork.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-pink-600 hover:text-pink-700 inline-flex items-center gap-1"
            >
              <span>Explore PrepPro Network</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <p className="text-xs text-slate-400 mt-2">
              © 2026 PrepPro Network. Made with ❤️ for aspirants. Powered by PrepPro Network
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
