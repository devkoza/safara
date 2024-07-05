'use client';

import Link from 'next/link';
import useAuth from '@/hooks/use-auth';
import { Routes } from '@/config/routes';
import ProfileMenu from '@/components/header/profile-menu';
import { useModal } from '@/components/modals/context';
import { useIsMounted } from '@/hooks/use-is-mounted';



const menuItems = [
  // {
  //   id: 1,
  //   label: 'Home',
  //   path: Routes.public.home,
  // },
  {
    id: 1,
    label: 'Custom Packages',
    path: Routes.public.addtrip,
  },
  {
    id: 2,
    label: 'About',
    path: Routes.public.about,
  },
  {
    id: 3,
    label: 'Register your Boat',
    path: Routes.public.addListing,
  },
];

export default function Menu() {
  const { openModal } = useModal();
  const { isAuthorized } = useAuth();
  const mounted = useIsMounted();

  // Debug: Log menuItems to check for path issues
  console.log('Menu Items:', menuItems);

  return (
    <nav className="primary-nav hidden items-center justify-between md:flex">
      <ul className="hidden flex-wrap md:flex">
        {menuItems.map((item) => {
          if (!item.path) {
            console.error('Menu item is missing path:', item);
          }
          return (
            <li key={item.id}>
              <Link href={item.path || '#'} className="px-5 capitalize text-white">
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {mounted ? (
        <>
          {isAuthorized ? (
            <div className="ml-7 flex justify-end">
              <ProfileMenu className="hidden md:block" />
            </div>
          ) : (
            <Link
              href={Routes.auth.signIn}
              
              className="m-auto inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition duration-150 hover:bg-orange-600 hover:!text-white md:ml-0 md:text-base"
            >
              Login
            </Link>
                )}
        </>
      ) : null}
    </nav>
  );
}
