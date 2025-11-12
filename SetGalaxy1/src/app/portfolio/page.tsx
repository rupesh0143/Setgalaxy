import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Portfolio - SetGalaxy',
  description: 'Explore our portfolio of successful web development projects and see how we help businesses grow online.'
}

export default function Portfolio() {
  const projects = [
    {
      title: 'InvestAvenue',
      category: 'Investment',
      description: 'Modern investment platform with intuitive UI/UX design and comprehensive portfolio management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      icon: 'corporate',
      metrics: { users: '5K+', growth: '120%' },
      url: 'https://www.investavenue.com.au/'
    },
    {
      title: 'PROPWEALTH',
      category: 'Real Estate',
      description: 'Real estate investment platform with mobile-first design and property analytics.',
      technologies: ['Next.js', 'Express.js', 'MySQL', 'Google Maps'],
      icon: 'home',
      metrics: { listings: '2K+', inquiries: '60%' },
      url: 'https://propwealth.com.au/'
    },
    {
      title: 'Mediff Pharma',
      category: 'Healthcare',
      description: 'Healthcare management system with database optimization and patient portal.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
      icon: 'health',
      metrics: { patients: '1K+', satisfaction: '95%' },
      url: 'https://mediffpharma.com/'
    },
    {
      title: 'Investoraid',
      category: 'FinTech',
      description: 'Investment tracking dashboard with advanced analytics and market insights.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      icon: 'corporate',
      metrics: { trades: '10K+', accuracy: '98%' },
      url: 'https://investoraid.com.au/'
    },
    {
      title: 'Printmann',
      category: 'E-commerce',
      description: 'Custom printing solutions with full e-commerce integration and order management.',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
      icon: 'shopping',
      metrics: { orders: '3K+', revenue: '150%' },
      url: 'https://printmann.co.in/'
    },
    {
      title: 'Investors Horizon',
      category: 'Investment',
      description: 'Professional investment advisory platform with client portal and market analysis.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
      icon: 'corporate',
      metrics: { clients: '500+', returns: '85%' },
      url: 'https://investorshorizon.in'
    }
  ]

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      shopping: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
      restaurant: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" /></svg>,
      corporate: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      home: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      health: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      education: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    }
    return icons[iconName] || icons.corporate
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
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 px-4">
                Discover the successful projects we've delivered for clients across various industries
              </p>
            </div>
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
              <div className="flex justify-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="opacity-80">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="opacity-80">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="opacity-80">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="hidden sm:block absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="hidden md:block absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
        </section>

        {/* Filter Tabs */}
        <section className="pt-20 bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold text-dark ">Featured Projects</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each project represents our commitment to excellence and innovation in digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding pt-2">
          <div className="container-max">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 wow animate__animated animate__fadeInUp border-2 border-gray-100 hover:border-primary" data-wow-duration="1s" data-wow-delay={`${0.2 * index}s`}>
                  <div className="p-6 pt-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary transform group-hover:scale-110 transition-transform duration-300">
                        {getIcon(project.icon)}
                      </div>
                    </div>
                    <div className="text-center mb-6">
                      <span className="text-sm font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    {/* Metrics */}
                    <div className="flex justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Link 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium text-center"
                      >
                        View Website
                      </Link>
                      <Link 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max">
            <div className="text-center mb-16 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Development Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures project success from concept to deployment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements', icon: 'search' },
                { step: '02', title: 'Design', desc: 'Creating intuitive and engaging user experiences', icon: 'design' },
                { step: '03', title: 'Development', desc: 'Building robust and scalable solutions', icon: 'code' },
                { step: '04', title: 'Launch', desc: 'Deploying and optimizing for success', icon: 'rocket' }
              ].map((process, index) => (
                <div key={index} className="text-center wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay={`${0.2 * index}s`}>
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-primary">{process.step}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-max text-center">
            <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Join our portfolio of successful projects. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                  Start Your Project
                </Link>
                <Link href="/services" className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                  View Services
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