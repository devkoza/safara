import React from 'react'

import SnorkelingHero from '@/components/hero/snorkelinghero'
import AboutSnorkeling from '@/components/about/about-snorkeling'
import NewBoats from '@/components/home/new-boats'
import DestinationCards from '@/components/about/destination-cards'
import WatersportsHero from '@/components/hero/water-sports-hero'
import AboutWatersports from '@/components/about/about-watersports'

const WaterSports = () => {
  return (
    <div>
      <WatersportsHero />
      <AboutWatersports />
      <NewBoats />
      <DestinationCards />

      
    
    
    </div>
  )
}

export default WaterSports