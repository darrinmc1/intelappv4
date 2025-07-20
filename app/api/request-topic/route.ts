import { sendTopicRequestEmail } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, topic, description, category, experienceLevel } = await request.json();
    
    if (!topic || !description) {
      return NextResponse.json({ error: 'Topic and description are required' }, { status: 400 });
    }
    
    const result = await sendTopicRequestEmail(email, topic, description, category, experienceLevel);
    
    if (result.success) {
      return NextResponse.json({ message: 'Topic request submitted successfully' });
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Failed to submit topic request' }, { status: 500 });
  }
}