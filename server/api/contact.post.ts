import nodemailer from "nodemailer";

interface ContactBody {
  name: string;
  email: string;
  message: string;
  website?: string; // Honeypot field
  timestamp?: number; // Form render time
}

// --- Rate Limiting (in-memory, per IP) ---
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const RATE_LIMIT_MAX_REQUESTS = 3; // max 3 requests per window per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

// --- Spam Protection Constants ---
const MIN_FORM_FILL_TIME_MS = 15000; // 15 seconds - bots fill too fast
const MAX_FORM_FILL_TIME_MS = 60 * 60 * 1000; // 1 hour - stale forms are suspicious

export default defineEventHandler(async (event) => {
  // --- Rate Limiting ---
  const clientIp = getRequestIP(event, { xForwardedFor: true }) || "unknown";

  if (isRateLimited(clientIp)) {
    throw createError({
      statusCode: 429,
      statusMessage: "Too many requests. Please try again later.",
    });
  }

  const body = await readBody<ContactBody>(event);

  // --- Honeypot Check ---
  // If the hidden "website" field is filled, it's a bot
  if (body.website && body.website.trim() !== "") {
    // Pretend success so the bot doesn't know it was caught
    return { success: true, message: "Message sent successfully" };
  }

  // --- Timestamp / Bot Speed Check ---
  if (body.timestamp) {
    const elapsed = Date.now() - body.timestamp;
    // Too fast = bot, too slow = stale/stale form
    if (elapsed < MIN_FORM_FILL_TIME_MS || elapsed > MAX_FORM_FILL_TIME_MS) {
      throw createError({
        statusCode: 400,
        statusMessage: "Submission rejected. Please try again.",
      });
    }
  }

  // Basic validation
  if (!body?.name || !body?.email || !body?.message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields",
    });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid email address",
    });
  }

  // Message length validation
  if (body.message.length > 500) {
    throw createError({
      statusCode: 400,
      statusMessage: "Message too long",
    });
  }

  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort) || 587,
    secure: false,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  const mailFromAddress = config.mailFromAddress || "noreply@yusufonaran.com";
  const mailFromName = config.mailFromName || "Portfolio Website";

  try {
    await transporter.sendMail({
      from: `"${mailFromName}" <${mailFromAddress}>`,
      to: config.mailTo,
      replyTo: body.email,
      subject: `New contact form message from ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#ecf39f 0%,#da6a6a 100%);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:0.5px;">
                New Contact Form Submission
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">
                You have received a new message from your portfolio website
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Name</p>
                    <p style="margin:0;color:#1f2937;font-size:16px;font-weight:500;">${body.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:20px;border-top:1px solid #f3f4f6;padding-top:20px;">
                    <p style="margin:0 0 4px;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Email</p>
                    <p style="margin:0;">
                      <a href="mailto:${body.email}" style="color:#da6a6a;font-size:16px;font-weight:500;text-decoration:none;">${body.email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:8px;border-top:1px solid #f3f4f6;padding-top:20px;">
                    <p style="margin:0 0 8px;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Message</p>
                    <div style="background-color:#f9fafb;border-radius:12px;padding:20px;border:1px solid #f3f4f6;">
                      <p style="margin:0;color:#374151;font-size:15px;line-height:1.7;white-space:pre-line;">${body.message}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb;padding:24px 40px;border-top:1px solid #f3f4f6;text-align:center;">
              <p style="margin:0;color:#9ca3af;font-size:13px;">
                This message was sent from the contact form on
                <a href="https://portfolio-template.yusufonaran.com" style="color:#da6a6a;text-decoration:none;font-weight:500;">portfolio-template.yusufonaran.com</a>
              </p>
              <p style="margin:8px 0 0;color:#d1d5db;font-size:12px;">
                Sent at ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return { success: true, message: "Message sent successfully" };
  } catch (error) {
    console.error("Email send error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send message",
    });
  }
});
