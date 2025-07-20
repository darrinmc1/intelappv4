import { sendContactEmail } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();
    
    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }
    
    const result = await sendContactEmail(
      name || 'Anonymous', 
      email, 
      subject || 'Contact Form Submission', 
      message
    );
    
    if (result.success) {
      return NextResponse.json({ message: 'Message sent successfully' });
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}