import nodemailer from 'nodemailer'

// Helper to clean surrounding quotes from environment variables
const cleanEnvVal = (val?: string) => {
  if (!val) return ''
  return val.trim().replace(/^['"]|['"]$/g, '')
}

const host = cleanEnvVal(process.env.NEXT_PUBLIC_EMAIL_HOST) || 'smtp.gmail.com'
const port = parseInt(cleanEnvVal(process.env.NEXT_PUBLIC_EMAIL_PORT)) || 587
const user = cleanEnvVal(process.env.NEXT_PUBLIC_EMAIL_USER)
const pass = cleanEnvVal(process.env.NEXT_PUBLIC_EMAIL_PASSWORD)
const fromEmail = cleanEnvVal(process.env.NEXT_PUBLIC_EMAIL_FROM) || 'noreply@setgalaxy.com'

// Create transporter
const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465, // true for 465, false for 587
  auth: {
    user,
    pass,
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
})

interface SendEmailArgs {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailArgs) {
  const mailOptions = {
    from: `"SetGalaxy Inquiries" <${fromEmail}>`,
    to,
    replyTo,
    subject,
    html,
  }

  return transporter.sendMail(mailOptions)
}

// Generate premium general contact email template
export function generateGeneralContactTemplate(data: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}) {
  const formattedService = data.service
    ? data.service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Not Specified'

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New General Inquiry - SetGalaxy</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f6f8; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); overflow: hidden; border: 1px solid #e5e7eb;">
                <!-- Brand Top Banner -->
                <tr>
                  <td style="background: linear-gradient(135deg, #53a3a5 0%, #a557a5 100%); padding: 32px 24px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">SetGalaxy</h1>
                    <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.85); font-size: 14px; font-weight: 500;">New General Contact Inquiry</p>
                  </td>
                </tr>
                <!-- Content Body -->
                <tr>
                  <td style="padding: 40px 32px;">
                    <p style="margin: 0 0 24px 0; font-size: 16px; color: #4b5563; line-height: 1.5;">
                      You have received a new message from the contact form on your website. Here are the submission details:
                    </p>
                    
                    <!-- Information Cards -->
                    <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 140px;">Name</td>
                          <td style="padding: 6px 0; font-size: 16px; color: #111827; font-weight: 500;">${data.name}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                          <td style="padding: 6px 0; font-size: 16px; color: #111827; font-weight: 500;"><a href="mailto:${data.email}" style="color: #53a3a5; text-decoration: none;">${data.email}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                          <td style="padding: 6px 0; font-size: 16px; color: #111827; font-weight: 500;"><a href="tel:${data.phone}" style="color: #111827; text-decoration: none;">${data.phone}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Service</td>
                          <td style="padding: 6px 0; font-size: 16px; color: #a557a5; font-weight: 600;">${formattedService}</td>
                        </tr>
                      </table>
                    </div>

                    <!-- Message Block -->
                    <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #111827; font-weight: 700;">Message Content</h3>
                    <div style="border-left: 4px solid #53a3a5; background-color: #f0fdfa; padding: 20px; border-radius: 0 12px 12px 0; margin-bottom: 24px;">
                      <p style="margin: 0; font-size: 15px; color: #0f766e; font-style: italic; line-height: 1.6; white-space: pre-wrap;">"${data.message}"</p>
                    </div>

                    <a href="mailto:${data.email}?subject=Re: SetGalaxy Inquiry" style="display: inline-block; background-color: #53a3a5; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none; text-align: center; transition: background-color 0.3s ease;">
                      Reply Directly
                    </a>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f9fafb; padding: 24px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0; font-size: 12px; color: #9ca3af; line-height: 1.5;">
                      Sent from the <strong>General Contact Page</strong> on <strong>SetGalaxy</strong>.<br>
                      Received on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

// Generate premium Student Corner contact email template
export function generateStudentCornerTemplate(data: {
  name: string
  email: string
  phone: string
  collegeName: string
  course: string
  passingYear: string
  planName: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student Corner Application - SetGalaxy</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f6f8; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); overflow: hidden; border: 1px solid #e5e7eb;">
                <!-- Brand Top Banner -->
                <tr>
                  <td style="background: linear-gradient(135deg, #a557a5 0%, #53a3a5 100%); padding: 32px 24px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">SetGalaxy</h1>
                    <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.85); font-size: 14px; font-weight: 500;">Student Corner career Inquiry</p>
                  </td>
                </tr>
                <!-- Content Body -->
                <tr>
                  <td style="padding: 40px 32px;">
                    <p style="margin: 0 0 24px 0; font-size: 16px; color: #4b5563; line-height: 1.5;">
                      A student has submitted an inquiry/application from the <strong>Student Corner career Page</strong>:
                    </p>
                    
                    <!-- Student details card -->
                    <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #111827; font-weight: 700;">Student Information</h3>
                    <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 150px;">Name</td>
                          <td style="padding: 6px 0; font-size: 16px; color: #111827; font-weight: 500;">${data.name}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                          <td style="padding: 6px 0; font-size: 16px; color: #111827; font-weight: 500;"><a href="mailto:${data.email}" style="color: #53a3a5; text-decoration: none;">${data.email}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                          <td style="padding: 6px 0; font-size: 16px; color: #111827; font-weight: 500;"><a href="tel:${data.phone}" style="color: #111827; text-decoration: none;">${data.phone}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">College</td>
                          <td style="padding: 6px 0; font-size: 16px; color: #111827; font-weight: 500;">${data.collegeName}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Course/Branch</td>
                          <td style="padding: 6px 0; font-size: 16px; color: #111827; font-weight: 500;">${data.course}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Passing Year</td>
                          <td style="padding: 6px 0; font-size: 16px; color: #111827; font-weight: 500;">${data.passingYear}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Interested Plan</td>
                          <td style="padding: 6px 0; font-size: 16px; color: #a557a5; font-weight: 600;">${data.planName}</td>
                        </tr>
                      </table>
                    </div>

                    <!-- Message Block -->
                    <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #111827; font-weight: 700;">Career Goals / Message</h3>
                    <div style="border-left: 4px solid #a557a5; background-color: #fdf4fd; padding: 20px; border-radius: 0 12px 12px 0; margin-bottom: 24px;">
                      <p style="margin: 0; font-size: 15px; color: #701a75; font-style: italic; line-height: 1.6; white-space: pre-wrap;">"${data.message || 'No additional details provided.'}"</p>
                    </div>

                    <a href="mailto:${data.email}?subject=Re: SetGalaxy Student Corner Program" style="display: inline-block; background-color: #a557a5; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none; text-align: center; transition: background-color 0.3s ease;">
                      Reply to Student
                    </a>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f9fafb; padding: 24px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0; font-size: 12px; color: #9ca3af; line-height: 1.5;">
                      Sent from the <strong>Student Corner Page</strong> on <strong>SetGalaxy</strong>.<br>
                      Received on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}
