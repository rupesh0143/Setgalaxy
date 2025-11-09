import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const serviceDetails = {
  'web-design': {
    title: 'Web Design',
    description: 'We create modern, user-friendly, and responsive websites that reflect your brand and engage your audience. Our web design focuses on clean layouts, intuitive navigation, and mobile compatibility to ensure a seamless experience across all devices. Whether you need a simple business site or a dynamic web application, we tailor each design to meet your unique goals. We combine creativity with functionality to deliver a website that not only looks great but also helps drive traffic, improve user engagement, and support business growth. Let us build a strong online presence for your brand.',
    features: ['Responsive Design', 'Mobile Compatibility', 'Clean Layouts', 'Intuitive Navigation', 'Brand Integration', 'User Experience Focus']
  },
  'web-development': {
    title: 'Web Development',
    description: 'Our Web Development services focus on building robust, scalable, and high-performing websites that are tailored to your business needs. Using the latest technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, and Laravel, we create responsive, fast-loading websites that offer excellent user experiences. From content management systems (CMS) to custom-built web applications, we ensure your site is functional, secure, and easy to manage. Whether you\'re looking for e-commerce, blogs, or enterprise-level solutions, we deliver high-quality development that drives results, enhances user satisfaction, and supports your long-term business goals.',
    features: ['React & Angular', 'Laravel Framework', 'CMS Development', 'E-commerce Solutions', 'Custom Applications', 'Performance Optimization']
  },
  'planning-consultation': {
    title: 'Planning & Consultation',
    description: 'Our Planning & Consultation services help you align your technology strategy with your business goals. We start by thoroughly understanding your needs, challenges, and objectives to design a clear roadmap for your IT initiatives. Our expert consultants guide you through selecting the right technologies, optimizing workflows, and ensuring scalability for future growth. Whether you\'re looking to launch a new project, improve existing systems, or navigate complex IT decisions, we provide actionable insights and practical advice to ensure successful outcomes. With our expertise, you can make informed decisions that drive efficiency and innovation.',
    features: ['Technology Strategy', 'Business Analysis', 'Workflow Optimization', 'Scalability Planning', 'Expert Guidance', 'Decision Support']
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Our Digital Marketing services are designed to help your business grow online by reaching your target audience through strategic channels. We offer a full suite of services, including SEO, social media marketing, content creation, pay-per-click (PPC) advertising, and email marketing. Our team uses data-driven strategies to optimize your online presence, increase brand awareness, and drive traffic to your website. Whether you\'re looking to generate leads, boost conversions, or improve your online reputation, we tailor our marketing efforts to meet your specific business goals and deliver measurable results.',
    features: ['SEO Optimization', 'Social Media Marketing', 'PPC Advertising', 'Content Creation', 'Email Marketing', 'Analytics & Reporting']
  },
  'brand-development': {
    title: 'Brand Development',
    description: 'Our Brand Development services focus on building a strong, unique identity for your business that resonates with your target audience. We work closely with you to define your brand\'s mission, vision, values, and personality. From logo design and brand messaging to creating a consistent visual identity across all platforms, we ensure your brand stands out in a competitive market. Our team helps you establish a clear brand voice that connects emotionally with your customers, builds trust, and drives long-term loyalty. Let us help you craft a brand that reflects your values and drives business success.',
    features: ['Logo Design', 'Brand Messaging', 'Visual Identity', 'Brand Strategy', 'Market Positioning', 'Brand Guidelines']
  },
  'database-administration': {
    title: 'Database Administration (DBA)',
    description: 'Our Database Administration (DBA) services ensure your data is secure, accessible, and optimized for performance. We specialize in managing, maintaining, and backing up your databases to ensure smooth operation and business continuity. Our team monitors database health, performs regular performance tuning, and implements disaster recovery plans to minimize downtime. We work with various database platforms such as MySQL, SQL Server, PostgreSQL, and Oracle, providing tailored solutions to meet your specific needs. With our expertise, we help streamline data management, improve query performance, and ensure your business data is always available and protected.',
    features: ['Database Security', 'Performance Tuning', 'Backup & Recovery', 'MySQL & PostgreSQL', 'SQL Server & Oracle', '24/7 Monitoring']
  }
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails]
  
  if (!service) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
          <div className="container-max">
            <Link href="/services" className="text-white/80 hover:text-white mb-4 inline-block">
              ← Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-dark mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Get Started
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