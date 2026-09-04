"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { 
  X, CheckCircle2, Phone, User, Target, Sparkles, Send, 
  CreditCard, Calendar, GraduationCap, Clock, ShieldCheck, 
  MessageSquare, ArrowRight, Loader2
} from "lucide-react";
import confetti from "canvas-confetti";

export default function CounsellingModal() {
  const { isOpen, prefilledSubject, closeModal } = useModal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [targetScore, setTargetScore] = useState("Band 7.5+");
  const [mode, setMode] = useState("Online Zoom Live");
  const [academicStatus, setAcademicStatus] = useState("Undergraduate");
  const [examDateApprox, setExamDateApprox] = useState("Within 2-3 Months");
  const [paymentGateway, setPaymentGateway] = useState("bKash");
  const [transactionId, setTransactionId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  // Clean title display
  const getDisplayTitle = () => {
    if (!prefilledSubject) return "Admissions Open — Claim Your Free IELTS Seat";
    if (prefilledSubject.includes("Header CTA") || prefilledSubject.includes("Admission Open")) {
      return "Admissions Open — Claim Your Priority Seat";
    }
    if (prefilledSubject.includes("Seat Claim") || prefilledSubject.includes("Batch")) {
      return "Next Batch Admission & Seat Booking";
    }
    return prefilledSubject;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/counselling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          targetScore,
          mode,
          academicStatus,
          examDateApprox,
          paymentGateway,
          transactionId: transactionId.trim(),
          subject: getDisplayTitle(),
        }),
      });

      const result = await response.json();
      if (result.emailSent) {
        setEmailStatus("Email notification dispatched to admissions team.");
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.55 },
        });
      } catch {
        // Confetti fallback
      }
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setName("");
    setPhone("");
    setTransactionId("");
    setEmailStatus(null);
    closeModal();
  };

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={handleResetAndClose}
    >
      <div 
        className="relative w-full max-w-2xl lg:max-w-3xl overflow-hidden bg-white shadow-2xl rounded-3xl border border-slate-100 my-auto flex flex-col transition-all transform animate-scaleUp max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with High Contrast White Title */}
        <div className="relative px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 text-white shrink-0 border-b border-white/10">
          <button 
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:rotate-90 z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex items-center gap-2.5 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-extrabold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>VIP Priority Admission</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-500/30">
              <Clock className="w-3.5 h-3.5" /> Callback in 15 mins
            </span>
          </div>

          <h3 className="!text-white text-xl sm:text-2xl font-black tracking-tight font-heading pr-10 leading-snug">
            {getDisplayTitle()}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl font-light leading-relaxed">
            ফর্মটি পূরণ করুন। তথ্য সরাসরি এডমিশন টিমে পৌঁছে যাবে এবং একজন সিনিয়র মেন্টর আপনাকে ফ্রি কাউন্সেলিংয়ের জন্য কল করবেন।
          </p>
        </div>

        {/* Modal Body with Spacious Breathing Room */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 px-4 text-center space-y-6 animate-fadeIn">
              <div className="w-20 h-20 bg-emerald-50 border-2 border-emerald-200 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-100">
                <CheckCircle2 className="w-11 h-11" />
              </div>
              
              <div>
                <h4 className="text-2xl font-black text-slate-900 font-heading">
                  অভিনন্দন {name}! আপনার রিকুয়েস্ট রিসিভ হয়েছে 🎉
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                  আপনার আবেদনের সম্পূর্ণ তথ্য সরাসরি আমাদের এডমিশন টিমের ইমেইল ও ডাটাবেজে রেকর্ড করা হয়েছে। আমাদের সিনিয়র মেন্টর আপনাকে <strong className="text-rose-600 font-bold">{phone}</strong> নম্বরে শীঘ্রই কল করবেন।
                </p>
              </div>

              {/* Summary Card */}
              <div className="max-w-md mx-auto bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-left grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Target Score</span>
                  <p className="font-extrabold text-slate-900 mt-0.5 text-sm">{targetScore}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Class Format</span>
                  <p className="font-extrabold text-slate-900 mt-0.5 text-sm">{mode}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Academic Status</span>
                  <p className="font-extrabold text-slate-900 mt-0.5 text-sm">{academicStatus}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Exam Timeline</span>
                  <p className="font-extrabold text-slate-900 mt-0.5 text-sm">{examDateApprox}</p>
                </div>
              </div>

              {/* Direct WhatsApp Quick Contact */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/8801738474611?text=${encodeURIComponent(
                    `Hello IELTS ESSENCE, I just submitted the admission form for ${name} (${phone}) targeting ${targetScore}. Please confirm my seat.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-200 transition-all hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp-এ দ্রুত কথা বলুন</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                >
                  সমাপ্ত (Done)
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 2-Column Responsive Form Layout with ample gap */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-heading">
                    আপনার পুরো নাম (Full Name) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Hasan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none text-sm text-slate-800 font-medium transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* 2. Mobile / WhatsApp Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-heading">
                    মোবাইল / WhatsApp নম্বর <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="017XX-XXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none text-sm text-slate-800 font-medium transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* 3. Target Score */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-heading">
                    টার্গেট ব্যান্ড স্কোর (Target Score)
                  </label>
                  <div className="relative">
                    <Target className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      value={targetScore}
                      onChange={(e) => setTargetScore(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none text-sm text-slate-800 font-semibold cursor-pointer transition-all shadow-xs"
                    >
                      <option value="Band 6.5">Band 6.5 (Standard University Entry)</option>
                      <option value="Band 7.0">Band 7.0 (Top University Cut-off)</option>
                      <option value="Band 7.5+">Band 7.5+ (Scholarship / Canada PR)</option>
                      <option value="Band 8.0+">Band 8.0+ (Elite Ivy League)</option>
                      <option value="Band 8.5">Band 8.5 (Near Native Mastery)</option>
                    </select>
                  </div>
                </div>

                {/* 4. Class Format */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-heading">
                    ক্লাস ফরম্যাট (Format)
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none text-sm text-slate-800 font-semibold cursor-pointer transition-all shadow-xs"
                    >
                      <option value="Online Zoom Live">Online (Interactive Zoom Live)</option>
                      <option value="Offline Badda Campus">Offline (Badda Center Campus)</option>
                    </select>
                  </div>
                </div>

                {/* 5. Academic Status */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-heading">
                    বর্তমান একাডেমিক স্ট্যাটাস
                  </label>
                  <select
                    value={academicStatus}
                    onChange={(e) => setAcademicStatus(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none text-sm text-slate-800 font-medium cursor-pointer transition-all shadow-xs"
                  >
                    <option value="HSC / A-Level">HSC / A-Level Candidate</option>
                    <option value="Undergraduate">Undergraduate Student</option>
                    <option value="Graduate / Masters">Graduate / Masters Complete</option>
                    <option value="Job Holder / Professional">Job Holder / Working Professional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* 6. Approx Exam Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-heading">
                    সম্ভাব্য IELTS পরীক্ষার সময়
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      value={examDateApprox}
                      onChange={(e) => setExamDateApprox(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none text-sm text-slate-800 font-medium cursor-pointer transition-all shadow-xs"
                    >
                      <option value="Within 1 Month">Within 1 Month (Fast Track)</option>
                      <option value="Within 2-3 Months">Within 2–3 Months (Standard)</option>
                      <option value="Within 4-6 Months">Within 4–6 Months (Foundation)</option>
                      <option value="After 6 Months">After 6 Months</option>
                      <option value="Not Fixed Yet">Not Fixed Yet</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Section (Cleaned up, clear & spacious) */}
              <div className="pt-3 border-t border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-heading">
                      পেমেন্ট মেথড (Payment Method)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { id: "bKash", label: "bKash" },
                        { id: "Nagad", label: "Nagad" },
                        { id: "Rocket", label: "Rocket" },
                        { id: "Bank Transfer", label: "Bank" },
                      ].map((gw) => (
                        <button
                          key={gw.id}
                          type="button"
                          onClick={() => setPaymentGateway(gw.id)}
                          className={`py-2.5 px-2 text-center rounded-xl border text-xs font-extrabold transition-all cursor-pointer ${
                            paymentGateway === gw.id
                              ? "ring-2 ring-rose-500 border-rose-500 bg-rose-50 text-rose-700 shadow-sm"
                              : "border-slate-200 bg-slate-50/50 text-slate-600 hover:bg-white hover:border-slate-300"
                          }`}
                        >
                          {gw.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-heading">
                      ট্রানজেকশন আইডি <span className="text-slate-400 font-normal lowercase">(ঐচ্ছিক / optional)</span>
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="e.g. TRX9827364 (যদি ফি পাঠিয়ে থাকেন)"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none text-xs sm:text-sm text-slate-800 font-medium transition-all shadow-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-rose-600 via-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-extrabold rounded-2xl text-base sm:text-lg transition-all shadow-xl shadow-rose-600/25 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] font-heading"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>রিকুয়েস্ট প্রসেস হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <span>ফ্রি সীট কনফার্ম ও সাবমিট করুন</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 pt-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" /> ১০০% প্রাইভেসী সুরক্ষিত
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Phone className="w-3.5 h-3.5 text-rose-500 shrink-0" /> সরাসরি সিনিয়র মেন্টরের কল
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 font-bold text-emerald-600">
                  ⚡ কোনো হিডেন চার্জ নেই
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
