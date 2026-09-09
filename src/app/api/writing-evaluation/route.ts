import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      targetBand = "7.5",
      taskType = 2,
      promptTitle = "",
      essayText = "",
      wordCount = 0,
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "আপনার নাম এবং মোবাইল নম্বর প্রদান করা আবশ্যক।" },
        { status: 400 }
      );
    }

    if (!essayText || wordCount < 20) {
      return NextResponse.json(
        { error: "অনুগ্রহ করে কমপক্ষে ২০ শব্দের একটি এসে লিখুন বা পেস্ট করুন।" },
        { status: 400 }
      );
    }

    const now = new Date();
    // 15 hours from now
    const evaluationDue = new Date(now.getTime() + 15 * 60 * 60 * 1000);

    const submissionData = {
      id: "WRITING-" + Date.now(),
      submittedAt: now.toISOString(),
      formattedSubmittedAt: now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
      evaluationDueAt: evaluationDue.toISOString(),
      formattedDueAt: evaluationDue.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
      dueHours: 15,
      status: "processing_in_queue",
      name,
      phone,
      cleanPhone: phone.replace(/[^0-9+]/g, ""),
      email: email || "Not Provided",
      targetBand,
      taskType: `Task ${taskType}`,
      promptTitle,
      wordCount,
      essaySnippet: essayText.slice(0, 300) + (essayText.length > 300 ? "..." : ""),
      fullEssay: essayText,
    };

    // Store to local persistent storage (data/writing-submissions.json)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const submissionsFile = path.join(dataDir, "writing-submissions.json");
      let currentSubmissions = [];
      if (fs.existsSync(submissionsFile)) {
        try {
          const content = fs.readFileSync(submissionsFile, "utf-8");
          currentSubmissions = JSON.parse(content);
        } catch {
          currentSubmissions = [];
        }
      }
      currentSubmissions.unshift(submissionData);
      fs.writeFileSync(submissionsFile, JSON.stringify(currentSubmissions, null, 2), "utf-8");
      console.log(`[WRITING SUBMISSION SAVED] ${submissionData.name} - 15h Due: ${submissionData.formattedDueAt}`);
    } catch (saveErr) {
      console.error("[WRITING STORAGE ERROR]", saveErr);
    }

    // Try optional background notification via FormSubmit
    try {
      fetch("https://formsubmit.co/ajax/ieltsessencehr@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `📝 [15-Hour Writing Evaluation Request] ${name} (Target: Band ${targetBand})`,
          Candidate_Name: name,
          Mobile_WhatsApp: phone,
          Email: email || "N/A",
          Task_Type: `Task ${taskType}`,
          Target_Band: targetBand,
          Word_Count: wordCount,
          Prompt: promptTitle,
          Evaluation_Deadline: submissionData.formattedDueAt,
          Essay_Preview: essayText.slice(0, 1500),
        }),
      }).catch(() => {});
    } catch {}

    return NextResponse.json({
      success: true,
      message: "আপনার এসে সফলভাবে জমা হয়েছে! আগামী ১৫ ঘণ্টার মধ্যে অটোমেটিক ইভ্যালুয়েশন রিপোর্ট তৈরি হবে।",
      submission: submissionData,
    });
  } catch (err: any) {
    console.error("Evaluation submission error:", err);
    return NextResponse.json(
      { error: "সাবমিট করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।" },
      { status: 500 }
    );
  }
}
