import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OurWorks from '@/components/OurWorks'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails]
  
  if (!service) {
    return { title: 'Service Not Found - SetGalaxy' }
  }

  return {
    title: `${service.title} Services - SetGalaxy`,
    description: service.description,
    openGraph: {
      title: `${service.title} Services - SetGalaxy`,
      description: service.description,
      images: [{ url: service.heroImage || '/images/setgalaxy_logo.svg' }],
    },
  }
}

const serviceDetails = {
  'web-design': {
    title: 'Web Design',
    subtitle: 'Crafting Digital Experiences That Convert',
    description: 'We create modern, user-friendly, and responsive websites that reflect your brand and engage your audience. Our web design focuses on clean layouts, intuitive navigation, and mobile compatibility to ensure a seamless experience across all devices.',
    fullDescription: 'Whether you need a simple business site or a dynamic web application, we tailor each design to meet your unique goals. We combine creativity with functionality to deliver a website that not only looks great but also helps drive traffic, improve user engagement, and support business growth. Let us build a strong online presence for your brand.',
    features: ['Responsive Design', 'Mobile Compatibility', 'Clean Layouts', 'Intuitive Navigation', 'Brand Integration', 'User Experience Focus'],
    heroImage: '/images/webdesigning.jpg',
    process: [
      { step: '01', title: 'Discovery & Planning', description: 'Understanding your business goals and target audience' },
      { step: '02', title: 'Design & Wireframing', description: 'Creating visual mockups and user experience flows' },
      { step: '03', title: 'Development', description: 'Building responsive and interactive web experiences' },
      { step: '04', title: 'Testing & Launch', description: 'Quality assurance and seamless deployment' }
    ],
    benefits: [
      { icon: '🎨', title: 'Custom Design', description: 'Unique designs tailored to your brand identity' },
      { icon: '📱', title: 'Mobile First', description: 'Optimized for all devices and screen sizes' },
      { icon: '⚡', title: 'Fast Loading', description: 'Optimized performance for better user experience' },
      { icon: '🔍', title: 'SEO Ready', description: 'Built with search engine optimization in mind' }
    ]
  },
  'web-development': {
    title: 'Web Development',
    subtitle: 'Building Powerful Digital Solutions',
    description: 'Our Web Development services focus on building robust, scalable, and high-performing websites tailored to your business needs. Using cutting-edge technologies like React, Angular, and Laravel, we create fast-loading websites that offer excellent user experiences.',
    fullDescription: 'From content management systems to custom web applications, we ensure your site is functional, secure, and easy to manage. Whether you need e-commerce, blogs, or enterprise solutions, we deliver high-quality development that drives results and supports your business goals.',
    features: ['React & Angular', 'Laravel Framework', 'CMS Development', 'E-commerce Solutions', 'Custom Applications', 'Performance Optimization'],
    heroImage: '/images/web-3828301_1280.jpg',
    process: [
      { step: '01', title: 'Requirements Analysis', description: 'Understanding your technical needs and specifications' },
      { step: '02', title: 'Architecture Design', description: 'Planning scalable and maintainable code structure' },
      { step: '03', title: 'Development & Testing', description: 'Building robust applications with quality assurance' },
      { step: '04', title: 'Deployment & Support', description: 'Launch and ongoing maintenance support' }
    ],
    benefits: [
      { icon: '⚡', title: 'High Performance', description: 'Optimized code for lightning-fast loading speeds' },
      { icon: '🔒', title: 'Secure & Reliable', description: 'Built with security best practices and reliability' },
      { icon: '📈', title: 'Scalable Solutions', description: 'Architecture that grows with your business needs' },
      { icon: '🛠️', title: 'Modern Tech Stack', description: 'Latest frameworks and development technologies' }
    ]
  },
  'planning-consultation': {
    title: 'Planning & Consultation',
    subtitle: 'Strategic Technology Guidance',
    description: 'Our Planning & Consultation services help you align your technology strategy with your business goals. We thoroughly understand your needs, challenges, and objectives to design a clear roadmap for your IT initiatives.',
    fullDescription: 'Our expert consultants guide you through selecting the right technologies, optimizing workflows, and ensuring scalability for future growth. Whether launching new projects or improving existing systems, we provide actionable insights for successful outcomes.',
    features: ['Technology Strategy', 'Business Analysis', 'Workflow Optimization', 'Scalability Planning', 'Expert Guidance', 'Decision Support'],
    heroImage: '/images/pexels-fauxels-3184643-768x768.jpg',
    process: [
      { step: '01', title: 'Assessment', description: 'Analyzing your current technology landscape and needs' },
      { step: '02', title: 'Strategy Design', description: 'Creating comprehensive technology roadmaps' },
      { step: '03', title: 'Implementation Plan', description: 'Detailed execution strategies and timelines' },
      { step: '04', title: 'Ongoing Support', description: 'Continuous guidance and optimization' }
    ],
    benefits: [
      { icon: '🎯', title: 'Strategic Focus', description: 'Align technology with business objectives' },
      { icon: '📊', title: 'Data-Driven', description: 'Decisions based on thorough analysis' },
      { icon: '🚀', title: 'Future-Ready', description: 'Scalable solutions for long-term growth' },
      { icon: '💡', title: 'Expert Insights', description: 'Industry best practices and innovations' }
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Grow Your Online Presence',
    description: 'Our Digital Marketing services help your business grow online by reaching your target audience through strategic channels. We offer SEO, social media marketing, content creation, PPC advertising, and email marketing.',
    fullDescription: 'Our team uses data-driven strategies to optimize your online presence, increase brand awareness, and drive website traffic. Whether generating leads, boosting conversions, or improving online reputation, we deliver measurable results.',
    features: ['SEO Optimization', 'Social Media Marketing', 'PPC Advertising', 'Content Creation', 'Email Marketing', 'Analytics & Reporting'],
    heroImage: '/images/pexels-fauxels-3184651-768x768.jpg',
    process: [
      { step: '01', title: 'Market Research', description: 'Understanding your audience and competition' },
      { step: '02', title: 'Strategy Development', description: 'Creating targeted marketing campaigns' },
      { step: '03', title: 'Campaign Execution', description: 'Implementing across multiple channels' },
      { step: '04', title: 'Analytics & Optimization', description: 'Measuring results and continuous improvement' }
    ],
    benefits: [
      { icon: '📈', title: 'Increased Traffic', description: 'Drive more qualified visitors to your website' },
      { icon: '🎯', title: 'Targeted Reach', description: 'Connect with your ideal customers effectively' },
      { icon: '💰', title: 'Better ROI', description: 'Maximize return on marketing investment' },
      { icon: '📊', title: 'Data Insights', description: 'Track performance with detailed analytics' }
    ]
  },
  'brand-development': {
    title: 'Brand Development',
    subtitle: 'Build Your Unique Identity',
    description: 'Our Brand Development services focus on building a strong, unique identity that resonates with your target audience. We define your brand\'s mission, vision, values, and personality to create lasting impact.',
    fullDescription: 'From logo design and brand messaging to consistent visual identity across platforms, we ensure your brand stands out. Our team helps establish a clear brand voice that connects emotionally with customers and drives loyalty.',
    features: ['Logo Design', 'Brand Messaging', 'Visual Identity', 'Brand Strategy', 'Market Positioning', 'Brand Guidelines', 'Color Psychology', 'Typography Selection', 'Brand Voice Development', 'Competitor Analysis', 'Brand Asset Creation', 'Style Guide Creation'],
    heroImage: '/images/branding.jpg',
    process: [
      { step: '01', title: 'Brand Discovery', description: 'Understanding your values, mission, and audience' },
      { step: '02', title: 'Identity Creation', description: 'Designing logos, colors, and visual elements' },
      { step: '03', title: 'Brand Guidelines', description: 'Establishing consistent usage standards' },
      { step: '04', title: 'Implementation', description: 'Rolling out across all brand touchpoints' }
    ],
    benefits: [
      { icon: '🎨', title: 'Unique Identity', description: 'Stand out with distinctive brand elements' },
      { icon: '❤️', title: 'Emotional Connection', description: 'Build strong relationships with customers' },
      { icon: '🏆', title: 'Market Recognition', description: 'Increase brand awareness and recall' },
      { icon: '📏', title: 'Consistency', description: 'Unified brand experience across channels' },
      { icon: '🎯', title: 'Strategic Positioning', description: 'Clear market differentiation and value proposition' },
      { icon: '💡', title: 'Creative Excellence', description: 'Award-winning design and creative solutions' }
    ],
    brandElements: [
      { title: 'Logo Design', description: 'Memorable symbols that represent your brand essence', icon: '🏷️' },
      { title: 'Color Palette', description: 'Strategic color choices that evoke emotions', icon: '🎨' },
      { title: 'Typography', description: 'Font selections that reflect your brand personality', icon: '✍️' },
      { title: 'Brand Voice', description: 'Consistent tone and messaging across all channels', icon: '📢' }
    ],
    clientLogos: [
      { name: 'InvestAvenue', logo: '/images/clients/investavenue.avif' },
      { name: 'Investors Horizon', logo: '/images/clients/InvestorsHorizon-logo.webp' },
      { name: 'Mediff Pharma', logo: '/images/clients/mediff.svg' },
      { name: 'PropWealth', logo: '/images/clients/propwealthlogo.png' }
    ]
  },
  'database-administration': {
    title: 'Database Administration (DBA)',
    subtitle: 'Secure & Optimized Data Management',
    description: 'Our Database Administration services ensure your data is secure, accessible, and optimized for performance. We specialize in managing, maintaining, and backing up databases for smooth operation and business continuity.',
    fullDescription: 'Our team monitors database health, performs performance tuning, and implements disaster recovery plans. We work with MySQL, SQL Server, PostgreSQL, and Oracle, providing tailored solutions for your specific needs.',
    features: ['Database Security', 'Performance Tuning', 'Backup & Recovery', 'MySQL & PostgreSQL', 'SQL Server & Oracle', '24/7 Monitoring'],
    heroImage: '/images/database.jpg',
    process: [
      { step: '01', title: 'Database Audit', description: 'Comprehensive assessment of current systems' },
      { step: '02', title: 'Optimization Setup', description: 'Performance tuning and security configuration' },
      { step: '03', title: 'Monitoring Implementation', description: 'Real-time monitoring and alerting systems' },
      { step: '04', title: 'Maintenance & Support', description: 'Ongoing management and optimization' }
    ],
    benefits: [
      { icon: '🔒', title: 'Data Security', description: 'Advanced security measures and compliance' },
      { icon: '⚡', title: 'High Performance', description: 'Optimized queries and faster response times' },
      { icon: '🔄', title: 'Reliable Backups', description: 'Automated backup and disaster recovery' },
      { icon: '📊', title: '24/7 Monitoring', description: 'Continuous health monitoring and alerts' }
    ]
  }
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails]
  
  if (!service) {
    notFound()
  }

  // Enhanced UI for all services
  if (['web-design', 'web-development', 'digital-marketing', 'brand-development', 'planning-consultation', 'database-administration'].includes(params.slug)) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "provider": { "@type": "Organization", "name": "SetGalaxy" }
            })
          }}
        />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src={service.heroImage}
                alt="Web Design Services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
            </div>
            <div className="relative z-10 text-center text-white container-max">
              <Link href="/services" className="text-white/80 hover:text-white mb-4 inline-block">
                ← Back to Services
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{service.subtitle}</p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Project
              </Link>
            </div>
          </section>

          {/* Service Overview */}
          <section className="section-padding bg-white">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    {params.slug === 'web-design' && 'Creating Digital Experiences That Matter'}
                    {params.slug === 'web-development' && 'Building Robust Web Solutions'}
                    {params.slug === 'digital-marketing' && 'Driving Growth Through Digital Channels'}
                    {params.slug === 'brand-development' && 'Your Brand is Your Story'}
                    {params.slug === 'planning-consultation' && 'Strategic Technology Planning'}
                    {params.slug === 'database-administration' && 'Expert Database Management'}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <p className="text-gray-600 leading-relaxed">{service.fullDescription}</p>
                </div>
                <div className="relative">
                  <Image
                    src={
                      params.slug === 'web-design' ? '/images/pexels-fauxels-3184655.jpg' :
                      params.slug === 'web-development' ? '/images/pexels-thirdman-5257759.jpg' :
                      params.slug === 'digital-marketing' ? '/images/pexels-fauxels-3184657-768x768.jpg' :
                      params.slug === 'brand-development' ? '/images/pexels-artempodrez-5716031.jpg' :
                      params.slug === 'planning-consultation' ? '/images/pexels-fauxels-3184643-768x768.jpg' :
                      '/images/pexels-mikhail-nilov-6963857.jpg'
                    }
                    alt={`${service.title} Process`}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="section-padding bg-gray-50">
            <div className="container-max">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                  Why Choose Our {service.title}?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {params.slug === 'web-design' && 'We deliver exceptional web experiences that drive results'}
                  {params.slug === 'web-development' && 'We build powerful, scalable solutions that perform'}
                  {params.slug === 'digital-marketing' && 'We create data-driven campaigns that deliver measurable results'}
                  {params.slug === 'brand-development' && 'We build memorable brands that connect with your audience'}
                  {params.slug === 'planning-consultation' && 'We provide strategic guidance for technology success'}
                  {params.slug === 'database-administration' && 'We ensure your data is secure, fast, and always available'}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-dark mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Timeline */}
          <section className="section-padding bg-white">
            <div className="container-max">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                  Our {service.title} Process
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {params.slug === 'web-design' && 'A systematic approach to creating exceptional web experiences'}
                  {params.slug === 'web-development' && 'A structured approach to building robust web applications'}
                  {params.slug === 'digital-marketing' && 'A data-driven approach to growing your online presence'}
                  {params.slug === 'brand-development' && 'A strategic approach to building memorable brand identities'}
                  {params.slug === 'planning-consultation' && 'A comprehensive approach to technology strategy planning'}
                  {params.slug === 'database-administration' && 'A systematic approach to database optimization and management'}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.process.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-x-8"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Brand Elements Section - Only for brand-development */}
          {params.slug === 'brand-development' && (
            <section className="section-padding bg-white">
              <div className="container-max">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Brand Elements We Create</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">Every element is carefully crafted to tell your brand story</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {(service as any).brandElements?.map((element: any, index: number) => (
                    <div key={index} className="text-center group">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-3xl">{element.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-3">{element.title}</h3>
                      <p className="text-gray-600">{element.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Client Logos Showcase - Only for brand-development */}
          {params.slug === 'brand-development' && (
            <section className="section-padding bg-gray-50">
              <div className="container-max">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Brands We've Crafted</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">Trusted by businesses across industries</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                  {(service as any).clientLogos?.map((client: any, index: number) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-24">
                      <Image
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        width={120}
                        height={60}
                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Portfolio Showcase - For other services */}
          {params.slug !== 'brand-development' && <OurWorks />}

          {/* Features Section */}
          <section className="section-padding bg-white">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">What's Included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                  <p className="mb-6">
                    {params.slug === 'brand-development' 
                      ? "Let's create a brand identity that sets you apart from the competition."
                      : "Let's discuss your project and create something amazing together."
                    }
                  </p>
                  <div className="space-y-4">
                    <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors block text-center">
                      Start Your Project
                    </Link>
                    <Link href="/portfolio" className="border border-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-medium transition-colors block text-center">
                      View Portfolio
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

  // Original layout for other services
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