"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import { Sparkles, Phone, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function CTASection({
  title = "আপনার টার্গেট ব্যান্ডের প্রস্তুতি শুরু করুন আজই",
  subtitle = "সীমিত আসনের নতুন ব্যাচে ফ্রি সিট বুকিং বা সরাসরি মেন্টরের সাথে ১৫ মিনিটের ওয়ান-অন-ওয়ান রোডম্যাপ সেশন বুক করুন।",
  badge = "Exclusive Batch Admission Open",
}: CTASectionProps) {
  const { openModal } = useModal();

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950 text-white">
      {/* Background glowing orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-rose-400" />
          <span>{badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Feature Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 pt-2">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Lifetime Batch Repeat</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Daily 1-on-1 Speaking</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Line-by-Line Writing Checks</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => openModal("Main CTA Section Free Seat Booking")}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-rose-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
          >
            <span>Claim Free Seat Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="https://wa.me/8801738474611"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base rounded-2xl transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
