import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.NEXT_PUBLIC_EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_ADMIN_EMAIL_FULL,
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      subject: "Sending email through SMTP",
      html: `
      <div style="font-family: sans-serif;">
        <h1>Contact Form Inquiry</h1>
        <p>You have received the following inquiry:</p>
        <br>
        <p>User Name: ${name}</p>
        <p>User Email: ${email}</p>
        <p>User phone: ${phone}</p>
        <br>
        <p>User Message:</p>
        <p>${message}</p>
        <br>
      </div>`,
    };
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Your free trial request has been sent!" });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      {
        success: false,
        message: "Internal server error, please try again",
      },
      { status: 500 }
    );
  }
}
