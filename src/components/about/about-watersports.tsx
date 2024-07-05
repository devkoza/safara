import React from 'react'
import { Routes } from '@/config/routes';
import Link from 'next/link';



const AboutWatersports = () => {
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
            <p className='text-xl py-6'>Experience an exhilarating world of water sports along the stunning coastline of Kenya with our diverse array of aquatic adventures. From the adrenaline rush of jet skiing to the tranquility of paddle boarding and the thrill of kite surfing, our selection of activities should cater to your every need. Glide across the shimmering waters of the Indian Ocean, soaking in the breathtaking coastal scenery and feeling the invigorating sea breeze against your skin. Boats listed are professionals and have plenty of experience in this field. </p>
            
        </div>
        
    </div>
  )
}

export default AboutWatersports