"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, Award, ShieldCheck, 
  HelpCircle, ArrowRight, BookOpen, Clock, Users, FileText, CheckCircle2
} from "lucide-react";

export default function CourseBasicAdvancedPage() {
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
            <span className="text-rose-400">Basic To Advanced</span>
          </div>

          <span className="inline-block px-4 py-1 bg-rose-600 text-white rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 animate-pulse">
            🔥 Flagship Program • Band 7.5+ Target
          </span>

          <h1 className="inner-hero-title font-heading">
            IELTS Basic To Advanced Masterclass <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-rose-300 to-amber-300">
              The Complete 3–4 Months Foundation-to-Mastery Journey
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            যাদের বেসিক দুর্বল বা যারা একদম শুরু থেকে প্রস্তুতি নিয়ে প্রথমবারেই ব্যান্ড ৭.৫+ অর্জন করতে চান তাদের জন্য আমাদের সম্পূর্ণ পূর্ণাঙ্গ কোর্স।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => openModal("Basic To Advanced")} 
              className="btn-cta-amber cursor-pointer"
            >
              Apply For Next Batch Admission →
            </button>
            <a 
              href="https://wa.me/8801738474611?text=Hi%2C%20I%20want%20to%20know%20about%20IELTS%20Basic%20To%20Advanced%20Course" 
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
          COURSE HIGHLIGHTS & SUMMARY
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="feature-pill-badge bg-blue-100 text-blue-700">📘 Complete Curriculum</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Everything You Need to Ace IELTS in One Comprehensive Program
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                কোর্সে থাকছে ৪৮টি লাইভ ক্লাস, যেখানে রিডিং, লিসেনিং, রাইটিং ও স্পিকিংয়ের প্রতিটি টাইপ বিশদভাবে শেখানো হয়। ক্লাসের পাশাপাশি প্রতিদিন ওয়ান-অন-ওয়ান স্পিকিং সেশন এবং আনলিমিটেড রাইটিং মূল্যায়নের নিশ্চয়তা।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-rose-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">৪৮টি ইন্টারেক্টিভ ক্লাস</h4>
                    <p className="text-xs text-slate-500 mt-0.5">লাইভ লেকচার + ক্লাস রেকর্ডিং লাইফটাইম অ্যাক্সেস</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-rose-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">আনলিমিটেড Writing Eval</h4>
                    <p className="text-xs text-slate-500 mt-0.5">TR, CC, LR, GRA ধরে ২৪ ঘণ্টার মধ্যে ফিডব্যাক</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-rose-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">ডেইলি 1-on-1 Speaking</h4>
                    <p className="text-xs text-slate-500 mt-0.5">প্রতিদিন পার্টনার প্র্যাকটিস ও এক্সাম সিমুলেশন</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-rose-600 font-bold text-lg">✔</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">২০টি ফুল Mock Tests</h4>
                    <p className="text-xs text-slate-500 mt-0.5">আইডিপি স্ট্যান্ডার্ড সিডি ও পেপার-বেসড মক</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Pricing Box */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border-2 border-rose-500 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-extrabold text-rose-600 uppercase tracking-wider font-heading">Admission Open</span>
                  <h3 className="text-2xl font-black text-slate-900 font-heading mt-1">Enroll in Next Batch</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 line-through font-semibold">BDT 15,000</div>
                  <div className="text-3xl font-black text-slate-900 font-heading">৳ ৯,৯৯৯</div>
                </div>
              </div>

              <ul className="space-y-3 py-6 text-xs text-slate-700">
                <li className="flex items-center gap-2"><span>📅</span> <strong>মেয়াদ:</strong> ৩–৪ মাস (সপ্তাহে ৩ দিন ক্লাস + প্রতিদিন স্পিকিং)</li>
                <li className="flex items-center gap-2"><span>👥</span> <strong>ব্যাচ সাইজ:</strong> সর্বোচ্চ ১৫–২০ জন (Personal Care)</li>
                <li className="flex items-center gap-2"><span>📚</span> <strong>ম্যাটেরিয়ালস:</strong> সম্পূর্ণ হার্ডকপি লেকচার শিট ও পিডিএফ ফ্রি</li>
                <li className="flex items-center gap-2"><span>🎓</span> <strong>স্টাডি অ্যাব্রড:</strong> সম্পূর্ণ ফ্রি ভিসা ও এসওপি গাইডেন্স</li>
              </ul>

              <button 
                onClick={() => openModal("Basic To Advanced")} 
                className="btn-cta-amber w-full py-4 text-base font-extrabold justify-center cursor-pointer"
              >
                Confirm Your Admission Seat →
              </button>
              <div className="text-center text-[11px] text-slate-400 mt-3">
                ⚡ সীমিত আসন সংখ্যা • ফার্স্ট কাম ফার্স্ট সার্ভ ভিত্তিতে ভর্তি নেওয়া হচ্ছে
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: MONTH-BY-MONTH MASTERY ROADMAP
          ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="feature-pill-badge bg-blue-100 text-blue-700">🗓️ 16-Week Curriculum</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Month-By-Month Progression Architecture
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              বেসিক গ্রামার থেকে শুরু করে ব্যান্ড ৮.৫ এক্সাম সিমুলেশন পর্যন্ত সুবিন্যস্ত ধাপ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 hover-elevate">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 font-extrabold text-xs rounded-full font-heading">Month 1</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Foundation & Grammar</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sentence structures, tense consistency, punctuation rules, and 500 academic vocabulary foundation.
              </p>
              <div className="text-[11px] font-bold text-blue-600 pt-2 border-t border-slate-200">Weekly Diagnostic Assessment</div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 hover-elevate">
              <span className="px-3 py-1 bg-rose-100 text-rose-700 font-extrabold text-xs rounded-full font-heading">Month 2</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Core Module Strategies</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reading scanning tricks, Cambridge listening trap elimination, Task 1 report structure, and Task 2 body planning.
              </p>
              <div className="text-[11px] font-bold text-rose-600 pt-2 border-t border-slate-200">First Grand Mock Exam</div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 hover-elevate">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 font-extrabold text-xs rounded-full font-heading">Month 3</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Speed & Accuracy Drill</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                60-minute reading time management, line-by-line red-ink writing revisions, and daily speaking partner interviews.
              </p>
              <div className="text-[11px] font-bold text-purple-600 pt-2 border-t border-slate-200">Sectional Mock Series</div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 hover-elevate">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-extrabold text-xs rounded-full font-heading">Month 4</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Real Test Simulation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                10 Full-length mock tests under real test center conditions, personalized score optimization, and exam registration support.
              </p>
              <div className="text-[11px] font-bold text-emerald-600 pt-2 border-t border-slate-200">Target Band 7.5+ Readiness</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: FLAGSHIP PERKS & ZERO-RISK WARRANTY
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider border border-emerald-500/30">
              <span>👑 Premium Flagship Package</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Everything Included In Your Flagship Enrollment
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              কোনো এক্সট্রা হিডেন চার্জ নেই — কমপ্লিট আইইএলটিএস সলিউশন ও স্টাডি অ্যাব্রোড সহায়তা।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl font-bold">📝</div>
              <h4 className="text-white font-bold text-base font-heading">Unlimited Red-Ink Writing Reviews</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                কোর্সের মেয়াদকালীন আপনি যত ইচ্ছা রচনা লিখে জমা দিতে পারেন; প্রতিটির লাইন-বাই-লাইন ভুল ও মডেল সেন্টেন্স পাবেন।
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-bold">🗣️</div>
              <h4 className="text-white font-bold text-base font-heading">Daily 1-on-1 Speaking Club</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                প্রতিদিন নির্দিষ্ট সময়ে পার্টনার ও মেন্টরের উপস্থিতিতে কিউ কার্ড প্রেজেন্টেশন ও ইনস্ট্যান্ট ফিডব্যাক সেশন।
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-bold">🎓</div>
              <h4 className="text-white font-bold text-base font-heading">Free SOP & University Application</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                ব্যান্ড স্কোর আসার পর কানাডা, ইউকে, অস্ট্রেলিয়ার বিশ্ববিদ্যালয়ের জন্য ফ্রি স্টেটমেন্ট অফ পারপাস (SOP) এডিটিং।
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
            Book Your Diagnostic Slot
          </span>
          <h2 className="cta-banner-headline font-heading">
            Take The First Step Towards Band 7.5+
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            ফ্রি ডায়াগনস্টিক টেস্ট দিয়ে আপনার বর্তমান লেভেল চেক করুন এবং জুয়েল স্যারের সাথে স্টাডি প্ল্যান রেডি করুন।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("Basic To Advanced")} 
              className="btn-cta-amber cursor-pointer"
            >
              Claim Free Diagnostic Seat →
            </button>
            <Link href="/courses" className="btn-cta-blue">
              Compare Other Courses →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
