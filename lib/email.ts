import { Resend } from 'resend';

// Use a placeholder API key for builds if the real one is not available
const apiKey = process.env.RESEND_API_KEY || 're_placeholder_key_for_build';
const resend = new Resend(apiKey);

export const sendTopicRequestEmail = async (email: string, topic: string, description: string) => {
  try {
    // Skip actual email sending if using placeholder key
    if (apiKey === 're_placeholder_key_for_build') {
      console.log('Using placeholder API key - email would have been sent with:', { email, topic, description });
      return;
    }
    
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@TheIntelAnalystAcademy.com.au', // Replace with your email address
      subject: 'New Topic Request',
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Topic:</strong> ${topic}</p><p><strong>Description:</strong> ${description}</p>`,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw during build
    if (process.env.NODE_ENV === 'production' && !process.env.VERCEL_ENV) {
      console.log('Suppressing email error in build environment');
      return;
    }
    throw new Error('Failed to send email');
  }
};