import React from 'react'
import { Routes } from '@/config/routes';
import Link from 'next/link';



const AboutFishing = () => {
  return (
      <div className='max-w-[1400px] m-auto py-24 px-4 grid lg:grid-cols-2 gap-8'>
        <div className='grid grid-cols-2 grid-rows-6 h-[90vh]'>
          <img className='row-span-3 object-cover w-full h-full p-2' src="/images/boats/fishing-nine.jpg" alt="" />
          <img className='row-span-2 object-cover w-full h-full p-2' src="/images/boats/fishing-six.jpg" alt="" />
          <img className='row-span-3 object-cover w-full h-full p-2' src="/images/boats/fishing-line.jpg" alt="" />
          <img className='row-span-2 object-cover w-full h-full p-2' src="/images/destinations/mtwapa.jpg" alt="" />
          
        </div>
        {/* Right Side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-6xl pb-3 md:text-7xl font-bold'>Explore the <span className='text-blue-600 font-extrabold'> Blue Waters </span> of the coast of Kenya</h3>
            <p className='text-xl py-6'>Ready to reel in the adventure of a lifetime? Explore the deep blue waters off the coast of Kenya for an epic deep sea fishing experience that promises excitement at every turn. Our experienced guides know these waters like the back of their hands, taking you to the hottest fishing spots where the big game fish luck!</p>
            
            <p className='pb-6'>From battling marlin to the acrobatic sailfish, there's no shortage of challenges waiting for you. So, gather your friends, pack your sunscreen, and get ready to make memories that will last a lifetime. Book your deep-sea fishing adventure in Kenya today and let the ocean be your playground! Kenya coastline is filled with capable boats and captains to help catch your dream fish.</p>

        </div>
        
    </div>
  )
}

export default AboutFishing