"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  GraduationCap, Phone, Mail, MapPin, MessageSquare, 
  ArrowRight, ShieldCheck, Heart, Globe, Sparkles,
  Award, BookOpen, Clock, CheckCircle2, FileText,
  Calculator, Compass, Headphones, Shield, HelpCircle
} from "lucide-react";

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-14 pb-10 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ==========================================================================
            1. TOP TRUST ANCHOR STRIP (4 Academic Pillars)
            ========================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-white font-heading">Cambridge Aligned</div>
              <div className="text-[11px] text-slate-400 font-medium">Authentic Test 11–19 standards</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-white font-heading">Band 8.5 Faculty</div>
              <div className="text-[11px] text-slate-400 font-medium">DUET, DU, BAU & BUP Mentors</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 shadow-sm">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-white font-heading">15-Hour Writing Lab</div>
              <div className="text-[11px] text-slate-400 font-medium">Daily line-by-line evaluations</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-white font-heading">Study Abroad Advisory</div>
              <div className="text-[11px] text-slate-400 font-medium">Free Visa & Admission Guidance</div>
            </div>
          </div>
        </div>

        {/* ==========================================================================
            2. MAIN FOOTER MULTI-COLUMN GRID
            ========================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-800/90">
          
          {/* Brand & Mission Column (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="IELTS ESSENCE Home">
              <div className="w-10 h-11 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                <img 
                  src="/images/emblem-transparent.png" 
                  alt="IELTS ESSENCE Emblem" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center select-none">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-black text-white text-[19px] tracking-tight font-heading">
                    I<span className="relative inline-block text-white">E<span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-rose-500"></span></span>LTS
                  </span>
                  <span className="font-black text-white text-[17px] tracking-wider font-heading">
                    ESSENCE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-[8px] font-black text-rose-400 tracking-[0.16em] uppercase">
                  <span>DREAM</span>
                  <span className="w-1 h-1 rounded-full bg-rose-500 inline-block shrink-0"></span>
                  <span>DEFINE</span>
                  <span className="w-1 h-1 rounded-full bg-rose-500 inline-block shrink-0"></span>
                  <span>DOMINATE</span>
                </div>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-bengali">
              বাংলাদেশের শিক্ষার্থীদের জন্য প্রিমিয়াম IELTS লার্নিং প্ল্যাটফর্ম। Band 8.5 Scorer মেন্টরদের ডিরেক্ট মেন্টরশিপ ও বৈজ্ঞানিক মেথডে আপনার স্বপ্নের ব্যান্ডের নিশ্চয়তা।
            </p>

            {/* Official Social Channels Strip */}
            <div className="pt-1">
              <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">Connect With Us:</div>
              <div className="flex items-center gap-2.5">
                <a 
                  href="https://wa.me/8801738474611" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-9 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center gap-2 transition-all text-xs font-bold shadow-2xs hover:scale-105"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp (+880 1738-474611)"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61565824504813" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-9 px-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center gap-2 transition-all text-xs font-bold shadow-2xs hover:scale-105"
                  aria-label="Facebook Page"
                  title="Official Facebook Page"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://www.youtube.com/@IELTSEssence/videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-9 px-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 flex items-center gap-2 transition-all text-xs font-bold shadow-2xs hover:scale-105"
                  aria-label="YouTube Channel"
                  title="Official YouTube Channel (@IELTSEssence)"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            {/* Micro Institutional Trust Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Govt. Reg. Education & IELTS Preparation Platform</span>
              </div>
            </div>
          </div>

          {/* Col 2: Explore (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-rose-400" />
              <span>Explore</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-rose-400 transition-colors">About IELTS ESSENCE</Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-rose-400 transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link href="/method" className="hover:text-rose-400 transition-colors">The 6-Step Method</Link>
              </li>
              <li>
                <Link href="/mentors" className="hover:text-rose-400 transition-colors">Mentors & Instructors</Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-rose-400 transition-colors">Success Stories & Results</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-rose-400 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-400 transition-colors">Contact & Campus Visit</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>Programs</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/course-basic-advanced" className="hover:text-rose-400 transition-colors">Basic To Advanced IELTS</Link>
              </li>
              <li>
                <Link href="/course-crash-course" className="hover:text-rose-400 transition-colors">40-Day IELTS Crash Course</Link>
              </li>
              <li>
                <Link href="/course-writing-masterclass" className="hover:text-rose-400 transition-colors">Writing 7.5+ Masterclass</Link>
              </li>
              <li>
                <Link href="/course-speaking-intensive" className="hover:text-rose-400 transition-colors">Daily Speaking Lab</Link>
              </li>
              <li>
                <Link href="/writing-evaluation" className="hover:text-rose-400 transition-colors">Writing Evaluation Service</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-rose-400 transition-colors">All Course Fees & Batches</Link>
              </li>
              <li>
                <Link href="/study-abroad" className="hover:text-rose-400 transition-colors">Study Abroad Support</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Free Resources (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Free Tools</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/diagnostic" className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1">
                  <span>Free Diagnostic (5 Min)</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-600 text-white font-black">Free</span>
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-rose-400 transition-colors">IELTS Band Calculator</Link>
              </li>
              <li>
                <Link href="/writing-evaluation" className="hover:text-rose-400 transition-colors">Submit Essay for Check</Link>
              </li>
              <li>
                <Link href="/why-us#comparison" className="hover:text-rose-400 transition-colors">10-Point Comparison</Link>
              </li>
              <li>
                <Link href="/method#daily-flow" className="hover:text-rose-400 transition-colors">Daily Study Protocol</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-rose-400 transition-colors">Resource Hub & PDF Traps</Link>
              </li>
              <li>
                <button 
                  onClick={() => openModal("Free Assessment from Footer Tools")} 
                  className="text-left hover:text-rose-400 transition-colors text-xs cursor-pointer"
                >
                  Book 1-on-1 Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Get in Touch & Campus Address (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Get in Touch</span>
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold flex flex-col gap-0.5">
                    <a href="tel:+8801738474611" className="hover:text-amber-300 transition-colors">01738-474611</a>
                    <a href="tel:+8801540796074" className="hover:text-amber-300 transition-colors">01540-796074</a>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>Sat–Thu: 9 AM–10 PM | Fri: 2:30 PM–10 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5 text-[11.5px]">
                  <a href="mailto:ieltsessencehr@gmail.com" className="text-slate-300 hover:text-white transition-colors break-all">ieltsessencehr@gmail.com</a>
                  <a href="mailto:ieltsinhome@gmail.com" className="text-slate-300 hover:text-white transition-colors break-all">ieltsinhome@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div className="text-slate-300 leading-snug text-[11px] space-y-1.5">
                  <div>
                    <strong className="text-amber-400 block text-xs font-heading">Branch Campus:</strong>
                    Cha-75/C, SM Bhaban, Badda, Dhaka-1212
                    <div className="text-slate-400 text-[10px]">(মেইনরোড সংলগ্ন, হোসেন মার্কেট)</div>
                  </div>
                  <div className="pt-1 border-t border-slate-800/80">
                    <strong className="text-blue-400 block text-xs font-heading">Headquarter:</strong>
                    House - 1/B, Block - I, Road - 08, Banani, Dhaka-1213
                  </div>
                </div>
              </div>

              <div className="pt-1.5">
                <button
                  onClick={() => openModal("Footer Free Consultation")}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer group"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ==========================================================================
            3. PAYMENT METHODS & ADMISSION SUPPORT BAR
            ========================================================================== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-slate-400">
            <span className="font-bold text-slate-300">Admission Payment Channels:</span>
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
              <span className="px-2 py-0.5 rounded-md bg-pink-500/10 border border-pink-500/30 text-pink-400">bKash</span>
              <span className="px-2 py-0.5 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-400">Nagad</span>
              <span className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-400">Rocket</span>
              <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400">Visa / Mastercard</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">Bank Transfer</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300">Campus Walk-in</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11.5px] text-slate-400">
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Instant Confirmation</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-sky-400">
              <Shield className="w-3.5 h-3.5" />
              <span>100% Secure Admissions</span>
            </span>
          </div>
        </div>

        {/* ==========================================================================
            4. COPYRIGHT, DISCLAIMER & LEGAL
            ========================================================================== */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>
              © {new Date().getFullYear()} <strong className="text-slate-300">IELTS ESSENCE</strong>. All rights reserved. Dream • Define • Dominate.
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <Link href="/faq" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/faq" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link href="/faq" className="hover:text-slate-300 transition-colors">Refund Policy</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-slate-300 transition-colors">Campus Map & Directions</Link>
            </div>
          </div>

          <p className="text-[10px] text-slate-600 leading-relaxed text-center sm:text-left border-t border-slate-900 pt-3">
            Disclaimer: IELTS is a registered trademark of University of Cambridge, the British Council, and IDP Education Australia. IELTS ESSENCE is an independent test preparation and higher education mentorship platform. All trademarks and brand names belong to their respective holders.
          </p>
        </div>

      </div>
    </footer>
  );
}
