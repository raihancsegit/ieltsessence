"use client";

import React, { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { ArrowRight } from "lucide-react";

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
    <div className="announcement-bar px-3 py-2 text-xs text-center flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      <div className="flex items-center gap-2">
        <span className="live-pulse-dot shrink-0"></span>
        <span className="text-[11px] sm:text-xs font-semibold">Next Batch Admission Open</span>
      </div>
      <span className="timer-pill-badge text-[10px] sm:text-xs">
        Starts in: {format2(timeLeft.days)}d : {format2(timeLeft.hours)}h : {format2(timeLeft.minutes)}m : {format2(timeLeft.seconds)}s
      </span>
      <span className="hidden lg:inline text-slate-400">|</span>
      <span className="hidden md:inline text-amber-400 font-bold text-xs">Call / WhatsApp: 01738-474611</span>
      <button 
        onClick={() => openModal("Next Batch Free Seat Claim")}
        className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-full text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer shadow-sm shrink-0"
      >
        Claim Seat
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
}
