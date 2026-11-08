import { NextResponse } from "next/server";

type Payload = {
  name?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function asString(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (asString(body.website, 100) !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name, 120);
  const email = asString(body.email, 200);
  const service = asString(body.service, 120);
  const message = asString(body.message, 4000);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please write at least a short message (10+ characters).";
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "validation", fields: errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    // Honest failure: nothing was sent.
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const from = process.env.CONTACT_FROM_EMAIL || "Lamisa Portfolio <onboarding@resend.dev>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New inquiry from ${name}${service ? ` (${service})` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Interested in: ${service || "Not specified"}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
}
