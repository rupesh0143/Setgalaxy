'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import ContactModal from '@/components/ContactModal'
import StudentCornerContactForm from '@/components/StudentCornerContactForm'

// ─── Course Data ────────────────────────────────────────────────────────────

const courses = [
  {
    id: 1,
    title: 'Computer Fundamentals & Digital Literacy',
    forClass: 'Class 5 – 7',
    badge: 'Beginner',
    badgeColor: 'bg-green-100 text-green-700',
    image: '/images/courses/course-computer-basics.jpg',
    price: '₹1,999',
    duration: '2 Months',
    classTime: 'Mon / Wed / Fri · 4:00 PM – 5:00 PM',
    batchSize: 'Max 15 students',
    syllabus: [
      'Introduction to Computers & Hardware',
      'Keyboard & Typing Skills',
      'MS Paint – Drawing & Creativity',
      'MS Word Basics – Documents & Formatting',
      'Internet Safety & Smart Browsing',
      'Google Docs & Basic Productivity Tools',
      'Scratch Programming – Games & Animations',
    ],
    color: 'primary',
  },
  {
    id: 2,
    title: 'Coding with Python – Junior',
    forClass: 'Class 6 – 9',
    badge: 'Beginner',
    badgeColor: 'bg-green-100 text-green-700',
    image: '/images/courses/course-python.jpg',
    price: '₹3,499',
    duration: '3 Months',
    classTime: 'Tue / Thu / Sat · 3:30 PM – 5:00 PM',
    batchSize: 'Max 12 students',
    syllabus: [
      'Python Syntax & Variables',
      'Conditionals & Loops',
      'Functions & Modules',
      'Lists, Tuples & Dictionaries',
      'File Handling Basics',
      'Fun Mini Projects (Calculator, Quiz Game)',
      'Introduction to Problem Solving',
    ],
    color: 'secondary',
  },
  {
    id: 3,
    title: 'Web Design & Development',
    forClass: 'Class 8 – 10',
    badge: 'Intermediate',
    badgeColor: 'bg-blue-100 text-blue-700',
    image: '/images/courses/course-webdev.jpg',
    price: '₹4,999',
    duration: '3 Months',
    classTime: 'Mon / Wed / Fri · 5:00 PM – 6:30 PM',
    batchSize: 'Max 12 students',
    syllabus: [
      'HTML5 – Page Structure & Semantic Tags',
      'CSS3 – Styling, Flexbox & Grid',
      'Responsive Design & Media Queries',
      'JavaScript Basics – DOM Manipulation',
      'Build a Personal Portfolio Website',
      'Introduction to Bootstrap Framework',
      'Deploy Website on GitHub Pages',
    ],
    color: 'primary',
  },
  {
    id: 4,
    title: 'Programming with C & C++',
    forClass: 'Class 9 – 11',
    badge: 'Intermediate',
    badgeColor: 'bg-blue-100 text-blue-700',
    image: '/images/courses/course-coding.jpg',
    price: '₹3,999',
    duration: '3 Months',
    classTime: 'Tue / Thu · 4:00 PM – 6:00 PM',
    batchSize: 'Max 15 students',
    syllabus: [
      'C Language Fundamentals',
      'Data Types, Operators & Control Flow',
      'Arrays, Strings & Pointers',
      'Functions & Recursion',
      'Introduction to C++ & OOP Concepts',
      'Classes, Objects & Inheritance',
      'Practice Problems & Competitive Coding Basics',
    ],
    color: 'secondary',
  },
  {
    id: 5,
    title: 'Data Analytics & MS Excel',
    forClass: 'Class 10 – 12',
    badge: 'Intermediate',
    badgeColor: 'bg-blue-100 text-blue-700',
    image: '/images/courses/course-data.jpg',
    price: '₹4,499',
    duration: '2 Months',
    classTime: 'Sat / Sun · 10:00 AM – 12:00 PM',
    batchSize: 'Max 15 students',
    syllabus: [
      'MS Excel – Formulas, Charts & Pivot Tables',
      'Data Cleaning & Analysis Techniques',
      'Introduction to SQL Queries',
      'Google Sheets for Collaboration',
      'Power BI Dashboard Basics',
      'Data Visualization Best Practices',
      'Real-World Mini Project',
    ],
    color: 'primary',
  },
  {
    id: 6,
    title: 'Artificial Intelligence & Machine Learning',
    forClass: 'Class 11 – 12',
    badge: 'Advanced',
    badgeColor: 'bg-purple-100 text-purple-700',
    image: '/images/courses/course-ai.jpg',
    price: '₹6,999',
    duration: '4 Months',
    classTime: 'Mon / Wed / Fri · 6:00 PM – 7:30 PM',
    batchSize: 'Max 10 students',
    syllabus: [
      'Python for AI & Data Science',
      'NumPy, Pandas & Matplotlib',
      'Introduction to Machine Learning',
      'Supervised & Unsupervised Learning',
      'Deep Learning & Neural Networks Basics',
      'Natural Language Processing (NLP) Intro',
      'Capstone AI Project',
    ],
    color: 'secondary',
  },
]

// ─── Why Us Stats ───────────────────────────────────────────────────────────

