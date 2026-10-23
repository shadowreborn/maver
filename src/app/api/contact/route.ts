import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  brand: z.string().trim().min(1).max(200),
  service: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(5000),
});

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json(
      { error: "Please fill in all fields with a valid email." },
      { status: 400 },
    );
  }
  const { name, email, brand, service, message } = parsed.data;

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    console.error("Missing SMTP_USER / SMTP_PASS environment variables");
    return Response.json({ error: "Email is not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });

  try {
    await transporter.sendMail({
      from: `"Rapho Website" <${user}>`,
      to: process.env.CONTACT_TO ?? user,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New project inquiry from ${name} (${brand})`,
      text: `Name: ${name}\nEmail: ${email}\nArtist / brand: ${brand}\nService: ${service}\n\n${message}`,
      html: `<h2>New project inquiry</h2>
<p><b>Name:</b> ${escapeHtml(name)}<br><b>Email:</b> ${escapeHtml(email)}<br><b>Artist / brand:</b> ${escapeHtml(brand)}<br><b>Service:</b> ${escapeHtml(service)}</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }
}
