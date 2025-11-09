'use client'

import { useEffect } from 'react'

export default function WowInit() {
  useEffect(() => {
    const initWow = async () => {
      const { WOW } = await import('wowjs')
      const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
      })
      wow.init()
    }
    
    initWow()
  }, [])

  return null
}