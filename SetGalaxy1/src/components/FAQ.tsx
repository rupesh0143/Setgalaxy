'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What technologies do you use for web development?',
    answer: 'We use modern technologies including HTML, CSS, JavaScript, React, Angular, Laravel, Node.js, and various database systems to build robust and scalable web solutions.'
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Yes, all our websites are built with a mobile-first approach, ensuring they work perfectly on all devices and screen sizes.'
  },
  {
    question: 'What types of databases do you manage?',
    answer: 'We work with various database platforms including MySQL, SQL Server, PostgreSQL, Oracle, and MongoDB, providing tailored solutions for your specific needs.'
  },
  {
    question: 'Do you offer database backup and recovery services?',
    answer: 'Yes, we provide comprehensive backup and recovery services, including automated backups, disaster recovery planning, and 24/7 monitoring to ensure your data is always protected.'
  },
  {
    question: 'How does SEO help my business?',
    answer: 'SEO improves your website\'s visibility in search engines, driving organic traffic, increasing brand awareness, and helping you reach your target audience more effectively.'
  },
  {
    question: 'What is Business Intelligence (BI)?',
    answer: 'Business Intelligence involves analyzing your business data to provide actionable insights that help in making informed decisions and driving business growth.'
  },
  {
    question: 'What tools do you use for analytics?',
    answer: 'We use various analytics tools including Google Analytics, custom dashboards, and specialized BI tools to track performance and provide detailed reporting.'
  },
  {
    question: 'How do you ensure data security?',
    answer: 'We implement multiple security layers including encryption, secure authentication, regular security audits, and compliance with industry standards to protect your data.'
  },
  {
    question: 'What is your project development process?',
    answer: 'Our process includes consultation, planning, design, development, testing, deployment, and ongoing support to ensure successful project delivery.'
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer comprehensive ongoing support including maintenance, updates, security monitoring, and technical assistance to keep your systems running smoothly.'
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing varies based on project scope and requirements. We provide customized quotes after understanding your specific needs during our consultation process.'
  },
  {
    question: 'Can I hire you for just one service or a specific task?',
    answer: 'Absolutely! We offer flexible engagement models and can work on individual services or specific tasks based on your requirements.'
  },
  {
    question: 'Do you offer remote or on-site services?',
    answer: 'We offer both remote and on-site services depending on your preferences and project requirements, ensuring flexibility in our service delivery.'
  },
  {
    question: 'How do I get started with your company?',
    answer: 'Simply contact us through our website or phone to schedule a free consultation. We\'ll discuss your needs and provide a customized solution proposal.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our services or how we work? You're in the right place! This section covers the most common queries our clients have.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay={`${0.1 * (index + 1)}s`}>
              <button
                className="w-full text-left bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-dark pr-4">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-primary transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="bg-white p-4 rounded-b-lg">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}