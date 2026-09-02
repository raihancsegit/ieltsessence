"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import MobileDrawer from "./MobileDrawer";
import { 
  GraduationCap, ChevronDown, MessageSquare, Menu, 
  Sparkles, BookOpen, Clock, PenTool, Mic, Award, CheckCircle
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          {/* Logo Brand */}
          <Link href="/" className="logo-brand">
            <div className="logo-badge">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="logo-title">IELTS ESSENCE</div>
              <div className="logo-subtitle">Dream • Define • Dominate</div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li className="nav-item">
              <Link 
                href="/" 
                className={`nav-link ${isActive("/") && pathname === "/" ? "active text-rose-600 font-extrabold" : ""}`}
              >
                Home
              </Link>
            </li>

            {/* About Us Mega Menu */}
            <li className="nav-item group relative">
              <Link 
                href="/about" 
                className={`nav-link flex items-center gap-1 ${
                  ["/about", "/why-us", "/method", "/mentors", "/success-stories"].some(p => pathname.startsWith(p))
                    ? "active text-rose-600 font-extrabold"
                    : ""
                }`}
              >
                About Us
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              <div className="mega-dropdown-box">
                <div className="mega-menu-grid">
                  <Link href="/why-us" className="mega-menu-card">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-base">
                      💡
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-800">Why IELTS ESSENCE</div>
                      <div className="text-[10px] text-slate-400">Our unique advantages</div>
                    </div>
                  </Link>

                  <Link href="/method" className="mega-menu-card">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-base">
                      🚀
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-800">The ESSENCE Method</div>
                      <div className="text-[10px] text-slate-400">6-Step Score Roadmap</div>
                    </div>
                  </Link>

                  <Link href="/mentors" className="mega-menu-card">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base">
                      👨‍🏫
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-800">Founder & Mentors</div>
                      <div className="text-[10px] text-slate-400">Jewel Ahamadinezad (DUET)</div>
                    </div>
                  </Link>

                  <Link href="/success-stories" className="mega-menu-card">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base">
                      ⭐
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-800">Success Stories</div>
                      <div className="text-[10px] text-slate-400">Real student reviews</div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            {/* Courses Mega Menu */}
            <li className="nav-item group relative">
              <Link 
                href="/courses" 
                className={`nav-link flex items-center gap-1 ${
                  pathname.startsWith("/courses") ? "active text-rose-600 font-extrabold" : ""
                }`}
              >
                Courses
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              <div className="mega-dropdown-box">
                <div className="mega-menu-grid">
                  <Link href="/course-basic-advanced" className="mega-menu-card">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-800">Basic To Advanced</div>
                      <div className="text-[10px] text-blue-600 font-bold">3.5 Months • Complete</div>
                    </div>
                  </Link>

                  <Link href="/course-crash-course" className="mega-menu-card">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-base">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-800">IELTS Crash Course</div>
                      <div className="text-[10px] text-rose-600 font-bold">40 Days Fast Track</div>
                    </div>
                  </Link>

                  <Link href="/course-writing-masterclass" className="mega-menu-card">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-base">
                      <PenTool className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-800">Writing Masterclass</div>
                      <div className="text-[10px] text-purple-600 font-bold">Line-by-Line Feedback</div>
                    </div>
                  </Link>

                  <Link href="/course-speaking-intensive" className="mega-menu-card">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-800">Speaking Intensive</div>
                      <div className="text-[10px] text-emerald-600 font-bold">Daily Partner Practice</div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link 
                href="/calculator" 
                className={`nav-link ${isActive("/calculator") ? "active text-rose-600 font-extrabold" : ""}`}
              >
                Score Calc
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                href="/writing-evaluation" 
                className={`nav-link ${isActive("/writing-evaluation") ? "active text-rose-600 font-extrabold" : ""}`}
              >
                Writing Eval
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                href="/study-abroad" 
                className={`nav-link ${isActive("/study-abroad") ? "active text-rose-600 font-extrabold" : ""}`}
              >
                Study Abroad
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                href="/faq" 
                className={`nav-link ${isActive("/faq") ? "active text-rose-600 font-extrabold" : ""}`}
              >
                FAQ
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                href="/contact" 
                className={`nav-link ${isActive("/contact") ? "active text-rose-600 font-extrabold" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Action Group */}
          <div className="nav-actions-group">
            <a
              href="https://wa.me/8801738474611"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-header-outline hidden sm:inline-flex"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => openModal("Admission Open - Header CTA")}
              className="btn-header-crimson hidden md:inline-flex cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-white" />
              <span>Admission Open</span>
            </button>

            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              className="mobile-toggle-btn cursor-pointer flex items-center justify-center shrink-0"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 text-slate-700" />
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
