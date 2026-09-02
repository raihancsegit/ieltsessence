"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, ArrowUp } from "lucide-react";

const ADMISSIONS_DATA = [
  { name: "তানভীর আহমেদ", city: "চট্টগ্রাম", course: "Basic To Advanced (Band 8.0 Target)", time: "২ মিনিট আগে" },
  { name: "সাদিয়া ইসলাম", city: "ধানমন্ডি, ঢাকা", course: "Writing 7.5+ Masterclass", time: "৫ মিনিট আগে" },
  { name: "রাকিবুল হাসান", city: "সিলেট", course: "40-Day IELTS Crash Course", time: "১২ মিনিট আগে" },
  { name: "মেহেদী হাসান", city: "উত্তরা, ঢাকা", course: "Speaking Confidence Lab", time: "১৮ মিনিট আগে" },
  { name: "নুসরাত জাহান", city: "রাজশাহী", course: "1-on-1 VIP Mentorship", time: "২৫ মিনিট আগে" }
];

export default function EffectsManager() {
  const pathname = usePathname();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [toastNotification, setToastNotification] = useState<{ name: string; city: string; course: string; time: string } | null>(null);
  const [showToast, setShowToast] = useState(false);

  // 1. Scroll Reveal Observer & Counter Animations on every route change
  useEffect(() => {
    // Reveal on scroll
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    let revealObserver: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -20px 0px",
        }
      );

      revealElements.forEach((el) => revealObserver?.observe(el));
    } else {
      revealElements.forEach((el) => el.classList.add("revealed"));
    }

    // Number Counter Animation
    const counterElements = document.querySelectorAll("[data-counter-target]");
    let counterObserver: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window && counterElements.length > 0) {
      counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const target = parseFloat(el.getAttribute("data-counter-target") || "0");
              const isFloat = el.getAttribute("data-counter-float") === "true";
              const suffix = el.getAttribute("data-counter-suffix") || "";
              const duration = 1800;
              const startTime = performance.now();

              const updateNumber = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 4);
                const currentVal = target * easeProgress;

                el.innerText =
                  (isFloat ? currentVal.toFixed(1) : Math.floor(currentVal).toLocaleString()) + suffix;

                if (progress < 1) {
                  requestAnimationFrame(updateNumber);
                } else {
                  el.innerText =
                    (isFloat ? target.toFixed(1) : target.toLocaleString()) + suffix;
                }
              };

              requestAnimationFrame(updateNumber);
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.1 }
      );

      counterElements.forEach((el) => counterObserver?.observe(el));
    }

    return () => {
      revealObserver?.disconnect();
      counterObserver?.disconnect();
    };
  }, [pathname]);

  // 2. Back to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Social Proof Toast Notification Cycle (Matching HTML exactly)
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setToastNotification(ADMISSIONS_DATA[index]);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 5000);

      index = (index + 1) % ADMISSIONS_DATA.length;
    }, 14000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="floating-widgets-container">
        <button
          onClick={scrollToTop}
          className={`back-to-top-btn ${showBackToTop ? "visible" : ""}`}
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-slate-800" />
        </button>

        <a
          href="https://wa.me/8801738474611?text=Hi%20IELTS%20ESSENCE!%20I%20want%20to%20know%20more%20about%20your%20courses"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn group"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <div className="beacon-ring"></div>
          <MessageCircle className="w-6 h-6 text-white" />
          <div className="floating-whatsapp-tooltip">💬 Chat on WhatsApp (01738-474611)</div>
        </a>
      </div>

      {/* Social Proof Live Admission Toast */}
      <div className="admission-toast-container">
        {toastNotification && (
          <div className={`admission-toast-card ${showToast ? "show" : ""}`}>
            <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-base flex-shrink-0">
              🎓
            </div>
            <div className="text-xs">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5 font-heading">
                <span>{toastNotification.name} ({toastNotification.city})</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="text-rose-600 font-semibold text-[11px] mt-0.5">{toastNotification.course}</div>
              <div className="text-[10px] text-slate-400 font-medium">ভর্তি নিশ্চিত হয়েছে • {toastNotification.time}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
