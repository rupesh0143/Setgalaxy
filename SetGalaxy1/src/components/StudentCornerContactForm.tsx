'use client'

import { useState } from 'react'

export default function StudentCornerContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    collegeName: '',
    course: '',
    passingYear: '',
    planName: 'Nexus',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        collegeName: formData.collegeName,
        course: formData.course,
        passingYear: formData.passingYear,
        planName: formData.planName,
        message: formData.message
      }

      const response = await fetch('/api/studentcorner-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          collegeName: '',
          course: '',
          passingYear: '',
          planName: 'Nexus',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err: any) {
      setSubmitStatus('error')
      setErrorMessage('A network error occurred. Please check your internet connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-max max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 grid grid-cols-1 md:grid-cols-12">
          
          {/* Form Info Sidebar */}
          <div className="bg-gradient-to-br from-secondary to-primary p-8 text-white md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                Career Advisory
              </span>
              <h3 className="text-2xl font-bold mb-4">Talk to a Career Counselor</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Fill out our academic details form to schedule a free one-on-one session with our placement experts and course advisors.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">95% Placement Rate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Top Tech Mentors</span>
              </div>
            </div>
          </div>

          {/* Form Itself */}
          <div className="p-8 md:col-span-8">
            <h4 className="text-2xl font-bold text-dark mb-2">Request Free Consultation</h4>
            <p className="text-gray-500 text-sm mb-6">Let us know your background so we can guide you to the right plan.</p>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl animate__animated animate__fadeIn">
                <p className="font-semibold">Application Received!</p>
                <p className="text-xs">Your consultation inquiry has been submitted. A career advisor will contact you via email or phone shortly.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl animate__animated animate__fadeIn">
                <p className="font-semibold">Failed to Submit</p>
                <p className="text-xs">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="student-firstName" className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="student-firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="John"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label htmlFor="student-lastName" className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="student-lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Doe"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm disabled:bg-gray-50"
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="student-email" className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="student-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="your.email@college.edu"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label htmlFor="student-phone" className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="student-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm disabled:bg-gray-50"
                  />
                </div>
              </div>

              {/* College/University Name */}
              <div>
                <label htmlFor="student-collegeName" className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  College / University Name *
                </label>
                <input
                  type="text"
                  id="student-collegeName"
                  name="collegeName"
                  required
                  value={formData.collegeName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="e.g. Delhi Technological University"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm disabled:bg-gray-50"
                />
              </div>

              {/* Course & Passing Year Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="student-course" className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Branch / Course *
                  </label>
                  <input
                    type="text"
                    id="student-course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="e.g. B.Tech CSE, BCA, MCA"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label htmlFor="student-passingYear" className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                    Graduation Year *
                  </label>
                  <select
                    id="student-passingYear"
                    name="passingYear"
                    required
                    value={formData.passingYear}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm disabled:bg-gray-50 bg-white"
                  >
                    <option value="">Select Year</option>
                    <option value="2024">2024 (Graduated)</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Program Plan of Interest */}
              <div>
                <label htmlFor="student-planName" className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Program Plan Interest *
                </label>
                <select
                  id="student-planName"
                  name="planName"
                  required
                  value={formData.planName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm disabled:bg-gray-50 bg-white"
                >
                  <option value="Nexus">Nexus Plan (₹4,999/mo)</option>
                  <option value="GalaxyX">GalaxyX Plan (₹9,999/mo)</option>
                  <option value="Evolve">Evolve Plan (₹19,999/mo)</option>
                  <option value="Custom/Bulk">Custom Plan / Bulk Inquiry</option>
                  <option value="Just Inquiring">Just Inquiring / Need Counseling</option>
                </select>
              </div>

              {/* Message / Career Goals */}
              <div>
                <label htmlFor="student-message" className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Tell us about your career goals / questions
                </label>
                <textarea
                  id="student-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Share any specific skills you want to learn or questions you have..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm resize-none disabled:bg-gray-50"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-secondary to-primary hover:opacity-95 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Application...
                  </>
                ) : (
                  'Submit Registration'
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
