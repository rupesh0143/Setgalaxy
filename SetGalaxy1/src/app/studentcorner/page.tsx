import { Metadata } from 'next'
import StudentCornerContent from './StudentCornerContent'

export const metadata: Metadata = {
  title: 'Student Corner – Tech Courses for Class 5–12 | SetGalaxy',
  description: 'Industry-level tech courses for school students (Class 5–12). Learn Computer Basics, Python, Web Development, C/C++, Data Analytics, and AI/ML with live classes, hands-on projects, and certified mentors.',
  keywords: 'tech courses for school students, coding classes for kids, python for class 9, web development course class 10, AI course class 12, computer basics class 5, kids coding India, school tech education',
}

export default function StudentCorner() {
  return <StudentCornerContent />
}
