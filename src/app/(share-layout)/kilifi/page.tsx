import { vendorData } from 'public/data/listing-details';
import { activityData } from 'public/data/listing-details-new';
import NewBoats from '@/components/home/new-boats';
import GallaryBlockNew from '@/components/listing-details/related-listings/gallary-block-new';
import InstructionBlock from '@/components/home/instruction-block';
import PromotionalBlock from '@/components/home/promotional-block';

export default function ListingDetailsPageNew({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <>
      <div className="container-fluid w-full 3xl:!px-12">
        <GallaryBlockNew images={activityData.gallery} />
        

      </div>
    </>
  );
}
