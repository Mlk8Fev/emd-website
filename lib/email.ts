import nodemailer from "nodemailer";

interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function sendContactNotification(payload: ContactEmailPayload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

  if (!SMTP_PASS) {
    console.log("[EMD][contact] SMTP non configuré — message journalisé uniquement:", payload);
    return { simulated: true };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: SMTP_FROM || SMTP_USER,
    to: SMTP_USER,
    replyTo: payload.email,
    subject: `[Site EMD] Nouveau message — ${payload.subject}`,
    text: `Nom: ${payload.name}\nEmail: ${payload.email}\nTéléphone: ${payload.phone || "N/A"}\nSujet: ${payload.subject}\n\n${payload.message}`,
    html: `
      <div style="font-family: Arial, sans-serif; color:#374151;">
        <h2 style="color:#1A6B3A;">Nouveau message — Site EMD</h2>
        <p><strong>Nom:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Téléphone:</strong> ${payload.phone || "N/A"}</p>
        <p><strong>Sujet:</strong> ${payload.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message.replace(/\n/g, "<br/>")}</p>
      </div>
    `,
  });

  return { simulated: false };
}
