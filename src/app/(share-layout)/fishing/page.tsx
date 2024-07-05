import React from 'react'

import NewBoats from '@/components/home/new-boats'
import DestinationCards from '@/components/about/destination-cards'
import FishingHero from '@/components/hero/fishing-hero'
import AboutFishing from '@/components/about/about-fishing'

const Fishing = () => {
  return (
    <div>
      <FishingHero />
      <AboutFishing />
      <NewBoats />
      <DestinationCards />

      
    
    
    </div>
  )
}

export default Fishing