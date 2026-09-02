"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, Search, ChevronDown, 
  HelpCircle, ArrowRight, MessageSquare, PhoneCall
} from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "১. আমার ইংরেজির বেসিক দুর্বল, আমি কি সরাসরি IELTS কোর্সে ভর্তি হতে পারব?",
    answer: "হ্যাঁ, অবশ্যই! আমাদের \"IELTS Basic To Advanced Masterclass\" বিশেষভাবে তৈরি করা হয়েছে তাদের জন্য যাদের গ্রামার, ভোকাবুলারি ও স্পিকিং এ জড়তা আছে। কোর্সের প্রথম ৩-৪ সপ্তাহ আমরা ফান্ডামেন্টাল গ্রামার, কমপ্লেক্স সেন্টেন্স মেকিং ও প্রোনাউনসিয়েশনের ভিত্তি শক্ত করি, এরপর অ্যাডভান্সড আইইএলটিএস মডিউল শুরু করি।"
  },
  {
    id: 2,
    question: "২. অনলাইন ক্লাসে কি অফলাইনের মতোই মনোযোগ ও পারসোনাল কেয়ার পাওয়া যাবে?",
    answer: "আমাদের অনলাইন ব্যাচ জুম প্রিমিয়াম প্ল্যাটফর্মে লাইভ অনুষ্ঠিত হয় এবং প্রতি ব্যাচে সর্বোচ্চ ১৫-২০ জন শিক্ষার্থী নেওয়া হয়। ক্লাসের প্রতিটি শিক্ষার্থীকে কথা বলতে ও ড্রিল প্র্যাকটিসে অংশ নিতে হয়। প্রতিটি ক্লাসের HD রেকর্ডিং ও লেকচার নোট পোর্টাল ও সিক্রেট টেলিগ্রাম গ্রুপে শেয়ার করা হয়।"
  },
  {
    id: 3,
    question: "৩. রাইটিং ইভালুয়েশন কীভাবে করা হয় এবং ফিডব্যাক পেতে কতক্ষণ সময় লাগে?",
    answer: "শিক্ষার্থীরা তাদের টাস্ক ১ ও টাস্ক ২ এসে আমাদের ডেডিকেটেড পোর্টালে অথবা হোয়াটসঅ্যাপে সাবমিট করেন। আমাদের সার্টিফায়েড ব্যান্ড ৮.৫ ইভালুয়েটর প্যানেল ২৪ ঘণ্টার মধ্যে প্রতিটি লাইনের ভুল চিহ্নিত করে, ৪টি অফিসিয়াল ক্রাইটেরিয়া (TR, CC, LR, GRA) অনুযায়ী সাব-ব্যান্ড স্কোর দেন এবং ব্যান্ড ৯ স্ট্যান্ডার্ড অল্টারনেটিভ বাক্য লিখে দেন।"
  },
  {
    id: 4,
    question: "৪. ডেইলি স্পিকিং প্র্যাকটিস সেশন কীভাবে পরিচালিত হয়?",
    answer: "সপ্তাহে শুধু ১ দিন নয়, প্রতিদিন সন্ধ্যা ৭টা থেকে রাত ১০টা পর্যন্ত আমাদের স্পিকিং লাউঞ্জে ১-অন-১ প্র্যাকটিস স্লট থাকে। শিক্ষার্থীরা তাদের নির্ধারিত পার্টনার ও মেন্টরের সাথে কিউ কার্ড ও পার্ট ৩ নিয়ে কথা বলেন এবং তাৎক্ষণিক ফ্লুয়েন্সি ও প্রোনাউনসিয়েশন ফিডব্যাক পান।"
  },
  {
    id: 5,
    question: "৫. কোর্সে কতটি মক টেস্ট অন্তর্ভুক্ত এবং মক টেস্টের মান কেমন?",
    answer: "আমাদের বেসিক টু অ্যাডভান্সড কোর্সে ২০টি এবং ক্র্যাশ কোর্সে ১০টি পূর্ণাঙ্গ মক টেস্ট অন্তর্ভুক্ত। এগুলো হুবহু আইডিআইপি ও ব্রিটিশ কাউন্সিলের স্ট্যান্ডার্ডে পেপার-বেসড ও কম্পিউটার-ডেলিভার্ড (CD-IELTS) উভয় ফরম্যাটেই নেওয়া হয়।"
  },
  {
    id: 6,
    question: "৬. কোর্স ফি পরিশোধের পদ্ধতি ও ইন্সটলমেন্ট সুবিধা আছে কি?",
    answer: "হ্যাঁ, আপনি বিকাশ, নগদ, রকেট, ব্যাংক ট্রান্সফার বা ক্রেডিট কার্ডের মাধ্যমে ফি পরিশোধ করতে পারবেন। ফ্ল্যাগশিপ কোর্সের ক্ষেত্রে ৫০% দিয়ে ভর্তি হয়ে পরবর্তী মাসে বাকি ৫০% পরিশোধের সহজ ২-ধাপের ইন্সটলমেন্ট সুবিধা রয়েছে।"
  },
  {
    id: 7,
    question: "৭. স্কোর অর্জনের পর কি আপনারা স্টাডি অ্যাব্রোড ও ভিসা প্রসেসিং এ সহায়তা করেন?",
    answer: "হ্যাঁ, আমাদের শিক্ষার্থীদের জন্য ইউকে, কানাডা, অস্ট্রেলিয়া ও ইউরোপের ইউনিভার্সিটি শর্টলিস্টিং, এসওপি (SOP) রিভিউ ও ভিসা ফাইল গাইডেন্স সম্পূর্ণ বিনামূল্যে দেওয়া হয়।"
  }
];

