"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, ArrowRight, ArrowLeft, CheckCircle2, 
  AlertCircle, Sparkles, Award, Target, HelpCircle, 
  RefreshCw, BookOpen, Clock, ShieldCheck, Check, X, 
  BarChart3, BrainCircuit, GraduationCap
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  skill: string;
  explanation: string;
}

const foundationQuestions: Question[] = [
  {
    id: 1,
    question: "Choose the correct sentence.",
    options: [
      "She go to university every day.",
      "She goes to university every day.",
      "She going to university every day.",
      "She gone to university every day."
    ],
    correctIndex: 1,
    skill: "Subject–Verb Agreement",
    explanation: "Third-person singular subjects (He/She/It) require the verb ending in '-s' or '-es' in the simple present tense."
  },
  {
    id: 2,
    question: "I ______ to Dhaka last week.",
    options: [
      "have gone",
      "have been going",
      "went",
      "go"
    ],
    correctIndex: 2,
    skill: "Past Simple",
    explanation: "Specific past time markers like 'last week' require the Past Simple tense ('went'), not the present perfect."
  },
  {
    id: 3,
    question: "She ______ English for three years.",
    options: [
      "studies",
      "studied",
      "has been studying",
      "is study"
    ],
    correctIndex: 2,
    skill: "Present Perfect Continuous",
    explanation: "Actions that started in the past and continue into the present with 'for + duration' use the Present Perfect Continuous ('has been studying')."
  },
  {
    id: 4,
    question: "If I ______ more time, I would learn another language.",
    options: [
      "have",
      "had",
      "will have",
      "would have"
    ],
    correctIndex: 1,
    skill: "Second Conditional",
    explanation: "The Second Conditional for hypothetical present/future situations uses: If + Past Simple ('had'), ... would + verb."
  },
  {
    id: 5,
    question: "I haven't seen him ______ Monday.",
    options: [
      "for",
      "during",
      "since",
      "from"
    ],
    correctIndex: 2,
    skill: "Prepositions",
    explanation: "'Since' is used for a specific starting point in time (Monday), while 'for' is used for a duration (three days)."
  },
  {
    id: 6,
    question: "He is ______ honest person.",
    options: [
      "a",
      "an",
      "the",
      "no article"
    ],
    correctIndex: 1,
    skill: "Articles",
    explanation: "The word 'honest' starts with a vowel sound (/ˈɒn.ɪst/), so it requires the indefinite article 'an'."
  },
  {
    id: 7,
    question: "Although it was raining, ______.",
    options: [
      "but we went outside",
      "we went outside",
      "however we went outside",
      "but however we went outside"
    ],
    correctIndex: 1,
    skill: "Complex Sentences",
    explanation: "Do not use 'but' or 'however' in the main clause when the dependent clause already begins with 'Although'."
  },
  {
    id: 8,
    question: "The book ______ I bought yesterday is excellent.",
    options: [
      "who",
      "where",
      "which",
      "what"
    ],
    correctIndex: 2,
    skill: "Relative Clauses",
    explanation: "'Which' (or 'that') is the relative pronoun used for non-human objects and things like books."
  },
  {
    id: 9,
    question: "By the time we arrived, the film ______.",
    options: [
      "starts",
      "has started",
      "had started",
      "was starting"
    ],
    correctIndex: 2,
    skill: "Past Perfect",
    explanation: "When one past action happened before another past action ('arrived'), the earlier action takes the Past Perfect ('had started')."
  },
  {
    id: 10,
    question: "There ______ many reasons why people choose to study abroad.",
    options: [
      "is",
      "are",
      "was",
      "has"
    ],
    correctIndex: 1,
    skill: "Subject–Verb Agreement",
    explanation: "In sentences starting with 'There', the verb agrees with the following plural noun phrase ('many reasons' → 'are')."
  },
  {
    id: 11,
    question: "The government should ______ more attention to education.",
    options: [
      "make",
      "pay",
      "do",
      "give"
    ],
    correctIndex: 1,
    skill: "Verb + Collocation",
    explanation: "The standard academic collocation is 'pay attention to', not 'make' or 'do' attention."
  },
  {
    id: 12,
    question: "I am interested ______ learning another language.",
    options: [
      "on",
      "at",
      "in",
      "for"
    ],
    correctIndex: 2,
    skill: "Prepositions",
    explanation: "The adjective 'interested' is always paired with the dependent preposition 'in' ('interested in + V-ing')."
  },
  {
    id: 13,
    question: "The number of international students ______ increasing.",
    options: [
      "are",
      "is",
      "have",
      "were"
    ],
    correctIndex: 1,
    skill: "Subject–Verb Agreement",
    explanation: "'The number of' takes a singular verb ('is'), whereas 'A number of' takes a plural verb ('are')."
  },
  {
    id: 14,
    question: "If governments invested more in public transport, traffic ______ significantly.",
    options: [
      "will reduce",
      "would decrease",
      "decreases",
      "has decreased"
    ],
    correctIndex: 1,
    skill: "Conditional Structures",
    explanation: "Second conditional pairing: If + past simple ('invested') ... main clause with 'would + base verb' ('would decrease')."
  },
  {
    id: 15,
    question: "Despite ______ expensive, the course is popular.",
    options: [
      "it is",
      "being",
      "was",
      "to be"
    ],
    correctIndex: 1,
    skill: "Gerund / Sentence Structure",
    explanation: "The preposition 'Despite' must be followed by a noun, pronoun, or gerund ('being')."
  },
  {
    id: 16,
    question: "Students ______ submit their assignments before Friday.",
    options: [
      "should to",
      "should",
      "must to",
      "ought"
    ],
    correctIndex: 1,
    skill: "Modal Verbs",
    explanation: "Modal verbs like 'should' are followed by the bare infinitive ('submit') without 'to'."
  },
  {
    id: 17,
    question: "She said that she ______ the assignment the following day.",
    options: [
      "will complete",
      "would complete",
      "completes",
      "has completed"
    ],
    correctIndex: 1,
    skill: "Reported Speech",
    explanation: "In reported speech introduced by a past reporting verb ('said'), 'will' shifts back to 'would'."
  },
  {
    id: 18,
    question: "The students ______ by the teacher received certificates.",
    options: [
      "who selected",
      "selecting",
      "selected",
      "were selecting"
    ],
    correctIndex: 2,
    skill: "Reduced Relative Clause",
    explanation: "Passive reduced relative clause: 'The students [who were] selected by the teacher...' simplifies to 'selected'."
  },
  {
    id: 19,
    question: "Not only ______ English, but he also speaks French.",
    options: [
      "he speaks",
      "does he speak",
      "he does speak",
      "speaks he"
    ],
    correctIndex: 1,
    skill: "Inversion",
    explanation: "Negative fronting with 'Not only' triggers subject-auxiliary inversion ('does he speak')."
  },
  {
    id: 20,
    question: "Had I known about the problem, I ______ you earlier.",
    options: [
      "will tell",
      "would tell",
      "would have told",
      "told"
    ],
    correctIndex: 2,
    skill: "Third Conditional",
    explanation: "Inverted Third Conditional ('Had I known' = 'If I had known') pairs with 'would have + past participle' ('would have told')."
  }
];

