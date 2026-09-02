"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { 
  X, ChevronDown, GraduationCap, Phone, MessageSquare, ArrowRight, 
  Sparkles, BookOpen, Clock, PenTool, Mic, Award, HelpCircle, Mail, MapPin
} from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  if (!isOpen) return null;

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
        className="fixed inset-y-0 right-0 z-[2001] w-[88%] max-w-sm bg-white shadow-2xl p-5 sm:p-6 overflow-y-auto flex flex-col justify-between animate-slideLeft"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-600 to-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-rose-200">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-sm tracking-tight font-heading">IELTS ESSENCE</div>
                <div className="text-[9px] font-bold text-rose-600 tracking-wider">Dream • Define • Dominate</div>
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
              <span>Admission</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-sm font-semibold text-slate-700">
            <Link 
              href="/"
              onClick={onClose}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/") && pathname === "/" ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              <span>🏠</span>
              <span>Home</span>
            </Link>

            {/* About Submenu Accordion */}
            <div>
              <button 
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer ${
                  ["/about", "/why-us", "/method", "/mentors", "/success-stories"].some(p => pathname.startsWith(p))
                    ? "text-rose-600 font-bold"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>🏛️</span>
                  <span>About Us</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {aboutOpen && (
                <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100 animate-fadeIn">
                  <Link href="/about" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    📌 About Overview
                  </Link>
                  <Link href="/why-us" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    💡 Why IELTS ESSENCE
                  </Link>
                  <Link href="/method" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🚀 The 6-Step Method
                  </Link>
                  <Link href="/mentors" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    👨‍🏫 Faculty & Mentors
                  </Link>
                  <Link href="/success-stories" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    ⭐ Student Success Stories
                  </Link>
                </div>
              )}
            </div>

            {/* Courses Submenu Accordion */}
            <div>
              <button 
                onClick={() => setCoursesOpen(!coursesOpen)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer ${
                  pathname.startsWith("/courses") || pathname.startsWith("/course-") ? "text-rose-600 font-bold" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>📚</span>
                  <span>All Courses</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesOpen ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {coursesOpen && (
                <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100 animate-fadeIn">
                  <Link href="/courses" onClick={onClose} className="block px-3 py-2 text-xs font-bold text-rose-600 hover:underline">
                    🔍 View Course Catalog
                  </Link>
                  <Link href="/course-basic-advanced" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    📘 Basic To Advanced (3.5 Months)
                  </Link>
                  <Link href="/course-crash-course" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    ⚡ 40-Day IELTS Crash Course
                  </Link>
                  <Link href="/course-writing-masterclass" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    ✍️ Writing 7.5+ Masterclass
                  </Link>
                  <Link href="/course-speaking-intensive" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🗣️ Daily Speaking Lab
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/calculator"
              onClick={onClose}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/calculator") ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              <span>🧮</span>
              <span>Score Calculator</span>
            </Link>

            <Link 
              href="/writing-evaluation"
              onClick={onClose}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/writing-evaluation") ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              <span>📝</span>
              <span>Writing Evaluation</span>
            </Link>

            <Link 
              href="/study-abroad"
              onClick={onClose}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/study-abroad") ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              <span>🌍</span>
              <span>Study Abroad</span>
            </Link>

            <Link 
              href="/faq"
              onClick={onClose}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/faq") ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              <span>❓</span>
              <span>FAQ</span>
            </Link>

            <Link 
              href="/contact"
              onClick={onClose}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/contact") ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              <span>📞</span>
              <span>Contact & Campus</span>
            </Link>
          </nav>
        </div>

        {/* Footer Actions & Contact in Drawer */}
        <div className="pt-4 border-t border-slate-100 space-y-3 mt-4">
          <a
            href="tel:+8801738474611"
            className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-rose-600" />
            <span>Helpline: +880 1738-474611</span>
          </a>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium text-center">
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>41 Lane, Badda, Dhaka 6000, Bangladesh</span>
          </div>
        </div>
      </div>
    </>
  );
}
