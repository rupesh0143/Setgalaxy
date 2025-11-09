import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - SetGalaxy',
  description: 'Get in touch with SetGalaxy for your web development needs. Free consultation available.',
}

export default function Contact() {

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SetGalaxy – Your Partner for Exceptional IT Solutions</h1>
            <p className="text-xl max-w-4xl mx-auto">
              Looking to turn your vision into reality? At SetGalaxy, we specialize in delivering smart, customized IT solutions to help your business grow. Whether you need web design, development, SEO, or digital marketing, our experienced team is here to bring innovation and results. We focus on understanding your goals and crafting strategies that work. Let's collaborate and build something truly exceptional that sets you apart online.
            </p>
            <p className="text-lg mt-4">
              Visit us at setgalaxy.com and take the first step toward transforming your digital presence!
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-dark mb-6">Headquarters</h2>
                <p className="text-lg text-gray-600 mb-8">
                  D5-3-GF, BPTP PARKLAND D BLOCK, SECTOR 85, FARIDABAD
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Phone No.</h3>
                      <p className="text-gray-600">+91 9411253874</p>
                      <p className="text-sm text-gray-500 mt-2">Monday – Saturday, 9:30 am – 7:30 pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-primary to-secondary rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-4">Careers at SetGalaxy.com</h3>
                  <p className="mb-4">
                    Join our team and be part of innovative IT solutions. We're always looking for talented professionals.
                  </p>
                  <Link href="/careers" className="btn-primary bg-white text-primary hover:bg-gray-100 inline-block">
                    View Open Positions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}