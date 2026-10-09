import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  BookOpen, 
  Search, 
  Download, 
  CheckCircle, 
  MessageSquare, 
  Send, 
  Sparkles, 
  Award, 
  Flame, 
  Clock, 
  FileText, 
  ChevronRight, 
  ExternalLink,
  BookMarked,
  Layers,
  HelpCircle,
  BarChart3
} from 'lucide-react';

// ================= TEST SERIES TAB =================
export const TestSeriesView: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<'JEE' | 'NEET'>('JEE');
  const [activeTestId, setActiveTestId] = useState<number | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState<number>(180 * 60); // 3 hours

  const tests = [
    { id: 1, title: "JEE Main 2026 Full Mock Test 01", questions: 75, duration: "3 hrs", marks: 300, difficulty: "Medium-Hard", exam: "JEE" },
    { id: 2, title: "PW All India Test Series (AITS) - Major 01", questions: 75, duration: "3 hrs", marks: 300, difficulty: "Hard", exam: "JEE" },
    { id: 3, title: "NEET 2026 Full Syllabus Mock Test 01", questions: 200, duration: "3 hrs 20 mins", marks: 720, difficulty: "Moderate", exam: "NEET" },
    { id: 4, title: "Physics Mechanics & Electrostatics Chapter Test", questions: 30, duration: "60 mins", marks: 120, difficulty: "Medium", exam: "JEE" },
  ];

  const sampleQuestions = [
    {
      q: "A particle moves in a circle of radius 20 cm with a linear speed of 10 m/s. Find the angular acceleration after 5 revolutions if tangential acceleration is 2 m/s².",
      options: ["10 rad/s²", "5 rad/s²", "2 rad/s²", "15 rad/s²"],
      correct: 0,
      subject: "Physics"
    },
    {
      q: "Which of the following compounds exhibits optical isomerism?",
      options: ["[Co(en)3]3+", "[Pt(NH3)2Cl2]", "[Cr(NH3)4Cl2]+", "[Ni(CO)4]"],
      correct: 0,
      subject: "Chemistry"
    },
    {
      q: "The value of the definite integral ∫ from 0 to π/2 of (sin x) / (sin x + cos x) dx is:",
      options: ["π/4", "π/2", "π", "0"],
      correct: 0,
      subject: "Mathematics"
    }
  ];

  useEffect(() => {
    if (activeTestId) {
      const timer = setInterval(() => {
        setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [activeTestId]);

  const formatTimer = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (activeTestId) {
    const q = sampleQuestions[currentQIndex % sampleQuestions.length];
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-3xl border border-slate-200 shadow-xl my-6">
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900">JEE/NEET CBT Test Simulator</h3>
            <span className="text-xs text-pink-600 font-bold">Subject: {q.subject}</span>
          </div>
          <div className="flex items-center gap-2 bg-pink-50 border border-pink-200 text-pink-700 px-3 py-1.5 rounded-full font-mono text-sm font-bold">
            <Clock className="w-4 h-4 text-pink-600" />
            <span>{formatTimer(timeLeft)}</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-xs font-bold text-slate-400 mb-1">Question {currentQIndex + 1} of 75</div>
          <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed mb-4">
            {q.q}
          </p>

          <div className="space-y-2.5">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedAnswers(prev => ({ ...prev, [currentQIndex]: i }))}
                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                  selectedAnswers[currentQIndex] === i
                    ? 'border-pink-500 bg-pink-50 text-pink-900 font-bold shadow-sm'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span>{String.fromCharCode(65 + i)}. {opt}</span>
                {selectedAnswers[currentQIndex] === i && <CheckCircle className="w-4 h-4 text-pink-600" />}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQIndex === 0}
            className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
          >
            Previous
          </button>

          <button
            onClick={() => setActiveTestId(null)}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
          >
            Submit Test
          </button>

          <button
            onClick={() => setCurrentQIndex(prev => prev + 1)}
            className="px-4 py-2 rounded-xl bg-pink-600 text-white text-xs font-bold hover:bg-pink-700 cursor-pointer"
          >
            Next Question
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200">
          CBT PRACTICE — REAL EXAM FEEL
        </span>
        <h2 className="text-3xl font-black text-slate-900 mt-2">Test Series & Chapter Mocks</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">PW Test Series, All India Mock Tests, and Past 10 Years PYQs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tests.map(test => (
          <div key={test.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 uppercase">{test.exam}</span>
              <span className="text-xs text-slate-400 font-semibold">{test.duration}</span>
            </div>
            <h4 className="font-extrabold text-base text-slate-900 mb-1">{test.title}</h4>
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
              <span>{test.questions} Questions</span>
              <span>•</span>
              <span>{test.marks} Marks</span>
              <span>•</span>
              <span className="text-pink-600 font-medium">{test.difficulty}</span>
            </div>
            <button
              onClick={() => setActiveTestId(test.id)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold hover:opacity-95 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Start CBT Exam Simulator</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// ================= PREPBOOKS TAB =================
export const PrepBooksView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');

  const books = [
    { title: "NCERT Physics Class 11 (Part 1 & 2)", author: "NCERT", subject: "Physics", pages: 320, downloads: "85K" },
    { title: "Concepts of Physics (Vol 1 & 2)", author: "H.C. Verma", subject: "Physics", pages: 462, downloads: "140K" },
    { title: "NCERT Chemistry Class 11 & 12", author: "NCERT", subject: "Chemistry", pages: 510, downloads: "95K" },
    { title: "Problems in General Physics", author: "I.E. Irodov", subject: "Physics", pages: 388, downloads: "70K" },
    { title: "Cengage Mathematics for JEE Advanced", author: "G. Tewani", subject: "Mathematics", pages: 640, downloads: "110K" },
    { title: "NCERT Biology Fingertips", author: "MTG Editorial", subject: "Biology", pages: 580, downloads: "160K" },
  ];

  const filtered = books.filter(b => 
    (selectedSubject === 'All' || b.subject === selectedSubject) &&
    (b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
          FREE BOOK LIBRARY
        </span>
        <h2 className="text-3xl font-black text-slate-900 mt-2">PrepBooks Online Library</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">NCERTs, standard modules & reference books — read online, free forever</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search books, authors, NCERTs..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm shadow-sm"
          />
        </div>
        <div className="flex gap-1.5 overflow-x-auto">
          {['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology'].map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer whitespace-nowrap ${
                selectedSubject === sub ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((book, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">{book.subject}</span>
                <span className="text-[10px] text-slate-400 font-medium">{book.downloads} reads</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">{book.title}</h4>
              <p className="text-xs text-slate-500 mb-3">By {book.author}</p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">{book.pages} pages</span>
              <button
                onClick={() => alert(`Opening "${book.title}" in online PDF reader.`)}
                className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Online</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ================= STUDY TRACKER TAB (YPT STYLE) =================
export const StudyTrackerView: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [currentGoal, setCurrentGoal] = useState("Target: 8 Hours Focus");

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider border border-amber-200">
          YPT STYLE — TRACK, COMPETE & GROW
        </span>
        <h2 className="text-3xl font-black text-slate-900 mt-2">PrepPro Study Tracker</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">Study timer, daily streaks, study rooms & friend leaderboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stopwatch Card */}
        <div className="md:col-span-2 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Today's Study Streak: 14 Days</span>
          </div>

          <div className="text-5xl sm:text-7xl font-mono font-black text-slate-900 my-6 tracking-tight">
            {hrs.toString().padStart(2, '0')}:{mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`px-8 py-3.5 rounded-2xl text-white font-extrabold text-sm shadow-md flex items-center gap-2 cursor-pointer transition-all ${
                isActive ? 'bg-amber-600 hover:bg-amber-700' : 'bg-gradient-to-r from-pink-600 to-rose-600 hover:opacity-95'
              }`}
            >
              {isActive ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
              <span>{isActive ? 'Pause Timer' : 'Start Focus Session'}</span>
            </button>

            <button
              onClick={() => { setIsActive(false); setSeconds(0); }}
              className="p-3.5 rounded-2xl border border-slate-200 text-slate-500 hover:bg-slate-50 cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Leaderboard */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <h4 className="font-black text-sm text-slate-900 mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-pink-600" />
            <span>Daily Leaderboard</span>
          </h4>

          <div className="space-y-3">
            {[
              { name: "Saurabh (Admin)", time: "9h 45m", rank: "🥇", badge: "AIR 1 Target" },
              { name: "Rohit K.", time: "8h 10m", rank: "🥈", badge: "Kota" },
              { name: "Pooja V.", time: "7h 30m", rank: "🥉", badge: "NEET 2026" },
              { name: "You", time: `${hrs}h ${mins}m`, rank: "4th", badge: "Active Now" },
            ].map((usr, i) => (
              <div key={i} className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                usr.name === 'You' ? 'bg-pink-50 border-pink-200 font-bold' : 'border-slate-100'
              }`}>
                <div className="flex items-center gap-2">
                  <span>{usr.rank}</span>
                  <div>
                    <div className="text-slate-800 font-bold">{usr.name}</div>
                    <div className="text-[10px] text-slate-400">{usr.badge}</div>
                  </div>
                </div>
                <span className="font-mono font-bold text-slate-700">{usr.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ================= PREPCHAT TAB =================
export const PrepChatView: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "Saurabh", time: "10:30 AM", text: "Welcome to PrepChat! Share your doubts, questions, and revision tips here.", isAdmin: true },
    { id: 2, user: "Aman_JEE", time: "10:32 AM", text: "Has anyone completed Rotational Dynamics chapter test on PW Thor?", isAdmin: false },
    { id: 3, user: "Priya_NEET", time: "10:35 AM", text: "Yes, question 14 on moment of inertia of hollow cone is very conceptual!", isAdmin: false },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages(prev => [
      ...prev,
      { id: Date.now(), user: "You", time: "Just now", text: inputText, isAdmin: false }
    ]);
    setInputText("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
          CONNECT & DISCUSS
        </span>
        <h2 className="text-3xl font-black text-slate-900 mt-2">PrepChat Study Rooms</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">Chat rooms, AI doubt solver, peer discussions & notes exchange</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[520px]">
        {/* Header */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-extrabold text-sm text-slate-900"># All-India JEE & NEET Doubts</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">1,420 Online Aspirants</span>
        </div>

        {/* Message feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map(m => (
            <div key={m.id} className={`flex flex-col ${m.user === 'You' ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[11px] font-bold text-slate-700">{m.user}</span>
                {m.isAdmin && <span className="text-[9px] bg-pink-100 text-pink-700 px-1.5 rounded font-bold">OWNER</span>}
                <span className="text-[10px] text-slate-400">{m.time}</span>
              </div>
              <div className={`p-3 rounded-2xl text-xs sm:text-sm max-w-sm ${
                m.user === 'You'
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-tr-none'
                  : 'bg-slate-100 text-slate-800 rounded-tl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-slate-100 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Type your doubt or question..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-pink-500"
          />
          <button
            onClick={handleSend}
            className="p-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white cursor-pointer transition-colors shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
