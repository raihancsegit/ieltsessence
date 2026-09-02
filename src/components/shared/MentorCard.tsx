import React from "react";
import { Mentor } from "@/data/mentors";
import { Award, BookOpen, Star, Sparkles } from "lucide-react";

interface MentorCardProps {
  mentor: Mentor;
}

export default function MentorCard({ mentor }: MentorCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* Top Banner with Band Badge */}
      <div className={`p-6 pb-5 bg-gradient-to-br ${mentor.imageBg} text-white relative`}>
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl font-extrabold shadow-inner">
            👨‍🏫
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest">IELTS Overall</div>
            <div className="inline-flex items-center gap-1 text-2xl font-black font-heading text-amber-300">
              <Star className="w-5 h-5 fill-amber-300 text-amber-300" />
              <span>Band {mentor.overallBand}</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-extrabold font-heading text-white tracking-tight">
            {mentor.name}
          </h3>
          <p className="text-xs text-white/80 font-medium mt-0.5">
            {mentor.role}
          </p>
          <div className="text-[11px] text-white/70 font-normal mt-1 flex items-center gap-1">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span className="line-clamp-1">{mentor.institution}</span>
          </div>
        </div>
      </div>

      {/* Sub-scores Pill Grid */}
      <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 grid grid-cols-4 gap-1 text-center text-xs">
        <div className="p-1 rounded-lg bg-white border border-slate-200/60">
          <div className="text-[9px] text-slate-400 font-bold">L</div>
          <div className="font-extrabold text-blue-600">{mentor.scores.listening}</div>
        </div>
        <div className="p-1 rounded-lg bg-white border border-slate-200/60">
          <div className="text-[9px] text-slate-400 font-bold">R</div>
          <div className="font-extrabold text-emerald-600">{mentor.scores.reading}</div>
        </div>
        <div className="p-1 rounded-lg bg-white border border-slate-200/60">
          <div className="text-[9px] text-slate-400 font-bold">W</div>
          <div className="font-extrabold text-purple-600">{mentor.scores.writing}</div>
        </div>
        <div className="p-1 rounded-lg bg-white border border-slate-200/60">
          <div className="text-[9px] text-slate-400 font-bold">S</div>
          <div className="font-extrabold text-rose-600">{mentor.scores.speaking}</div>
        </div>
      </div>

      {/* Bio & Specialty */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <p className="text-xs text-slate-600 leading-relaxed">
          {mentor.bio}
        </p>

        <div className="pt-3 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Experience: <strong className="text-slate-800">{mentor.experience}</strong></span>
            <span>Mentored: <strong className="text-rose-600">{mentor.studentsMentored}</strong></span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-700 font-medium flex items-start gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
            <span>Specialty: <strong>{mentor.specialty}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
