'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'

export default function OurClients() {
  const clients = [
    { name: 'InvestAvenue', logo: '/images/clients/investavenue.avif' },
    { name: 'PROPWEALTH', logo: '/images/clients/propwealthlogo.png' },
    { name: 'Mediff Pharma', logo: '/images/clients/mediff.svg' },
    { name: 'Investoraid', logo: '/images/clients/investoraid.png' },
    { name: 'Printmann', logo: '/images/clients/printman.png' },
    { name: 'InvestorsHorizon', logo: '/images/clients/InvestorsHorizon-logo.webp' },
    { name: 'DataFlow', logo: '/images/clients/hs.webp' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Trusted Clients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to work with amazing companies and help them achieve their digital goals.
          </p>
        </div>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 }
          }}
          className="clients-swiper"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 wow animate__animated animate__fadeInUp h-24" data-wow-duration="1s" data-wow-delay={`${0.1 * (index + 1)}s`}>
                <div className="w-full h-60 bg-white rounded-lg flex items-center justify-center p-2 shadow-sm">
                  <Image 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    width={120} 
                    height={80} 
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}