export interface PortalApp {
  title: string;
  src: string;
  desc: string;
  mode: 'iframe' | 'external';
  source: string;
  rating?: string;
  status?: string | number;
  studentsCount?: string;
  stars?: number;
}

export interface PlatformCategory {
  slug: string;
  name: string;
  shortName?: string;
  tagline?: string;
  accentColor: string;
  logoBg: string;
  logoText: string;
  badge?: string;
  accessCode?: string;
  apps: PortalApp[];
}

export const PORTALS_DATA: PlatformCategory[] = [
  {
    slug: "pw",
    name: "Physics Wallah",
    shortName: "PW",
    tagline: "Access Physics Wallah premium courses, batches, DPPs & study materials with enhanced features.",
    accentColor: "from-pink-500 to-rose-600",
    logoBg: "bg-black text-white",
    logoText: "PW",
    badge: "Official & Portals",
    apps: [
      {
        title: "PrepPro Network – Physics Wallah",
        src: "https://preppronetworks.pearlspark.xyz/",
        desc: "Our complete Physics Wallah learning app with live classes, tests & DPPs",
        mode: "iframe",
        source: "pw",
        rating: "best",
        status: 200,
        studentsCount: "250,000+",
        stars: 4.9
      },
      {
        title: "PW Thor Portal 1",
        src: "https://pwthor.live/study/batches",
        desc: "PW Thor Fast Batches & Live lectures backup portal",
        mode: "external",
        source: "pw",
        rating: "good",
        status: 403,
        studentsCount: "1,00,000+",
        stars: 4.8
      },
      {
        title: "PW Portal 2",
        src: "https://s4-cdn.samfygros.com/",
        desc: "Samfygros PW high-speed CDN portal",
        mode: "external",
        source: "pw",
        rating: "",
        status: 403,
        studentsCount: "1,00,000+",
        stars: 4.8
      },
      {
        title: "PW OTT",
        src: "https://pipro.deltastudy.site/",
        desc: "PW OTT Streaming lectures & recorded videos",
        mode: "external",
        source: "pw",
        rating: "",
        status: "000ERR",
        studentsCount: "1,00,000+",
        stars: 4.8
      },
      {
        title: "PW Portal 4",
        src: "https://thedevcoderz-pw.pages.dev/",
        desc: "DevCoderz PW Fast Cloudflare mirror",
        mode: "external",
        source: "pw",
        rating: "",
        status: 403,
        studentsCount: "1,00,000+",
        stars: 4.8
      },
      {
        title: "PW Portal 5",
        src: "https://pw-mtaiirus.primestudy.site/",
        desc: "Mtaiirus PW Batches & Tests access",
        mode: "external",
        source: "pw",
        rating: "",
        status: "000ERR",
        studentsCount: "1,00,000+",
        stars: 4.8
      },
      {
        title: "PW Portal 6",
        src: "https://pw.studypanda.live/",
        desc: "StudyPanda PW Live Batches",
        mode: "external",
        source: "pw",
        rating: "good",
        status: 200,
        studentsCount: "1,00,000+",
        stars: 4.8
      },
      {
        title: "PW Portal 7",
        src: "https://deltastudy.site/study-v2/batches",
        desc: "DeltaStudy Batches V2 with notes",
        mode: "external",
        source: "pw",
        rating: "",
        status: "000ERR",
        studentsCount: "1,00,000+",
        stars: 4.8
      },
      {
        title: "PW Portal 8",
        src: "https://rarestudy.in/batches",
        desc: "RareStudy Batches Premium collection",
        mode: "external",
        source: "pw",
        rating: "good",
        status: 200,
        studentsCount: "1,00,000+",
        stars: 4.8
      },
      {
        title: "PW Portal 9",
        src: "https://pw.primestudy.site/study/batches",
        desc: "PrimeStudy PW direct lectures",
        mode: "external",
        source: "pw",
        rating: "",
        status: "000ERR",
        studentsCount: "1,00,000+",
        stars: 4.8
      },
      {
        title: "PW Portal 10",
        src: "https://studybeepro.in/pw/#",
        desc: "StudyBeePro PW interactive portal",
        mode: "external",
        source: "pw",
        rating: "good",
        status: 200,
        studentsCount: "1,00,000+",
        stars: 4.8
      },
      {
        title: "PW Portal 11",
        src: "https://pw.modgalaxy.in/",
        desc: "ModGalaxy PW Android & Web viewer",
        mode: "external",
        source: "pw",
        rating: "",
        status: "000ERR",
        studentsCount: "1,00,000+",
        stars: 4.8
      }
    ]
  },
  {
    slug: "vibrant",
    name: "Vibrant Academy",
    shortName: "Vibrant",
    tagline: "Vibrant Academy premium content for JEE & competitive exam preparation.",
    accentColor: "from-amber-500 to-red-600",
    logoBg: "bg-amber-100 text-amber-800 border border-amber-300",
    logoText: "VA",
    apps: [
      {
        title: "Vibrant Academy Best",
        src: "https://vibrant.prep4free.com",
        desc: "Vibrant Academy Best Portal",
        mode: "external",
        source: "vibrant",
        rating: "best",
        status: "000ERR",
        studentsCount: "80,000+",
        stars: 4.8
      },
      {
        title: "Vibrant Portal 2",
        src: "https://squidstudy.vercel.app/vibrant",
        desc: "Vibrant Study Portal on Vercel",
        mode: "external",
        source: "vibrant",
        rating: "good",
        status: 402,
        studentsCount: "65,000+",
        stars: 4.7
      },
      {
        title: "Vibrant Portal 3",
        src: "https://vibrunway.vercel.app/",
        desc: "Vibrant Academy Portal mirror",
        mode: "external",
        source: "vibrant",
        rating: "good",
        status: 200,
        studentsCount: "70,000+",
        stars: 4.8
      },
      {
        title: "CW JEE",
        src: "https://jindal.prep4free.com/",
        desc: "CW JEE Vibrant Portal",
        mode: "external",
        source: "vibrant",
        rating: "best",
        status: "000ERR",
        studentsCount: "90,000+",
        stars: 4.9
      }
    ]
  },
  {
    slug: "nexttoppers",
    name: "Next Toppers",
    shortName: "Next Toppers",
    tagline: "Learn from toppers and get insider tips for cracking competitive exams.",
    accentColor: "from-emerald-500 to-teal-700",
    logoBg: "bg-emerald-800 text-white",
    logoText: "NT",
    apps: [
      {
        title: "Next Toppers Portal 1",
        src: "https://nt.streamfiles.eu.org/",
        desc: "StreamFiles Next Toppers fast stream",
        mode: "external",
        source: "nexttoppers",
        rating: "best",
        status: 403,
        studentsCount: "85,000+",
        stars: 4.8
      },
      {
        title: "Next Toppers Portal 2",
        src: "https://backbencherz.netlify.app/",
        desc: "Backbencherz Portal for Next Toppers",
        mode: "external",
        source: "nexttoppers",
        rating: "good",
        status: 200,
        studentsCount: "60,000+",
        stars: 4.7
      }
    ]
  },
  {
    slug: "missionjeet",
    name: "Mission JEET",
    shortName: "Mission JEET",
    tagline: "Comprehensive crash courses and full syllabus lectures for JEE.",
    accentColor: "from-blue-600 to-indigo-800",
    logoBg: "bg-blue-600 text-white",
    logoText: "MJ",
    apps: [
      {
        title: "Mission JEET Portal 1",
        src: "https://mj.streamfiles.eu.org/",
        desc: "StreamFiles Mission JEET lectures",
        mode: "external",
        source: "missionjeet",
        rating: "best",
        status: 403,
        studentsCount: "75,000+",
        stars: 4.8
      }
    ]
  },
  {
    slug: "unacademy",
    name: "Unacademy",
    shortName: "Unacademy",
    tagline: "Access Unacademy courses and study materials for various competitive exams.",
    accentColor: "from-blue-500 to-cyan-600",
    logoBg: "bg-slate-900 text-cyan-400",
    logoText: "UA",
    accessCode: "PUSHPARAJ",
    apps: [
      {
        title: "Unacademy Free Courses",
        src: "https://unacademyy.vercel.app",
        desc: "Unacademy Free Courses Portal",
        mode: "external",
        source: "unacademy",
        rating: "best",
        status: 404,
        studentsCount: "120,000+",
        stars: 4.8
      },
      {
        title: "Unacademy Portal 1",
        src: "https://studyuk.online",
        desc: "StudyUK Unacademy portal",
        mode: "external",
        source: "unacademy",
        rating: "best",
        status: 403,
        studentsCount: "95,000+",
        stars: 4.7
      },
      {
        title: "Unacademy Portal 2",
        src: "https://uc-web.uc27.workers.dev/",
        desc: "UC Web Worker high performance link",
        mode: "external",
        source: "unacademy",
        rating: "best",
        status: 200,
        studentsCount: "110,000+",
        stars: 4.9
      },
      {
        title: "Unacademy Portal 3",
        src: "https://unacademy.thescholarverse.site/auth",
        desc: "ScholarVerse Unacademy direct auth",
        mode: "external",
        source: "unacademy",
        rating: "best",
        status: "000ERR",
        studentsCount: "70,000+",
        stars: 4.7
      },
      {
        title: "Unacademy Portal 4",
        src: "https://pikachux.netlify.app/",
        desc: "Pikachu Unacademy platform",
        mode: "external",
        source: "unacademy",
        rating: "good",
        status: 404,
        studentsCount: "50,000+",
        stars: 4.6
      }
    ]
  },
  {
    slug: "allen",
    name: "ALLEN",
    shortName: "ALLEN",
    tagline: "ALLEN Career Institute courses, lectures and test material — opens fully inside PrepPro Network.",
    accentColor: "from-blue-600 to-sky-500",
    logoBg: "bg-[#1d4ed8] text-white",
    logoText: "ALLEN",
    apps: [
      {
        title: "ALLEN Portal Best",
        src: "https://allen-online.onrender.com",
        desc: "ALLEN Online — Best Portal for Kota classroom lectures & material",
        mode: "external",
        source: "allen",
        rating: "best",
        status: 200,
        studentsCount: "180,000+",
        stars: 4.9
      }
    ]
  },
  {
    slug: "studyiq",
    name: "Study IQ",
    shortName: "Study IQ",
    tagline: "Top UPSC, State PCS, and government exam courses and current affairs.",
    accentColor: "from-blue-700 to-indigo-900",
    logoBg: "bg-blue-800 text-white",
    logoText: "SIQ",
    apps: [
      {
        title: "StudyIQ Free",
        src: "https://studyiqq.vercel.app/",
        desc: "StudyIQ Free Portal",
        mode: "external",
        source: "studyiq",
        rating: "best",
        status: 200,
        studentsCount: "90,000+",
        stars: 4.8
      },
      {
        title: "Study IQ Portal 1",
        src: "https://spidyiq.vercel.app/",
        desc: "Spidy Study IQ portal",
        mode: "external",
        source: "studyiq",
        rating: "best",
        status: 200,
        studentsCount: "85,000+",
        stars: 4.8
      }
    ]
  },
  {
    slug: "cdsjourney",
    name: "CDS Journey",
    shortName: "CDS Journey",
    tagline: "Defence exams, NDA, CDS, and AFCAT comprehensive study materials.",
    accentColor: "from-amber-600 to-orange-700",
    logoBg: "bg-amber-700 text-white",
    logoText: "CDS",
    apps: [
      {
        title: "CDS Journey Free",
        src: "https://cdsjourneyy.vercel.app/",
        desc: "CDS Journey Free Portal",
        mode: "external",
        source: "cdsjourney",
        rating: "best",
        status: 200,
        studentsCount: "60,000+",
        stars: 4.8
      },
      {
        title: "CDS Journey Portal",
        src: "https://spidycds.vercel.app",
        desc: "CDS Exam Preparation with mock tests",
        mode: "external",
        source: "cdsjourney",
        rating: "best",
        status: 451,
        studentsCount: "50,000+",
        stars: 4.7
      }
    ]
  },
  {
    slug: "kgs",
    name: "Khan Global Studies",
    shortName: "KGS",
    tagline: "Khan Sir's premier GS, UPSC, BPSC, and foundation courses.",
    accentColor: "from-cyan-600 to-blue-700",
    logoBg: "bg-[#0c4a6e] text-white",
    logoText: "KGS",
    apps: [
      {
        title: "KGS Free",
        src: "https://khanglobal.vercel.app",
        desc: "KGS Free Portal with notes and video lectures",
        mode: "external",
        source: "kgs",
        rating: "best",
        status: 200,
        studentsCount: "140,000+",
        stars: 4.9
      },
      {
        title: "KGS Portal 1",
        src: "https://spidykgs.vercel.app/",
        desc: "Spidy KGS mirror portal",
        mode: "external",
        source: "kgs",
        rating: "best",
        status: 451,
        studentsCount: "80,000+",
        stars: 4.7
      }
    ]
  },
  {
    slug: "selectionway",
    name: "Selection Way",
    shortName: "Selection Way",
    tagline: "Comprehensive SSC, Railway, and State Government exam practice.",
    accentColor: "from-green-600 to-emerald-700",
    logoBg: "bg-emerald-700 text-white",
    logoText: "SW",
    apps: [
      {
        title: "Selection Way Free",
        src: "https://selectionwayy.vercel.app",
        desc: "Selection Way Free Portal",
        mode: "external",
        source: "selectionway",
        rating: "best",
        status: 200,
        studentsCount: "65,000+",
        stars: 4.8
      },
      {
        title: "Selection Way Test",
        src: "https://testrankingfree.vercel.app",
        desc: "Selection Way Test Portal & live test series",
        mode: "external",
        source: "selectionway",
        rating: "best",
        status: 200,
        studentsCount: "70,000+",
        stars: 4.8
      },
      {
        title: "Selection Way Portal",
        src: "https://spidyway.vercel.app",
        desc: "Selection Way Resources",
        mode: "external",
        source: "selectionway",
        rating: "best",
        status: 451,
        studentsCount: "50,000+",
        stars: 4.7
      }
    ]
  },
  {
    slug: "utkarsh",
    name: "Utkarsh",
    shortName: "Utkarsh Classes",
    tagline: "Utkarsh Classes Jodhpur premium competitive exam batches.",
    accentColor: "from-yellow-500 to-amber-600",
    logoBg: "bg-amber-900 text-yellow-300",
    logoText: "UTK",
    apps: [
      {
        title: "Utkarsh Portal",
        src: "https://spidyutkarsh.vercel.app",
        desc: "Utkarsh Classes Resources and tests",
        mode: "external",
        source: "utkarsh",
        rating: "best",
        status: 402,
        studentsCount: "90,000+",
        stars: 4.8
      }
    ]
  },
  {
    slug: "mastersahab",
    name: "Master Sahab",
    shortName: "Master Sahab",
    tagline: "Dedicated teaching and conceptual classes for board and competitive exams.",
    accentColor: "from-purple-600 to-indigo-700",
    logoBg: "bg-purple-800 text-white",
    logoText: "MS",
    apps: [
      {
        title: "Master Sahab Portal 1",
        src: "https://mastersahab.thescholarverse.site/",
        desc: "ScholarVerse Master Sahab",
        mode: "external",
        source: "mastersahab",
        rating: "best",
        status: "000ERR",
        studentsCount: "50,000+",
        stars: 4.7
      },
      {
        title: "Master Sahab Portal 2",
        src: "https://master-sahab.nextmate.site/",
        desc: "NextMate Master Sahab",
        mode: "external",
        source: "mastersahab",
        rating: "good",
        status: 200,
        studentsCount: "45,000+",
        stars: 4.6
      }
    ]
  },
  {
    slug: "rwa",
    name: "RWA",
    shortName: "Rojgar With Ankit",
    tagline: "Rojgar With Ankit UP Police, SSC GD, Delhi Police batches.",
    accentColor: "from-red-600 to-rose-700",
    logoBg: "bg-red-700 text-white",
    logoText: "RWA",
    apps: [
      {
        title: "RWA Web Free",
        src: "https://rojgarwithankitt.vercel.app",
        desc: "RWA Web Free Portal",
        mode: "external",
        source: "rwa",
        rating: "best",
        status: 200,
        studentsCount: "130,000+",
        stars: 4.9
      },
      {
        title: "RWA Portal 1",
        src: "https://deltastudy.site/rojgarwithankit",
        desc: "Rojgar With Ankit RWA mirror",
        mode: "external",
        source: "rwa",
        rating: "best",
        status: "000ERR",
        studentsCount: "70,000+",
        stars: 4.7
      },
      {
        title: "RWA Portal 2",
        src: "https://spidyrwa.vercel.app/",
        desc: "Spidy RWA",
        mode: "external",
        source: "rwa",
        rating: "good",
        status: 200,
        studentsCount: "85,000+",
        stars: 4.8
      },
      {
        title: "RWA Portal 3",
        src: "https://rwa.streamfiles.eu.org/#all",
        desc: "StreamFiles RWA library",
        mode: "external",
        source: "rwa",
        rating: "good",
        status: "000ERR",
        studentsCount: "60,000+",
        stars: 4.6
      }
    ]
  },
  {
    slug: "iitschool",
    name: "IIT School",
    shortName: "IIT School",
    tagline: "Kota educators platform for advanced JEE physics, chemistry & math.",
    accentColor: "from-blue-800 to-indigo-950",
    logoBg: "bg-[#1e1b4b] text-cyan-300",
    logoText: "IIT",
    apps: [
      {
        title: "IIT School Portal",
        src: "http://iitschool.cc",
        desc: "IIT School Learning Platform",
        mode: "external",
        source: "iitschool",
        rating: "best",
        status: "000ERR",
        studentsCount: "95,000+",
        stars: 4.9
      }
    ]
  },
  {
    slug: "reneet-special",
    name: "ReNeet Special",
    shortName: "ReNeet Special",
    tagline: "Targeted revision and question banks for NEET re-attempts and medical aspirants.",
    accentColor: "from-teal-600 to-emerald-700",
    logoBg: "bg-teal-700 text-white",
    logoText: "NEET",
    apps: [
      {
        title: "ReNeet Special Portal",
        src: "https://pikachuxuc.netlify.app/",
        desc: "ReNeet Special Learning Platform",
        mode: "external",
        source: "unacademy",
        rating: "best",
        status: 404,
        studentsCount: "40,000+",
        stars: 4.6
      }
    ]
  },
  {
    slug: "rj-vikramjeet",
    name: "RJ Vikramjeet",
    shortName: "RJ Vikramjeet",
    tagline: "Rankers Gurukul Maths & Reasoning specialist platform.",
    accentColor: "from-indigo-600 to-blue-700",
    logoBg: "bg-indigo-700 text-white",
    logoText: "RJV",
    apps: [
      {
        title: "RJ Vikramjeet Portal",
        src: "http://rgvikramjeetv1.netlify.app",
        desc: "RJ Vikramjeet Learning Platform",
        mode: "external",
        source: "unacademy",
        rating: "best",
        status: 200,
        studentsCount: "60,000+",
        stars: 4.7
      }
    ]
  },
  {
    slug: "testbook",
    name: "Test Book",
    shortName: "Testbook",
    tagline: "India's #1 mock test platform for all competitive exams.",
    accentColor: "from-sky-600 to-blue-700",
    logoBg: "bg-sky-600 text-white",
    logoText: "TB",
    apps: [
      {
        title: "Test Book Portal",
        src: "https://spidytests.vercel.app/",
        desc: "Spidy Test Book test series",
        mode: "external",
        source: "testbook",
        rating: "best",
        status: 402,
        studentsCount: "115,000+",
        stars: 4.8
      }
    ]
  },
  {
    slug: "vidyakul",
    name: "Vidyakul",
    shortName: "Vidyakul",
    tagline: "State board courses in Hindi & regional languages with top educators.",
    accentColor: "from-violet-600 to-purple-800",
    logoBg: "bg-violet-700 text-white",
    logoText: "VK",
    apps: [
      {
        title: "Vidyakul Portal",
        src: "https://vidyakool.streamfiles.eu.org/",
        desc: "StreamFiles Vidyakul portal",
        mode: "external",
        source: "vidyakul",
        rating: "best",
        status: 403,
        studentsCount: "55,000+",
        stars: 4.7
      }
    ]
  },
  {
    slug: "raw",
    name: "RAW",
    shortName: "RAW",
    tagline: "Curated raw educational recordings & high yield revision series.",
    accentColor: "from-zinc-700 to-zinc-900",
    logoBg: "bg-zinc-800 text-white",
    logoText: "RAW",
    apps: [
      {
        title: "RAW Portal",
        src: "https://raw.streamfiles.eu.org/",
        desc: "StreamFiles RAW mirror",
        mode: "external",
        source: "raw",
        rating: "best",
        status: "000ERR",
        studentsCount: "45,000+",
        stars: 4.6
      }
    ]
  },
  {
    slug: "apnacollege",
    name: "Apna College",
    shortName: "Apna College",
    tagline: "Coding, DSA, Alpha & Sigma courses for engineers & developers.",
    accentColor: "from-purple-600 to-pink-600",
    logoBg: "bg-purple-900 text-pink-300",
    logoText: "AC",
    apps: [
      {
        title: "Apna College Portal",
        src: "https://coursaa-main.vercel.app/",
        desc: "Apna College Learning Platform",
        mode: "external",
        source: "apnacollege",
        rating: "best",
        status: 200,
        studentsCount: "150,000+",
        stars: 4.9
      }
    ]
  }
];

export const QUICK_LINKS = [
  { name: "PW PrepPro Network 01", url: "https://pwthor.site/study/batches", category: "PW quick links" },
  { name: "PW PrepPro Network 02", url: "http://squidstudy.vercel.app", category: "PW quick links" },
  { name: "PW PrepPro Network 03", url: "https://piewallah.thescholarverse.site/", category: "PW quick links" },
  { name: "PW Test Series", url: "https://www.sstudy.site/", category: "PW quick links" },
  { name: "Vibrant Academy Portal", url: "https://deltastudy.site/vibrant", category: "Vibrant quick links" },
  { name: "Vibrant Academy Best", url: "https://vibrant.prep4free.com/", category: "Vibrant quick links" },
  { name: "CW JEE", url: "https://jindal.prep4free.com/", category: "Vibrant quick links" }
];

export const SOCIAL_LINKS = {
  whatsapp: "https://whatsapp.com/channel/0029Vb7Q3lrF1YlUHIHepd3V",
  telegram: "https://t.me/PrepProNetwork",
  telegramChannel: "https://t.me/PrepProNetwork",
  ownerChat: "https://t.me/PrepProOwnerBot"
};
