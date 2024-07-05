import PricingBlock from '@/components/pricing/pricing-block';
import PricingSteps from '@/components/pricing/pricing-steps';
import Faqs from '@/components/pricing/faQs';
import DestinationsBlock2 from '@/components/home/destination-block/destinations-2-block';

export default function page() {
  return (
    <div>
      <DestinationsBlock2 />
      <PricingBlock />
      <Faqs />
      <PricingSteps />

      
    </div>
  );
}

