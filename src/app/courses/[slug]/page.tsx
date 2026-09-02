"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { coursesData } from "@/data/courses";
import { useModal } from "@/context/ModalContext";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import { 
  Sparkles, Clock, BookOpen, Target, CheckCircle2, 
  ArrowRight, ShieldCheck, Calendar, Zap, MessageSquare 
} from "lucide-react";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = use(params);
  const { openModal } = useModal();

  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Course Hero Banner */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-950 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${course.badgeColor}`}>
                  {course.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-bold">
                  {course.targetBand} Target
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {course.overview}
              </p>

              {/* Quick Meta Pills */}
              <div className="grid grid-cols-3 gap-3 max-w-md pt-2 text-center text-xs">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Duration</div>
                  <div className="text-sm font-extrabold text-white mt-0.5">{course.duration}</div>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Classes</div>
                  <div className="text-sm font-extrabold text-white mt-0.5">{course.totalClasses}</div>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Mocks</div>
                  <div className="text-sm font-extrabold text-white mt-0.5">{course.mockTests}</div>
                </div>
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="lg:col-span-4">
              <div className="bg-white text-slate-900 rounded-3xl p-7 border border-slate-200 shadow-2xl space-y-6">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Course Fee</div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-black text-slate-900 font-heading">{course.price}</span>
                    <span className="text-sm text-slate-400 line-through">{course.originalPrice}</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100 font-medium">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Days:</span>
                    <span className="font-bold text-slate-900">{course.schedule.days}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Time:</span>
                    <span className="font-bold text-slate-900">{course.schedule.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Mode:</span>
                    <span className="font-bold text-rose-600">{course.schedule.format}</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <button
                    onClick={() => openModal(`Enrollment: ${course.title}`)}
                    className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-rose-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Claim Your Seat Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/8801738474611"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>

                <div className="text-[11px] text-center text-slate-400 font-medium flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Satisfaction & Score Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum Breakdown"
          title="কোর্সের বিস্তারিত সিলেবাস ও মডিউলসমূহ"
          subtitle="প্রতিটি ক্লাসের সুনির্দিষ্ট টপিক এবং ব্যবহারিক প্র্যাকটিস ফ্রেমওয়ার্ক।"
        />

        <div className="space-y-6 pt-4">
          {course.syllabus.map((mod, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 font-bold text-xs border border-rose-200">
                  {mod.week}
                </span>
                <span className="text-xs font-bold text-slate-400 font-heading">
                  Module {idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                {mod.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {mod.topics.map((topic, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Highlights & Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900 font-heading text-center">
            এই কোর্সের বিশেষ সুবিধাসমূহ:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
            {course.features.map((feat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 font-bold text-xs">
                  ✓
                </div>
                <span className="leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Enroll in ${course.title} Today`}
        subtitle="সীমিত আসনের নতুন ব্যাচে ফ্রি সিট বুকিং বা সরাসরি মেন্টরের সাথে ১৫ মিনিটের ওয়ান-অন-ওয়ান রোডম্যাপ সেশন বুক করুন।"
      />
    </div>
  );
}
