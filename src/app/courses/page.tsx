"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, CheckCircle2, Award, Users, 
  Target, Sparkles, BookOpen, Clock, Calendar, ArrowRight, ShieldCheck, Zap, PenTool, Mic, Globe, Building2, HelpCircle, Check, X, FileText
} from "lucide-react";
import { coursesData } from "@/data/courses";

function CoursesContent() {
  const { openModal } = useModal();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"online" | "offline">("online");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "offline") {
      setActiveTab("offline");
    } else if (tabParam === "online") {
      setActiveTab("online");
    }
  }, [searchParams]);

  const mockProgram = coursesData.find(c => c.id === "mock-program");

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
            <span className="text-rose-400">Course Programs & Fee Structure</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            Master Every IELTS Module <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-rose-300 to-amber-300">
              Online & Offline Certified Programs
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            আপনার সুবিধা অনুযায়ী লাইভ অনলাইন বা বাড্ডা ক্যাম্পাসে অফলাইন ক্লাসরুম ব্যাচে ভর্তি হোন। ১০০% ক্যামব্রিজ মেথডোলজি, লাইন-বাই-লাইন রাইটিং ইভাল্যুয়েশন ও ডেইলি স্পিকিং প্র্যাকটিস।
          </p>

          {/* ONLINE / OFFLINE TAB SWITCHER */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl max-w-md mx-auto">
            <button 
              onClick={() => setActiveTab("online")} 
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-heading text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === "online" 
                  ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-600/30 scale-102" 
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>🌐 Online Courses</span>
            </button>
            <button 
              onClick={() => setActiveTab("offline")} 
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-heading text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === "offline" 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 scale-102" 
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>🏢 Offline Courses</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          COURSE DURATION & 5-MONTH VALIDITY SUMMARY BANNER
          ========================================================================== */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-y border-slate-800 text-white py-8">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Validity Pill */}
            <div className="p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                📅
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-rose-300">Course Fee Validity</div>
                <div className="text-sm font-extrabold text-white mt-0.5">৫ মাস ভ্যালিডিটি</div>
                <div className="text-[10.5px] text-slate-300">(৩ মাস কোর্স + ২ মাস প্র্যাকটিস)</div>
              </div>
            </div>

            {/* 1/2 Modules Duration */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                ⏳
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-300">১ / ২ টি Modules Duration</div>
                <div className="text-sm font-extrabold text-white mt-0.5">১ মাস ১০ দিন</div>
                <div className="text-[10.5px] text-slate-400">ইনটেনসিভ ফোকাসড ব্যাচ</div>
              </div>
            </div>

            {/* Crash Course Duration */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                ⚡
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300">Crash Course Duration</div>
                <div className="text-sm font-extrabold text-white mt-0.5">৪০ দিন স্প্রিন্ট</div>
                <div className="text-[10.5px] text-slate-400">এক্সাম রেডি ফাস্ট-ট্র্যাক</div>
              </div>
            </div>

            {/* Full Course / Basic to Advanced Duration */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                🎯
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">Full / Basic to Adv Duration</div>
                <div className="text-sm font-extrabold text-white mt-0.5">২ মাস ১০ দিন – ৩.৫ মাস</div>
                <div className="text-[10.5px] text-slate-400">কমপ্লিট ফাউন্ডেশন ও প্র্যাকটিস</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 1: CORE COURSE PROGRAMS (ONLINE & OFFLINE TABS)
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6 space-y-12">

          {/* TAB 1: ONLINE COURSES */}
          {activeTab === "online" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <div className="feature-pill-badge bg-rose-100 text-rose-700 mb-2">🌐 Live Interactive Zoom Batches</div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    Online Course Fee Structure & Programs
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    বাসায় বসেই লাইভ ইন্টারঅ্যাক্টিভ ক্লাসে অংশ নিন, এইচডি রেকর্ডিং ও সার্বক্ষণিক মেন্টর ফিডব্যাক সহ।
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold font-heading">
                  Enrollment Validity: ৫ মাস
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                
                {/* 1. Online: Any 1 Module */}
                <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-lg relative flex flex-col justify-between hover-elevate group">
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold">
                      🎯
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px]">১ মাস ১০ দিন</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px]">Online Live</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900 font-heading">
                        যেকোন ১টি Module
                      </h3>
                      <div className="text-xs font-bold text-blue-600 mt-0.5">Reading / Writing / Speaking / Listening</div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      নির্দিষ্ট একটি মডিউলে স্কোর কম? শুধু সেই মডিউলটির উপর ফোকাসড প্রস্তুতি নিয়ে কাঙ্ক্ষিত ব্যান্ড তুলুন।
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>লাইভ ক্লাস ও স্পেসিফিক স্ট্র্যাটেজি</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>মডিউল-ওয়াইজ প্র্যাকটিস মেটেরিয়ালস</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>ফুল এইচডি ক্লাস রেকর্ডিং অ্যাক্সেস</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-rose-600">৫ মাস ভ্যালিডিটি সাপোর্ট</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="text-xs text-slate-400 line-through">৳ ৩,৫০০/-</div>
                        <div className="text-2xl font-black text-slate-900 font-heading">৳ ২,৯৯৯/-</div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-black tracking-tight font-heading shadow-2xs">
                        <span>🔥</span> 14% OFF
                      </span>
                    </div>
                    <button 
                      onClick={() => openModal("Online Course — যেকোন ১টি Module (৳ ২,৯৯৯)")} 
                      className="btn-cta-blue w-full justify-center py-3 text-xs font-extrabold cursor-pointer"
                    >
                      Enroll in 1 Module →
                    </button>
                  </div>
                </div>

                {/* 2. Online: Any 2 Modules */}
                <div className="bg-white rounded-3xl p-6 border-2 border-purple-200 shadow-lg relative flex flex-col justify-between hover-elevate group">
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-bold">
                      ✍️
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px]">১ মাস ১০ দিন</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 font-bold text-[11px]">Combo Track</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900 font-heading">
                        যেকোনো ২টি Module
                      </h3>
                      <div className="text-xs font-bold text-purple-600 mt-0.5">Writing + Speaking / Reading + Writing</div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      Writing & Speaking বা আপনার দুর্বল ২টি মডিউলের জন্য পারফেক্ট কম্বো প্যাকেজ।
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>২টি মডিউলের কমপ্লিট সল্যুশন</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>আনলিমিটেড রাইটিং ইভাল্যুয়েশন</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>ডেইলি স্পিকিং পার্টনার পেয়ারিং</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-rose-600">৫ মাস ভ্যালিডিটি সাপোর্ট</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="text-xs text-slate-400 line-through">৳ ৬,০০০/-</div>
                        <div className="text-2xl font-black text-purple-700 font-heading">৳ ৪,৫০০/-</div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 text-xs font-black tracking-tight font-heading shadow-2xs">
                        <span>🔥</span> 25% OFF
                      </span>
                    </div>
                    <button 
                      onClick={() => openModal("Online Course — যেকোনো ২টি Module (৳ ৪,৫০০)")} 
                      className="btn-cta-amber w-full justify-center py-3 text-xs font-extrabold cursor-pointer"
                    >
                      Enroll in 2 Modules →
                    </button>
                  </div>
                </div>

                {/* 3. Online: IELTS Crash Course */}
                <div className="bg-white rounded-3xl p-6 border-2 border-amber-300 shadow-xl relative flex flex-col justify-between hover-elevate group">
                  <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-bl-2xl uppercase tracking-wider">
                    FAST-TRACK
                  </div>

                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-bold">
                      ⚡
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px]">৪০ দিন স্প্রিন্ট</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold text-[11px]">Exam Ready</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900 font-heading">
                        IELTS CRASH COURSE
                      </h3>
                      <div className="text-xs font-bold text-amber-600 mt-0.5">হাই-ইল্ড ফাস্ট-ট্র্যাক প্রোগ্রাম</div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      পরীক্ষার ডেট ফিক্সড? মাত্র ৪০ দিনে হাই-ফ্রিকোয়েন্সি স্ট্র্যাটেজি ও ট্র্যাপ এলিমিনেশন আয়ত্ত করুন।
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>২৪টি ইনটেনসিভ লাইভ সেশন</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>ক্যামব্রিজ ট্র্যাপ এলিমিনেশন টেকনিক</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>ফুল লেন্থ মক টেস্ট ও স্কোর অ্যানালাইসিস</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-rose-600">৫ মাস ভ্যালিডিটি সাপোর্ট</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="text-xs text-slate-400 line-through">৳ ৮,০০০/-</div>
                        <div className="text-2xl font-black text-amber-600 font-heading">৳ ৫,৯৯৯/-</div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-xs font-black tracking-tight font-heading shadow-2xs">
                        <span>🔥</span> 25% OFF
                      </span>
                    </div>
                    <button 
                      onClick={() => openModal("Online Course — IELTS Crash Course (৳ ৫,৯৯৯)")} 
                      className="btn-cta-amber w-full justify-center py-3 text-xs font-extrabold cursor-pointer"
                    >
                      Enroll in Crash Course →
                    </button>
                  </div>
                </div>

                {/* 4. Online: IELTS Full Course */}
                <div className="bg-white rounded-3xl p-6 border-2 border-rose-500 shadow-2xl relative flex flex-col justify-between hover-elevate group">
                  <div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-black px-3.5 py-1 rounded-bl-2xl uppercase tracking-wider animate-pulse">
                    MOST POPULAR
                  </div>

                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl font-bold">
                      👑
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px]">আনুমানিক ২ মাস ১০ দিন</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-bold text-[11px]">All 4 Modules</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900 font-heading">
                        IELTS Full Course
                      </h3>
                      <div className="text-xs font-bold text-rose-600 mt-0.5">কমপ্লিট ৪ মডিউল মাস্টার প্রোগ্রাম</div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      L, R, W, S চারটি মডিউলেরই পূর্ণাঙ্গ প্রস্তুতি, আনলিমিটেড রাইটিং ফিডব্যাক ও মক টেস্ট প্যাকেজ।
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>৩৬টি পূর্ণাঙ্গ লাইভ মাস্টার ক্লাস</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>আনলিমিটেড রাইটিং লাল কালি কারেকশন</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>ডেইলি স্পিকিং পার্টনারিং ও অ্যাসেসমেন্ট</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>১৫টি ফুল মক টেস্ট + ডাউট ক্লিয়ারিং</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-rose-600">৫ মাস ভ্যালিডিটি (৩ মাস + ২ মাস প্র্যাকটিস)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="text-xs text-slate-400 line-through">৳ ১২,০০০/-</div>
                        <div className="text-2xl font-black text-rose-600 font-heading">৳ ৭,৯৯৯/-</div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-black tracking-tight font-heading shadow-2xs">
                        <span>🔥</span> 33% OFF
                      </span>
                    </div>
                    <button 
                      onClick={() => openModal("Online Course — IELTS Full Course (৳ ৭,৯৯৯)")} 
                      className="btn-cta-blue w-full justify-center py-3 text-xs font-extrabold cursor-pointer"
                    >
                      Enroll in Full Course →
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: OFFLINE COURSES (BADDA CAMPUS) */}
          {activeTab === "offline" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <div className="feature-pill-badge bg-blue-100 text-blue-700 mb-2">🏢 Badda Main Campus • Physical Classes</div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    Offline Course Fee Structure & Programs
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    আমাদের বাড্ডা ক্যাম্পাসে সরাসরি এসে ফেস-টু-ফেস ক্লাস, লাইব্রেরি ও প্র্যাকটিস ল্যাব সুবিধা নিন।
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-heading">
                  Enrollment Validity: ৫ মাস
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                
                {/* 1. Offline: Basic to Advanced IELTS */}
                <div className="bg-white rounded-3xl p-6 border-2 border-indigo-500 shadow-2xl relative flex flex-col justify-between hover-elevate group">
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-black px-3.5 py-1 rounded-bl-2xl uppercase tracking-wider">
                    FLAGSHIP FOUNDATION
                  </div>

                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl font-bold">
                      🏛️
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px]">আনুমানিক ৩.৫ মাস</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[11px]">Zero to Advanced</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900 font-heading">
                        Basic to Advanced IELTS
                      </h3>
                      <div className="text-xs font-bold text-indigo-600 mt-0.5">জিরো বেসিক থেকে ব্যান্ড ৭.৫+ পাথওয়ে</div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      গ্রামার, ভোকাবুলারি এবং ফ্লুয়েন্সির বেসিক স্ট্রং করে ৪টি মডিউলে সম্পূর্ণ আত্মবিশ্বাস অর্জনের প্রিমিয়াম ক্যাম্পাসের কোর্স।
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>৪৮টি ফেস-টু-ফেস ক্লাসরুম সেশন</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>কমপ্লেক্স গ্রামার ও সেন্টেন্স স্ট্রাকচারিং</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>ক্যাম্পাস লাইব্রেরি ও স্পিকিং ল্যাব ফ্রি</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>১৫টি ফুল পেপার/সিডি মক টেস্ট</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-rose-600">৫ মাস ভ্যালিডিটি (৩ মাস + ২ মাস প্র্যাকটিস)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="text-xs text-slate-400 line-through">৳ ২২,০০০/-</div>
                        <div className="text-2xl font-black text-indigo-700 font-heading">৳ ১৫,৯৯৯/-</div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-black tracking-tight font-heading shadow-2xs">
                        <span>🔥</span> 27% OFF
                      </span>
                    </div>
                    <button 
                      onClick={() => openModal("Offline Course — Basic to Advanced IELTS (৳ ১৫,৯৯৯)")} 
                      className="btn-cta-amber w-full justify-center py-3 text-xs font-extrabold cursor-pointer"
                    >
                      Enroll in Basic to Adv →
                    </button>
                  </div>
                </div>

                {/* 2. Offline: Only IELTS Full Course */}
                <div className="bg-white rounded-3xl p-6 border-2 border-rose-500 shadow-xl relative flex flex-col justify-between hover-elevate group">
                  <div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-black px-3.5 py-1 rounded-bl-2xl uppercase tracking-wider">
                    MOST POPULAR OFFLINE
                  </div>

                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl font-bold">
                      ⭐
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px]">আনুমানিক ২ মাস ১০ দিন</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-bold text-[11px]">4 Modules Mastery</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900 font-heading">
                        Only IELTS Full Course
                      </h3>
                      <div className="text-xs font-bold text-rose-600 mt-0.5">ক্যাম্পাস কমপ্লিট ৪ মডিউল ব্যাচ</div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      L, R, W, S ৪টি মডিউলের অফিসিয়াল ক্যামব্রিজ স্ট্র্যাটেজি, ফেস-টু-ফেস রাইটিং চেক ও ডিরেক্ট মেন্টর কেয়ার।
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>৩৬টি অন-ক্যাম্পাস হাই-ইল্ড ক্লাস</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>সরাসরি মেন্টর দিয়ে খাতা মূল্যায়ন</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>অন-স্পট স্পিকিং ইন্টারভিউ ও মক</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>রিয়েল এক্সাম এনভায়রনমেন্ট মক টেস্ট</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-rose-600">৫ মাস ভ্যালিডিটি সাপোর্ট</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="text-xs text-slate-400 line-through">৳ ১৮,০০০/-</div>
                        <div className="text-2xl font-black text-rose-600 font-heading">৳ ১২,৯৯৯/-</div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-black tracking-tight font-heading shadow-2xs">
                        <span>🔥</span> 28% OFF
                      </span>
                    </div>
                    <button 
                      onClick={() => openModal("Offline Course — Only IELTS Full Course (৳ ১২,৯৯৯)")} 
                      className="btn-cta-blue w-full justify-center py-3 text-xs font-extrabold cursor-pointer"
                    >
                      Enroll in Full Course →
                    </button>
                  </div>
                </div>

                {/* 3. Offline: Only Speaking Intensive */}
                <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 shadow-lg relative flex flex-col justify-between hover-elevate group">
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold">
                      🎙️
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px]">১ মাস ১০ দিন</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px]">Speaking Only</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900 font-heading">
                        Only Speaking Intensive
                      </h3>
                      <div className="text-xs font-bold text-emerald-600 mt-0.5">স্পিকিং ফ্লুয়েন্সি ও কিউ কার্ড ল্যাব</div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      স্পিকিংয়ের জড়তা কাটিয়ে এক্সামিনারের সামনে স্বাভাবিকভাবে ব্যান্ড ৭.৫+ রেসপন্স দেওয়ার প্র্যাকটিক্যাল কোর্স।
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>ডেইলি ১-অন-১ ফেস-টু-ফেস স্পিকিং ড্রিল</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>পার্ট ১, ২, ৩ কমপ্লিট স্ট্র্যাটেজি</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>ফোনেটিক্স ও ন্যাচারাল প্রোনাউনসিয়েশন</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-rose-600">৫ মাস ভ্যালিডিটি সাপোর্ট</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="text-xs text-slate-400 line-through">৳ ৭,০০০/-</div>
                        <div className="text-2xl font-black text-emerald-700 font-heading">৳ ৪,৯৯৯/-</div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black tracking-tight font-heading shadow-2xs">
                        <span>🔥</span> 29% OFF
                      </span>
                    </div>
                    <button 
                      onClick={() => openModal("Offline Course — Only Speaking Intensive (৳ ৪,৯৯৯)")} 
                      className="btn-cta-amber w-full justify-center py-3 text-xs font-extrabold cursor-pointer"
                    >
                      Enroll in Speaking →
                    </button>
                  </div>
                </div>

                {/* 4. Offline: Only Writing Expertizer */}
                <div className="bg-white rounded-3xl p-6 border-2 border-purple-200 shadow-lg relative flex flex-col justify-between hover-elevate group">
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-bold">
                      ✍️
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px]">১ মাস ১০ দিন</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 font-bold text-[11px]">Writing Only</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900 font-heading">
                        Only Writing Expertizer
                      </h3>
                      <div className="text-xs font-bold text-purple-600 mt-0.5">টাস্ক ১ ও ২ লাইন-বাই-লাইন ল্যাব</div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      ক্যাম্পাসে বসে সিনিয়র এক্সামিনারের সরাসরি তত্ত্বাবধানে টাস্ক ১ ও ২ লেখার টেকনিক ও ভুল সংশোধনের ক্লাস।
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>টাস্ক ১ ও ২ এর ২০+ স্ট্রাকচারাল টেমপ্লেট</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>সরাসরি লাল কালির লাইন-বাই-লাইন চেক</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>ব্যান্ড ৯ ভোকাবুলারি ও লিঙ্কার্স ব্যাংক</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-rose-600">৫ মাস ভ্যালিডিটি সাপোর্ট</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="text-xs text-slate-400 line-through">৳ ৭,০০০/-</div>
                        <div className="text-2xl font-black text-purple-700 font-heading">৳ ৪,৯৯৯/-</div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 text-xs font-black tracking-tight font-heading shadow-2xs">
                        <span>🔥</span> 29% OFF
                      </span>
                    </div>
                    <button 
                      onClick={() => openModal("Offline Course — Only Writing Expertizer (৳ ৪,৯৯৯)")} 
                      className="btn-cta-blue w-full justify-center py-3 text-xs font-extrabold cursor-pointer"
                    >
                      Enroll in Writing →
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: FAST-TRACK SPECIALIZED PROGRAMS
          ========================================================================== */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-[1320px] mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-extrabold uppercase tracking-wider border border-purple-200">
              <Zap className="w-3.5 h-3.5 text-purple-600" />
              <span>Targeted Skill Acceleration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Fast-Track Specialized Programs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              যাদের নির্দিষ্ট কোনো মডিউলে (যেমন শুধুমাত্র Writing, Speaking বা পছন্দের যেকোনো ২টি মডিউল) স্কোর বাড়ানো প্রয়োজন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Writing Excellence */}
            <div className="card-feature border-2 border-purple-100 hover:border-purple-300 p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-2xl">
                  ✍️
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold font-heading">
                  Duration: 2 Months Class + 3 Months Practice Support
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">Writing Expertizer</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  রাইটিংয়ে আটকে থাকা ৫.৫ বা ৬.০ স্কোরকে ৭.৫+ এ উন্নীত করার জন্য লাইন-বাই-লাইন সংশোধন ও ট্র্যাপ এলিমিনেশন ল্যাব।
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-bold text-purple-700">২০টি ইনটেনসিভ ক্লাস (20 Classes)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>টাস্ক ১ ও ২ এর ২০+ হাই-ব্যান্ড টেমপ্লেট</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>লাইন-বাই-লাইন লাল কালি ফিডব্যাক</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-rose-600">২ মাস ক্লাস সাপোর্ট + ৩ মাস প্র্যাকটিস সাপোর্ট</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Class + Practice Pack</div>
                  <div className="text-xl font-black text-purple-700 font-heading">৳ ৪,৯৯৯/-</div>
                </div>
                <button 
                  onClick={() => openModal("Writing Expertizer (৳ ৪,৯৯৯)")} 
                  className="btn-cta-blue text-xs py-2.5 px-4 cursor-pointer"
                >
                  Enroll Now →
                </button>
              </div>
            </div>

            {/* Speaking Sprinter */}
            <div className="card-feature border-2 border-emerald-100 hover:border-emerald-300 p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-2xl">
                  🎙️
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-heading">
                  Duration: 2 Months Class + 3 Months Practice Support
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">Speaking Intensive</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  হেজিটেশন দূর করে প্রতিদিন ওয়ান-অন-ওয়ান স্পিকিং প্র্যাকটিস ও সাবলীলভাবে কথা বলার আত্মবিশ্বাস বুটক্যাম্প।
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-bold text-emerald-700">২০টি ইনটেনসিভ সেশন (20 Classes)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>প্রতিদিন ৩০ মিনিট লাইভ মেন্টর সেশন</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>লেটেস্ট স্পিকিং কিউ-কার্ড প্রেডিকশন</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-rose-600">২ মাস ক্লাস সাপোর্ট + ৩ মাস প্র্যাকটিস সাপোর্ট</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Class + Practice Pack</div>
                  <div className="text-xl font-black text-emerald-700 font-heading">৳ ৪,৯৯৯/-</div>
                </div>
                <button 
                  onClick={() => openModal("Speaking Intensive (৳ ৪,৯৯৯)")} 
                  className="btn-cta-amber text-xs py-2.5 px-4 cursor-pointer"
                >
                  Enroll Now →
                </button>
              </div>
            </div>

            {/* Professional Writing & Speaking Mastery */}
            <div className="card-feature border-2 border-amber-200 hover:border-amber-400 p-8 flex flex-col justify-between shadow-md">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-2xl">
                  🏆
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold font-heading">
                  Duration: 2 Months Class + 3 Months Practice Support
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Professional Writing & Speaking Mastery
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Writing এবং Speaking-এ কাঙ্ক্ষিত ব্যান্ড ৭.৫+ নিশ্চিত করার জন্য সমন্বিত স্পেশালাইজড কম্বো মাস্টার প্রোগ্রাম।
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-bold text-amber-700">৩৫টি ফুল মাস্টার ক্লাস (35 Classes)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>টাস্ক ১ ও ২ লাইন-বাই-লাইন লাল কালি মূল্যায়ন</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ডেইলি স্পিকিং ড্রিল ও এক্সক্লুসিভ ক্যামব্রিজ মেথড</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-rose-600">২ মাস ক্লাস সাপোর্ট + ৩ মাস প্র্যাকটিস সাপোর্ট</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Complete Mastery Pack</div>
                  <div className="text-xl font-black text-amber-600 font-heading">৳ ৭,৯৯৯/-</div>
                </div>
                <button 
                  onClick={() => openModal("Professional Writing & Speaking Mastery (৳ ৭,৯৯৯)")} 
                  className="btn-cta-blue text-xs py-2.5 px-4 cursor-pointer"
                >
                  Enroll Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: IELTS MOCK TEST PROGRAM (REAL EXAM SIMULATION)
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider border border-emerald-500/30">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Exam Simulation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              IELTS Mock Test Program
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              আসল পরীক্ষার হলের পরিবেশ, সময় ব্যবস্থাপনা ও নির্ভুল ব্যান্ড স্কোর প্রিডিকশনের জন্য পেপার-বেসড ও কম্পিউটার-ডেলিভার্ড মক টেস্ট সিরিজ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProgram?.mockPackages?.map((pkg, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/50 transition-all flex flex-col justify-between hover-elevate space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black">
                      {pkg.count} Mock Tests
                    </span>
                    <span className="text-xs text-slate-400 line-through">{pkg.originalPrice}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">{pkg.title}</h3>
                    <div className="text-2xl font-black text-emerald-400 font-heading mt-1">{pkg.price}</div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-300 border-t border-slate-700/60 pt-4">
                    {pkg.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openModal(`Mock Package: ${pkg.title} (${pkg.price})`)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-md shadow-emerald-900/30 transition-all cursor-pointer"
                >
                  Book Mock Package →
                </button>
              </div>
            ))}
          </div>

          {/* Mock Center Highlights */}
          <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700/60 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs text-slate-300">
            <div className="flex items-center justify-center gap-3">
              <span className="text-xl">🎧</span>
              <span>Individual Wireless Headphones for Listening</span>
            </div>
            <div className="flex items-center justify-center gap-3 border-y md:border-y-0 md:border-x border-slate-700/60 py-3 md:py-0">
              <span className="text-xl">🎙️</span>
              <span>1-on-1 Recorded Speaking with Certified Examiners</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-xl">📊</span>
              <span>Detailed TR, CC, LR, GRA Band Diagnostic Sheet</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: COMPARE FEATURES & FIND YOUR BEST FIT
          ========================================================================== */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1320px] mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-extrabold uppercase tracking-wider border border-rose-200">
              <span>⚖️ Transparent Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Compare Features & Find Your Best Fit
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              আপনার বাজেট, বর্তমান ইংরেজি দক্ষতা ও টার্গেট ব্যান্ড স্কোরের সাথে মিলিয়ে সঠিক কোর্সটি বেছে নিন।
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-900 text-white font-heading">
                  <th className="p-4 sm:p-5 w-1/4">Feature & Perks</th>
                  <th className="p-4 sm:p-5 border-l border-slate-800 text-blue-400">Basic to Advanced</th>
                  <th className="p-4 sm:p-5 border-l border-slate-800 text-rose-400 bg-slate-800/60">IELTS Full Course</th>
                  <th className="p-4 sm:p-5 border-l border-slate-800 text-amber-400">Crash Course</th>
                  <th className="p-4 sm:p-5 border-l border-slate-800 text-purple-400">1 / 2 Modules Fast-Track</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 font-bold text-slate-900">কোর্সের সময়কাল (Duration)</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-blue-700">আনুমানিক ৩.৫ মাস</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-rose-700 bg-rose-50/30">আনুমানিক ২ মাস ১০ দিন</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-amber-700">৪০ দিন স্প্রিন্ট</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-purple-700">১ মাস ১০ দিন</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">ভ্যালিডিটি (Validity)</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-emerald-700">৫ মাস</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-emerald-700 bg-rose-50/30">৫ মাস</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-emerald-700">৫ মাস</td>
                  <td className="p-4 border-l border-slate-100 font-bold text-emerald-700">৫ মাস</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">কোর্স ফি (Online / Offline)</td>
                  <td className="p-4 border-l border-slate-100 font-black text-indigo-700 text-sm">৳ ১৫,৯৯৯ (Offline)</td>
                  <td className="p-4 border-l border-slate-100 font-black text-rose-700 text-sm bg-rose-50/30">৳ ৭,৯৯৯ / ৳ ১২,৯৯৯</td>
                  <td className="p-4 border-l border-slate-100 font-black text-amber-700 text-sm">৳ ৫,৯৯৯ (Online)</td>
                  <td className="p-4 border-l border-slate-100 font-black text-purple-700 text-sm">৳ ২,৯৯৯ – ৳ ৪,৯৯৯</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">মডিউল কভারেজ</td>
                  <td className="p-4 border-l border-slate-100">All 4 + Grammar</td>
                  <td className="p-4 border-l border-slate-100 bg-rose-50/30">All 4 Modules</td>
                  <td className="p-4 border-l border-slate-100">All 4 High-Yield</td>
                  <td className="p-4 border-l border-slate-100">Selected 1 or 2 Modules</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">ফুল মক টেস্ট</td>
                  <td className="p-4 border-l border-slate-100">১৫টি ফুল মক</td>
                  <td className="p-4 border-l border-slate-100 bg-rose-50/30">২০টি ফুল মক</td>
                  <td className="p-4 border-l border-slate-100">১০টি ফুল মক</td>
                  <td className="p-4 border-l border-slate-100">৬-৮টি মডিউল টেস্ট</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">রাইটিং লাল কালি খাতা চেক</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold">✓ আনলিমিটেড</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold bg-rose-50/30">✓ আনলিমিটেড</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold">✓ স্পিড রিভিউ</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold">✓ ৩০+ এসে কারেকশন</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Daily Speaking Drills</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold">✓ Daily Live</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold bg-rose-50/30">✓ Daily Live</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold">✓ Rapid Drills</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold">✓ ৩০টি ল্যাব সেশন</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Cambridge 1–19 Resources</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold">✓ ফ্রি পিডিএফ ও অডিও</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold bg-rose-50/30">✓ ফ্রি পিডিএফ ও অডিও</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold">✓ ফ্রি পিডিএফ ও অডিও</td>
                  <td className="p-4 border-l border-slate-100 text-emerald-600 font-bold">✓ স্পেশালাইজড শিট</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Action</td>
                  <td className="p-4 border-l border-slate-100">
                    <button 
                      onClick={() => openModal("Basic to Advanced IELTS (৳ ১৫,৯৯৯)")} 
                      className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 cursor-pointer w-full"
                    >
                      Enroll
                    </button>
                  </td>
                  <td className="p-4 border-l border-slate-100 bg-rose-50/30">
                    <button 
                      onClick={() => openModal("IELTS Full Course")} 
                      className="px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-bold hover:bg-rose-700 cursor-pointer w-full"
                    >
                      Enroll
                    </button>
                  </td>
                  <td className="p-4 border-l border-slate-100">
                    <button 
                      onClick={() => openModal("IELTS Crash Course (৳ ৫,৯৯৯)")} 
                      className="px-4 py-2 bg-amber-600 text-white rounded-xl text-xs font-bold hover:bg-amber-700 cursor-pointer w-full"
                    >
                      Enroll
                    </button>
                  </td>
                  <td className="p-4 border-l border-slate-100">
                    <button 
                      onClick={() => openModal("Fast-Track Programs Selection")} 
                      className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer w-full"
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
          SECTION 5: ALL-INCLUSIVE STUDENT LEARNING KIT & MATERIALS
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
                লাইভ ক্লাসের ফুল এইচডি রেকর্ডিং, ক্লাস নোটস এবং ৫ মাস এক্সটেন্ডেড সাপোর্ট আর্কাইভ।
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
            Admissions Open • 5 Months Extended Validity
          </span>
          <h2 className="cta-banner-headline font-heading">
            Not Sure Which Course Program Fits Your Target?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            আমাদের ফ্রি ডায়াগনস্টিক টেস্ট দিয়ে মাত্র ১০ মিনিটে আপনার বর্তমান ব্যান্ড লেভেল ও সঠিক কোর্স সিলেক্ট করুন।
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

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading Courses...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
