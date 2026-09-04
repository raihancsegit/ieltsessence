"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  BookOpen, Download, FileText, Sparkles, CheckCircle2, 
  ChevronRight, Award, Headphones, ArrowRight, Search, ShieldCheck
} from "lucide-react";

export default function ResourceHubPage() {
  const { openModal } = useModal();
  const [searchTerm, setSearchTerm] = useState("");

  const samples = [
    {
      type: "Writing Task 2",
      title: "Technology & Human Connection in 21st Century",
      band: "Band 8.5",
      words: "284 words",
      tags: ["Discussion Essay", "High Lexical Density"],
      description: "Balanced argumentative structure featuring sophisticated discourse markers, complex conditional clauses, and nuance."
    },
    {
      type: "Writing Task 1",
      title: "Renewable Energy Production Across Europe (1995-2020)",
      band: "Band 9.0",
      words: "188 words",
      tags: ["Line Graph", "Data Synthesis"],
      description: "Flawless overview grouping, accurate trend description, and precise comparative language with zero grammatical errors."
    },
    {
      type: "Speaking Cue Card",
      title: "Describe an Ambitious Project You Completed",
      band: "Band 8.0",
      words: "Part 2 Audio + Transcript",
      tags: ["Past-Present-Future", "Natural Collocations"],
      description: "Fluid narrative with high lexical precision, idiomatic expressions, and spontaneous self-correction."
    }
  ];

  const grammarGuides = [
    {
      title: "Complex Sentence Architecture for Band 7.0+",
      topics: "Relative clauses, adverbial clauses of concession, and noun clauses.",
      badge: "High Impact"
    },
    {
      title: "Inversion & Fronting for Emphasis",
      topics: "Mastering structures like 'Not only... but also' and 'Hardly had... when'.",
      badge: "Band 8.0 Secret"
    },
    {
      title: "Punctuation Precision in Academic Writing",
      topics: "Proper semicolons, em-dashes, and comma splices elimination.",
      badge: "Error Minimizer"
    },
    {
      title: "Conditionals (Zero, First, Second, Third & Mixed)",
      topics: "Hypothetical arguments in Writing Task 2 and Speaking Part 3.",
      badge: "Core Framework"
    }
  ];

  const vocabularyVault = [
    {
      topic: "Environment & Climate Change",
      words: ["Biodiversity depletion", "Ecological footprint", "Renewable subsidies", "Mitigation strategies"],
      count: "45 Items"
    },
    {
      topic: "Artificial Intelligence & Automation",
      words: ["Algorithmic bias", "Disruptive innovation", "Cognitive automation", "Technological unemployment"],
      count: "50 Items"
    },
    {
      topic: "Global Economy & Globalization",
      words: ["Fiscal stimulus", "Income disparity", "Market saturation", "Socio-economic strata"],
      count: "42 Items"
    },
    {
      topic: "Education & Pedagogy",
      words: ["Curriculum modernization", "Rote learning", "Holistic development", "Pedagogical methodologies"],
      count: "38 Items"
    }
  ];

  const mockArchive = [
    {
      name: "Cambridge Academic Full Mock Exam 01",
      modules: "L, R, W, S Full Set",
      includes: "Audio MP3 + Question Booklet + Official Band Scale",
      format: "PDF + Audio"
    },
    {
      name: "Cambridge Academic Full Mock Exam 02",
      modules: "L, R, W, S Full Set",
      includes: "Audio MP3 + Detailed Answer Keys & Transcripts",
      format: "PDF + Audio"
    },
    {
      name: "IELTS ESSENCE Predicted Mock 2026",
      modules: "High-Probability Question Bank",
      includes: "Model Essays + Speaking Prompt Sheet",
      format: "Complete Set"
    }
  ];

  const pdfGuides = [
    {
      title: "IELTS Band 8.0 Blueprint & Study Plan",
      pages: "24 Pages",
      size: "3.4 MB",
      desc: "Day-by-day preparation schedule, module time distribution, and recommended materials."
    },
    {
      title: "100 High-Scoring Idiomatic Expressions for Speaking",
      pages: "18 Pages",
      size: "2.1 MB",
      desc: "Categorized by topics with realistic audio-ready example sentences."
    },
    {
      title: "Official Cambridge Writing Assessment Descriptors Decoded",
      pages: "12 Pages",
      size: "1.8 MB",
      desc: "Plain-language breakdown of TR, CC, LR, and GRA scoring parameters."
    }
  ];

  return (
    <div className="space-y-0">
      {/* Inner Hero */}
      <section className="inner-hero-section">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <div className="inner-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-rose-400">Resource Hub™</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            IELTS ESSENCE Resource Hub™ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-sky-300">
              Curated High-Yield Study Assets
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            ব্যান্ড ৮.০+ মডেল এসাইনমেন্ট, টপিক-ওয়াইজ একাডেমিক ভোকাবুলারি, গ্রামার চেকলিস্ট ও অফিসিয়াল ক্যামব্রিজ মক টেস্টের ফ্রি ভল্ট।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => openModal("Resource Hub Full Access")}
              className="btn-cta-amber cursor-pointer"
            >
              Get Free Complete Resource Kit →
            </button>
            <a href="#samples" className="btn-cta-blue">
              Browse Sample Library ↓
            </a>
          </div>
        </div>
      </section>

      {/* 1. Band 8.0+ Sample Library */}
      <section id="samples" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-rose-50 text-rose-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-rose-100">
              Band 8.0+ Sample Library
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 font-heading">
              Official-Standard High Band Essays & Transcripts
            </h2>
            <p className="text-slate-500 text-base mt-2">
              Learn directly from certified high-scoring writing samples and speaking responses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {samples.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-md hover-elevate flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase">
                      {item.type}
                    </span>
                    <span className="text-xs font-black text-white bg-rose-600 px-3 py-1 rounded-full shadow-sm">
                      {item.band}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-bold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => openModal(`Read Sample: ${item.title}`)}
                  className="btn-header-outline w-full justify-center py-3 text-xs font-bold cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-rose-600" />
                  <span>Read Full Breakdown</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Grammar for IELTS */}
      <section id="grammar" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-blue-50 text-blue-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-blue-100">
              Grammar for IELTS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 font-heading">
              Grammatical Range & Accuracy (GRA) Mastery
            </h2>
            <p className="text-slate-500 text-base mt-2">
              Eliminate common sentence fragments and master the structures required for Band 7.0–9.0.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {grammarGuides.map((guide, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 hover-elevate">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  0{idx + 1}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                      {guide.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-heading">{guide.title}</h3>
                  <p className="text-xs text-slate-600">{guide.topics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Lexical Resource Vault */}
      <section id="vault" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-purple-50 text-purple-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-purple-100">
              Lexical Resource Vault
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 font-heading">
              Topic-Wise Academic Collocations & Vocabulary
            </h2>
            <p className="text-slate-500 text-base mt-2">
              Replace repetitive words with natural, examiner-preferred collocations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vocabularyVault.map((vault, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover-elevate">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg">
                    {vault.count}
                  </span>
                  <span className="text-xs text-slate-400">Lexical Set</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base font-heading">{vault.topic}</h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {vault.words.map((w, wIdx) => (
                    <li key={wIdx} className="flex items-center gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mock Test Archive */}
      <section id="mocks" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 font-extrabold text-xs uppercase tracking-widest rounded-full border border-emerald-100">
              Mock Test Archive
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 font-heading">
              Exam-Standard Full Test Simulations
            </h2>
            <p className="text-slate-500 text-base mt-2">
              Practice with complete 4-module authentic tests under timed exam conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockArchive.map((mock, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-7 border border-slate-200 flex flex-col justify-between hover-elevate">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4">
                    📝
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-heading">{mock.name}</h3>
                  <div className="text-xs font-bold text-rose-600 mb-2">{mock.modules}</div>
                  <p className="text-xs text-slate-600 mb-6">{mock.includes}</p>
                </div>
                <button 
                  onClick={() => openModal(`Download: ${mock.name}`)}
                  className="btn-cta-blue w-full justify-center py-3 text-xs font-bold cursor-pointer"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Access Test Paper</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Essential PDF Guides */}
      <section id="guides" className="py-20 bg-slate-900 text-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-amber-500/20 text-amber-400 font-extrabold text-xs uppercase tracking-widest rounded-full border border-amber-500/30">
              Essential PDF Guides
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4 font-heading">
              Free Downloadable Preparation Manuals
            </h2>
            <p className="text-slate-400 text-base mt-2">
              Handy reference handbooks prepared by DUET faculty and Band 8.5 mentors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pdfGuides.map((guide, idx) => (
              <div key={idx} className="bg-slate-800/80 rounded-3xl p-7 border border-slate-700 flex flex-col justify-between hover-elevate">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full">
                      {guide.pages}
                    </span>
                    <span className="text-xs text-slate-400">{guide.size}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3 font-heading">{guide.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{guide.desc}</p>
                </div>
                <button 
                  onClick={() => openModal(`Download PDF: ${guide.title}`)}
                  className="btn-cta-amber w-full justify-center py-3 text-xs font-bold cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Guide (Free)</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
