'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Creative Design with a Professional Touch",
      description: "The UI/UX SetGalaxy created for our platform was modern, intuitive, and user-friendly. Our users love it, and so do we!",
      company: "InvestAvenue",
      image: "/images/KPMG-min.avif",
      author: "CEO - Ashutosh"
    },
    {
      quote: "Reliable web development partner",
      description: "This is our third project with them. Fast, mobile-friendly, and easy to manage — highly recommend!",
      company: "PROPWEALTH",
      image: "/images/Julius.png",
      author: "Co-Founder - Julius Dabre"
    },
    {
      quote: "Exceptional database optimization support",
      description: "SetGalaxy optimized our databases with precision, improving speed and stability across systems.",
      company: "Mediff Pharma",
      image: "/images/user.jpg",
      author: "CEO of Mediffpharma"
    },
    {
      quote: "Outstanding Service & Support",
      description: "SetGalaxy delivered our website ahead of schedule with excellent design and functionality. Their team was responsive, professional, and went the extra mile to meet our expectations.",
      company: "Investoraid",
      image: "/images/Untitled-1-1000x1024-1-768x786.jpg",
      author: "Co-Founder - Rohit Gehlot"
    },
    {
      quote: "Full support on web development and optimization",
      description: "Outstanding full support on web development and optimization — efficient, reliable, and results-driven!",
      company: "Printmann",
      image: "/images/clients/printman.png",
      author: "CEO of Printmann"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4">What Our Clients Say</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Discover what our clients have to say about their experiences with us. Read their testimonials and see how we've helped businesses thrive with our tailored solutions.
          </p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="testimonials-swiper pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 wow animate__animated animate__fadeInUp min-h-full flex flex-col" data-wow-duration="1s" data-wow-delay={`${0.2 * (index + 1)}s`}>
                <div className="mb-6 flex-grow">
                  <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-dark mb-3">{testimonial.quote}</h3>
                  <p className="text-gray-600 mb-6">{testimonial.description}</p>
                </div>
                <div className="border-t pt-4 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Image src={testimonial.image} alt={testimonial.author} width={40} height={40} className="rounded-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.company}</div>
                    <div className="text-sm text-gray-500">{testimonial.author}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}