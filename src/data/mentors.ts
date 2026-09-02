export interface Mentor {
  id: string;
  name: string;
  role: string;
  institution: string;
  overallBand: string;
  scores: {
    listening: string;
    reading: string;
    writing: string;
    speaking: string;
  };
  experience: string;
  studentsMentored: string;
  bio: string;
  specialty: string;
  imageBg: string;
}

export const mentorsData: Mentor[] = [
  {
    id: "mentor-jewel",
    name: "Jewel Ahamadinezad",
    role: "Founder & Lead IELTS Instructor",
    institution: "B.Sc in IPE, DUET | Ex-Mentor, Leading IELTS Centers",
    overallBand: "8.5",
    scores: {
      listening: "9.0",
      reading: "9.0",
      writing: "8.0",
      speaking: "8.5",
    },
    experience: "7+ Years",
    studentsMentored: "4,500+",
    bio: "IELTS ESSENCE-এর প্রতিষ্ঠাতা। ক্যামব্রিজ প্যাসেজ ডিকোড করার সহজ টেকনিক ও রাইটিংয়ের অনন্য ফর্মুলা দিয়ে হাজারো শিক্ষার্থীকে ব্যান্ড ৭.৫+ অর্জনে সাহায্য করেছেন।",
    specialty: "Reading 9.0 Strategy & Writing Line-by-Line Correction",
    imageBg: "from-blue-600 to-indigo-700",
  },
  {
    id: "mentor-tahsin",
    name: "Tahsin Rahman",
    role: "Senior Speaking & Fluency Specialist",
    institution: "Department of English, University of Dhaka",
    overallBand: "8.5",
    scores: {
      listening: "8.5",
      reading: "9.0",
      writing: "8.0",
      speaking: "8.5",
    },
    experience: "5+ Years",
    studentsMentored: "2,800+",
    bio: "ন্যাচারাল ফ্লুয়েন্সি, ফোনেটিক্স ও স্পিকিং টেস্টে নার্ভাসনেস দূর করার দক্ষ মেন্টর। শত শত শিক্ষার্থীকে স্পিকিংয়ে ৭.৫ ও ৮.০ পাইয়ে দিয়েছেন।",
    specialty: "Speaking Cue Card Master-stories & Pronunciation",
    imageBg: "from-rose-600 to-pink-700",
  },
  {
    id: "mentor-farhan",
    name: "Farhan Tanvir",
    role: "Writing Task 1 & 2 Evaluator",
    institution: "IELTS Band 8.5 Scorer | Commonwealth Scholar",
    overallBand: "8.5",
    scores: {
      listening: "9.0",
      reading: "8.5",
      writing: "8.5",
      speaking: "8.0",
    },
    experience: "6+ Years",
    studentsMentored: "3,200+",
    bio: "অফিসিয়াল ক্রাইটেরিয়া অনুসারে রাইটিং স্ক্রিপ্ট অ্যাসেসমেন্ট এবং জটিল গ্রামাটিক্যাল স্ট্রাকচার সহজবোধ্য ভাষায় শেখাতে সিদ্ধহস্ত।",
    specialty: "Task 2 Academic Essay Architecture & Lexical Precision",
    imageBg: "from-purple-600 to-violet-700",
  },
  {
    id: "mentor-sumaiya",
    name: "Sumaiya Anjum",
    role: "Listening & Reading Speed Coach",
    institution: "BRAC University (English Language & Linguistics)",
    overallBand: "8.0",
    scores: {
      listening: "9.0",
      reading: "8.5",
      writing: "7.5",
      speaking: "8.0",
    },
    experience: "4+ Years",
    studentsMentored: "2,100+",
    bio: "স্পিড রিডিং ও লিসেনিংয়ের ট্র্যাপ অপশন এলিমিনেশন টেকনিক্সে পারদর্শী। ক্যামব্রিজ টেস্টের কমন ভুলগুলো শুধরে দিয়ে শিক্ষার্থীদের আত্মবিশ্বাস বৃদ্ধি করেন।",
    specialty: "Timed Practice Drills & Elimination Hacks",
    imageBg: "from-emerald-600 to-teal-700",
  }
];
