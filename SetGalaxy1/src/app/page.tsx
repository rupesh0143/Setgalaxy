import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import OurClients from '@/components/OurClients'
import OurWorks from '@/components/OurWorks'
import WhatWeOffer from '@/components/WhatWeOffer'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceIcons } from '@/components/ServiceIcons'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/mainbanner.jpg')] bg-cover bg-center bg-no-repeat "></div>
          <div className="absolute inset-0  bg-gray-900/50"></div>
          <div className="container-max text-center relative z-10">
            <div className="wow animate__animated animate__fadeInDown" data-wow-duration="1s">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 leading-tight">
                SetGalaxy
              </h1>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <h2 className="text-lg sm:text-2xl md:text-3xl mb-8 font-semibold">
                Your Complete Web Solution Partner
              </h2>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                We provide comprehensive web development, design, and digital marketing services 
                to help your business succeed online. From concept to launch, we're with you every step.
              </p>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary bg-white text-secondary hover:bg-gray-100 text-lg font-bold px-8 py-4 transform hover:scale-105 transition-transform">
                  Start Your Project
                </Link>
                <Link href="/services" className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-primary font-bold text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="hidden sm:block absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="hidden md:block absolute top-1/2 left-20 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
        </section>

        {/* Services Section */}
        <div className="container-xxl">
           <div className="text-center mt-8 mb-12 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We provide a comprehensive range of IT services designed to meet the dynamic needs of modern businesses. Our Web Design and Development team crafts responsive, user-friendly websites tailored to your brand.
          </p>
        </div>
        </div>
        <WhatWeOffer />

        {/* About Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                  Why Choose SetGalaxy?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  With years of experience in web development and design, we deliver exceptional 
                  digital solutions that help businesses grow and succeed online.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Expert team of developers and designers</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Modern technologies and best practices</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>SEO-optimized and mobile-responsive</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>24/7 support and maintenance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white">
                <Image src="/images/pexels-artempodrez-5716031.jpg" alt="Planning & Consultation Icon" width={600} height={100} className='object-cover h-60 rounded-lg'/>

                <h3 className="text-2xl font-bold my-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Let's discuss your project and create something amazing together.
                </p>
                <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg">
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-max text-center">
            <h2 className="text-3xl font-bold text-dark mb-8">Additional Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {[
                { name: 'Analytic Reporting', icon: 'AnalyticReporting' },
                { name: 'Application Development', icon: 'ApplicationDevelopment' },
                { name: 'Blogging', icon: 'Blogging' },
                { name: 'Branding', icon: 'Branding' },
                { name: 'Content Creation', icon: 'ContentCreation' },
                { name: 'Email Marketing', icon: 'EmailMarketing' },
                { name: 'Graphic Design', icon: 'GraphicDesign' },
                { name: 'Inbound Marketing', icon: 'InboundMarketing' },
                { name: 'Marketing Planning', icon: 'MarketingPlanning' },
                { name: 'Mobile Solutions', icon: 'MobileSolutions' },
                { name: 'Persona Development', icon: 'PersonaDevelopment' },
                { name: 'Photography', icon: 'Photography' },
                { name: 'Promotion', icon: 'Promotion' },
                { name: 'SEM', icon: 'SEM' },
                { name: 'SEO', icon: 'SEO' }
              ].map((service, index) => {
                const IconComponent = ServiceIcons[service.icon as keyof typeof ServiceIcons]
                return (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay={`${0.1 * (index + 1)}s`}>
                    <div className="text-primary mb-3 flex justify-center">
                      <IconComponent />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{service.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <OurClients />
        </div>
        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <OurWorks />
        </div>
        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <Testimonials />
        </div>
        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  )
}