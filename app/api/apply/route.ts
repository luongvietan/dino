import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ApplicationEmail } from "@/components/emails/ApplicationEmail";
import { render } from "@react-email/render";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_for_build");

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { turnstileToken, ...formData } = data;

    // 1. Verify Turnstile token
    if (process.env.NODE_ENV === "production") {
      if (!turnstileToken) {
        return NextResponse.json({ error: "Captcha token is missing." }, { status: 400 });
      }

      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
      });

      const verifyData = await verifyRes.json();
      
      if (!verifyData.success) {
        return NextResponse.json({ error: "Captcha verification failed." }, { status: 400 });
      }
    }

    // 2. Prepare email content
    const emailHtml = await render(ApplicationEmail(formData));

    // 3. Send Email
    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || "applications@dinonetwork.live",
      to: process.env.TO_EMAIL || "hello@dinonetwork.live",
      subject: `New Creator Application: ${formData.firstName} ${formData.lastName}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
