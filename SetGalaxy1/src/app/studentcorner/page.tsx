import { Metadata } from 'next'
import StudentCornerContent from './StudentCornerContent'

export const metadata: Metadata = {
  title: 'Student Corner - Entry Level Jobs & Internships | SetGalaxy',
  description: 'Launch your career with SetGalaxy! Get internships, interview preparation, programming language training, and job portal guidance for college students and graduates.',
  keywords: 'entry level jobs, internships for students, college graduates jobs, interview preparation, programming languages learning, job portal guidance, fresher jobs, campus placement',
}

export default function StudentCorner() {
  return <StudentCornerContent />
}
