"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Download, RefreshCw, MessageSquare, Phone, Users, 
  Calendar, CheckCircle, ArrowLeft, ExternalLink, ShieldAlert
} from "lucide-react";

interface Lead {
  id: string;
  timestamp: string;
  formattedTime: string;
  name: string;
  phone: string;
  cleanPhone: string;
  targetScore: string;
  mode: string;
  academicStatus: string;
  examDateApprox: string;
  paymentGateway: string;
  transactionId: string;
  subject: string;
}

export default function LeadsDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/counselling");
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (err) {
      console.error("Failed to load leads", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Website
            </Link>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              Admissions & Counselling Leads
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Live submissions from the Admission Modal. Auto-recorded & exportable to Spreadsheet.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={fetchLeads}
              disabled={loading}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            {/* 1-Click Excel / CSV Download */}
            <a
              href="/api/counselling?format=csv"
              download
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-emerald-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Excel (CSV)</span>
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">{leads.length}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Submissions</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">
                {leads.filter(l => l.paymentGateway && l.transactionId && !l.transactionId.includes("Not Paid")).length}
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Payments Claimed</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">
                {leads.filter(l => l.examDateApprox?.includes("1 Month")).length}
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fast-Track (1 Month)</div>
            </div>
          </div>
        </div>

        {/* Table of Leads */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-extrabold text-slate-900 text-base font-heading">
              Recent Submissions ({leads.length})
            </h2>
            <span className="text-xs text-slate-400">Auto-saved to data/leads.json</span>
          </div>

          {loading ? (
            <div className="p-12 text-center text-slate-400 text-sm">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-rose-500" />
              Loading submissions...
            </div>
          ) : leads.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-sm">
              No leads received yet. Test by submitting the modal on the website.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4">Time (BST)</th>
                    <th className="py-3.5 px-4">Student Name</th>
                    <th className="py-3.5 px-4">Phone / WhatsApp</th>
                    <th className="py-3.5 px-4">Target Score</th>
                    <th className="py-3.5 px-4">Class Mode</th>
                    <th className="py-3.5 px-4">Exam Timeline</th>
                    <th className="py-3.5 px-4">Payment Info</th>
                    <th className="py-3.5 px-4 text-right">Quick Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-rose-50/40 transition-colors">
                      <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap">
                        {lead.formattedTime || new Date(lead.timestamp).toLocaleTimeString()}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                        {lead.name}
                        <div className="text-[10px] text-slate-400 font-normal">{lead.academicStatus}</div>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-rose-600 whitespace-nowrap">
                        {lead.phone}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-bold text-[10px]">
                          {lead.targetScore}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          lead.mode.includes("Online") 
                            ? "bg-blue-50 text-blue-700 border border-blue-200" 
                            : "bg-purple-50 text-purple-700 border border-purple-200"
                        }`}>
                          {lead.mode}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {lead.examDateApprox}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-semibold text-slate-900">{lead.paymentGateway}</div>
                        <div className="text-[10px] text-slate-400">{lead.transactionId}</div>
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1.5">
                          <a
                            href={`https://wa.me/88${lead.cleanPhone.replace(/^0/, "")}?text=${encodeURIComponent(
                              `Hello ${lead.name}, thank you for your interest in IELTS ESSENCE (${lead.targetScore}). When is a good time to speak?`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                            title="WhatsApp Chat"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </a>
                          <a
                            href={`tel:${lead.cleanPhone}`}
                            className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                            title="Call Phone"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Google Sheet Live Sync Guide Box */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-3xl border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 text-rose-400 font-extrabold text-xs uppercase tracking-wider mb-2">
            <span>⚡ Google Spreadsheet Live Sync Guide</span>
          </div>
          <h3 className="text-lg font-bold">গুগল স্প্রেডশীট (Google Sheets) অটোমেশন</h3>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed max-w-3xl">
            কোনো SMTP বা জটিল কনফিগারেশন ছাড়াই প্রতিটি ফর্ম সাবমিশনের সাথে সাথে আপনার গুগল ড্রাইভে থাকা Google Spreadsheet-এ অটোম্যাটিক নতুন সারি যুক্ত হবে এবং Google-এর মাধ্যমে সরাসরি আপনার ইমেইলে নোটিফিকেশন পৌঁছে যাবে।
          </p>
        </div>
      </div>
    </div>
  );
}
