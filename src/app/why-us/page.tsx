"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ShieldCheck, CheckCircle2, ChevronRight, Award, Users, 
  Target, Sparkles, BookOpen, Laptop, Headphones, Library, ArrowRight
} from "lucide-react";

export default function WhyUsPage() {
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
            <span className="text-rose-400">Why IELTS ESSENCE</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            Why 2,500+ Ambitious Students <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-sky-300">
              Choose IELTS ESSENCE
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            গতানুগতিক কোচিংয়ের ১০০ জনের ব্যাচে সময় নষ্ট না করে, ব্যক্তিগত মেন্টরশিপ ও বৈজ্ঞানিক মেথডোলজির মাধ্যমে প্রথমবারেই কাঙ্ক্ষিত ব্যান্ড স্কোর নিশ্চিত করুন।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => openModal("Why Us Assessment")} 
              className="btn-cta-amber cursor-pointer"
            >
              Book Free Profile Assessment →
            </button>
            <Link href="/method" className="btn-cta-blue">
              See The 6-Step Method ↓
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          COMPARISON SECTION: TRADITIONAL VS ESSENCE
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-rose-100 text-rose-700 mb-3">⚖️ The Honest Comparison</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Traditional Coaching vs. IELTS ESSENCE
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              কেন আমাদের শিক্ষার্থীরা মাত্র ৩ মাসে ব্যান্ড ৫.৫ থেকে ব্যান্ড ৭.৫+ এ উন্নীত হতে পারে? দেখুন স্পষ্ট পার্থক্য।
            </p>
          </div>

          {/* Comparison Table Responsive Wrapper */}
          <div className="responsive-table-wrapper bg-white shadow-xl">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-900 text-white">
                  <th className="p-5 font-extrabold text-sm uppercase tracking-wider w-1/3">বৈশিষ্ট্য (Features)</th>
                  <th className="p-5 font-extrabold text-sm uppercase tracking-wider w-1/3 bg-slate-800 text-slate-300">গতানুগতিক কোচিং সেন্টার</th>
                  <th className="p-5 font-extrabold text-sm uppercase tracking-wider w-1/3 bg-rose-600 text-white">IELTS ESSENCE স্ট্যান্ডার্ড</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 font-heading">ব্যাচ সাইজ ও পারসোনাল কেয়ার</td>
                  <td className="p-4 text-slate-500">১০০–১৫০ জনের বড় ব্যাচ, ব্যক্তিগত সমস্যা শোনার সুযোগ নেই</td>
                  <td className="p-4 font-bold text-rose-600 bg-rose-50/50">সর্বোচ্চ ১৫–২০ জন (প্রতিটি শিক্ষার্থীকে ওয়ান-অন-ওয়ান মনিটরিং)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 font-heading">Writing Evaluation মেথড</td>
                  <td className="p-4 text-slate-500">শুধুমাত্র আনুমানিক ব্যান্ড স্কোর বসিয়ে দেওয়া হয়, ভুল ধরিয়ে দেওয়া হয় না</td>
                  <td className="p-4 font-bold text-emerald-600 bg-rose-50/50">Line-by-Line ভুল মার্কিং, TR/CC/LR/GRA ব্রেকডাউন ও Band 9 মডেল অল্টারনেটিভ প্রদান</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 font-heading">Speaking প্র্যাকটিস সেশন</td>
                  <td className="p-4 text-slate-500">সপ্তাহে ১ দিন বা শুধু গ্রুপে দায়সারা আড্ডা</td>
                  <td className="p-4 font-bold text-blue-600 bg-rose-50/50">প্রতিদিন ১-অন-১ স্পিকিং পার্টনার ড্রিল ও রিয়েল এক্সামিনার টেস্ট সিমুলেশন</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 font-heading">মেন্টর কোয়ালিফিকেশন</td>
                  <td className="p-4 text-slate-500">অনেক সেন্টারে অনভিজ্ঞ ট্রেইনার বা অস্পষ্ট ব্যাকগ্রাউন্ড</td>
                  <td className="p-4 font-bold text-purple-600 bg-rose-50/50">DUET গ্র্যাজুয়েট ও সার্টিফাইড Band 8.5 স্কোরের লিড মেন্টর প্যানেল</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 font-heading">মক টেস্ট ও সলিউশন ক্লাস</td>
                  <td className="p-4 text-slate-500">৩–৫টি বেসিক মক টেস্ট, কোনো পার্সোনালাইজড পোস্ট-টেস্ট অ্যানালাইসিস নেই</td>
                  <td className="p-4 font-bold text-amber-600 bg-rose-50/50">২০+ ফুল লেংথ ক্যামব্রিজ স্ট্যান্ডার্ড মক টেস্ট সাথে লাইভ ডায়াগনস্টিক কাউন্সিলিং</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 font-heading">স্টাডি অ্যাব্রড ও ভিসা সাপোর্ট</td>
                  <td className="p-4 text-slate-500">কোর্স শেষ হলে আর কোনো সম্পর্ক থাকে না</td>
                  <td className="p-4 font-bold text-emerald-700 bg-rose-50/50">স্কোর পাওয়ার পর ১০০% ফ্রি ইউনিভার্সিটি শর্টলিস্টিং, SOP গাইডেন্স ও ভিসা সহায়তা</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          4 CORE PILLARS OF EXCELLENCE
          ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-blue-100 text-blue-700 mb-3">🏆 Our 4 Pillars</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              The Pillars That Make Us #1
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover-elevate">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mb-4 font-bold">1️⃣</div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2 font-heading">Small Batch Focus</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                প্রতি ব্যাচে মাত্র ১৫-২০ জন শিক্ষার্থী হওয়ায় মেন্টর সরাসরি আপনার দুর্বলতা ট্র্যাক করে সমাধান দিতে পারেন।
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover-elevate">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4 font-bold">2️⃣</div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2 font-heading">Data-Driven Diagnosis</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                মুখস্থ বিদ্যা নয়, ক্যামব্রিজ ট্র্যাপ এলিমিনেশন ও সেন্টেন্স স্ট্রাকচার অ্যানালাইসিসের মাধ্যমে স্কোরের নিশ্চয়তা।
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover-elevate">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-4 font-bold">3️⃣</div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2 font-heading">Daily Speaking Lab</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                জড়তা ও ভীতি দূর করতে প্রতিদিন স্পিকিং পার্টনারের সাথে ২০ মিনিট রিয়েল টপিক ডিসকাশন ও ফিডব্যাক।
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover-elevate">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-4 font-bold">4️⃣</div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2 font-heading">Score Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ক্লাস ও মক টেস্ট শতভাগ সম্পন্ন করার পরও কাঙ্ক্ষিত স্কোর না পেলে পরবর্তী ব্যাচে ফ্রি রি-টেকের সুযোগ।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: 5 STRATEGIC DIFFERENTIATORS (ACADEMIC FRAMEWORK)
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-extrabold uppercase tracking-wider border border-rose-500/30">
              <span>⚡ Academic Supremacy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              How We Engineer Band 7.5+ Results
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              গতানুগতিক ধারার বাইরে এসে সায়েন্টিফিক মেথডলজি যা প্রতিটি শিক্ষার্থীর দুর্বলতাকে শক্তিতে রূপান্তর করে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-4 hover:border-rose-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl font-bold">🎯</div>
              <h3 className="text-xl font-bold text-white font-heading">Cambridge Trap Elimination</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                লিসেনিং ও রিডিং-এ ডিস্ট্রাক্টর এবং সিনোনিম ট্র্যাপ কীভাবে সেকেন্ডের মধ্যে চেনা যায় তার স্টেপ-বাই-স্টেপ এলিমিনেশন টেকনিক।
              </p>
              <ul className="text-xs text-slate-400 space-y-2 pt-2 border-t border-slate-700/60">
                <li className="flex items-center gap-2 text-emerald-400">✓ Keywords Prediction Rule</li>
                <li className="flex items-center gap-2 text-emerald-400">✓ True/False/Not Given Matrix</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-4 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-bold">📝</div>
              <h3 className="text-xl font-bold text-white font-heading">Dual Red-Ink Evaluation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                প্রতিটি রাইটিং টাস্ক জুয়েল স্যার ও সার্টিফাইড এক্সামিনার প্যানেল দ্বারা লাইন-বাই-লাইন কারেকশন এবং ব্যান্ড ৯ মডেল সলিউশন।
              </p>
              <ul className="text-xs text-slate-400 space-y-2 pt-2 border-t border-slate-700/60">
                <li className="flex items-center gap-2 text-emerald-400">✓ Task Achievement Breakdown</li>
                <li className="flex items-center gap-2 text-emerald-400">✓ Cohesion & Lexical Grading</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-4 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-bold">🎧</div>
              <h3 className="text-xl font-bold text-white font-heading">One-on-One Speaking Drill</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                মুখস্থ না করে তাৎক্ষণিক আইডিয়া জেনারেশন, ফ্লুয়েন্সি এবং কিউ কার্ডের ৩-মিনিট স্ট্র্যাটেজিক প্রেজেন্টেশন প্র্যাকটিস।
              </p>
              <ul className="text-xs text-slate-400 space-y-2 pt-2 border-t border-slate-700/60">
                <li className="flex items-center gap-2 text-emerald-400">✓ Daily 20-min Speaking Partner</li>
                <li className="flex items-center gap-2 text-emerald-400">✓ Audio Accent & Intonation Drill</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: CAMPUS INFRASTRUCTURE & DIGITAL LEARNING ECOSYSTEM
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="feature-pill-badge bg-purple-100 text-purple-700">🏢 World-Class Infrastructure</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Physical Campus & 24/7 Digital Portal
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              আমাদের ক্যাম্পাস ও ডিজিটাল ক্লাসরুম এমনভাবে ডিজাইন করা যা আপনার প্রতিটি মিনিটকে সর্বোচ্চ কার্যকর করে তোলে।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg">🎧</div>
              <h4 className="font-extrabold text-slate-900 text-base font-heading">Noise-Cancelling Audio Lab</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                লিসেনিং পরীক্ষার আসল আবহ পেতে প্রতিটি শিক্ষার্থীর জন্য ডেডিকেটেড স্টুডিও-কোয়ালিটি হেডসেট ও বুথ।
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">📚</div>
              <h4 className="font-extrabold text-slate-900 text-base font-heading">Cambridge Resource Library</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                ক্যামব্রিজ ১-১৯ এর সম্পূর্ণ অরিজিনাল টেস্ট বুক, ভোকাবুলারি ব্যাংক ও সাইলেন্ট স্টাডি জোন সুবিধা।
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg">💻</div>
              <h4 className="font-extrabold text-slate-900 text-base font-heading">Computer-Delivered Mock Hall</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                সিডি-আইইএলটিএস (CD-IELTS) এর অনুরূপ রিয়েল ইন্টারফেসে প্র্যাকটিস ও অটোমেটেড স্কোর জেনারেশন।
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">🌐</div>
              <h4 className="font-extrabold text-slate-900 text-base font-heading">24/7 Digital LMS & Archives</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                ক্লাস মিস হলেও কোনো সমস্যা নেই; সব লেকচার ফুল এইচডি রেকর্ডিং ও লেকচার শিট আজীবন অ্যাক্সেসযোগ্য।
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
            Experience The Difference
          </span>
          <h2 className="cta-banner-headline font-heading">
            Ready to Experience The ESSENCE Advantage?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            আজই জয়েন করুন আমাদের ফ্রি ডায়াগনস্টিক সেশনে এবং দেখে নিন জুয়েল স্যারের প্র্যাকটিক্যাল টেকনিক কতটা কার্যকর।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("Why Us Page CTA")} 
              className="btn-cta-amber cursor-pointer"
            >
              Claim Free Diagnostic Seat →
            </button>
            <Link href="/courses" className="btn-cta-blue">
              View Flagship Course →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
