"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { X, ChevronDown, GraduationCap, Phone, MessageSquare, ArrowRight } from "lucide-react";

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

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <div 
        className="fixed inset-0 z-[2000] bg-slate-950/60 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
      />
      <div 
        className="fixed inset-y-0 right-0 z-[2001] w-[85%] max-w-sm bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between animate-slideLeft"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-600 to-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-sm tracking-tight font-heading">IELTS ESSENCE</div>
                <div className="text-[9px] font-bold text-rose-600 tracking-wider">Dream • Define • Dominate</div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-sm font-semibold text-slate-700">
            <Link 
              href="/"
              onClick={onClose}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/") ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              Home
            </Link>

            {/* About Submenu Accordion */}
            <div>
              <button 
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer"
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {aboutOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                  <Link href="/about" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    🏛️ About Overview
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
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-all text-left cursor-pointer"
              >
                <span>Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${coursesOpen ? "rotate-180 text-rose-600" : "text-slate-400"}`} />
              </button>
              {coursesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                  <Link href="/courses" onClick={onClose} className="block px-3 py-2 text-xs font-bold text-rose-600 hover:underline">
                    📚 View All Courses
                  </Link>
                  <Link href="/course-basic-advanced" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    📘 Basic To Advanced (3.5M)
                  </Link>
                  <Link href="/course-crash-course" onClick={onClose} className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600">
                    ⚡ 40-Day Crash Course
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
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/calculator") ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              Score Calculator
            </Link>

            <Link 
              href="/writing-evaluation"
              onClick={onClose}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/writing-evaluation") ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              Writing Evaluation
            </Link>

            <Link 
              href="/study-abroad"
              onClick={onClose}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/study-abroad") ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              Study Abroad
            </Link>

            <Link 
              href="/faq"
              onClick={onClose}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/faq") ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              FAQ
            </Link>

            <Link 
              href="/contact"
              onClick={onClose}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                isActive("/contact") ? "bg-rose-50 text-rose-600 font-bold" : "hover:bg-slate-50 hover:text-rose-600"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Footer Actions in Drawer */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <a
            href="https://wa.me/8801738474611"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-100 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            WhatsApp Direct Chat
          </a>

          <button
            onClick={() => {
              onClose();
              openModal("Mobile Drawer Admission CTA");
            }}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-200 transition-all cursor-pointer"
          >
            <span>Admission Open</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
