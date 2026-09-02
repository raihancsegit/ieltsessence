"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, Award, ShieldCheck, 
  HelpCircle, ArrowRight, Zap, Clock, Target, CheckCircle2
} from "lucide-react";

export default function CourseCrashCoursePage() {
  const { openModal } = useModal();

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
            <Link href="/courses">Courses</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-rose-400">Crash Course</span>
          </div>

          <span className="inline-block px-4 py-1 bg-amber-500 text-slate-900 rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 font-heading">
            ⚡ 40 Days Fast Track • Score Booster
          </span>

          <h1 className="inner-hero-title font-heading">
            IELTS Crash Course (40 Days Fast Track) <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-sky-300">
              High-Yield Exam Strategy & Rapid Score Sprint
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            যাদের পরীক্ষার তারিখ খুব কাছাকাছি অথবা যাদের বেসিক ক্লিয়ার কিন্তু কাঙ্ক্ষিত স্কোরে পৌঁছাতে টেকনিক ও মক টেস্ট প্র্যাকটিস প্রয়োজন, তাদের জন্য পারফেক্ট প্রোগ্রাম।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => openModal("Crash Course")} 
              className="btn-cta-amber cursor-pointer"
            >
              Join Fast Track Batch →
            </button>
            <a 
              href="https://wa.me/8801738474611?text=Hi%2C%20I%20want%20to%20know%20about%20IELTS%20Crash%20Course" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-cta-blue"
            >
              💬 WhatsApp Admission Desk
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          CRASH COURSE DETAILS
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="feature-pill-badge bg-rose-100 text-rose-700">⚡ Intensive Roadmap</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Maximize Your Score in Just 40 Days
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                অতিরিক্ত তাত্ত্বিক আলোচনার বদলে সরাসরি পরীক্ষার প্রশ্ন সমাধান, ট্র্যাপ অপশন এলিমিনেশন, টাইম ম্যানেজমেন্ট ফর্মুলা এবং দ্রুত লেখার কাঠামো আয়ত্ত করার ওপর বিশেষ জোর দেওয়া হয়।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-rose-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">২৪টি লাইভ হাই-ইল্ড ক্লাস</h4>
                    <p className="text-xs text-slate-500 mt-0.5">ক্যামব্রিজ অথেনটিক কোয়েশ্চেন সলভিং</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-rose-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">১০টি ফুল Mock Tests</h4>
                    <p className="text-xs text-slate-500 mt-0.5">টাইমড মক উইথ ইনস্ট্যান্ট স্কোর অ্যানালাইসিস</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-rose-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Writing Task 1 & 2 Hacks</h4>
                    <p className="text-xs text-slate-500 mt-0.5">ব্যান্ড ৯ সেন্টেন্স ফরম্যাট ও দ্রুত লেখার ট্রিকস</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-rose-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Speaking Cue Card ডিকোডার</h4>
                    <p className="text-xs text-slate-500 mt-0.5">রিসেন্ট এক্সাম টপিক ও প্রেডিকশন সেশন</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border-2 border-amber-500 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-extrabold text-amber-600 uppercase tracking-wider font-heading">Fast Track Batch</span>
                  <h3 className="text-2xl font-black text-slate-900 font-heading mt-1">40-Day Fast Track</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 line-through font-semibold">BDT 10,000</div>
                  <div className="text-3xl font-black text-slate-900 font-heading">৳ ৬,৯৯৯</div>
                </div>
              </div>

              <ul className="space-y-3 py-6 text-xs text-slate-700">
                <li className="flex items-center gap-2"><span>📅</span> <strong>মেয়াদ:</strong> ৪০ দিন (সপ্তাহে ৪–৫ দিন ক্লাস ও মক)</li>
                <li className="flex items-center gap-2"><span>👥</span> <strong>ব্যাচ সাইজ:</strong> সর্বোচ্চ ১৫ জন</li>
                <li className="flex items-center gap-2"><span>📝</span> <strong>মক টেস্ট:</strong> ১০টি রিয়েল এক্সাম স্ট্যান্ডার্ড মক</li>
                <li className="flex items-center gap-2"><span>🚀</span> <strong>টার্গেট:</strong> দ্রুততম সময়ে ০.৫–১.০ ব্যান্ড বুস্ট</li>
              </ul>

              <button 
                onClick={() => openModal("Crash Course")} 
                className="btn-cta-amber w-full py-4 text-base font-extrabold justify-center cursor-pointer"
              >
                Confirm Your Seat Today →
              </button>
              <div className="text-center text-[11px] text-slate-400 mt-3">
                ⚡ সিট সীমিত • দ্রুত আসন পূরণ হচ্ছে
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: 40-DAY HIGH-IMPACT SPRINT SCHEDULE
          ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="feature-pill-badge bg-rose-100 text-rose-700">⚡ Fast Track Roadmap</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              The 40-Day Sprint Curriculum
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              একটি দিনও যাতে নষ্ট না হয় — প্রতিটি দিনের জন্য টাইমড টাস্ক ও এক্সামিনার ট্যাকটিক্স।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-elevate">
              <span className="px-3.5 py-1 bg-amber-100 text-amber-800 font-black text-xs rounded-full font-heading">Phase 1 (Day 01–12)</span>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Trap Elimination & Shortcuts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ক্যামব্রিজ লিসেনিংয়ের স্পেলিং ট্র্যাপ ও রিডিং ট্রু/ফলস/নট গিভেন এলিমিনেশন টেকনিক ডিকোডিং।
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-200">
                <li className="text-emerald-600 font-semibold">✓ 2 Full Diagnostic Assessments</li>
                <li className="text-emerald-600 font-semibold">✓ 15-Minute Skimming Mastery</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-elevate">
              <span className="px-3.5 py-1 bg-rose-100 text-rose-800 font-black text-xs rounded-full font-heading">Phase 2 (Day 13–28)</span>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Writing & Speaking Speed Labs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                টাস্ক ১ ও টাস্ক ২ রেডিমেড আর্কিটেকচার মুখস্থ ছাড়া প্রয়োগ এবং প্রতিদিন ওয়ান-অন-ওয়ান কিউ কার্ড সেশন।
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-200">
                <li className="text-emerald-600 font-semibold">✓ 15 Line-by-Line Essay Reviews</li>
                <li className="text-emerald-600 font-semibold">✓ Daily 20-min Speaking Interviews</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-elevate">
              <span className="px-3.5 py-1 bg-emerald-100 text-emerald-800 font-black text-xs rounded-full font-heading">Phase 3 (Day 29–40)</span>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Back-to-Back Grand Mocks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                টানা ১০টি ফুল-লেংথ মক টেস্ট এবং পরীক্ষার হলে টাইম ম্যানেজমেন্ট ও নার্ভাসনেস নিয়ন্ত্রণের চূড়ান্ত প্রস্তুতি।
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-200">
                <li className="text-emerald-600 font-semibold">✓ 10 Grand Mocks With Official Scoring</li>
                <li className="text-emerald-600 font-semibold">✓ Exam Day Strategy Sheet Handover</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: TARGET AUDIENCE & ELIGIBILITY CHECK
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-extrabold uppercase tracking-wider border border-rose-500/30">
              <span>🎯 Is This Right For You?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Who Is The Fast Track Crash Course For?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              আপনার প্রোফাইল নিচের যেকোনো একটির সাথে মিললে এই কোর্সটি আপনার জন্য আদর্শ।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-lg">⏰</div>
              <h4 className="text-white font-bold text-base font-heading">Test Booked in Next 1–2 Months</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                যাদের পরীক্ষার ডেট কনফার্ম কিন্তু চূড়ান্ত রিভিশন ও স্কোরে ০.৫–১.০ ব্যান্ড জাম্প প্রয়োজন।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">🔄</div>
              <h4 className="text-white font-bold text-base font-heading">Stuck at Band 6.0/6.5</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                আগে পরীক্ষা দিয়েছেন কিন্তু কোনো নির্দিষ্ট মডিউলে আটকে আছেন এবং ৭.০+ এ পৌঁছাতে চান।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">💼</div>
              <h4 className="text-white font-bold text-base font-heading">Job Holders & Busy Students</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                অতিরিক্ত সময় নষ্ট না করে স্ট্র্যাটেজিক নাইট ও উইকএন্ড সেশনের মাধ্যমে সর্বোচ্চ আউটপুট প্রত্যাশী।
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
            Exam Coming Soon?
          </span>
          <h2 className="cta-banner-headline font-heading">
            Boost Your Score Fast With Proven Hacks
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            আর কোনো দ্বিধা নয়, মাত্র ৪০ দিনের নিবিড় অনুশীলনে নিজের সর্বোচ্চ স্কোর নিশ্চিত করুন।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("Crash Course")} 
              className="btn-cta-amber cursor-pointer"
            >
              Claim Your Admission Seat →
            </button>
            <Link href="/courses" className="btn-cta-blue">
              View All Courses →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
