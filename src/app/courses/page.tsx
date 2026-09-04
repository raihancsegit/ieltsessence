"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, CheckCircle2, Award, Users, 
  Target, Sparkles, BookOpen, Clock, Calendar, ArrowRight, ShieldCheck, Crown, Layers, Zap, PenTool, Mic, FileText
} from "lucide-react";

export default function CoursesPage() {
  const { openModal } = useModal();
  const [activeCategory, setActiveCategory] = useState<"all" | "pathways" | "fasttrack" | "mocks">("all");

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

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
            <button 
              onClick={() => setActiveCategory("all")} 
              className={`custom-tab-btn cursor-pointer ${activeCategory === "all" ? "active" : ""}`}
            >
              All Programs
            </button>
            <button 
              onClick={() => setActiveCategory("pathways")} 
              className={`custom-tab-btn cursor-pointer ${activeCategory === "pathways" ? "active" : ""}`}
            >
              3 Core Pathways
            </button>
            <button 
              onClick={() => setActiveCategory("fasttrack")} 
              className={`custom-tab-btn cursor-pointer ${activeCategory === "fasttrack" ? "active" : ""}`}
            >
              Fast-Track Programs
            </button>
            <button 
              onClick={() => setActiveCategory("mocks")} 
              className={`custom-tab-btn cursor-pointer ${activeCategory === "mocks" ? "active" : ""}`}
            >
              Mock Test Program
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          COURSES DIRECTORY SECTION
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6 space-y-16">

          {/* ----------------------------------------------------------------------
              SECTION: 3 CORE PATHWAYS
              ---------------------------------------------------------------------- */}
          {(activeCategory === "all" || activeCategory === "pathways") && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <div className="feature-pill-badge bg-rose-100 text-rose-700 mb-2">🎓 Complete Roadmaps</div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    The 3 Core Academic Pathways
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    জিরো ফাউন্ডেশন থেকে শুরু করে এক্সাম-রেডি হওয়ার স্ট্রাকচার্ড কমপ্রিহেনসিভ কারিকুলাম।
                  </p>
                </div>
                <div className="text-xs font-bold text-slate-400">3 Comprehensive Tracks</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Pathway 1: Build Pathway */}
                <div id="build" className="bg-white rounded-3xl p-8 border-2 border-blue-500 shadow-xl relative overflow-hidden flex flex-col justify-between hover-elevate">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-extrabold px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest font-heading">
                    PATHWAY 01 • BUILD
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-6">
                      📘
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px]">3.5 – 4 Months</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 font-bold text-[11px]">Target: Band 5.0–6.5+</span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 font-heading mb-1">
                      IELTS Foundation to Advanced
                    </h3>
                    <div className="text-xs font-black text-blue-600 mb-3 uppercase tracking-wider">
                      Build Basics → Score Higher
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      ইংরেজি ব্যাকরণ, ভোকাবুলারি ও প্রাথমিক ভীতি দূর করে বেসিক থেকে প্রতিটি মডিউলের ফাউন্ডেশন তৈরির কমপ্রিহেনসিভ প্রোগ্রাম।
                    </p>

                    <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2.5">
                        <span className="text-blue-600 font-bold">✔</span> <strong>৪৮টি লাইভ ক্লাস</strong> (L, R, W, S Complete)
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-blue-600 font-bold">✔</span> <strong>কমপ্লেক্স সেন্টেন্স ও গ্রামার বিল্ডার</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-blue-600 font-bold">✔</span> <strong>আনলিমিটেড রাইটিং ইভালুয়েশন</strong> উইথ ফিডব্যাক
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-blue-600 font-bold">✔</span> <strong>ডেইলি ১-অন-১ স্পিকিং প্র্যাকটিস</strong> সেশন
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-blue-600 font-bold">✔</span> <strong>১৫টি ফুল লেংথ মক টেস্ট</strong> + সল্যুশন ক্লাস
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-[11px] text-slate-400 line-through">BDT 15,000</span>
                        <div className="text-2xl font-black text-slate-900 font-heading">BDT 10,500</div>
                      </div>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 font-bold text-xs rounded-xl">30% Off</span>
                    </div>
                    <button 
                      onClick={() => openModal("Pathway 01 — IELTS Foundation to Advanced")} 
                      className="btn-cta-blue w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                    >
                      Enroll in Pathway 01 →
                    </button>
                  </div>
                </div>

                {/* Pathway 2: Master Pathway */}
                <div id="master" className="bg-white rounded-3xl p-8 border-2 border-rose-500 shadow-xl relative overflow-hidden flex flex-col justify-between hover-elevate">
                  <div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-extrabold px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest animate-pulse-glow font-heading">
                    PATHWAY 02 • MASTER
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl mb-6">
                      🚀
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px]">2.5 – 3 Months</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600 font-bold text-[11px]">Target: Band 6.5–7.5+</span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 font-heading mb-1">
                      Complete IELTS Mastery
                    </h3>
                    <div className="text-xs font-black text-rose-600 mb-3 uppercase tracking-wider">
                      Mastering All 4 Modules
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      কানাডা, যুক্তরাজ্য ও অস্ট্রেলিয়ার বিশ্ববিদ্যালয়গুলোতে সরাসরি ভর্তির জন্য নির্ধারিত কাট-অফ স্কোর নিশ্চিত করার স্পেশাল অল-ইন-ওয়ান ট্র্যাক।
                    </p>

                    <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2.5">
                        <span className="text-rose-600 font-bold">✔</span> <strong>৩৬টি হাই-ইল্ড স্ট্র্যাটেজি ক্লাস</strong> (All 4 Modules)
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-rose-600 font-bold">✔</span> <strong>ক্যামব্রিজ ট্র্যাপ এলিমিনেশন টেকনিক</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-rose-600 font-bold">✔</span> <strong>টাস্ক ১ ও ২ লাইন-বাই-লাইন ফিডব্যাক</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-rose-600 font-bold">✔</span> <strong>২০টি ফুল লেংথ ক্যামব্রিজ মক টেস্ট</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-rose-600 font-bold">✔</span> <strong>১০০% ফ্রি ইউনিভার্সিটি শর্টলিস্টিং ও SOP সাপোর্ট</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-[11px] text-slate-400 line-through">BDT 14,000</span>
                        <div className="text-2xl font-black text-slate-900 font-heading">BDT 9,500</div>
                      </div>
                      <span className="px-3 py-1 bg-rose-50 text-rose-600 font-bold text-xs rounded-xl">Most Popular</span>
                    </div>
                    <button 
                      onClick={() => openModal("Pathway 02 — Complete IELTS Mastery")} 
                      className="btn-cta-amber w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                    >
                      Enroll in Pathway 02 →
                    </button>
                  </div>
                </div>

                {/* Pathway 3: Accelerate Pathway */}
                <div id="accelerate" className="bg-white rounded-3xl p-8 border-2 border-purple-500 shadow-xl relative overflow-hidden flex flex-col justify-between hover-elevate">
                  <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-extrabold px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest font-heading">
                    PATHWAY 03 • ACCELERATE
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-6 font-bold">
                      ⚡
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px]">40 Days</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-600 font-bold text-[11px]">Target: Band 7.0–8.0+</span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 font-heading mb-1">
                      40-Day IELTS Crash Preparation
                    </h3>
                    <div className="text-xs font-black text-purple-600 mb-3 uppercase tracking-wider">
                      Exam Ready
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      যাদের পরীক্ষার তারিখ খুব নিকটে—দ্রুততম সময়ে স্কোর বুস্ট করার হাই-ইনটেনসিটি কৌশল ও প্রিডিকশন বেসড স্প্রিন্ট কোর্স।
                    </p>

                    <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2.5">
                        <span className="text-purple-600 font-bold">✔</span> <strong>২৪টি হাই-ইল্ড স্ট্র্যাটেজি সেশন</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-purple-600 font-bold">✔</span> <strong>ক্যামব্রিজ ১৭-১৯ এর বিশেষ ট্র্যাপ ডিকোডিং</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-purple-600 font-bold">✔</span> <strong>১০টি সিডি-আইইএলটিএস ফুল মক টেস্ট</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-purple-600 font-bold">✔</span> <strong>এক্সপ্রেস রাইটিং ও স্পিকিং রিভিউ ড্রিলস</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-purple-600 font-bold">✔</span> <strong>অফিসিয়াল এক্সাম রেজিস্ট্রেশন সহায়তা</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-[11px] text-slate-400 line-through">BDT 11,000</span>
                        <div className="text-2xl font-black text-slate-900 font-heading">BDT 7,500</div>
                      </div>
                      <span className="px-3 py-1 bg-purple-50 text-purple-600 font-bold text-xs rounded-xl">Fast Track</span>
                    </div>
                    <button 
                      onClick={() => openModal("Pathway 03 — 40-Day IELTS Crash Preparation")} 
                      className="btn-cta-blue w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                    >
                      Enroll in Pathway 03 →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------
              SECTION: FAST-TRACK PROGRAMS
              ---------------------------------------------------------------------- */}
          {(activeCategory === "all" || activeCategory === "fasttrack") && (
            <div className="space-y-8 pt-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <div className="feature-pill-badge bg-purple-100 text-purple-700 mb-2">⚡ Skill Sprints</div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    Fast-Track Specialized Programs
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    রাইটিং, স্পিকিং বা যে কোনো ২টি মডিউলের রিটেক পরীক্ষার্থীদের জন্য টার্গেটেড স্পিড প্রোগ্রাম।
                  </p>
                </div>
                <div className="text-xs font-bold text-slate-400">3 Targeted Programs</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Fast-Track 1: Writing Excellence */}
                <div id="writing" className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-purple-300 transition-all flex flex-col justify-between hover-elevate">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-6">
                      ✍️
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px]">30 Days</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-600 font-bold text-[11px]">Band 7.0+ Target</span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 font-heading mb-1">
                      30-Day Writing Excellence
                    </h3>
                    <div className="text-xs font-black text-purple-600 mb-3 uppercase tracking-wider">
                      Evaluate • Correct • Improve
                    </div>

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
                      onClick={() => openModal("Fast-Track — 30-Day Writing Excellence")} 
                      className="btn-cta-blue w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                    >
                      Join Writing Excellence →
                    </button>
                  </div>
                </div>

                {/* Fast-Track 2: Speaking Sprinter */}
                <div id="speaking" className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-emerald-300 transition-all flex flex-col justify-between hover-elevate">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mb-6">
                      🗣️
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px]">30 Days</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[11px]">Daily 1-on-1</span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 font-heading mb-1">
                      30-Day Speaking Sprinter
                    </h3>
                    <div className="text-xs font-black text-emerald-600 mb-3 uppercase tracking-wider">
                      Practice • Assess • Perform
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      কথার জড়তা, ফ্লুয়েন্সির অভাব এবং পার্ট ২ কিউ কার্ডের ২ মিনিট টানা কথা বলার ভয় দূর করার জন্য দৈনিক ওয়ান-টু-ওয়ান স্পিকিং ড্রিল।
                    </p>

                    <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2.5">
                        <span className="text-emerald-500 font-bold">✔</span> <strong>প্রতিদিন মেন্টরের সাথে ১-অন-১ টেস্ট</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-emerald-500 font-bold">✔</span> <strong>লেটেস্ট কিউ কার্ড প্রেডিকশন লিস্ট</strong>
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
                        <span className="text-[11px] text-slate-400 line-through">BDT 6,500</span>
                        <div className="text-2xl font-black text-slate-900 font-heading">BDT 4,000</div>
                      </div>
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-xl">Popular</span>
                    </div>
                    <button 
                      onClick={() => openModal("Fast-Track — 30-Day Speaking Sprinter")} 
                      className="btn-cta-blue w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                    >
                      Join Speaking Sprinter →
                    </button>
                  </div>
                </div>

                {/* Fast-Track 3: Any 2 Modules Combo Pack */}
                <div id="combo" className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-amber-300 transition-all flex flex-col justify-between hover-elevate">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl mb-6">
                      🎯
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px]">35 Days</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-600 font-bold text-[11px]">Custom Pair</span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 font-heading mb-1">
                      35-Day Any 2 Modules Combo Pack
                    </h3>
                    <div className="text-xs font-black text-amber-600 mb-3 uppercase tracking-wider">
                      Retake Expert
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      রিটেক পরীক্ষার্থী বা যারা নির্দিষ্ট ২টি মডিউলে দুর্বল (যেমন Writing + Speaking বা Reading + Writing), তাদের জন্য কাস্টমাইজড কম্বো।
                    </p>

                    <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2.5">
                        <span className="text-amber-500 font-bold">✔</span> <strong>পছন্দের যে কোনো ২টি মডিউল সিলেকশন</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-amber-500 font-bold">✔</span> <strong>২০টি স্পেশালাইজড লাইভ ক্লাস সেশন</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-amber-500 font-bold">✔</span> <strong>লাইন-বাই-লাইন কারেকশন ও স্পিকিং সিমুলেশন</strong>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-amber-500 font-bold">✔</span> <strong>৬টি টার্গেটেড মডিউল-বেসড মক টেস্ট</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-[11px] text-slate-400 line-through">BDT 8,500</span>
                        <div className="text-2xl font-black text-slate-900 font-heading">BDT 5,500</div>
                      </div>
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold text-xs rounded-xl">Combo Deal</span>
                    </div>
                    <button 
                      onClick={() => openModal("Fast-Track — 35-Day Any 2 Modules Combo Pack")} 
                      className="btn-header-outline w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                    >
                      Join Any 2 Modules →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------
              SECTION: MOCK TEST PROGRAM (3, 5, 7, 10 MOCKS)
              ---------------------------------------------------------------------- */}
          {(activeCategory === "all" || activeCategory === "mocks") && (
            <div id="mock-series" className="space-y-8 pt-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <div className="feature-pill-badge bg-emerald-100 text-emerald-700 mb-2">📝 Exam Simulation</div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    IELTS Mock Test Program
                  </h2>
                  <div className="text-sm font-bold text-emerald-700 mt-1">
                    Real Exam Simulation • 3, 5, 7 & 10 Mock Packages
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-400">Computer-Delivered & Paper-Based</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 3 Mock Package */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-400 transition-all flex flex-col justify-between hover-elevate">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                      3x
                    </div>
                    <h3 className="text-xl font-black text-slate-900 font-heading mb-1">3 Mock Package</h3>
                    <p className="text-xs text-slate-500 mb-4">কুইক অ্যাসেসমেন্ট ও স্কোর ক্যালিব্রেশন</p>
                    
                    <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-4">
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> ৩টি ফুল লেংথ মক টেস্ট</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> CD / PB উভয় ফরম্যাট</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> স্কোর প্রিডিকশন রিপোর্ট</li>
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-400 line-through">BDT 2,500</div>
                    <div className="text-2xl font-black text-slate-900 font-heading mb-3">BDT 1,500</div>
                    <button 
                      onClick={() => openModal("Mock Program — 3 Mock Package")}
                      className="btn-cta-blue w-full justify-center py-2.5 text-xs font-bold cursor-pointer"
                    >
                      Book 3 Mocks →
                    </button>
                  </div>
                </div>

                {/* 5 Mock Package */}
                <div className="bg-white rounded-3xl p-6 border-2 border-emerald-500 shadow-md relative flex flex-col justify-between hover-elevate">
                  <div className="absolute -top-3 right-4 bg-emerald-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    Recommended
                  </div>
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                      5x
                    </div>
                    <h3 className="text-xl font-black text-slate-900 font-heading mb-1">5 Mock Package</h3>
                    <p className="text-xs text-slate-500 mb-4">স্ট্যান্ডার্ড প্র্যাকটিস ও ওয়ান-অন-ওয়ান রিভিউ</p>
                    
                    <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-4">
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> ৫টি ফুল লেংথ মক টেস্ট</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> রাইটিং লাইন-বাই-লাইন মার্কিং</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> স্পিকিং এক্সামিনার ড্রিল</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> ১-অন-১ রিভিউ মিটিং</li>
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-400 line-through">BDT 3,500</div>
                    <div className="text-2xl font-black text-emerald-700 font-heading mb-3">BDT 2,200</div>
                    <button 
                      onClick={() => openModal("Mock Program — 5 Mock Package")}
                      className="btn-cta-amber w-full justify-center py-2.5 text-xs font-bold cursor-pointer"
                    >
                      Book 5 Mocks →
                    </button>
                  </div>
                </div>

                {/* 7 Mock Package */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-400 transition-all flex flex-col justify-between hover-elevate">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                      7x
                    </div>
                    <h3 className="text-xl font-black text-slate-900 font-heading mb-1">7 Mock Package</h3>
                    <p className="text-xs text-slate-500 mb-4">ইন-ডেপথ ডায়াগনস্টিক অ্যানালাইসিস</p>
                    
                    <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-4">
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> ৭টি ফুল লেংথ মক টেস্ট</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> ডায়াগনস্টিক ব্যান্ড রিপোর্ট</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> মডিউল-ওয়াইজ উইকনেস ফিক্স</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> সল্যুশন ক্লাস অ্যাক্সেস</li>
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-400 line-through">BDT 4,800</div>
                    <div className="text-2xl font-black text-slate-900 font-heading mb-3">BDT 2,900</div>
                    <button 
                      onClick={() => openModal("Mock Program — 7 Mock Package")}
                      className="btn-cta-blue w-full justify-center py-2.5 text-xs font-bold cursor-pointer"
                    >
                      Book 7 Mocks →
                    </button>
                  </div>
                </div>

                {/* 10 Mock Package */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-400 transition-all flex flex-col justify-between hover-elevate">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                      10x
                    </div>
                    <h3 className="text-xl font-black text-slate-900 font-heading mb-1">10 Mock Package</h3>
                    <p className="text-xs text-slate-500 mb-4">কমপ্লিট রিয়েল এক্সাম সিমুলেশন</p>
                    
                    <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-4">
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> ১০টি ফুল লেংথ মক টেস্ট</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> আনলিমিটেড স্পিকিং অডিট</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> ব্যান্ড ৯ রাইটিং মডেলস</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> ফ্রি এক্সপার্ট স্টাডি প্ল্যান</li>
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-400 line-through">BDT 6,500</div>
                    <div className="text-2xl font-black text-slate-900 font-heading mb-3">BDT 3,800</div>
                    <button 
                      onClick={() => openModal("Mock Program — 10 Mock Package")}
                      className="btn-cta-blue w-full justify-center py-2.5 text-xs font-bold cursor-pointer"
                    >
                      Book 10 Mocks →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

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

          <div className="responsive-table-wrapper bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <th className="p-4 bg-slate-950 text-emerald-400">Feature / Service</th>
                  <th className="p-4 border-l border-slate-800">Pathway 01 (Build)</th>
                  <th className="p-4 border-l border-slate-800 bg-rose-950/80 text-rose-300">Pathway 02 (Master)</th>
                  <th className="p-4 border-l border-slate-800">Pathway 03 (Accelerate)</th>
                  <th className="p-4 border-l border-slate-800">Fast-Track / Skills</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Duration</td>
                  <td className="p-4 border-l border-slate-100">3.5 – 4 Months</td>
                  <td className="p-4 border-l border-slate-100 bg-rose-50/30 font-semibold">2.5 – 3 Months</td>
                  <td className="p-4 border-l border-slate-100">40 Days</td>
                  <td className="p-4 border-l border-slate-100">30 – 35 Days</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Live Classes</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-blue-600">48 Classes</td>
                  <td className="p-4 border-l border-slate-100 bg-rose-50/30 font-bold text-rose-600">36 Classes</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-purple-600">24 Classes</td>
                  <td className="p-4 border-l border-slate-100">16 – 30 Labs</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Full Mock Tests</td>
                  <td className="p-4 border-l border-slate-100">15 Mock Tests</td>
                  <td className="p-4 border-l border-slate-100 bg-rose-50/30 font-bold text-emerald-600">20 Mock Tests</td>
                  <td className="p-4 border-l border-slate-100">10 Mock Tests</td>
                  <td className="p-4 border-l border-slate-100">6 – 8 Skill Mocks</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Writing Evaluation</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-blue-600">Unlimited Line-by-Line</td>
                  <td className="p-4 border-l border-slate-100 bg-rose-50/30 font-bold text-rose-600">Unlimited + Band 9 Model</td>
                  <td className="p-4 border-l border-slate-100">Fast Templates + Audit</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-purple-600">30+ Essays</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Daily 1-on-1 Speaking</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-emerald-600">Daily Included</td>
                  <td className="p-4 border-l border-slate-100 bg-rose-50/30 font-bold text-emerald-600">Daily Examiner Drill</td>
                  <td className="p-4 border-l border-slate-100">Exam Simulation</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-emerald-600">Daily Partner Drill</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Study Materials</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-slate-800">Free Books + Complete LMS</td>
                  <td className="p-4 border-l border-slate-100 bg-rose-50/30 font-bold text-slate-800">Complete Master Pack</td>
                  <td className="p-4 border-l border-slate-100">Crash Cheat-Sheets</td>
                  <td className="p-4 border-l border-slate-100">Specialized Books</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Study Abroad Advisory</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-emerald-600">Full Free Support</td>
                  <td className="p-4 border-l border-slate-100 bg-rose-50/30 font-bold text-emerald-600">Full Free Support + SOP</td>
                  <td className="p-4 border-l border-slate-100">SOP Review</td>
                  <td className="p-4 border-l border-slate-100 text-slate-400">Optional</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50/80">
                  <td className="p-4 font-bold text-slate-900">Course Fee</td>
                  <td className="p-4 border-l border-slate-200 font-black text-blue-600 text-base">BDT 10,500</td>
                  <td className="p-4 border-l border-slate-200 bg-rose-100/60 font-black text-rose-600 text-base">BDT 9,500</td>
                  <td className="p-4 border-l border-slate-200 font-black text-purple-600 text-base">BDT 7,500</td>
                  <td className="p-4 border-l border-slate-200 font-black text-slate-900 text-base">From BDT 4,000</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Action</td>
                  <td className="p-4 border-l border-slate-100">
                    <button 
                      onClick={() => openModal("Pathway 01 — IELTS Foundation to Advanced")} 
                      className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 cursor-pointer"
                    >
                      Enroll
                    </button>
                  </td>
                  <td className="p-4 border-l border-slate-100 bg-rose-50/30">
                    <button 
                      onClick={() => openModal("Pathway 02 — Complete IELTS Mastery")} 
                      className="px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-bold hover:bg-rose-700 cursor-pointer"
                    >
                      Enroll
                    </button>
                  </td>
                  <td className="p-4 border-l border-slate-100">
                    <button 
                      onClick={() => openModal("Pathway 03 — 40-Day IELTS Crash Preparation")} 
                      className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 cursor-pointer"
                    >
                      Enroll
                    </button>
                  </td>
                  <td className="p-4 border-l border-slate-100">
                    <button 
                      onClick={() => openModal("Fast-Track Programs Selection")} 
                      className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer"
                    >
                      Choose
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
                লাইভ ক্লাসের ফুল এইচডি রেকর্ডিং, ক্লাস নোটস এবং আজীবন লেকচার আর্কাইভ সুবিধা।
              </p>
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
            Admissions Open • Limited Seats Per Batch
          </span>
          <h2 className="cta-banner-headline font-heading">
            Not Sure Which Pathway Is Right For You?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            আমাদের ফ্রি ডায়াগনস্টিক টেস্ট দিয়ে মাত্র ১০ মিনিটে আপনার বর্তমান ব্যান্ড লেভেল ও উপযুক্ত পাথওয়ে জেনে নিন।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("Free Assessment from Courses")} 
              className="btn-cta-amber cursor-pointer"
            >
              Book Free Assessment Test →
            </button>
            <a 
              href="https://wa.me/8801738474611" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-cta-blue"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
