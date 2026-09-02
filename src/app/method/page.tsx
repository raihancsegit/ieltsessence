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
          DETAILED 6-STEP ROADMAP
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-purple-100 text-purple-700 mb-3">🚀 Systematic Score Acceleration</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              How We Transform Your English in 6 Steps
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              অগোছালো প্রস্তুতির বদলে প্রতিটি ধাপ সুনির্দিষ্ট লক্ষ্যে পরিচালিত।
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/20 font-heading">
                01
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-extrabold uppercase">Diagnostic & Baseline</span>
                  <span className="text-xs text-slate-400 font-bold">• Day 1</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Diagnostic Benchmark Assessment</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  কোর্সের প্রথম দিনেই অফিসিয়াল ক্যামব্রিজ টেস্টের মাধ্যমে ৪টি মডিউলের (Listening, Reading, Writing, Speaking) আলাদা আলাদা লেভেল নির্ধারণ করা হয়। আপনার বর্তমান শক্তি ও ঘাটতি বিশ্লেষণ করে একটি পার্সোনালাইজড স্টাডি টার্গেট তৈরি করা হয়।
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 font-heading">
                02
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-extrabold uppercase">Foundation Booster</span>
                  <span className="text-xs text-slate-400 font-bold">• Week 1–2</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Core Grammar, Collocations & Lexical Building</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  সঠিক কমপ্লেক্স ও কম্পাউন্ড সেন্টেন্স তৈরি, কমন ব্যাকরণগত ভুল দূরীকরণ এবং টপিক-ওয়াইজ একাডেমিক ভোকাবুলারি (Environment, Technology, Education, Society) আত্মস্থ করার নিবিড় সেশন।
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20 font-heading">
                03
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-extrabold uppercase">Tactical Mastery</span>
                  <span className="text-xs text-slate-400 font-bold">• Week 3–7</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Module-Wise Cambridge Trap Elimination Lab</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  রিডিংয়ে Heading Matching ও True/False/Not Given এর কী-ওয়ার্ড ট্র্যাকিং টেকনিক, লিসেনিংয়ে ডিস্ট্র্যাক্টর এলিমিনেশন এবং রাইটিং টাস্ক ১ ও ২-এর জন্য ব্যান্ড ৯ স্ট্রাকচারাল টেমপ্লেট ড্রিলিং।
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20 font-heading">
                04
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-extrabold uppercase">Fluency Lab</span>
                  <span className="text-xs text-slate-400 font-bold">• Daily Practice</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Daily 1-on-1 Speaking Simulation & Voice Auditing</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  স্পিকিং পার্ট ১ এর কনফিডেন্ট স্টার্ট, পার্ট ২ কিউ কার্ডে Past-Present-Future এক্সটেনশন মেথড এবং পার্ট ৩ তে ডিপ অ্যানালিটিক্যাল আর্গুমেন্ট প্রেজেন্টেশনের প্রতিদিনের ওয়ান-অন-ওয়ান সিমুলেশন।
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20 font-heading">
                05
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-extrabold uppercase">Exam Conditioning</span>
                  <span className="text-xs text-slate-400 font-bold">• 20 Full Mocks</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Full-Length Real Mock Test Series with Diagnostic Review</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  আইডিপি ও ব্রিটিশ কাউন্সিলের টাইম-স্ট্রেস এনভায়রনমেন্টে ২০টি পূর্ণাঙ্গ মক টেস্ট। প্রতিটি মকের পর মেন্টরের সাথে বসে ভুল চিহ্নিতকরণ ও তাৎক্ষণিক সংশোধন।
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row gap-6 items-start hover-elevate">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20 font-heading">
                06
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-xs font-extrabold uppercase">Global Dream</span>
                  <span className="text-xs text-slate-400 font-bold">• Visa & Admission</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Study Abroad Pathway & Visa Interview Coaching</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ব্যান্ড স্কোর অর্জনের পর কানাডা, ইউকে, অস্ট্রেলিয়া ও ইউরোপের সেরা বিশ্ববিদ্যালয় বাছাই, পার্সোনাল স্টেটমেন্ট (SOP) রাইটিং সাপোর্ট ও ভিসা ইন্টারভিউ প্রিপারেশন।
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