const stats = [
  { number: '500+', label: 'School Students Trained' },
  { number: '6', label: 'Industry-Level Courses' },
  { number: '95%', label: 'Student Satisfaction' },
  { number: '100%', label: 'Live Project Included' },
]

// ─── Component ──────────────────────────────────────────────────────────────

export default function StudentCornerContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Enroll Now')
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined)
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null)

  const openModal = (title: string, planName?: string) => {
    setModalTitle(title)
    setSelectedPlan(planName)
    setIsModalOpen(true)
  }

  return (
    <>
      <Header />
      <main>

        {/* ── Hero Section ──────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white section-padding overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/mainbanner.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-max text-center relative z-10">
            <div className="wow animate__animated animate__fadeInDown" data-wow-duration="1s">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4 tracking-wide">
                🎓 Tech-Ready Education for Class 5 – 12
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Industry-Level Courses<br />for School Students
              </h1>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 opacity-90 px-4">
                Give your child a head start with real-world coding, data, and AI skills taught 
                by industry professionals — designed specifically for Classes 5 to 12.
              </p>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#courses" className="btn-primary bg-white text-primary hover:bg-gray-100 font-bold">
                  Explore Courses
                </a>
                <Link href="/contact" className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-secondary font-bold">
                  Talk to a Counselor
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="hidden sm:block absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        </section>

        {/* ── Stats Strip ───────────────────────────────────────────────── */}
        <section className="py-12 bg-gray-50 border-b border-gray-100">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center wow animate__animated animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`${0.1 * index}s`}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Course Cards ──────────────────────────────────────────────── */}
        <section id="courses" className="section-padding">
          <div className="container-max">
            <div className="text-center mb-14 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Courses
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Tech Courses for Classes 5 – 12
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every course includes live classes, hands-on projects, a certificate of completion, 
                and personal mentoring from industry experts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary transition-all duration-400 flex flex-col overflow-hidden wow animate__animated animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`${0.1 * index}s`}
                >
                  {/* Course Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${course.badgeColor}`}>
                      {course.badge}
                    </span>
                    <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 px-2 py-1 rounded-md">
                      {course.forClass}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-dark mb-4 leading-snug">{course.title}</h3>

                    {/* Key Info Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide mb-1">Price</p>
                        <p className="text-primary font-bold text-base">{course.price}</p>
                        <p className="text-[10px] text-gray-400">per month</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide mb-1">Duration</p>
                        <p className="text-dark font-bold text-base">{course.duration}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 col-span-2">
                        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide mb-1">Class Timing</p>
                        <p className="text-dark font-semibold text-xs leading-snug">{course.classTime}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 col-span-2">
                        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide mb-1">Batch Size</p>
                        <p className="text-dark font-semibold text-xs">{course.batchSize}</p>
                      </div>
                    </div>

                    {/* Syllabus Toggle */}
                    <button
                      className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-700 hover:text-primary transition-colors mb-2"
                      onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                    >
                      <span>View Syllabus</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${expandedCourse === course.id ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {expandedCourse === course.id && (
                      <ul className="space-y-2 mb-4 pl-1 border-l-2 border-primary/30 ml-1">
                        {course.syllabus.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 pl-2">
                            <svg className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                            </svg>
                            <span className="text-gray-700 text-xs font-medium leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    <div className="mt-auto pt-4 flex gap-3">
                      <button
                        onClick={() => openModal(`Enroll in ${course.title}`, course.title)}
                        className="flex-1 bg-primary text-white text-sm font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors cursor-pointer"
                      >
                        Enroll Now
                      </button>
                      <button
                        onClick={() => openModal(`Get More Info – ${course.title}`, course.title)}
                        className="flex-1 border-2 border-primary text-primary text-sm font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-colors cursor-pointer"
                      >
                        Free Demo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's Included in Every Course ──────────────────────────── */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Every Course Includes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Each course is structured with industry standards to ensure students build real, 
                job-ready skills from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                  ),
                  title: 'Live Online Classes',
                  desc: 'Interactive sessions with live Q&A, screen sharing, and real-time feedback.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                  title: 'Hands-On Projects',
                  desc: 'Build real projects each month that can be showcased in a portfolio.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: 'Certificate of Completion',
                  desc: 'Industry-recognized certificate issued on successful course completion.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Dedicated Mentor',
                  desc: 'One-on-one doubt-clearing sessions with a personal industry mentor.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary transition-all duration-300 text-center wow animate__animated animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`${0.1 * idx}s`}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Form ──────────────────────────────────────────────── */}
        <StudentCornerContactForm />

        {/* ── CTA Section ───────────────────────────────────────────────── */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-max text-center">
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Child's Tech Journey Today
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Limited seats per batch. Book a free demo class and see the difference industry-level 
                education makes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => openModal('Book Free Demo')}
                  className="btn-primary bg-white text-primary hover:bg-gray-100 font-bold cursor-pointer"
                >
                  Book Free Demo Class
                </button>
                <a href="#courses" className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-secondary font-bold">
                  Browse All Courses
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* Contact / Enroll Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        planName={selectedPlan}
      />
    </>
  )
}
