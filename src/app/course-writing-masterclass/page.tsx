"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, Award, ShieldCheck, 
  HelpCircle, ArrowRight, PenTool, CheckCircle2, AlertTriangle, FileEdit
} from "lucide-react";

export default function CourseWritingMasterclassPage() {
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
            <span className="text-rose-400">Writing Masterclass</span>
          </div>

          <span className="inline-block px-4 py-1 bg-purple-600 text-white rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 font-heading">
            ✍️ Writing 7.5+ Specialization • 1 Month
          </span>

          <h1 className="inner-hero-title font-heading">
            IELTS Writing 7.5+ Masterclass <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-rose-300 to-amber-300">
              Line-by-Line Feedback & Band 9 Structural Mastery
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            অধিকাংশ শিক্ষার্থী রাইটিংয়ে ৫.৫ বা ৬.০ এসে আটকে থাকে। আমাদের এই স্পেশালাইজড কোর্সে টাস্ক রেসপন্স, কোহিশন ও লেক্সিক্যাল রিসোর্সের প্রতিটি খুঁটিনাটি ধরে ব্যক্তিগত ভুল শুধরে দেওয়া হয়।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => openModal("Writing Masterclass")} 
              className="btn-cta-amber cursor-pointer"
            >
              Enroll in Writing Masterclass →
            </button>
            <Link href="/writing-evaluation" className="btn-cta-blue">
              Try Writing Simulator ↓
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          COURSE BREAKDOWN
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="feature-pill-badge bg-purple-100 text-purple-700">✍️ 4 Band Descriptors Deep Dive</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Demystifying Task 1 & Task 2 to Unlock Band 7.5+
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                কোর্সে থাকছে টাস্ক ১ এর সব ধরণের গ্রাফ, চার্ট, ম্যাপ, ও প্রসেস ডায়াগ্রামের ব্যান্ড ৯ ফর্মুলা এবং টাস্ক ২ এর অপিনিয়ন, ডিসকাস বোথ ভিউজ, প্রবলেম-সল্যুশন ও ডিরেক্ট কোয়েশ্চেন এসইর কমপ্লিট অ্যানালাইসিস।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Line-by-Line Examiner Feedback</h4>
                    <p className="text-xs text-slate-500 mt-0.5">প্রতিটি এসইতে ৪টি ক্রাইটেরিয়া ভিত্তিক বিস্তারিত রিপোর্ট</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">ব্যান্ড ৯ সেন্টেন্স টেমপ্লেট</h4>
                    <p className="text-xs text-slate-500 mt-0.5">সহজ কিন্তু হাই-ব্যান্ড কোহেসিভ ডিভাইসেস ও লিঙ্কার্স</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">কমন গ্রামার ট্র্যাপ রিমুভাল</h4>
                    <p className="text-xs text-slate-500 mt-0.5">সাবজেক্ট-ভার্ব এগ্রিমেন্ট, ক্লজ ও পাংচুয়েশন ড্রিল</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">টপিক-ভিত্তিক ভোকাবুলারি ব্যাংক</h4>
                    <p className="text-xs text-slate-500 mt-0.5">একাডেমিক কলোকেশনস ও প্যারাফ্রেজিং ডিকশনারি</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border-2 border-purple-500 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-extrabold text-purple-600 uppercase tracking-wider font-heading">Skill Specialization</span>
                  <h3 className="text-2xl font-black text-slate-900 font-heading mt-1">Writing Masterclass</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 line-through font-semibold">BDT 7,000</div>
                  <div className="text-3xl font-black text-slate-900 font-heading">৳ ৪,৯৯৯</div>
                </div>
              </div>

              <ul className="space-y-3 py-6 text-xs text-slate-700">
                <li className="flex items-center gap-2"><span>📅</span> <strong>মেয়াদ:</strong> ১ মাস (১৬টি ইন-ডেপ্থ লাইভ ক্লাস)</li>
                <li className="flex items-center gap-2"><span>✍️</span> <strong>ইভালুয়েশন:</strong> আনলিমিটেড এসই চেক উইথ ব্যান্ড ৯ মডেল</li>
                <li className="flex items-center gap-2"><span>👥</span> <strong>ব্যাচ সাইজ:</strong> সর্বোচ্চ ১২–১৫ জন (Strict Individual Focus)</li>
                <li className="flex items-center gap-2"><span>🎯</span> <strong>টার্গেট:</strong> রাইটিং ব্যান্ড ৫.৫ থেকে ৭.০/৭.৫ এ উন্নীত করা</li>
              </ul>

              <button 
                onClick={() => openModal("Writing Masterclass")} 
                className="btn-cta-amber w-full py-4 text-base font-extrabold justify-center cursor-pointer"
              >
                Confirm Admission Now →
              </button>
              <div className="text-center text-[11px] text-slate-400 mt-3">
                ⚡ ব্যাচ প্রতি মাত্র ১৫ জনকে নেওয়া হয়
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: BEFORE VS AFTER RED-INK TRANSFORMATION
          ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="feature-pill-badge bg-purple-100 text-purple-700">✍️ Real Evaluation Demo</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              How We Transform A Band 5.5 Essay to Band 8.0
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              আমাদের মেন্টররা কীভাবে সাধারণ বাক্যকে একাডেমিক ও হাই-ব্যান্ড স্ট্রাকচারে কনভার্ট করেন তা নিচে দেখুন।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before Card */}
            <div className="p-8 rounded-3xl bg-rose-50/60 border border-rose-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-rose-200">
                <span className="px-3 py-1 bg-rose-200 text-rose-800 font-extrabold text-xs rounded-full font-heading">
                  ❌ Before: Raw Student Draft (Band 5.5)
                </span>
                <span className="text-xs text-rose-600 font-bold">Repetitive & Weak Cohesion</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-mono bg-white p-4 rounded-xl border border-rose-100 italic">
                &ldquo;Nowadays, many people use internet. Because it is very easy and fast. But sometimes internet is dangerous for children because they play games too much and do not study. So government should stop bad websites.&rdquo;
              </p>
              <div className="space-y-2 text-xs text-rose-700">
                <div className="flex items-center gap-2">⚠️ <strong>Error:</strong> Sentence fragments (&lsquo;Because it is...&rsquo;).</div>
                <div className="flex items-center gap-2">⚠️ <strong>Error:</strong> Simple, informal vocabulary (&lsquo;very easy and fast&rsquo;, &lsquo;bad websites&rsquo;).</div>
                <div className="flex items-center gap-2">⚠️ <strong>Error:</strong> Abrupt simplistic conclusion.</div>
              </div>
            </div>

            {/* After Card */}
            <div className="p-8 rounded-3xl bg-emerald-50/60 border border-emerald-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-200">
                <span className="px-3 py-1 bg-emerald-200 text-emerald-800 font-extrabold text-xs rounded-full font-heading">
                  ✅ After: Mentor Polished Version (Band 8.0)
                </span>
                <span className="text-xs text-emerald-600 font-bold">Advanced Lexical & Complex Structure</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-mono bg-white p-4 rounded-xl border border-emerald-100">
                &ldquo;In contemporary society, digital connectivity has revolutionized communication owing to its unprecedented speed and accessibility. Nevertheless, unregulated screen time poses severe cognitive risks to adolescents, often detracting from academic pursuits. Consequently, stringent digital governance and parental oversight are indispensable.&rdquo;
              </p>
              <div className="space-y-2 text-xs text-emerald-800">
                <div className="flex items-center gap-2">✓ <strong>Collocations:</strong> &lsquo;contemporary society&rsquo;, &lsquo;unprecedented speed&rsquo;, &lsquo;parental oversight&rsquo;.</div>
                <div className="flex items-center gap-2">✓ <strong>Complex Structure:</strong> Subordinate clauses & transitional adverbs.</div>
                <div className="flex items-center gap-2">✓ <strong>Lexical Precision:</strong> &lsquo;cognitive risks&rsquo;, &lsquo;detracting from academic pursuits&rsquo;.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: OFFICIAL 4-CRITERION SCORING RUBRIC
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-extrabold uppercase tracking-wider border border-rose-500/30">
              <span>📊 Cambridge Assessment Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              The 4 Pillars of Band 8.0+ Writing Scoring
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              ব্রিটিশ কাউন্সিল ও আইডিপির এক্সামিনাররা যে ৪টি ক্রাইটেরিয়া দেখে খাতা কাটেন তার কমপ্লিট স্ট্র্যাটেজি।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center font-heading">25%</div>
              <h4 className="font-extrabold text-white text-base font-heading">Task Achievement (TR)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                প্রশ্নের প্রতিটি অংশকে যৌক্তিক উদাহরণসহ সম্পূর্ণরূপে ব্যাখ্যা করা ও ক্লিয়ার পজিশন ধরে রাখা।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center font-heading">25%</div>
              <h4 className="font-extrabold text-white text-base font-heading">Coherence & Cohesion (CC)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                প্রতিটি অনুচ্ছেদের মধ্যে লজিক্যাল ফ্লো এবং জোর করে লিঙ্কার ব্যবহার না করে স্মুথ কানেকশন তৈরি।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center font-heading">25%</div>
              <h4 className="font-extrabold text-white text-base font-heading">Lexical Resource (LR)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                প্রাসঙ্গিক একাডেমিক ভোকাবুলারি ও লেস-কমন কলকেশনের নির্ভুল ও সাবলীল প্রয়োগ।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center font-heading">25%</div>
              <h4 className="font-extrabold text-white text-base font-heading">Grammar Range & Accuracy</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                কমপ্লেক্স সেন্টেন্স, প্যাসিভ স্ট্রাকচার ও কন্ডিশনাল ক্লজের ভ্যারাইটি উইথ ৯৫%+ ত্রুটিহীন ব্যাকরণ।
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
            Stop Losing Writing Marks
          </span>
          <h2 className="cta-banner-headline font-heading">
            Transform Your Writing in 30 Days
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            সরাসরি জুয়েল স্যার ও সার্টিফায়েড রাইটিং এক্সামিনারের ব্যক্তিগত নির্দেশনায় নিজের ভুল শুধরে নিন।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("Writing Masterclass CTA")} 
              className="btn-cta-amber cursor-pointer"
            >
              Book Your Writing Seat →
            </button>
            <Link href="/writing-evaluation" className="btn-cta-blue">
              Try Writing Simulator Free →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
