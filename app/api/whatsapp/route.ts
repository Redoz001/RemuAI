import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const message = `
New RemuAI Project Inquiry

Name: ${body.full_name}
Company: ${body.company || "N/A"}
Email: ${body.email}
Phone: ${body.phone}
Service: ${body.service}
Budget: ${body.budget || "N/A"}

Message:
${body.description}
`;

    const response = await fetch(
      `https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: process.env.OWNER_WHATSAPP_NUMBER,
          type: "text",
          text: {
            body: message,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send WhatsApp notification" },
      { status: 500 }
    );
  }
}