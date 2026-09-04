"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, Play, Star, CheckCircle2, Award, 
  ArrowRight, ShieldCheck, Trophy, Sparkles, X, ExternalLink
} from "lucide-react";

interface ExamResult {
  id: string;
  name: string;
  avatar: string;
  avatarBg: string;
  avatarText: string;
  studentId: string;
  examType: "monthly" | "weekly";
  examTitle: string;
  examDate: string;
  listening: string;
  reading: string;
  writing: string;
  speaking: string;
  overall: string;
  progress: string;
  jump: boolean;
  university: string;
  country: string;
}

const EXAM_RESULTS: ExamResult[] = [
  {
    id: "1",
    name: "Saiful Hassan",
    avatar: "SH",
    avatarBg: "bg-blue-100",
    avatarText: "text-blue-700",
    studentId: "ESS-2026-B18-04",
    examType: "monthly",
    examTitle: "Monthly Grand Mock #3",
    examDate: "Aug 2026 • Official Examiner Panel",
    listening: "9.0",
    reading: "9.0",
    writing: "7.5",
    speaking: "8.0",
    overall: "Band 8.5",
    progress: "Diagnostic 6.0 ➔ 8.5 (+2.5 Jump)",
    jump: true,
    university: "Monash University",
    country: "Australia • Full Scholarship"
  },
  {
    id: "2",
    name: "Tanvir Rahman",
    avatar: "TR",
    avatarBg: "bg-rose-100",
    avatarText: "text-rose-700",
    studentId: "ESS-2026-B14-12",
    examType: "monthly",
    examTitle: "Monthly Grand Mock #4",
    examDate: "Aug 2026 • Full Length Test",
    listening: "8.5",
    reading: "8.5",
    writing: "7.0",
    speaking: "7.5",
    overall: "Band 8.0",
    progress: "Diagnostic 5.5 ➔ 8.0 (+2.5 Jump)",
    jump: true,
    university: "University of Toronto",
    country: "Canada • MSc Computer Science"
  },
  {
    id: "3",
    name: "Nusrat Jahan",
    avatar: "NJ",
    avatarBg: "bg-purple-100",
    avatarText: "text-purple-700",
    studentId: "ESS-2026-B09-02",
    examType: "weekly",
    examTitle: "Weekly Speaking & Writing Drill",
    examDate: "Week 3 • Evaluated by Jewel Sir",
    listening: "8.0",
    reading: "7.5",
    writing: "7.0",
    speaking: "7.5",
    overall: "Band 7.5",
    progress: "Diagnostic 5.5 ➔ 7.5 (+2.0 Jump)",
    jump: true,
    university: "Univ of Manchester",
    country: "UK • Public Health"
  },
  {
    id: "4",
    name: "Mahmudul Karim",
    avatar: "MK",
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-700",
    studentId: "ESS-2026-B12-07",
    examType: "weekly",
    examTitle: "Weekly Reading & Listening Drill",
    examDate: "Week 4 • 40 Questions Timed",
    listening: "8.0",
    reading: "8.0",
    writing: "7.0",
    speaking: "7.0",
    overall: "Band 7.5",
    progress: "Diagnostic 6.0 ➔ 7.5 (+1.5 Jump)",
    jump: true,
    university: "Univ of British Columbia",
    country: "Canada • Engineering"
  },
  {
    id: "5",
    name: "Anika Ritu",
    avatar: "AR",
    avatarBg: "bg-emerald-100",
    avatarText: "text-emerald-700",
    studentId: "ESS-2026-B15-19",
    examType: "monthly",
    examTitle: "Monthly Grand Mock #2",
    examDate: "July 2026 • Real Exam Simulation",
    listening: "8.5",
    reading: "8.5",
    writing: "7.5",
    speaking: "7.5",
    overall: "Band 8.0",
    progress: "Diagnostic 6.0 ➔ 8.0 (+2.0 Jump)",
    jump: true,
    university: "University of Melbourne",
    country: "Australia • Business Analytics"
  }
];

interface StudentVideoReview {
  id: string;
  name: string;
  avatar: string;
  avatarBg: string;
  avatarText: string;
  batch: string;
  bandScore: string;
  scores: {
    listening: string;
    reading: string;
    writing: string;
    speaking: string;
  };
  university: string;
  country: string;
  quote: string;
  description: string;
  duration: string;
  videoId: string;
  thumbnailUrl: string;
}

