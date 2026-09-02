import React from "react";
import { Testimonial } from "@/data/testimonials";
import { Star, GraduationCap, MapPin, Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-100 -z-0 pointer-events-none" />

      <div>
        {/* Header with Avatar & Score */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-2xl ${testimonial.avatarBg} text-white font-extrabold flex items-center justify-center text-sm shadow-md font-heading`}>
              {testimonial.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h4 className="text-base font-extrabold text-slate-900 font-heading leading-tight">
                {testimonial.name}
              </h4>
              <div className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="line-clamp-1">{testimonial.university}</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 font-black text-sm">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Band {testimonial.overallBand}</span>
            </div>
          </div>
        </div>

        {/* Sub-scores Bar */}
        <div className="flex items-center gap-2 mb-4 p-2 bg-slate-50 rounded-xl text-[11px] font-bold text-slate-600">
          <span>L: <strong className="text-blue-600">{testimonial.subScores.listening}</strong></span>
          <span>•</span>
          <span>R: <strong className="text-emerald-600">{testimonial.subScores.reading}</strong></span>
          <span>•</span>
          <span>W: <strong className="text-purple-600">{testimonial.subScores.writing}</strong></span>
          <span>•</span>
          <span>S: <strong className="text-rose-600">{testimonial.subScores.speaking}</strong></span>
        </div>

        {/* Review Quote */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
          "{testimonial.review}"
        </p>
      </div>

      {/* Footer Tag */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1 text-slate-500 font-medium">
          <MapPin className="w-3.5 h-3.5 text-rose-500" />
          <span>{testimonial.country}</span>
        </div>
        {testimonial.badge && (
          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
            {testimonial.badge}
          </span>
        )}
      </div>
    </div>
  );
}
