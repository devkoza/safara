'use client';

import { destinations2 } from 'public/data/destinations-2';
import { useTimeout } from '@/hooks/use-timeout';
import BlockLoader from '@/components/ui/loader/block-loader';
import Section from '@/components/ui/section';
import DestinationMasonryGrid from './destination-masonry-2';

export default function DestinationsBlock() {
  const { state } = useTimeout();

  return (
    <Section
      title="Top Destinations"
      description="Explore Kenya's beauty, Its more than just wildlife."
      className="lg:container-fluid mt-12 sm:pl-3 lg:mt-16"
      headerClassName="mb-4 md:mb-3 xl:mb-6"
    >
      {!state && <BlockLoader />}
      {state && <DestinationMasonryGrid data={destinations2} />}
    </Section>
  );
}
