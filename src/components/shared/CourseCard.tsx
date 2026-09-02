"use client";

import React from "react";
import Link from "next/link";
import { Course } from "@/data/courses";
import { useModal } from "@/context/ModalContext";
import { Clock, BookOpen, Target, CheckCircle2, ArrowRight } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { openModal } = useModal();

  return (
    <div className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
      {/* Top Banner Ribbon */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${course.badgeColor}`}>
            {course.badge}
          </span>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
            {course.targetBand}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-rose-600 transition-colors leading-snug">
          {course.title}
        </h3>
        <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
          {course.tagline}
        </p>
      </div>

      {/* Meta Features */}
      <div className="px-6 py-3 bg-slate-50/70 border-y border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
        <div>
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Duration</div>
          <div className="font-bold text-slate-800 flex items-center justify-center gap-1 mt-0.5">
            <Clock className="w-3 h-3 text-rose-500" />
            <span>{course.duration}</span>
          </div>
        </div>
        <div className="border-x border-slate-200/60 px-1">
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Classes</div>
          <div className="font-bold text-slate-800 flex items-center justify-center gap-1 mt-0.5">
            <BookOpen className="w-3 h-3 text-blue-500" />
            <span>{course.totalClasses}</span>
          </div>
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Mocks</div>
          <div className="font-bold text-slate-800 flex items-center justify-center gap-1 mt-0.5">
            <Target className="w-3 h-3 text-emerald-500" />
            <span>{course.mockTests}</span>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="p-6 space-y-2 text-xs text-slate-600 flex-1">
        {course.highlights.slice(0, 4).map((highlight, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
            <span className="line-clamp-1">{highlight}</span>
          </div>
        ))}
      </div>

      {/* Price & Action Button */}
      <div className="p-6 pt-2">
        <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-slate-100">
          <div>
            <span className="text-2xl font-extrabold text-slate-900 font-heading">{course.price}</span>
            <span className="text-xs text-slate-400 line-through ml-2">{course.originalPrice}</span>
          </div>
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            Admission Open
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/courses/${course.slug}`}
            className="py-2.5 px-3 text-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            Details
          </Link>
          <button
            onClick={() => openModal(`Enrollment Request: ${course.title}`)}
            className="py-2.5 px-3 text-center rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>Claim Seat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
