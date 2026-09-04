"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ShieldCheck, CheckCircle2, ChevronRight, Award, Users, 
  Target, Sparkles, BookOpen, Clock, Calendar, ArrowRight, Layers
} from "lucide-react";

export default function MethodPage() {
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
            <Link href="/about">About</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-rose-400">The ESSENCE Method</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            The 6-Step ESSENCE Score System <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-300 to-amber-300">
              From Foundation to Band 8.0+
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            দীর্ঘদিনের গবেষণায় প্রমাণিত একটি বৈজ্ঞানিক ফ্রেমওয়ার্ক যা শিক্ষার্থীদের রিডিং, লিসেনিং, রাইটিং ও স্পিকিংয়ে প্রতিটি ব্যান্ড লেভেল অতিক্রম করতে সাহায্য করে।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => openModal("Method Roadmap Consultation")} 
              className="btn-cta-amber cursor-pointer"
            >
              Get Your Custom Roadmap →
            </button>
            <Link href="/courses" className="btn-cta-blue">
              View Course Details ↓
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          DETAILED 6-STEP ROADMAP (From PDF Pages 6-7)
          ========================================================================== */}
      <section id="pipeline" className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-purple-100 text-purple-700 mb-3">🚀 6-Stage Proprietary Pipeline</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              The 6-Stage System: Assess to Perform
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              অগোছালো প্রস্তুতির বদলে প্রতিটি ধাপ সুনির্দিষ্ট ইঞ্জিনিয়ারিং রোডম্যাপে পরিচালিত।
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Stage 1: Assess */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/20 font-heading">
                01
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-extrabold uppercase">Stage 01 • Assess</span>
                  <span className="text-xs text-slate-400 font-bold">• Day 1 Diagnostic</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Stage 01: Assess — Diagnostic Benchmark</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  কোর্সের প্রথম দিনেই অফিসিয়াল ক্যামব্রিজ টেস্টের মাধ্যমে ৪টি মডিউলের (Listening, Reading, Writing, Speaking) আলাদা আলাদা লেভেল নির্ধারণ করা হয়। আপনার বর্তমান শক্তি ও ঘাটতি বিশ্লেষণ করে একটি পার্সোনালাইজড স্টাডি টার্গেট তৈরি করা হয়।
                </p>
              </div>
            </div>

            {/* Stage 2: Strategize */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 font-heading">
                02
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-extrabold uppercase">Stage 02 • Strategize</span>
                  <span className="text-xs text-slate-400 font-bold">• Tailored Blueprint</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Stage 02: Strategize — Custom Action Blueprint</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  আপনার ডেডলাইন ও টার্গেট ব্যান্ডের ওপর ভিত্তি করে ৩০ দিন থেকে ৩.৫ মাসের নিখুঁত টাইমলাইন নির্ধারণ। প্রতিটি মডিউলে দুর্বলতা দূরীকরণের কৌশল ও রিসোর্স ম্যাপিং।
                </p>
              </div>
            </div>

            {/* Stage 3: Practice */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20 font-heading">
                03
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-extrabold uppercase">Stage 03 • Practice</span>
                  <span className="text-xs text-slate-400 font-bold">• Cambridge Standards</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Stage 03: Practice — Cambridge Trap Elimination</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ১০০% অফিসিয়াল স্ট্যান্ডার্ড উপাদান দিয়ে অনুশীলন। রিডিংয়ে Heading Matching ও True/False/Not Given কী-ওয়ার্ড ট্র্যাকিং, লিসেনিংয়ে ডিস্ট্র্যাক্টর এলিমিনেশন ড্রিলিং।
                </p>
              </div>
            </div>

            {/* Stage 4: Evaluate */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20 font-heading">
                04
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-extrabold uppercase">Stage 04 • Evaluate</span>
                  <span className="text-xs text-slate-400 font-bold">• Line-by-Line Feedback</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Stage 04: Evaluate — Criterion-Level Line Feedback</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  আনুমানিক স্কোর নয়, রাইটিংয়ে টাস্ক রেসপন্স (TR), কোহেরেন্স (CC), লেক্সিকাল রিসোর্স (LR) ও গ্রামাটিক্যাল রেঞ্জ (GRA)-এর পূর্ণ ব্রেকডাউনসহ লাইন-বাই-লাইন মূল্যায়ন ও স্পিকিং অডিও অডিট।
                </p>
              </div>
            </div>

            {/* Stage 5: Improve */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20 font-heading">
                05
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-extrabold uppercase">Stage 05 • Improve</span>
                  <span className="text-xs text-slate-400 font-bold">• Correction Loops</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Stage 05: Improve — Targeted Weakness Elimination</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  বারবার একই ভুল এড়াতে টার্গেটেড কারেকশন লুপ। চিহ্নিত ভুলের ওপর ভিত্তি করে ব্যক্তিগত রি-রাইটিং অ্যাসাইনমেন্ট ও ১-অন-১ মেন্টরিং সেশন।
                </p>
              </div>
            </div>

            {/* Stage 6: Perform */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20 font-heading">
                06
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-xs font-extrabold uppercase">Stage 06 • Perform</span>
                  <span className="text-xs text-slate-400 font-bold">• Exam Day Simulation</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Stage 06: Perform — Full Simulation Mock Tests</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  আইডিপি ও ব্রিটিশ কাউন্সিলের টাইম-স্ট্রেস এনভায়রনমেন্টে ২০টি পূর্ণাঙ্গ মক টেস্টের মাধ্যমে স্ট্যামিনা ও কনফিডেন্স বিল্ডআপ। কাঙ্ক্ষিত স্কোর অর্জন এবং ভিসা ও স্কলারশিপ প্রিপারেশন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: WEEKLY ROUTINE & MICRO-MILESTONE TIMELINE
          ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="feature-pill-badge bg-rose-100 text-rose-700">🗓️ Daily Study Protocol</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Structured Weekly Routine That Guarantees Progress
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              কোন দিন কী করবেন, কতটুকু পড়বেন — প্রতিটি দিনের একটি সুনির্দিষ্ট রুটিন থাকে যাতে সময়ের অপচয় না হয়।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-elevate">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-rose-100 text-rose-700 font-extrabold text-xs rounded-full">Mon • Wed • Fri</span>
                <span className="text-xs text-slate-400 font-bold">2.0 Hours</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Core Strategy Lectures</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                জুয়েল স্যারের সাথে লাইভ স্ট্র্যাটেজি ডিকোড। ক্যামব্রিজ প্যাসেজ স্ক্যানিং, রাইটিং টাস্ক ২ আর্কিটেকচার এবং অডিও ট্র্যাপ অ্যানালাইসিস।
              </p>
              <div className="text-xs text-rose-600 font-bold pt-2">🎯 Output: Master 2 Question Types Every Session</div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-elevate">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 font-extrabold text-xs rounded-full">Tue • Thu • Sat</span>
                <span className="text-xs text-slate-400 font-bold">1.5 Hours</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Daily Speaking & Writing Lab</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                স্পিকিং পার্টনারের সাথে ওয়ান-অন-ওয়ান কিউ কার্ড মক এবং রাইটিং টাস্ক সাবমিশন। মেন্টর থেকে তাৎক্ষণিক কারেকশন শিট গ্রহণ।
              </p>
              <div className="text-xs text-blue-600 font-bold pt-2">🎯 Output: 1 Task Written + 20-min Speaking Recorded</div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-elevate">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-extrabold text-xs rounded-full">Sunday Special</span>
                <span className="text-xs text-slate-400 font-bold">3.0 Hours</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Full Mock & Grand Review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                আসল পরীক্ষার মতো টাইমড মক টেস্ট। পরীক্ষা শেষে প্রতিটি ভুল প্রশ্নের ডাউট ক্লিয়ারিং ডিসকাশন ও পার্সোনালাইজড রেজাল্ট।
              </p>
              <div className="text-xs text-emerald-600 font-bold pt-2">🎯 Output: Real Band Scorecard + Remediation Plan</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: DIAGNOSTIC ERROR REMEDIATION MATRIX
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-extrabold uppercase tracking-wider border border-blue-500/30">
              <span>🔬 Error Pathology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              How We Identify & Eliminate Repeating Mistakes
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              অধিকাংশ শিক্ষার্থী মাসের পর মাস একই ভুলের পুনরাবৃত্তি করে। আমাদের ৪-পিলার এরর ম্যাট্রিক্স এটি সমূলে দূর করে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center">TR</div>
              <h4 className="font-extrabold text-white text-base font-heading">Task Response Flaws</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                প্রশ্ন একরকম বোঝা কিন্তু উত্তর অন্যরকম লেখা। আমরা শেখাই Prompt Deconstruction Formula।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center">CC</div>
              <h4 className="font-extrabold text-white text-base font-heading">Coherence & Cohesion</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                অপ্রয়োজনীয় লিঙ্কারস দিয়ে লেখা জটিল করা বাদ দিয়ে ন্যাচারাল প্যারাগ্রাফ ট্রানজিশন শেখানো হয়।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center">LR</div>
              <h4 className="font-extrabold text-white text-base font-heading">Lexical Precision</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                অযথা জটিল শব্দ না বসিয়ে একাডেমিক কলকেশন ও কন্টেক্সচুয়াল সিনোনিম ব্যবহারে পারদর্শী করে তোলা।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center">GRA</div>
              <h4 className="font-extrabold text-white text-base font-heading">Grammar & Accuracy</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                কমপ্লেক্স ও কম্পাউন্ড সেন্টেন্স স্ট্রাকচার নির্ভুলভাবে লেখার ৭টি মাস্টার টেমপ্লেট ড্রিল।
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
            Join The System
          </span>
          <h2 className="cta-banner-headline font-heading">
            Start Your 6-Step Score Journey Today
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            ফ্রি ডায়াগনস্টিক টেস্ট দিয়ে আপনার স্টেপ ১ শুরু করুন।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("Method Page CTA")} 
              className="btn-cta-amber cursor-pointer"
            >
              Claim Free Diagnostic Seat →
            </button>
            <Link href="/courses" className="btn-cta-blue">
              View Basic To Advanced Course →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
