"use client";

import { useState } from "react";
import { Tab, TabGroup, TabList } from '@headlessui/react';
import { TabPanel, TabItem, TabPanels } from "../ui/tab";

    
export const AboutTabs = () => {

  return (
    <TabGroup>
    
      <Tab>
        <TabPanels >
            <TabList >
                <TabItem>1</TabItem>
                <TabItem>2</TabItem>
            </TabList>
        </TabPanels>
             
     </Tab>
     </TabGroup>
  )
}
