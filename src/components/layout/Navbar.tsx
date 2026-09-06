"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileDrawer from "./MobileDrawer";
import { 
  ChevronDown, Menu, 
  Sparkles, BookOpen, Clock, PenTool, Mic, Award,
  FileText, MapPin, Calculator, Compass, Layers, ShieldCheck,
  HelpCircle, BarChart3, Target
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="navbar sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 xl:px-8 w-full flex items-center justify-between h-[70px]">
          
          {/* Logo Brand */}
          <Link href="/" className="logo-brand flex items-center gap-2 shrink-0 group" aria-label="IELTS ESSENCE Home">
            <div className="relative w-6 h-9 xl:w-7 xl:h-10 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
              <img 
                src="/images/emblem-transparent.png" 
                alt="IELTS ESSENCE Emblem" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center select-none">
              <div className="flex items-center gap-1 leading-none">
                <span className="font-black text-slate-900 text-[18px] xl:text-[20px] tracking-tight font-heading">
                  I<span className="relative inline-block text-slate-900">E<span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-rose-600"></span></span>LTS
                </span>
                <span className="font-black text-slate-900 text-[16px] xl:text-[18px] tracking-wider font-heading">
                  ESSENCE
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-[7.5px] xl:text-[8px] font-black text-slate-500 tracking-[0.16em] uppercase">
                <span>DREAM</span>
                <span className="w-1 h-1 rounded-full bg-rose-600 inline-block shrink-0"></span>
                <span>DEFINE</span>
                <span className="w-1 h-1 rounded-full bg-rose-600 inline-block shrink-0"></span>
                <span>DOMINATE</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links (Spacious, Elegant & Perfectly Centered/Right-Aligned) */}
          <ul className="nav-links hidden xl:flex items-center gap-1 2xl:gap-2">
            
            {/* 1. ESSENCE METHOD™ */}
            <li className="nav-item group relative">
              <Link 
                href="/method" 
                className={`nav-link flex items-center gap-1.5 ${
                  isActive("/method") ? "active text-rose-600 font-extrabold" : ""
                }`}
              >
                <span>Essence Method™</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-hover:text-rose-600" />
              </Link>

              <div className="mega-dropdown-box dropdown-left w-[460px]">
                <div className="mega-menu-grid">
                  <Link href="/method" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm shrink-0">
                      🚀
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">The ESSENCE Method™</div>
                      <div className="text-[10px] text-purple-600 font-bold">6-Stage Score Pipeline</div>
                    </div>
                  </Link>

                  <Link href="/about" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">
                      🏛️
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">About IELTS ESSENCE</div>
                      <div className="text-[10px] text-slate-500">Our Story & Mission</div>
                    </div>
                  </Link>

                  <Link href="/mentors" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">
                      👨‍🏫
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Founder & Mentors</div>
                      <div className="text-[10px] text-slate-500">Jewel Ahamadinezad (DUET)</div>
                    </div>
                  </Link>

                  <Link href="/why-us" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">
                      💡
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Why IELTS ESSENCE</div>
                      <div className="text-[10px] text-slate-500">Our unique advantages</div>
                    </div>
                  </Link>

                  <Link href="/method#blueprint" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Strategy Blueprint</div>
                      <div className="text-[10px] text-slate-500">Target score frameworks</div>
                    </div>
                  </Link>

                  <Link href="/method#daily-flow" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Daily Flow & Routine</div>
                      <div className="text-[10px] text-slate-500">Structured study protocol</div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            {/* 2. SCORE ROADMAP */}
            <li className="nav-item group relative">
              <Link 
                href="/calculator" 
                className={`nav-link flex items-center gap-1.5 ${
                  isActive("/calculator") ? "active text-rose-600 font-extrabold" : ""
                }`}
              >
                <span>Score Roadmap</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-hover:text-rose-600" />
              </Link>

              <div className="mega-dropdown-box dropdown-left w-[450px]">
                <div className="mega-menu-grid">
                  <Link href="/calculator" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Band Predictor & Calc</div>
                      <div className="text-[10px] text-slate-500">Official Cambridge rounding</div>
                    </div>
                  </Link>

                  <Link href="/#target-band" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Timeline Estimator</div>
                      <div className="text-[10px] text-slate-500">40 Days to 3.5 Months</div>
                    </div>
                  </Link>

                  <Link href="/diagnostic" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Diagnostic Assessment</div>
                      <div className="text-[10px] text-slate-500">Student Profile & 20 MCQs</div>
                    </div>
                  </Link>

                  <Link href="/faq" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Preparation FAQ</div>
                      <div className="text-[10px] text-slate-500">Common questions answered</div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            {/* 3. SCORE IMPROVEMENT */}
            <li className="nav-item group relative">
              <Link 
                href="/why-us" 
                className={`nav-link flex items-center gap-1.5 ${
                  isActive("/why-us") || isActive("/writing-evaluation") ? "active text-rose-600 font-extrabold" : ""
                }`}
              >
                <span>Score Improvement</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-hover:text-rose-600" />
              </Link>

              <div className="mega-dropdown-box dropdown-left w-[460px]">
                <div className="mega-menu-grid">
                  <Link href="/why-us#comparison" className="mega-menu-card col-span-2">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base shrink-0">
                      ⚖️
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Traditional vs IELTS ESSENCE</div>
                      <div className="text-[10px] text-slate-500">10-Point deep comparison matrix</div>
                    </div>
                  </Link>

                  <Link href="/writing-evaluation" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm shrink-0">
                      <PenTool className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Writing Evaluation Lab</div>
                      <div className="text-[10px] text-slate-500">Line-by-line feedback</div>
                    </div>
                  </Link>

                  <Link href="/why-us#pillars" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">4 Pillars of Excellence</div>
                      <div className="text-[10px] text-slate-500">Small batch & diagnosis</div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            {/* 4. PROGRAMS */}
            <li className="nav-item group relative">
              <Link 
                href="/courses" 
                className={`nav-link flex items-center gap-1.5 ${
                  isActive("/courses") ? "active text-rose-600 font-extrabold" : ""
                }`}
              >
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-hover:text-rose-600" />
              </Link>

              <div className="mega-dropdown-box dropdown-left w-[440px]">
                <div className="flex flex-col gap-2">
                  <Link href="/courses?tab=online" className="mega-menu-card p-3.5 hover:bg-rose-50/60 rounded-2xl border border-slate-100 hover:border-rose-200 transition-all">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md shadow-rose-500/20">
                      🌐
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                        <span>Online Courses</span>
                        <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-black">Live Zoom</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                        ১/২ Modules • Crash Course (৪০ দিন) • Full Course (৳৭,৯৯৯)
                      </div>
                    </div>
                  </Link>

                  <Link href="/courses?tab=offline" className="mega-menu-card p-3.5 hover:bg-blue-50/60 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md shadow-blue-500/20">
                      🏢
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                        <span>Offline Courses</span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black">Badda Campus</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                        Basic to Advanced (৩.৫ মাস) • Full Course • Speaking / Writing
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            {/* 5. RESOURCE HUB™ */}
            <li className="nav-item group relative">
              <Link 
                href="/resources" 
                className={`nav-link flex items-center gap-1.5 ${
                  isActive("/resources") ? "active text-rose-600 font-extrabold" : ""
                }`}
              >
                <span>Resource Hub™</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-hover:text-rose-600" />
              </Link>

              <div className="mega-dropdown-box dropdown-right w-[480px]">
                <div className="mega-menu-grid">
                  <Link href="/resources#blog" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                      📝
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">IELTS Blog</div>
                      <div className="text-[10px] text-slate-500">Articles & insights</div>
                    </div>
                  </Link>

                  <a 
                    href="https://www.youtube.com/@IELTSEssence/videos" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mega-menu-card group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm shrink-0">
                      🎬
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900 flex items-center gap-1">
                        <span>Class Recordings</span>
                        <span className="text-[10px] text-red-600 font-bold">YouTube ↗</span>
                      </div>
                      <div className="text-[10px] text-slate-500">Official Video Lessons & Archives</div>
                    </div>
                  </a>

                  <Link href="/resources#vault" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm shrink-0">
                      📖
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Premium Vocabulary Files</div>
                      <div className="text-[10px] text-slate-500">High-band collocations</div>
                    </div>
                  </Link>

                  <a 
                    href="https://writing9.com/band/7/0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mega-menu-card group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">
                      ✍️
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900 flex items-center gap-1">
                        <span>Band 7+ Writing Samples</span>
                        <span className="text-[10px] text-amber-600 font-bold">↗</span>
                      </div>
                      <div className="text-[10px] text-slate-500">Writing9.com Band 7.0+ Library</div>
                    </div>
                  </a>

                  <Link href="/resources#speaking-qa" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">
                      🎙️
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Band 7+ Speaking Q/A</div>
                      <div className="text-[10px] text-slate-500">Cue cards & model replies</div>
                    </div>
                  </Link>

                  <Link href="/resources#guides" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm shrink-0">
                      💡
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">IELTS Tips & Strategies</div>
                      <div className="text-[10px] text-slate-500">Exam hacks & roadmaps</div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            {/* 6. ACHIEVEMENTS */}
            <li className="nav-item group relative">
              <Link 
                href="/success-stories" 
                className={`nav-link flex items-center gap-1.5 ${
                  isActive("/success-stories") ? "active text-rose-600 font-extrabold" : ""
                }`}
              >
                <span>Achievements</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-hover:text-rose-600" />
              </Link>

              <div className="mega-dropdown-box dropdown-right w-[460px]">
                <div className="mega-menu-grid">
                  <Link href="/success-stories#band6" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                      🎯
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Band 6+ Milestones</div>
                      <div className="text-[10px] text-slate-500">Solid direct entry scores</div>
                    </div>
                  </Link>

                  <Link href="/success-stories#band7" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm shrink-0">
                      ⭐
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Band 7+ Excellence</div>
                      <div className="text-[10px] text-slate-500">Top university qualifiers</div>
                    </div>
                  </Link>

                  <Link href="/success-stories#hall-of-fame" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">
                      👑
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Band 8+ Distinction</div>
                      <div className="text-[10px] text-slate-500">Elite highest scorers</div>
                    </div>
                  </Link>

                  <Link href="/success-stories#score-cards" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">
                      📈
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Student Transformations</div>
                      <div className="text-[10px] text-slate-500">5.5 to 7.5+ verified proofs</div>
                    </div>
                  </Link>

                  <Link href="/success-stories#video-interviews" className="mega-menu-card col-span-2">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">
                      🎬
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Video Testimonials</div>
                      <div className="text-[10px] text-slate-500">Authentic student video reviews & interviews</div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            {/* 7. STUDY ABROAD */}
            <li className="nav-item group relative">
              <Link 
                href="/study-abroad" 
                className={`nav-link flex items-center gap-1.5 ${
                  isActive("/study-abroad") ? "active text-rose-600 font-extrabold" : ""
                }`}
              >
                <span>Study Abroad</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-hover:text-rose-600" />
              </Link>

              <div className="mega-dropdown-box dropdown-right w-[440px]">
                <div className="mega-menu-grid">
                  <Link href="/study-abroad#uk" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base shrink-0">
                      🇬🇧
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">United Kingdom</div>
                      <div className="text-[10px] text-slate-500">Russell Group & Postgrad</div>
                    </div>
                  </Link>

                  <Link href="/study-abroad#canada" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-base shrink-0">
                      🇨🇦
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Canada</div>
                      <div className="text-[10px] text-slate-500">SDS & Public Universities</div>
                    </div>
                  </Link>

                  <Link href="/study-abroad#australia" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base shrink-0">
                      🇦🇺
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Australia</div>
                      <div className="text-[10px] text-slate-500">Group of Eight (Go8)</div>
                    </div>
                  </Link>

                  <Link href="/study-abroad#usa" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-base shrink-0">
                      🇺🇸
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">United States</div>
                      <div className="text-[10px] text-slate-500">STEM & Full Scholarships</div>
                    </div>
                  </Link>

                  <Link href="/study-abroad#germany" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-base shrink-0">
                      🇩🇪
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Germany</div>
                      <div className="text-[10px] text-slate-500">Tuition-free English Programs</div>
                    </div>
                  </Link>

                  <Link href="/study-abroad#europe" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-base shrink-0">
                      🇪🇺
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Europe</div>
                      <div className="text-[10px] text-slate-500">Sweden, Finland & Netherlands</div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            {/* 8. VISIT US */}
            <li className="nav-item group relative">
              <Link 
                href="/contact" 
                className={`nav-link flex items-center gap-1.5 ${
                  isActive("/contact") ? "active text-rose-600 font-extrabold" : ""
                }`}
              >
                <span>Visit Us</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-hover:text-rose-600" />
              </Link>

              <div className="mega-dropdown-box dropdown-right w-[440px]">
                <div className="mega-menu-grid">
                  <Link href="/contact#dhaka-center" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">
                      🏢
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Campus Information</div>
                      <div className="text-[10px] text-slate-500">Lab, mock room & facilities</div>
                    </div>
                  </Link>

                  <Link href="/contact#directory" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                      📞
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Contact Directory</div>
                      <div className="text-[10px] text-slate-500">Direct phone & mentor lines</div>
                    </div>
                  </Link>

                  <Link href="/contact#hours" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">
                      ⏰
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Office Hours</div>
                      <div className="text-[10px] text-slate-500">9:00 AM – 9:00 PM (Daily)</div>
                    </div>
                  </Link>

                  <Link href="/contact#map" className="mega-menu-card">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">
                      📍
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Location & Directions</div>
                      <div className="text-[10px] text-slate-500">Interactive map & address</div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>
          </ul>

          {/* Mobile Hamburger Toggle Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              className="mobile-toggle-btn flex items-center justify-center cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 text-slate-800" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer 
        isOpen={isMobileDrawerOpen} 
        onClose={() => setIsMobileDrawerOpen(false)} 
      />
    </>
  );
}
