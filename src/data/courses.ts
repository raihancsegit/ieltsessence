export interface CourseModule {
  week: string;
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Full Course' | 'Crash Course' | 'Skill Focused' | 'VIP Mentorship';
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
  syllabus: CourseModule[];
  schedule: {
    days: string;
    time: string;
    format: string;
  };
}

export const coursesData: Course[] = [
  {
    id: "course-1",
    slug: "course-basic-advanced",
    title: "Complete IELTS Basic To Advanced",
    tagline: "জিরো লেভেল থেকে ব্যান্ড ৭.৫+ অর্জনের কমপ্লিট ৩–৪ মাসের ফাউন্ডেশন ও অ্যাডভান্সড মাস্টার কোর্স।",
    category: "Full Course",
    badge: "Most Popular",
    badgeColor: "bg-rose-500 text-white",
    duration: "3.5 Months",
    totalClasses: "48 Live Classes",
    mockTests: "12 Real Mocks",
    price: "৳ 12,500",
    originalPrice: "৳ 18,000",
    targetBand: "Band 7.5 – 8.5",
    overview: "যাদের বেসিক গ্রামার বা ভোকাবুলারিতে দুর্বলতা আছে এবং শূন্য থেকে শুরু করে আন্তর্জাতিক মানের IELTS প্রস্তুতি নিতে চান, তাদের জন্য এই ফ্ল্যাগশিপ প্রোগ্রাম।",
    highlights: [
      "Grammar & Sentence Structure Foundation (12 Classes)",
      "Listening & Reading 9.0 Strategy Lab (12 Classes)",
      "Writing Task 1 & Task 2 Line-by-Line Correction (14 Classes)",
      "Daily 1-on-1 Speaking Practice with Mentors (10 Classes)",
      "12 Full-Length Real CD/PB Mock Tests with Assessment",
      "Lifetime Batch Repeat Privilege (Free of Cost)"
    ],
    features: [
      "প্রতিটি ক্লাসের ফুল রেকর্ডিং ও লেকচার নোটস",
      "Cambridge 1-19 এর প্রতিটি প্যাসেজের বাংলা অডিও-ভিডিও সমাধান",
      "সপ্তাহে ৭ দিন প্র্যাকটিস ল্যাব অ্যাক্সেস",
      "আনলিমিটেড রাইটিং কপি চেক ও ফিডব্যাক",
      "মক টেস্ট শেষে মেন্টরের সাথে ব্যক্তিগত ইন্টারভিউ ও স্ট্র্যাটেজি মিটিং"
    ],
    syllabus: [
      {
        week: "Month 1",
        title: "Grammar, Lexical Resource & Foundation Building",
        topics: [
          "Complex & Compound Sentence Mastery for Band 7+",
          "Academic Vocabulary Booster (500+ Collocations)",
          "Pronunciation, Fluency & Accent Reduction",
          "Listening Basics: Accents, Distractors & Map Labeling"
        ]
      },
      {
        week: "Month 2",
        title: "Reading & Listening 9.0 Mastery",
        topics: [
          "Skimming, Scanning & Speed Reading Techniques",
          "True/False/Not Given & Matching Headings Elimination Strategy",
          "Multiple Choice & Sentence Completion Zero-Error Formula",
          "Section 3 & 4 Academic Conversation Decoders"
        ]
      },
      {
        week: "Month 3",
        title: "Writing Task 1 & Task 2 Masterclass",
        topics: [
          "Task 1: Line, Bar, Pie, Table, Process & Map Frameworks",
          "Task 2: Opinion, Discussion, Problem-Solution & 2-Part Questions",
          "Coherence & Cohesion: Paragraph Flow & Topic Sentences",
          "Grammatical Range & Accuracy Checklists"
        ]
      },
      {
        week: "Month 4",
        title: "Speaking Mastery & Full Mock Test Series",
        topics: [
          "Part 1, 2 (Cue Card) & 3 Extended Discussion Formulations",
          "Idiomatic Language & Spontaneous Fluency without Pauses",
          "12 Full-Length Mock Tests under Real Exam Conditions",
          "Final Score Prediction & Exam Day Guidance"
        ]
      }
    ],
    schedule: {
      days: "Sunday, Tuesday, Thursday",
      time: "8:00 PM – 10:00 PM (Online / Offline)",
      format: "Interactive Zoom Live & On-Campus Classroom"
    }
  },
  {
    id: "course-2",
    slug: "course-crash-course",
    title: "40-Day IELTS Crash Course",
    tagline: "যাদের পরীক্ষা খুব নিকটে—দ্রুততম সময়ে স্কোর বুস্ট করার হাই-ইনটেনসিটি স্ট্র্যাটেজি ক্র্যাশ প্রোগ্রাম।",
    category: "Crash Course",
    badge: "Fast Track",
    badgeColor: "bg-amber-500 text-white",
    duration: "40 Days",
    totalClasses: "30 Live Sessions",
    mockTests: "8 Full Mocks",
    price: "৳ 8,500",
    originalPrice: "৳ 12,000",
    targetBand: "Band 7.0+",
    overview: "জরুরী ইনটেক ডেডলাইন বা ভিসা আবেদনের জন্য যাদের মাত্র ১-১.৫ মাস সময় আছে, তাদের সম্পূর্ণ প্র্যাকটিস ও হ্যাক্স-ভিত্তিক ইনটেনসিভ ক্র্যাশ কোর্স।",
    highlights: [
      "30 High-Yield Strategy Sessions (No wasted theory)",
      "Daily Reading & Listening Timed Drill Drills",
      "Writing Band 7.5 Ready Templates & Structure Breakdown",
      "Daily Speaking Mock Session with Scoring",
      "8 Full Mock Tests with Instant Result & Diagnostic Analytics",
      "Official Exam Booking Assistance & Voucher Discount"
    ],
    features: [
      "কম সময়ে স্কোর বাড়ানোর টার্গেটেড টিপস ও ট্রিকস",
      "ক্যামব্রিজ টেস্টের কমন ট্র্যাপ ডিটেকশন টেকনিক",
      "প্রতিদিন লাইভ মক টেস্ট ও ওরাল ফিডব্যাক",
      "কমপ্লিট চিটশিট ও মডেল অ্যান্সার বুকলেট"
    ],
    syllabus: [
      {
        week: "Days 1–10",
        title: "Reading & Listening Speed Drills",
        topics: [
          "Keyword Tracking & Time Management (50 Min Reading Strategy)",
          "Tricky Listening Questions (Spelling, Numbers & Map Labels)",
          "2 Full Mock Tests with Live Review"
        ]
      },
      {
        week: "Days 11–25",
        title: "Writing Fast-Track Templates & Daily Evaluation",
        topics: [
          "Task 1 Instant Formatting for All Chart Types",
          "Task 2 4-Paragraph Structure with Band 8 Ideas",
          "Daily Essay Checking & One-on-One Error Correction"
        ]
      },
      {
        week: "Days 26–40",
        title: "Speaking Blitz & Exam Simulation",
        topics: [
          "Top 50 Recurring Cue Card Storyline Frameworks",
          "Overcoming Hesitation & Fillers in Part 3",
          "6 Full Mock Tests with Exam-Day Simulation"
        ]
      }
    ],
    schedule: {
      days: "Friday, Saturday, Monday, Wednesday",
      time: "9:00 PM – 11:00 PM",
      format: "Online Live Interactive via Zoom"
    }
  },
  {
    id: "course-3",
    slug: "course-writing-masterclass",
    title: "IELTS Writing Band 7.5+ Masterclass",
    tagline: "রাইটিংয়ে আটকে থাকা ৬ বা ৬.৫ স্কোরকে ৭.৫ বা ৮.০ তে উন্নীত করার একমাত্র নিবেদিত মাস্টারকোর্স।",
    category: "Skill Focused",
    badge: "Specialized",
    badgeColor: "bg-purple-600 text-white",
    duration: "2 Months",
    totalClasses: "24 Sessions",
    mockTests: "6 Writing Mocks",
    price: "৳ 6,500",
    originalPrice: "৳ 9,500",
    targetBand: "Band 7.5 – 8.5",
    overview: "IELTS শিক্ষার্থীদের সবচেয়ে বড় চ্যালেঞ্জ রাইটিং সেকশন। লাইন-বাই-লাইন সংশোধন ও ৪টি অফিসিয়াল ক্রাইটেরিয়া অনুসারে স্কিল ডেভেলপমেন্টের জন্য এই স্পেশালাইজড কোর্স।",
    highlights: [
      "Task Achievement & Task Response Idea Generation Secrets",
      "Coherence & Cohesion Logic Flow & Connector Optimization",
      "Lexical Resource: Less Common Words & Collocations Master-list",
      "Grammatical Range: Inversions, Conditionals & Complex Syntax",
      "Unlimited Essay Corrections with Audio/Written Feedback",
      "100+ Band 8.5 Model Essays (Task 1 & Task 2)"
    ],
    features: [
      "প্রতিটি এসাইনমেন্টের বিস্তারিত গ্রাফিকাল মার্কিং ও ব্যাখ্যা",
      "লাইভ ব্রেনস্টর্মিং ক্লাস ও আইডিয়া ব্যাংক",
      "প্যারাফ্রেজিং ও সিনোনিম ডিকশনারি",
      "পারসোনাল ফিডব্যাক মিটিং জুম কলে"
    ],
    syllabus: [
      {
        week: "Weeks 1–3",
        title: "Task 1 Visual Data Transformation",
        topics: [
          "Overview Writing: The Key to Band 7+",
          "Dynamic vs Static Charts Comparative Language",
          "Process Diagrams & Maps Direction Terminology"
        ]
      },
      {
        week: "Weeks 4–8",
        title: "Task 2 Essay Architecting",
        topics: [
          "Agree/Disagree & Extent Questions Nuanced Standpoints",
          "Discuss Both Views & Give Opinion Balancing Formulas",
          "Cause-Effect-Solution Structural Blueprints",
          "Live Group Essay Dissection & Peer Review"
        ]
      }
    ],
    schedule: {
      days: "Monday, Thursday",
      time: "8:30 PM – 10:30 PM",
      format: "Online Live Interactive"
    }
  },
  {
    id: "course-4",
    slug: "course-speaking-intensive",
    title: "Daily Speaking Lab & Fluency Bootcamp",
    tagline: "প্রতিদিন ওয়ান-অন-ওয়ান স্পিকিং প্র্যাকটিস ও সাবলীল ইংরেজি বলার নির্ভুল আত্মবিশ্বাস।",
    category: "Skill Focused",
    badge: "High Interactive",
    badgeColor: "bg-emerald-600 text-white",
    duration: "2 Months",
    totalClasses: "30 Live Labs",
    mockTests: "8 Speaking Mocks",
    price: "৳ 5,500",
    originalPrice: "৳ 8,000",
    targetBand: "Band 7.5 – 8.5",
    overview: "হেজিটেশন দূর করে সাবলীলভাবে ইংরেজিতে কথা বলা এবং স্পিকিং টেস্টে ৭.৫+ অর্জনের জন্য দৈনিক প্র্যাকটিস বুটক্যাম্প।",
    highlights: [
      "Daily Speaking Partner Pair-up with Mentors",
      "Part 1 100+ Common Topic Instant Answer Strategies",
      "Part 2 1-Minute Preparation Note-Taking Method",
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
    syllabus: [
      {
        week: "Weeks 1–4",
        title: "Fluency & Pronunciation Foundation",
        topics: [
          "Connecting Ideas without 'Umm' and 'Aah'",
          "Natural Idioms, Phrasal Verbs & Collocations",
          "Part 1 Personal Experience Responses"
        ]
      },
      {
        week: "Weeks 5–8",
        title: "Cue Card Mastery & In-Depth Discussion",
        topics: [
          "Storytelling Arc for Any Cue Card in 60 Seconds",
          "Answering Complex 'Why' and 'Hypothetical' Questions",
          "Full 15-Minute Exam Simulation Mocks"
        ]
      }
    ],
    schedule: {
      days: "Everyday (Saturday to Thursday)",
      time: "Flexible Slots (Morning / Afternoon / Night)",
      format: "1-on-1 Zoom Audio/Video Room"
    }
  }
];
