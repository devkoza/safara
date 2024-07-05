import React from 'react'


import NewBoats from '@/components/home/new-boats'
import DestinationCards from '@/components/about/destination-cards'
import ScubaHero from '@/components/hero/scuba-hero'
import AboutScuba from '@/components/about/about-scuba'

const Scuba = () => {
  return (
    <div>
      <ScubaHero />
      <AboutScuba />
      <NewBoats />
      <DestinationCards />

      
    
    
    </div>
  )
}

export default Scuba