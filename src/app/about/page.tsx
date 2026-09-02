"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ShieldCheck, Award, Users, CheckCircle2, Star, ArrowRight, 
  Sparkles, BookOpen, GraduationCap, ChevronRight, MessageSquare 
} from "lucide-react";

export default function AboutPage() {
  const { openModal } = useModal();

  return (
    <div className="space-y-0">
      {/* ==========================================================================
          INNER HERO SECTION
          ========================================================================== */}
      <section className="inner-hero-section">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <div className="inner-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-rose-400">About Us</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            Dream • Define • Dominate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-sky-300">
              The IELTS ESSENCE Story
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            বাংলাদেশের শিক্ষার্থীদের গ্লোবাল ক্যারিয়ার এবং উচ্চশিক্ষার স্বপ্ন বাস্তবায়নে একটি ডেডিকেটেড মেন্টরশিপ প্ল্যাটফর্ম। মুখস্থ বিদ্যার বদলে বাস্তব স্ট্র্যাটেজি ও কন্টিনিউয়াস ইভালুয়েশন।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => openModal("About 1-on-1 Profile Assessment")} 
              className="btn-cta-amber cursor-pointer"
            >
              Book 1-on-1 Profile Assessment →
            </button>
            <a href="#founder" className="btn-cta-blue cursor-pointer">
              Meet Our Mentors ↓
            </a>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-14">
            <div className="glass-card-dark p-5 text-center hover-elevate">
              <div className="text-3xl font-black text-white font-heading">2,500+</div>
              <div className="text-xs text-rose-300 font-semibold mt-1">Successful Students</div>
            </div>
            <div className="glass-card-dark p-5 text-center hover-elevate">
              <div className="text-3xl font-black text-amber-300 font-heading">Band 7.5+</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Average Target Score</div>
            </div>
            <div className="glass-card-dark p-5 text-center hover-elevate">
              <div className="text-3xl font-black text-sky-300 font-heading">98.4%</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Visa Success Rate</div>
            </div>
            <div className="glass-card-dark p-5 text-center hover-elevate">
              <div className="text-3xl font-black text-emerald-300 font-heading">20+</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Full Mock Tests</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          WHY IELTS ESSENCE (CORE PHILOSOPHY)
          ========================================================================== */}
      <section id="why-us" className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="feature-pill-badge bg-rose-100 text-rose-700">💡 Why IELTS ESSENCE</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
                Traditional Coaching vs. <br />
                <span className="text-rose-600">The ESSENCE Learning Standard</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                গতানুগতিক কোচিং সেন্টারে ১০০-১৫০ জনের ব্যাচে শিক্ষক শুধু নিয়ম বলে যান, কিন্তু আপনার দুর্বলতা কোথায় তা কেউ চেক করে না। IELTS ESSENCE প্রতিষ্ঠিত হয়েছে এই শূন্যতা দূর করতে।
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold shrink-0">✍️</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Line-by-Line Writing Evaluation</h4>
                    <p className="text-xs text-slate-500 mt-1">প্রতিটি Essay-তে ৪টি ব্যান্ড ক্রাইটেরিয়া (TR, CC, LR, GRA) ধরে ভুল মার্কিং ও ব্যান্ড ৯ অল্টারনেটিভ সেন্টেন্স প্রদান।</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">🗣️</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Daily 1-on-1 Speaking Practice</h4>
                    <p className="text-xs text-slate-500 mt-1">সপ্তাহে শুধু ১ দিন নয়, প্রতিদিন স্পিকিং পার্টনার ও মেন্টরের সাথে রিয়েল এক্সাম সিমুলেশন।</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold shrink-0">🎯</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Smart Cambridge Keyword Tracking</h4>
                    <p className="text-xs text-slate-500 mt-1">রিডিং ও লিসেনিং-এ ট্র্যাপ অপশন এলিমিনেশন ও প্যারাফ্রেজিং ডিকোডিং টেকনিক।</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Comparison Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 font-heading">আমাদের বিশেষত্ব এক নজরে</h3>
              
              <ul className="space-y-4">
                <li className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-2.5">
                    <span className="text-emerald-500">✔</span> ব্যাচ সাইজ
                  </span>
                  <span className="text-rose-600 font-bold">সর্বোচ্চ ১৫-২০ জন (Personal Focus)</span>
                </li>
                <li className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-2.5">
                    <span className="text-emerald-500">✔</span> মেন্টর কোয়ালিফিকেশন
                  </span>
                  <span className="text-blue-600 font-bold">Band 8.0 & 8.5 Certified Mentors</span>
                </li>
                <li className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-2.5">
                    <span className="text-emerald-500">✔</span> ফুল লেংথ মক টেস্ট
                  </span>
                  <span className="text-purple-600 font-bold">২০+ মক টেস্ট উইথ ডিটেইলড অ্যানালাইসিস</span>
                </li>
                <li className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-2.5">
                    <span className="text-emerald-500">✔</span> ভিসা ও স্কলারশিপ সাপোর্ট
                  </span>
                  <span className="text-emerald-600 font-bold">ফ্রি ইউনিভার্সিটি শর্টলিস্টিং ও গাইডেন্স</span>
                </li>
              </ul>

              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-rose-600 to-blue-600 text-white text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-200">Exclusive Guarantee</div>
                <div className="text-base font-extrabold mt-1">স্কোর না বাড়লে ফ্রি রি-টেক ও পারসোনাল ট্র্যাকিং</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          THE 6-STEP ESSENCE METHOD
          ========================================================================== */}
      <section id="method" className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-purple-100 text-purple-700 mb-3">🚀 The Methodology</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              The 6-Step ESSENCE Score System
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              একটি বৈজ্ঞানিক রোডম্যাপ যা প্রতিটি শিক্ষার্থীকে ব্যান্ড ৫.০ থেকে ব্যান্ড ৭.৫+ এ উন্নীত করতে সাহায্য করে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="roadmap-step-card">
              <div className="roadmap-step-num font-heading">01</div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2 font-heading">Diagnostic Assessment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                কোর্সের শুরুতে প্রতিটি মডিউলের (L, R, W, S) রিয়েল টেস্টের মাধ্যমে আপনার বর্তমান ব্যান্ড স্কোর এবং দুর্বল জায়গা চিহ্নিত করা হয়।
              </p>
            </div>

            <div className="roadmap-step-card">
              <div className="roadmap-step-num font-heading">02</div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2 font-heading">Core Grammar & Vocabulary</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                কমপ্লেক্স সেন্টেন্স স্ট্রাকচার, কোহেসিভ ডিভাইসেস এবং টপিক-ভিত্তিক হাই-ব্যান্ড লেক্সিক্যাল রিসোর্স (Lexical Resource) ডেভেলপমেন্ট।
              </p>
            </div>

            <div className="roadmap-step-card">
              <div className="roadmap-step-num font-heading">03</div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2 font-heading">Module-Wise Strategy Lab</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Listening MCQ, Heading Matching, True/False/Not Given, এবং Writing Task 1 & 2 এর জন্য স্পেসিফিক টাইম ম্যানেজমেন্ট ফর্মুলা।
              </p>
            </div>

            <div className="roadmap-step-card">
              <div className="roadmap-step-num font-heading">04</div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2 font-heading">Daily Speaking Simulation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cue Card স্ট্রাকচারিং (Past-Present-Future মেথড) ও Part 3 ডিসকাশনে ফ্লুয়েন্সি ও ন্যাচারাল অ্যাকসেন্ট মেন্টরিং।
              </p>
            </div>

            <div className="roadmap-step-card">
              <div className="roadmap-step-num font-heading">05</div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2 font-heading">Rigorous Mock Exams</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                আইডিপি/ব্রিটিশ কাউন্সিলের অনুরুপ স্ট্যান্ডার্ড সিডি-আইইএলটিএস এবং পেপার-বেসড পূর্ণাঙ্গ মক টেস্ট সাথে এক্সপার্ট ডায়াগনসিস।
              </p>
            </div>

            <div className="roadmap-step-card">
              <div className="roadmap-step-num font-heading">06</div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2 font-heading">Study Abroad Pathway</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                কাঙ্ক্ষিত স্কোর অর্জনের পর ফ্রি SOP রিভিউ, ইউনিভার্সিটি শর্টলিস্টিং, ও ভিসা ইন্টারভিউ প্রিপারেশন সহায়তা।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          FOUNDER & MENTORS PROFILE
          ========================================================================== */}
      <section id="founder" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Left Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-900/60 to-slate-800 border border-white/10 p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-tr from-rose-500 to-blue-500 p-1 mb-6 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl">
                    👨‍🏫
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white font-heading">Jewel Ahamadinezad</h3>
                <div className="text-rose-400 font-bold text-sm mt-1">Founder & Lead Mentor | DUET</div>
                <div className="inline-block px-3.5 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-extrabold mt-3">
                  IELTS Band 8.5 Scorer
                </div>

                <p className="text-xs text-slate-300 mt-5 leading-relaxed text-left">
                  "আমি বিশ্বাস করি ইংরেজি কোনো ভয়ের বিষয় নয়, এটি একটি দক্ষতা। সঠিক টেকনিক ও কনসিস্টেন্ট প্র্যাকটিসের মাধ্যমে বাংলাদেশের যেকোনো শিক্ষার্থী প্রথমবারেই ব্যান্ড ৭.৫+ অর্জন করতে সক্ষম।"
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-around text-center">
                  <div>
                    <div className="text-xl font-bold text-white">7+ Yrs</div>
                    <div className="text-[10px] text-slate-400 uppercase">Mentorship</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">2,500+</div>
                    <div className="text-[10px] text-slate-400 uppercase">Students</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">8.5</div>
                    <div className="text-[10px] text-slate-400 uppercase">Band Score</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mentors Right Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="feature-pill-badge bg-rose-500/20 text-rose-400 border border-rose-500/30">👨‍🎓 Our Expert Faculty</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                Learn From Certified Band 8 & 8.5 Mentors Who Have Been There
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                আমাদের মেন্টর প্যানেলে রয়েছেন ঢাকা বিশ্ববিদ্যালয়, ডুয়েট ও আন্তর্জাতিক বিভিন্ন বিশ্ববিদ্যালয়ের গ্র্যাজুয়েট ও সার্টিফায়েড ট্রেইনার।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-600/30 text-rose-400 flex items-center justify-center font-bold">✍️</div>
                    <div>
                      <h4 className="font-bold text-white text-sm font-heading">Writing Specialist Panel</h4>
                      <div className="text-[11px] text-rose-300 font-semibold">Band 8.0+ Evaluators</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    প্রতিদিন প্রতিটি লেখার ভুল বিশ্লেষণ ও ব্যান্ড ৯ মডেল সলিউশন প্রোভাইড করেন।
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold">🗣️</div>
                    <div>
                      <h4 className="font-bold text-white text-sm font-heading">Speaking Coaches</h4>
                      <div className="text-[11px] text-blue-300 font-semibold">Fluency & Pronunciation</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    নার্ভাসনেস দূর করে ন্যাচারাল স্পিকিং ও কিউ কার্ড ট্যাকল করার মাস্টারক্লাস।
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => openModal("Demo Class with Jewel Sir")} 
                  className="btn-cta-amber cursor-pointer"
                >
                  Book A Free Demo Class With Jewel Sir →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SUCCESS STORIES & TESTIMONIALS
          ========================================================================== */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-emerald-100 text-emerald-700 mb-3">⭐ Student Reviews</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Real Students. Real Band Scores.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              আমাদের শিক্ষার্থীদের সাফল্যের গল্প শুনুন যারা তাদের স্বপ্নের স্কোর অর্জন করে আজ বিশ্বের নামকরা বিশ্ববিদ্যালয়ে পড়ছেন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs rounded-full">Band 8.0</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "জুয়েল স্যারের রাইটিং ফিডব্যাক ছিল অসাধারন। আগেরবার আমার রাইটিং এ ৫.৫ এসে আটকে ছিল। স্যারের টেকনিকে এইবার রাইটিং এ ৭.০ সহ ওভারঅল ৮.০ এসেছে!"
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm font-heading">TR</div>
                <div>
                  <div className="font-bold text-xs text-slate-900 font-heading">Tanvir Rahman</div>
                  <div className="text-[10px] text-slate-400">University of Toronto, Canada</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs rounded-full">Band 7.5</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "ডেইলি স্পিকিং প্র্যাকটিস সেশন আমার জড়তা পুরো দূর করে দিয়েছে। পরীক্ষার দিন এক্সামিনার এর সামনে একদম নার্ভাস লাগেনি।"
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm font-heading">NJ</div>
                <div>
                  <div className="font-bold text-xs text-slate-900 font-heading">Nusrat Jahan</div>
                  <div className="text-[10px] text-slate-400">University of Manchester, UK</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs rounded-full">Band 8.5</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "লিসেনিং ও রিডিং এ ক্যামব্রিজ অ্যানালাইসিস ক্লাসগুলো জাদুকরী ছিল। ৪০ দিনের ক্র্যাশ কোর্স করে এই স্কোর পাব ভাবতে পারিনি!"
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm font-heading">SH</div>
                <div>
                  <div className="font-bold text-xs text-slate-900 font-heading">Saiful Hassan</div>
                  <div className="text-[10px] text-slate-400">Monash University, Australia</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/success-stories" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-rose-600 text-white text-xs font-extrabold rounded-2xl shadow-lg transition-all"
            >
              <span>🎬 Watch Full Video Interviews & Weekly/Monthly Mock Results</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: CORE VALUES & ETHICAL TEACHING STANDARDS
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-extrabold uppercase tracking-wider border border-rose-500/30">
              <span>💎 Our Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              The Ethical Principles That Define IELTS ESSENCE
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              বাণিজ্যিক চটকদার বিজ্ঞাপনের পেছনে না ছুটে আমরা গুরুত্ব দিই বাস্তবমুখী শিক্ষা ও সততায়।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3 hover:border-rose-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-2xl">🤝</div>
              <h3 className="text-xl font-bold text-white font-heading">Zero Fake Promises</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                "৭ দিনে ব্যান্ড ৮" কিংবা কোনো অবাস্তব গ্যারান্টি আমরা দেই না। আপনার বর্তমান লেভেলের সঠিক মূল্যায়ন করে বাস্তবসম্মত মেয়াদে কাঙ্ক্ষিত স্কোর অর্জনের রোডম্যাপ দিই।
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-2xl">👥</div>
              <h3 className="text-xl font-bold text-white font-heading">Strict Small Batches</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                প্রতি ব্যাচে সর্বোচ্চ ১৫–২০ জন শিক্ষার্থী নিশ্চিত করা হয়, যাতে মেন্টর প্রতিটি শিক্ষার্থীর খাতা নিজে চেক করতে পারেন এবং স্পিকিংয়ে পর্যাপ্ত সময় দিতে পারেন।
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-2xl">🛡️</div>
              <h3 className="text-xl font-bold text-white font-heading">Student Welfare First</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                ক্লাস শেষ হওয়ার পরও এক্সাম দেওয়া পর্যন্ত লাইব্রেরি সাপোর্ট, মক টেস্ট রুম এক্সেস এবং ফ্রি রি-টেক নিশ্চয়তা বজায় রাখা হয়।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 5: GLOBAL ACADEMIC & INSTITUTIONAL PARTNERS
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="feature-pill-badge bg-blue-100 text-blue-700">🌐 Global Network</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Trusted by Global Test Bodies & Universities
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              আমাদের পাঠ্যক্রম আন্তর্জাতিক স্ট্যান্ডার্ড অনুযায়ী প্রতিনিয়ত আপডেট করা হয়।
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 hover-elevate">
              <div className="text-3xl mb-1">🇬🇧</div>
              <h4 className="font-bold text-slate-900 text-sm font-heading">British Council IELTS</h4>
              <div className="text-[10px] text-slate-400">Preparation Associate</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 hover-elevate">
              <div className="text-3xl mb-1">🇦🇺</div>
              <h4 className="font-bold text-slate-900 text-sm font-heading">IDP Bangladesh</h4>
              <div className="text-[10px] text-slate-400">Official Test Registration</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 hover-elevate">
              <div className="text-3xl mb-1">🇨🇦</div>
              <h4 className="font-bold text-slate-900 text-sm font-heading">Canadian U15 Network</h4>
              <div className="text-[10px] text-slate-400">Direct Alumni Admissions</div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 hover-elevate">
              <div className="text-3xl mb-1">🎓</div>
              <h4 className="font-bold text-slate-900 text-sm font-heading">UK Russell Group</h4>
              <div className="text-[10px] text-slate-400">Postgrad Pathway Support</div>
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
            Start Your Preparation Today
          </span>
          <h2 className="cta-banner-headline font-heading">
            Ready to Join The Band 7.5+ Club?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            ফ্রি ডায়াগনস্টিক টেস্ট দিয়ে আজই জেনে নিন আপনার বর্তমান লেভেল এবং মেন্টরের সাথে বসে তৈরি করুন পার্সোনালাইজড স্টাডি প্ল্যান।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("About CTA Counselling")} 
              className="btn-cta-amber cursor-pointer"
            >
              Get Free Counselling & Plan →
            </button>
            <Link href="/courses" className="btn-cta-blue">
              Explore All Courses →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
