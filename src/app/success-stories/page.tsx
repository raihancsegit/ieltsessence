"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, Play, Star, CheckCircle2, Award, 
  ArrowRight, ShieldCheck, Trophy, Sparkles
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

export default function SuccessStoriesPage() {
  const { openModal } = useModal();
  const [activeFilter, setActiveFilter] = useState<"all" | "monthly" | "weekly" | "jump">("all");
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; subtitle: string; url: string } | null>(null);

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
      <section id="video-reviews" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-extrabold uppercase tracking-wider border border-rose-500/30">
              <span>🎬 Video Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Hear It Directly From Our Top Achievers
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              কীভাবে তারা প্রস্তুতি নিয়েছেন, কোন স্ট্র্যাটেজি কাজে লেগেছে এবং জুয়েল স্যারের মেন্টরশিপ কেমন ছিল — সরাসরি শুনুন তাদের মুখে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="video-card bg-slate-800 border border-slate-700">
              <div 
                className="video-thumb-wrapper cursor-pointer"
                onClick={() => setSelectedVideo({
                  title: "Saiful Hassan — From 6.0 to Band 8.5 in 40 Days",
                  subtitle: "Saiful Hassan (Monash University, Australia) • Overall Band 8.5",
                  url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                })}
              >
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80" 
                  alt="Student Interview" 
                  className="video-thumb-img" 
                />
                <div className="video-thumb-overlay">
                  <div className="video-play-pulse-btn">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <span className="video-duration-pill">04:32</span>
                <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-500 text-white font-extrabold text-xs rounded-lg shadow-lg">
                  Band 8.5 Achiever
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Batch: Crash FastTrack #18</span>
                  <span className="text-amber-400 font-bold">L: 9.0 | R: 9.0</span>
                </div>
                <h4 
                  className="font-extrabold text-white text-base hover:text-rose-400 cursor-pointer transition-colors font-heading"
                  onClick={() => setSelectedVideo({
                    title: "Saiful Hassan — From 6.0 to Band 8.5 in 40 Days",
                    subtitle: "Saiful Hassan • Overall Band 8.5",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  })}
                >
                  "ক্যামব্রিজ ট্র্যাপ এলিমিনেশন টেকনিক দিয়ে লিসেনিং ও রিডিংয়ে ডাবল ৯.০ পেলাম"
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  সাইফুল হাসান শেয়ার করেছেন কীভাবে তিনি মাত্র ৪০ দিনে মক টেস্ট সিরিজের ভুল শুধরে ফুল স্কলারশিপ অর্জন করলেন।
                </p>
                <div className="pt-3 border-t border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">Saiful Hassan</span>
                  <span className="text-[11px] text-emerald-400 font-semibold">Monash University 🇦🇺</span>
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="video-card bg-slate-800 border border-slate-700">
              <div 
                className="video-thumb-wrapper cursor-pointer"
                onClick={() => setSelectedVideo({
                  title: "Tanvir Rahman — Overcoming Writing 5.5 to Score Band 8.0",
                  subtitle: "Tanvir Rahman (University of Toronto) • Overall Band 8.0",
                  url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                })}
              >
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=80" 
                  alt="Student Interview" 
                  className="video-thumb-img" 
                />
                <div className="video-thumb-overlay">
                  <div className="video-play-pulse-btn">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <span className="video-duration-pill">05:15</span>
                <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-500 text-white font-extrabold text-xs rounded-lg shadow-lg">
                  Band 8.0 Achiever
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Batch: Basic to Advanced #14</span>
                  <span className="text-amber-400 font-bold">W: 7.0 | S: 7.5</span>
                </div>
                <h4 
                  className="font-extrabold text-white text-base hover:text-rose-400 cursor-pointer transition-colors font-heading"
                  onClick={() => setSelectedVideo({
                    title: "Tanvir Rahman — Overcoming Writing 5.5 to Score Band 8.0",
                    subtitle: "Tanvir Rahman • Overall Band 8.0",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  })}
                >
                  "রাইটিংয়ে তিনবার ৫.৫ এ আটকে ছিলাম, জুয়েল স্যারের ফিডব্যাক ম্যাজিকের মতো কাজ করেছে"
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  টাস্ক রেসপন্স ও কোহিশন ফিক্স করে টরন্টো ইউনিভার্সিটিতে মাস্টার্সে এডমিশন নিশ্চিত করার গল্প।
                </p>
                <div className="pt-3 border-t border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">Tanvir Rahman</span>
                  <span className="text-[11px] text-emerald-400 font-semibold">Univ of Toronto 🇨🇦</span>
                </div>
              </div>
            </div>

            {/* Video 3 */}
            <div className="video-card bg-slate-800 border border-slate-700">
              <div 
                className="video-thumb-wrapper cursor-pointer"
                onClick={() => setSelectedVideo({
                  title: "Nusrat Jahan — Conquering Speaking Hesitation to Score Band 7.5",
                  subtitle: "Nusrat Jahan (Univ of Manchester, UK) • Overall Band 7.5",
                  url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                })}
              >
                <img 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80" 
                  alt="Student Interview" 
                  className="video-thumb-img" 
                />
                <div className="video-thumb-overlay">
                  <div className="video-play-pulse-btn">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <span className="video-duration-pill">03:48</span>
                <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-500 text-white font-extrabold text-xs rounded-lg shadow-lg">
                  Band 7.5 Achiever
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Batch: Speaking Intensive #09</span>
                  <span className="text-amber-400 font-bold">S: 7.5 | W: 7.0</span>
                </div>
                <h4 
                  className="font-extrabold text-white text-base hover:text-rose-400 cursor-pointer transition-colors font-heading"
                  onClick={() => setSelectedVideo({
                    title: "Nusrat Jahan — Conquering Speaking Hesitation to Score Band 7.5",
                    subtitle: "Nusrat Jahan • Overall Band 7.5",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  })}
                >
                  "ডেইলি স্পিকিং পার্টনার ড্রিল ও কিউ কার্ড ফর্মুলায় জড়তা একদম চলে যায়"
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  নুসরাত শেয়ার করেছেন কীভাবে এক্সামিনার মক সেশন তার কনফিডেন্স বুস্ট করে ম্যানচেস্টারে অফার এনে দেয়।
                </p>
                <div className="pt-3 border-t border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">Nusrat Jahan</span>
                  <span className="text-[11px] text-emerald-400 font-semibold">Univ of Manchester 🇬🇧</span>
                </div>
              </div>
            </div>
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
        <div className="modal-wrapper flex" onClick={() => setSelectedVideo(null)}>
          <div className="modal-body-card max-w-3xl p-4 bg-slate-900 text-white" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <div>
                <h4 className="font-extrabold text-white text-base font-heading">{selectedVideo.title}</h4>
                <p className="text-xs text-slate-400">{selectedVideo.subtitle}</p>
              </div>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-rose-600 transition-colors"
              >
                &times;
              </button>
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
              <iframe 
                src={selectedVideo.url} 
                className="w-full h-full border-0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
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
