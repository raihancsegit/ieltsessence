"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import confetti from "canvas-confetti";
import { 
  Sparkles, ArrowRight, CheckCircle2, Star, Trophy, Users, BookOpen, 
  ShieldCheck, Calculator, PenTool, Award, PlayCircle, ChevronRight, 
  MessageSquare, ChevronDown, Phone, Globe, Volume2, Pause, Play, ArrowUp
} from "lucide-react";

export default function HomePage() {
  const { openModal } = useModal();
  
  // Interactive Speaking Audio Player State
  const [playingAudio, setPlayingAudio] = useState<"band8" | "band6" | null>(null);

  // Band Score Calculator State
  const [calcL, setCalcL] = useState<number>(7.5);
  const [calcR, setCalcR] = useState<number>(7.5);
  const [calcW, setCalcW] = useState<number>(7.0);
  const [calcS, setCalcS] = useState<number>(7.5);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Back to Top Visibility State
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculator Logic (Official Rounding)
  const computeOverall = (l: number, r: number, w: number, s: number) => {
    const raw = (l + r + w + s) / 4;
    const dec = raw - Math.floor(raw);
    if (dec < 0.25) return Math.floor(raw);
    if (dec >= 0.25 && dec < 0.75) return Math.floor(raw) + 0.5;
    return Math.ceil(raw);
  };

  const currentOverall = computeOverall(calcL, calcR, calcW, calcS);

  const getCalcFeedback = (score: number) => {
    if (score >= 8.0) {
      return "🌟 Expert User! Perfect for Ivy League, Oxford, Cambridge & Top Global Scholarships.";
    } else if (score >= 7.5) {
      return "✅ Great Score! Perfect for UK, Canada, Australia & European University Admissions & PR.";
    } else if (score >= 6.5) {
      return "📈 Good Foundation! Suitable for Direct Masters Entry. 4-6 weeks of writing focus can elevate you to 7.5+.";
    } else {
      return "💡 Recommended: Complete IELTS Basic to Advanced program to systematically master all 4 skills.";
    }
  };

  const toggleAudio = (type: "band8" | "band6") => {
    if (playingAudio === type) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(type);
    }
  };

  const faqs = [
    {
      q: "1. How long does it take to prepare for IELTS?",
      a: "Depending on your current English proficiency level and target score, preparation typically takes 40 days to 4 months. We conduct a Diagnostic Assessment to determine your exact timeline."
    },
    {
      q: "2. Can beginners join IELTS ESSENCE?",
      a: "Yes! Our 'IELTS Basic To Advanced' course is specifically designed for beginners to build English grammar and vocabulary fundamentals before moving to exam strategies."
    },
    {
      q: "3. Do you provide Writing Evaluation?",
      a: "Absolutely. Every student gets detailed line-by-line evaluation for Task 1 and Task 2 essays according to official Cambridge assessment criteria."
    },
    {
      q: "4. Is Speaking Practice available daily?",
      a: "Yes. Our Speaking Partner Program allows students to practice daily with matched partners and receive regular feedback from mentors."
    },
    {
      q: "5. Do you offer online classes?",
      a: "Yes, we offer live interactive online classes with HD recording access as well as physical offline classes at our SM Bhaban, Badda campus."
    },
    {
      q: "6. Do you provide Mock Tests?",
      a: "Yes, we conduct full-length paper-based and computer-delivered mock tests with comprehensive score analytics and post-test counselling."
    },
    {
      q: "7. Can I get counselling before admission?",
      a: "Yes, free 1-on-1 expert counselling is available anytime! Simply click 'Free Counselling' or contact us on WhatsApp to book a slot."
    },
    {
      q: "8. Which course is best for me?",
      a: "Take our Diagnostic Assessment or talk to our lead counsellor to find the exact course program tailored to your target band score and deadline."
    }
  ];

  return (
    <div className="space-y-0">
      {/* ==========================================================================
          1. HOMEPAGE HERO SECTION
          ========================================================================== */}
      <section id="home" className="hero-wrapper relative overflow-hidden">
        {/* Ambient Glowing Blur Orbs */}
        <div className="ambient-glow-orb-rose -top-20 -left-20 pointer-events-none" />
        <div className="ambient-glow-orb-blue top-40 -right-20 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="hero-pill-tag">
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                <span>#1 IELTS PREPARATION & STUDY ABROAD PLATFORM</span>
              </div>

              <h1 className="hero-main-title text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight font-heading">
                যে IELTS দেয়, <br />
                <span className="gradient-title-text animate-gradient-text">সে বিদেশ যায়</span>
              </h1>

              {/* Feature Pills Grid */}
              <div className="hero-feature-pills">
                <span className="pill-item pill-rose hover-elevate">🏆 Band 8.5 DUET Mentors</span>
                <span className="pill-item pill-purple hover-elevate">✍️ Line-by-Line Writing Eval</span>
                <span className="pill-item pill-emerald hover-elevate">🎙️ Daily Speaking Lab</span>
                <span className="pill-item pill-amber hover-elevate">📝 20 Full Mock Tests</span>
              </div>

              <p className="hero-description text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                <strong className="text-rose-600 font-bold">জুয়েল ভাইয়ের</strong> ইউটিউব ক্লাস দেখে IELTS-এ সফল হয়েছেন হাজারো শিক্ষার্থী — এবার আপনার পালা! IELTS পরীক্ষায় সফলতার জন্য প্রয়োজন সঠিক দিকনির্দেশনা ও প্রস্তুতির কৌশল।
              </p>

              {/* CTAs */}
              <div className="hero-cta-group">
                <button 
                  onClick={() => openModal("Hero Free Counselling")} 
                  className="btn-cta-amber btn-shimmer cursor-pointer"
                >
                  📞 Free Counselling
                </button>
                <button 
                  onClick={() => openModal("Hero Apply For Admission")} 
                  className="btn-cta-blue btn-shimmer cursor-pointer"
                >
                  🚀 Apply For Admission
                </button>
              </div>

              <div className="pt-4 flex items-center gap-4 text-xs font-semibold text-slate-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center border-2 border-white shadow-sm">S1</div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center border-2 border-white shadow-sm">S2</div>
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center border-2 border-white shadow-sm">S3</div>
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center border-2 border-white shadow-sm">+</div>
                </div>
                <div>
                  <span className="text-slate-900 font-bold">1,500+ Ambitious Students</span> Enrolled Across Bangladesh
                </div>
              </div>
            </div>

            {/* Hero Right 3D Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="hero-card-container hover-elevate">
                <div className="hero-score-badge-card">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">TARGET BAND GUARANTEE</div>
                  <div className="score-giant-number font-heading">Band 8.5</div>
                  <p className="text-xs text-slate-300 font-medium mt-2">Personalised Study Roadmap</p>
                </div>

                {/* 4 Pillars Breakdown */}
                <div className="space-y-3 mt-6">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3 hover:bg-rose-50/50 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0">🏆</div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">Band 8 & 8.5 Scorer Mentors</div>
                      <div className="text-xs text-slate-500">Expert guidance for top scores</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3 hover:bg-emerald-50/50 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shrink-0">✍️</div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">Line-by-Line Writing Eval</div>
                      <div className="text-xs text-slate-500">Detailed correction & feedback</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="hero-floating-tag-1">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-md">★</div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">95% Success Rate</div>
                    <div className="text-[10px] text-slate-400">Target Band Score</div>
                  </div>
                </div>

                <div className="hero-floating-tag-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-md">🌐</div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Study Abroad Pathway</div>
                    <div className="text-[10px] text-slate-400">UK, Canada, Australia & USA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          2. TRUST INDICATOR SECTION
          ========================================================================== */}
      <section className="trust-bar-wrapper">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-rose-400 uppercase tracking-widest">Our Proven Impact</span>
            <h2 className="text-3xl font-extrabold text-white mt-1 font-heading">Trusted By Ambitious Students Across Bangladesh</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="counter-box">
              <div className="counter-val-num text-rose-400 font-heading">1,500+</div>
              <div className="counter-title-label">Successful Students</div>
            </div>

            <div className="counter-box">
              <div className="counter-val-num text-emerald-400 font-heading">5,000+</div>
              <div className="counter-title-label">Writing Evaluations</div>
            </div>

            <div className="counter-box">
              <div className="counter-val-num text-purple-400 font-heading">10,000+</div>
              <div className="counter-title-label">Speaking Practices</div>
            </div>

            <div className="counter-box">
              <div className="counter-val-num text-amber-400 font-heading">95%</div>
              <div className="counter-title-label">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          3. WHY CHOOSE IELTS ESSENCE (6 Advantage Cards) + SPEAKING AUDIO WIDGET
          ========================================================================== */}
      <section id="why-us" className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-rose-50 text-rose-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-rose-100">
              Key Advantages
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 font-heading">
              Why Students Choose IELTS ESSENCE
            </h2>
            <p className="text-slate-500 text-lg font-light mt-4">
              সঠিক দিকনির্দেশনা, ডেডিকেটেড মেন্টরশিপ এবং নিয়মিত ইভালুয়েশনের মাধ্যমে কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="why-feature-card">
              <div>
                <div className="icon-glow-box bg-rose-500 text-white shadow-lg shadow-rose-500/30 text-2xl">
                  🏆
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-heading">Band 8 & 8.5 Scorer Mentors</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Experienced instructors who understand what it takes to achieve a high band score and guide you step by step.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="why-feature-card">
              <div>
                <div className="icon-glow-box bg-blue-500 text-white shadow-lg shadow-blue-500/30 text-2xl">
                  👥
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-heading">4 Modules, 4 Dedicated Instructors</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Every module (Listening, Reading, Writing, Speaking) is taught by a specialized expert instructor.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="why-feature-card">
              <div>
                <div className="icon-glow-box bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 text-2xl">
                  ✍️
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-heading">Regular Writing Evaluation</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Detailed line-by-line correction and personalized feedback according to official IELTS assessment criteria.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="why-feature-card">
              <div>
                <div className="icon-glow-box bg-amber-500 text-white shadow-lg shadow-amber-500/30 text-2xl">
                  🎙️
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-heading">Daily Speaking Practice</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Partner-based speaking sessions with regular mentor assessment to boost confidence and fluency.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="why-feature-card">
              <div>
                <div className="icon-glow-box bg-purple-500 text-white shadow-lg shadow-purple-500/30 text-2xl">
                  🎯
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-heading">Real Exam Strategies</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Practical approaches, time management tricks, and exam-oriented techniques designed for real exam success.</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="why-feature-card hover-elevate">
              <div>
                <div className="icon-glow-box bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 text-2xl">
                  📈
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-heading">Progress Tracking</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Monitor your continuous improvement through regular sectional mock tests and analytics feedback.</p>
              </div>
            </div>
          </div>

          {/* INTERACTIVE SPEAKING AUDIO COMPARISON WIDGET */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
              <div>
                <div className="feature-pill-badge bg-emerald-100 text-emerald-700 mb-1">🎙️ Live Speaking Lab Demo</div>
                <h3 className="text-2xl font-black text-slate-900 font-heading">Listen to Band 8.5 vs Band 6.0 Speaking Audio</h3>
              </div>
              <span className="text-xs text-slate-400 font-semibold">Click Play to listen & compare fluency</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Audio Sample 1: Band 8.5 */}
              <div className={`speaking-audio-card flex flex-col justify-between hover-elevate ${playingAudio === "band8" ? "playing" : ""}`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-black rounded-full uppercase">Band 8.5 Response</span>
                    <div className="waveform-equalizer">
                      <span className="eq-bar"></span><span className="eq-bar"></span><span className="eq-bar"></span><span className="eq-bar"></span><span className="eq-bar"></span><span className="eq-bar"></span><span className="eq-bar"></span>
                    </div>
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">Topic: Describe your hometown</h4>
                  <p className="text-xs text-slate-300 italic mb-4">"Well, I hail from Dhaka, a bustling metropolis characterized by its vibrant cultural heritage and rapid urban sprawl..."</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-[11px] text-emerald-300 font-bold">Natural Collocations & Zero Hesitation</span>
                  <button 
                    onClick={() => toggleAudio("band8")}
                    className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    {playingAudio === "band8" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                </div>
              </div>

              {/* Audio Sample 2: Band 6.0 */}
              <div className={`speaking-audio-card flex flex-col justify-between hover-elevate ${playingAudio === "band6" ? "playing" : ""}`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-rose-500 text-white text-xs font-black rounded-full uppercase">Band 6.0 Common Errors</span>
                    <div className="waveform-equalizer">
                      <span className="eq-bar"></span><span className="eq-bar"></span><span className="eq-bar"></span><span className="eq-bar"></span><span className="eq-bar"></span>
                    </div>
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">Topic: Describe your hometown</h4>
                  <p className="text-xs text-slate-300 italic mb-4">"Uh... my city is Dhaka. It is very big city and there is a lot of traffic jam... and many people living there..."</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-[11px] text-rose-300 font-bold">Frequent Fillers ("uh/um") & Basic Vocab</span>
                  <button 
                    onClick={() => toggleAudio("band6")}
                    className="w-10 h-10 rounded-full bg-rose-500 hover:bg-rose-400 text-white flex items-center justify-center font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    {playingAudio === "band6" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          4. OUR METHOD (6 Step Roadmap)
          ========================================================================== */}
      <section id="method" className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-purple-50 text-purple-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-purple-100">
              Step-by-Step Learning Framework
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 font-heading">
              The IELTS ESSENCE Method
            </h2>
            <p className="text-slate-500 text-lg font-light mt-4">
              একটি বৈজ্ঞানিক ও সুনির্দিষ্ট পদ্ধতিতে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরে পৌঁছে দেওয়ার ৬-ধাপের রোডম্যাপ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="method-step-card">
              <div className="step-giant-badge font-heading">01</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-heading">Diagnostic Assessment</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Comprehensive evaluation to identify your current English proficiency level, strengths and weaknesses.</p>
            </div>

            <div className="method-step-card">
              <div className="step-giant-badge font-heading">02</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-heading">Personalised Study Plan</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Create a customized study roadmap tailored specifically according to your target band score and timeline.</p>
            </div>

            <div className="method-step-card">
              <div className="step-giant-badge font-heading">03</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-heading">Guided Learning</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Structured, interactive live classes covering strategies for all four IELTS modules by specialized mentors.</p>
            </div>

            <div className="method-step-card">
              <div className="step-giant-badge font-heading">04</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-heading">Practice & Evaluation</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Continuous daily practice assignments with detailed line-by-line writing corrections and speaking feedback.</p>
            </div>

            <div className="method-step-card">
              <div className="step-giant-badge font-heading">05</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-heading">Mock Test Simulation</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Experience real exam environment conditions with timed computer-delivered & paper-based mock tests.</p>
            </div>

            <div className="method-step-card">
              <div className="step-giant-badge font-heading">06</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-heading">Target Band Achievement</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Achieve the score required for your dream university, scholarship or migration destination successfully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          5. INTERACTIVE BAND SCORE CALCULATOR WIDGET
          ========================================================================== */}
      <section id="calculator" className="py-20 bg-slate-900 border-t border-b border-slate-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="calculator-widget-box">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3.5 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full uppercase">
                  Free Interactive Tool
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">Calculate Your Target IELTS Band Score</h2>
                <p className="text-xs text-slate-300">Select your estimated score for each module to calculate your overall band score and get course recommendations.</p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Listening Score</label>
                    <select 
                      value={calcL} 
                      onChange={(e) => setCalcL(parseFloat(e.target.value))}
                      className="calc-input-select cursor-pointer"
                    >
                      <option value="6.0">6.0</option>
                      <option value="6.5">6.5</option>
                      <option value="7.0">7.0</option>
                      <option value="7.5">7.5</option>
                      <option value="8.0">8.0</option>
                      <option value="8.5">8.5</option>
                      <option value="9.0">9.0</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Reading Score</label>
                    <select 
                      value={calcR} 
                      onChange={(e) => setCalcR(parseFloat(e.target.value))}
                      className="calc-input-select cursor-pointer"
                    >
                      <option value="6.0">6.0</option>
                      <option value="6.5">6.5</option>
                      <option value="7.0">7.0</option>
                      <option value="7.5">7.5</option>
                      <option value="8.0">8.0</option>
                      <option value="8.5">8.5</option>
                      <option value="9.0">9.0</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Writing Score</label>
                    <select 
                      value={calcW} 
                      onChange={(e) => setCalcW(parseFloat(e.target.value))}
                      className="calc-input-select cursor-pointer"
                    >
                      <option value="6.0">6.0</option>
                      <option value="6.5">6.5</option>
                      <option value="7.0">7.0</option>
                      <option value="7.5">7.5</option>
                      <option value="8.0">8.0</option>
                      <option value="8.5">8.5</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Speaking Score</label>
                    <select 
                      value={calcS} 
                      onChange={(e) => setCalcS(parseFloat(e.target.value))}
                      className="calc-input-select cursor-pointer"
                    >
                      <option value="6.0">6.0</option>
                      <option value="6.5">6.5</option>
                      <option value="7.0">7.0</option>
                      <option value="7.5">7.5</option>
                      <option value="8.0">8.0</option>
                      <option value="8.5">8.5</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/10 p-8 rounded-3xl border border-white/10 text-center space-y-4">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">ESTIMATED OVERALL BAND</div>
                <div id="calc-overall-score" className="text-6xl font-black text-amber-400 font-heading">
                  {currentOverall.toFixed(1)}
                </div>
                <p id="calc-recommendation" className="text-xs text-slate-200 leading-relaxed">
                  {getCalcFeedback(currentOverall)}
                </p>
                <button 
                  onClick={() => openModal(`Score Plan Consultation for Band ${currentOverall}`)} 
                  className="btn-cta-blue w-full py-3.5 text-xs cursor-pointer"
                >
                  Get Personalized Study Plan →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          6. COURSE SECTION (6 Programs + VIP Private Batch)
          ========================================================================== */}
      <section id="courses" className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-rose-50 text-rose-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-rose-100">
              Featured Preparation Programs
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 font-heading">
              Choose The Right Course For Your Goal
            </h2>
            <p className="text-slate-500 text-lg font-light mt-4">
              আপনার লক্ষ্য ও সময়ের উপর নির্ভর করে সঠিক কোর্সটি বেছে নিন এবং ভর্তি হয়ে আপনার প্রস্তুতি শুরু করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="course-item-card">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="duration-pill-tag">Duration: 3–4 Months</span>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full uppercase">Most Popular</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 font-heading">IELTS Basic To Advanced</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Perfect for beginners who want complete foundation building to advanced exam strategies across all 4 modules.
                </p>
                <ul className="space-y-2.5 text-xs font-semibold text-slate-600 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Foundation English Grammar & Vocab</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Full 4-Module Strategy Coverage</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Unlimited Writing Evaluation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Daily Speaking Partner Practice</li>
                </ul>
              </div>
              <button 
                onClick={() => openModal("IELTS Basic To Advanced")} 
                className="btn-cta-blue w-full py-3.5 text-sm cursor-pointer"
              >
                Enroll Now →
              </button>
            </div>

            {/* Course 2 */}
            <div className="course-item-card">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="duration-pill-tag">Duration: 40 Days</span>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase">Fast Track</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 font-heading">IELTS Crash Course</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Designed for students with limited time before the test date who need high-intensity strategy drills.
                </p>
                <ul className="space-y-2.5 text-xs font-semibold text-slate-600 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> High-Yield Exam Hacks & Shortcuts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Intensive Mock Tests & Analytics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Fast-Track Writing Feedback</li>
                </ul>
              </div>
              <button 
                onClick={() => openModal("IELTS Crash Course")} 
                className="btn-header-outline w-full py-3.5 text-sm justify-center cursor-pointer"
              >
                Enroll Now →
              </button>
            </div>

            {/* Course 3 */}
            <div className="course-item-card">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="duration-pill-tag">Duration: 1 Month</span>
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase">Specialist</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 font-heading">Writing Masterclass</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Advanced Task 1 & Task 2 strategies, complex sentence structures, and lexical resource enhancement.
                </p>
                <ul className="space-y-2.5 text-xs font-semibold text-slate-600 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Task 1 Graph/Chart Frameworks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Task 2 Essay Templates & Ideas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Personalized Daily Evaluation</li>
                </ul>
              </div>
              <button 
                onClick={() => openModal("Writing Masterclass")} 
                className="btn-header-outline w-full py-3.5 text-sm justify-center cursor-pointer"
              >
                Enroll Now →
              </button>
            </div>

            {/* Course 4 */}
            <div className="course-item-card">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="duration-pill-tag">Duration: 1 Month</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 font-heading">Speaking Intensive</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Daily speaking practice, cue card topic mastery, and fluency development with 1-on-1 mentor feedback.
                </p>
                <ul className="space-y-2.5 text-xs font-semibold text-slate-600 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Part 1, Part 2 & Part 3 Strategy</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Pronunciation & Lexical Practice</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Live Mock Speaking Tests</li>
                </ul>
              </div>
              <button 
                onClick={() => openModal("Speaking Intensive")} 
                className="btn-header-outline w-full py-3.5 text-sm justify-center cursor-pointer"
              >
                Enroll Now →
              </button>
            </div>

            {/* Course 5 */}
            <div className="course-item-card">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="duration-pill-tag">Duration: Weekly</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 font-heading">Mock Test Program</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Full-length IELTS exam simulation under strict exam conditions with detailed band score performance analytics.
                </p>
                <ul className="space-y-2.5 text-xs font-semibold text-slate-600 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Exact Cambridge Format Exam</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Detailed Band Breakdown Report</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Post-Mock Counselling Session</li>
                </ul>
              </div>
              <button 
                onClick={() => openModal("Mock Test Program")} 
                className="btn-header-outline w-full py-3.5 text-sm justify-center cursor-pointer"
              >
                Enroll Now →
              </button>
            </div>

            {/* Course 6 */}
            <div className="course-item-card border-rose-200 bg-rose-50/30">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="duration-pill-tag bg-rose-100 text-rose-600">VIP Mentorship</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 font-heading">Online Private Batch</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  1-on-1 direct mentorship with Founder Jewel Ahamadinezad for guaranteed high band score.
                </p>
                <ul className="space-y-2.5 text-xs font-semibold text-slate-600 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" /> Direct 1-on-1 Mentor Guidance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" /> Flexible Class Timings</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" /> Unlimited Essay Evaluation</li>
                </ul>
              </div>
              <button 
                onClick={() => openModal("Private VIP Batch")} 
                className="btn-cta-amber w-full py-3.5 text-sm cursor-pointer"
              >
                Apply VIP Batch →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          7. WRITING EVALUATION SHOWCASE (BEFORE VS AFTER)
          ========================================================================== */}
      <section id="writing-eval" className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-rose-50 text-rose-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-rose-100">
              Proven Feedback System
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 font-heading">
              Real Improvement Through Real Feedback
            </h2>
            <p className="text-slate-500 text-lg font-light mt-4">
              প্রতিটি রাইটিং সাবমিশনে পাবেন পয়েন্ট-বাই-পয়েন্ট বিস্তারিত কারেকশন এবং উন্নতি করার নির্ভুল গাইডলাইন।
            </p>
          </div>

          {/* Before vs After Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="writing-showcase-box bg-red-50/50 border-red-100">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">BEFORE EVALUATION</span>
                <span className="text-2xl font-black text-red-600 font-heading">Band 5.5</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2 font-heading">Sample Student Submission:</h4>
              <p className="text-xs text-slate-600 italic bg-white p-4 rounded-xl border border-red-100 leading-relaxed font-mono">
                "In recent time, technology is very important for many people. It has many advantages but also bad impact on society. I agree that people use internet too much."
              </p>
              <div className="mt-4 text-xs text-red-700 font-semibold space-y-1">
                <div>⚠️ <strong>Weakness:</strong> Repetitive vocabulary, informal tone, lacking complex cohesive structures.</div>
              </div>
            </div>

            <div className="writing-showcase-box bg-emerald-50/50 border-emerald-100">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">AFTER MENTOR FEEDBACK</span>
                <span className="text-2xl font-black text-emerald-600 font-heading">Band 7.5</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2 font-heading">Improved Band 7.5 Version:</h4>
              <p className="text-xs text-slate-700 italic bg-white p-4 rounded-xl border border-emerald-100 leading-relaxed font-mono">
                "In contemporary society, technological advancements play a pivotal role in daily life. While digital connectivity offers undeniable benefits, excessive reliance on the internet poses significant societal challenges."
              </p>
              <div className="mt-4 text-xs text-emerald-700 font-semibold space-y-1">
                <div>✅ <strong>Enhancement:</strong> Academic vocabulary, refined coherence, and complex grammatical accuracy.</div>
              </div>
            </div>
          </div>

          {/* 4 Assessment Pillars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">01</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1 font-heading">Task Achievement</h4>
              <p className="text-xs text-slate-500">Addressing all parts of the prompt clearly</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-3">02</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1 font-heading">Coherence & Cohesion</h4>
              <p className="text-xs text-slate-500">Logical paragraph structure & transitions</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-3">03</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1 font-heading">Lexical Resource</h4>
              <p className="text-xs text-slate-500">Advanced vocabulary & academic collocations</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-3">04</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1 font-heading">Grammar Accuracy</h4>
              <p className="text-xs text-slate-500">Error-free complex sentence structures</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          8. SPEAKING PARTNER PROGRAM SECTION
          ========================================================================== */}
      <section className="speaking-section-wrapper">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="px-4 py-1.5 bg-rose-500/20 text-rose-400 font-extrabold text-xs uppercase tracking-widest rounded-full border border-rose-500/30">
                Speaking Partner Program
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
                Speak Every Day. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-sky-300 to-cyan-400">Improve Every Day.</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed font-light">
                IELTS পরীক্ষার্থীদের সবচেয়ে বড় চ্যালেঞ্জ হলো ফ্লুয়েন্টলি ইংরেজিতে কথা বলা। আমাদের Speaking Partner Program-এর মাধ্যমে শিক্ষার্থীরা প্রতিদিন নির্ধারিত পার্টনারের সাথে প্র্যাকটিস করতে পারে এবং মেন্টরদের কাছ থেকে ইভালুয়েশন পায়।
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="speaking-card-box">
                  <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center text-lg shrink-0">🎙️</div>
                  <div>
                    <div className="font-bold text-sm text-white">Daily Practice</div>
                    <div className="text-xs text-slate-400">Regular 1-on-1 sessions</div>
                  </div>
                </div>

                <div className="speaking-card-box">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center text-lg shrink-0">👥</div>
                  <div>
                    <div className="font-bold text-sm text-white">Partner Matching</div>
                    <div className="text-xs text-slate-400">Matched by target band</div>
                  </div>
                </div>

                <div className="speaking-card-box">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg shrink-0">✅</div>
                  <div>
                    <div className="font-bold text-sm text-white">Speaking Eval</div>
                    <div className="text-xs text-slate-400">Direct mentor feedback</div>
                  </div>
                </div>

                <div className="speaking-card-box">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center text-lg shrink-0">📈</div>
                  <div>
                    <div className="font-bold text-sm text-white">Fluency Tracking</div>
                    <div className="text-xs text-slate-400">Weekly score report</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="speaking-right-cta-box space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-rose-500 to-indigo-600 text-white flex items-center justify-center shadow-xl text-3xl">
                  🎧
                </div>
                <h3 className="text-3xl font-extrabold text-white font-heading">Join Daily Speaking Sessions</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
                  Overcome hesitation, master Part 1, 2 & 3 cue cards, and achieve natural fluency under mentor supervision.
                </p>
                <button 
                  onClick={() => openModal("Speaking Partner Program")} 
                  className="btn-cta-amber px-8 py-4 text-base cursor-pointer"
                >
                  Start Speaking Practice Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          9. STUDY ABROAD SECTION
          ========================================================================== */}
      <section id="study-abroad" className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-blue-50 text-blue-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-blue-100">
              Global Pathway Integration
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 font-heading">
              From IELTS To University
            </h2>
            <p className="text-slate-500 text-lg font-light mt-4">
              আমরা শুধু আইইএলটিএস প্রস্তুতিতে থেমে থাকি না, উচ্চশিক্ষার জন্য আপনার স্বপ্নের দেশে গমনের প্রতিটি ধাপে সাহায্য করি।
            </p>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="country-card-item">
              <div className="flag-badge-circle bg-blue-50">🇬🇧</div>
              <div className="font-extrabold text-slate-900 text-lg mb-1 font-heading">United Kingdom</div>
              <div className="text-xs text-blue-600 font-bold">Top Universities</div>
            </div>

            <div className="country-card-item">
              <div className="flag-badge-circle bg-red-50">🇨🇦</div>
              <div className="font-extrabold text-slate-900 text-lg mb-1 font-heading">Canada</div>
              <div className="text-xs text-red-600 font-bold">PR Pathway</div>
            </div>

            <div className="country-card-item">
              <div className="flag-badge-circle bg-amber-50">🇦🇺</div>
              <div className="font-extrabold text-slate-900 text-lg mb-1 font-heading">Australia</div>
              <div className="text-xs text-amber-600 font-bold">Post Study Work</div>
            </div>

            <div className="country-card-item">
              <div className="flag-badge-circle bg-indigo-50">🇺🇸</div>
              <div className="font-extrabold text-slate-900 text-lg mb-1 font-heading">United States</div>
              <div className="text-xs text-indigo-600 font-bold">Scholarships</div>
            </div>

            <div className="country-card-item">
              <div className="flag-badge-circle bg-yellow-50">🇩🇪</div>
              <div className="font-extrabold text-slate-900 text-lg mb-1 font-heading">Germany</div>
              <div className="text-xs text-yellow-700 font-bold">Free Education</div>
            </div>

            <div className="country-card-item">
              <div className="flag-badge-circle bg-purple-50">🇪🇺</div>
              <div className="font-extrabold text-slate-900 text-lg mb-1 font-heading">Europe</div>
              <div className="text-xs text-purple-600 font-bold">Schengen Zone</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          10. FOUNDER SECTION — Jewel Ahamadinezad
          ========================================================================== */}
      <section id="founder" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="founder-banner-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 text-center">
                <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-br from-rose-500 to-purple-600 p-1.5 shadow-2xl mb-6">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-extrabold text-4xl text-white font-heading">
                    JA
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-white font-heading">Jewel Ahamadinezad</h3>
                <p className="text-xs font-bold text-rose-400 mt-1 uppercase tracking-wider">Founder & Lead Mentor</p>
                <p className="text-xs text-slate-300 mt-2 font-medium">
                  B.Sc & M.Sc in Computer Science & Engineering <br />
                  Dhaka University of Engineering & Technology (DUET)
                </p>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">A Message From Our Founder</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
                  "Empowering Students To Achieve Their Academic & Migration Goals"
                </h2>
                <blockquote className="text-slate-300 text-base leading-relaxed font-light italic border-l-2 border-rose-500 pl-6">
                  At IELTS ESSENCE, our mission is simple: to provide practical, result-oriented IELTS preparation that empowers students to achieve their academic and migration goals. We believe that success in IELTS comes from consistency, smart strategies and continuous improvement. Every student deserves proper guidance, honest feedback and a structured learning pathway. That is exactly what we strive to deliver every day.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          11. TESTIMONIAL SECTION
          ========================================================================== */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-emerald-100">
              Real Student Results
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 font-heading">
              Success Stories
            </h2>
            <p className="text-slate-500 text-lg font-light mt-4">
              আমাদের সফল শিক্ষার্থীদের অভিজ্ঞতা এবং কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জনের গল্প শুনুন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">Band 8.0 Scorer</span>
                <div className="flex text-amber-400 text-sm">★★★★★</div>
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed">
                "IELTS ESSENCE-এর রাইটিং ইভালুয়েশন ফিচারটি অসামান্য ছিল। মেন্টরদের নিখুঁত ফিডব্যাকের কারণে আমি খুব দ্রুত আমার ভুলগুলো শুধরে নিতে পেরেছিলাম।"
              </p>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm font-heading">RA</div>
                <div>
                  <div className="font-bold text-sm text-slate-900 font-heading">Rafiqul Islam</div>
                  <div className="text-xs text-slate-400">University of Manchester, UK</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Band 7.5 Scorer</span>
                <div className="flex text-amber-400 text-sm">★★★★★</div>
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed">
                "ডেইলি স্পিকিং পার্টনার সেশনের মাধ্যমে আমার মুখের জড়তা পুরোপুরি কেটে যায়। আসল পরীক্ষায় আমি খুব কনফিডেন্টলি স্পিকিং টেস্ট দিতে পেরেছি।"
              </p>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm font-heading">SK</div>
                <div>
                  <div className="font-bold text-sm text-slate-900 font-heading">Sumaiya Khan</div>
                  <div className="text-xs text-slate-400">University of Toronto, Canada</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Band 8.0 Scorer</span>
                <div className="flex text-amber-400 text-sm">★★★★★</div>
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed">
                "৪টি মডিউলের জন্য আলাদা ৪ জন স্পেশালাইজড মেন্টর থাকায় প্রতিটি বিষয়ে গভীর গাইডলাইন পেয়েছি। জুয়েল স্যারকে বিশেষ ধন্যবাদ।"
              </p>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm font-heading">AH</div>
                <div>
                  <div className="font-bold text-sm text-slate-900 font-heading">Ariful Hasan</div>
                  <div className="text-xs text-slate-400">Monash University, Australia</div>
                </div>
              </div>
            </div>
          </div>

          {/* View Full Video Reviews CTA */}
          <div className="mt-12 text-center">
            <Link 
              href="/success-stories" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold rounded-2xl shadow-lg transition-all"
            >
              <span>🎬 Watch Student Video Reviews & View Weekly/Monthly Mock Scorecards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          12. FAQ SECTION
          ========================================================================== */}
      <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-rose-50 text-rose-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-rose-100">
              Frequently Asked Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-base font-light mt-3">
              আমাদের কোর্স ও সার্ভিস সম্পর্কিত সাধারণ জিজ্ঞাসাগুলোর উত্তর খুঁজে নিন।
            </p>
          </div>

          {/* 8 FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-box-item ${openFaq === idx ? "active" : ""}`}
              >
                <div 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="faq-title-bar"
                >
                  <span>{faq.q}</span>
                  <span className={`text-slate-400 font-bold transition-transform ${openFaq === idx ? "rotate-180 text-rose-600" : ""}`}>
                    ▼
                  </span>
                </div>
                {openFaq === idx && (
                  <div className="faq-body-content" style={{ display: "block" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          13. FINAL CALL TO ACTION
          ========================================================================== */}
      <section className="cta-banner-wrapper">
        <div className="max-w-[1100px] mx-auto px-6 text-center relative z-10 space-y-6">
          <span className="px-4 py-1.5 bg-rose-500/30 text-rose-300 font-extrabold text-xs uppercase tracking-widest rounded-full border border-rose-400/40">
            Start Your Journey Today
          </span>
          <h2 className="cta-banner-headline font-heading">
            Your Target Band <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-sky-200 to-amber-300">Is Closer Than You Think</span>
          </h2>
          <p className="text-slate-200 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Join hundreds of successful students who achieved Band 7.5+ with our structured guidance, expert evaluation and daily practice.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => openModal("CTA Free Counselling")} 
              className="btn-cta-amber btn-shimmer text-base px-10 py-4 cursor-pointer"
            >
              📞 Book Free Counselling Now
            </button>
            <button 
              onClick={() => openModal("CTA Admission")} 
              className="btn-cta-blue btn-shimmer text-base px-10 py-4 cursor-pointer"
            >
              🚀 Apply For Admission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
