'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ContactModal from '@/components/ContactModal'
import StudentCornerContactForm from '@/components/StudentCornerContactForm'

export default function StudentCornerContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Get Started')
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined)
  const [isFlyerOpen, setIsFlyerOpen] = useState(false)

  const openModal = (title: string, planName?: string) => {
    setModalTitle(title)
    setSelectedPlan(planName)
    setIsModalOpen(true)
  }

  const pricingPlans = [
    {
      name: 'Nexus',
      price: '4,999',
      duration: '/month',
      description: 'Perfect for students just starting their career journey',
      features: [
        'Connect with Expert Mentors 2 times a week',
        'Basic Interview Preparation',
        'Job Portal Profile Setup',
        'Weekly Mock Interviews',
        'Resume Building Guide',
        'Email Support'
      ],
      highlighted: false,
      color: 'primary'
    },
    {
      name: 'GalaxyX',
      price: '9,999',
      duration: '/month',
      description: 'choice for serious job seekers',
      features: [
        'Connect with Expert Mentors 5 times a week',
        'Advanced Interview Preparation',
        'Internship Placement Assistance',
        '2 Telephonic Interviews a week',
        'LinkedIn Profile Optimization',
        'Official Interview in every 4 months',
        'Job Portal Registration (5 Portals)',
        'Personal Career Mentor',
        'Priority Support'
      ],
      highlighted: false,
      color: 'secondary'
    },
    {
      name: 'Evolve',
      price: '19,999',
      duration: '/month',
      description: 'Most popular Complete career transformation package',
      features: [
        'Connect with Expert Mentors unlimited times a week',
        'Expert Interview Coaching',
        'Internship/Job Placement After 6 Months',
        '3 Virtual Mock Interviews',
        'Complete Job Portal Management',
        'Official Interview in every 2 months',
        'Dashboard access',
        'Dedicated Career Advisor',
        '24/7 Priority Support',
        'Provide Support Contact'
      ],
      highlighted: true,
      color: 'primary'
    }
  ]

  const services = [
    {
      title: 'Programming Languages Learning',
      description: 'Master in-demand programming languages like Python, Java, JavaScript, React, Node.js, and more with hands-on projects and expert guidance.',
      icon: 'code'
    },
    {
      title: 'Internship Opportunities',
      description: 'Get access to exclusive internship opportunities with top companies. We connect you with real-world projects to build your experience.',
      icon: 'briefcase'
    },
    {
      title: 'Job Placement Assistance',
      description: 'Our dedicated placement team works to match you with entry-level positions that align with your skills and career goals.',
      icon: 'job'
    },
    {
      title: 'Interview Preparation',
      description: 'Comprehensive interview prep including technical rounds, HR interviews, mock sessions, and feedback from industry experts.',
      icon: 'interview'
    },
    {
      title: 'Job Portal Guidance',
      description: 'Learn how to effectively use LinkedIn, Naukri, Indeed, and other platforms to find and apply for the best opportunities.',
      icon: 'portal'
    },
    {
      title: 'Profile Building & Tutoring',
      description: 'Get personalized guidance on creating impressive profiles on job portals, building your online presence, and standing out to recruiters.',
      icon: 'profile'
    }
  ]

  const stats = [
    { number: '5000+', label: 'Students Placed' },
    { number: '200+', label: 'Partner Companies' },
    { number: '95%', label: 'Placement Rate' },
    { number: '50+', label: 'Courses Available' }
  ]

  const getServiceIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      code: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      briefcase: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      job: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      interview: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      portal: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
      profile: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    }
    return icons[iconName] || icons.code
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white section-padding overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/mainbanner.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-max text-center relative z-10">
            <div className="wow animate__animated animate__fadeInDown" data-wow-duration="1s">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                For College Students & Fresh Graduates
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
                Launch Your Career With Us
              </h1>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 px-4">
                Entry-level jobs, internships, skill development, and complete career guidance for students pursuing education or fresh out of college.
              </p>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#pricing" className="btn-primary bg-white text-primary hover:bg-gray-100">
                  View Pricing Plans
                </a>
                <Link href="/contact" className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-secondary">
                  Talk to Counselor
                </Link>
              </div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="hidden sm:block absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center wow animate__animated animate__fadeInUp" 
                  data-wow-duration="1s" 
                  data-wow-delay={`${0.1 * index}s`}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What We Offer</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive career support designed specifically for college students and fresh graduates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-primary wow animate__animated animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`${0.15 * index}s`}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{getServiceIcon(service.icon)}</div>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-max">
            <div className="text-center mb-16 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Affordable Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Choose Your Plan</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Flexible pricing plans designed to fit every student's budget and career goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all duration-500 wow animate__animated animate__fadeInUp ${
                    plan.highlighted 
                      ? 'bg-gradient-to-br from-secondary to-primary text-white shadow-2xl scale-105 z-10' 
                      : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
                  }`}
                  data-wow-duration="1s"
                  data-wow-delay={`${0.2 * index}s`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-dark px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-dark'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-6">
                    <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-gray-500'}`}>₹</span>
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-dark'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.highlighted ? 'text-white/80' : 'text-gray-500'}>
                      {plan.duration}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <svg 
                          className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                            plan.highlighted ? 'text-yellow-400' : 'text-primary'
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.highlighted ? 'text-white/90' : 'text-gray-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => openModal('Get Started', plan.name)}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                      plan.highlighted 
                        ? 'bg-white text-secondary hover:bg-gray-100' 
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
              <p className="text-gray-600">
                Need a custom plan for your college or institution? {' '}
                <button 
                  onClick={() => openModal('Bulk Pricing Inquiry', 'Custom/Institutional Plan')}
                  className="text-primary font-semibold hover:underline cursor-pointer"
                >
                  Contact us for bulk pricing
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* Academy Courses We Offer Section */}
        <section className="section-padding">
          <div className="container-max">
            
            {/* Section Header */}
            <div className="text-center mb-16 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Curriculum
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
                Academy Courses We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explore our specialized courses tailored for school students, college students, and career switchers to build a strong foundation and master modern technologies.
              </p>
            </div>

            {/* Courses & Brochure Grid (4 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Card 1: Basic Course for School Students */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-primary hover:shadow-2xl transition-all duration-300 flex flex-col justify-between wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg p-2 flex items-center justify-center">
                      <img src="/images/company-logo/programing.png" alt="School Program" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-lg font-bold text-dark leading-tight">School Students Basic</h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wider">Build a strong foundation</p>
                  <ul className="space-y-3">
                    {[
                      { name: 'Computer Basics', desc: 'Introduction to Computers' },
                      { name: 'Typing Skills', desc: 'Improve Speed & Accuracy' },
                      { name: 'MS Paint', desc: 'Drawing & Creativity' },
                      { name: 'MS Word (Basics)', desc: 'Learn & Create Documents' },
                      { name: 'Internet Basics', desc: 'Safe & Smart Internet Use' },
                      { name: 'Logic & Reasoning', desc: 'Fun Activities & Puzzles' },
                      { name: 'Scratch Programming', desc: 'Create Stories, Games & Animations' }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                        </svg>
                        <div>
                          <p className="text-gray-800 text-sm font-semibold leading-none">{item.name}</p>
                          <p className="text-gray-500 text-[10px] mt-0.5">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 2: Programming Languages */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-secondary hover:shadow-2xl transition-all duration-300 flex flex-col justify-between wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg p-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-dark leading-tight">Programming Languages</h3>
                  </div>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      { src: 'python.png', title: 'Python' },
                      { src: 'java.png', title: 'Java' },
                      { src: 'js.png', title: 'JavaScript' },
                      { src: 'c-.png', title: 'C++' },
                      { src: 'letter-c.png', title: 'C' },
                      { src: 'c-sharp.png', title: 'C#' }
                    ].map((img, idx) => (
                      <div key={idx} className="w-8 h-8 bg-gray-50 border border-gray-150 rounded-lg p-1.5 flex items-center justify-center hover:scale-105 transition-transform" title={img.title}>
                        <img src={`/images/company-logo/${img.src}`} alt={img.title} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {['Python Programming', 'Java Programming', 'JavaScript (ES6+)', 'C / C++ Development'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-800 text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 3: Full Stack Development */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-primary hover:shadow-2xl transition-all duration-300 flex flex-col justify-between wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg p-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-dark leading-tight">Full Stack Development</h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="w-8 h-8 bg-gray-50 border border-gray-150 rounded-lg p-1.5 flex items-center justify-center hover:scale-105 transition-transform" title="NodeJS">
                      <img src="/images/company-logo/nodejs.png" alt="NodeJS" className="w-full h-full object-contain" />
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {['React Frontend Library', 'Node.js Backend Runtime', 'Express.js Framework', 'MongoDB Database', 'RESTful API Development'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-800 text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 4: Database & SQL */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-secondary hover:shadow-2xl transition-all duration-300 flex flex-col justify-between wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg p-2 flex items-center justify-center">
                      <img src="/images/company-logo/database.png" alt="Database" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-lg font-bold text-dark leading-tight">Database & SQL Engineering</h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="w-8 h-8 bg-gray-50 border border-gray-150 rounded-lg p-1.5 flex items-center justify-center hover:scale-105 transition-transform" title="SQL Server">
                      <img src="/images/company-logo/sql-server.png" alt="SQL Server" className="w-full h-full object-contain" />
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {['SQL Query Fundamentals', 'MySQL Database Management', 'PostgreSQL Relational DB', 'MongoDB Non-Relational DB', 'Database Design & Relations'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-800 text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 5: Data Analytics & Power BI */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-secondary hover:shadow-2xl transition-all duration-300 flex flex-col justify-between wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg p-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-dark leading-tight">Data Analytics & Power BI</h3>
                  </div>
                  <ul className="space-y-3">
                    {['Advanced Excel Formulas', 'SQL for Data Analysis', 'Power BI Data Modeling', 'Data Visualization Dashboards', 'Statistical Data Analysis'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-800 text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 6: Artificial Intelligence & ML */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-primary hover:shadow-2xl transition-all duration-300 flex flex-col justify-between wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg p-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-dark leading-tight">Artificial Intelligence & ML</h3>
                  </div>
                  <ul className="space-y-3">
                    {['Machine Learning Models (ML)', 'Deep Learning Architectures', 'Natural Language Processing (NLP)', 'Computer Vision Concepts', 'Generative AI & LLMs'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-800 text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 7: Cloud & DevOps */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-secondary hover:shadow-2xl transition-all duration-300 flex flex-col justify-between wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg p-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-dark leading-tight">Cloud & DevOps</h3>
                  </div>
                  <ul className="space-y-3">
                    {['Amazon Web Services (AWS)', 'Git Version Control & GitHub', 'Docker Containerization', 'Kubernetes Orchestration', 'CI / CD Deployment Pipelines'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-800 text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 8: Flyer / Brochure Advertisement */}
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 flex items-center justify-center cursor-pointer" onClick={() => setIsFlyerOpen(true)}>
                  <img src="/images/company-logo/Image-1.png" alt="AI & Coding Academy brochure thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                    <svg className="w-10 h-10 text-white mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Click to Zoom Flyer</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-dark text-sm leading-snug mb-1">AI & Coding Academy Flyer</h4>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">View the complete syllabus details, limited admissions, and support programs.</p>
                  <button 
                    onClick={() => setIsFlyerOpen(true)}
                    className="w-full py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-xs font-semibold hover:opacity-95 shadow transition-all duration-300 cursor-pointer"
                  >
                    Open Academy Brochure
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Career Development & Placement Assistance Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            
            {/* Header Block */}
            <div className="text-center mb-16 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Career Development & Placement Assistance
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
                Build Your Professional Presence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We help students create a strong professional profile and become industry-ready through portfolio development, project experience, and job application guidance.
              </p>
            </div>

            {/* Grid 1: Profile Setup, Placement Support & Career Paths */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              
              {/* Card 1: Professional Profile Setup */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-primary transition-all duration-300 wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark">Profile Setup</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'LinkedIn Profile Optimization',
                    'Resume & CV Creation',
                    'GitHub Portfolio Development',
                    'Personal Portfolio Website',
                    'Naukri.com Profile Setup',
                    'Indeed & Other Job Portal Registration',
                    'Internship Application Guidance'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Placement Support */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-secondary transition-all duration-300 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark">Placement Support</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Job Search Strategy',
                    'Profile Optimization',
                    'Interview Preparation',
                    'Referral Guidance',
                    'Career Counseling'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Career Paths */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-primary transition-all duration-300 wow animate__animated animate__fadeInRight" data-wow-duration="1s">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark">Career Paths</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Software Developer',
                    'Full Stack Developer',
                    'Frontend Developer',
                    'Backend Developer',
                    'AI Developer',
                    'Data Analyst',
                    'Power BI Developer',
                    'DevOps Engineer'
                  ].map((path, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 bg-gray-100 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 rounded-full text-xs font-semibold text-gray-700 cursor-default"
                    >
                      {path}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Industry Readiness Program Blocks */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Industry Readiness Program</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: '1. Technical Assessment',
                    items: ['Programming Fundamentals', 'SQL & Database Concepts', 'Full Stack Development', 'AI & Automation Concepts', 'Project Reviews']
                  },
                  {
                    title: '2. Portfolio Building',
                    items: ['ATS-Friendly Resume', 'LinkedIn Optimization', 'GitHub Project Showcase', 'Personal Branding']
                  },
                  {
                    title: '3. Mock Interviews',
                    items: ['Technical Interviews', 'HR Interviews', 'Communication Skills', 'Confidence Building']
                  },
                  {
                    title: '4. Corporate Readiness',
                    items: ['Email Writing', 'Professional Comm.', 'Team Collaboration', 'Workplace Etiquette']
                  },
                  {
                    title: '5. Internship & Projects',
                    items: ['Live Industry Projects', 'Internships at SET Galaxy', 'Project Documentation', 'Experience Certificate']
                  }
                ].map((step, idx) => (
                  <div key={idx} className="bg-gray-50/50 hover:bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">
                    <h4 className="text-sm font-bold text-dark mb-4 pb-2 border-b border-gray-200/80 min-h-[40px] flex items-center">
                      <span className="w-6 h-6 bg-gradient-to-br from-primary to-secondary text-white text-[10px] font-bold rounded-full flex items-center justify-center mr-2 flex-shrink-0">{idx + 1}</span>
                      {step.title.split('. ')[1]}
                    </h4>
                    <ul className="space-y-2.5 flex-grow">
                      {step.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 text-primary/80 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 text-xs font-semibold leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Approach Section */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h3 className="text-xl font-bold text-center text-dark mb-8 uppercase tracking-wider">Our Approach</h3>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-3">
                {[
                  'Learn',
                  'Build Projects',
                  'Complete Internship',
                  'Create Portfolio',
                  'Crack Interviews',
                  'Launch Your Career'
                ].map((step, idx, arr) => (
                  <div key={idx} className="flex items-center">
                    <div className="flex items-center bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                      <span className="w-5 h-5 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-[10px] font-bold mr-2.5 flex-shrink-0">{idx + 1}</span>
                      <span className="font-semibold text-gray-800 text-[11px] sm:text-xs leading-none">{step}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <span className="text-secondary font-bold text-lg mx-2 hidden sm:inline animate-pulse">➔</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Career Advisory Contact Form */}
        <StudentCornerContactForm />

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-max text-center">
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Kickstart Your Career?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of successful students who launched their careers with SetGalaxy. 
                Your dream job is just a click away!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => openModal('Enroll Now')}
                  className="btn-primary bg-white text-primary hover:bg-gray-100 cursor-pointer"
                >
                  Enroll Now
                </button>
                <a href="#pricing" className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-secondary">
                  Compare Plans
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox Modal for Academy Flyer */}
      {isFlyerOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer animate__animated animate__fadeIn"
            onClick={() => setIsFlyerOpen(false)}
          />
          <div className="relative max-w-5xl max-h-[90vh] z-[110] overflow-auto bg-white rounded-3xl p-2.5 shadow-2xl animate__animated animate__zoomIn animate__faster">
            <button
              onClick={() => setIsFlyerOpen(false)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/85 text-white p-3 rounded-full transition-colors z-50 shadow"
              aria-label="Close flyer preview"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src="/images/company-logo/Image-1.png" 
              alt="AI & Coding Academy Flyer" 
              className="w-full h-auto object-contain rounded-2xl max-h-[85vh]"
            />
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        planName={selectedPlan}
      />
    </>
  )
}
