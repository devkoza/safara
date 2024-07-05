import React from 'react'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { AboutTabs } from '../tabs/tabs'
import InstructionBlock from '../home/instruction-block'
import SubscriptionBlock from '../subscription/subscription-block'



const about = [
  {
    name: 'Rent a Boat',
    posts: [
      {
        id: 1,
        title: 'Select your destination',
        description: 'Explore The Different Destinations Along Kenya’s Beautiful Coastline, Each Location Offers a Variety of Different Excursions.',
      },
      {
        id: 2,
        title: 'Select your ideal Boat',
        description: 'Browse Our Variety of Boats and Activities and Select the One That Appeals to You the Most.',
      },
      {
        id: 3,
        title: 'Book/Request Booking',
        description: 'Depending on availability, some boats will have “Request a booking”. Once you have filled the form you will get a response within 48HRs.',
      },
      {
        id: 4,
        title: 'Confirmation',
        description: 'Once The Booking Has Been Processed, You Will Receive an Email Confirmation. Contacts Of Boat Owners Will Be Given to You 48hrs Before Excursion.',
      },

     
    ],
  },
  {
    name: 'Register your Boat',
    posts: [
      {
        id: 1,
        title: 'Create a account',
        description: 'Open a free account and fill in the necessary details.',
      },
      {
        id: 2,
        title: 'Fill in the form',
        description: 'This form will enable us to create your profile and your back end dashboard where you can track all your bookings.',
      },
      {
        id: 3,
        title: 'Submit your Photos',
        description: 'We will require you to upload images that best depict your boat inside and out. If the images do not meet our standard, we will arrange for a photographer to come.',
      },
      {
        id: 4,
        title: 'Submit necessary Licenses ',
        description: 'As part of our rules and regulations all boats must have all the required documents depending on the activity that your boat offers. Once submitted our team will double check the information before accepting you on our platform (this may take upto 3-5 business days) ',
      },
      {
        id: 5,
        title: 'Enjoy easy access to potential clients ',
        description: 'Once everything is checked, you will now be able to use Ocean Safaris services giving you comprehensive overview off all bookings coming from the platform.',
      },
      
    ],
  },
  
]


const AboutUs = () => {
    return (
      <>
        <div className='max-w-[1700px] h-[500px] bg-slate-50 mx-auto my-20  pt-16 lg:mb-[20%] md:mb-[35%] px-6 grid lg:grid-cols-3 gap-6'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
          <h3 className='text-3xl font-bold'>Who are we?</h3>
          <p className='text-lg pt-4'>Ocean Safaris is an online booking platform for boats along the coast of Kenya. Our mission is to make water sports activities in Kenya easily accessible, while supporting local boat owners. We offer different boats and various activities to give you the best experience Kenya has.  </p>
          <p className='pt-4'>We believe safety is of the most importance, which is why every boat registered has been checked by our team, all captains are licensed, and all necessary safety equipment is on board. Book now and Explore Kenya in more ways than just our wildlife.</p>
          </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
          <img className='object-cover w-full h-full rounded-lg' src="/images/destinations/diani.jpg" alt="/" />
          <img className='row-span-2 object-cover w-full h-full rounded-lg' src="/images/destinations/malindi.jpg" alt="/" />
          <img className='object-cover w-full h-full rounded-lg' src="/images/destinations/kilifi.jpg" alt="/" />
        </div>

        <div>
          <div className='max-w-[1780px] mt-8 justify-between'>
          </div>
        </div>
        </div>
        <div className=' mb-12 '> 
          <InstructionBlock />
          <SubscriptionBlock />
          
        </div>
      </>
  )
}

export default AboutUs