const STUDENT_VIDEO_REVIEWS: StudentVideoReview[] = [
  {
    id: "v1",
    name: "Saiful Hassan",
    avatar: "SH",
    avatarBg: "bg-blue-600",
    avatarText: "text-white",
    batch: "Crash FastTrack #18",
    bandScore: "Band 8.5",
    scores: { listening: "9.0", reading: "9.0", writing: "7.5", speaking: "8.0" },
    university: "Monash University",
    country: "Australia 🇦🇺",
    quote: "ক্যামব্রিজ ট্র্যাপ এলিমিনেশন টেকনিক দিয়ে লিসেনিং ও রিডিংয়ে ডাবল ৯.০ পেলাম",
    description: "সাইফুল হাসান শেয়ার করেছেন কীভাবে তিনি মাত্র ৪০ দিনে মক টেস্ট সিরিজের ভুল শুধরে Monash University-তে ফুল স্কলারশিপ অর্জন করলেন।",
    duration: "04:32",
    videoId: "scdu8kG3b_k",
    thumbnailUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "v2",
    name: "Tanvir Rahman",
    avatar: "TR",
    avatarBg: "bg-rose-600",
    avatarText: "text-white",
    batch: "Basic to Advanced #14",
    bandScore: "Band 8.0",
    scores: { listening: "8.5", reading: "8.5", writing: "7.0", speaking: "7.5" },
    university: "University of Toronto",
    country: "Canada 🇨🇦",
    quote: "রাইটিংয়ে ৩ বার ৫.৫ এ আটকে ছিলাম, জুয়েল স্যারের ফিডব্যাকে ৭.০ স্কোর আসলো",
    description: "টাস্ক রেসপন্স ও কোহিশন ফিক্স করে টরন্টো ইউনিভার্সিটিতে এমএসসি কম্পিউটার সায়েন্সে এডমিশন ও ফান্ডিং নিশ্চিত করার গল্প।",
    duration: "05:15",
    videoId: "O14r9Wd9y4Q",
    thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "v3",
    name: "Nusrat Jahan",
    avatar: "NJ",
    avatarBg: "bg-purple-600",
    avatarText: "text-white",
    batch: "Speaking Intensive #09",
    bandScore: "Band 7.5",
    scores: { listening: "8.0", reading: "7.5", writing: "7.0", speaking: "7.5" },
    university: "Univ of Manchester",
    country: "UK 🇬🇧",
    quote: "ডেইলি স্পিকিং পার্টনার ড্রিল ও কিউ-কার্ড ফর্মুলায় জড়তা একদম চলে যায়",
    description: "নুসরাত শেয়ার করেছেন কীভাবে এক্সামিনার ওয়ান-টু-ওয়ান মক সেশনে স্পিকিং ব্যান্ড ৫.৫ থেকে ৭.৫ এ উন্নীত হয়ে ম্যানচেস্টারে অফার পেলেন।",
    duration: "03:48",
    videoId: "yBYlejvPguc",
    thumbnailUrl: "https://img.youtube.com/vi/yBYlejvPguc/hqdefault.jpg"
  },
  {
    id: "v4",
    name: "Mahmudul Karim",
    avatar: "MK",
    avatarBg: "bg-amber-600",
    avatarText: "text-white",
    batch: "Weekend Executive #12",
    bandScore: "Band 8.0",
    scores: { listening: "8.5", reading: "8.5", writing: "7.5", speaking: "7.5" },
    university: "Univ of British Columbia",
    country: "Canada 🇨🇦",
    quote: "জব হোল্ডার হয়েও পার্সোনালাইজড স্টাডি প্ল্যানে প্রথম এটেম্পটেই ব্যান্ড ৮.০",
    description: "ফুল টাইম চাকুরির পাশাপাশি রাতে জুয়েল স্যারের এক্সক্লুসিভ লাইভ হ্যাকস কাজে লাগিয়ে টার্গেট স্কোর অর্জন ও ভিসা প্রসেসিং।",
    duration: "06:10",
    videoId: "l_a6aY785gA",
    thumbnailUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "v5",
    name: "Anika Ritu",
    avatar: "AR",
    avatarBg: "bg-emerald-600",
    avatarText: "text-white",
    batch: "Reading & Writing Masterclass #15",
    bandScore: "Band 8.0",
    scores: { listening: "8.5", reading: "8.5", writing: "7.5", speaking: "7.5" },
    university: "University of Melbourne",
    country: "Australia 🇦🇺",
    quote: "রিডিং ট্রু/ফলস/নট গিভেন ট্র্যাপ শনাক্ত করতে স্যারের মেথড অতুলনীয়",
    description: "অনলাইন ব্যাচে নিয়মিত হোমওয়ার্ক চেক ও ডাউট সলভিং সেশনের মাধ্যমে ডায়াগনস্টিক ৬.০ থেকে ৮.০ এর বিশাল স্কোর জাম্প।",
    duration: "04:55",
    videoId: "GkXn_q9pZg8",
    thumbnailUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "v6",
    name: "Farhan Sadik",
    avatar: "FS",
    avatarBg: "bg-indigo-600",
    avatarText: "text-white",
    batch: "Mock Test Special #07",
    bandScore: "Band 7.5",
    scores: { listening: "8.0", reading: "8.0", writing: "7.0", speaking: "7.5" },
    university: "University of Alberta",
    country: "Canada 🇨🇦",
    quote: "এক্সাম সেন্টারের মতো ফুল লেন্থ মক টেস্টের কারণে মেইন এক্সামে কোনো নার্ভাসনেস ছিল না",
    description: "১০টি পূর্ণাঙ্গ মক টেস্টের রিয়েল ফিডব্যাক কাজে লাগিয়ে অ্যালবার্টা ইউনিভার্সিটিতে মাস্টার্সের অফার লেটার ও স্কলারশিপ নিশ্চিত।",
    duration: "05:40",
    videoId: "aG3C-O_Yy4A",
    thumbnailUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
  }
];

