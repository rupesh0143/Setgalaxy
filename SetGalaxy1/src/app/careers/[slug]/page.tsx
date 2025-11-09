import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const jobDetails = {
  'ux-ui-designer': {
    title: 'UX/UI Designer',
    description: 'Shape seamless digital experiences with your creativity and design skills. At SetGalaxy, we value innovation, clarity, and user-first thinking. Let\'s build impactful interfaces together!',
    requirements: ['3+ years of UX/UI design experience', 'Proficiency in Figma, Sketch, or Adobe XD', 'Strong portfolio showcasing user-centered design', 'Understanding of responsive design principles', 'Experience with design systems', 'Knowledge of HTML/CSS basics'],
    responsibilities: ['Create wireframes, prototypes, and high-fidelity designs', 'Conduct user research and usability testing', 'Collaborate with developers and product managers', 'Maintain and evolve design systems', 'Present design concepts to stakeholders'],
    location: 'Faridabad, Haryana',
    type: 'Full-time'
  },
  'product-designer': {
    title: 'Product Designer',
    description: 'Join SetGalaxy to craft intuitive, impactful products that solve real problems. Collaborate, innovate, and design with a user-first mindset. Let\'s shape great experiences together!',
    requirements: ['4+ years of product design experience', 'Strong problem-solving and analytical skills', 'Experience with user research methodologies', 'Proficiency in design and prototyping tools', 'Understanding of agile development processes', 'Excellent communication skills'],
    responsibilities: ['Lead product design from concept to launch', 'Define user journeys and interaction flows', 'Collaborate with cross-functional teams', 'Conduct user interviews and testing', 'Create detailed design specifications'],
    location: 'Faridabad, Haryana',
    type: 'Full-time'
  },
  'database-administrator': {
    title: 'Database Administrator',
    description: 'Join SetGalaxy to manage, secure, and optimize mission-critical databases. Your expertise will drive performance, reliability, and smart data solutions.',
    requirements: ['5+ years of database administration experience', 'Expertise in MySQL, PostgreSQL, or SQL Server', 'Experience with database security and backup strategies', 'Knowledge of performance tuning and optimization', 'Understanding of cloud database services', 'Strong troubleshooting skills'],
    responsibilities: ['Monitor and maintain database systems', 'Implement backup and recovery procedures', 'Optimize database performance and queries', 'Ensure data security and compliance', 'Provide technical support and training'],
    location: 'Faridabad, Haryana',
    type: 'Full-time'
  }
}

export default function JobDetail({ params }: { params: { slug: string } }) {
  const job = jobDetails[params.slug as keyof typeof jobDetails]
  
  if (!job) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
          <div className="container-max">
            <Link href="/careers" className="text-white/80 hover:text-white mb-4 inline-block">
              ← Back to Careers
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">{job.location}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">{job.type}</span>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-dark mb-4">About the Role</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{job.description}</p>
                  
                  <h3 className="text-xl font-bold text-dark mb-4">Key Responsibilities</h3>
                  <ul className="space-y-2 mb-8">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold text-dark mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center mr-3 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg h-fit">
                <h3 className="text-xl font-bold text-dark mb-6">Apply Now</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-medium text-dark">Location:</span>
                    <p className="text-gray-600">{job.location}</p>
                  </div>
                  <div>
                    <span className="font-medium text-dark">Employment Type:</span>
                    <p className="text-gray-600">{job.type}</p>
                  </div>
                </div>
                
                <Link href="/contact" className="btn-primary w-full text-center block mb-4">
                  Apply for this Position
                </Link>
                
                <p className="text-sm text-gray-500 text-center">
                  Send your resume and portfolio to get started
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}