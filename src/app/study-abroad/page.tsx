"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, Award, ShieldCheck, 
  HelpCircle, ArrowRight, Plane, Globe, BookOpen, GraduationCap, CheckCircle2
} from "lucide-react";

export default function StudyAbroadPage() {
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
            <span className="text-rose-400">Study Abroad Pathway</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            Your Global University Pathway <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-emerald-300 to-amber-300">
              From IELTS Score To Visa Stamp
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            যুক্তরাজ্য, কানাডা, আমেরিকা, অস্ট্রেলিয়া ও ইউরোপের শীর্ষ বিশ্ববিদ্যালয়সমূহে আবেদন, স্কলারশিপ ও ১০০% জেনুইন ভিসা প্রসেসিং গাইডলাইন।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => openModal("Study Abroad Shortlist")} 
              className="btn-cta-amber cursor-pointer"
            >
              Get Free University Shortlist →
            </button>
            <a href="#destinations" className="btn-cta-blue">
              View Country Guidelines ↓
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          COUNTRY DESTINATIONS DIRECTORY
          ========================================================================== */}
      <section id="destinations" className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-emerald-100 text-emerald-700 mb-3">🌍 Top Destinations</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Explore Your Dream Study Destination
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              প্রতিটি দেশের ব্যান্ড স্কোর রিকোয়ারমেন্ট, টিউশন ফি, পোস্ট-স্টাডি ওয়ার্ক পারমিট (PSW) ও স্কলারশিপ সুযোগ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Country 1: United Kingdom */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between hover-elevate">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">🇬🇧</span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 font-extrabold text-xs rounded-full">2 Years PSW</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-heading mb-2">United Kingdom (UK)</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  রাসেল গ্রুপ ও বিশ্বমানের ১ বছরের মাস্টার্স প্রোগ্রাম। স্পাউস সহ ভিসা ও হাই ভিসা সাকসেস রেট।
                </p>

                <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">IELTS Requirement:</span>
                    <strong className="text-slate-900">Band 6.0–6.5 (No band &lt; 5.5)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Tuition Fee Range:</span>
                    <strong className="text-slate-900">£12,000 – £18,000 / Year</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Major Intakes:</span>
                    <strong className="text-rose-600">September & January</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Scholarships:</span>
                    <strong className="text-emerald-600">Up to £2,000 – £5,000 Merit</strong>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => openModal("Study in UK")} 
                  className="btn-cta-blue w-full justify-center py-3 text-xs font-bold cursor-pointer"
                >
                  Apply For UK Admission →
                </button>
              </div>
            </div>

            {/* Country 2: Canada */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between hover-elevate">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">🇨🇦</span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 font-extrabold text-xs rounded-full">3 Years PGWP / PR</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-heading mb-2">Canada</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  উন্নত জীবনযাত্রার মান ও পড়াশোনা শেষেই এক্সপ্রেস এন্ট্রি পিআর (Permanent Residency) এর সরাসরি সুযোগ।
                </p>

                <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">IELTS Requirement:</span>
                    <strong className="text-slate-900">Band 6.5 (Overall)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Tuition Fee Range:</span>
                    <strong className="text-slate-900">CAD $16,000 – $25,000 / Year</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Major Intakes:</span>
                    <strong className="text-rose-600">Fall (Sept) & Winter (Jan)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Work Permit:</span>
                    <strong className="text-emerald-600">20 Hrs/Wk + Full-time Vacations</strong>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => openModal("Study in Canada")} 
                  className="btn-cta-blue w-full justify-center py-3 text-xs font-bold cursor-pointer"
                >
                  Apply For Canada SDS →
                </button>
              </div>
            </div>

            {/* Country 3: United States */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between hover-elevate">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">🇺🇸</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 font-extrabold text-xs rounded-full">3 Years STEM OPT</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-heading mb-2">United States (USA)</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  আইভি লীগ ও শীর্ষ রিসার্চ বিশ্ববিদ্যালয়। গ্র্যাজুয়েট অ্যাসিস্ট্যান্টশিপ (GA/RA/TA) ও সম্পূর্ণ টিউশন ফি ওয়েভার।
                </p>

                <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">IELTS Requirement:</span>
                    <strong className="text-slate-900">Band 6.5–7.5</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Tuition Fee Range:</span>
                    <strong className="text-slate-900">$18,000 – $35,000 / Year</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Major Intakes:</span>
                    <strong className="text-rose-600">August (Fall) & Spring (Jan)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Funding Options:</span>
                    <strong className="text-emerald-600">Full / Partial Assistantships</strong>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => openModal("Study in USA")} 
                  className="btn-cta-blue w-full justify-center py-3 text-xs font-bold cursor-pointer"
                >
                  Apply For USA Admission →
                </button>
              </div>
            </div>

            {/* Country 4: Australia */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between hover-elevate">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">🇦🇺</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 font-extrabold text-xs rounded-full">2–4 Years Post Study</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-heading mb-2">Australia</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  গ্রুপ অফ এইট (Go8) ইউনিভার্সিটি এবং রিজিওনাল এরিয়ায় এক্সট্রা পিআর পয়েন্ট ও বর্ধিত পোস্ট-স্টাডি ভিসা সুবিধা।
                </p>

                <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">IELTS Requirement:</span>
                    <strong className="text-slate-900">Band 6.5 (No band &lt; 6.0)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Tuition Fee Range:</span>
                    <strong className="text-slate-900">AUD $22,000 – $38,000 / Year</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Major Intakes:</span>
                    <strong className="text-rose-600">February & July</strong>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => openModal("Study in Australia")} 
                  className="btn-cta-blue w-full justify-center py-3 text-xs font-bold cursor-pointer"
                >
                  Apply For Australia Subclass 500 →
                </button>
              </div>
            </div>

            {/* Country 5: Germany & Europe */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between hover-elevate">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">🇩🇪</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 font-extrabold text-xs rounded-full">Zero Tuition Fee</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-heading mb-2">Germany & Europe</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  পাবলিক বিশ্ববিদ্যালয়ে সম্পূর্ণ বিনামূল্যে বিশ্বমানের উচ্চশিক্ষা এবং ১৮ মাসের জব সার্চ ভিসা।
                </p>

                <div className="space-y-3 pb-6 border-b border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">IELTS Requirement:</span>
                    <strong className="text-slate-900">Band 6.5 (English Taught)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Tuition Fee:</span>
                    <strong className="text-emerald-600">€0 / Free (Public Univ)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Living Expense:</span>
                    <strong className="text-slate-900">Blocked Account (~€11,208)</strong>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => openModal("Study in Germany")} 
                  className="btn-cta-blue w-full justify-center py-3 text-xs font-bold cursor-pointer"
                >
                  Apply For Germany Public Uni →
                </button>
              </div>
            </div>

            {/* Country 6: Profile Assessment Card */}
            <div className="bg-gradient-to-br from-rose-600 to-blue-700 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between hover-elevate">
              <div>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-black font-heading mb-2">Free Profile Assessment</h3>
                <p className="text-xs text-blue-100 leading-relaxed mb-6">
                  আপনার সিজিপিএ, বাজেট ও ক্যারিয়ার লক্ষ্য অনুযায়ী সেরা ৫টি বিশ্ববিদ্যালয় শর্টলিস্ট করে দেওয়া হবে সম্পূর্ণ ফ্রিতে।
                </p>
              </div>
              <button 
                onClick={() => openModal("Profile Shortlist Assessment")} 
                className="btn-cta-amber w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
              >
                Request Profile Evaluation →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          STEP BY STEP STUDY ABROAD ROADMAP
          ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-rose-100 text-rose-700 mb-3">📍 The Complete Process</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Step-by-Step Study Abroad Roadmap
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              আইইএলটিএস প্রস্তুতি থেকে শুরু করে বিদেশে পৌঁছানো পর্যন্ত প্রতিটি ধাপের সুস্পষ্ট গাইডলাইন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="roadmap-step-card">
              <div className="roadmap-step-num font-heading">01</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5 font-heading">IELTS Preparation & Score</h4>
              <p className="text-xs text-slate-500">IELTS ESSENCE এ ভর্তি হয়ে টার্গেট অনুযায়ী ব্যান্ড ৭.০+ স্কোর অর্জন।</p>
            </div>

            <div className="roadmap-step-card">
              <div className="roadmap-step-num font-heading">02</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5 font-heading">SOP, LOR & Shortlisting</h4>
              <p className="text-xs text-slate-500">স্টেটমেন্ট অব পারপাস (SOP) প্রস্তুতকরণ ও পারফেক্ট ৫-৮টি বিশ্ববিদ্যালয় বাছাই।</p>
            </div>

            <div className="roadmap-step-card">
              <div className="roadmap-step-num font-heading">03</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5 font-heading">Offer Letter & Bank Solvency</h4>
              <p className="text-xs text-slate-500">অফার লেটার কনফার্মেশন ও প্রয়োজনীয় ব্যাংক স্টেটমেন্ট স্পন্সরশিপ গাইডলাইন।</p>
            </div>

            <div className="roadmap-step-card">
              <div className="roadmap-step-num font-heading">04</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5 font-heading">Visa File & Mock Interview</h4>
              <p className="text-xs text-slate-500">এমব্যাসি ইন্টারভিউয়ের জন্য মক সেশন ও ভিসা গ্রান্ট নিশ্চিতকরণ।</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: SCHOLARSHIPS & FULL TUITION WAIVER MATRIX
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-extrabold uppercase tracking-wider border border-amber-500/30">
              <span>🏆 Global Scholarship Radar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Top Global Scholarships For Bangladeshi Students
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              উচ্চ সিজিপিএ ও আইইএলটিএস ব্যান্ড ৭.৫+ থাকলে শতভাগ টিউশন ফি মওকুফ ও মাসিক স্টাইপেন্ড পাওয়ার সুযোগ।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3 hover:border-amber-500/50 transition-all">
              <span className="text-2xl">🇬🇧</span>
              <h4 className="font-bold text-white text-base font-heading">Chevening & Commonwealth</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                যুক্তরাজ্যের শতভাগ টিউশন ফি, বিমানের টিকিট ও থাকা-খাওয়ার সম্পূর্ণ খরচসহ মর্যাদাপূর্ণ সরকারি স্কলারশিপ।
              </p>
              <div className="text-[11px] font-bold text-amber-400">Target IELTS: 7.0 (No band &lt; 6.5)</div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3 hover:border-amber-500/50 transition-all">
              <span className="text-2xl">🇦🇺</span>
              <h4 className="font-bold text-white text-base font-heading">Australia Awards & Go8</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                অস্ট্রেলিয়ার শীর্ষ বিশ্ববিদ্যালয়গুলোতে ২৫% থেকে ১০০% পর্যন্ত একাডেমিক মেরিট স্কলারশিপ।
              </p>
              <div className="text-[11px] font-bold text-amber-400">Target IELTS: 6.5–7.5</div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3 hover:border-amber-500/50 transition-all">
              <span className="text-2xl">🇨🇦</span>
              <h4 className="font-bold text-white text-base font-heading">Vanier & Graduate RA/TA</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                কানাডিয়ান বিশ্ববিদ্যালয়ে মাস্টার্স ও পিএইচডি গবেষকদের জন্য রিসার্চ অ্যাসিস্ট্যান্টশিপ ও ফুল ফান্ডিং।
              </p>
              <div className="text-[11px] font-bold text-amber-400">Target IELTS: 7.5+</div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 space-y-3 hover:border-amber-500/50 transition-all">
              <span className="text-2xl">🇪🇺</span>
              <h4 className="font-bold text-white text-base font-heading">Erasmus Mundus (EU)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                ইউরোপের একাধিক দেশে পড়ালেখার অভিজ্ঞতা ও প্রতি মাসে €১,৪০০ পর্যন্ত লিভিং স্টাইপেন্ড।
              </p>
              <div className="text-[11px] font-bold text-amber-400">Target IELTS: 7.0+</div>
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
            Free Visa Consultation
          </span>
          <h2 className="cta-banner-headline font-heading">
            Confused About Which University Or Intake Is Right For You?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            আমাদের স্টাডি অ্যাব্রড এক্সপার্টদের সাথে সরাসরি পরামর্শ করে আপনার প্রোফাইল অ্যাসেসমেন্ট করিয়ে নিন।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("Study Abroad Consultation")} 
              className="btn-cta-amber cursor-pointer"
            >
              Book Free Study Abroad Slot →
            </button>
            <a 
              href="https://wa.me/8801738474611" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-cta-blue"
            >
              WhatsApp: 01738-474611
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
