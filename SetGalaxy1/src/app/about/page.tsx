import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - SetGalaxy',
  description: 'Learn about SetGalaxy, our mission, values, and the expert team behind our web development services.',
}

export default function About() {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: 'trophy' },
    { number: '500+', label: 'Projects Completed', icon: 'rocket' },
    { number: '100+', label: 'Happy Clients', icon: 'users' },
    { number: '24/7', label: 'Support Available', icon: 'clock' }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to deliver modern solutions.',
      icon: 'lightbulb'
    },
    {
      title: 'Quality',
      description: 'Every project meets the highest standards of excellence.',
      icon: 'shield'
    },
    {
      title: 'Partnership',
      description: 'We work closely with clients as trusted technology partners.',
      icon: 'handshake'
    },
    {
      title: 'Growth',
      description: 'Our solutions are designed to scale with your business.',
      icon: 'trending'
    }
  ]

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.JSX.Element } = {
      trophy: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
      rocket: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      users: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>,
      clock: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      lightbulb: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      shield: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      handshake: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>,
      trending: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    }
    return icons[iconName] || icons.lightbulb
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
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <h2 className="text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-4xl mx-auto px-4">
                Transforming Ideas into Digital Excellence Through Innovation & Expertise
              </h2>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="hidden sm:block absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="hidden md:block absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay={`${0.2 * index}s`}>
                  <div className="text-primary mb-4 flex justify-center">
                    {getIcon(stat.icon)}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-dark mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Who We Are</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  SetGalaxy is a trusted leader in dynamic website development, business portfolio creation, and expert database management. With over 10 years of experience, we specialize in building responsive, intuitive websites that enhance user engagement and drive business growth.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team works closely with clients to craft custom digital solutions that align with their brand and goals, ensuring a seamless online presence that delivers results.
                </p>
              </div>
              <div className="wow animate__animated animate__fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
                  <svg className="w-16 h-16 mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg opacity-90">
                    To deliver innovative IT solutions that help businesses thrive in the digital world through cutting-edge technology and exceptional service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and drive our commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay={`${0.2 * index}s`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform">
                      {getIcon(value.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max">
            <div className="text-center mb-12 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Approach</h2>
              <h3 className="text-xl text-gray-600 mb-8">Innovative Strategies for Digital Excellence</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                <div className="text-primary mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">Discovery & Strategy</h3>
                <p className="text-gray-600">We start by understanding your business goals and challenges to create a tailored digital strategy.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                <div className="text-primary mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">Design & Development</h3>
                <p className="text-gray-600">Our expert team brings your vision to life with cutting-edge design and robust development.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                <div className="text-primary mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">Launch & Support</h3>
                <p className="text-gray-600">We ensure smooth deployment and provide ongoing support to help your business grow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-max text-center">
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Let's collaborate to unlock your brand's potential with innovative solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                  Start Your Project
                </Link>
                <Link href="/services" className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                  Explore Services
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