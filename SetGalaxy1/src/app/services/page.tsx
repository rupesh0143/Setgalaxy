import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatWeOffer from '@/components/WhatWeOffer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - SetGalaxy',
  description: 'Comprehensive web development services including custom development, design, e-commerce, and SEO solutions.',
}

export default function Services() {
  const services = [
    {
      title: 'Web Design',
      description: 'We create modern, user-friendly, and responsive websites that reflect your brand and engage your audience. Our web design focuses on clean layouts, intuitive navigation, and mobile compatibility to ensure a seamless experience across all devices.',
      slug: 'web-design',
      color: 'primary'
    },
    {
      title: 'Web Development',
      description: 'Our Web Development services focus on building robust, scalable, and high-performing websites that are tailored to your business needs. Using the latest technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, and Laravel.',
      slug: 'web-development',
      color: 'secondary'
    },
    {
      title: 'Planning & Consultation',
      description: 'Our Planning & Consultation services help you align your technology strategy with your business goals. We start by thoroughly understanding your needs, challenges, and objectives to design a clear roadmap for your IT initiatives.',
      slug: 'planning-consultation',
      color: 'primary'
    },
    {
      title: 'Digital Marketing',
      description: 'Our Digital Marketing services are designed to help your business grow online by reaching your target audience through strategic channels. We offer a full suite of services, including SEO, social media marketing, content creation, PPC advertising.',
      slug: 'digital-marketing',
      color: 'secondary'
    },
    {
      title: 'Brand Development',
      description: 'Our Brand Development services focus on building a strong, unique identity for your business that resonates with your target audience. We work closely with you to define your brand\'s mission, vision, values, and personality.',
      slug: 'brand-development',
      color: 'primary'
    },
    {
      title: 'Database Administration (DBA)',
      description: 'Our Database Administration (DBA) services ensure your data is secure, accessible, and optimized for performance. We specialize in managing, maintaining, and backing up your databases to ensure smooth operation.',
      slug: 'database-administration',
      color: 'secondary'
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 wow animate__animated animate__fadeInDown" data-wow-duration="1s">What We Offer</h1>
            <p className="text-xl max-w-4xl mx-auto wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              We provide a comprehensive range of IT services designed to meet the dynamic needs of modern businesses. Our Web Design and Development team crafts responsive, user-friendly websites tailored to your brand. We specialize in Database Administration (DBA) services to ensure your data is secure, optimized, and always accessible.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <WhatWeOffer showViewAllButton={false} />
        </div>

        {/* CTA Section */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max text-center">
            <h2 className="text-3xl font-bold text-dark mb-6 wow animate__animated animate__fadeInUp" data-wow-duration="1s">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
              Let's discuss your requirements and create a custom solution that fits your needs and budget.
            </p>
            <div className="space-x-4 wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <Link href="/contact" className="btn-primary">Get Free Quote</Link>
              <Link href="/portfolio" className="btn-secondary">View Our Work</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}