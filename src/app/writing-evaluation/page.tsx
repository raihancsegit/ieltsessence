"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, Award, ShieldCheck, 
  HelpCircle, ArrowRight, Play, Pause, RotateCcw, Sparkles,
  Clock, CheckCircle2, Zap, Send, MessageCircle, X, Timer, Bot
} from "lucide-react";

export default function WritingEvaluationPage() {
  const { openModal } = useModal();

  const [activeTask, setActiveTask] = useState<1 | 2>(2);
  const [selectedPrompt, setSelectedPrompt] = useState("p1");
  const [essayText, setEssayText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  // Timer states
  const [timerSeconds, setTimerSeconds] = useState(40 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // 15-Hour Automatic Evaluation States
  const [showAutoModal, setShowAutoModal] = useState(false);
  const [candidateName, setCandidateName] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [targetBand, setTargetBand] = useState("7.5");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSubmission, setActiveSubmission] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ielts_essence_writing_sub");
      if (saved) {
        const parsed = JSON.parse(saved);
        setActiveSubmission(parsed);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!activeSubmission?.evaluationDueAt) {
      setTimeLeft(null);
      return;
    }

    const calculateTime = () => {
      const diff = new Date(activeSubmission.evaluationDueAt).getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft(null);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [activeSubmission]);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setEssayText(text);
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    setWordCount(words);
  };

  const handleTaskChange = (task: 1 | 2) => {
    setActiveTask(task);
    if (task === 1) {
      setTimerSeconds(20 * 60);
      setIsTimerRunning(false);
      setSelectedPrompt("p4");
    } else {
      setTimerSeconds(40 * 60);
      setIsTimerRunning(false);
      setSelectedPrompt("p1");
    }
  };

  const minWords = activeTask === 1 ? 150 : 250;

  const handleSubmitEvaluation = () => {
    if (wordCount < 10) {
      alert("অনুগ্রহ করে আপনার লেখা এসেটি টাইপ করুন অথবা পেস্ট করুন।");
      return;
    }
    const text = `Hi IELTS ESSENCE! I want to submit my essay for free Band 8.5 red-ink evaluation:%0A%0A📝 Task ${activeTask} (${wordCount} words):%0A${encodeURIComponent(essayText.slice(0, 800))}%0A%0APlease evaluate my TR, CC, LR, GRA and provide a Band score report!`;
    window.open(`https://wa.me/8801738474611?text=${text}`, "_blank");
  };

  const handleAutoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim() || !candidatePhone.trim()) {
      alert("আপনার নাম ও মোবাইল নম্বর প্রদান করুন।");
      return;
    }
    if (wordCount < 20) {
      alert("অনুগ্রহ করে এসে বক্সে কমপক্ষে ২০ শব্দের লেখা টাইপ বা পেস্ট করুন।");
      return;
    }

    setIsSubmitting(true);
    try {
      const promptLabels: Record<string, string> = {
        p1: "Task 2: Universities job skills vs knowledge",
        p2: "Task 2: Fast food advantages vs disadvantages",
        p3: "Task 2: Public transport vs roads investment",
        p4: "Task 1: Households with internet access",
      };

      const res = await fetch("/api/writing-evaluation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: candidateName,
          phone: candidatePhone,
          email: candidateEmail,
          targetBand,
          taskType: activeTask,
          promptTitle: promptLabels[selectedPrompt] || selectedPrompt,
          essayText,
          wordCount,
        }),
      });

      const data = await res.json();
      if (res.ok && data.submission) {
        setActiveSubmission(data.submission);
        try {
          localStorage.setItem("ielts_essence_writing_sub", JSON.stringify(data.submission));
        } catch {}
        setShowAutoModal(false);
      } else {
        alert(data.error || "সাবমিট করতে সমস্যা হয়েছে।");
      }
    } catch {
      alert("সার্ভারের সাথে সংযোগ করা সম্ভব হয়নি।");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <span className="text-rose-400">Writing Evaluation Lab</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            Stop Guessing Your Writing Score <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-rose-300 to-amber-300">
              Get Line-by-Line Examiner Evaluation
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            টাস্ক রেসপন্স, কোহিশন, লেক্সিক্যাল রিসোর্স ও গ্রামার ধরে প্রতিটি ভুলের বিশদ সংশোধন এবং ব্যান্ড ৯ অল্টারনেটিভ সেন্টেন্স সহ ১৫ ঘণ্টার মধ্যে পূর্ণাঙ্গ অটোমেটিক মূল্যায়ন রিপোর্ট।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#simulator" className="btn-cta-amber">
              Submit Free Practice Essay ↓
            </a>
            <a href="#criteria" className="btn-cta-blue">
              Explore Band 9 Criteria →
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          INTERACTIVE WRITING SIMULATOR & SUBMISSION
          ========================================================================== */}
      <section id="simulator" className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Writing Sandbox */}
            <div className="lg:col-span-8 space-y-6">

              {/* Active 15-Hour Evaluation Live Status Tracker */}
              {activeSubmission && (
                <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-50 via-rose-50 to-orange-50 border-2 border-amber-200/80 shadow-md space-y-4 animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-black text-slate-900 uppercase tracking-wider font-heading">
                        ⚡ অটোমেটিক ইভ্যালুয়েশন প্রসেসিং চলছে
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/80 border border-amber-200 text-slate-700 text-xs font-bold font-heading">
                      ID: {activeSubmission.id}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">প্রার্থী ও লক্ষ্য:</div>
                      <div className="text-sm font-bold text-slate-900 font-heading">
                        {activeSubmission.name} • <span className="text-rose-600">Target Band {activeSubmission.targetBand}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        জমা দেওয়ার সময়: <strong>{activeSubmission.formattedSubmittedAt}</strong>
                      </div>
                    </div>

                    <div className="sm:text-right bg-white/70 p-3 rounded-2xl border border-amber-100">
                      <div className="text-[11px] font-bold text-amber-900 uppercase font-heading flex items-center sm:justify-end gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        রিপোর্ট পাওয়ার কাউন্টডাউন (১৫ ঘণ্টা):
                      </div>
                      <div className="text-2xl font-black text-rose-600 font-heading tracking-tight mt-0.5">
                        {timeLeft ? (
                          `${timeLeft.hours} ঘণ্টা ${timeLeft.minutes} মি. ${timeLeft.seconds} সে.`
                        ) : (
                          <span className="text-emerald-600">রিপোর্ট প্রস্তুত হচ্ছে...</span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        আনুমানিক ডেলিভারি: <strong>{activeSubmission.formattedDueAt}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/90 border border-amber-100 text-xs text-slate-700 flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>
                        আপনার নিবন্ধিত মোবাইল/হোয়াটসঅ্যাপে আগামী <strong>১৫ ঘণ্টার মধ্যে</strong> স্বয়ংক্রিয় স্কোর কার্ড ও লাইন-বাই-লাইন কারেকশন পৌঁছে যাবে।
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setActiveSubmission(null);
                        try { localStorage.removeItem("ielts_essence_writing_sub"); } catch {}
                      }}
                      className="text-[11px] text-slate-400 hover:text-rose-600 underline font-medium cursor-pointer"
                    >
                      নতুন এসে সাবমিট করুন
                    </button>
                  </div>
                </div>
              )}

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 hover-elevate">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 font-heading">Interactive Essay Sandbox</h3>
                    <p className="text-xs text-slate-400">টাইপ করুন অথবা আপনার এসে পেস্ট করুন</p>
                  </div>
                  
                  {/* Exam Timer & Task Toggle */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="exam-timer-pill">
                      <span>⏱️</span>
                      <span className="font-heading font-bold">{formatTime(timerSeconds)}</span>
                      <button 
                        onClick={toggleTimer} 
                        className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[11px] font-bold cursor-pointer hover:bg-amber-300"
                      >
                        {isTimerRunning ? "Pause" : "Start"}
                      </button>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                      <button 
                        onClick={() => handleTaskChange(1)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          activeTask === 1 ? "bg-rose-600 text-white shadow-md shadow-rose-200" : "bg-transparent text-slate-600 hover:text-rose-600"
                        }`}
                      >
                        Task 1 (150W)
                      </button>
                      <button 
                        onClick={() => handleTaskChange(2)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          activeTask === 2 ? "bg-rose-600 text-white shadow-md shadow-rose-200" : "bg-transparent text-slate-600 hover:text-rose-600"
                        }`}
                      >
                        Task 2 (250W)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Prompt Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase mb-1.5 font-heading">
                    Select Sample Prompt
                  </label>
                  <select 
                    value={selectedPrompt} 
                    onChange={(e) => setSelectedPrompt(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-rose-600"
                  >
                    <option value="p1">Task 2: Some people think universities should focus on job skills, while others believe they should provide knowledge for its own sake. Discuss both views and give your opinion.</option>
                    <option value="p2">Task 2: In many countries, fast food is becoming cheaper and more widely available. Do the advantages of this trend outweigh the disadvantages?</option>
                    <option value="p3">Task 2: Many governments are investing in public transport rather than roads. To what extent do you agree or disagree?</option>
                    <option value="p4">Task 1 (Academic): The chart below shows the percentage of households with internet access in three European countries from 2010 to 2024.</option>
                  </select>
                </div>

                {/* Live Textarea */}
                <div className="relative">
                  <textarea 
                    rows={12} 
                    value={essayText}
                    onChange={handleTextChange}
                    placeholder="Start typing your introduction paragraph here... (e.g. It is often argued that higher educational institutions should prioritize vocational skills...)" 
                    className="w-full p-5 bg-slate-50/50 rounded-2xl border border-slate-200 text-sm leading-relaxed text-slate-800 focus:outline-none focus:border-rose-600 font-sans"
                  />
                  
                  {/* Live Word Counter Bar */}
                  <div className="flex items-center justify-between pt-3 text-xs font-bold text-slate-500">
                    <div className="flex items-center gap-2">
                      <span>Word Count: <strong className="text-rose-600 text-base font-heading">{wordCount}</strong> words</span>
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] ${
                        wordCount >= minWords ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                      }`}>
                        {wordCount >= minWords ? `✓ Met minimum (${minWords}w)` : `Min ${minWords} words needed`}
                      </span>
                    </div>
                    <button 
                      onClick={() => { setEssayText(""); setWordCount(0); }} 
                      className="text-slate-400 hover:text-rose-600 font-normal underline cursor-pointer"
                    >
                      Clear Text
                    </button>
                  </div>
                </div>

                {/* Submission Action */}
                <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-extrabold text-slate-900 font-heading">
                        অটোমেটিক ইভ্যালুয়েশন সিস্টেম অ্যাক্টিভ
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      রাইটিং সাবমিট করলে আগামী <strong>১৫ ঘণ্টা পর</strong> স্বয়ংক্রিয় বিস্তারিত মূল্যায়ন রিপোর্ট পাবেন
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button 
                      onClick={() => {
                        if (wordCount < 20) {
                          alert("অনুগ্রহ করে এসে বক্সে কমপক্ষে ২০ শব্দের লেখা টাইপ বা পেস্ট করুন।");
                          return;
                        }
                        setShowAutoModal(true);
                      }} 
                      className="btn-cta-amber py-3 px-5 text-xs font-extrabold cursor-pointer flex items-center gap-2 shadow-sm"
                    >
                      <span>⚡</span>
                      <span>১৫ ঘণ্টার অটো ইভ্যালুয়েশন নিন →</span>
                    </button>
                    <button 
                      onClick={handleSubmitEvaluation} 
                      className="btn-cta-blue py-3 px-4 text-xs font-bold cursor-pointer flex items-center gap-1.5"
                      title="সরাসরি হোয়াটসঅ্যাপে পাঠিয়ে মেন্টরের সাথে কথা বলুন"
                    >
                      <span>💬</span>
                      <span>হোয়াটসঅ্যাপ</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Criteria Breakdown Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
                <h4 className="font-black text-slate-900 text-base font-heading">Examiner 4-Criteria Weight</h4>
                
                {/* Criteria 1 */}
                <div className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-rose-900 font-heading">
                    <span>1. Task Response (TR)</span>
                    <span className="text-rose-600">25%</span>
                  </div>
                  <p className="text-[11px] text-slate-600">সবগুলো পয়েন্ট কাভার করা, স্পষ্ট পজিশন ও প্রাসঙ্গিক উদাহরণ দেওয়া।</p>
                </div>

                {/* Criteria 2 */}
                <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-blue-900 font-heading">
                    <span>2. Coherence & Cohesion (CC)</span>
                    <span className="text-blue-600">25%</span>
                  </div>
                  <p className="text-[11px] text-slate-600">লজিক্যাল প্যারাগ্রাফিং, স্মুথ ট্রানজিশন ও সঠিক লিংকিং ওয়ার্ডস।</p>
                </div>

                {/* Criteria 3 */}
                <div className="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-purple-900 font-heading">
                    <span>3. Lexical Resource (LR)</span>
                    <span className="text-purple-600">25%</span>
                  </div>
                  <p className="text-[11px] text-slate-600">ন্যাচারাল কোলোকেশান, টপিক ভোকাবুলারি ও স্পেলিং নির্ভুলতা।</p>
                </div>

                {/* Criteria 4 */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-900 font-heading">
                    <span>4. Grammatical Range (GRA)</span>
                    <span className="text-emerald-600">25%</span>
                  </div>
                  <p className="text-[11px] text-slate-600">কমপ্লেক্স সেন্টেন্স ভ্যারাইটি, পাংচুয়েশন ও এরর-ফ্রি সেন্টেন্সেস।</p>
                </div>
              </div>

              {/* Writing Masterclass Promo */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 border border-slate-700 space-y-3 text-center">
                <span className="px-3 py-1 bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase rounded-full">Writing Intensive</span>
                <h4 className="font-extrabold text-lg font-heading">Writing 7.5+ Masterclass</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ১৬টি ডেডিকেটেড ক্লাস ও ৩০+ এসে লাইন-বাই-লাইন ফিডব্যাক সহ পূর্ণাঙ্গ কোর্স।
                </p>
                <button 
                  onClick={() => openModal("Writing Masterclass")} 
                  className="btn-cta-amber w-full justify-center py-3 text-xs font-bold cursor-pointer"
                >
                  Enroll In Writing Course →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          BAND 9 VS BAND 6 MODEL ESSAY COMPARISON
          ========================================================================== */}
      <section id="criteria" className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-rose-100 text-rose-700 mb-3">🔍 Real Sample Analysis</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Band 6.0 Mistake vs. Band 9.0 Solution
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              কেন বেশিরভাগ শিক্ষার্থী ৬.০ এ আটকে থাকে এবং কীভাবে ছোট পরিবর্তন করে ব্যান্ড ৭.৫+ এ রূপান্তর করা যায়।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Band 6 Card */}
            <div className="bg-rose-50/40 rounded-3xl p-8 border border-rose-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-rose-600 text-white font-black text-xs rounded-full font-heading">
                  Band 6.0 Sample (Common Mistakes)
                </span>
                <span className="text-xs text-rose-600 font-bold">Repetitive & Simple</span>
              </div>

              <blockquote className="p-4 rounded-xl bg-white border border-rose-100 text-xs italic text-slate-700 leading-relaxed">
                "Nowadays, many people eat fast food because it is very cheap and fast. This is very bad for their health because fast food has a lot of fat and sugar. Government should stop fast food shops."
              </blockquote>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="font-bold text-rose-700 font-heading">Examiner Feedback:</div>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-600">
                  <li><strong>Repetitive Vocabulary:</strong> "very cheap", "very bad", "fast food" repeated 3 times.</li>
                  <li><strong>Over-generalization:</strong> "Government should stop fast food shops" lacks nuance and balanced tone.</li>
                  <li><strong>Simple Sentences:</strong> Absence of complex sub-ordinate clauses.</li>
                </ul>
              </div>
            </div>

            {/* Band 9 Card */}
            <div className="bg-emerald-50/40 rounded-3xl p-8 border border-emerald-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-emerald-600 text-white font-black text-xs rounded-full font-heading">
                  Band 9.0 Solution (ESSENCE Standard)
                </span>
                <span className="text-xs text-emerald-600 font-bold">Sophisticated & Cohesive</span>
              </div>

              <blockquote className="p-4 rounded-xl bg-white border border-emerald-100 text-xs italic text-slate-700 leading-relaxed">
                "In contemporary society, the proliferation of ultra-processed fast food has surged due to its affordability and convenience. While this trend caters to fast-paced lifestyles, the resultant surge in non-communicable dietary illnesses warrants targeted governmental regulatory interventions rather than outright bans."
              </blockquote>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="font-bold text-emerald-700 font-heading">Band 9 Key Highlights:</div>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-600">
                  <li><strong>High Lexical Resource:</strong> "proliferation", "ultra-processed", "affordability", "regulatory interventions".</li>
                  <li><strong>Complex Syntactic Control:</strong> Perfect use of concessive clause ("While this trend...").</li>
                  <li><strong>Balanced Academic Tone:</strong> Objective viewpoint suitable for international academic standards.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: TASK 1 & TASK 2 BAND 9 TEMPLATE VAULT
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-extrabold uppercase tracking-wider border border-rose-500/30">
              <span>📑 ESSENCE Template Vault</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Plug-and-Play Band 9 Sentence Structures
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              আমাদের মেন্টরদের তৈরি পরীক্ষিত সেন্টেন্স ওপেনার যা আপনার লেখার মান তাৎক্ষণিক বাড়িয়ে দেয়।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <h3 className="font-bold text-white text-lg font-heading">Task 1: Overview & Trend Openers</h3>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-lg font-heading">Academic Report</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="p-3 rounded-xl bg-slate-900/60 border border-slate-700 leading-relaxed">
                  <strong>Overview Formula:</strong> "Overall, it is salient that while [Category A] experienced an upward trajectory, [Category B] exhibited a downward trend over the surveyed timeframe."
                </li>
                <li className="p-3 rounded-xl bg-slate-900/60 border border-slate-700 leading-relaxed">
                  <strong>Comparison Formula:</strong> "The figures for [X] dwarf those of [Y], accounting for the lion's share of total consumption."
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <h3 className="font-bold text-white text-lg font-heading">Task 2: Thesis & Body Transition Formulas</h3>
                <span className="px-3 py-1 bg-rose-500/20 text-rose-400 text-xs font-bold rounded-lg font-heading">Argumentative Essay</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="p-3 rounded-xl bg-slate-900/60 border border-slate-700 leading-relaxed">
                  <strong>Thesis Formula:</strong> "Although there are valid justifications for the opposing viewpoint, I am firmly convinced that [Your Core Standpoint] primarily due to [Reason 1] and [Reason 2]."
                </li>
                <li className="p-3 rounded-xl bg-slate-900/60 border border-slate-700 leading-relaxed">
                  <strong>Counter-Argument Formula:</strong> "Advocates of this notion often contend that [...]; however, this argument overlooks the profound long-term implications of [...]."
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: SUBMIT YOUR ESSAY FOR RED-INK CHECK CTA
          ========================================================================== */}
      <section className="py-16 bg-rose-600 text-white text-center">
        <div className="max-w-[1320px] mx-auto px-6 space-y-6">
          <span className="px-4 py-1.5 bg-white/20 text-white text-xs font-bold rounded-full uppercase">
            Free Red-Ink Trial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Get Your First Essay Evaluated Within 24 Hours
          </h2>
          <p className="text-rose-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            আপনার লেখা যেকোনো টাস্ক ১ বা টাস্ক ২ রচনা আমাদের হোয়াটসঅ্যাপ নম্বরে পাঠান; জুয়েল স্যার স্বয়ং ভুল মার্কিং করে ব্যান্ড স্কোর জানাবেন।
          </p>
          <div className="pt-2">
            <a 
              href="https://wa.me/8801738474611" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white text-sm font-black rounded-2xl shadow-xl transition-all font-heading"
            >
              <span>💬 Send Essay to WhatsApp (01738-474611)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 15-HOUR AUTOMATIC EVALUATION POPUP MODAL */}
      {showAutoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-5 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowAutoModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold shadow-2xs">
                ⚡
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 font-heading">
                  ১৫ ঘণ্টার অটোমেটিক ইভ্যালুয়েশন
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  আগামী ১৫ ঘণ্টা পর আপনার পূর্ণাঙ্গ স্কোর কার্ড ও ফিডব্যাক তৈরি হবে
                </p>
              </div>
            </div>

            {/* Submission Summary Box */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">সিলেক্টেড টাস্ক:</span>
                <span className="font-bold text-slate-900">Task {activeTask} ({wordCount} words)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">প্রসেসিং টাইম:</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ঠিক ১৫ ঘণ্টার মধ্যে
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">রিপোর্টে থাকবে:</span>
                <span className="font-semibold text-slate-700">TR, CC, LR, GRA + ব্যান্ড ৯ অল্টারনেটিভ</span>
              </div>
            </div>

            <form onSubmit={handleAutoSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-1 font-heading">
                  আপনার পূর্ণ নাম *
                </label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: তানভীর আহমেদ"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-1 font-heading">
                  মোবাইল / হোয়াটসঅ্যাপ নম্বর * (রিপোর্ট পাঠানো হবে)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="যেমন: 017XXXXXXXX"
                  value={candidatePhone}
                  onChange={(e) => setCandidatePhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-1 font-heading">
                  ইমেইল অ্যাড্রেস (ঐচ্ছিক - পিডিএফ রিপোর্টের জন্য)
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-1 font-heading">
                  টার্গেট ব্যান্ড স্কোর
                </label>
                <select
                  value={targetBand}
                  onChange={(e) => setTargetBand(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-rose-600"
                >
                  <option value="7.0">Band 7.0 (Good User)</option>
                  <option value="7.5">Band 7.5 (High Competency)</option>
                  <option value="8.0">Band 8.0 (Very Good User)</option>
                  <option value="8.5">Band 8.5 (Expert Level)</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cta-amber w-full justify-center py-3.5 text-sm font-extrabold cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? "সাবমিট হচ্ছে..." : "সাবমিট করুন (১৫ ঘণ্টার কাউন্টডাউন শুরু) →"}
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                🔒 আপনার এসে সম্পূর্ণ নিরাপদ ও গোপনীয় রাখা হবে। রিপোর্ট প্রস্তুত হলে স্বয়ংক্রিয় নোটিফিকেশন পাবেন।
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
