import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - SetGalaxy',
  description: 'Join our team at SetGalaxy. Explore exciting career opportunities in web development, design, and IT solutions.',
}

export default function Careers() {
  const jobs = [
    {
      title: 'UX/UI Designer',
      description: 'Shape seamless digital experiences with your creativity and design skills. At SetGalaxy, we value innovation, clarity, and user-first thinking.',
      slug: 'ux-ui-designer',
      type: 'Full-time',
      location: 'Remote',
      experience: '2-4 years',
      icon: 'design'
    },
    {
      title: 'Product Designer',
      description: 'Join SetGalaxy to craft intuitive, impactful products that solve real problems. Collaborate, innovate, and design with a user-first mindset.',
      slug: 'product-designer',
      type: 'Full-time',
      location: 'Hybrid',
      experience: '3-5 years',
      icon: 'product'
    },
    {
      title: 'Database Administrator',
      description: 'Join SetGalaxy to manage, secure, and optimize mission-critical databases. Your expertise will drive performance and reliability.',
      slug: 'database-administrator',
      type: 'Full-time',
      location: 'On-site',
      experience: '4-6 years',
      icon: 'database'
    }
  ]

  const benefits = [
    { title: 'Competitive Salary', desc: 'Market-leading compensation packages', icon: 'salary' },
    { title: 'Health Benefits', desc: 'Comprehensive medical and dental coverage', icon: 'health' },
    { title: 'Flexible Hours', desc: 'Work-life balance with flexible scheduling', icon: 'time' },
    { title: 'Learning Budget', desc: 'Annual budget for courses and conferences', icon: 'learning' },
    { title: 'Remote Work', desc: 'Option to work from anywhere', icon: 'remote' },
    { title: 'Team Events', desc: 'Regular team building and social events', icon: 'team' }
  ]

  const getJobIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      design: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h10a2 2 0 012 2v12a4 4 0 01-4 4H9" /></svg>,
      product: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
      database: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    }
    return icons[iconName] || icons.design
  }

  const getBenefitIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      salary: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>,
      health: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      time: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      learning: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      remote: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      team: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    }
    return icons[iconName] || icons.salary
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
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 px-4">
                Shape the future of digital solutions with passionate professionals who make a difference.
              </p>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
              <div className="flex justify-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="opacity-80">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="opacity-80">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="opacity-80">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="hidden sm:block absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="hidden md:block absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
        </section>

        {/* Jobs Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover exciting opportunities to grow your career with innovative projects and cutting-edge technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {jobs.map((job, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 wow animate__animated animate__fadeInUp border-2 border-gray-100 hover:border-primary" data-wow-duration="1s" data-wow-delay={`${0.2 * index}s`}>
                  <div className="p-6 pt-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary transform group-hover:scale-110 transition-transform duration-300">
                        {getJobIcon(job.icon)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{job.description}</p>
                    
                    {/* Job Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                        </svg>
                        {job.type} • {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.experience} experience
                      </div>
                    </div>
                    
                    <Link href={`/careers/${job.slug}`} className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors text-center font-medium inline-block">
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max">
            <div className="text-center mb-16 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose SetGalaxy?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in creating an environment where our team can thrive, innovate, and grow together.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay={`${0.1 * index}s`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {getBenefitIcon(benefit.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Culture</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At SetGalaxy, we foster a culture of innovation, collaboration, and continuous learning. Our diverse team brings together creative minds from around the world to solve complex challenges.
                </p>
                <div className="space-y-4">
                  {['Innovation-driven environment', 'Collaborative team culture', 'Continuous learning opportunities', 'Work-life balance'].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="wow animate__animated animate__fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
                  <svg className="w-16 h-16 mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                  <p className="text-lg opacity-90">
                    Be part of a team that's shaping the future of digital experiences and making a real impact on businesses worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-max text-center">
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Don't see the perfect role? We're always looking for talented individuals to join our growing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                  Send Your Resume
                </Link>
                <Link href="/about" className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}