export default function DiagnosticPage() {
  const { openModal } = useModal();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Section 1: Profile & Goals
  const [profile, setProfile] = useState({
    reason: "",
    testType: "",
    targetBand: "",
    timeline: "",
    takenBefore: "",
    weakestSkill: "",
    currentLevel: ""
  });

  // Section 2: Answers
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  // Calculate Results
  const totalAnswered = Object.keys(answers).length;
  const correctCount = foundationQuestions.reduce((acc, q) => {
    return answers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  // Foundation Level
  const getFoundationLevel = (score: number) => {
    if (score <= 6) return { level: "Beginner Foundation", badge: "🔴 Beginner", color: "text-rose-600 bg-rose-50 border-rose-200", focus: "Basic Grammar • Sentence Construction • Word Classes • Subject-Verb Agreement", path: "Basic to Advanced IELTS (৩.৫ মাস)" };
    if (score <= 10) return { level: "Developing Foundation", badge: "🟠 Developing", color: "text-amber-600 bg-amber-50 border-amber-200", focus: "Sentence Construction • Tenses • Complex Sentences • Grammatical Accuracy", path: "Basic to Advanced IELTS or IELTS Full Course" };
    if (score <= 14) return { level: "Intermediate Foundation", badge: "🟡 Intermediate", color: "text-yellow-700 bg-yellow-50 border-yellow-200", focus: "Complex Sentences • Collocations • Coherence & Cohesion • Modifiers", path: "IELTS Full Course (4 Modules)" };
    if (score <= 17) return { level: "Strong Foundation", badge: "🟢 Strong", color: "text-emerald-700 bg-emerald-50 border-emerald-200", focus: "Lexical Precision • Inversions • Advanced Academic Structures • Task Response", path: "IELTS Full Course or 40-Day Crash Course" };
    return { level: "Advanced Foundation", badge: "🔵 Advanced", color: "text-blue-700 bg-blue-50 border-blue-200", focus: "Band 8.5 Stylistics • Line-by-Line Refinement • Cambridge Traps • Mock Tests", path: "IELTS Crash Course or Mock Test Program" };
  };

  const resultInfo = getFoundationLevel(correctCount);

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      {/* ==========================================================================
          INNER HERO
          ========================================================================== */}
      <section className="inner-hero-section">
        <div className="max-w-[1000px] mx-auto px-6 text-center space-y-4">
          <div className="inner-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-400">Score Roadmap</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-rose-400">Diagnostic Assessment</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            Official IELTS Diagnostic Assessment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-rose-300 to-amber-300">
              Goal Profiling & Foundation Evaluation
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            ৫ মিনিটের ফ্রি ডায়াগনস্টিক টেস্ট দিয়ে আপনার বর্তমান ইংরেজি ফাউন্ডেশন লেভেল, গ্রামার নির্ভুলতা এবং টার্গেট ব্যান্ডের জন্য সঠিক কোর্স পাথওয়ে জেনে নিন।
          </p>

          {/* Stepper Pill */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-slate-300">
            <span className={`px-3.5 py-1.5 rounded-xl transition-all ${currentStep === 1 ? "bg-rose-600 text-white font-black shadow-md" : ""}`}>
              1. Goal Profile (১ মিনিট)
            </span>
            <span className="px-2 text-slate-500">→</span>
            <span className={`px-3.5 py-1.5 rounded-xl transition-all ${currentStep === 2 ? "bg-rose-600 text-white font-black shadow-md" : ""}`}>
              2. ২০টি ফাউন্ডেশন প্রশ্ন (৪ মিনিট)
            </span>
            <span className="px-2 text-slate-500">→</span>
            <span className={`px-3.5 py-1.5 rounded-xl transition-all ${currentStep === 3 ? "bg-emerald-600 text-white font-black shadow-md" : ""}`}>
              3. ইনস্ট্যান্ট রিপোর্ট
            </span>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          ASSESSMENT CONTAINER
          ========================================================================== */}
      <section className="py-16">
        <div className="max-w-[960px] mx-auto px-6">

          {/* ----------------------------------------------------------------------
              STEP 1: STUDENT PROFILE & GOAL
              ---------------------------------------------------------------------- */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-black text-rose-600 uppercase tracking-wider">Section 1</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1">
                  Student Profile & Target Goal
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  আপনার লক্ষ্য অনুযায়ী সঠিক ডায়াগনস্টিক রিপোর্ট তৈরি করতে নিচের তথ্যগুলো পূরণ করুন।
                </p>
              </div>

              <div className="space-y-6 text-xs">
                
                {/* 1. Reason */}
                <div className="space-y-2">
                  <label className="font-bold text-slate-900 text-sm font-heading flex items-center gap-1.5">
                    <span>1. What is your primary reason for taking IELTS?</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["Higher education", "Migration", "Work", "Professional registration", "Personal development", "Other"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setProfile({ ...profile, reason: item })}
                        className={`p-3 rounded-2xl border text-left font-semibold transition-all cursor-pointer ${
                          profile.reason === item ? "bg-rose-50 border-rose-500 text-rose-800 shadow-sm" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Test Type */}
                <div className="space-y-2">
                  <label className="font-bold text-slate-900 text-sm font-heading">
                    2. Which IELTS test are you planning to take?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Academic", "General Training", "Not sure"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setProfile({ ...profile, testType: item })}
                        className={`p-3 rounded-2xl border text-center font-semibold transition-all cursor-pointer ${
                          profile.testType === item ? "bg-blue-50 border-blue-500 text-blue-800 shadow-sm" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Target Band */}
                <div className="space-y-2">
                  <label className="font-bold text-slate-900 text-sm font-heading">
                    3. What is your target Overall Band?
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {["5.5", "6.0", "6.5", "7.0", "7.5", "8.0+", "Not sure"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setProfile({ ...profile, targetBand: item })}
                        className={`py-3 rounded-2xl border text-center font-black transition-all cursor-pointer ${
                          profile.targetBand === item ? "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Timeline */}
                <div className="space-y-2">
                  <label className="font-bold text-slate-900 text-sm font-heading">
                    4. When do you ideally want to take the IELTS test?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Within 1 Month", "In 2–3 Months", "In 4–6 Months", "Not decided yet"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setProfile({ ...profile, timeline: item })}
                        className={`p-3 rounded-2xl border text-center font-semibold transition-all cursor-pointer ${
                          profile.timeline === item ? "bg-purple-50 border-purple-500 text-purple-800 shadow-sm" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Taken Before */}
                <div className="space-y-2">
                  <label className="font-bold text-slate-900 text-sm font-heading">
                    5. Have you taken IELTS before?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Never", "Once", "Twice", "3+ times"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setProfile({ ...profile, takenBefore: item })}
                        className={`p-3 rounded-2xl border text-center font-semibold transition-all cursor-pointer ${
                          profile.takenBefore === item ? "bg-amber-50 border-amber-500 text-amber-800 shadow-sm" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 6. Weakest Skill */}
                <div className="space-y-2">
                  <label className="font-bold text-slate-900 text-sm font-heading">
                    6. What do you believe is currently your weakest skill?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Listening", "Reading", "Writing", "Speaking", "Grammar", "Vocabulary", "I'm not sure"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setProfile({ ...profile, weakestSkill: item })}
                        className={`p-3 rounded-2xl border text-center font-semibold transition-all cursor-pointer ${
                          profile.weakestSkill === item ? "bg-rose-50 border-rose-500 text-rose-800 shadow-sm" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 7. Current English Level */}
                <div className="space-y-2">
                  <label className="font-bold text-slate-900 text-sm font-heading">
                    7. How would you describe your current English level?
                  </label>
                  <div className="space-y-2">
                    {[
                      "I struggle to understand basic English.",
                      "I understand simple English but struggle to communicate.",
                      "I can communicate in everyday situations but make frequent mistakes.",
                      "I can communicate comfortably but struggle with academic English.",
                      "I am comfortable using English in most situations.",
                      "I can use English confidently in academic/professional contexts."
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setProfile({ ...profile, currentLevel: item })}
                        className={`w-full p-3.5 rounded-2xl border text-left font-medium transition-all cursor-pointer flex items-center gap-3 ${
                          profile.currentLevel === item ? "bg-indigo-50 border-indigo-500 text-indigo-900 shadow-sm font-bold" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${profile.currentLevel === item ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-400"}`}>
                          {profile.currentLevel === item && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                        </span>
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">All 7 profile fields recommended</span>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="btn-cta-blue py-3 px-8 text-xs font-black cursor-pointer flex items-center gap-2"
                >
                  <span>Proceed to Foundation Test (20 MCQs) →</span>
                </button>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------
              STEP 2: 20-QUESTION FOUNDATION ASSESSMENT TEST
              ---------------------------------------------------------------------- */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
              
              {/* Header with Progress Tracker */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-black text-blue-600 uppercase tracking-wider">Section 2</span>
                  <h2 className="text-2xl font-black text-slate-900 font-heading mt-0.5">
                    Foundation Grammar & Syntax Assessment
                  </h2>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                  <span>Answered: {totalAnswered} / 20</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-rose-600 to-blue-600 h-full transition-all duration-300"
                  style={{ width: `${(totalAnswered / 20) * 100}%` }}
                />
              </div>

              {/* Questions List */}
              <div className="space-y-8">
                {foundationQuestions.map((q, idx) => (
                  <div key={q.id} className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-500 font-mono">
                        Question {idx + 1} of 20
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                        Skill: {q.skill}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      {q.question}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                      {q.options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          className={`p-3.5 rounded-2xl border text-left font-medium transition-all cursor-pointer flex items-center gap-3 ${
                            answers[q.id] === optIdx
                              ? "bg-rose-50 border-rose-500 text-rose-900 font-bold shadow-sm"
                              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100/70"
                          }`}
                        >
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${answers[q.id] === optIdx ? "border-rose-600 bg-rose-600 text-white" : "border-slate-300"}`}>
                            {answers[q.id] === optIdx && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                          </span>
                          <span>{opt}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  ← Back to Profile
                </button>

                <button
                  onClick={() => setCurrentStep(3)}
                  disabled={totalAnswered < 1}
                  className={`btn-cta-amber py-3 px-8 text-xs font-black cursor-pointer flex items-center gap-2 ${
                    totalAnswered < 20 ? "opacity-90" : ""
                  }`}
                >
                  <span>Submit & View Instant Diagnostic Report →</span>
                </button>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------
              STEP 3: INSTANT DIAGNOSTIC REPORT & RESULTS
              ---------------------------------------------------------------------- */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Score Hero Box */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
                  <div>
                    <span className="text-xs font-black text-emerald-400 uppercase tracking-wider font-mono">
                      DIAGNOSTIC REPORT CALIBRATED
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
                      Your Foundation Evaluation Results
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Assessed against Cambridge Band 7.5+ Grammatical Range and Accuracy metrics.
                    </p>
                  </div>

                  {/* Big Score Meter */}
                  <div className="flex items-center gap-4 bg-slate-800/80 p-4 rounded-3xl border border-slate-700">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-black text-white font-heading font-mono">
                        {correctCount} <span className="text-slate-500 text-xl font-normal">/ 20</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                        Raw Grammar Score
                      </div>
                    </div>
                    <div className="h-10 w-[1px] bg-slate-700" />
                    <div className="text-center">
                      <div className="text-2xl font-black text-emerald-400 font-mono">
                        {Math.round((correctCount / 20) * 100)}%
                      </div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                        Accuracy
                      </div>
                    </div>
                  </div>
                </div>

                {/* Level Callout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Foundation Rating:</span>
                    <div className="text-xl font-black text-white font-heading flex items-center gap-2">
                      <span>{resultInfo.badge}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {correctCount >= 15 
                        ? "You possess a solid grammatical foundation capable of sustaining Band 7.5+ with fine-tuning in task structures."
                        : correctCount >= 11
                        ? "You understand many essential grammar structures, but specific syntactic gaps in complex clauses may restrict your Writing and Speaking scores."
                        : "Fundamental sentence structure and tense inconsistencies will directly impact your IELTS band. A structured foundation build is strongly advised."}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recommended Focus Areas:</span>
                    <div className="text-xs font-bold text-amber-300 leading-relaxed pt-1">
                      {resultInfo.focus}
                    </div>
                    <div className="pt-2">
                      <span className="text-[10px] text-slate-400 uppercase block font-bold">Ideal Course Pathway:</span>
                      <span className="text-xs font-extrabold text-white">{resultInfo.path}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button 
                    onClick={() => openModal(`Diagnostic Result: ${correctCount}/20 (${resultInfo.level})`)}
                    className="btn-cta-amber text-xs py-3 px-6 cursor-pointer font-black"
                  >
                    Consult Mentor on this Report →
                  </button>
                  <button
                    onClick={() => {
                      setAnswers({});
                      setCurrentStep(2);
                    }}
                    className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Retake Assessment</span>
                  </button>
                </div>
              </div>

              {/* Foundation Scale Table */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-slate-900 text-base font-heading flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-rose-600" />
                  <span>Official Foundation Level Scale</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3">Score Range</th>
                        <th className="p-3">Foundation Level</th>
                        <th className="p-3">Implication for IELTS</th>
                        <th className="p-3">Recommended Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className={correctCount <= 6 ? "bg-rose-50/60 font-bold" : ""}>
                        <td className="p-3 font-mono">0 – 6</td>
                        <td className="p-3 text-rose-600">🔴 Beginner Foundation</td>
                        <td className="p-3 text-slate-600">Severe sentence fragment errors</td>
                        <td className="p-3">Basic to Advanced IELTS (3.5 Months)</td>
                      </tr>
                      <tr className={correctCount >= 7 && correctCount <= 10 ? "bg-amber-50/60 font-bold" : ""}>
                        <td className="p-3 font-mono">7 – 10</td>
                        <td className="p-3 text-amber-600">🟠 Developing Foundation</td>
                        <td className="p-3 text-slate-600">Inconsistent complex sentences</td>
                        <td className="p-3">Basic to Advanced IELTS</td>
                      </tr>
                      <tr className={correctCount >= 11 && correctCount <= 14 ? "bg-yellow-50/60 font-bold" : ""}>
                        <td className="p-3 font-mono">11 – 14</td>
                        <td className="p-3 text-yellow-700">🟡 Intermediate Foundation</td>
                        <td className="p-3 text-slate-600">Ready for full IELTS strategies</td>
                        <td className="p-3">IELTS Full Course (4 Modules)</td>
                      </tr>
                      <tr className={correctCount >= 15 && correctCount <= 17 ? "bg-emerald-50/60 font-bold" : ""}>
                        <td className="p-3 font-mono">15 – 17</td>
                        <td className="p-3 text-emerald-700">🟢 Strong Foundation</td>
                        <td className="p-3 text-slate-600">High accuracy; focus on exam traps</td>
                        <td className="p-3">IELTS Full Course / Crash Course</td>
                      </tr>
                      <tr className={correctCount >= 18 ? "bg-blue-50/60 font-bold" : ""}>
                        <td className="p-3 font-mono">18 – 20</td>
                        <td className="p-3 text-blue-700">🔵 Advanced Foundation</td>
                        <td className="p-3 text-slate-600">Band 8.0+ capability with mock practice</td>
                        <td className="p-3">40-Day Crash or Mock Test Series</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detailed Question Review */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg font-heading">
                      Detailed Question-by-Question Audit
                    </h3>
                    <p className="text-xs text-slate-500">
                      Review each question, your selected answer, the correct option, and the grammatical reasoning.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {correctCount} Correct / {20 - correctCount} Incorrect
                  </span>
                </div>

                <div className="space-y-4">
                  {foundationQuestions.map((q, idx) => {
                    const userAnswer = answers[q.id];
                    const isCorrect = userAnswer === q.correctIndex;

                    return (
                      <div 
                        key={q.id} 
                        className={`p-5 rounded-2xl border text-xs space-y-2 transition-all ${
                          isCorrect ? "bg-emerald-50/30 border-emerald-200" : "bg-rose-50/30 border-rose-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900 font-heading">
                            Q{idx + 1}. {q.question}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                            isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                          }`}>
                            {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-slate-700">
                          <div>
                            <span className="text-slate-400">Your Answer: </span>
                            <span className={isCorrect ? "font-bold text-emerald-700" : "font-bold text-rose-700"}>
                              {userAnswer !== undefined ? q.options[userAnswer] : "Skipped"}
                            </span>
                          </div>
                          {!isCorrect && (
                            <div>
                              <span className="text-slate-400">Correct Answer: </span>
                              <span className="font-bold text-emerald-700">
                                {q.options[q.correctIndex]}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="pt-2 border-t border-slate-200/60 text-slate-600 leading-relaxed">
                          <strong className="text-slate-900">Grammar Rule ({q.skill}): </strong>
                          <span>{q.explanation}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

        </div>
      </section>
    </div>
  );
}
