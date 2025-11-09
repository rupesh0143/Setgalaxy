'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function OurWorks() {
  const works = [
    {
      title: 'InvestAvenue',
      description: 'Modern investment platform with intuitive UI/UX design and comprehensive portfolio management',
      image: '/images/websties/investAvenue.png',
      url: 'https://https://www.investavenue.com.au/',
      category: 'Web Development'
    },
    {
      title: 'PROPWEALTH',
      description: 'Real estate investment platform with mobile-first design and property analytics',
      image: '/images/websties/propwealth.png',
      url: 'https://propwealth.com.au/',
      category: 'Web Design'
    },
    {
      title: 'Mediff Pharma',
      description: 'Healthcare management system with database optimization and patient portal',
      image: '/images/websties/mediffpharma.png',
      url: 'https://mediffpharma.com/',
      category: 'Healthcare'
    },
    {
      title: 'Investoraid',
      description: 'Investment tracking dashboard with advanced analytics and market insights',
      image: '/images/websties/investoraid.png',
      url: 'https://investoraid.com.au/',
      category: 'FinTech'
    },
    {
      title: 'Printmann',
      description: 'Custom printing solutions with full e-commerce integration and order management',
      image: '/images/websties/printmann.png',
      url: 'https://printmann.co.in/',
      category: 'E-commerce'
    },
    {
      title: 'Investors Horizon',
      description: 'Professional investment advisory platform with client portal and market analysis',
      image: '/images/websties/investorHorizon.png',
      url: 'https://investorshorizon.in',
      category: 'Investment'
    }
  ]

  return (
    <section className="section-padding bg-gray-100">
      <div className="container-max">
        <div className="text-center mb-12 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="works-swiper pb-16"
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 wow animate__animated animate__fadeInUp h-full flex flex-col" data-wow-duration="1s" data-wow-delay={`${0.2 * (index + 1)}s`}>
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={work.image} 
                    alt={work.title} 
                    width={400} 
                    height={200} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                    {work.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-dark mb-2">{work.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{work.description}</p>
                  <Link 
                    href={work.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-secondary font-medium group"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}