export default function FAQPage() {
  const { openModal } = useModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleAccordion = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <span className="text-rose-400">Frequently Asked Questions</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            Everything You Need To Know <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-sky-300">
              About IELTS ESSENCE
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            ভর্তি প্রক্রিয়া, অনলাইন ও অফলাইন ব্যাচের সময়সূচী, রাইটিং ফিডব্যাক সিস্টেম ও মক টেস্ট সংক্রান্ত সকল প্রশ্নের উত্তর।
          </p>

          {/* Search input filter */}
          <div className="max-w-xl mx-auto relative mt-6">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any question (e.g. mock test, writing feedback, fee)..." 
              className="w-full px-5 py-4 pl-12 bg-white/10 text-white placeholder-slate-400 rounded-2xl border border-white/20 backdrop-blur-md text-sm focus:outline-none focus:border-rose-400"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* ==========================================================================
          FAQ ACCORDION LIST SECTION
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div 
                    key={faq.id} 
                    className={`faq-box-item transition-all ${isOpen ? "active" : ""}`}
                  >
                    <button 
                      onClick={() => toggleAccordion(faq.id)}
                      className="faq-title-bar w-full text-left flex items-center justify-between cursor-pointer focus:outline-none"
                    >
                      <span className="font-bold text-slate-900 font-heading">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-600" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="faq-body-content text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 mt-1">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
                <p className="text-slate-500 font-bold">কোনো প্রশ্ন পাওয়া যায়নি। অন্য কীওয়ার্ড দিয়ে সার্চ করুন।</p>
              </div>
            )}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl mx-auto">
              💬
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading">Still Have Questions?</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              সরাসরি আমাদের সিনিয়র এডমিশন কাউন্সিলরের সাথে কথা বলে আপনার যেকোনো জিজ্ঞাসার উত্তর জেনে নিন।
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://wa.me/8801738474611" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-cta-amber text-xs py-3 px-6"
              >
                Chat on WhatsApp (01738-474611) →
              </a>
              <Link href="/contact" className="btn-cta-blue text-xs py-3 px-6">
                Contact Campus Office →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: EXAM REGISTRATION & BANGLADESH TEST CENTER GUIDE
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-extrabold uppercase tracking-wider border border-blue-500/30">
              <span>🏢 Official Test Guide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              IELTS Test Registration & Center Details (Bangladesh)
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              পরীক্ষার ফি, রেজিস্ট্রেশন পদ্ধতি এবং ব্রিটিশ কাউন্সিল বনাম আইডিপি সংক্রান্ত তথ্য।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="text-3xl mb-2">💳</div>
              <h3 className="text-lg font-bold text-white font-heading">Official Test Fee (2026)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                বাংলাদেশে স্ট্যান্ডার্ড আইইএলটিএস পরীক্ষার ফি প্রায় <strong>৳ ২৩,০০০ – ২৫,০০০</strong> (বিনিময় হার অনুযায়ী পরিবর্তনশীল)। পাসপোর্ট দিয়ে অনলাইনে রেজিস্ট্রেশন করতে হয়।
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="text-lg font-bold text-white font-heading">Test Venues in Bangladesh</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                ঢাকা (ধানমন্ডি, গুলশান, বনানী, উত্তরা), চট্টগ্রাম, সিলেট, খুলনা, রাজশাহী ও ময়মনসিংহে নিয়মিত পেপার ও কম্পিউটার টেস্ট অনুষ্ঠিত হয়।
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="text-3xl mb-2">💻</div>
              <h3 className="text-lg font-bold text-white font-heading">Paper vs Computer IELTS</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                কম্পিউটার টেস্টের রেজাল্ট ৩–৫ দিনে প্রকাশিত হয় এবং প্রতিদিন সিট পাওয়া যায়। পেপার টেস্টের রেজাল্ট ১৩ দিনে প্রকাশিত হয়।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: ACADEMIC VS GENERAL TRAINING COMPARISON MATRIX
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="feature-pill-badge bg-emerald-100 text-emerald-700">⚖️ Module Distinction</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Academic vs. General Training: Which One to Choose?
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              আপনার লক্ষ্য অনুযায়ী সঠিক পরীক্ষার ধরন বেছে নিন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 font-heading">IELTS Academic (উচ্চশিক্ষা)</h3>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 font-bold text-xs rounded-full font-heading">For Study Abroad</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><span>🎯</span> <strong>উদ্দেশ্য:</strong> ব্যাচেলর, মাস্টার্স বা পিএইচডি ডিগ্রির জন্য বিদেশে আবেদন।</li>
                <li className="flex items-start gap-2"><span>📖</span> <strong>রিডিং:</strong> তিনটি বড় রিসার্চ/সায়েন্টিফিক জার্নাল ভিত্তিক প্যাসেজ।</li>
                <li className="flex items-start gap-2"><span>✍️</span> <strong>রাইটিং টাস্ক ১:</strong> গ্রাফ, চার্ট, টেবিল বা প্রসেস ডায়াগ্রামের রিপোর্ট লেখা।</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 font-heading">IELTS General Training (ইমিগ্রেশন)</h3>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full font-heading">For Work & PR</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><span>🎯</span> <strong>উদ্দেশ্য:</strong> কানাডা এক্সপ্রেস এন্ট্রি, অস্ট্রেলিয়া পিআর ও কাজের ভিসা।</li>
                <li className="flex items-start gap-2"><span>📖</span> <strong>রিডিং:</strong> কর্মক্ষেত্র ও প্রাত্যহিক বিজ্ঞাপনের ছোট ছোট প্যাসেজ।</li>
                <li className="flex items-start gap-2"><span>✍️</span> <strong>রাইটিং টাস্ক ১:</strong> ফরমাল বা ইনফরমাল চিঠি (Letter Writing)।</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
