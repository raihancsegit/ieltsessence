"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ShieldCheck, CheckCircle2, ChevronRight, Award, Users, 
  Target, Sparkles, BookOpen, Clock, Calendar, MessageSquare, ArrowRight
} from "lucide-react";

export default function MentorsPage() {
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
            <span className="text-rose-400">Founder & Faculty Mentors</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            Learn From Certified Mentors <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-rose-300 to-amber-300">
              Who Have Achieved Band 8.0 & 8.5
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            আমাদের মেন্টর প্যানেলে রয়েছেন ঢাকা বিশ্ববিদ্যালয়, ডুয়েট ও আন্তর্জাতিক বিশ্ববিদ্যালয়ের সার্টিফায়েড ট্রেইনাররা, যারা প্রতিদিন আপনার লেখার মূল্যায়ন ও স্পিকিং মেন্টরিং করেন।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => openModal("Faculty Demo Class")} 
              className="btn-cta-amber cursor-pointer"
            >
              Book A Demo Class with Jewel Sir →
            </button>
            <Link href="/success-stories" className="btn-cta-blue">
              See Student Reviews ↓
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          FOUNDER SPOTLIGHT CARD
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-center">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-900/60 to-slate-800 border border-white/10 p-8 shadow-2xl">
                <div className="w-36 h-36 rounded-full mx-auto bg-gradient-to-tr from-rose-500 to-blue-500 p-1 mb-6 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl">
                    👨‍🏫
                  </div>
                </div>
                <h2 className="text-3xl font-black text-white font-heading">Jewel Ahamadinezad</h2>
                <div className="text-rose-400 font-bold text-sm mt-1">Founder & Lead Mentor | DUET Graduate</div>
                
                <div className="inline-block px-4 py-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-extrabold mt-4">
                  Official IELTS Band 8.5 Scorer
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-white font-heading">7+ Yrs</div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-rose-400 font-heading">2,500+</div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Trained</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-amber-300 font-heading">8.5</div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Band Score</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="feature-pill-badge bg-rose-500/20 text-rose-400 border border-rose-500/30">🎯 Mentorship Philosophy</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                "IELTS পরীক্ষায় সফলতার জন্য প্রয়োজন সঠিক দিকনির্দেশনা ও রিয়েল প্র্যাকটিস"
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                আমি জুয়েল আহমেদ, ঢাকা ইউনিভার্সিটি অব ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি (DUET) থেকে পড়াশোনা সম্পন্ন করে বিগত ৭ বছর ধরে বাংলাদেশের শিক্ষার্থীদের IELTS ও স্টাডি অ্যাব্রড রোডম্যাপে সরাসরি মেন্টরিং করে আসছি।
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                আমার ইউটিউব ক্লাস ও অফলাইন সেশনের মাধ্যমে হাজারো শিক্ষার্থী কোনো ব্যাকগ্রাউন্ডের দুর্বলতা সত্ত্বেও প্রথমবারেই ব্যান্ড ৭.০, ৭.৫ এবং ৮.০ স্কোর অর্জন করতে পেরেছে। মুখস্থ ফরম্যাট নয়—ক্যামব্রিজ অথেনটিক লজিকই আমাদের সাফল্যের চাবিকাঠি।
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button 
                  onClick={() => openModal("Jewel Sir 1-on-1")} 
                  className="btn-cta-amber cursor-pointer"
                >
                  Book 1-on-1 Profile Counselling →
                </button>
                <a 
                  href="https://wa.me/8801738474611" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-header-outline text-white border-white/20 bg-white/5 hover:bg-white/10"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          EXPERT FACULTY PANELS
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-blue-100 text-blue-700 mb-3">👨‍🎓 Specialized Faculty</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Module-Wise Specialist Faculty Team
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              প্রতিটি মডিউলের জন্য ডেডিকেটেড এক্সপার্ট যারা আপনার দুর্বল জায়গায় সরাসরি কাজ করেন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 hover-elevate">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-3xl mb-4 font-bold">✍️</div>
              <span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-extrabold">Band 8.0+ Evaluators</span>
              <h3 className="text-xl font-extrabold text-slate-900 font-heading">Writing Evaluation Panel</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                প্রতিটি রচনায় TR, CC, LR, এবং GRA ধরে ভুল মার্কিং করেন এবং ব্যান্ড ৯ অল্টারনেটিভ সেন্টেন্স প্রোভাইড করে ২৪ ঘণ্টার মধ্যে ফিডব্যাক দেন।
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 hover-elevate">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mb-4 font-bold">🗣️</div>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-extrabold">Fluency & Accent Coaches</span>
              <h3 className="text-xl font-extrabold text-slate-900 font-heading">Speaking Masterclass Coaches</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                দৈনিক ওয়ান-অন-ওয়ান স্পিকিং সেশন পরিচালনা করেন, ভয় দূর করে ন্যাচারাল ফ্লো এবং এক্সামিনার কিউ কার্ড ট্যাকল করার মাস্টারক্লাস দেন।
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 hover-elevate">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-3xl mb-4 font-bold">🎯</div>
              <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-extrabold">Cambridge Strategists</span>
              <h3 className="text-xl font-extrabold text-slate-900 font-heading">Reading & Listening Experts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                টাইম ম্যানেজমেন্ট, প্যারাফ্রেজিং ডিকোডিং এবং ট্র্যাপ অপশন এলিমিনেশন টেকনিকের মাধ্যমে রিডিং ও লিসেনিংয়ে ব্যান্ড ৮.৫+ নিশ্চিত করেন।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: 1-ON-1 MENTOR OFFICE HOURS & PRIVATE DOUBT CLEARING
          ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="feature-pill-badge bg-rose-100 text-rose-700">💬 Personalized Support</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Unlimited 1-on-1 Office Hours With Jewel Sir
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                বড় কোচিং সেন্টারের মতো শত শত শিক্ষার্থীর ভিড়ে আপনি হারিয়ে যাবেন না। আমাদের সিস্টেমে প্রতি সপ্তাহে মেন্টরের সাথে ওয়ান-অন-ওয়ান বসার নির্ধারিত অফিস আওয়ার স্লট পাবেন।
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Personalized Mistake Log Review</h4>
                    <p className="text-xs text-slate-500 mt-0.5">আপনার বিগত মক টেস্টের ভুলের খাতা দেখে দুর্বল অংশের জন্য স্পেশাল এক্সারসাইজ প্ল্যান।</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Direct WhatsApp Mentor Helpline</h4>
                    <p className="text-xs text-slate-500 mt-0.5">যেকোনো রিডিং বা রাইটিং ডাউটে তাৎক্ষণিক ভয়েস নোট ও সমাধান সহায়তা।</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Pre-Exam Psychological Readiness</h4>
                    <p className="text-xs text-slate-500 mt-0.5">পরীক্ষার ৭ দিন আগে এক্সাম ডে স্ট্র্যাটেজি ও স্ট্রেস ম্যানেজমেন্ট সেশন।</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center font-bold font-heading">JA</div>
                    <div>
                      <h4 className="font-bold text-sm font-heading">Office Hour Booking</h4>
                      <div className="text-[11px] text-emerald-400 font-bold">● Active For Enrolled Students</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-white/10 text-amber-300 text-xs font-bold rounded-full">Free With Course</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>📅 Slot 1: Tuesday (4:00 PM – 6:00 PM)</span>
                    <span className="text-rose-400 font-bold">Writing Focus</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>📅 Slot 2: Thursday (4:00 PM – 6:00 PM)</span>
                    <span className="text-blue-400 font-bold">Speaking Focus</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>📅 Slot 3: Saturday (7:00 PM – 9:00 PM)</span>
                    <span className="text-emerald-400 font-bold">Mock Analysis</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button 
                    onClick={() => openModal("Trial Mentorship Slot")} 
                    className="btn-cta-amber w-full py-3.5 justify-center text-xs cursor-pointer"
                  >
                    Book A Free Trial Mentorship Slot →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: MENTOR'S RESEARCH & PUBLISHED STRATEGY MATERIALS
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider border border-emerald-500/30">
              <span>📚 Exclusive Curriculum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Proprietary Study Materials Prepared By Our Faculty
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              আমাদের মেন্টরদের নিজস্ব গবেষণায় প্রস্তুতকৃত এক্সক্লুসিভ রিসোর্স যা শুধু আমাদের শিক্ষার্থীদের বিনামূল্যে সরবরাহ করা হয়।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl font-bold">📕</div>
              <h3 className="text-lg font-bold text-white font-heading">Band 9 Writing Model Vault</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                বিগত ১০ বছরের রিয়েল পরীক্ষার ১৫০+ টাস্ক ১ ও টাস্ক ২ এর ফুল ব্যান্ড ৯ স্যাম্পল রচনা ও এক্সামিনার কমেন্টারি।
              </p>
              <span className="inline-block px-3 py-1 bg-white/10 text-emerald-400 font-bold text-[11px] rounded-lg">Included Free In Course</span>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-bold">📘</div>
              <h3 className="text-lg font-bold text-white font-heading">500 Academic Collocations Bible</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                সাধারণ শব্দ পরিহার করে কীভাবে রাইটিং ও স্পিকিংয়ে ন্যাচারাল ফ্রেজ ও কলকেশন ব্যবহার করবেন তার কমপ্লিট ডিকশনারি।
              </p>
              <span className="inline-block px-3 py-1 bg-white/10 text-emerald-400 font-bold text-[11px] rounded-lg">Included Free In Course</span>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl font-bold">📗</div>
              <h3 className="text-lg font-bold text-white font-heading">Speaking Cue Card Master Formula</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                যেকোনো আনকমন টপিক আসলেও ৩টি ইউনিভার্সাল স্টোরিলাইন দিয়ে ২ মিনিট ফ্লুয়েন্টলি কথা বলার প্রমাণিত কৌশল।
              </p>
              <span className="inline-block px-3 py-1 bg-white/10 text-emerald-400 font-bold text-[11px] rounded-lg">Included Free In Course</span>
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
            Meet The Lead Mentor
          </span>
          <h2 className="cta-banner-headline font-heading">
            Have Questions About Your IELTS Preparation?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            জুয়েল স্যারের সাথে সরাসরি কথা বলে আপনার বর্তমান লেভেলের সঠিক মূল্যায়ন নিন।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("Mentor Direct Connect")} 
              className="btn-cta-amber cursor-pointer"
            >
              Connect With Jewel Sir on WhatsApp →
            </button>
            <Link href="/courses" className="btn-cta-blue">
              View Course Catalog →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
