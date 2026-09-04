"use client";

import React, { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, MessageSquare, GraduationCap, Phone } from "lucide-react";

export default function AnnouncementBar() {
  const { openModal } = useModal();
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 22, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format2 = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="bg-slate-950 text-white border-b border-slate-800/80 py-1.5 px-4 sm:px-6 relative z-50">
      <div className="max-w-[1536px] mx-auto flex items-center justify-between gap-3 text-xs flex-wrap sm:flex-nowrap">
        
        {/* Left: Next Batch & Timer */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block shrink-0"></span>
            <span className="font-extrabold text-white font-heading text-[12px] sm:text-[13px] tracking-tight">
              🔥 Next Batch Admissions Open
            </span>
          </div>
          <span className="bg-slate-900 border border-slate-700/80 text-amber-300 text-[11px] py-0.5 px-2.5 rounded-full font-mono font-bold shadow-xs">
            Starts in: {format2(timeLeft.days)}d : {format2(timeLeft.hours)}h : {format2(timeLeft.minutes)}m : {format2(timeLeft.seconds)}s
          </span>
        </div>

        {/* Right: WhatsApp + Admissions Open Buttons (Moved to Top) */}
        <div className="flex items-center gap-2.5 shrink-0 ml-auto">
          <a
            href="https://wa.me/8801738474611"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 font-bold text-[11.5px] transition-all hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="hidden md:inline text-slate-300 font-medium">Help:</span>
            <span>+880 1738–474611</span>
          </a>

          <button 
            onClick={() => openModal("Top Bar — Admissions Open")}
            className="px-3.5 py-1 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white rounded-full text-[11.5px] font-extrabold transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-rose-900/30 shrink-0 hover:scale-105"
          >
            <GraduationCap className="w-3.5 h-3.5 text-white" />
            <span>Admissions Open</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
