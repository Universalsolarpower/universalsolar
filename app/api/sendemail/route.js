import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// ✅ Define CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // or "http://localhost:3000"
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// ✅ Handle CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      propertyType,
      budget,
      message,
      newsletter,
    } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "universalsolarp@gmail.com",
        pass: "gynq zmss mitv mcjd", // ⚠️ Move this to .env for security
      },
    });

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: "universalsolarp@gmail.com",
      subject: `New Inquiry: ${service || "General Inquiry"}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Newsletter:</strong> ${newsletter ? "Yes" : "No"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (err) {
    console.error("Error sending email:", err);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}
