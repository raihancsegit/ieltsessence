import React from "react";

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  badgeColor = "bg-rose-50 text-rose-600 border-rose-200",
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} mb-12`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border tracking-wide uppercase ${badgeColor}`}>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
