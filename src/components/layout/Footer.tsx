"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  GraduationCap, Phone, Mail, MapPin, MessageSquare, 
  ArrowRight, ShieldCheck, Heart, Globe 
} from "lucide-react";

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="IELTS ESSENCE Home">
              <div className="w-10 h-11 flex items-center justify-center shrink-0">
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
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              বাংলাদেশের শিক্ষার্থীদের জন্য প্রিমিয়াম IELTS লার্নিং প্ল্যাটফর্ম। Band 8.5 Scorer মেন্টরদের ডিরেক্ট মেন্টরশিপ ও বৈজ্ঞানিক মেথডে আপনার স্বপ্নের ব্যান্ডের নিশ্চয়তা।
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://wa.me/8801738474611" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
                title="Chat on WhatsApp (+880 1738-474611)"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61565824504813" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center transition-all"
                aria-label="Facebook Page"
                title="Official Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a 
                href="https://www.youtube.com/@IELTSEssence/videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 flex items-center justify-center transition-all"
                aria-label="YouTube Channel"
                title="Official YouTube Channel (@IELTSEssence)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">Explore</h4>
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
                <Link href="/calculator" className="hover:text-rose-400 transition-colors">IELTS Band Calculator</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">Our Courses</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/courses/course-basic-advanced" className="hover:text-rose-400 transition-colors">Basic To Advanced</Link>
              </li>
              <li>
                <Link href="/courses/course-crash-course" className="hover:text-rose-400 transition-colors">40-Day Crash Course</Link>
              </li>
              <li>
                <Link href="/courses/course-writing-masterclass" className="hover:text-rose-400 transition-colors">Writing 7.5+ Masterclass</Link>
              </li>
              <li>
                <Link href="/courses/course-speaking-intensive" className="hover:text-rose-400 transition-colors">Daily Speaking Lab</Link>
              </li>
              <li>
                <Link href="/writing-evaluation" className="hover:text-rose-400 transition-colors">Writing Evaluation</Link>
              </li>
              <li>
                <Link href="/study-abroad" className="hover:text-rose-400 transition-colors">Study Abroad Support</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Campuses */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">Get in Touch</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold">01738-474611</div>
                  <div className="text-[11px] text-slate-500">9:00 AM – 10:00 PM Daily</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <a href="mailto:ieltsessencehr@gmail.com" className="text-slate-300 hover:text-white transition-colors">ieltsessencehr@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">41 Lane, Badda, Dhaka 6000, Bangladesh</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => openModal("Footer Free Consultation")}
                  className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <span>Book Free Session</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-400">IELTS ESSENCE</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/faq" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Campus Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
