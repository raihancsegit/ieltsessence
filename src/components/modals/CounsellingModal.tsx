"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { X, CheckCircle2, Phone, User, Target, Sparkles, Send } from "lucide-react";
import confetti from "canvas-confetti";

export default function CounsellingModal() {
  const { isOpen, prefilledSubject, closeModal } = useModal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [targetScore, setTargetScore] = useState("Band 7.5+");
  const [mode, setMode] = useState("Online Zoom Live");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg overflow-hidden bg-white shadow-2xl rounded-3xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="relative p-6 pb-5 bg-gradient-to-r from-slate-900 via-slate-800 to-rose-950 text-white">
          <button 
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>VIP Admission & Free Seat Booking</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight font-heading">
            {prefilledSubject || "Claim Your Free IELTS Seat"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Fill the short form below. Our senior counselor will call you within 15 minutes.
          </p>
        </div>

        {/* Body Form */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">Seat Request Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you <strong className="text-slate-900">{name}</strong>! We have received your request for <strong>{prefilledSubject}</strong>. We will call you shortly at <strong className="text-rose-600">{phone}</strong>.
              </p>
              <div className="pt-3">
                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Hasan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none text-sm text-slate-800 font-medium transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mobile / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="017XX-XXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none text-sm text-slate-800 font-medium transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Target Score
                  </label>
                  <div className="relative">
                    <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      value={targetScore}
                      onChange={(e) => setTargetScore(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none text-xs text-slate-800 font-semibold bg-white cursor-pointer"
                    >
                      <option value="Band 7.0">Band 7.0</option>
                      <option value="Band 7.5+">Band 7.5+</option>
                      <option value="Band 8.0+">Band 8.0+</option>
                      <option value="Band 8.5">Band 8.5</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Class Format
                  </label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none text-xs text-slate-800 font-semibold bg-white cursor-pointer"
                  >
                    <option value="Online Zoom Live">Online (Zoom Live)</option>
                    <option value="Offline Badda Campus">Offline (Badda Campus)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-extrabold rounded-xl text-sm transition-all shadow-lg shadow-rose-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit & Confirm Free Seat</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🔒 100% Privacy Protected. No spam guaranteed.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
