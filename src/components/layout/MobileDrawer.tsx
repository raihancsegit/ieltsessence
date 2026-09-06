"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { 
  X, ChevronDown, GraduationCap, MessageSquare
} from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [openSection, setOpenSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (name: string) => {
    setOpenSection(prev => (prev === name ? null : name));
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[2000] bg-slate-950/70 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Drawer Card */}
      <div 
        className="fixed inset-y-0 right-0 z-[2001] w-[90%] max-w-sm bg-white shadow-2xl p-5 sm:p-6 overflow-y-auto flex flex-col justify-between animate-slideLeft"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <Link href="/" onClick={onClose} className="flex items-center gap-1.5">
              <div className="w-7 h-9 flex items-center justify-center shrink-0">
                <img 
                  src="/images/emblem-transparent.png" 
                  alt="IELTS ESSENCE Emblem" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center select-none">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-black text-slate-900 text-[16px] tracking-tight font-heading">
                    I<span className="relative inline-block text-slate-900">E<span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-rose-600"></span></span>LTS
                  </span>
                  <span className="font-black text-slate-900 text-[14px] tracking-wider font-heading">
                    ESSENCE
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[7px] font-black text-slate-500 tracking-[0.15em] uppercase">
                  <span>DREAM</span>
                  <span className="w-1 h-1 rounded-full bg-rose-600 inline-block shrink-0"></span>
                  <span>DEFINE</span>
                  <span className="w-1 h-1 rounded-full bg-rose-600 inline-block shrink-0"></span>
                  <span>DOMINATE</span>
                </div>
              </div>
            </Link>
            
            <button 
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold transition-all cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick CTAs in Drawer Header */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <a
              href="https://wa.me/8801738474611"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-100 transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                openModal("Mobile Drawer Top CTA");
              }}
              className="py-2 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-rose-200 cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Admissions Open</span>
            </button>
          </div>

          {/* Navigation Accordion Links (All 8 Merged Menus) */}
          <nav className="space-y-1 text-xs font-semibold text-slate-700">
            
            {/* 1. ESSENCE METHOD™ */}
            <div>
              <button 
                onClick={() => toggleSection("method")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer ${
                  isActive("/method") ? "text-rose-600 font-bold" : ""
                }`}
              >
                <span>🚀 ESSENCE METHOD™</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "method" ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {openSection === "method" && (
                <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100 animate-fadeIn">
                  <Link href="/method" onClick={onClose} className="block px-3 py-1.5 text-xs font-semibold text-purple-700 hover:text-purple-800">
                    🚀 The ESSENCE Method™ Overview
                  </Link>
                  <Link href="/about" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🏛️ About IELTS ESSENCE
                  </Link>
                  <Link href="/mentors" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    👨‍🏫 Founder & Mentors (DUET)
                  </Link>
                  <Link href="/why-us" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    💡 Why IELTS ESSENCE
                  </Link>
                  <Link href="/method#blueprint" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🧭 Strategy Blueprint (Band 7.5+)
                  </Link>
                  <Link href="/method#daily-flow" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    ⏱️ Daily Flow & Routine
                  </Link>
                </div>
              )}
            </div>

            {/* 2. SCORE ROADMAP */}
            <div>
              <button 
                onClick={() => toggleSection("roadmap")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer ${
                  isActive("/calculator") || isActive("/faq") ? "text-rose-600 font-bold" : ""
                }`}
              >
                <span>🎯 SCORE ROADMAP</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "roadmap" ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {openSection === "roadmap" && (
                <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100 animate-fadeIn">
                  <Link href="/calculator" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🧮 Band Predictor & Score Calc
                  </Link>
                  <Link href="/#target-band" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🗓️ Target Band Timeline Estimator
                  </Link>
                  <Link href="/diagnostic" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    📊 Diagnostic Assessment (Profile + 20 MCQs)
                  </Link>
                  <Link href="/faq" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    ❓ Preparation FAQ
                  </Link>
                </div>
              )}
            </div>

            {/* 3. SCORE IMPROVEMENT */}
            <div>
              <button 
                onClick={() => toggleSection("improvement")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer ${
                  isActive("/why-us") || isActive("/writing-evaluation") ? "text-rose-600 font-bold" : ""
                }`}
              >
                <span>📈 SCORE IMPROVEMENT</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "improvement" ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {openSection === "improvement" && (
                <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100 animate-fadeIn">
                  <Link href="/why-us#comparison" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    ⚖️ Traditional vs IELTS ESSENCE (10 Points)
                  </Link>
                  <Link href="/writing-evaluation" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    ✍️ Writing Evaluation Architecture
                  </Link>
                  <Link href="/why-us#pillars" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🏆 4 Core Pillars of Excellence
                  </Link>
                </div>
              )}
            </div>

            {/* 4. PROGRAMS */}
            <div>
              <button 
                onClick={() => toggleSection("programs")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer ${
                  isActive("/courses") ? "text-rose-600 font-bold" : ""
                }`}
              >
                <span>📚 Programs</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "programs" ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {openSection === "programs" && (
                <div className="pl-4 pr-2 py-2 space-y-2 bg-slate-50/80 rounded-xl my-1 border border-slate-100 animate-fadeIn">
                  <Link href="/courses?tab=online" onClick={onClose} className="block px-3 py-2 rounded-lg bg-white border border-slate-100 text-xs font-bold text-slate-800 hover:text-rose-600">
                    🌐 Online Courses (Live Zoom)
                    <div className="text-[10px] text-slate-500 font-normal">১/২ Modules • Crash • Full Course (৳৭,৯৯৯)</div>
                  </Link>
                  <Link href="/courses?tab=offline" onClick={onClose} className="block px-3 py-2 rounded-lg bg-white border border-slate-100 text-xs font-bold text-slate-800 hover:text-rose-600">
                    🏢 Offline Courses (Badda Campus)
                    <div className="text-[10px] text-slate-500 font-normal">Basic to Advanced • Full Course • Speaking / Writing</div>
                  </Link>
                </div>
              )}
            </div>

            {/* 5. RESOURCE HUB™ */}
            <div>
              <button 
                onClick={() => toggleSection("resources")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer ${
                  isActive("/resources") ? "text-rose-600 font-bold" : ""
                }`}
              >
                <span>💡 RESOURCE HUB™</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "resources" ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {openSection === "resources" && (
                <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100 animate-fadeIn">
                  <Link href="/resources#blog" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    📝 IELTS Blog
                  </Link>
                  <a 
                    href="https://www.youtube.com/@IELTSEssence/videos" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={onClose} 
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-red-600 flex items-center justify-between"
                  >
                    <span>🎬 Class Recordings</span>
                    <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">YouTube ↗</span>
                  </a>
                  <Link href="/resources#vault" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    📖 Premium Vocabulary Files
                  </Link>
                  <a 
                    href="https://writing9.com/band/7/0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={onClose} 
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-amber-600 flex items-center justify-between"
                  >
                    <span>✍️ Band 7+ Writing Samples</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">Writing9 ↗</span>
                  </a>
                  <Link href="/resources#speaking-qa" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🎙️ Band 7+ Speaking Q/A
                  </Link>
                  <Link href="/resources#guides" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    💡 IELTS Tips & Strategies (PDF Guides)
                  </Link>
                </div>
              )}
            </div>

            {/* 6. ACHIEVEMENTS */}
            <div>
              <button 
                onClick={() => toggleSection("achievements")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer ${
                  isActive("/success-stories") ? "text-rose-600 font-bold" : ""
                }`}
              >
                <span>🏆 ACHIEVEMENTS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "achievements" ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {openSection === "achievements" && (
                <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100 animate-fadeIn">
                  <Link href="/success-stories#band6" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🎯 Band 6+ Milestones
                  </Link>
                  <Link href="/success-stories#band7" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    ⭐ Band 7+ Excellence
                  </Link>
                  <Link href="/success-stories#hall-of-fame" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    👑 Band 8+ Distinction (Hall of Fame)
                  </Link>
                  <Link href="/success-stories#score-cards" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    📈 Student Successful Transformations (TRF)
                  </Link>
                  <Link href="/success-stories#video-interviews" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🎬 Video Testimonials
                  </Link>
                </div>
              )}
            </div>

            {/* 7. STUDY ABROAD */}
            <div>
              <button 
                onClick={() => toggleSection("abroad")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer ${
                  isActive("/study-abroad") ? "text-rose-600 font-bold" : ""
                }`}
              >
                <span>🌍 STUDY ABROAD</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "abroad" ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {openSection === "abroad" && (
                <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100 animate-fadeIn">
                  <Link href="/study-abroad#uk" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🇬🇧 United Kingdom
                  </Link>
                  <Link href="/study-abroad#canada" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🇨🇦 Canada
                  </Link>
                  <Link href="/study-abroad#australia" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🇦🇺 Australia
                  </Link>
                  <Link href="/study-abroad#usa" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🇺🇸 United States
                  </Link>
                  <Link href="/study-abroad#germany" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🇩🇪 Germany
                  </Link>
                  <Link href="/study-abroad#europe" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🇪🇺 Europe
                  </Link>
                </div>
              )}
            </div>

            {/* 8. VISIT US */}
            <div>
              <button 
                onClick={() => toggleSection("visit")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer ${
                  isActive("/contact") ? "text-rose-600 font-bold" : ""
                }`}
              >
                <span>📍 VISIT US</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "visit" ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {openSection === "visit" && (
                <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100 animate-fadeIn">
                  <Link href="/contact#dhaka-center" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🏢 Campus Information
                  </Link>
                  <Link href="/contact#directory" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    📞 Contact Directory
                  </Link>
                  <Link href="/contact#hours" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    ⏰ Office Hours
                  </Link>
                  <Link href="/contact#map" onClick={onClose} className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600">
                    📍 Location & Directions
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Footer info in Drawer */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Campus & Support</div>
          <div className="text-xs text-slate-600 space-y-2">
            <p className="leading-snug">📍 Cha - 75 / C, SM Bhaban, Badda, Dhaka<br /><span className="text-[11px] text-slate-500">(হোসেন মার্কেট সংলগ্ন, ইবনে-সিনা হসপিটালের বিপরীতে)</span></p>
            <div className="flex flex-col gap-1 pt-0.5">
              <a href="tel:+8801738474611" className="text-slate-800 font-bold hover:text-rose-600">📞 +880 1738–474611</a>
              <a href="tel:+8801540796074" className="text-slate-800 font-bold hover:text-rose-600">📞 +880 1540–796074</a>
            </div>
            <div className="flex flex-col gap-0.5 pt-0.5 text-[11.5px]">
              <a href="mailto:ieltsessencehr@gmail.com" className="text-slate-600 hover:text-rose-600">✉️ ieltsessencehr@gmail.com</a>
              <a href="mailto:ieltsinhome@gmail.com" className="text-slate-600 hover:text-rose-600">✉️ ieltsinhome@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
