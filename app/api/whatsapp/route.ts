import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const message = `🚀 NEW REMUAI WEBSITE INQUIRY

Name: ${body.full_name}
Company: ${body.company || "N/A"}
Email: ${body.email}
Phone: ${body.phone}
Service: ${body.service}
Budget: ${body.budget || "N/A"}

Message:
${body.description}`;

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
            preview_url: false,
            body: message,
          },
        }),
      }
    );

    const data = await response.json();

    console.log("WhatsApp API response:", data);

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: data },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("WhatsApp route error:", error);

    return NextResponse.json(
      { success: false, error: "Failed to send WhatsApp notification" },
      { status: 500 }
    );
  }
}