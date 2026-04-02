'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ContactModal from '@/components/ContactModal'

export default function AfterCollegeContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Get Started')
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined)

  const openModal = (title: string, planName?: string) => {
    setModalTitle(title)
    setSelectedPlan(planName)
    setIsModalOpen(true)
  }

  const pricingPlans = [
    {
      name: 'Starter',
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
      name: 'Professional',
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
      name: 'Elite',
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

        {/* Languages We Teach */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Technologies & Languages We Teach</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn the most in-demand programming languages and technologies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              {['Python', 'JavaScript', 'Java', 'React', 'Node.js', 'Angular', 'Vue.js', 'TypeScript', 'C++', 'C#', 'PHP', 'Laravel', 'SQL Server', 'MySql', 'MariaDb', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'HTML/CSS', 'FullStack', 'Data Analyst', 'Power BI', 'Sql Developer', 'Administer Architect'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-5 py-2 bg-gray-100 text-dark rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Job Portals Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                  Master Job Portals & Get Noticed
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We guide you through every step of setting up and optimizing your profiles on major job portals to maximize your visibility to recruiters.
                </p>
                <ul className="space-y-4">
                  {[
                    'LinkedIn Profile Optimization & Connection Strategies',
                    'Naukri.com Profile Setup & Resume Upload',
                    'Indeed, Monster, Glassdoor Account Management',
                    'GitHub Portfolio for Technical Roles',
                    'AngelList for Startup Opportunities',
                    'Internshala for Internship Applications'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="wow animate__animated animate__fadeInRight" data-wow-duration="1s">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-dark mb-6">Interview Preparation Includes</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Technical Rounds', desc: 'DSA, System Design, Coding Problems' },
                      { title: 'HR Interviews', desc: 'Behavioral Questions, Salary Negotiation' },
                      { title: 'Mock Interviews', desc: 'Real-time practice with industry experts' },
                      { title: 'Aptitude Tests', desc: 'Quantitative, Logical, Verbal preparation' },
                      { title: 'Group Discussions', desc: 'Communication & presentation skills' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-primary font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-dark">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
