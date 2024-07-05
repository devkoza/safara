import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'



const HowitWorks = () => {
  return (
    <div className='max-w-[1780px] mt-8 justify-between'>
        <Tab>
        <TabList>
            <Tab className="data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:underline">Rent a Boat</Tab>
            <Tab className="data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:underline">Register your Boat</Tab>

        </TabList>
        <TabPanels>
            <TabPanel>Rent a Boat</TabPanel>
            <TabPanel>Register your Boat</TabPanel>
         </TabPanels>
        </Tab>
    </div>
  )
}

export default HowitWorks