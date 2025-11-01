import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Allow CORS for frontend (replace * with your domain if needed)
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // or 'http://localhost:3000'
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  // Handle CORS preflight
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request) {
  try {
    const { message } = await request.json();
    console.log("Received message:", message);

    if (!message || message.trim() === "") {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "universalsolarp@gmail.com",
        pass: "gynq zmss mitv mcjd", // ⚠️ ideally move this to .env
      },
    });

    await transporter.sendMail({
      from: '"Website Contact" <universalsolarp@gmail.com>',
      to: "universalsolarp@gmail.com",
      subject: `New Contact Message`,
      html: `<p>${message}</p>`,
    });

    console.log("Email sent successfully");
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}
