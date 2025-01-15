"use server";

interface EmailPayload {
  From: string;
  To: string;
  Subject: string;
  HtmlBody: string;
  MessageStream: string;
}

export async function sendEmail(formData: { email: string; message: string }) {
  const apiToken = process.env.POSTMARK_API_TOKEN;
  if (!apiToken) {
    console.error("POSTMARK_API_TOKEN is not configured");
    return { success: false, error: "Email service is not configured" };
  }

  try {
    const emailPayload: EmailPayload = {
      From: "bake@codebake.io",
      To: "bake@codebake.io",
      Subject: "New Contact Form Submission",
      HtmlBody: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
      MessageStream: "outbound",
    };

    const response = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": apiToken,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
