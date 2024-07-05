import React from 'react'
import Link from 'next/link'
import { Routes } from '@/config/routes';

const DestinationCards = () => {
  return (
    <div className='mb-24 mt-14'>
      <h3 className='md:px-36 font-bold text-3xl'>Other Activities you may like</h3>
      <div className='lg:container-fluid mt-12 sm:pl-3 lg:mt-16 grid md:grid-cols-4 gap-6'>
        
          {/* {Card} */}
          <div className='rounded-xl relative'>
              {/* {Overlay} */}
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white pl-5'>
                
                  <p className='font-bold text-2xl px-3 pt-8'>Deep Sea Fishing</p>
                  
                  <Link href={Routes.public.fishing}
                
                className="m-auto inline-block rounded-lg mx-2 absolute bottom-4 bg-white  px-6 py-1 text-sm font-semibold text-gray transition duration-150 hover:bg-blue-600 hover:!text-white md:ml-0 md:text-base"
                >
                Explore
                </Link>             
              </div>
              <img className='max-h-[220px] md:max-h-[280px] w-full object-cover rounded-xl' src="/images/boats/fishing-nine.jpg" alt="Fishing" />
          </div>
          <div className='rounded-xl relative'>
              {/* {Overlay} */}
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white pl-5'>
                
                  <p className='font-bold text-2xl px-3 pt-8'>Scuba Diving</p>
                  
                  <Link href={Routes.public.scuba}
                
                className="m-auto inline-block rounded-lg mx-2 absolute bottom-4 bg-white  px-6 py-1 text-sm font-semibold text-gray transition duration-150 hover:bg-blue-600 hover:!text-white md:ml-0 md:text-base"
                >
                Explore
                </Link>             
              </div>
              <img className='max-h-[220px] md:max-h-[280px] w-full object-cover rounded-xl' src="/images/boats/scuba-one.jpg" alt="Fishing" />
          </div>
          <div className='rounded-xl relative'>
              {/* {Overlay} */}
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white pl-5'>
                
                  <p className='font-bold text-2xl px-3 pt-8'>Water Sports</p>
                  
                  <Link href={Routes.public.watersports}
                
                className="m-auto inline-block rounded-lg mx-2 absolute bottom-4 bg-white  px-6 py-1 text-sm font-semibold text-gray transition duration-150 hover:bg-blue-600 hover:!text-white md:ml-0 md:text-base"
                >
                Explore
                </Link>             
              </div>
              <img className='max-h-[220px] md:max-h-[280px] w-full object-cover rounded-xl' src="/images/boats/water-sports.jpg" alt="Fishing" />
          </div>
          <div className='rounded-xl relative'>
              {/* {Overlay} */}
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white pl-5'>
                
                  <p className='font-bold text-2xl px-3 pt-8'>Boat Tours</p>
                  
                  <Link href={Routes.public.tours}
                
                className="m-auto inline-block rounded-lg mx-2 absolute bottom-4 bg-white  px-6 py-1 text-sm font-semibold text-gray transition duration-150 hover:bg-blue-600 hover:!text-white md:ml-0 md:text-base"
                >
                Explore
                </Link>             
              </div>
              <img className='max-h-[220px] md:max-h-[280px] w-full object-cover rounded-xl' src="/images/boats/boat-far.jpg" alt="Fishing" />
          </div>
      </div>
  </div>
  )
}

export default DestinationCards