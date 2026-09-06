"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  BookOpen, Download, FileText, Sparkles, CheckCircle2, 
  ChevronRight, Award, Headphones, ArrowRight, Search, ShieldCheck, 
  ExternalLink, Globe, Newspaper, GraduationCap, Compass, Mic, PenTool, Zap, Check, HelpCircle, Layers
} from "lucide-react";

import { strategyArticles } from "@/data/strategies";

export default function ResourceHubPage() {
  const { openModal } = useModal();
  const [activeStrategyModule, setActiveStrategyModule] = useState<"all" | "writing" | "speaking" | "reading" | "listening">("all");
  const [activeSpeakingPart, setActiveSpeakingPart] = useState<"part1" | "part2" | "part3" | "method">("part1");

  const filteredTopics = activeStrategyModule === "all" 
    ? strategyArticles 
    : strategyArticles.filter(t => t.module === activeStrategyModule);

  // ============================================================================
  // 10 SIGNATURE ARTICLES WITH SLUGS
  // ============================================================================
  const signatureArticles = [
    { num: "01", slug: "why-writing-stuck-at-band-6-5", title: "Why You're Stuck at Band 6.5 — An Examiner's Guide to Breaking Through Band 7", tag: "Writing & Speaking Breakthrough" },
    { num: "02", slug: "band-7-vs-band-8-writing", title: "Band 7 vs Band 8 IELTS Writing: A Sentence-by-Sentence Comparison", tag: "Line-by-Line Breakdown" },
    { num: "03", slug: "find-answers-faster-in-reading", title: "The IELTS Reading Strategy That Saves Time Without Sacrificing Accuracy", tag: "Speed Optimization" },
    { num: "04", slug: "true-false-not-given-strategy", title: "True, False, Not Given: Stop Guessing and Start Proving", tag: "100% Accuracy Framework" },
    { num: "05", slug: "how-to-develop-ideas-in-writing", title: "How to Develop IELTS Writing Ideas Instead of Repeating the Same Point", tag: "Idea Progression" },
    { num: "06", slug: "speaking-part-2-two-minutes", title: "How to Speak for Two Minutes Without Memorising a Cue Card", tag: "Past-Present-Future System" },
    { num: "07", slug: "listening-distractors-elimination", title: "IELTS Listening Distractors: The Words You Hear That Are Designed to Mislead You", tag: "Trap Elimination" },
    { num: "08", slug: "why-memorised-essays-hurt-score", title: "Why Using 'Advanced Vocabulary' Doesn't Automatically Give You a Higher Band", tag: "Collocation Precision" },
    { num: "09", slug: "40-question-reading-time-management", title: "The 30-Day IELTS Improvement Plan: What to Practise Every Day", tag: "Daily Study Blueprint" },
    { num: "10", slug: "band-6-vs-band-7-speaking", title: "From Band 6 to Band 7: A Practical IELTS Improvement Roadmap", tag: "Target Band Master-plan" }
  ];

  // ============================================================================
  // GLOBAL BLOG PORTALS
  // ============================================================================
  const blogResources = [
    {
      title: "ReadTheory — Adaptive Reading Comprehension",
      url: "https://readtheory.org/",
      category: "Reading Practice",
      tag: "Interactive AI",
      desc: "অ্যাডাপ্টিভ রিডিং এক্সারসাইজ এবং কম্প্রিহেনশন স্কিল ডেভেলপমেন্টের জন্য বিশ্বের শীর্ষস্থানীয় রিডিং প্ল্যাটফর্ম।",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      title: "Magoosh IELTS — Strategy Blog & Study Plans",
      url: "https://magoosh.com/ielts/",
      category: "Exam Strategy",
      tag: "Study Plans",
      desc: "অভিজ্ঞ এক্সামিনারদের লেখা টপিক-ওয়াইজ স্ট্র্যাটেজি ব্লগ, ৪টি মডিউলের স্টাডি শিডিউল এবং স্পেশাল হ্যাকস।",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      title: "IELTS.org — Official Test Preparation Resources",
      url: "https://ielts.org/take-a-test/preparation-resources",
      category: "Official Portal",
      tag: "Official Cambridge",
      desc: "অফিসিয়াল টেস্ট ফরম্যাট, ব্যান্ড স্কোরিং গাইডলাইন এবং আইইএলটিএস অফিশিয়াল প্র্যাকটিস পেপারের ডেডিকেটেড লাইব্রেরি।",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
    },
    {
      title: "IDP IELTS Bangladesh — News & Preparation Articles",
      url: "https://ielts.idp.com/bangladesh/about/news-and-article",
      category: "Local Updates",
      tag: "IDP Bangladesh",
      desc: "আইডিপি বাংলাদেশ অফিসিয়াল টেস্ট ডেট, এক্সাম আপডেট, টেস্ট ডে গাইডলাইন এবং লেটেস্ট প্রিপারেশন আর্টিকেল।",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      title: "British Council — TakeIELTS Official Blog",
      url: "https://takeielts.britishcouncil.org/blog",
      category: "Official Blog",
      tag: "British Council",
      desc: "ব্রিটিশ কাউন্সিলের সিনিয়র এক্সামিনারদের নিয়মিত আর্টিকেল, স্পিকিং ফ্লুয়েন্সি টিপস এবং রাইটিং স্ট্র্যাটেজি।",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      title: "Aeon Essays — High-Level Academic & Philosophical Essays",
      url: "https://aeon.co/",
      category: "Academic Reading",
      tag: "Band 8.5+ Reading",
      desc: "IELTS Reading Passage 3 এবং Writing Task 2-এর জন্য উচ্চমানের বৈজ্ঞানিক, দার্শনিক ও সামাজিক প্রবন্ধের সংগ্রহ।",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  ];

  return (
    <div className="space-y-0">
      {/* ==========================================================================
          INNER HERO
          ========================================================================== */}
      <section className="inner-hero-section">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <div className="inner-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-rose-400">Resource Hub™</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            IELTS ESSENCE Resource Hub™ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-sky-300">
              Tips, Strategies & Speaking Q/A Vault
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            ৩০টি হাই-ভ্যালু স্ট্র্যাটেজি আর্টিকেল, ব্যান্ড ৭+ স্পিকিং মডেল রেসপন্স, অফিসিয়াল গ্লোবাল ব্লগ এবং ক্যামব্রিজ রিসোর্সের পূর্ণাঙ্গ ভল্ট।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#guides" className="btn-cta-amber cursor-pointer">
              30 Tips & Strategies ↓
            </a>
            <a href="#speaking-qa" className="btn-cta-blue">
              Band 7+ Speaking Q/A Vault ↓
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 1: 30 HIGH-VALUE IELTS TIPS & STRATEGY TOPICS (#guides)
          ========================================================================== */}
      <section id="guides" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1320px] mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-extrabold uppercase tracking-wider">
              <span>💡 Essential Knowledge Base</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              30 High-Value IELTS Tips & Strategy Topics
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              মুখস্থ বা শর্টকাট নয়—প্রতিটি মডিউলের জন্য রয়েছে "Problem → Diagnosis → Strategy" কাঠামোর পূর্ণাঙ্গ নির্দেশিকা।
            </p>

            {/* MODULE FILTER TABS */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              <button 
                onClick={() => setActiveStrategyModule("all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeStrategyModule === "all" ? "bg-slate-900 text-white shadow-md" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                All 30 Topics
              </button>
              <button 
                onClick={() => setActiveStrategyModule("writing")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeStrategyModule === "writing" ? "bg-purple-600 text-white shadow-md" : "bg-white border border-slate-200 text-slate-700 hover:bg-purple-50"
                }`}
              >
                📝 Writing (1–10)
              </button>
              <button 
                onClick={() => setActiveStrategyModule("speaking")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeStrategyModule === "speaking" ? "bg-emerald-600 text-white shadow-md" : "bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50"
                }`}
              >
                🎙️ Speaking (11–18)
              </button>
              <button 
                onClick={() => setActiveStrategyModule("reading")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeStrategyModule === "reading" ? "bg-blue-600 text-white shadow-md" : "bg-white border border-slate-200 text-slate-700 hover:bg-blue-50"
                }`}
              >
                📖 Reading (19–25)
              </button>
              <button 
                onClick={() => setActiveStrategyModule("listening")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeStrategyModule === "listening" ? "bg-amber-600 text-white shadow-md" : "bg-white border border-slate-200 text-slate-700 hover:bg-amber-50"
                }`}
              >
                🎧 Listening (26–30)
              </button>
            </div>
          </div>

          {/* TOPICS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-rose-300 hover-elevate flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-xs">
                      #{item.id < 10 ? `0${item.id}` : item.id}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <Link href={`/resources/${item.slug}`} className="block">
                    <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-rose-600 transition-colors">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.summary || (item as any).desc}
                  </p>
                </div>

                <Link
                  href={`/resources/${item.slug}`}
                  className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 text-slate-700 hover:text-rose-700 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Read Strategy Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* PROBLEM -> DIAGNOSIS -> STRATEGY FRAMEWORK BANNER */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-black uppercase text-amber-400 tracking-wider">The ESSENCE Educational Architecture</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                How Our Strategy Content Is Structured: Problem → Diagnosis → Strategy
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                গতানুগতিক মোটিভেশনাল কথার বদলে প্রতিটি আর্টিকেলে থাকে ৭-ধাপের বৈজ্ঞানিক সমাধান:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <div className="font-mono text-rose-400 font-black">01</div>
                <div className="font-bold text-white">Identify Problem</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <div className="font-mono text-amber-400 font-black">02</div>
                <div className="font-bold text-white">Explain Why</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <div className="font-mono text-blue-400 font-black">03</div>
                <div className="font-bold text-white">Give Strategy</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <div className="font-mono text-emerald-400 font-black">04</div>
                <div className="font-bold text-white">Demonstrate</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <div className="font-mono text-purple-400 font-black">05</div>
                <div className="font-bold text-white">Common Trap</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <div className="font-mono text-sky-400 font-black">06</div>
                <div className="font-bold text-white">Practice Method</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <div className="font-mono text-pink-400 font-black">07</div>
                <div className="font-bold text-white">Core Takeaway</div>
              </div>
            </div>
          </div>

          {/* 10 SIGNATURE ARTICLES LIST */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-black text-rose-600 uppercase tracking-wider">High Priority Reads</span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mt-0.5">
                  🚀 10 Signature Articles to Start With
                </h3>
              </div>
              <a 
                href="#guides" 
                className="btn-cta-blue text-xs py-2 px-4 cursor-pointer"
              >
                Browse All 30 Topics →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {signatureArticles.map((art, idx) => (
                <Link
                  key={idx} 
                  href={`/resources/${art.slug}`}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-all flex items-start gap-4 cursor-pointer group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-900 text-white font-mono font-black text-sm flex items-center justify-center shrink-0">
                    {art.num}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {art.tag}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 font-heading group-hover:text-blue-700 transition-colors">
                      {art.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: BAND 7+ SPEAKING Q/A HUB (#speaking-qa)
          ========================================================================== */}
      <section id="speaking-qa" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1320px] mx-auto px-6 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase tracking-wider border border-emerald-200">
              <Mic className="w-3.5 h-3.5 text-emerald-600" />
              <span>IELTS Speaking Band 7+ Q/A Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Speak Naturally. Develop Ideas. Communicate with Confidence.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              মুখস্থ উত্তর নয়—শিখুন কীভাবে স্বাভাবিকভাবে আইডিয়া ডেভেলপ করতে হয়, অপ্রত্যাশিত প্রশ্নের উত্তর দিতে হয় এবং ব্যান্ড ৭+ ফ্লুয়েন্সি ধরে রাখতে হয়।
            </p>

            {/* Speaking Parts Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              <button 
                onClick={() => setActiveSpeakingPart("part1")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeSpeakingPart === "part1" ? "bg-emerald-600 text-white shadow-md scale-102" : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-emerald-50"
                }`}
              >
                🎯 Part 1 — Introduction & Interview
              </button>
              <button 
                onClick={() => setActiveSpeakingPart("part2")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeSpeakingPart === "part2" ? "bg-emerald-600 text-white shadow-md scale-102" : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-emerald-50"
                }`}
              >
                🗣️ Part 2 — Cue Cards (2 Minutes)
              </button>
              <button 
                onClick={() => setActiveSpeakingPart("part3")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeSpeakingPart === "part3" ? "bg-emerald-600 text-white shadow-md scale-102" : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-emerald-50"
                }`}
              >
                💡 Part 3 — In-Depth Discussion
              </button>
              <button 
                onClick={() => setActiveSpeakingPart("method")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeSpeakingPart === "method" ? "bg-slate-900 text-white shadow-md scale-102" : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                ⚡ ESSENCE ARDEL Method™
              </button>
            </div>
          </div>

          {/* DYNAMIC CONTENT FOR PART 1 / PART 2 / PART 3 / METHOD */}
          {activeSpeakingPart === "part1" && (
            <div className="bg-emerald-50/40 rounded-3xl p-8 border border-emerald-200 space-y-6 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/60 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">🎯 Part 1 — Familiar Topics & Natural Development</h3>
                  <p className="text-xs text-slate-600 mt-1">সময়কাল: ৪–৫ মিনিট। পরিচিত ১২টি মূল টপিকের উপর আত্মবিশ্বাসী রেসপন্স তৈরি করুন।</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">12 Core Topics</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {["Home & Accommodation", "Hometown & City", "Studies & Academic Life", "Work & Career", "Family & Relatives", "Friends & Social Life", "Hobbies & Interests", "Food & Cooking", "Travel & Tourism", "Technology & Gadgets", "Daily Routines", "Free Time & Weekends"].map((topic, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-emerald-100 shadow-sm flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">{topic}</span>
                    <span className="text-[10px] text-emerald-600 font-black">Practice →</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSpeakingPart === "part2" && (
            <div className="bg-blue-50/40 rounded-3xl p-8 border border-blue-200 space-y-6 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-200/60 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">🗣️ Part 2 — Cue Card 2-Minute Speech Architecture</h3>
                  <p className="text-xs text-slate-600 mt-1">১ মিনিট প্রস্তুতি এবং ২ মিনিট অবিরাম স্বাভাবিকভাবে কথা বলার নির্ভরযোগ্য কৌশল।</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">1-Min Note Method</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <div className="p-5 rounded-2xl bg-white border border-blue-100 space-y-2">
                  <div className="text-lg">⏱️</div>
                  <h4 className="font-bold text-slate-900 font-heading">1-Minute Planning Method</h4>
                  <p className="text-slate-600 leading-relaxed">পুরো বাক্য না লিখে শুধু ৩–৪টি ট্রানজিশন কি-ওয়ার্ড লিখে নিন যা আপনাকে ২ মিনিট ট্র্যাকে রাখবে।</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-blue-100 space-y-2">
                  <div className="text-lg">🗺️</div>
                  <h4 className="font-bold text-slate-900 font-heading">Past → Present → Future</h4>
                  <p className="text-slate-600 leading-relaxed">কথা ফুরিয়ে যাওয়ার ভয় দূর করতে ঘটনার অতীত ব্যাকগ্রাউন্ড, বর্তমান অবস্থা এবং ভবিষ্যতের ইচ্ছা বর্ণনা করুন।</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-blue-100 space-y-2">
                  <div className="text-lg">🎙️</div>
                  <h4 className="font-bold text-slate-900 font-heading">Band 7+ Cue Card Bank</h4>
                  <p className="text-slate-600 leading-relaxed">লেটেস্ট সিজনের ১০০+ সম্ভাব্য কিউ কার্ডের মডেল অডিও এবং হাই-ব্যান্ড ভোকাবুলারি ব্যাংক।</p>
                </div>
              </div>
            </div>
          )}

          {activeSpeakingPart === "part3" && (
            <div className="bg-purple-50/40 rounded-3xl p-8 border border-purple-200 space-y-6 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-200/60 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">💡 Part 3 — Abstract Discussion & Analytical Reasoning</h3>
                  <p className="text-xs text-slate-600 mt-1">ব্যক্তিগত উত্তর ছাড়িয়ে সামাজিক ও বৈশ্বিক দৃষ্টিকোণ থেকে মতামত বিশ্লেষণ ও যুক্তির উপস্থাপনা।</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">8 Question Types</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {["Opinion Questions", "Why / Why Not Questions", "Cause & Effect Analysis", "Advantages & Disadvantages", "Compare & Contrast", "Future Predictions", "Social Issues & Trends", "Abstract & Philosophical"].map((qType, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-purple-100 shadow-sm font-bold text-slate-800 text-center">
                    {qType}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSpeakingPart === "method" && (
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 space-y-6 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">⚡ ESSENCE Answer Development Method™: A → R → D → E → L</h3>
                  <p className="text-xs text-slate-400 mt-1">ছোট ছোট এক লাইনের উত্তরকে ব্যান্ড ৭.৫+ রেসপন্সে রূপান্তর করার ৫-ধাপের আর্কিটেকচার।</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold">ARDEL Framework</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                  <span className="font-mono text-rose-400 font-black text-base">A</span>
                  <div className="font-bold text-white">Answer Directly</div>
                  <p className="text-[11px] text-slate-400">প্রশ্নের সোজা উত্তর দিন।</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                  <span className="font-mono text-amber-400 font-black text-base">R</span>
                  <div className="font-bold text-white">Reason</div>
                  <p className="text-[11px] text-slate-400">কারণ ব্যাখ্যা করুন (Why)।</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                  <span className="font-mono text-blue-400 font-black text-base">D</span>
                  <div className="font-bold text-white">Develop</div>
                  <p className="text-[11px] text-slate-400">অতিরিক্ত বিবরণ যুক্ত করুন।</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                  <span className="font-mono text-emerald-400 font-black text-base">E</span>
                  <div className="font-bold text-white">Example</div>
                  <p className="text-[11px] text-slate-400">বাস্তব একটি উদাহরণ দিন।</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                  <span className="font-mono text-purple-400 font-black text-base">L</span>
                  <div className="font-bold text-white">Link / Reflect</div>
                  <p className="text-[11px] text-slate-400">স্বাভাবিকভাবে সমাপ্তি টানুন।</p>
                </div>
              </div>
            </div>
          )}

          {/* REAL CORE Q/A SAMPLE DEMO BOX */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-black text-emerald-600 uppercase tracking-wider">The Core Q/A Model in Action</span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mt-0.5">
                  Real Band 7.5+ Sample Question & Breakdown
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">Official Band 7.5</span>
            </div>

            {/* Question & Answer Box */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">QUESTION:</span>
                <div className="text-base font-extrabold text-slate-900 font-heading mt-1">
                  "Do you enjoy reading in your daily life?"
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">BAND 7.5+ RESPONSE:</span>
                  <span className="text-[11px] text-slate-400 font-mono">100% Natural Flow</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-100 font-light">
                  "Yes, I do, <strong className="text-amber-300 font-bold">particularly when</strong> I have some free time in the evening. <strong className="text-sky-300 font-bold">I usually</strong> read articles about technology and psychology because <strong className="text-emerald-300 font-bold">I find those subjects genuinely interesting</strong>. <strong className="text-rose-300 font-bold">I wouldn't say</strong> I'm an avid reader, but <strong className="text-purple-300 font-bold">I've developed a habit of</strong> reading something in English almost every single day."
                </p>
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 font-heading">💡 Why This Works</div>
                <p className="text-slate-600 leading-relaxed">
                  Direct Answer → Reason → Progressive Development → Personal Detail → Realistic Qualification. কোনো রোবোটিক টেমপ্লেট ছাড়াই স্বাভাবিক যুক্তি।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="font-bold text-emerald-700 font-heading">✨ Useful Language Collocations</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono">particularly when...</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono">I usually...</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono">I wouldn't say...</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono">developed a habit of...</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-2">
                <div className="font-bold text-rose-700 font-heading">⚠️ Don't Memorise Rule</div>
                <p className="text-slate-600 leading-relaxed">
                  উত্তর হুবহু মুখস্থ করবেন না! কেবল স্ট্রাকচার ও লজিক্যাল ডেভেলপমেন্ট প্যাটার্নটি আয়ত্ত করে নিজের ভাষায় উত্তর দেওয়ার অভ্যাস করুন।
                </p>
              </div>
            </div>
          </div>

          {/* 7 POPULAR TOPICS CATEGORIES */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-black text-rose-600 uppercase tracking-wider">Exam Topic Repository</span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading mt-0.5">
                Popular Speaking Topics by Category
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 hover-elevate">
                <div className="text-xl">🏠</div>
                <h4 className="font-bold text-slate-900 font-heading">Personal Life</h4>
                <p className="text-slate-500">Hometown, Home, Family, Friends, Childhood, Daily routine</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 hover-elevate">
                <div className="text-xl">☕</div>
                <h4 className="font-bold text-slate-900 font-heading">Lifestyle</h4>
                <p className="text-slate-500">Food, Exercise, Shopping, Sleep, Free time, Weekend habits</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 hover-elevate">
                <div className="text-xl">🎓</div>
                <h4 className="font-bold text-slate-900 font-heading">Education & Work</h4>
                <p className="text-slate-500">School, University, Teachers, Subjects, Jobs, Future career</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 hover-elevate">
                <div className="text-xl">📱</div>
                <h4 className="font-bold text-slate-900 font-heading">Technology</h4>
                <p className="text-slate-500">Smartphones, Social media, Internet, AI, Online learning</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 hover-elevate">
                <div className="text-xl">🌿</div>
                <h4 className="font-bold text-slate-900 font-heading">Environment</h4>
                <p className="text-slate-500">Pollution, Climate change, Recycling, Public transport, Nature</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 hover-elevate">
                <div className="text-xl">👥</div>
                <h4 className="font-bold text-slate-900 font-heading">Society</h4>
                <p className="text-slate-500">Young people, Older people, Advertising, Government, Community</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 hover-elevate col-span-1 sm:col-span-2">
                <div className="text-xl">🎨</div>
                <h4 className="font-bold text-slate-900 font-heading">Culture & Art</h4>
                <p className="text-slate-500">Books, Films, Music, Festivals, Art, Cultural traditions, Heritage</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: IELTS BLOG & GLOBAL RESOURCES (#blog)
          ========================================================================== */}
      <section id="blog" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-extrabold uppercase tracking-wider border border-rose-500/30">
              <Globe className="w-3.5 h-3.5 text-rose-400" />
              <span>Verified Global Resources</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              IELTS Blog & Academic Article Library
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              বিশ্বের শীর্ষস্থানীয় অফিসিয়াল পোর্টাল ও প্রিপারেশন পাবলিকেশন থেকে নির্বাচিত স্টাডি ম্যাটেরিয়ালস এবং ব্লগের সমন্বিত তালিকা।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogResources.map((res, idx) => (
              <a
                key={idx}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700/80 hover:border-rose-500/50 transition-all flex flex-col justify-between hover-elevate space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${res.badgeColor}`}>
                      {res.tag}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-rose-400 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-rose-300 transition-colors">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {res.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px] truncate max-w-[200px]">
                    {res.url.replace("https://", "")}
                  </span>
                  <span className="text-rose-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Visit Link →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: LEXICAL RESOURCE VAULT (#vault)
          ========================================================================== */}
      <section id="vault" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1320px] mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-4 py-1.5 bg-purple-50 text-purple-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-purple-100">
              Lexical Resource Vault
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Topic-Wise Academic Collocations & Vocabulary
            </h2>
            <p className="text-slate-500 text-base">
              Replace repetitive words with natural, examiner-preferred collocations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                topic: "Environment & Climate Change",
                words: ["Biodiversity depletion", "Ecological footprint", "Renewable subsidies", "Mitigation strategies"],
                count: "45 Items"
              },
              {
                topic: "Artificial Intelligence & Automation",
                words: ["Algorithmic bias", "Disruptive innovation", "Cognitive automation", "Technological unemployment"],
                count: "50 Items"
              },
              {
                topic: "Global Economy & Globalization",
                words: ["Fiscal stimulus", "Income disparity", "Market saturation", "Socio-economic strata"],
                count: "42 Items"
              },
              {
                topic: "Education & Pedagogy",
                words: ["Curriculum modernization", "Rote learning", "Holistic development", "Pedagogical methodologies"],
                count: "38 Items"
              }
            ].map((vault, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover-elevate">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg">
                    {vault.count}
                  </span>
                  <span className="text-xs text-slate-400">Lexical Set</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base font-heading">{vault.topic}</h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {vault.words.map((w, wIdx) => (
                    <li key={wIdx} className="flex items-center gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          CTA BANNER
          ========================================================================== */}
      <section className="cta-banner-wrapper">
        <div className="max-w-[1320px] mx-auto px-6 text-center space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/20">
            IELTS ESSENCE Resource Vault
          </span>
          <h2 className="cta-banner-headline font-heading">
            Need Expert Mentorship to Apply These Strategies?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            ক্যামব্রিজ মেথডোলজি ও সার্টিফাইড মেন্টরদের তত্ত্বাবধানে আপনার পছন্দের ব্যাচে এনরোল করুন।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/courses" className="btn-cta-amber cursor-pointer">
              Explore All Courses →
            </Link>
            <a 
              href="https://wa.me/8801738474611" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-cta-blue"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
