import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { message } = await request.json();
    console.log('Received message:', message);

    if (!message || message.trim() === '') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

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
      from: '"Website Contact" <universalsolarp@gmail.com>',
      to: 'universalsolarp@gmail.com',
      subject: `New Contact Message`,
      html: `<p>${message}</p>`,
    });

    console.log('Email sent successfully');
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
