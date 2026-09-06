"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, ArrowUp } from "lucide-react";

const ADMISSIONS_DATA = [
  { name: "মো. আরিফ হাসান", city: "ঢাকা", course: "Basic to Advanced IELTS (৩.৫ মাস)", time: "১ মিনিট আগে" },
  { name: "নুসরাত জাহান", city: "চট্টগ্রাম", course: "IELTS Full Course (4 Modules)", time: "৩ মিনিট আগে" },
  { name: "তানভীর আহমেদ", city: "রাজশাহী", course: "IELTS Crash Course (৪০ দিন)", time: "৫ মিনিট আগে" },
  { name: "সাদিয়া রহমান", city: "খুলনা", course: "Writing Expertizer Masterclass", time: "৮ মিনিট আগে" },
  { name: "মাহমুদুল হাসান", city: "সিলেট", course: "Speaking Intensive Course", time: "১০ মিনিট আগে" },
  { name: "ফাহিম হোসেন", city: "কুমিল্লা", course: "IELTS Full Course (4 Modules)", time: "১২ মিনিট আগে" },
  { name: "জান্নাতুল ফেরদৌস", city: "রংপুর", course: "Basic to Advanced IELTS (৩.৫ মাস)", time: "১৫ মিনিট আগে" },
  { name: "সাইফুর রহমান", city: "ময়মনসিংহ", course: "IELTS Crash Course (৪০ দিন)", time: "১৮ মিনিট আগে" },
  { name: "তাসনিম আক্তার", city: "বরিশাল", course: "Speaking Intensive Course", time: "২২ মিনিট আগে" },
  { name: "রাফিউল ইসলাম", city: "গাজীপুর", course: "Writing Expertizer Masterclass", time: "২৫ মিনিট আগে" },
  { name: "সুমাইয়া সুলতানা", city: "বগুড়া", course: "IELTS Full Course (4 Modules)", time: "২৮ মিনিট আগে" },
  { name: "আদনান কবির", city: "নারায়ণগঞ্জ", course: "Basic to Advanced IELTS (৩.৫ মাস)", time: "৩২ মিনিট আগে" },
  { name: "মেহেদী হাসান", city: "কক্সবাজার", course: "IELTS Crash Course (৪০ দিন)", time: "৩৫ মিনিট আগে" },
  { name: "আফরিন নওয়ার", city: "যশোর", course: "Writing Expertizer Masterclass", time: "৩৮ মিনিট আগে" },
  { name: "শাকিল আহমেদ", city: "টাঙ্গাইল", course: "Speaking Intensive Course", time: "৪২ মিনিট আগে" },
  { name: "মিম আক্তার", city: "নোয়াখালী", course: "IELTS Full Course (4 Modules)", time: "৪৫ মিনিট আগে" },
  { name: "রাকিবুল হাসান", city: "দিনাজপুর", course: "Basic to Advanced IELTS (৩.৫ মাস)", time: "৪৮ মিনিট আগে" },
  { name: "ফারজানা ইয়াসমিন", city: "পাবনা", course: "IELTS Crash Course (৪০ দিন)", time: "৫২ মিনিট আগে" },
  { name: "নাঈম ইসলাম", city: "ব্রাহ্মণবাড়িয়া", course: "Speaking Intensive Course", time: "৫৫ মিনিট আগে" },
  { name: "তানজিলা আক্তার", city: "ফেনী", course: "Writing Expertizer Masterclass", time: "৫৮ মিনিট আগে" },
  { name: "সাদ রহমান", city: "কুষ্টিয়া", course: "IELTS Full Course (4 Modules)", time: "১ ঘণ্টা আগে" },
  { name: "লামিয়া ইসলাম", city: "নরসিংদী", course: "Basic to Advanced IELTS (৩.৫ মাস)", time: "১ ঘণ্টা আগে" },
  { name: "ইমরান হোসেন", city: "চাঁদপুর", course: "IELTS Crash Course (৪০ দিন)", time: "১ ঘণ্টা আগে" },
  { name: "সাফা তাসনিম", city: "রাজবাড়ী", course: "Speaking Intensive Course", time: "২ ঘণ্টা আগে" },
  { name: "আবদুল্লাহ আল মামুন", city: "সুনামগঞ্জ", course: "IELTS Full Course (4 Modules)", time: "২ ঘণ্টা আগে" },
  { name: "সোহানা রহমান", city: "ঝিনাইদহ", course: "Writing Expertizer Masterclass", time: "২ ঘণ্টা আগে" },
  { name: "শুভ দাস", city: "নড়াইল", course: "Basic to Advanced IELTS (৩.৫ মাস)", time: "৩ ঘণ্টা আগে" },
  { name: "ইসরাত জাহান", city: "লক্ষ্মীপুর", course: "IELTS Crash Course (৪০ দিন)", time: "৩ ঘণ্টা আগে" },
  { name: "জুবায়ের আহমেদ", city: "জামালপুর", course: "Speaking Intensive Course", time: "৩ ঘণ্টা আগে" }
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

  // 3. Social Proof Toast Notification Cycle (29 Students Live Rotation)
  useEffect(() => {
    let index = 0;
    
    // Initial display after 3.5 seconds
    const initialTimeout = setTimeout(() => {
      setToastNotification(ADMISSIONS_DATA[index]);
      setShowToast(true);

      const hideTimeout = setTimeout(() => {
        setShowToast(false);
      }, 4500);

      index = (index + 1) % ADMISSIONS_DATA.length;
    }, 3500);

    const interval = setInterval(() => {
      setToastNotification(ADMISSIONS_DATA[index]);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 4500);

      index = (index + 1) % ADMISSIONS_DATA.length;
    }, 11000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
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
            <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-base flex-shrink-0 shadow-xs">
              🎓
            </div>
            <div className="text-xs">
              <div className="font-black text-slate-900 flex items-center gap-1.5 font-bengali text-[13px] leading-tight">
                <span>{toastNotification.name} ({toastNotification.city})</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              </div>
              <div className="text-rose-600 font-bold text-[11px] mt-0.5 font-bengali">{toastNotification.course}</div>
              <div className="text-[10px] text-slate-500 font-medium font-bengali">ভর্তি নিশ্চিত হয়েছে • {toastNotification.time}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
