import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CounsellingModal from "@/components/modals/CounsellingModal";
import EffectsManager from "@/components/EffectsManager";

export const metadata: Metadata = {
  metadataBase: new URL("https://ieltsessence.com"),
  title: {
    default: "IELTS ESSENCE — Dream • Define • Dominate | Premium IELTS Preparation Platform",
    template: "%s | IELTS ESSENCE",
  },
  description: "বাংলাদেশের শিক্ষার্থীদের জন্য Premium IELTS Preparation Platform. Band 8.5 Scorer Mentors, Line-by-Line Writing Evaluation, Daily Speaking Practice & Real Mock Tests.",
  keywords: [
    "IELTS ESSENCE",
    "IELTS Essence Bangladesh",
    "IELTS preparation Bangladesh",
    "IELTS course Dhaka",
    "IELTS Band 8.5",
    "IELTS writing evaluation",
    "Study abroad Bangladesh"
  ],
  authors: [{ name: "IELTS Essence", url: "https://ieltsessence.com" }],
  creator: "IELTS Essence",
  publisher: "IELTS Essence",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://ieltsessence.com",
    siteName: "IELTS ESSENCE",
    title: "IELTS ESSENCE — Dream • Define • Dominate | Premium IELTS Preparation Platform",
    description: "বাংলাদেশের শিক্ষার্থীদের জন্য Premium IELTS Preparation Platform. Band 8.5 Scorer Mentors, Line-by-Line Writing Evaluation, Daily Speaking Practice & Real Mock Tests.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IELTS ESSENCE — Premium IELTS Preparation Platform",
    description: "Dream • Define • Dominate. Band 8.5 Scorer Mentors & Writing Evaluation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
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
