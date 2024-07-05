import React from 'react'
import { Routes } from '@/config/routes';
import Link from 'next/link';



const AboutSnorkeling = () => {
  return (
      <div className='max-w-[1400px] m-auto py-24 px-4 grid lg:grid-cols-2 gap-8'>
        <div className='grid grid-cols-2 grid-rows-6 h-[90vh]'>
          <img className='row-span-3 object-cover w-full h-full p-2' src="/images/destinations/malindi.jpg" alt="" />
          <img className='row-span-2 object-cover w-full h-full p-2' src="/images/destinations/diani.jpg" alt="" />
          <img className='row-span-3 object-cover w-full h-full p-2' src="/images/destinations/kilifi.jpg" alt="" />
          <img className='row-span-2 object-cover w-full h-full p-2' src="/images/destinations/mtwapa.jpg" alt="" />
          
        </div>
        {/* Right Side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-6xl pb-3 md:text-7xl font-bold'>Glide across the shimmering waters of the Indian Ocean</h3>
            <p className='text-xl py-6'>Picture yourself gliding effortlessly over vibrant coral gardens, as curious fish dance around you in a rainbow of colors. Whether you're a seasoned explorer or dipping your fins for the first time, Kenya's coastal charm and crystal-clear waters will leave you hooked! So, grab your mask, snorkel, and sense of adventure, and get ready to explore the aquatic wonders of Kenya like never before! Dive in, the fun awaits!</p>
            <h4 className='pb-4 text-2xl md:text-3xl font-bold'>Why go snorkeling in Kenya?</h4>
            <p className='pb-6'>Kenya has one of the richest marine life on the African continent. Each destination along the coast offers a unique experience. From the powdery white sands of Diani Beach to the remote beauty of Watamu Marine National Park, Kenya's coastline is a playground for snorkelers of all levels. So why snorkel in Kenya? Because here, beneath the waves, adventure and beauty converge, inviting you to dive in and discover the magic for yourself.</p>

        </div>
        
    </div>
  )
}

export default AboutSnorkeling