import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.NEXT_PUBLIC_EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });
    // Create an email message
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      subject: "Sending email through SMTP",
      text: `
            User Name: ${name}
            User email: ${email}
            User phone: ${phone}
            User message: ${message}`,
    };
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
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