export default function SuccessStoriesPage() {
  const { openModal } = useModal();
  const [activeFilter, setActiveFilter] = useState<"all" | "monthly" | "weekly" | "jump">("all");
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; subtitle: string; url: string } | null>(null);
  const [featuredVideo, setFeaturedVideo] = useState<StudentVideoReview>(STUDENT_VIDEO_REVIEWS[0]);
  const [playingCardId, setPlayingCardId] = useState<string | null>(null);

  const filteredResults = EXAM_RESULTS.filter(res => {
    if (activeFilter === "all") return true;
    if (activeFilter === "monthly") return res.examType === "monthly";
    if (activeFilter === "weekly") return res.examType === "weekly";
    if (activeFilter === "jump") return res.jump;
    return true;
  });

  return (
    <div className="space-y-0">
      {/* ==========================================================================
          INNER HERO SECTION
          ========================================================================== */}
      <section className="inner-hero-section">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <div className="inner-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/about">About</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-rose-400">Success Stories & Results</span>
          </div>

          <span className="inline-block px-4 py-1 bg-emerald-600 text-white rounded-full text-xs font-extrabold uppercase tracking-widest mb-4">
            ⭐ 2,500+ Success Stories • Band 7.5+ Club
          </span>

          <h1 className="inner-hero-title font-heading">
            Real Exam Results & Video Reviews <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-rose-300">
              Transparent Weekly & Monthly Scorecard Proofs
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            আমাদের প্রতিটি ব্যাচের শিক্ষার্থীদের সাপ্তাহিক মডিউল ড্রিল, মাসিক গ্র্যান্ড মক টেস্টের লাইভ রেজাল্ট এবং সরাসরি শিক্ষার্থীদের ভিডিও রিভিউ দেখুন।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#video-reviews" className="btn-cta-amber">
              Watch Student Video Reviews ↓
            </a>
            <a href="#mock-results" className="btn-cta-blue">
              View Weekly & Monthly Results ↓
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          HIGHLIGHT STATS METRICS BAR
          ========================================================================== */}
      <div className="border-b border-slate-100 bg-white py-8">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">2,500+</div>
              <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Successful Achievers</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-heading">8.5</div>
              <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Highest Band Achieved</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-black text-rose-600 font-heading">94%</div>
              <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Band 7.0+ Success Rate</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 font-heading">45+</div>
              <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Global University Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================================================
          SECTION 1: STUDENT VIDEO SUCCESS STORIES & INTERVIEWS
          ========================================================================== */}
      <section id="video-reviews" className="py-20 bg-gradient-to-b from-slate-950 via-[#0B132B] to-slate-950 text-white relative overflow-hidden">
        {/* Glow ambient decorations */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-400 text-xs font-extrabold uppercase tracking-wider border border-rose-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Student Video Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Hear It Directly From Our Top Achievers
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              সরাসরি আমাদের শিক্ষার্থীদের মুখ থেকে শুনুন কীভাবে তারা মাত্র ১-২ মাসের সঠিক গাইডেন্সে ব্যান্ড ৭.৫+ অর্জন করেছেন।
            </p>

            {/* Direct Official YouTube Channel Action */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.youtube.com/@IELTSEssence/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-red-600/30 transition-all hover:scale-105 font-heading"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>অফিসিয়াল ইউটিউব চ্যানেল (@IELTSEssence) - সকল ভিডিও দেখুন ↗</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61565824504813"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-blue-600/20 transition-all hover:scale-105 font-heading"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>অফিসিয়াল ফেসবুক পেজ ↗</span>
              </a>
            </div>
          </div>

          {/* ========================================================================
              FEATURED CINEMA PLAYER (INTERACTIVE THEATER)
              ======================================================================== */}
          <div className="mb-14 rounded-3xl bg-slate-900/90 border border-slate-800 p-4 sm:p-7 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Video Embed Display */}
              <div className="lg:col-span-7">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-slate-700/80 shadow-2xl relative group">
                  <iframe 
                    src={`https://www.youtube.com/embed/${featuredVideo.videoId}?rel=0`} 
                    title={`${featuredVideo.name} IELTS Success Story`}
                    className="w-full h-full border-0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Video Information & Metrics */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black uppercase tracking-wider">
                    {featuredVideo.bandScore} Achiever
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold">
                    {featuredVideo.university} {featuredVideo.country}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white font-heading leading-snug">
                  "{featuredVideo.quote}"
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {featuredVideo.description}
                </p>

                {/* Score Breakdown Bar */}
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Official Exam Breakdown ({featuredVideo.batch}):
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold">Listening</div>
                      <div className="text-base font-black text-emerald-400 font-heading">{featuredVideo.scores.listening}</div>
                    </div>
                    <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold">Reading</div>
                      <div className="text-base font-black text-emerald-400 font-heading">{featuredVideo.scores.reading}</div>
                    </div>
                    <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold">Writing</div>
                      <div className="text-base font-black text-amber-400 font-heading">{featuredVideo.scores.writing}</div>
                    </div>
                    <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold">Speaking</div>
                      <div className="text-base font-black text-amber-400 font-heading">{featuredVideo.scores.speaking}</div>
                    </div>
                  </div>
                </div>

                {/* Student Info Footer */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${featuredVideo.avatarBg} ${featuredVideo.avatarText} flex items-center justify-center font-black text-sm shadow-md`}>
                      {featuredVideo.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{featuredVideo.name}</div>
                      <div className="text-xs text-slate-400">{featuredVideo.batch}</div>
                    </div>
                  </div>

                  <a 
                    href={`https://www.youtube.com/watch?v=${featuredVideo.videoId}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 text-xs font-bold transition-all"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    <span>Watch on YouTube ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================
              VIDEO CARDS GRID (ALL 6 STUDENT TESTIMONIALS)
              ======================================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDENT_VIDEO_REVIEWS.map((review) => {
              const isSelected = featuredVideo.id === review.id;
              const isPlayingThis = playingCardId === review.id;

              return (
                <div 
                  key={review.id}
                  className={`bg-slate-900/90 border rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group ${
                    isSelected ? "border-rose-500 shadow-xl shadow-rose-500/20 ring-1 ring-rose-500/50" : "border-slate-800 hover:border-slate-700 hover:shadow-2xl"
                  }`}
                >
                  <div>
                    {/* Video Thumbnail / Inline Player */}
                    <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                      {isPlayingThis ? (
                        <iframe 
                          src={`https://www.youtube.com/embed/${review.videoId}?autoplay=1&rel=0`} 
                          title={`${review.name} IELTS Test`}
                          className="w-full h-full border-0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowFullScreen
                        />
                      ) : (
                        <div 
                          className="w-full h-full cursor-pointer relative"
                          onClick={() => {
                            setPlayingCardId(review.id);
                            setFeaturedVideo(review);
                          }}
                        >
                          <img 
                            src={review.thumbnailUrl || `https://img.youtube.com/vi/${review.videoId}/hqdefault.jpg`} 
                            alt={review.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/50 group-hover:scale-110 transition-all duration-300">
                              <Play className="w-6 h-6 fill-current ml-0.5 text-white" />
                            </div>
                          </div>

                          {/* Top Pill Badges */}
                          <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-600/90 backdrop-blur-md text-white font-extrabold text-[11px] rounded-lg shadow-lg">
                            {review.bandScore} Achiever
                          </div>

                          <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold rounded-md">
                            {review.duration}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-medium">{review.batch}</span>
                        <span className="text-amber-400 font-bold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20">
                          L: {review.scores.listening} | R: {review.scores.reading} | S: {review.scores.speaking}
                        </span>
                      </div>

                      <h4 
                        className="font-extrabold text-white text-base leading-snug hover:text-rose-400 cursor-pointer transition-colors font-heading"
                        onClick={() => {
                          setPlayingCardId(review.id);
                          setFeaturedVideo(review);
                        }}
                      >
                        "{review.quote}"
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {review.description}
                      </p>

                      <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 rounded-full ${review.avatarBg} ${review.avatarText} flex items-center justify-center text-[10px] font-bold`}>
                            {review.avatar}
                          </div>
                          <span className="text-xs font-bold text-white">{review.name}</span>
                        </div>
                        <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                          {review.university}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-5 pb-5 pt-0 flex items-center gap-2">
                    <button
                      onClick={() => {
                        setPlayingCardId(review.id);
                        setFeaturedVideo(review);
                      }}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-red-900/30 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isPlayingThis ? "ভিডিও চালু আছে" : "ভিডিও প্লে করুন"}</span>
                    </button>
                    <a
                      href={`https://www.youtube.com/watch?v=${review.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-red-400 border border-slate-700 font-bold text-xs flex items-center justify-center gap-1 transition-all"
                      title="Watch on YouTube"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      <span>YouTube ↗</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: WEEKLY & MONTHLY EXAM RESULTS & SCORE JUMP TRACKER
          ========================================================================== */}
      <section id="mock-results" className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <div className="feature-pill-badge bg-emerald-100 text-emerald-700">📊 Live Batch Transparency</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                Weekly & Monthly Exam Scorecards
              </h2>
              <p className="text-slate-500 text-sm max-w-xl">
                আমাদের প্রতি সপ্তাহের মডিউল টেস্ট ও মাসিক গ্র্যান্ড মক টেস্টের রিয়েল রেজাল্ট শীট এবং ডায়াগনস্টিক টেস্টের তুলনায় ব্যান্ড স্কোরের উন্নতি।
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveFilter("all")} 
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === "all" ? "bg-rose-600 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200 hover:border-rose-300"
                }`}
              >
                All Results
              </button>
              <button 
                onClick={() => setActiveFilter("monthly")} 
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === "monthly" ? "bg-rose-600 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200 hover:border-rose-300"
                }`}
              >
                Monthly Grand Mocks
              </button>
              <button 
                onClick={() => setActiveFilter("weekly")} 
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === "weekly" ? "bg-rose-600 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200 hover:border-rose-300"
                }`}
              >
                Weekly Module Drills
              </button>
              <button 
                onClick={() => setActiveFilter("jump")} 
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === "jump" ? "bg-rose-600 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200 hover:border-rose-300"
                }`}
              >
                +1.5 to +2.5 Band Jumps
              </button>
            </div>
          </div>

          {/* Responsive Exam Table Wrapper */}
          <div className="responsive-table-wrapper bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white font-heading text-[11px] uppercase tracking-wider">
                  <th className="py-4 px-5">Student & Batch ID</th>
                  <th className="py-4 px-4">Exam Type & Date</th>
                  <th className="py-4 px-3 text-center">L</th>
                  <th className="py-4 px-3 text-center">R</th>
                  <th className="py-4 px-3 text-center">W</th>
                  <th className="py-4 px-3 text-center">S</th>
                  <th className="py-4 px-4 text-center">Overall Band</th>
                  <th className="py-4 px-4 text-center">Score Progress</th>
                  <th className="py-4 px-5">Target Destination</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredResults.map(res => (
                  <tr key={res.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${res.avatarBg} ${res.avatarText} font-bold flex items-center justify-center text-xs font-heading`}>
                          {res.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm font-heading">{res.name}</div>
                          <div className="text-[10px] text-slate-400">ID: {res.studentId}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-1 ${res.examType === "monthly" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"} font-bold rounded-md`}>
                        {res.examTitle}
                      </span>
                      <div className="text-[10px] text-slate-400 mt-0.5">{res.examDate}</div>
                    </td>
                    <td className="py-4 px-3 text-center font-bold text-blue-600">{res.listening}</td>
                    <td className="py-4 px-3 text-center font-bold text-blue-600">{res.reading}</td>
                    <td className="py-4 px-3 text-center font-bold text-blue-600">{res.writing}</td>
                    <td className="py-4 px-3 text-center font-bold text-blue-600">{res.speaking}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs">
                        {res.overall}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="score-jump-pill">{res.progress}</span>
                    </td>
                    <td className="py-4 px-5">
                      <div className="font-bold text-slate-900 font-heading">{res.university}</div>
                      <div className="text-[10px] text-slate-400">{res.country}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 px-2">
            <span>⚡ রেজাল্টগুলো অফিসিয়াল ব্রিটিশ কাউন্সিল ও আইডিপি এক্সাম স্ট্যান্ডার্ড মেনে প্রস্তুতকৃত।</span>
            <span className="font-bold text-emerald-600">Verified by Jewel Ahamadinezad (Band 8.5)</span>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: STUDENT REVIEWS & SCORECARD GRID
          ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="feature-pill-badge bg-rose-100 text-rose-700">⭐ Written Testimonials</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              What Our Alumni Say About IELTS ESSENCE
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              দেশ-বিদেশের বিভিন্ন প্রান্তে ছড়িয়ে থাকা সফল শিক্ষার্থীদের অভিজ্ঞতা ও মূল্যায়ন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4 hover-elevate">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs rounded-full">Band 8.0 Overall</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>L: 8.5</span>
                <span>R: 8.5</span>
                <span>W: 7.0</span>
                <span>S: 7.5</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "আগেরবার অন্য কোচিং থেকে পরীক্ষা দিয়ে রাইটিং এ ৫.৫ এ আটকে ছিলাম। জুয়েল স্যারের রাইটিং মাস্টারক্লাসে লাইন-বাই-লাইন ইভালুয়েশন আমার লেখার ভুলগুলো স্পষ্ট করে দেয়। এবার রাইটিং এ ৭.০ সহ ৮.০ এসেছে!"
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm font-heading">TR</div>
                <div>
                  <div className="font-bold text-xs text-slate-900 font-heading">Tanvir Rahman</div>
                  <div className="text-[10px] text-slate-400">University of Toronto, Canada (MSc CS)</div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4 hover-elevate">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs rounded-full">Band 8.5 Overall</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>L: 9.0</span>
                <span>R: 9.0</span>
                <span>W: 7.5</span>
                <span>S: 8.0</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "লিসেনিং ও রিডিং-এ ক্যামব্রিজের ট্র্যাপ অপশন এলিমিনেশন টেকনিক আমার জন্য গেম চেঞ্জার ছিল। ৪০ দিনের ক্র্যাশ কোর্সের মক টেস্ট সিরিজ আমাকে রিয়েল এক্সাম এনভায়রনমেন্টের আত্মবিশ্বাস দিয়েছে।"
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm font-heading">SH</div>
                <div>
                  <div className="font-bold text-xs text-slate-900 font-heading">Saiful Hassan</div>
                  <div className="text-[10px] text-slate-400">Monash University, Australia (Full Scholarship)</div>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4 hover-elevate">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs rounded-full">Band 7.5 Overall</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>L: 8.0</span>
                <span>R: 7.5</span>
                <span>W: 7.0</span>
                <span>S: 7.5</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "স্পিকিংয়ে আমার খুব ভয় লাগত, কথা বলতে গিয়ে আটকে যেতাম। প্রতিদিন পার্টনার প্র্যাকটিস ও ওয়ান-অন-ওয়ান মক নেওয়ার ফলে পরীক্ষার দিন একটুও নার্ভাস লাগেনি।"
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm font-heading">NJ</div>
                <div>
                  <div className="font-bold text-xs text-slate-900 font-heading">Nusrat Jahan</div>
                  <div className="text-[10px] text-slate-400">University of Manchester, UK (Public Health)</div>
                </div>
              </div>
            </div>

            {/* Story 4 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4 hover-elevate">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs rounded-full">Band 7.5 Overall</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>L: 8.0</span>
                <span>R: 8.0</span>
                <span>W: 7.0</span>
                <span>S: 7.0</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "চাকরির পাশাপাশি সময় বের করা কঠিন ছিল। জুয়েল স্যারের স্ট্র্যাটেজিক লেকচার ও উইকএন্ড ডাউট ক্লিয়ারিং ক্লাসের কারণে খুব দ্রুত স্কোর ইম্প্রুভ হয়েছে।"
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm font-heading">MK</div>
                <div>
                  <div className="font-bold text-xs text-slate-900 font-heading">Mahmudul Karim</div>
                  <div className="text-[10px] text-slate-400">University of British Columbia (UBC), Canada</div>
                </div>
              </div>
            </div>

            {/* Story 5 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4 hover-elevate">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs rounded-full">Band 8.0 Overall</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>L: 8.5</span>
                <span>R: 8.5</span>
                <span>W: 7.5</span>
                <span>S: 7.5</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "রাইটিং টাস্ক ১ এর চার্ট ও ম্যাপ ডেসক্রিপশনে ব্যান্ড ৯ সেন্টেন্স স্ট্রাকচারগুলো একদম ম্যাজিকের মতো কাজ করেছে। আলহামদুলিল্লাহ!"
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm font-heading">AR</div>
                <div>
                  <div className="font-bold text-xs text-slate-900 font-heading">Anika Ritu</div>
                  <div className="text-[10px] text-slate-400">University of Melbourne, Australia</div>
                </div>
              </div>
            </div>

            {/* Story 6 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4 hover-elevate">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs rounded-full">Band 7.5 Overall</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>L: 8.0</span>
                <span>R: 7.5</span>
                <span>W: 7.0</span>
                <span>S: 7.5</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "ভিসা প্রসেসিং ও ফ্রি এসওপি রিভিউ গাইডেন্স পাওয়ার কারণে কোনো এজেন্সির প্রতারণায় না পড়ে সরাসরি ইউনিভার্সিটিতে অফার পেয়েছি।"
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm font-heading">FS</div>
                <div>
                  <div className="font-bold text-xs text-slate-900 font-heading">Farhan Sadik</div>
                  <div className="text-[10px] text-slate-400">University of Alberta, Canada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/85 backdrop-blur-md animate-fadeIn overflow-y-auto" 
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 text-white my-auto flex flex-col space-y-4 animate-scaleUp" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-800">
              <div className="space-y-1 pr-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-[10.5px] font-extrabold uppercase tracking-wide">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    <span>IELTS ESSENCE Official</span>
                  </span>
                  <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Verified Story
                  </span>
                </div>
                <h4 className="font-extrabold !text-white text-base sm:text-xl font-heading leading-snug">
                  {selectedVideo.title}
                </h4>
                <p className="text-xs text-slate-400">{selectedVideo.subtitle}</p>
              </div>

              <button 
                onClick={() => setSelectedVideo(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-rose-600 text-white flex items-center justify-center transition-all shrink-0 cursor-pointer hover:rotate-90"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-inner relative">
              <iframe 
                src={selectedVideo.url} 
                title={selectedVideo.title}
                className="w-full h-full border-0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              />
            </div>

            {/* Footer Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <p className="text-xs text-slate-400">
                ভিডিও দেখতে কোনো সমস্যা হলে সরাসরি আমাদের অফিসিয়াল YouTube চ্যানেলে ওপেন করুন:
              </p>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a 
                  href="https://www.youtube.com/@IELTSEssence/videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-md shadow-red-900/40 font-heading"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span>Open on YouTube (@IELTSEssence) ↗</span>
                </a>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================================
          CALL TO ACTION BANNER
          ========================================================================== */}
      <section className="cta-banner-wrapper">
        <div className="max-w-[1320px] mx-auto px-6 text-center space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/20">
            Your Story is Next
          </span>
          <h2 className="cta-banner-headline font-heading">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            আজই জয়েন করুন পরবর্তী ব্যাচে এবং জুয়েল স্যারের সার্বক্ষণিক দিকনির্দেশনায় এগিয়ে যান আপনার স্বপ্নের বিশ্ববিদ্যালয়ের দিকে।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("Success Story Next Batch")} 
              className="btn-cta-amber cursor-pointer"
            >
              Claim Admission Seat Now →
            </button>
            <Link href="/courses" className="btn-cta-blue">
              View Course Details →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
