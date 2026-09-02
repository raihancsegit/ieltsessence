"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, Award, ShieldCheck, 
  HelpCircle, ArrowRight, Share2, Sparkles, CheckCircle2
} from "lucide-react";
import confetti from "canvas-confetti";

export default function CalculatorPage() {
  const { openModal } = useModal();

  const [listening, setListening] = useState(7.5);
  const [reading, setReading] = useState(7.0);
  const [writing, setWriting] = useState(6.5);
  const [speaking, setSpeaking] = useState(7.0);

  const [overallBand, setOverallBand] = useState("7.0");
  const [levelText, setLevelText] = useState("Good User • High Competency");
  const [adviceText, setAdviceText] = useState("🎯 Great Score! You qualify for 90% of UK Russell Group, Canadian U15, and Australian Group of Eight universities with zero ESL requirements.");
  const [clbLevel, setClbLevel] = useState("CLB 8");
  const [strokeOffset, setStrokeOffset] = useState(83.7);

  useEffect(() => {
    const avg = (listening + reading + writing + speaking) / 4;
    let rounded = Math.floor(avg);
    const remainder = avg - rounded;

    if (remainder >= 0.75) {
      rounded += 1.0;
    } else if (remainder >= 0.25) {
      rounded += 0.5;
    }

    const bandStr = rounded.toFixed(1);
    setOverallBand(bandStr);

    // SVG Radial calculation (circumference = 2 * PI * 60 ≈ 377)
    const maxBand = 9.0;
    const offset = 377 - ((rounded / maxBand) * 377);
    setStrokeOffset(offset);

    // CLB mapping (Canada Express Entry 8777 logic)
    if (listening >= 8.5 && reading >= 8.0 && writing >= 7.5 && speaking >= 7.5) {
      setClbLevel("CLB 10 (Maximum Points)");
    } else if (listening >= 8.0 && reading >= 7.0 && writing >= 7.0 && speaking >= 7.0) {
      setClbLevel("CLB 9 (Golden 8777)");
    } else if (listening >= 7.5 && reading >= 6.5 && writing >= 6.5 && speaking >= 6.5) {
      setClbLevel("CLB 8");
    } else if (listening >= 6.0 && reading >= 6.0 && writing >= 6.0 && speaking >= 6.0) {
      setClbLevel("CLB 7");
    } else {
      setClbLevel("Below CLB 7");
    }

    // Advice text
    if (rounded >= 8.0) {
      setLevelText("🌟 Expert User • Ivy League & Top Tier Ready");
      setAdviceText("🎯 Exceptional Score! You easily meet the criteria for Oxford, Cambridge, MIT, and Canada Golden 8777 PR stream.");
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {}
    } else if (rounded >= 7.0) {
      setLevelText("✅ Good User • Direct University Admissions");
      setAdviceText("🎯 Great Score! You qualify for 90% of UK Russell Group, Canadian U15, and Australian Group of Eight universities.");
    } else if (rounded >= 6.0) {
      setLevelText("⚡ Competent User • Minimum Standard Met");
      setAdviceText("🚀 Score Boost Recommended: Raising Writing/Reading by 0.5 to 1.0 will unlock maximum scholarship and direct admission options.");
    } else {
      setLevelText("⚠️ Modest User • Immediate Training Needed");
      setAdviceText("💡 Need Preparation: Enroll in our Basic To Advanced Masterclass to systematically reach Band 7.0+.");
    }
  }, [listening, reading, writing, speaking]);

  const handleShareToWhatsApp = () => {
    const text = `Hi IELTS ESSENCE! I calculated my IELTS score on your website:%0A%0A🎧 L: ${listening} | 📖 R: ${reading} | ✍️ W: ${writing} | 🗣️ S: ${speaking}%0A🎯 Overall Band: ${overallBand}%0A🍁 CLB Level: ${clbLevel}%0A%0APlease suggest how I can improve and enroll in your course!`;
    window.open(`https://wa.me/8801738474611?text=${text}`, "_blank");
  };

  return (
    <div className="space-y-0">
      {/* ==========================================================================
          INNER HERO SECTION
          ========================================================================== */}
      <section className="inner-hero-section">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <div className="inner-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-rose-400">Score Calculator</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            Smart IELTS Band Calculator <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-sky-300">
              & Canadian CLB / CRS Level Predictor
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            অফিসিয়াল আইডিপি ও ব্রিটিশ কাউন্সিলের রাউন্ডিং রুলস অনুযায়ী নিখুঁত ব্যান্ড স্কোর গণনা করুন এবং আপনার টার্গেট দেশের জন্য যোগ্যতা যাচাই করুন।
          </p>
        </div>
      </section>

      {/* ==========================================================================
          INTERACTIVE CALCULATOR WIDGET SECTION
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Form Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="calc-widget-card space-y-6 hover-elevate">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 font-heading">Input Your Skill Band Scores</h3>
                    <p className="text-xs text-slate-400">প্রতিটি মডিউলের স্কোর সিলেক্ট করুন</p>
                  </div>
                  <span className="feature-pill-badge bg-rose-50 text-rose-600">Official Formula</span>
                </div>

                {/* 4 Modules Selection Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Listening */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5 font-heading">
                        <span>🎧</span> Listening
                      </label>
                      <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md font-heading">
                        {listening.toFixed(1)}
                      </span>
                    </div>
                    <select 
                      value={listening} 
                      onChange={(e) => setListening(parseFloat(e.target.value))}
                      className="w-full px-3 py-2.5 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="9.0">Band 9.0 (39-40/40)</option>
                      <option value="8.5">Band 8.5 (37-38/40)</option>
                      <option value="8.0">Band 8.0 (35-36/40)</option>
                      <option value="7.5">Band 7.5 (32-34/40)</option>
                      <option value="7.0">Band 7.0 (30-31/40)</option>
                      <option value="6.5">Band 6.5 (26-29/40)</option>
                      <option value="6.0">Band 6.0 (23-25/40)</option>
                      <option value="5.5">Band 5.5 (18-22/40)</option>
                      <option value="5.0">Band 5.0 (16-17/40)</option>
                    </select>
                  </div>

                  {/* Reading */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5 font-heading">
                        <span>📖</span> Reading
                      </label>
                      <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md font-heading">
                        {reading.toFixed(1)}
                      </span>
                    </div>
                    <select 
                      value={reading} 
                      onChange={(e) => setReading(parseFloat(e.target.value))}
                      className="w-full px-3 py-2.5 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="9.0">Band 9.0 (39-40/40)</option>
                      <option value="8.5">Band 8.5 (37-38/40)</option>
                      <option value="8.0">Band 8.0 (35-36/40)</option>
                      <option value="7.5">Band 7.5 (33-34/40)</option>
                      <option value="7.0">Band 7.0 (30-32/40)</option>
                      <option value="6.5">Band 6.5 (27-29/40)</option>
                      <option value="6.0">Band 6.0 (23-26/40)</option>
                      <option value="5.5">Band 5.5 (19-22/40)</option>
                      <option value="5.0">Band 5.0 (15-18/40)</option>
                    </select>
                  </div>

                  {/* Writing */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5 font-heading">
                        <span>✍️</span> Writing
                      </label>
                      <span className="text-xs font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md font-heading">
                        {writing.toFixed(1)}
                      </span>
                    </div>
                    <select 
                      value={writing} 
                      onChange={(e) => setWriting(parseFloat(e.target.value))}
                      className="w-full px-3 py-2.5 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="9.0">Band 9.0 (Expert)</option>
                      <option value="8.5">Band 8.5 (Very Good)</option>
                      <option value="8.0">Band 8.0 (Very Good)</option>
                      <option value="7.5">Band 7.5 (Good)</option>
                      <option value="7.0">Band 7.0 (Good)</option>
                      <option value="6.5">Band 6.5 (Competent)</option>
                      <option value="6.0">Band 6.0 (Competent)</option>
                      <option value="5.5">Band 5.5 (Modest)</option>
                      <option value="5.0">Band 5.0 (Modest)</option>
                    </select>
                  </div>

                  {/* Speaking */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5 font-heading">
                        <span>🗣️</span> Speaking
                      </label>
                      <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-heading">
                        {speaking.toFixed(1)}
                      </span>
                    </div>
                    <select 
                      value={speaking} 
                      onChange={(e) => setSpeaking(parseFloat(e.target.value))}
                      className="w-full px-3 py-2.5 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="9.0">Band 9.0 (Fluent & Native)</option>
                      <option value="8.5">Band 8.5 (Very Fluent)</option>
                      <option value="8.0">Band 8.0 (Fluent)</option>
                      <option value="7.5">Band 7.5 (Good Fluency)</option>
                      <option value="7.0">Band 7.0 (Natural)</option>
                      <option value="6.5">Band 6.5 (Conversational)</option>
                      <option value="6.0">Band 6.0 (Basic Fluent)</option>
                      <option value="5.5">Band 5.5 (Hesitant)</option>
                      <option value="5.0">Band 5.0 (Limited)</option>
                    </select>
                  </div>
                </div>

                {/* Raw Score Conversion Info Box */}
                <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-xs text-slate-600 space-y-1">
                  <div className="font-bold text-blue-900 flex items-center gap-1.5">
                    <span>ℹ️</span> Official IELTS Rounding Rules:
                  </div>
                  <p className="leading-relaxed">
                    ৪টি স্কোরের গড় যদি .২৫ বা তদূর্ধ্ব হয় তাহলে তা .৫ এ রাউন্ড হবে। আর যদি .৭৫ বা তদূর্ধ্ব হয় তবে পরবর্তী পূর্ণ ব্যান্ডে রাউন্ড হবে।
                  </p>
                </div>
              </div>
            </div>

            {/* Right Result & Recommendation Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Score Display Card */}
              <div className="score-display-box relative overflow-hidden hover-elevate">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 font-heading">
                  Calculated Overall Band
                </div>
                
                {/* Circular SVG Radial Gauge */}
                <div className="radial-score-gauge my-2">
                  <svg width="140" height="140" viewBox="0 0 140 140">
                    <defs>
                      <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F43F5E" />
                        <stop offset="50%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                    <circle className="radial-gauge-bg" cx="70" cy="70" r="60" />
                    <circle 
                      className="radial-gauge-progress" 
                      cx="70" 
                      cy="70" 
                      r="60" 
                      style={{ strokeDashoffset: strokeOffset }}
                    />
                  </svg>
                  <div className="radial-gauge-center">
                    <div className="text-4xl font-black text-white font-heading">{overallBand}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Overall</div>
                  </div>
                </div>

                <div className="text-sm font-bold text-amber-300 my-3 font-heading">
                  {levelText}
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 text-xs text-slate-200 border border-white/10 leading-relaxed text-left">
                  {adviceText}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Canadian CLB Level:</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-black rounded-lg border border-emerald-500/30 font-heading">
                    {clbLevel}
                  </span>
                </div>
              </div>

              {/* Action Plan Button Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 text-center">
                <h4 className="font-bold text-slate-900 text-sm font-heading">Want to push this score to Band 8.0+?</h4>
                <p className="text-xs text-slate-500">
                  আমাদের মেন্টরদের সাথে ১-অন-১ বসে ফ্রি ডায়াগনস্টিক রিপোর্ট এবং আপনার দুর্বল মডিউলের জন্য কাস্টমাইজড প্ল্যান নিন।
                </p>
                <button 
                  onClick={handleShareToWhatsApp} 
                  className="btn-cta-amber w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                >
                  Share Score To WhatsApp Mentor →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          CLB & GLOBAL UNIVERSITY ELIGIBILITY MATRIX
          ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="feature-pill-badge bg-rose-100 text-rose-700 mb-3">🍁 Canada & Global Matrix</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Canadian CLB & University Score Matrix
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              কানাডা এক্সপ্রেস এন্ট্রি পিআর এবং বিশ্বের বিভিন্ন দেশের বিশ্ববিদ্যালয়ের জন্য প্রয়োজনীয় আইইএলটিএস ব্যান্ড স্কোরের তালিকা।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Table 1: CLB Mapping */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2 font-heading">
                <span>🍁</span> Canadian CLB Language Benchmark
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400">
                      <th className="py-2">CLB Level</th>
                      <th className="py-2">Listening</th>
                      <th className="py-2">Reading</th>
                      <th className="py-2">Writing</th>
                      <th className="py-2">Speaking</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-semibold text-slate-700">
                    <tr>
                      <td className="py-3 font-bold text-emerald-600">CLB 10 (Max CRS)</td>
                      <td>8.5</td>
                      <td>8.0</td>
                      <td>7.5</td>
                      <td>7.5</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-blue-600">CLB 9 (Golden 8777)</td>
                      <td>8.0</td>
                      <td>7.0</td>
                      <td>7.0</td>
                      <td>7.0</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900">CLB 8</td>
                      <td>7.5</td>
                      <td>6.5</td>
                      <td>6.5</td>
                      <td>6.5</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-500">CLB 7 (Min Express Entry)</td>
                      <td>6.0</td>
                      <td>6.0</td>
                      <td>6.0</td>
                      <td>6.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: University Requirements */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2 font-heading">
                <span>🎓</span> Global University Minimum Requirements
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 font-heading">Oxford / Cambridge / Harvard / MIT</div>
                    <div className="text-[10px] text-slate-400">Top Ivy League & UK G5</div>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-rose-50 text-rose-600 font-black">
                    Band 7.5 (No band &lt; 7.0)
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 font-heading">Toronto / UBC / McGill / Melbourne</div>
                    <div className="text-[10px] text-slate-400">Top Tier Canada & Australia</div>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 font-black">
                    Band 6.5–7.0
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 font-heading">UK Standard Universities</div>
                    <div className="text-[10px] text-slate-400">Undergraduate & Masters Programs</div>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 font-black">
                    Band 6.0–6.5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: RAW MARKS TO BAND SCORE CONVERSION TABLE
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="feature-pill-badge bg-rose-100 text-rose-700">📊 Cambridge Score Key</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Raw Score Out of 40 to Band Score Chart
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              ক্যামব্রিজ অফিসিয়াল টেস্টে ৪০ টির মধ্যে কতটি সঠিক হলে কত ব্যান্ড স্কোর পাবেন তার নির্ভুল চার্ট।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Listening Chart */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">🎧</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base font-heading">Listening Conversion Table</h3>
                  <div className="text-[11px] text-slate-400">Academic & General Training (Same)</div>
                </div>
              </div>
              <div className="responsive-table-wrapper">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-slate-900 text-white font-bold">
                      <th className="py-2.5 px-3">Raw Score (/40)</th>
                      <th className="py-2.5 px-3 text-center">Band Score</th>
                      <th className="py-2.5 px-3">Proficiency Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr><td className="py-2 px-3 font-bold">39 – 40</td><td className="py-2 px-3 text-center font-black text-emerald-600">9.0</td><td className="py-2 px-3 text-slate-500">Expert User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">37 – 38</td><td className="py-2 px-3 text-center font-black text-emerald-600">8.5</td><td className="py-2 px-3 text-slate-500">Very Good User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">35 – 36</td><td className="py-2 px-3 text-center font-black text-blue-600">8.0</td><td className="py-2 px-3 text-slate-500">Very Good User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">32 – 34</td><td className="py-2 px-3 text-center font-black text-blue-600">7.5</td><td className="py-2 px-3 text-slate-500">Good User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">30 – 31</td><td className="py-2 px-3 text-center font-black text-amber-600">7.0</td><td className="py-2 px-3 text-slate-500">Good User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">26 – 29</td><td className="py-2 px-3 text-center font-black text-slate-700">6.5</td><td className="py-2 px-3 text-slate-500">Competent User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">23 – 25</td><td className="py-2 px-3 text-center font-black text-slate-700">6.0</td><td className="py-2 px-3 text-slate-500">Competent User</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Academic Reading Chart */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">📖</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base font-heading">Academic Reading Table</h3>
                  <div className="text-[11px] text-slate-400">Strict Scientific Standard</div>
                </div>
              </div>
              <div className="responsive-table-wrapper">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-slate-900 text-white font-bold">
                      <th className="py-2.5 px-3">Raw Score (/40)</th>
                      <th className="py-2.5 px-3 text-center">Band Score</th>
                      <th className="py-2.5 px-3">Proficiency Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr><td className="py-2 px-3 font-bold">39 – 40</td><td className="py-2 px-3 text-center font-black text-emerald-600">9.0</td><td className="py-2 px-3 text-slate-500">Expert User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">37 – 38</td><td className="py-2 px-3 text-center font-black text-emerald-600">8.5</td><td className="py-2 px-3 text-slate-500">Very Good User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">35 – 36</td><td className="py-2 px-3 text-center font-black text-blue-600">8.0</td><td className="py-2 px-3 text-slate-500">Very Good User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">33 – 34</td><td className="py-2 px-3 text-center font-black text-blue-600">7.5</td><td className="py-2 px-3 text-slate-500">Good User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">30 – 32</td><td className="py-2 px-3 text-center font-black text-amber-600">7.0</td><td className="py-2 px-3 text-slate-500">Good User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">27 – 29</td><td className="py-2 px-3 text-center font-black text-slate-700">6.5</td><td className="py-2 px-3 text-slate-500">Competent User</td></tr>
                    <tr><td className="py-2 px-3 font-bold">23 – 26</td><td className="py-2 px-3 text-center font-black text-slate-700">6.0</td><td className="py-2 px-3 text-slate-500">Competent User</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: SCORE BOOST ACTION CONSULTATION CTA
          ========================================================================== */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-[1320px] mx-auto px-6 space-y-6">
          <span className="px-4 py-1.5 bg-rose-500/20 text-rose-400 text-xs font-bold rounded-full border border-rose-500/30 uppercase">
            Need +1.0 Band Jump?
          </span>
          <h2 className="text-3xl font-extrabold font-heading">
            Turn Your Calculated Score Into A Real Band 8.0+
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            আমাদের এক্সপার্ট মেন্টরদের সাথে সরাসরি বসে আপনার দুর্বল মডিউলের জন্য কাস্টম স্টাডি প্ল্যান তৈরি করুন।
          </p>
          <div className="pt-2">
            <button 
              onClick={() => openModal("Score Boost Plan")} 
              className="btn-cta-amber px-8 py-3.5 cursor-pointer"
            >
              Claim Free Score Strategy Session →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
