interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-30 h-20',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex items-center ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="50 80 410 100" className={sizeClasses[size]}>
        <circle cx="95" cy="125" r="38" stroke="#A557A5" strokeWidth="3" fill="none"/>
        <circle cx="95" cy="125" r="18" stroke="#53A3A5" strokeWidth="3" fill="none"/>
        <text x="155" y="125" fontFamily="Inter, sans-serif" fontSize="38" fontWeight="700" fill="#A557A5" dominantBaseline="middle">SET</text>
        <text x="225" y="125" fontFamily="Inter, sans-serif" fontSize="38" fontWeight="700" fill="#53A3A5" dominantBaseline="middle">galaxy</text>
        <text x="157" y="160" fontFamily="Inter, sans-serif" fontSize="14" fill="#111" letterSpacing="1">INNOVATION AND CREATION</text>
      </svg>

    </div>
  )
}