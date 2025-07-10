import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, service, propertyType, budget, message, newsletter } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'universalsolarp@gmail.com',
        pass: 'gynq zmss mitv mcjd',
      },
    });

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: 'universalsolarp@gmail.com',
      subject: `New Inquiry: ${service || 'General Inquiry'}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Newsletter:</strong> ${newsletter ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
