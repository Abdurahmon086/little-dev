import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    const text = `\u2709\uFE0F Yangi so'rov!\n\n👤 Ism: ${name}\n📧 Email: ${email}\n📱 Telefon: ${phone}\n\n✉️ Xabar: ${message}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });

    const telegramResult = await response.json();

    if (!response.ok || !telegramResult.ok) {
      throw new Error("Telegram API error: " + JSON.stringify(telegramResult));
    }

    return NextResponse.json({ success: true, message: "So'rovingiz Telegram orqali yuborildi!" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Ichki server xatosi, iltimos qayta urinib ko'ring",
      },
      { status: 500 }
    );
  }
}
