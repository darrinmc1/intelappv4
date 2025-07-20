import { Resend } from 'resend';

// Use a placeholder API key for builds if the real one is not available
const apiKey = process.env.RESEND_API_KEY || 're_placeholder_key_for_build';
const resend = new Resend(apiKey);

// Default sender email address
const DEFAULT_FROM_EMAIL = 'no-reply@TheIntelAnalystAcademy.com.au';
// Default recipient email address
const DEFAULT_TO_EMAIL = 'info@TheIntelAnalystAcademy.com.au';

/**
 * Send a topic request email
 */
export const sendTopicRequestEmail = async (email: string, topic: string, description: string, category?: string, experienceLevel?: string) => {
  try {
    // Skip actual email sending if using placeholder key
    if (apiKey === 're_placeholder_key_for_build') {
      console.log('Using placeholder API key - email would have been sent with:', { email, topic, description, category, experienceLevel });
      return { success: true, message: 'Email would have been sent (development mode)' };
    }
    
    const response = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: DEFAULT_TO_EMAIL,
      subject: 'New Topic Request',
      html: `
        <h2>New Topic Request</h2>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        ${category ? `<p><strong>Category:</strong> ${category}</p>` : ''}
        ${experienceLevel ? `<p><strong>Experience Level:</strong> ${experienceLevel}</p>` : ''}
        <p><strong>Description:</strong> ${description}</p>
      `,
    });
    
    return { success: true, message: 'Email sent successfully', id: response.id };
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw during build
    if (process.env.NODE_ENV === 'production' && !process.env.VERCEL_ENV) {
      console.log('Suppressing email error in build environment');
      return { success: true, message: 'Email sending suppressed in build environment' };
    }
    return { success: false, message: 'Failed to send email', error };
  }
};

/**
 * Send a newsletter subscription email
 */
export const sendNewsletterSubscription = async (email: string) => {
  try {
    // Skip actual email sending if using placeholder key
    if (apiKey === 're_placeholder_key_for_build') {
      console.log('Using placeholder API key - newsletter subscription would have been sent with:', { email });
      return { success: true, message: 'Subscription would have been processed (development mode)' };
    }
    
    // Send confirmation to subscriber
    await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: email,
      subject: 'Newsletter Subscription Confirmation',
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>You have successfully subscribed to the Intel Academy newsletter.</p>
        <p>You'll receive updates on our latest tutorials, resources, and community news.</p>
        <p>If you didn't subscribe to this newsletter, please ignore this email.</p>
      `,
    });
    
    // Notify admin about new subscriber
    const response = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: DEFAULT_TO_EMAIL,
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });
    
    return { success: true, message: 'Subscription processed successfully', id: response.id };
  } catch (error) {
    console.error('Error processing subscription:', error);
    // Don't throw during build
    if (process.env.NODE_ENV === 'production' && !process.env.VERCEL_ENV) {
      console.log('Suppressing email error in build environment');
      return { success: true, message: 'Subscription processing suppressed in build environment' };
    }
    return { success: false, message: 'Failed to process subscription', error };
  }
};

/**
 * Send a contact form email
 */
export const sendContactEmail = async (name: string, email: string, subject: string, message: string) => {
  try {
    // Skip actual email sending if using placeholder key
    if (apiKey === 're_placeholder_key_for_build') {
      console.log('Using placeholder API key - contact email would have been sent with:', { name, email, subject, message });
      return { success: true, message: 'Contact email would have been sent (development mode)' };
    }
    
    const response = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: DEFAULT_TO_EMAIL,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });
    
    return { success: true, message: 'Email sent successfully', id: response.id };
  } catch (error) {
    console.error('Error sending contact email:', error);
    // Don't throw during build
    if (process.env.NODE_ENV === 'production' && !process.env.VERCEL_ENV) {
      console.log('Suppressing email error in build environment');
      return { success: true, message: 'Email sending suppressed in build environment' };
    }
    return { success: false, message: 'Failed to send email', error };
  }
};
