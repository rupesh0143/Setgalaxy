interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color?: 'primary' | 'secondary'
}

export default function ServiceCard({ title, description, icon, color = 'primary' }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className={`w-16 h-16 bg-${color} rounded-lg flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}