import Image from 'next/image';
import Link from 'next/link';

interface WhatWeOfferProps {
  showViewAllButton?: boolean;
}

export default function WhatWeOffer({ showViewAllButton = true }: WhatWeOfferProps) {
  const services = [
    {
      image: "/images/webdesigning.jpg",
      title: "Web Design",
      description: "Modern, user-friendly, and responsive websites that reflect your brand and engage your audience.",
      link: "/services/web-design",
      delay: "0.2s"
    },
    {
      image: "/images/pexels-fotios-photos-1092671.jpg",
      title: "Web Development",
      description: "Robust, scalable, and high-performing websites built with the latest technologies.",
      link: "/services/web-development",
      delay: "0.4s"
    },
    {
      image: "/images/database.jpg",
      title: "Database Administration",
      description: "Secure, accessible, and optimized database management for business continuity.",
      link: "/services/database-administration",
      delay: "0.6s"
    },
    {
      image: "/images/pexels-fauxels-3184657-768x768.jpg",
      title: "Digital Marketing",
      description: "Strategic online marketing including SEO, social media, and PPC advertising.",
      link: "/services/digital-marketing",
      delay: "0.8s"
    },
    {
      image: "/images/branding.jpg",
      title: "Brand Development",
      description: "Building strong, unique brand identity that resonates with your target audience.",
      link: "/services/brand-development",
      delay: "1.0s"
    },
    {
      image: "/images/pexels-artempodrez-5716031.jpg",
      title: "Planning & Consultation",
      description: "Technology strategy alignment with business goals and expert guidance.",
      link: "/services/planning-consultation",
      delay: "1.2s"
    }
  ];

  return (
    <section className="section-padding bg-gray-100">
      <div className="container-max">
       
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 wow animate__animated animate__fadeInUp" 
              data-wow-duration="1s" 
              data-wow-delay={service.delay}
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                width={360} 
                height={240} 
                className='object-cover h-60 rounded-lg'
              /> 
              <h3 className="text-lg sm:text-xl font-semibold my-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {service.description}
              </p>
              <Link href={service.link} className="text-primary hover:text-secondary/80 font-medium inline-flex items-center group">
                Learn More 
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        {showViewAllButton && (
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary text-lg">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}