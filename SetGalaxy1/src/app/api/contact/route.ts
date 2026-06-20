import { NextResponse } from 'next/server'
import { sendEmail, generateGeneralContactTemplate } from '@/lib/mail'

// Clean environment variable helper
const cleanEnvVal = (val?: string) => {
  if (!val) return ''
  return val.trim().replace(/^['"]|['"]$/g, '')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone number, and message are required fields.' },
        { status: 400 }
      )
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const recipient = cleanEnvVal(process.env.NEXT_PUBLIC_EMAIL_USER)
    if (!recipient) {
      console.error('SMTP recipient email (NEXT_PUBLIC_EMAIL_USER) is not configured in environment variables.')
      return NextResponse.json(
        { error: 'Email service configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    // Generate HTML template
    const htmlContent = generateGeneralContactTemplate({
      name,
      email,
      phone,
      service: service || '',
      message,
    })

    // Send email
    await sendEmail({
      to: recipient,
      replyTo: email,
      subject: `New General Contact: ${name} (${service || 'General Inquiry'})`,
      html: htmlContent,
    })

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending general contact email:', error)
    return NextResponse.json(
      { error: error?.message || 'An error occurred while sending your message. Please try again later.' },
      { status: 500 }
    )
  }
}
