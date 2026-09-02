import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CounsellingModal from "@/components/modals/CounsellingModal";
import EffectsManager from "@/components/EffectsManager";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IELTS ESSENCE — Dream • Define • Dominate | Premium IELTS Preparation Platform",
  description: "বাংলাদেশের শিক্ষার্থীদের জন্য Premium IELTS Preparation Platform. Band 8.5 Scorer Mentors, Line-by-Line Writing Evaluation, Daily Speaking Practice & Real Mock Tests.",
  keywords: ["IELTS preparation Bangladesh", "IELTS course Dhaka", "IELTS Band 8.5", "IELTS writing evaluation", "Study abroad Bangladesh"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${jakarta.variable} ${outfit.variable}`}>
      <body className="antialiased bg-white text-slate-800 flex flex-col min-h-screen">
        <ModalProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CounsellingModal />
          <EffectsManager />
        </ModalProvider>
      </body>
    </html>
  );
}
