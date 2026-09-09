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
      <section id="comparison" className="py-20 bg-slate-50">
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
          <div className="responsive-table-wrapper bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-900 text-white">
                  <th className="p-4 sm:p-5 font-black text-sm uppercase tracking-wider w-[28%] text-emerald-400 bg-slate-950">
                    মূল পার্থক্য
                  </th>
                  <th className="p-4 sm:p-5 font-black text-sm uppercase tracking-wider w-[36%] bg-slate-900 text-slate-200 border-l border-slate-800">
                    Traditional Coaching
                  </th>
                  <th className="p-4 sm:p-5 font-black text-sm uppercase tracking-wider w-[36%] bg-emerald-700 text-white border-l border-emerald-600">
                    IELTS ESSENCE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {/* 1. Starting Point Diagnosis */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 font-heading flex items-center gap-2">
                    <span>🎯</span>
                    <span>Starting Point Diagnosis</span>
                  </td>
                  <td className="p-4 text-slate-700 font-medium border-l border-slate-100">
                    সবার জন্য একই প্রস্তুতি
                  </td>
                  <td className="p-4 font-semibold text-emerald-900 bg-emerald-50/60 border-l border-emerald-100">
                    <span className="font-extrabold text-emerald-700">প্রথমেই</span> Individual Skill Diagnosis & Target Band Mapping
                  </td>
                </tr>

                {/* 2. Batch Experience */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 font-heading flex items-center gap-2">
                    <span>👥</span>
                    <span>Batch Experience</span>
                  </td>
                  <td className="p-4 text-slate-700 font-medium border-l border-slate-100">
                    বড় ব্যাচে ব্যক্তিগত নজরদারি সীমিত
                  </td>
                  <td className="p-4 font-semibold text-emerald-900 bg-emerald-50/60 border-l border-emerald-100">
                    Small-Batch Learning + Individual Attention
                  </td>
                </tr>

                {/* 3. Writing Feedback */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 font-heading flex items-center gap-2">
                    <span>✍️</span>
                    <span>Writing Feedback</span>
                  </td>
                  <td className="p-4 text-slate-700 font-medium border-l border-slate-100">
                    শুধু correction / estimated score
                  </td>
                  <td className="p-4 font-semibold text-emerald-900 bg-emerald-50/60 border-l border-emerald-100">
                    Line-by-Line Evaluation + TR/CC/LR/GRA Breakdown + Band 9 Benchmark
                  </td>
                </tr>

                {/* 4. Speaking Development */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 font-heading flex items-center gap-2">
                    <span>🎙️</span>
                    <span>Speaking Development</span>
                  </td>
                  <td className="p-4 text-slate-700 font-medium border-l border-slate-100">
                    সপ্তাহে সীমিত practice
                  </td>
                  <td className="p-4 font-semibold text-emerald-900 bg-emerald-50/60 border-l border-emerald-100">
                    Regular 1-to-1 / Focused Speaking Simulation + Fluency & Pronunciation Analysis
                  </td>
                </tr>

                {/* 5. Learning Psychology */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 font-heading flex items-center gap-2">
                    <span>🧠</span>
                    <span>Learning Psychology</span>
                  </td>
                  <td className="p-4 text-slate-700 font-medium border-l border-slate-100">
                    ভুল করলে শুধু correction
                  </td>
                  <td className="p-4 font-semibold text-emerald-900 bg-emerald-50/60 border-l border-emerald-100">
                    Mistake → Diagnosis → Strategy → Reattempt
                  </td>
                </tr>

                {/* 6. Progress Tracking */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 font-heading flex items-center gap-2">
                    <span>📈</span>
                    <span>Progress Tracking</span>
                  </td>
                  <td className="p-4 text-slate-700 font-medium border-l border-slate-100">
                    Mock score-ই progress indicator
                  </td>
                  <td className="p-4 font-semibold text-emerald-900 bg-emerald-50/60 border-l border-emerald-100">
                    Skill-wise Progress Tracking + Target-Band Readiness Monitoring
                  </td>
                </tr>

                {/* 7. Instructor Model */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 font-heading flex items-center gap-2">
                    <span>👨‍🏫</span>
                    <span>Instructor Model</span>
                  </td>
                  <td className="p-4 text-slate-700 font-medium border-l border-slate-100">
                    একজন trainer—সব module
                  </td>
                  <td className="p-4 font-semibold text-emerald-900 bg-emerald-50/60 border-l border-emerald-100">
                    4 Modules → 4 Expert Instructors → <span className="font-extrabold text-emerald-800">Specialised Guidance</span>
                  </td>
                </tr>

                {/* 8. Mock Test Strategy */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 font-heading flex items-center gap-2">
                    <span>📝</span>
                    <span>Mock Test Strategy</span>
                  </td>
                  <td className="p-4 text-slate-700 font-medium border-l border-slate-100">
                    Test দেওয়া ও score জানা
                  </td>
                  <td className="p-4 font-semibold text-emerald-900 bg-emerald-50/60 border-l border-emerald-100">
                    Full Mock → Performance Analysis → Targeted Improvement Plan
                  </td>
                </tr>

                {/* 9. Learning Resources */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 font-heading flex items-center gap-2">
                    <span>📚</span>
                    <span>Learning Resources</span>
                  </td>
                  <td className="p-4 text-slate-700 font-medium border-l border-slate-100">
                    Generic notes & materials
                  </td>
                  <td className="p-4 font-semibold text-emerald-900 bg-emerald-50/60 border-l border-emerald-100">
                    Structured Resources + Band 9 Standard Hand Notes + Guided Practice
                  </td>
                </tr>

                {/* 10. Practice Philosophy */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 font-heading flex items-center gap-2">
                    <span>🔄</span>
                    <span>Practice Philosophy</span>
                  </td>
                  <td className="p-4 text-slate-900 font-bold border-l border-slate-100">
                    Practice More
                  </td>
                  <td className="p-4 font-bold text-emerald-950 bg-emerald-50/60 border-l border-emerald-100">
                    Practise Right → Get Feedback → Fix → Reattempt
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          4 CORE PILLARS OF EXCELLENCE (WITH 4 MODULE EXAM TEST LIBRARIES)
          ========================================================================== */}
      <section id="pillars" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1320px] mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="feature-pill-badge bg-rose-100 text-rose-700">🏆 4 Pillars of Excellence</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Module-Wise Real Exam Practice Hub
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              আইইএলটিএস-এর ৪টি মডিউলেই শতভাগ দখল আনতে অফিসিয়াল স্ট্যান্ডার্ডের রিয়েল এক্সাম টেস্ট দিন। প্রতিটি মডিউলের জন্য রয়েছে ৫টি করে ফুল-লেংথ অনলাইন টেস্ট।
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
              <span>🌐 Powered by IELTS Online Tests Exam Library</span>
              <a 
                href="https://ieltsonlinetests.com/ielts-exam-library" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline text-blue-600 font-extrabold ml-1 hover:text-blue-800"
              >
                Visit Library ↗
              </a>
            </div>
          </div>

          {/* 4 MODULES GRID (5 EXAM TESTS EACH) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. LISTENING EXCELLENCE */}
            <div className="bg-white rounded-3xl p-6 border-2 border-blue-200 shadow-lg flex flex-col justify-between hover-elevate space-y-5">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold">
                    🎧
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-black uppercase">
                    Pillar 01
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 font-heading">
                  Listening Excellence
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  অডিও ট্র্যাকিং, কি-ওয়ার্ড প্রিডিকশন ও ডিস্ট্রাক্টর এলিমিনেশন টেস্ট।
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-3">
                  {[
                    { num: 1, url: "https://ieltsonlinetests.com/ielts-mock-test-2024-march-listening-practice-test-2?mode=practice_test&parts=full&duration=32" },
                    { num: 2, url: "https://ieltsonlinetests.com/ielts-mock-test-2025-july-listening-practice-test-1?mode=practice_test&parts=full&duration=32" },
                    { num: 3, url: "https://ieltsonlinetests.com/ielts-mock-test-2025-march-listening-practice-test-1?mode=practice_test&parts=full&duration=32" },
                    { num: 4, url: "https://ieltsonlinetests.com/ielts-mock-test-2025-september-listening-practice-test-2?mode=practice_test&parts=full&duration=32" },
                    { num: 5, url: "https://ieltsonlinetests.com/ielts-mock-test-2026-january-listening-practice-test-1?mode=practice_test&parts=full&duration=32" },
                  ].map((test) => (
                    <a
                      key={test.num}
                      href={test.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-xs font-bold text-slate-800 hover:text-blue-700 transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center text-[10px] font-black">
                          {test.num}
                        </span>
                        <span>IELTS Listening Test 0{test.num}</span>
                      </div>
                      <span className="text-[10px] text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        Take Test ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="https://ieltsonlinetests.com/ielts-mock-test-2024-march-listening-practice-test-2?mode=practice_test&parts=full&duration=32"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-blue w-full justify-center py-2.5 text-xs font-bold"
              >
                Take Listening Tests ↗
              </a>
            </div>

            {/* 2. READING MASTERY */}
            <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 shadow-lg flex flex-col justify-between hover-elevate space-y-5">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold">
                    📖
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-black uppercase">
                    Pillar 02
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 font-heading">
                  Reading Mastery
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  স্কিমিং, স্ক্যানিং, ট্রু/ফলস/নট গিভেন ও হেডিং ম্যাচিং টেস্ট।
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-3">
                  {[
                    { num: 1, url: "https://ieltsonlinetests.com/ielts-mock-test-2024-february-reading-practice-test-1?mode=practice_test&parts=full&duration=60" },
                    { num: 2, url: "https://ieltsonlinetests.com/ielts-mock-test-2024-october-reading-practice-test-1?mode=practice_test&parts=full&duration=60" },
                    { num: 3, url: "https://ieltsonlinetests.com/ielts-mock-test-2025-september-reading-practice-test-1?mode=practice_test&parts=full&duration=60" },
                    { num: 4, url: "https://ieltsonlinetests.com/ielts-mock-test-2025-june-reading-practice-test-1?mode=practice_test&parts=full&duration=60" },
                    { num: 5, url: "https://ieltsonlinetests.com/ielts-mock-test-2025-july-reading-practice-test-1?mode=practice_test&parts=full&duration=60" },
                  ].map((test) => (
                    <a
                      key={test.num}
                      href={test.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-xs font-bold text-slate-800 hover:text-emerald-700 transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">
                          {test.num}
                        </span>
                        <span>IELTS Reading Test 0{test.num}</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        Take Test ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="https://ieltsonlinetests.com/ielts-mock-test-2024-february-reading-practice-test-1?mode=practice_test&parts=full&duration=60"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-amber w-full justify-center py-2.5 text-xs font-bold"
              >
                Take Reading Tests ↗
              </a>
            </div>

            {/* 3. WRITING LAB */}
            <div className="bg-white rounded-3xl p-6 border-2 border-purple-200 shadow-lg flex flex-col justify-between hover-elevate space-y-5">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl font-bold">
                    ✍️
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[11px] font-black uppercase">
                    Pillar 03
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 font-heading">
                  Writing Lab
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  টাস্ক ১ ডাটা সিন্থেসিস ও টাস্ক ২ আর্গুমেন্টেটিভ এসে প্র্যাকটিস টেস্ট।
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-3">
                  {[1, 2, 3, 4, 5].map((testNum) => (
                    <a
                      key={testNum}
                      href={`https://wa.me/8801738474611?text=${encodeURIComponent(`Hi IELTS ESSENCE! I want to submit IELTS Writing Test 0${testNum} for expert evaluation.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-300 text-xs font-bold text-slate-800 hover:text-purple-700 transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-purple-600 text-white flex items-center justify-center text-[10px] font-black">
                          {testNum}
                        </span>
                        <span>IELTS Writing Test 0{testNum}</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        WhatsApp ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/8801738474611?text=${encodeURIComponent("Hi IELTS ESSENCE! I want to take IELTS Writing Tests & get expert evaluation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-blue w-full justify-center py-2.5 text-xs font-bold"
              >
                Take Writing Tests ↗
              </a>
            </div>

            {/* 4. SPEAKING SPRINTER */}
            <div className="bg-white rounded-3xl p-6 border-2 border-rose-200 shadow-lg flex flex-col justify-between hover-elevate space-y-5">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl font-bold">
                    🎙️
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[11px] font-black uppercase">
                    Pillar 04
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 font-heading">
                  Speaking Sprinter
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  পার্ট ১, ২ কিউ-কার্ড ও পার্ট ৩ অ্যাবস্ট্রাক্ট ডিসকাশন সিমুলেশন টেস্ট।
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-3">
                  {[1, 2, 3, 4, 5].map((testNum) => (
                    <a
                      key={testNum}
                      href={`https://wa.me/8801738474611?text=${encodeURIComponent(`Hi IELTS ESSENCE! I want to schedule an IELTS Speaking Test 0${testNum} 1-on-1 mock interview.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-xs font-bold text-slate-800 hover:text-rose-700 transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-rose-600 text-white flex items-center justify-center text-[10px] font-black">
                          {testNum}
                        </span>
                        <span>IELTS Speaking Test 0{testNum}</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        WhatsApp ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/8801738474611?text=${encodeURIComponent("Hi IELTS ESSENCE! I want to take IELTS Speaking Tests & book a 1-on-1 mock interview.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-amber w-full justify-center py-2.5 text-xs font-bold"
              >
                Take Speaking Tests ↗
              </a>
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
