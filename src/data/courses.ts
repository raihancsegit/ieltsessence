export interface CourseModule {
  week: string;
  title: string;
  topics: string[];
}

export interface MockPackage {
  count: number;
  title: string;
  price: string;
  originalPrice: string;
  features: string[];
}

export interface Course {
  id: string;
  slug: string;
  pathwayNumber?: string;
  title: string;
  tagline: string;
  subHeadline?: string;
  category: 'Core Pathway' | 'Fast-Track Program' | 'Mock Program' | 'VIP Mentorship';
  badge: string;
  badgeColor: string;
  duration: string;
  totalClasses: string;
  mockTests: string;
  price: string;
  originalPrice: string;
  targetBand: string;
  overview: string;
  highlights: string[];
  features: string[];
  syllabus?: CourseModule[];
  mockPackages?: MockPackage[];
  schedule: {
    days: string;
    time: string;
    format: string;
  };
}

export const coursesData: Course[] = [
  // --------------------------------------------------------------------------
  // PATHWAY 01 — BUILD
  // --------------------------------------------------------------------------
  {
    id: "pathway-build",
    slug: "course-foundation-to-advanced",
    pathwayNumber: "PATHWAY 01 — BUILD",
    title: "IELTS Foundation to Advanced",
    subHeadline: "Build Basics → Score Higher",
    tagline: "বেসিক থেকে শুরু করে ব্যান্ড ৭.৫+ অর্জনের কমপ্লিট ৩.৫–৪ মাসের ফাউন্ডেশন ও মাস্টার কোর্স।",
    category: "Core Pathway",
    badge: "Most Popular • Foundation",
    badgeColor: "bg-blue-600 text-white",
    duration: "3.5 – 4 Months",
    totalClasses: "48 Live Classes",
    mockTests: "15 Full Mocks",
    price: "৳ 10,500",
    originalPrice: "৳ 15,000",
    targetBand: "Band 5.0 – 6.5+",
    overview: "যাদের বেসিক গ্রামার বা ভোকাবুলারিতে দুর্বলতা আছে এবং শূন্য থেকে শুরু করে আন্তর্জাতিক মানের IELTS প্রস্তুতি নিতে চান, তাদের জন্য এই ফ্ল্যাগশিপ বিল্ড প্রোগ্রাম।",
    highlights: [
      "Grammar & Complex Sentence Structure Foundation (12 Classes)",
      "Listening & Reading 9.0 Strategy Lab (12 Classes)",
      "Writing Task 1 & Task 2 Line-by-Line Correction (14 Classes)",
      "Daily 1-on-1 Speaking Practice with Mentors (10 Classes)",
      "15 Full-Length Real CD/PB Mock Tests with Assessment",
      "Lifetime Batch Repeat Privilege (Free of Cost)"
    ],
    features: [
      "প্রতিটি ক্লাসের ফুল এইচডি রেকর্ডিং ও লেকচার নোটস",
      "Cambridge 1-19 এর প্রতিটি প্যাসেজের বাংলা অডিও-ভিডিও সমাধান",
      "সপ্তাহে ৭ দিন প্র্যাকটিস ল্যাব অ্যাক্সেস",
      "আনলিমিটেড রাইটিং কপি চেক ও ফিডব্যাক",
      "মক টেস্ট শেষে মেন্টরের সাথে ব্যক্তিগত ইন্টারভিউ ও স্ট্র্যাটেজি মিটিং"
    ],
    schedule: {
      days: "Sunday, Tuesday, Thursday",
      time: "8:00 PM – 10:00 PM (Online / Offline)",
      format: "Interactive Zoom Live & On-Campus Classroom"
    }
  },

  // --------------------------------------------------------------------------
  // PATHWAY 02 — MASTER
  // --------------------------------------------------------------------------
  {
    id: "pathway-master",
    slug: "course-complete-mastery",
    pathwayNumber: "PATHWAY 02 — MASTER",
    title: "Complete IELTS Mastery",
    subHeadline: "Mastering All 4 Modules",
    tagline: "লিসেনিং, রিডিং, রাইটিং ও স্পিকিং ৪টি মডিউলেরই কমপ্লিট স্ট্র্যাটেজি ও প্রিমিয়াম প্রিপারেশন।",
    category: "Core Pathway",
    badge: "Flagship • All 4 Modules",
    badgeColor: "bg-rose-600 text-white",
    duration: "2.5 – 3 Months",
    totalClasses: "36 Live Classes",
    mockTests: "20 Full Mocks",
    price: "৳ 9,500",
    originalPrice: "৳ 14,000",
    targetBand: "Band 6.5 – 7.5+",
    overview: "কানাডা, যুক্তরাজ্য ও অস্ট্রেলিয়ার বিশ্ববিদ্যালয়গুলোতে সরাসরি ভর্তির জন্য নির্ধারিত কাট-অফ স্কোর নিশ্চিত করার স্পেশাল অল-ইন-ওয়ান ট্র্যাক।",
    highlights: [
      "36 High-Yield Strategy Classes across all 4 modules",
      "Cambridge Trap Elimination & Synonym Mapping Techniques",
      "Task 1 & Task 2 Line-by-Line Feedback & Band 9 Alternative Models",
      "Daily 1-on-1 Speaking Simulations with Real Examiner Drills",
      "20 Full-Length Cambridge Standard Mock Tests with Live Diagnostic Counseling",
      "100% Free University Shortlisting, SOP Guidance & Visa Support"
    ],
    features: [
      "৪টি মডিউলে ৪ জন স্পেশালিস্ট মেন্টরের নিবিড় গাইডেন্স",
      "ক্যামব্রিজ ট্র্যাপ এলিমিনেশন টেকনিক ও কি-ওয়ার্ড ট্র্যাকিং",
      "লাইভ ব্রেনস্টর্মিং ক্লাস ও আইডিয়া ব্যাংক",
      "কমপ্লিট প্রিন্টেড স্টাডি মেটেরিয়ালস ও লেকচার শিট"
    ],
    schedule: {
      days: "Saturday, Monday, Wednesday",
      time: "8:00 PM – 10:00 PM",
      format: "Interactive Zoom Live & Physical Campus"
    }
  },

  // --------------------------------------------------------------------------
  // PATHWAY 03 — ACCELERATE
  // --------------------------------------------------------------------------
  {
    id: "pathway-accelerate",
    slug: "course-40day-crash",
    pathwayNumber: "PATHWAY 03 — ACCELERATE",
    title: "40-Day IELTS Crash Preparation",
    subHeadline: "Exam Ready",
    tagline: "যাদের পরীক্ষা খুব নিকটে—দ্রুততম সময়ে স্কোর বুস্ট করার হাই-ইনটেনসিটি স্ট্র্যাটেজি ক্র্যাশ প্রোগ্রাম।",
    category: "Core Pathway",
    badge: "Fast Track • High Speed",
    badgeColor: "bg-purple-600 text-white",
    duration: "40 Days",
    totalClasses: "24 Intensive Classes",
    mockTests: "10 Full Mocks",
    price: "৳ 7,500",
    originalPrice: "৳ 11,000",
    targetBand: "Band 7.0 – 8.0+",
    overview: "জরুরী ইনটেক ডেডলাইন বা দ্রুত পরীক্ষার জন্য যাদের মাত্র ১–১.৫ মাস সময় আছে, তাদের সম্পূর্ণ প্র্যাকটিস ও হ্যাক্স-ভিত্তিক ইনটেনসিভ ক্র্যাশ কোর্স।",
    highlights: [
      "24 High-Yield Strategy Sessions (Zero wasted theory)",
      "Daily Reading & Listening Speed Drills with Timed Pressure",
      "Writing Band 7.5+ Ready Fast Templates & Structure Blueprints",
      "Daily Speaking Mock Drills with Fluency Polishing",
      "10 Full Mock Tests with Instant Result & Diagnostic Analytics",
      "Official Exam Booking Assistance & Test Voucher"
    ],
    features: [
      "কম সময়ে দ্রুত স্কোর বাড়ানোর টার্গেটেড হ্যাকস",
      "ক্যামব্রিজ টেস্টের কমন ট্র্যাপ ডিটেকশন টেকনিক",
      "প্রতিদিন লাইভ মক টেস্ট ও ওরাল ফিডব্যাক",
      "কমপ্লিট চিটশিট ও মডেল অ্যান্সার বুকলেট"
    ],
    schedule: {
      days: "Friday, Saturday, Monday, Wednesday",
      time: "9:00 PM – 11:00 PM",
      format: "Online Live Interactive via Zoom"
    }
  },

  // --------------------------------------------------------------------------
  // FAST-TRACK: WRITING EXCELLENCE
  // --------------------------------------------------------------------------
  {
    id: "fasttrack-writing",
    slug: "course-writing-excellence",
    title: "30-Day Writing Excellence",
    subHeadline: "Evaluate • Correct • Improve",
    tagline: "রাইটিংয়ে আটকে থাকা ৫.৫ বা ৬.০ স্কোরকে ৭.৫+ এ উন্নীত করার ডেডিকেটেড স্পেশালাইজড ল্যাব।",
    category: "Fast-Track Program",
    badge: "Specialized • Writing Lab",
    badgeColor: "bg-purple-600 text-white",
    duration: "30 Days (1 Month)",
    totalClasses: "16 Dedicated Sessions",
    mockTests: "8 Writing Mocks",
    price: "৳ 4,500",
    originalPrice: "৳ 7,000",
    targetBand: "Band 7.0 – 8.5",
    overview: "IELTS শিক্ষার্থীদের সবচেয়ে বড় চ্যালেঞ্জ রাইটিং সেকশন। লাইন-বাই-লাইন সংশোধন ও ৪টি অফিসিয়াল ক্রাইটেরিয়া (TR, CC, LR, GRA) অনুসারে স্কিল ডেভেলপমেন্টের জন্য এই স্পেশালাইজড কোর্স।",
    highlights: [
      "Task Achievement & Task Response Idea Generation Secrets",
      "Coherence & Cohesion Logic Flow & Connector Optimization",
      "Lexical Resource: Less Common Words & Collocations Master-list",
      "Grammatical Range: Inversions, Conditionals & Complex Syntax",
      "30+ Essay Line-by-Line Corrections with Detailed Breakdown",
      "100+ Band 8.5 & Band 9 Model Essays (Task 1 & Task 2)"
    ],
    features: [
      "প্রতিটি এসাইনমেন্টের বিস্তারিত গ্রাফিকাল মার্কিং ও ব্যাখ্যা",
      "লাইভ ব্রেনস্টর্মিং ক্লাস ও আইডিয়া ব্যাংক",
      "প্যারাফ্রেজিং ও সিনোনিম ডিকশনারি",
      "পারসোনাল ফিডব্যাক মিটিং জুম কলে"
    ],
    schedule: {
      days: "Monday, Thursday",
      time: "8:30 PM – 10:30 PM",
      format: "Online Live Interactive"
    }
  },

  // --------------------------------------------------------------------------
  // FAST-TRACK: SPEAKING SPRINTER
  // --------------------------------------------------------------------------
  {
    id: "fasttrack-speaking",
    slug: "course-speaking-sprinter",
    title: "30-Day Speaking Sprinter",
    subHeadline: "Practice • Assess • Perform",
    tagline: "প্রতিদিন ওয়ান-অন-ওয়ান স্পিকিং প্র্যাকটিস ও সাবলীল ইংরেজি বলার নির্ভুল আত্মবিশ্বাস।",
    category: "Fast-Track Program",
    badge: "Interactive • Speaking Bootcamp",
    badgeColor: "bg-emerald-600 text-white",
    duration: "30 Days (1 Month)",
    totalClasses: "30 Daily Labs",
    mockTests: "8 Speaking Mocks",
    price: "৳ 4,000",
    originalPrice: "৳ 6,500",
    targetBand: "Band 7.5 – 8.5",
    overview: "হেজিটেশন দূর করে সাবলীলভাবে ইংরেজিতে কথা বলা এবং স্পিকিং টেস্টে ৭.৫+ অর্জনের জন্য দৈনিক প্র্যাকটিস বুটক্যাম্প।",
    highlights: [
      "Daily Speaking Partner Pair-up with Mentors",
      "Part 1 100+ Common Topic Instant Answer Strategies",
      "Part 2 1-Minute Preparation Note-Taking Method (Past-Present-Future)",
      "Part 3 Abstract & Philosophical Question Explanations",
      "Pronunciation, Intonation & Natural Expression Training",
      "Recorded Speaking Mock Tests with Detailed Scoring Rubric"
    ],
    features: [
      "প্রতিদিন ৩০ মিনিট লাইভ মেন্টর সেশন",
      "লেটেস্ট স্পিকিং কিউ-কার্ড প্রেডিকশন পিডিএফ",
      "ভয়েস নোটের মাধ্যমে প্রতিদিন ফিডব্যাক",
      "পাবলিক স্পিকিং ও কনফিডেন্স বুস্টিং টেকনিক"
    ],
    schedule: {
      days: "Everyday (Saturday to Thursday)",
      time: "Flexible Slots (Morning / Afternoon / Night)",
      format: "1-on-1 Zoom Audio/Video Room"
    }
  },

  // --------------------------------------------------------------------------
  // FAST-TRACK: ANY 2 MODULES
  // --------------------------------------------------------------------------
  {
    id: "fasttrack-combo",
    slug: "course-any-2-modules",
    title: "35-Day Any 2 Modules Combo Pack",
    subHeadline: "Retake Expert",
    tagline: "যাদের নির্দিষ্ট ২টি মডিউলে (যেমন Writing + Speaking বা Reading + Writing) স্কোর বাড়ানো প্রয়োজন।",
    category: "Fast-Track Program",
    badge: "Combo Pack • Retake Focused",
    badgeColor: "bg-amber-500 text-white",
    duration: "35 Days",
    totalClasses: "20 Live Sessions",
    mockTests: "6 Skill Mocks",
    price: "৳ 5,500",
    originalPrice: "৳ 8,500",
    targetBand: "Band 7.0 – 8.0+",
    overview: "রিটেক পরীক্ষার্থী বা যারা নির্দিষ্ট মডিউলে দুর্বল, তাদের জন্য আপনার পছন্দের যে কোনো ২টি মডিউল বেছে নেওয়ার কাস্টমাইজড কম্বো কোর্স।",
    highlights: [
      "Choose Any 2 Modules (Writing + Speaking / Reading + Writing / Listening + Reading)",
      "Dedicated Expert Mentors for each chosen module",
      "Line-by-line task corrections & daily speaking simulation",
      "Cambridge Traps & Speed Reading Scanning Methods",
      "6 Targeted Skill-based Mock Tests with Performance Breakdown",
      "Flexible Study Schedule & Archive Access"
    ],
    features: [
      "নিজের দুর্বলতা অনুযায়ী মডিউল কম্বিনেশনের স্বাধীনতা",
      "নির্দিষ্ট মডিউলে নিবিড় মনিটরিং ও হোমওয়ার্ক চেক",
      "লাইভ ডাউট সলভিং সেশন",
      "প্রিমিয়াম স্টাডি রিসোর্স শিট"
    ],
    schedule: {
      days: "4 Days / Week (Customizable)",
      time: "8:00 PM – 10:00 PM",
      format: "Online Live via Zoom"
    }
  },

  // --------------------------------------------------------------------------
  // MOCK TEST PROGRAM: REAL EXAM SIMULATION
  // --------------------------------------------------------------------------
  {
    id: "mock-program",
    slug: "course-mock-test-program",
    title: "IELTS Mock Test Program",
    subHeadline: "Real Exam Simulation",
    tagline: "আসল পরীক্ষার হলের পরিবেশ, সময় ব্যবস্থাপনা ও নির্ভুল স্কোর প্রিডিকশনের জন্য মক প্যাকেজ।",
    category: "Mock Program",
    badge: "Real Exam Simulation",
    badgeColor: "bg-emerald-700 text-white",
    duration: "Flexible Schedule",
    totalClasses: "Mock + Solution Classes",
    mockTests: "3 to 10 Mock Tests",
    price: "From ৳ 1,500",
    originalPrice: "৳ 2,500",
    targetBand: "Official Score Calibration",
    overview: "সিডি-আইইএলটিএস এবং পেপার-বেসড পূর্ণাঙ্গ মক টেস্ট সিরিজ যেখানে প্রতিটি টেস্টের পর পাবেন সার্টিফাইড মেন্টরদের কাছ থেকে বিস্তারিত ডায়াগনস্টিক রিপোর্ট।",
    highlights: [
      "3 Mock Package: ৳1,500 (Quick Assessment & Score Prediction)",
      "5 Mock Package: ৳2,200 (Standard Practice + 1-on-1 Review)",
      "7 Mock Package: ৳2,900 (In-Depth Diagnostic Analysis + Weakness Fix)",
      "10 Mock Package: ৳3,800 (Complete Simulation + Free Study Plan)"
    ],
    features: [
      "আইডিপি ও ব্রিটিশ কাউন্সিলের স্ট্যান্ডার্ড পরীক্ষার আবহ",
      "কম্পিউটার-ডেলিভার্ড ও পেপার টেস্ট উভয় অপশন",
      "রাইটিং খাতা লাইন-বাই-লাইন মূল্যায়ন ও স্পিকিং অডিও ফিডব্যাক",
      "মক টেস্ট শেষে মেন্টরের সাথে সরাসরি ওয়ান-টু-ওয়ান কাউন্সেলিং"
    ],
    mockPackages: [
      {
        count: 3,
        title: "3 Mock Package",
        price: "৳ 1,500",
        originalPrice: "৳ 2,500",
        features: ["৩টি ফুল লেংথ মক টেস্ট (L, R, W, S)", "কম্পিউটার/পেপার ফরম্যাট", "স্কোর কার্ড ও প্রিডিকশন"]
      },
      {
        count: 5,
        title: "5 Mock Package",
        price: "৳ 2,200",
        originalPrice: "৳ 3,500",
        features: ["৫টি ফুল লেংথ মক টেস্ট", "রাইটিং লাইন-বাই-লাইন মার্কিং", "স্পিকিং ওয়ান-অন-ওয়ান ড্রিল", "পোস্ট-মক পার্সোনাল রিভিউ"]
      },
      {
        count: 7,
        title: "7 Mock Package",
        price: "৳ 2,900",
        originalPrice: "৳ 4,800",
        features: ["৭টি ফুল লেংথ মক টেস্ট", "ডিটেইলড ব্যান্ড স্কোর অ্যানালাইসিস", "ডায়াগনস্টিক রিপোর্ট", "উইকনেস এলিমিনেশন প্ল্যান"]
      },
      {
        count: 10,
        title: "10 Mock Package",
        price: "৳ 3,800",
        originalPrice: "৳ 6,500",
        features: ["১০টি ফুল লেংথ মক টেস্ট", "আনলিমিটেড স্পিকিং অডিট", "ব্যান্ড ৯ রাইটিং অল্টারনেটিভস", "ফ্রি ১-অন-১ এক্সপার্ট কাউন্সেলিং"]
      }
    ],
    schedule: {
      days: "Every Friday & Saturday (or Custom Flexible Slots)",
      time: "Morning 10:00 AM / Evening 6:00 PM",
      format: "Offline Test Center & Online CD-IELTS Portal"
    }
  }
];
