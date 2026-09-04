import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      targetScore = "Band 7.5+",
      mode = "Online Zoom Live",
      academicStatus = "Undergraduate",
      examDateApprox = "Within 2-3 Months",
      paymentGateway = "bKash",
      transactionId = "",
      subject = "Admission & VIP Counselling",
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const leadData = {
      id: "LEAD-" + Date.now(),
      timestamp: new Date().toISOString(),
      formattedTime: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
      name,
      phone,
      cleanPhone: phone.replace(/[^0-9+]/g, ""),
      targetScore,
      mode,
      academicStatus,
      examDateApprox,
      paymentGateway,
      transactionId: transactionId || "Not Paid Yet (Free Booking)",
      subject,
    };

    // 1. Always store to local persistent storage (data/leads.json)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFile = path.join(dataDir, "leads.json");
      let currentLeads = [];
      if (fs.existsSync(leadsFile)) {
        try {
          const content = fs.readFileSync(leadsFile, "utf-8");
          currentLeads = JSON.parse(content);
        } catch {
          currentLeads = [];
        }
      }
      currentLeads.unshift(leadData);
      fs.writeFileSync(leadsFile, JSON.stringify(currentLeads, null, 2), "utf-8");
      console.log(`[LEAD SAVED] ${leadData.name} - ${leadData.phone}`);
    } catch (saveErr) {
      console.error("[LEAD STORAGE ERROR]", saveErr);
    }

    let sheetUpdated = false;
    let emailSent = false;

    // 2. Google Spreadsheet Webhook (Zero-setup Live Spreadsheet Sync)
    // If user provided a Google Sheets Webhook URL, forward instantly!
    const googleSheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (googleSheetUrl) {
      try {
        await fetch(googleSheetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: leadData.formattedTime,
            name: leadData.name,
            phone: leadData.phone,
            targetScore: leadData.targetScore,
            mode: leadData.mode,
            academicStatus: leadData.academicStatus,
            examDateApprox: leadData.examDateApprox,
            paymentGateway: leadData.paymentGateway,
            transactionId: leadData.transactionId,
            subject: leadData.subject,
          }),
        });
        sheetUpdated = true;
        console.log("[GOOGLE SHEET UPDATED] Lead synced to Google Spreadsheet");
      } catch (sheetErr) {
        console.error("[GOOGLE SHEET ERROR]", sheetErr);
      }
    }

    // 3. Web3Forms (No-SMTP Instant Email Delivery)
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey) {
      try {
        const w3fRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `🎯 New IELTS Lead: ${name} (${phone})`,
            from_name: "IELTS ESSENCE Leads",
            name: leadData.name,
            phone: leadData.phone,
            targetScore: leadData.targetScore,
            classMode: leadData.mode,
            academicStatus: leadData.academicStatus,
            examTimeline: leadData.examDateApprox,
            paymentMethod: leadData.paymentGateway,
            transactionId: leadData.transactionId,
            submittedAt: leadData.formattedTime,
          }),
        });
        if (w3fRes.ok) {
          emailSent = true;
          console.log("[WEB3FORMS EMAIL SENT] Dispatched without SMTP");
        }
      } catch (w3fErr) {
        console.error("[WEB3FORMS ERROR]", w3fErr);
      }
    }

    // 4. Fallback: SMTP Email (if SMTP is configured)
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || "admission@ieltsessence.com";

    if (!emailSent && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #0f172a, #881337); color: #ffffff; padding: 28px; text-align: left; }
            .badge { display: inline-block; padding: 4px 12px; background: rgba(225, 29, 72, 0.2); border: 1px solid rgba(225, 29, 72, 0.4); border-radius: 50px; font-size: 11px; font-weight: bold; color: #fecdd3; text-transform: uppercase; margin-bottom: 8px; }
            .header h2 { margin: 0; font-size: 22px; font-weight: 800; }
            .header p { margin: 6px 0 0 0; font-size: 13px; color: #cbd5e1; }
            .content { padding: 28px; }
            .field-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .field-table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13.5px; }
            .field-table td.label { font-weight: 700; color: #64748b; width: 38%; }
            .field-table td.value { font-weight: 600; color: #0f172a; }
            .highlight { color: #e11d48; font-weight: 800; }
            .cta-box { background: #fff1f2; border: 1px solid #fecdd3; border-radius: 12px; padding: 16px; text-align: center; margin-top: 10px; }
            .cta-btn { display: inline-block; padding: 10px 20px; background: #25d366; color: #ffffff; font-weight: 700; text-decoration: none; border-radius: 50px; font-size: 13px; margin: 4px; }
            .tel-btn { display: inline-block; padding: 10px 20px; background: #e11d48; color: #ffffff; font-weight: 700; text-decoration: none; border-radius: 50px; font-size: 13px; margin: 4px; }
            .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <span class="badge">🔥 New IELTS Lead Alert</span>
              <h2>${name}</h2>
              <p>Requested: ${subject} • ${leadData.formattedTime} (BST)</p>
            </div>
            <div class="content">
              <table class="field-table">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value">${name}</td>
                </tr>
                <tr>
                  <td class="label">Mobile / WhatsApp</td>
                  <td class="value highlight">${phone}</td>
                </tr>
                <tr>
                  <td class="label">Target Score</td>
                  <td class="value">${targetScore}</td>
                </tr>
                <tr>
                  <td class="label">Class Format</td>
                  <td class="value">${mode}</td>
                </tr>
                <tr>
                  <td class="label">Academic Status</td>
                  <td class="value">${academicStatus}</td>
                </tr>
                <tr>
                  <td class="label">Approx. Exam Date</td>
                  <td class="value">${examDateApprox}</td>
                </tr>
                <tr>
                  <td class="label">Payment Gateway</td>
                  <td class="value">${paymentGateway}</td>
                </tr>
                <tr>
                  <td class="label">Transaction ID</td>
                  <td class="value">${transactionId || "Pending / Not Paid"}</td>
                </tr>
              </table>

              <div class="cta-box">
                <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: 700; color: #9f1239;">
                  Quick Action: Call or WhatsApp this student now
                </p>
                <a href="https://wa.me/88${leadData.cleanPhone.replace(/^0/, '')}" class="cta-btn" target="_blank">
                  💬 WhatsApp Message
                </a>
                <a href="tel:${leadData.cleanPhone}" class="tel-btn">
                  📞 Direct Phone Call
                </a>
              </div>
            </div>
            <div class="footer">
              IELTS ESSENCE Notification System • Automated Lead Forwarder
            </div>
          </div>
        </body>
        </html>
        `;

        await transporter.sendMail({
          from: `"IELTS ESSENCE Admissions" <${smtpUser}>`,
          to: notificationEmail,
          replyTo: smtpUser,
          subject: `🎯 New Admission Lead: ${name} (${phone}) - Target: ${targetScore}`,
          html: htmlContent,
        });

        emailSent = true;
        console.log(`[EMAIL DISPATCHED] Sent lead notification to ${notificationEmail}`);
      } catch (emailErr) {
        console.error("[EMAIL DISPATCH ERROR]", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead successfully recorded",
      emailSent,
      sheetUpdated,
      leadId: leadData.id,
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

// GET: View Leads or Download as Excel/CSV Spreadsheet
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const format = searchParams.get("format");

    const dataDir = path.join(process.cwd(), "data");
    const leadsFile = path.join(dataDir, "leads.json");
    let leads: any[] = [];
    if (fs.existsSync(leadsFile)) {
      try {
        const content = fs.readFileSync(leadsFile, "utf-8");
        leads = JSON.parse(content);
      } catch {
        leads = [];
      }
    }

    // If requested format is CSV (opens directly in Microsoft Excel / Google Sheets)
    if (format === "csv") {
      const headers = [
        "Time (BST)",
        "Student Name",
        "Phone Number",
        "Target Score",
        "Class Format",
        "Academic Status",
        "Exam Date Approx",
        "Payment Gateway",
        "Transaction ID",
        "Subject",
      ];

      const rows = leads.map((lead) => [
        `"${lead.formattedTime || ""}"`,
        `"${(lead.name || "").replace(/"/g, '""')}"`,
        `"${lead.phone || ""}"`,
        `"${lead.targetScore || ""}"`,
        `"${lead.mode || ""}"`,
        `"${lead.academicStatus || ""}"`,
        `"${lead.examDateApprox || ""}"`,
        `"${lead.paymentGateway || ""}"`,
        `"${lead.transactionId || ""}"`,
        `"${lead.subject || ""}"`,
      ]);

      // UTF-8 BOM so Bangla and accents display properly in Excel
      const bom = "\uFEFF";
      const csvContent = bom + [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");

      return new NextResponse(csvContent, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="ielts_essence_leads_${Date.now()}.csv"`,
        },
      });
    }

    return NextResponse.json({
      total: leads.length,
      leads,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
