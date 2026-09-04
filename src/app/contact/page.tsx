"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  ChevronRight, MapPin, Phone, Clock, Monitor, 
  Send, MessageCircle, Navigation, Car, Bus, Mail, UserCheck
} from "lucide-react";

export default function ContactPage() {
  const { openModal } = useModal();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    target: "Band 7.0",
    mode: "Online (Zoom Live)",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("অনুগ্রহ করে আপনার নাম ও ফোন নম্বর দিন।");
      return;
    }
    const text = `Hi IELTS ESSENCE!%0A%0A👤 Name: ${formData.name}%0A📞 Phone: ${formData.phone}%0A🎯 Target: ${formData.target}%0A💻 Mode: ${formData.mode}%0A💬 Query: ${formData.message || "N/A"}%0A%0APlease contact me regarding admission & counselling!`;
    window.open(`https://wa.me/8801738474611?text=${text}`, "_blank");
  };

  return (
    <div className="space-y-0">
      {/* ==========================================================================
          INNER HERO SECTION
          ========================================================================== */}
      <section className="inner-hero-section">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <div className="inner-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-rose-400">Contact Us</span>
          </div>

          <h1 className="inner-hero-title font-heading">
            Get In Touch With Our Mentors <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-300 to-sky-300">
              Visit Campus or Connect Online
            </span>
          </h1>

          <p className="inner-hero-subtitle">
            আমাদের বাড্ডা হেড অফিসে সরাসরি এসে ফ্রি ডায়াগনস্টিক টেস্ট দিন অথবা হোয়াটসঅ্যাপে অনলাইনে কথা বলুন।
          </p>
        </div>
      </section>

      {/* ==========================================================================
          CONTACT CARDS & DIRECT FORM
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Details & Quick Connect */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6 hover-elevate">
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Campus Information</h3>

                {/* Item 1: Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Head Office & Main Campus</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                      41 Lane, Badda, Dhaka 6000, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Item 2: Phone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Call & WhatsApp Helpline</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      <strong className="text-slate-900 text-sm font-heading">+880 1738-474611</strong> (24/7 Response)
                    </p>
                  </div>
                </div>

                {/* Item 3: Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Official Email</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      <a href="mailto:ieltsessencehr@gmail.com" className="text-rose-600 font-bold hover:underline">ieltsessencehr@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Item 4: Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg flex-shrink-0">
                    ⏰
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Campus Visiting Hours</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      শনিবার — বৃহস্পতিবার: সকাল ১০:০০ টা — রাত ৮:০০ টা<br />
                      (শুক্রবার নামাজের পর বিকাল ৩:০০ টা — রাত ৮:০০ টা)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Card */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-6 shadow-md space-y-3 hover-elevate">
                <div className="flex items-center gap-3">
                  <span className="text-3xl animate-bounce">📱</span>
                  <div>
                    <h4 className="font-bold text-base font-heading">Instant WhatsApp Chat</h4>
                    <div className="text-xs text-emerald-100">Reply within 5 minutes</div>
                  </div>
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  সরাসরি সিনিয়র মেন্টরের সাথে চ্যাট করে আপনার লেভেল যাচাই করুন।
                </p>
                <a 
                  href="https://wa.me/8801738474611" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 bg-white text-emerald-800 font-extrabold text-xs rounded-xl hover:bg-emerald-50 transition-all font-heading"
                >
                  Chat on WhatsApp Now →
                </a>
              </div>

              {/* Official Social Channels (Facebook & YouTube) */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Media Channels</div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61565824504813"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-blue-50/70 border border-blue-200/80 hover:bg-blue-100/70 transition-all group flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-bold text-xs text-blue-900 group-hover:text-blue-700 truncate">Facebook Page</div>
                      <div className="text-[10px] text-blue-600 truncate">Follow Updates ↗</div>
                    </div>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@IELTSEssence/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-red-50/70 border border-red-200/80 hover:bg-red-100/70 transition-all group flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-bold text-xs text-red-900 group-hover:text-red-700 truncate">YouTube Channel</div>
                      <div className="text-[10px] text-red-600 truncate">@IELTSEssence ↗</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 hover-elevate">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading">Book Free 1-on-1 Mentorship</h3>
                  <p className="text-xs text-slate-500 mt-1">ফরমটি পূরণ করলে আমাদের কাউন্সিলর আপনাকে কল করবেন।</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase mb-1.5 font-heading">Your Full Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe" 
                        className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-600" 
                        required 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase mb-1.5 font-heading">Phone Number (WhatsApp)</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="01738474611" 
                        className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-600" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase mb-1.5 font-heading">Target Band Score</label>
                      <select 
                        value={formData.target}
                        onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                        className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-600"
                      >
                        <option value="Band 7.0">Band 7.0</option>
                        <option value="Band 7.5">Band 7.5</option>
                        <option value="Band 8.0+">Band 8.0+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase mb-1.5 font-heading">Preferred Mode</label>
                      <select 
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-600"
                      >
                        <option value="Online (Zoom Live)">Online (Zoom Live)</option>
                        <option value="Offline (Badda Campus)">Offline (Badda Campus)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase mb-1.5 font-heading">Your Queries / Message</label>
                    <textarea 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current English background or target timeline..." 
                      className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-600"
                    />
                  </div>

                  <button type="submit" className="btn-cta-amber w-full py-4 text-base font-extrabold justify-center cursor-pointer">
                    Submit Consultation Request →
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* INTERACTIVE CAMPUS MAP & DIRECTIONS CARD */}
          <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl hover-elevate">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
              <div>
                <div className="feature-pill-badge bg-rose-100 text-rose-700 mb-1">🗺️ Campus Directions & Location</div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">Visit Our Main Campus In Person</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  📍 41 Lane, Badda, Dhaka 6000, Bangladesh
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=41+Lane+Badda+Dhaka+6000+Bangladesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-cta-blue text-xs sm:text-sm py-2.5 px-6 font-bold shadow-md cursor-pointer"
              >
                Open in Google Maps App ↗
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Google Map Embedded Frame */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-inner min-h-[380px] sm:min-h-[420px] bg-slate-100">
                <iframe 
                  src="https://maps.google.com/maps?q=41+Lane,+Badda,+Dhaka+6000,+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  className="w-full h-full min-h-[380px] sm:min-h-[420px] border-0"
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IELTS Essence Location Map"
                />
              </div>

              {/* Address & Direction Guides */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4 text-xs text-slate-600">
                <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🏢</span>
                    <strong className="text-slate-900 font-extrabold text-sm sm:text-base font-heading">
                      IELTS ESSENCE Head Office
                    </strong>
                  </div>
                  <p className="text-slate-700 font-semibold text-xs sm:text-sm leading-relaxed">
                    41 Lane, Badda, Dhaka 6000, Bangladesh
                  </p>
                  <div className="pt-1 flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-rose-200 text-rose-700 font-bold">
                      📞 +880 1738-474611
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-rose-200 text-rose-700 font-bold">
                      ✉️ ieltsessencehr@gmail.com
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <strong className="text-slate-900 font-bold flex items-center gap-1.5 text-xs sm:text-sm font-heading">
                    <span>🚌</span> How to reach by Bus / Metro / Rickshaw:
                  </strong>
                  <p className="leading-relaxed text-slate-600 text-[11px] sm:text-xs">
                    প্রগতি সরণি হয়ে বাড্ডা লিংক রোড বা হোসেন মার্কেট স্টপেজে নেমে ৪১ নং লেনে চলে আসলেই আমাদের ক্যাম্পাস দেখতে পাবেন।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <strong className="text-slate-900 font-bold flex items-center gap-1.5 text-xs sm:text-sm font-heading">
                    <span>🚗</span> Parking & Lift Accessibility:
                  </strong>
                  <p className="leading-relaxed text-slate-600 text-[11px] sm:text-xs">
                    ক্যাম্পাসের সামনে নিরাপদ পার্কিং সুবিধা ও সরাসরি লিফট অ্যাক্সেস রয়েছে।
                  </p>
                </div>

                <a
                  href="https://wa.me/8801738474611?text=Hi%20IELTS%20ESSENCE%2C%20I%20am%20coming%20to%20visit%20your%20Badda%20Campus!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>💬 WhatsApp for Live Location Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: CAMPUS VISIT TIMINGS & WALK-IN DIAGNOSTIC SLOTS
          ========================================================================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-extrabold uppercase tracking-wider border border-rose-500/30">
              <span>🕒 Operating Hours</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Campus Visiting & Walk-In Diagnostic Hours
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              আমাদের ক্যাম্পাসে সরাসরি এসে ফ্রি ডায়াগনস্টিক টেস্ট দিতে নিচের সময়সূচী অনুসরণ করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="text-2xl">📅</div>
              <h3 className="text-lg font-bold text-white font-heading">Saturday – Thursday</h3>
              <div className="text-2xl font-black text-amber-400 font-heading">10:00 AM – 8:00 PM</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                সারাদিন অ্যাডমিশন ও ওয়ান-অন-ওয়ান কাউন্সিলিং সেশন উন্মুক্ত থাকে।
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="text-2xl">🕌</div>
              <h3 className="text-lg font-bold text-white font-heading">Friday Special Mock Day</h3>
              <div className="text-2xl font-black text-rose-400 font-heading">3:00 PM – 8:00 PM</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                জুমার নামাজের পর থেকে পূর্ণাঙ্গ মক টেস্ট ও নতুন ব্যাচ সিট বুকিং ওপেন থাকে।
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="text-2xl">🌐</div>
              <h3 className="text-lg font-bold text-white font-heading">Online WhatsApp Desk</h3>
              <div className="text-2xl font-black text-emerald-400 font-heading">24/7 Response</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                যেকোনো সময় হোয়াটসঅ্যাপে মেসেজ দিয়ে টেস্টের স্লট কনফার্ম করতে পারেন।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: DIRECT DEPARTMENT HELPLINES
          ========================================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="feature-pill-badge bg-blue-100 text-blue-700">📞 Quick Directory</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Direct Contact By Department
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              আপনার নির্দিষ্ট প্রয়োজনে সংশ্লিষ্ট টিমের সাথে সরাসরি যোগাযোগ করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg">🎓</div>
              <h4 className="font-bold text-slate-900 text-sm font-heading">Admission & Batch Info</h4>
              <p className="text-xs text-slate-500">নতুন ব্যাচের সময়সূচী ও সিট বুকিং</p>
              <div className="text-xs font-bold text-rose-600 pt-1 font-heading">+880 1738-474611</div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">✈️</div>
              <h4 className="font-bold text-slate-900 text-sm font-heading">Study Abroad & Visa</h4>
              <p className="text-xs text-slate-500">ইউনিভার্সিটি শর্টলিস্ট ও এসওপি রিভিউ</p>
              <div className="text-xs font-bold text-blue-600 pt-1 font-heading">+880 1738-474611</div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg">✍️</div>
              <h4 className="font-bold text-slate-900 text-sm font-heading">Writing & Support Desk</h4>
              <p className="text-xs text-slate-500">রচনা জমা ও লাল কালি কারেকশন ফিডব্যাক</p>
              <div className="text-xs font-bold text-purple-600 pt-1 font-heading">ieltsessencehr@gmail.com</div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">👨‍🏫</div>
              <h4 className="font-bold text-slate-900 text-sm font-heading">Mentor Direct Contact</h4>
              <p className="text-xs text-slate-500">জুয়েল স্যারের সাথে সরাসরি যোগাযোগ</p>
              <div className="text-xs font-bold text-emerald-600 pt-1 font-heading">ieltsessencehr@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
