import { NextResponse } from 'next/server'
import { sendEmail, generateStudentCornerTemplate } from '@/lib/mail'

// Clean environment variable helper
const cleanEnvVal = (val?: string) => {
  if (!val) return ''
  return val.trim().replace(/^['"]|['"]$/g, '')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, collegeName, course, passingYear, planName, message } = body

    // Validation
    if (!name || !email || !phone || !collegeName || !course || !passingYear || !planName) {
      return NextResponse.json(
        { error: 'All fields except message/comments are required.' },
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
    const htmlContent = generateStudentCornerTemplate({
      name,
      email,
      phone,
      collegeName,
      course,
      passingYear,
      planName,
      message: message || '',
    })

    // Send email
    await sendEmail({
      to: recipient,
      replyTo: email,
      subject: `New Student Corner Application: ${name} (${planName})`,
      html: htmlContent,
    })

    return NextResponse.json(
      { success: true, message: 'Your application has been submitted successfully!' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending Student Corner email:', error)
    return NextResponse.json(
      { error: error?.message || 'An error occurred while submitting your application. Please try again later.' },
      { status: 500 }
    )
  }
}
