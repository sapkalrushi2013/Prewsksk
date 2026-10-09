import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  BookOpen, 
  Folder, 
  ExternalLink,
  Sparkles,
  HelpCircle,
  Calculator,
  Compass,
  CheckCircle2
} from 'lucide-react';

export const StudyMaterialView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const materials = [
    { title: "Allen Kota Physics Complete Handbooks", category: "Physics", size: "18 MB", downloads: "45K", type: "PDF Notes" },
    { title: "FIITJEE GMP (Grand Masters Package) Chemistry", category: "Chemistry", size: "24 MB", downloads: "38K", type: "Problems" },
    { title: "Resonance Rank Booster Maths Formula Compendium", category: "Mathematics", size: "12 MB", downloads: "52K", type: "Formulas" },
    { title: "Cengage Physics Mechanics Solved Examples", category: "Physics", size: "32 MB", downloads: "61K", type: "Modules" },
    { title: "Organic Chemistry Reaction Mechanism Roadmaps", category: "Chemistry", size: "8 MB", downloads: "74K", type: "Cheat Sheet" },
    { title: "Calculus Super Tricks & Short Methods Book", category: "Mathematics", size: "15 MB", downloads: "80K", type: "Short Notes" },
  ];

  const filtered = materials.filter(m =>
    (activeCategory === 'All' || m.category === activeCategory) &&
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
          NOTES, BOOKS & RESOURCES
        </span>
        <h2 className="text-3xl font-black text-slate-900 mt-2">Study Material Compendium</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">Allen, FIITJEE, Resonance Kota classroom notes + Cengage & Arihant</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search Allen notes, FIITJEE modules, formula sheets..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm shadow-sm"
          />
        </div>
        <div className="flex gap-1.5 overflow-x-auto">
          {['All', 'Physics', 'Chemistry', 'Mathematics'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold cursor-pointer whitespace-nowrap ${
                activeCategory === cat ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((mat, i) => (
          <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-4 hover:border-emerald-300 transition-colors">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">{mat.type}</span>
                  <span className="text-xs font-semibold text-emerald-600">{mat.category}</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 mt-0.5">{mat.title}</h4>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Size: {mat.size} • {mat.downloads} downloads
                </div>
              </div>
            </div>

            <button
              onClick={() => alert(`Starting download for ${mat.title}`)}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm flex-shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const StudyToolsView: React.FC = () => {
  const [doubtText, setDoubtText] = useState('');
  const [solution, setSolution] = useState<string | null>(null);
  const [isSolving, setIsSolving] = useState(false);

  const handleSolve = () => {
    if (!doubtText.trim()) return;
    setIsSolving(true);
    setTimeout(() => {
      setIsSolving(false);
      setSolution(
        `Step 1: Identify given parameters.\nStep 2: Apply the conservation of mechanical energy: ΔK + ΔU = 0.\nStep 3: Solve for velocity v = √(2gh - 2μgL).\nFinal Answer: Option (A) is correct. Keep revising similar problems in Work, Energy & Power!`
      );
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider border border-violet-200">
          PRO ACADEMIC TOOLKIT
        </span>
        <h2 className="text-3xl font-black text-slate-900 mt-2">PrepPro Study Tools</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">Roadmap builder, AI Doubt Solver, Test Forge, Flashcards & Formula Cheats</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI Doubt Solver Simulator */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-violet-600" />
            <h3 className="font-extrabold text-base text-slate-900">Instant AI Doubt Solver</h3>
          </div>
          <p className="text-xs text-slate-500 mb-4">Paste any question or formula to get step-by-step conceptual hints:</p>

          <textarea
            value={doubtText}
            onChange={e => setDoubtText(e.target.value)}
            placeholder="e.g. Find the magnetic field at center of a circular loop carrying current I..."
            rows={4}
            className="w-full p-3 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-violet-500 mb-3"
          />

          <button
            onClick={handleSolve}
            disabled={isSolving || !doubtText.trim()}
            className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-violet-500/20 disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isSolving ? 'Analyzing Doubt...' : 'Solve Doubt Step-by-Step'}</span>
          </button>

          {solution && (
            <div className="mt-4 p-4 rounded-2xl bg-violet-50 border border-violet-200 text-xs text-slate-800 whitespace-pre-line">
              <span className="font-black text-violet-900 block mb-1">Detailed Solution & Hint:</span>
              {solution}
            </div>
          )}
        </div>

        {/* Quick Study Roadmaps & Formula Cards */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-pink-600" />
              <h3 className="font-extrabold text-base text-slate-900">90-Day Revision Roadmap</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">Day-by-day syllabus milestone checklist for JEE Main & NEET:</p>

            <div className="space-y-2.5">
              {[
                { title: "Day 1-15: Mechanics & Thermodynamics", status: "Completed", pct: "100%" },
                { title: "Day 16-30: Electrodynamics & Optics", status: "In Progress", pct: "65%" },
                { title: "Day 31-45: Physical & Inorganic Chemistry", status: "Upcoming", pct: "0%" },
                { title: "Day 46-60: Organic Chemistry & Biomolecules", status: "Upcoming", pct: "0%" },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-800">{item.title}</span>
                    <span className="block text-[10px] text-slate-400">{item.status}</span>
                  </div>
                  <span className="font-mono font-bold text-pink-600">{item.pct}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Includes 450+ formulas</span>
            <button
              onClick={() => alert("Full 90-Day Roadmap PDF opened.")}
              className="text-xs font-bold text-pink-600 hover:underline cursor-pointer"
            >
              Download PDF Roadmap →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
