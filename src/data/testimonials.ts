export interface Testimonial {
  id: string;
  name: string;
  overallBand: string;
  subScores: {
    listening: string;
    reading: string;
    writing: string;
    speaking: string;
  };
  university: string;
  country: string;
  course: string;
  review: string;
  avatarBg: string;
  badge?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Tanvir Ahmed",
    overallBand: "8.5",
    subScores: {
      listening: "9.0",
      reading: "9.0",
      writing: "8.0",
      speaking: "8.0"
    },
    university: "University of Toronto",
    country: "Canada",
    course: "Complete Basic To Advanced",
    review: "জুয়েল স্যারের রিডিং স্ট্র্যাটেজি জাস্ট অবিশ্বাস্য! ক্যামব্রিজ প্যাসেজ যে এত সহজে সলভ করা যায় আগে জানতাম না। মাত্র ৩ মাসের প্রিপারেশনে ওভারঅল ৮.৫ পেয়েছি এবং টরন্টো ইউনিভার্সিটিতে অফার লেটার পেয়েছি।",
    avatarBg: "bg-blue-600",
    badge: "Full Scholarship"
  },
  {
    id: "test-2",
    name: "Nusrat Jahan",
    overallBand: "8.0",
    subScores: {
      listening: "8.5",
      reading: "8.5",
      writing: "7.5",
      speaking: "8.0"
    },
    university: "University of Manchester",
    country: "United Kingdom",
    course: "Writing Masterclass & Mocks",
    review: "রাইটিংয়ে দুইবার পরীক্ষা দিয়ে ৬.০ তে আটকে ছিলাম। IELTS ESSENCE-এর রাইটিং মাস্টারক্লাসে লাইন-বাই-লাইন কারেকশন পাওয়ার পর এক ধাক্কায় ৭.৫ এ উন্নীত হয়েছে। এই প্ল্যাটফর্মের ডেডিকেশন অনন্য!",
    avatarBg: "bg-rose-600",
    badge: "Visa Approved"
  },
  {
    id: "test-3",
    name: "Mahfuzur Rahman",
    overallBand: "8.0",
    subScores: {
      listening: "8.5",
      reading: "8.5",
      writing: "7.5",
      speaking: "8.0"
    },
    university: "University of Melbourne",
    country: "Australia",
    course: "40-Day Crash Course",
    review: "চাকরির পাশাপাশি সময় কম থাকায় ক্র্যাশ কোর্সে ভর্তি হয়েছিলাম। প্রতিদিনের টাইমড প্র্যাকটিস ড্রিল ও মেন্টরদের ডিরেক্ট ফিডব্যাকের কারণে প্রথম চান্সেই ব্যান্ড ৮.০ পেয়ে অস্ট্রেলিয়া পিআর ও মাস্টার্স নিশ্চিত করেছি।",
    avatarBg: "bg-purple-600",
    badge: "Direct PR Pathway"
  },
  {
    id: "test-4",
    name: "Sadia Afrin",
    overallBand: "7.5",
    subScores: {
      listening: "8.0",
      reading: "7.5",
      writing: "7.0",
      speaking: "7.5"
    },
    university: "Technical University of Munich",
    country: "Germany",
    course: "Speaking Lab & Complete IELTS",
    review: "স্পিকিংয়ে আমার প্রচণ্ড নার্ভাসনেস ছিল। ডেইলি ওয়ান-অন-ওয়ান স্পিকিং প্র্যাকটিস ও তাহসিন স্যারের গাইডেন্সে কোনো তোতলামি ছাড়া ফ্লুয়েন্টলি কথা বলার কনফিডেন্স পেয়েছি। এখন আমি মিউনিখে মাস্টার্স করছি।",
    avatarBg: "bg-emerald-600",
    badge: "Tuition Free Study"
  },
  {
    id: "test-5",
    name: "Rifat Hasan",
    overallBand: "8.0",
    subScores: {
      listening: "9.0",
      reading: "8.5",
      writing: "7.0",
      speaking: "7.5"
    },
    university: "Monash University",
    country: "Australia",
    course: "Complete Basic To Advanced",
    review: "সবচেয়ে ভালো লেগেছে এদের মক টেস্ট সিস্টেম। অফিসিয়াল সেন্টারের মতোই পরিবেশ ও অ্যানালিটিক্স রিপোর্ট দেওয়া হয়। প্রতিটা মকের পর দুর্বলতাগুলো চিহ্নিত করে দেওয়ার কারণে পরীক্ষায় কোনো ভুল হয়নি।",
    avatarBg: "bg-indigo-600",
    badge: "Admitted"
  },
  {
    id: "test-6",
    name: "Farzana Akter",
    overallBand: "7.5",
    subScores: {
      listening: "8.0",
      reading: "8.0",
      writing: "7.0",
      speaking: "7.0"
    },
    university: "University of Oulu",
    country: "Finland",
    course: "Writing & Speaking Intensive",
    review: "ইউরোপে উচ্চশিক্ষার স্বপ্ন সত্যি করার পেছনে জুয়েল ভাই ও পুরো এসেন্স টিমের অবদান অনস্বীকার্য। গাইডেন্স, কোর্স ম্যাটেরিয়ালস ও স্টাডি অ্যাব্রোড কাউন্সেলিং সবই এক ছাদের নিচে পেয়েছি।",
    avatarBg: "bg-amber-600",
    badge: "EU Scholarship"
  }
];
