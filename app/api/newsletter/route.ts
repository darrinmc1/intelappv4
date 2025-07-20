import { sendNewsletterSubscription } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    
    const result = await sendNewsletterSubscription(email);
    
    if (result.success) {
      return NextResponse.json({ message: 'Subscription successful' });
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error('Error in newsletter API route:', error);
    return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });
  }
}