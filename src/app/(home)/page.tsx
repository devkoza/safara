import DestinationBlock from '@/components/home/destination-block/destination-block';
import SubscriptionBlock from '@/components/subscription/subscription-block';
import InstructionBlock from '@/components/home/instruction-block';
import PromotionalBlock from '@/components/home/promotional-block';
import HeroBanner from '@/components/home/hero-banner';
import NewBoats from '@/components/home/new-boats';
import ActivityBlock from '@/components/home/destination-block/oactivity-block';

export default async function HomePage() {
 
  return (
    <>
      <HeroBanner />
      <DestinationBlock />
      <InstructionBlock />
      <ActivityBlock />
      <PromotionalBlock />
      <NewBoats />
      <SubscriptionBlock sectionClassName="4xl:!px-12" />
    
    </>
  );
}
