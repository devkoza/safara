'use client';

import { Routes } from '@/config/routes';
import { useRouter } from 'next/navigation';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';

export default function StepsEnd() {
  const router = useRouter();

  return (
    <>
      <div className="flex w-full max-w-[648px] flex-col items-center justify-center gap-6">
        <CheckCircleIcon className="h-auto w-24 text-gray-dark/40" />
        <Text tag="h5" className="text-gray-dark">
          Trip Booked Successfully
        </Text>
        <Button
          size="lg"
          className="tracking-wider"
          onClick={() => router.push(Routes.public.home)}
        >
          Home
        </Button>
      </div>
      
    </>
  );
}
