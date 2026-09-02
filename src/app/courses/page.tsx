"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, CheckCircle2, Award, Users, 
  Target, Sparkles, BookOpen, Clock, Calendar, ArrowRight, ShieldCheck, Crown
} from "lucide-react";

export default function CoursesPage() {
  const { openModal } = useModal();
  const [activeCategory, setActiveCategory] = useState<"all" | "comprehensive" | "fasttrack" | "skill">("all");

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
            <span className="text-rose-400">Our Courses</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            Master Every IELTS Module <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-rose-300 to-amber-300">
              With Proven High-Yield Programs
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            আপনার বর্তমান লেভেল ও সময় অনুযায়ী তৈরি করা স্পেশালাইজড কোর্স কারিকুলাম। ফুল লেংথ মক টেস্ট, আনলিমিটেড রাইটিং ইভালুয়েশন ও ডেইলি স্পিকিং প্র্যাকটিস সাপোর্ট।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
            <button 
              onClick={() => setActiveCategory("all")} 
              className={`custom-tab-btn cursor-pointer ${activeCategory === "all" ? "active" : ""}`}
            >
              All Programs (5)
            </button>
            <button 
              onClick={() => setActiveCategory("comprehensive")} 
              className={`custom-tab-btn cursor-pointer ${activeCategory === "comprehensive" ? "active" : ""}`}
            >
              Comprehensive
            </button>
            <button 
              onClick={() => setActiveCategory("fasttrack")} 
              className={`custom-tab-btn cursor-pointer ${activeCategory === "fasttrack" ? "active" : ""}`}
            >
              Fast Track
            </button>
            <button 
              onClick={() => setActiveCategory("skill")} 
              className={`custom-tab-btn cursor-pointer ${activeCategory === "skill" ? "active" : ""}`}
            >
              Skill Specific
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          COURSES DIRECTORY SECTION
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1: Basic To Advanced (Flagship) */}
            {(activeCategory === "all" || activeCategory === "comprehensive") && (
              <div className="bg-white rounded-3xl p-8 border-2 border-rose-500 shadow-xl relative overflow-hidden flex flex-col justify-between hover-elevate">
                <div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-extrabold px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest animate-pulse-glow font-heading">
                  Most Popular • Flagship
                </div>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl mb-6">
                    📘
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px]">3–4 Months</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[11px]">Band 7.5+ Target</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-heading mb-3">
                    IELTS Basic To Advanced Masterclass
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    যাদের বেসিক দুর্বল বা যারা একদম শুরু থেকে প্রস্তুতি নিয়ে প্রথমবারেই কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন করতে চান তাদের জন্য সম্পূর্ণ পূর্ণাঙ্গ প্রোগ্রাম।
                  </p>

                  <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <span className="text-rose-600 font-bold">✔</span> <strong>৪৮টি লাইভ ক্লাস</strong> (L, R, W, S Complete)
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-rose-600 font-bold">✔</span> <strong>আনলিমিটেড রাইটিং ইভালুয়েশন</strong> উইথ ফিডব্যাক
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-rose-600 font-bold">✔</span> <strong>ডেইলি ১-অন-১ স্পিকিং প্র্যাকটিস</strong> সেশন
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-rose-600 font-bold">✔</span> <strong>২০টি ফুল লেংথ মক টেস্ট</strong> + সল্যুশন ক্লাস
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-rose-600 font-bold">✔</span> <strong>ফ্রি স্টাডি ম্যাটেরিয়ালস ও লেকচার শিট</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-slate-400 line-through">BDT 15,000</span>
                      <div className="text-2xl font-black text-slate-900 font-heading">BDT 10,500</div>
                    </div>
                    <span className="px-3 py-1 bg-rose-50 text-rose-600 font-bold text-xs rounded-xl">30% Off</span>
                  </div>
                  <button 
                    onClick={() => openModal("IELTS Basic To Advanced")} 
                    className="btn-cta-amber w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                  >
                    Enroll Now / Free Trial →
                  </button>
                </div>
              </div>
            )}

            {/* Course 2: IELTS Crash Course */}
            {(activeCategory === "all" || activeCategory === "fasttrack") && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between hover-elevate">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl mb-6">
                    ⚡
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px]">40 Days</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-600 font-bold text-[11px]">Fast Track</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-heading mb-3">
                    IELTS 40-Day Intensive Crash Course
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    যাদের পরীক্ষার তারিখ কাছে বা যারা দ্রুত স্কোর বুস্ট করতে চান তাদের জন্য হাই-ইল্ড স্ট্র্যাটেজি ও প্রিডিকশন বেসড স্প্রিন্ট কোর্স।
                  </p>

                  <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <span className="text-amber-500 font-bold">✔</span> <strong>২৪টি হাই-স্পিড স্ট্র্যাটেজি ক্লাস</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-amber-500 font-bold">✔</span> <strong>ক্যামব্রিজ ১৭-১৯ এর বিশেষ ট্র্যাপ ডিকোডিং</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-amber-500 font-bold">✔</span> <strong>১০টি সিডি-আইইএলটিএস মক টেস্ট</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-amber-500 font-bold">✔</span> <strong>এক্সপ্রেস রাইটিং ও স্পিকিং রিভিউ</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-slate-400 line-through">BDT 10,000</span>
                      <div className="text-2xl font-black text-slate-900 font-heading">BDT 6,500</div>
                    </div>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold text-xs rounded-xl">35% Off</span>
                  </div>
                  <button 
                    onClick={() => openModal("IELTS Crash Course")} 
                    className="btn-cta-blue w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                  >
                    Enroll in Crash Course →
                  </button>
                </div>
              </div>
            )}

            {/* Course 3: Writing Masterclass */}
            {(activeCategory === "all" || activeCategory === "skill") && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between hover-elevate">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-6">
                    ✍️
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px]">1 Month</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-600 font-bold text-[11px]">Band 7.0+ Target</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-heading mb-3">
                    Writing 7.5+ Masterclass
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    রাইটিং এ বারবার ৫.৫ বা ৬.০ এ আটকে যাচ্ছেন? টাস্ক ১ এবং টাস্ক ২ এর নিখুঁত স্ট্রাকচার, কোহিশন এবং লাইন-বাই-লাইন ফিডব্যাক সেশন।
                  </p>

                  <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <span className="text-purple-600 font-bold">✔</span> <strong>১৬টি ডেডিকেটেড রাইটিং ক্লাস</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-purple-600 font-bold">✔</span> <strong>৩০+ এসে লাইন-বাই-লাইন ইভালুয়েশন</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-purple-600 font-bold">✔</span> <strong>ব্যান্ড ৯ মডেল ভোকাবুলারি ব্যাংক</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-purple-600 font-bold">✔</span> <strong>কমপ্লেক্স গ্রামার ও লিংকিং ডিভাইসেস</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-slate-400 line-through">BDT 7,000</span>
                      <div className="text-2xl font-black text-slate-900 font-heading">BDT 4,500</div>
                    </div>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 font-bold text-xs rounded-xl">Save BDT 2.5K</span>
                  </div>
                  <button 
                    onClick={() => openModal("Writing Masterclass")} 
                    className="btn-cta-blue w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                  >
                    Join Writing Lab →
                  </button>
                </div>
              </div>
            )}

            {/* Course 4: Speaking Intensive Lab */}
            {(activeCategory === "all" || activeCategory === "skill") && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between hover-elevate">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mb-6">
                    🗣️
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px]">1 Month</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[11px]">Daily 1-on-1</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-heading mb-3">
                    Speaking Confidence Lab
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    কথার জড়তা, ফ্লুয়েন্সির অভাব এবং পার্ট ২ কিউ কার্ডের ২ মিনিট টানা কথা বলার ভয় দূর করার জন্য ডেইলি ওয়ান-টু-ওয়ান স্পিকিং ড্রিল।
                  </p>

                  <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <span className="text-emerald-500 font-bold">✔</span> <strong>প্রতিদিন মেন্টরের সাথে ১-অন-১ টেস্ট</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-emerald-500 font-bold">✔</span> <strong>লেটেস্ট কিউ কার্ড প্রিডিকশন লিস্ট</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-emerald-500 font-bold">✔</span> <strong>প্রোনাউনসিয়েশন ও অ্যাকসেন্ট পলিশিং</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-emerald-500 font-bold">✔</span> <strong>ইনস্ট্যান্ট ব্যান্ড স্কোর ও অডিও রেকর্ডিং</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-slate-400 line-through">BDT 6,000</span>
                      <div className="text-2xl font-black text-slate-900 font-heading">BDT 3,999</div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-xl">Popular</span>
                  </div>
                  <button 
                    onClick={() => openModal("Speaking Intensive")} 
                    className="btn-cta-blue w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                  >
                    Join Speaking Lab →
                  </button>
                </div>
              </div>
            )}

            {/* Course 5: VIP 1-on-1 Mentorship */}
            {(activeCategory === "all" || activeCategory === "comprehensive") && (
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 border border-slate-700 shadow-xl flex flex-col justify-between hover-elevate">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-2xl mb-6 font-bold">
                    👑
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-amber-300 font-bold text-[11px]">Custom Duration</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold text-[11px]">VIP Mentorship</span>
                  </div>

                  <h3 className="text-2xl font-black text-white font-heading mb-3">
                    1-on-1 Private Mentorship
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    সরাসরি জুয়েল স্যার ও সিনিয়র মেন্টরের ব্যক্তিগত তত্ত্বাবধানে নিজস্ব ফ্লেক্সিবল টাইমে সম্পূর্ণ কাস্টমাইজড প্রিপারেশন।
                  </p>

                  <div className="space-y-3 pb-6 border-b border-white/10 text-xs text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <span className="text-amber-400 font-bold">✔</span> <strong>১০০% প্রাইভেট ওয়ান-টু-ওয়ান ক্লাস</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-amber-400 font-bold">✔</span> <strong>আপনার সুবিধাজনক দিনে ও সময়ে শিডিউল</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-amber-400 font-bold">✔</span> <strong>পার্সোনাল স্টাডি প্ল্যান ও দুর্বলতা ফোকাস</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-amber-400 font-bold">✔</span> <strong>ফ্রি ইউনিভার্সিটি অ্যাপ্লিকেশন ও SOP সাপোর্ট</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-slate-400">Custom Package</span>
                      <div className="text-2xl font-black text-amber-300 font-heading">Consultation</div>
                    </div>
                    <span className="px-3 py-1 bg-amber-400/20 text-amber-300 font-bold text-xs rounded-xl">Limited Slots</span>
                  </div>
                  <button 
                    onClick={() => openModal("1-on-1 Private Mentorship")} 
                    className="btn-cta-amber w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                  >
                    Request VIP Slot →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          COURSE COMPARISON MATRIX TABLE
          ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-blue-100 text-blue-700 mb-3">📊 Course Comparison</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Compare Features & Find Your Best Fit
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              আমাদের প্রতিটি কোর্সের সুযোগ-সুবিধা ও ব্যাপ্তি পাশাপাশি তুলনা করে আপনার জন্য সেরা কোর্সটি বেছে নিন।
            </p>
          </div>

          <div className="responsive-table-wrapper bg-white shadow-md">
            <table className="comparison-table w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <th className="p-4">Feature / Service</th>
                  <th className="p-4">Basic To Advanced</th>
                  <th className="p-4">Crash Course (40D)</th>
                  <th className="p-4">Writing Masterclass</th>
                  <th className="p-4">Speaking Intensive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Duration</td>
                  <td className="p-4">3–4 Months</td>
                  <td className="p-4">40 Days</td>
                  <td className="p-4">1 Month</td>
                  <td className="p-4">1 Month</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Live Classes</td>
                  <td className="p-4 font-bold text-rose-600">48 Classes</td>
                  <td className="p-4">24 Classes</td>
                  <td className="p-4">16 Classes</td>
                  <td className="p-4">Daily Drills</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Full Mock Tests</td>
                  <td className="p-4 font-bold text-emerald-600">20 Mock Tests</td>
                  <td className="p-4">10 Mock Tests</td>
                  <td className="p-4 text-slate-400">Writing Only</td>
                  <td className="p-4 text-slate-400">Speaking Only</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Writing Evaluation</td>
                  <td className="p-4 font-bold text-rose-600">Unlimited Line-by-Line</td>
                  <td className="p-4">10 Essays</td>
                  <td className="p-4 font-bold text-purple-600">30+ Essays</td>
                  <td className="p-4 text-slate-400">N/A</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Daily 1-on-1 Speaking</td>
                  <td className="p-4 font-bold text-emerald-600">Included (Daily)</td>
                  <td className="p-4">3 Days/Week</td>
                  <td className="p-4 text-slate-400">N/A</td>
                  <td className="p-4 font-bold text-emerald-600">Daily Dedicated</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Study Materials</td>
                  <td className="p-4 font-bold text-rose-600">Free Books + PDFs</td>
                  <td className="p-4">Curated PDFs</td>
                  <td className="p-4">Writing Formula Book</td>
                  <td className="p-4">Cue Card Bank</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Study Abroad Advisory</td>
                  <td className="p-4 font-bold text-emerald-600">Full Free Support</td>
                  <td className="p-4">Free SOP Review</td>
                  <td className="p-4 text-slate-400">N/A</td>
                  <td className="p-4 text-slate-400">N/A</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Course Fee</td>
                  <td className="p-4 font-black text-rose-600 text-base">BDT 10,500</td>
                  <td className="p-4 font-black text-slate-900 text-base">BDT 6,500</td>
                  <td className="p-4 font-black text-slate-900 text-base">BDT 4,500</td>
                  <td className="p-4 font-black text-slate-900 text-base">BDT 3,999</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Action</td>
                  <td className="p-4">
                    <button 
                      onClick={() => openModal("IELTS Basic To Advanced")} 
                      className="px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-bold hover:bg-rose-700 cursor-pointer"
                    >
                      Enroll
                    </button>
                  </td>
                  <td className="p-4">
                    <button 
                      onClick={() => openModal("IELTS Crash Course")} 
                      className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer"
                    >
                      Enroll
                    </button>
                  </td>
                  <td className="p-4">
                    <button 
                      onClick={() => openModal("Writing Masterclass")} 
                      className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer"
                    >
                      Enroll
                    </button>
                  </td>
                  <td className="p-4">
                    <button 
                      onClick={() => openModal("Speaking Intensive")} 
                      className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer"
                    >
                      Enroll
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: ALL-INCLUSIVE STUDENT LEARNING KIT & MATERIALS
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-extrabold uppercase tracking-wider border border-amber-500/30">
              <span>📦 Complete Study Kit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              What You Get With Every Course Enrollment
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              বাইরে থেকে কোনো বই বা মেটেরিয়াল কেনার প্রয়োজন নেই। সব রিসোর্স সম্পূর্ণ ফ্রি প্যাকেজের সাথে যুক্ত।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl font-bold">📚</div>
              <h4 className="text-white font-bold text-base font-heading">Cambridge 1–19 Audio & PDF</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                ক্যামব্রিজ অফিসিয়াল টেস্ট সিরিজের প্রতিটি টেস্টের হাই-কোয়ালিটি অডিও ফাইল ও অ্যানালাইসিস শিট।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-bold">✍️</div>
              <h4 className="text-white font-bold text-base font-heading">Band 9 Writing Blueprint</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                টাস্ক ১ চার্ট/ম্যাপ/গ্রাফ ও টাস্ক ২ এসে লেখার জন্য ২০+ রেডিমেড কমপ্লেক্স সেন্টেন্স টেমপ্লেট।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl font-bold">🗣️</div>
              <h4 className="text-white font-bold text-base font-heading">Speaking Cue Card Vault</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                লেটেস্ট সিজনের সম্ভাব্য ১০০+ কিউ কার্ডের আইডিয়া জেনারেশন ও ভোকাবুলারি ব্যাংক।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-bold">💻</div>
              <h4 className="text-white font-bold text-base font-heading">24/7 LMS Portal Access</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                লাইভ ক্লাসের ফুল এইচডি রেকর্ডিং ও ডিজিটাল এক্সাম সিমুলেটরে আজীবন আনলিমিটেড এক্সেস।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: SCORE GUARANTEE & RETAKE POLICY
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="feature-pill-badge bg-emerald-100 text-emerald-700">🛡️ Zero Risk Policy</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  Our 100% Score Satisfaction & Free Retake Warranty
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  আপনি যদি ক্লাসে ৯০% উপস্থিতি রাখেন এবং নির্ধারিত সব মক টেস্ট ও হোমওয়ার্ক সম্পন্ন করেন, তবুও যদি পরীক্ষায় আপনার কাঙ্ক্ষিত স্কোর না আসে — পরবর্তী ব্যাচে কোনো প্রকার অতিরিক্ত ফি ছাড়াই সম্পূর্ণ বিনামূল্যে রি-টেক করার নিশ্চয়তা দিচ্ছি আমরা।
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-700 pt-2">
                  <span className="flex items-center gap-1 text-emerald-600">✓ No Hidden Re-Admission Fee</span>
                  <span className="flex items-center gap-1 text-emerald-600">✓ Continued 1-on-1 Mentor Support</span>
                  <span className="flex items-center gap-1 text-emerald-600">✓ Full Access to New Mock Batches</span>
                </div>
              </div>

              <div className="lg:col-span-4 text-center p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-2xl font-black text-emerald-700 font-heading">Band 7.5+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Guaranteed Preparation Standard</div>
                <button 
                  onClick={() => openModal("Retake Policy Inquiry")} 
                  className="btn-cta-amber w-full mt-4 justify-center text-xs cursor-pointer"
                >
                  Learn More About Warranty →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          CALL TO ACTION BANNER
          ========================================================================== */}
      <section className="cta-banner-wrapper">
        <div className="max-w-[1320px] mx-auto px-6 text-center space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/20">
            Confused Which Course To Pick?
          </span>
          <h2 className="cta-banner-headline font-heading">
            Take A Free Diagnostic Assessment
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            আমাদের মেন্টর আপনার বর্তমান ব্যান্ড স্কোর এবং দুর্বলতা দেখে সঠিক কোর্স রিকমেন্ড করবেন। কোনো হিডেন চার্জ নেই।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("Diagnostic Test")} 
              className="btn-cta-amber cursor-pointer"
            >
              Book Free Diagnostic Test →
            </button>
            <a 
              href="https://wa.me/8801738474611" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-cta-blue"
            >
              WhatsApp Hotline: 01738-474611
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
