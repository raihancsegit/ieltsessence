"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, Award, ShieldCheck, 
  HelpCircle, ArrowRight, Mic, Volume2, Users, CheckCircle2, MessageSquare
} from "lucide-react";

export default function CourseSpeakingIntensivePage() {
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
            <span className="text-rose-400">Speaking Intensive</span>
          </div>

          <span className="inline-block px-4 py-1 bg-emerald-600 text-white rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 font-heading">
            🗣️ Daily Speaking Practice • Fluency Lab
          </span>

          <h1 className="inner-hero-title font-heading">
            IELTS Speaking Intensive Lab <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-amber-300">
              Overcome Hesitation, Master Cue Cards & Speak Naturally
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            প্রতিদিন ২০ মিনিট স্পিকিং পার্টনারের সাথে রিয়েল এক্সাম টপিক ডিসকাশন এবং মেন্টরের সরাসরি ফিডব্যাক। জড়তা দূর করে প্রথমবারেই ব্যান্ড ৭.৫+ অর্জনের নিশ্চয়তা।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => openModal("Speaking Intensive")} 
              className="btn-cta-amber cursor-pointer"
            >
              Join Speaking Intensive Lab →
            </button>
            <a 
              href="https://wa.me/8801738474611?text=Hi%2C%20I%20want%20to%20know%20about%20Speaking%20Intensive%20Course" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-cta-blue"
            >
              💬 WhatsApp Mentor Desk
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SPEAKING LAB FEATURES
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="feature-pill-badge bg-emerald-100 text-emerald-700">🗣️ 3-Part Master Strategy</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Speak Fluently with Natural Intonation & Lexical Variety
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                স্পিকিংয়ে ভালো স্কোরের মূল রহস্য হলো আত্মবিশ্বাস ও স্ট্রাকচারড থিংকিং। আমাদের কোর্সে পার্ট ১ এর কনফিডেন্ট ওপেনিং, পার্ট ২ এর ২ মিনিট নন-স্টপ কিউ কার্ড স্টোরিটেলিং এবং পার্ট ৩ এর ডিপ অ্যানালাইসিস আয়ত্ত করানো হয়।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">ডেইলি 1-on-1 Practice</h4>
                    <p className="text-xs text-slate-500 mt-0.5">প্রতিদিন ডেডিকেটেড স্পিকিং পার্টনার ড্রিল</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Cue Card Storytelling</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Past-Present-Future এক্সটেনশন মেথড</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Pronunciation & Accent Fix</h4>
                    <p className="text-xs text-slate-500 mt-0.5">ন্যাচারাল ইনটোনেশন ও ফিলার্স কন্ট্রোল</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">১০টি Examiner Mock Tests</h4>
                    <p className="text-xs text-slate-500 mt-0.5">রিয়েল এক্সামিনার টেস্ট সাথে ভয়েস রেকর্ডিং অ্যানালাইসিস</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border-2 border-emerald-500 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider font-heading">Fluency Program</span>
                  <h3 className="text-2xl font-black text-slate-900 font-heading mt-1">Speaking Intensive</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 line-through font-semibold">BDT 6,500</div>
                  <div className="text-3xl font-black text-slate-900 font-heading">৳ ৪,৫০০</div>
                </div>
              </div>

              <ul className="space-y-3 py-6 text-xs text-slate-700">
                <li className="flex items-center gap-2"><span>📅</span> <strong>মেয়াদ:</strong> ১ মাস (প্রতিদিন ওয়ান-অন-ওয়ান ড্রিল)</li>
                <li className="flex items-center gap-2"><span>🎙️</span> <strong>মক টেস্ট:</strong> ১০টি ফুল স্পিকিং মক উইথ এক্সামিনার ফিডব্যাক</li>
                <li className="flex items-center gap-2"><span>👥</span> <strong>ব্যাচ সাইজ:</strong> সর্বোচ্চ ১০–১২ জন (ব্যক্তিগত মনিটরিং)</li>
                <li className="flex items-center gap-2"><span>🚀</span> <strong>টার্গেট:</strong> স্পিকিং ব্যান্ড ৫.৫/৬.০ থেকে ৭.৫+</li>
              </ul>

              <button 
                onClick={() => openModal("Speaking Intensive")} 
                className="btn-cta-amber w-full py-4 text-base font-extrabold justify-center cursor-pointer"
              >
                Confirm Admission Seat →
              </button>
              <div className="text-center text-[11px] text-slate-400 mt-3">
                ⚡ সীমিত আসন • দ্রুত আবেদন করুন
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: 3-PART SPEAKING EXAM ARCHITECTURE
          ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="feature-pill-badge bg-emerald-100 text-emerald-700">🗣️ Master All 3 Parts</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              The 3-Part Speaking Success Blueprint
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              পরীক্ষার হলের প্রতিটি অংশের জন্য আলাদা ট্যাকটিক্যাল অ্যাপ্রোচ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-elevate">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-black text-xs rounded-full font-heading">Part 1: 4–5 Mins</span>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Introduction & Warm-Up</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                এক লাইনে উত্তর শেষ না করে ২-৩ বাক্যে রিজন ও এক্সাম্পলসহ ন্যাচারাল উত্তর দেওয়ার সূত্র (AREA Method: Answer, Reason, Example, Alternative).
              </p>
              <div className="text-xs text-emerald-600 font-bold pt-2 border-t border-slate-200">🎯 Zero Awkward Silence</div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-elevate">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 font-black text-xs rounded-full font-heading">Part 2: 3–4 Mins</span>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Individual Long Turn (Cue Card)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ১ মিনিটে কীভাবে পাস্ট-প্রেজেন্ট-ফিউচার টাইমলাইনে পয়েন্ট নোট করবেন এবং না থেমে টানা ২ মিনিট গল্প বলবেন তার স্টোরিটেলিং ফ্রেমওয়ার্ক।
              </p>
              <div className="text-xs text-blue-600 font-bold pt-2 border-t border-slate-200">🎯 Complete 2-Minute Fluency</div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-elevate">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 font-black text-xs rounded-full font-heading">Part 3: 4–5 Mins</span>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Two-Way In-Depth Discussion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ব্যক্তিগত অভিজ্ঞতা এড়িয়ে সমাজ ও বৈশ্বিক প্রেক্ষাপটে হাইপোথেটিক্যাল কন্ডিশনাল দিয়ে অ্যানালাইটিক্যাল উত্তর দেওয়ার দক্ষতা।
              </p>
              <div className="text-xs text-purple-600 font-bold pt-2 border-t border-slate-200">🎯 Band 8.0+ Critical Thinking</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: AUDIO ACCENT & PRONUNCIATION DRILL LAB
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider border border-emerald-500/30">
              <span>🎙️ Interactive Pronunciation Lab</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Sound Natural, Clear & Confident
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              ব্রিটিশ বা আমেরিকান অ্যাকসেন্ট নকল করার প্রয়োজন নেই; সঠিক ইনটোনেশন ও ওয়ার্ড স্ট্রেস দিয়েই ব্যান্ড ৮.০ পাওয়া সম্ভব।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-bold">🎵</div>
              <h4 className="text-white font-bold text-base font-heading">Intonation & Rhythm</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                একঘেয়ে রোবোটিক টোনে কথা বলা দূর করে বাক্যের গুরুত্বপূর্ণ শব্দে সঠিক স্ট্রেস ও পিচ ওঠানামার ড্রিল।
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-bold">⏱️</div>
              <h4 className="text-white font-bold text-base font-heading">Filler Word Elimination</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                &lsquo;Umm&rsquo;, &lsquo;Aahh&rsquo;, &lsquo;You know&rsquo; ইত্যাদি ফিলার শব্দ বাদ দিয়ে ন্যাচারাল পজ এবং থিঙ্কিং ফ্রেজ ব্যবহারের কৌশল।
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl font-bold">🎧</div>
              <h4 className="text-white font-bold text-base font-heading">Daily Recorded Mock Audio</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                আপনার প্রতি দিনের স্পিকিং অডিও রেকর্ড করে গুগল ড্রাইভে সংরক্ষণ ও মেন্টর কর্তৃক ভুল মার্কিং।
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
            Overcome Hesitation Today
          </span>
          <h2 className="cta-banner-headline font-heading">
            Speak English with Confidence & Authority
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            ফ্রি স্পিকিং অ্যাসেসমেন্ট দিয়ে আজই জেনে নিন আপনার বর্তমান ব্যান্ড স্কোর।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("Speaking Free Assessment")} 
              className="btn-cta-amber cursor-pointer"
            >
              Claim Free Speaking Assessment →
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
