import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ChevronRight, ArrowLeft, ArrowRight, Clock, Award, 
  CheckCircle2, AlertCircle, Sparkles, BookOpen, Share2, 
  HelpCircle, Compass, Zap, Target
} from "lucide-react";
import { strategyArticles } from "@/data/strategies";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return strategyArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function StrategyArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = strategyArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles from same module
  const relatedArticles = strategyArticles
    .filter((a) => a.module === article.module && a.id !== article.id)
    .slice(0, 4);

  // Next & previous
  const currentIndex = strategyArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? strategyArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < strategyArticles.length - 1 ? strategyArticles[currentIndex + 1] : null;

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      {/* ==========================================================================
          HEADER / HERO
          ========================================================================== */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white pt-16 pb-20 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 space-y-6">
          
          {/* Breadcrumb */}
          <div className="inner-breadcrumb text-xs">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <Link href="/resources#guides" className="text-slate-400 hover:text-white transition-colors">Resource Hub</Link>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <span className="text-rose-400">Topic #{article.id < 10 ? `0${article.id}` : article.id}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-black uppercase tracking-wider border border-rose-500/30">
              {article.icon} {article.moduleLabel}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">
              {article.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              Target: {article.targetBand}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
            {article.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            {article.subtitle}
          </p>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                DU
              </span>
              <span>IELTS ESSENCE Instructor Panel (DUET & DU Faculty)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Problem → Diagnosis → Strategy Protocol</span>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
          MAIN ARTICLE CONTENT
          ========================================================================== */}
      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10">

            {/* Executive Summary Card */}
            <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-900 font-heading">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Executive Summary</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                {article.summary}
              </p>
            </div>

            {/* 01. Problem */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 font-mono font-black text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 font-heading">
                  {article.problem.heading}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-11">
                {article.problem.description}
              </p>
            </div>

            {/* 02. Why It Happens */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 font-mono font-black text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 font-heading">
                  {article.whyItHappens.heading}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-11">
                {article.whyItHappens.description}
              </p>
            </div>

            {/* 03. The Strategy */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 font-mono font-black text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 font-heading">
                  {article.strategy.heading}
                </h2>
              </div>
              <div className="space-y-3 pl-11">
                {article.strategy.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 04. Demonstration Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-mono font-black text-sm flex items-center justify-center shrink-0">
                  04
                </span>
                <div>
                  <h2 className="text-xl font-extrabold text-white font-heading">
                    {article.demonstration.heading}
                  </h2>
                  <div className="text-xs text-slate-400 mt-0.5">Real Cambridge Exam Calibration</div>
                </div>
              </div>

              {/* Question */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 font-mono">TEST PROMPT / SCENARIO:</span>
                <p className="text-xs text-slate-200 font-bold">{article.demonstration.exampleQuestion}</p>
              </div>

              {/* Weak vs Strong comparison */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-900/60 space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 font-mono">❌ TYPICAL BAND 6.0 ATTEMPT:</span>
                  <p className="text-xs text-rose-200 leading-relaxed font-mono">{article.demonstration.poorResponse}</p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-950/50 border border-emerald-800/60 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 font-mono">✅ BAND 8.0+ CALIBRATED RESPONSE:</span>
                  <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium">{article.demonstration.band8Response}</p>
                </div>
              </div>

              {/* Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-300 space-y-1">
                <strong className="text-white font-bold">💡 Examiner Note: </strong>
                <span>{article.demonstration.breakdown}</span>
              </div>
            </div>

            {/* 05. Common Trap */}
            <div className="bg-rose-50/60 rounded-3xl p-8 border border-rose-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-rose-200 text-rose-800 font-mono font-black text-sm flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl font-extrabold text-rose-950 font-heading">
                  {article.commonTrap.heading}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-rose-900 leading-relaxed pl-11">
                {article.commonTrap.description}
              </p>
            </div>

            {/* 06. Practice Drills */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 font-mono font-black text-sm flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 font-heading">
                  {article.practiceMethod.heading}
                </h2>
              </div>
              <div className="space-y-3 pl-11">
                {article.practiceMethod.drills.map((drill, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                    <span className="w-5 h-5 rounded-md bg-sky-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{drill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 07. Core Takeaway */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-xl space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 font-mono">07 — Core Takeaway Golden Rule</span>
              <h3 className="text-xl sm:text-2xl font-black font-heading leading-snug">
                "{article.takeaway}"
              </h3>
            </div>

            {/* Navigation (Prev / Next) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
              {prevArticle ? (
                <Link
                  href={`/resources/${prevArticle.slug}`}
                  className="flex items-center gap-2 p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 text-xs font-bold text-slate-800 hover:text-rose-600 transition-all shadow-sm w-full sm:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 text-rose-600" />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400">Previous Strategy</div>
                    <div className="truncate max-w-[200px]">{prevArticle.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextArticle && (
                <Link
                  href={`/resources/${nextArticle.slug}`}
                  className="flex items-center gap-2 p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 text-xs font-bold text-slate-800 hover:text-rose-600 transition-all shadow-sm w-full sm:w-auto justify-end"
                >
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">Next Strategy</div>
                    <div className="truncate max-w-[200px]">{nextArticle.title}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-rose-600" />
                </Link>
              )}
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Back Button */}
            <Link
              href="/resources#guides"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-rose-600" />
              <span>Back to All 30 Strategies</span>
            </Link>

            {/* Related Strategies Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm font-heading flex items-center gap-2">
                <span>📚</span>
                <span>More {article.moduleLabel} Strategies</span>
              </h3>
              <div className="space-y-2.5">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/resources/${rel.slug}`}
                    className="block p-3 rounded-2xl bg-slate-50 hover:bg-rose-50 border border-slate-100 hover:border-rose-200 transition-all text-xs group"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 group-hover:text-rose-600 mb-0.5">
                      <span>#{rel.id}</span>
                      <span>•</span>
                      <span>{rel.category}</span>
                    </div>
                    <div className="font-bold text-slate-900 group-hover:text-rose-700 leading-snug">
                      {rel.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Speaking Q/A Box Link */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-900 to-slate-900 text-white space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                🎙️
              </div>
              <div>
                <h4 className="font-bold text-sm font-heading">Band 7+ Speaking Q/A Vault</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Learn how to develop natural ideas using the ESSENCE ARDEL Method™.
                </p>
              </div>
              <Link
                href="/resources#speaking-qa"
                className="btn-cta-amber w-full justify-center text-xs py-2.5"
              >
                Explore Speaking Q/A →
              </Link>
            </div>

            {/* Fast-Track Courses Box */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4">
              <div className="text-xs font-black text-rose-400 uppercase tracking-wider">Need Expert Guidance?</div>
              <h4 className="font-bold text-base font-heading">1-on-1 Mentor Evaluation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Get your Writing essays corrected line-by-line and practice daily speaking with certified examiners.
              </p>
              <Link
                href="/courses"
                className="btn-cta-blue w-full justify-center text-xs py-2.5"
              >
                View Course Fee & Batches →
              </Link>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
