'use client';

import { useThemeMode, ThemeMode } from 'flowbite-react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline, IoMoonOutline, IoLogOutOutline } from 'react-icons/io5';
import { Skeleton } from '@mui/material';

import { getImageURL } from '@/lib/utils';

export default function ProfileHeader() {
  const { toggleMode, mode } = useThemeMode();
  const [modeTheme, setModeTheme] = useState<ThemeMode>('dark');
  const { data: session } = useSession();

  useEffect(() => {
    setModeTheme(mode);
  }, [mode]);

  console.log('session', session?.user?.id);

  return (
    <>
      {!session ? (
        <>
          <Skeleton variant='circular' className='sm:w-9 sm:h-9 w-7 h-7 bg-foreground-1' />
        </>
      ) : (
        <>
          <div className='rounded-full relative bg-foreground-1 cursor-pointer shrink-0'>
            <Image
              src={getImageURL(session?.user?.image) || '/images/home/avatar-2.jpg'}
              alt=''
              className='sm:w-9 sm:h-9 w-7 h-7 rounded-full shadow shrink-0 object-cover'
              width={50}
              height={50}
            />
          </div>
          <div
            className='hidden bg-foreground-2 rounded-lg drop-shadow-xl w-64 border2'
            data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
            <Link href='/profile/me'>
              <div className='p-4 py-5 flex items-center gap-4'>
                <Image
                  src={getImageURL(session?.user?.image) || '/images/home/avatar-2.jpg'}
                  alt=''
                  className='w-10 h-10 rounded-full shadow object-cover'
                  width={50}
                  height={50}
                />
                <div className='flex-1'>
                  <h4 className='text-sm font-medium text-text-1'>{session?.user?.name || 'User Name'}</h4>
                  <div className='text-sm mt-1 text-blue-600 font-light dark:text-white/70'>
                    {session?.user?.email || '@username'}
                  </div>
                </div>
              </div>
            </Link>

            <hr className='border-border-1' />

            <nav className='p-2 text-sm text-black font-normal dark:text-white'>
              <Link href='/profile/me'>
                <div className='flex items-center gap-2.5 hover:bg-hover-2 p-2 px-2.5 rounded-md'>
                  <CgProfile className='size-6' />
                  My Profile
                </div>
              </Link>
              <Link href='/edit-profile'>
                <div className='flex items-center gap-2.5 hover:bg-hover-2 p-2 px-2.5 rounded-md'>
                  <IoSettingsOutline className='size-6' />
                  Account Settings
                </div>
              </Link>
              <button type='button' className='w-full'>
                <div className='flex items-center gap-2.5 hover:bg-hover-2 p-2 px-2.5 rounded-md'>
                  <IoMoonOutline className='size-6' />
                  Night mode
                  <label className='switch cursor-pointer ml-auto'>
                    <input
                      type='checkbox'
                      checked={modeTheme === 'dark' ? true : false}
                      onChange={toggleMode}
                    />
                    <span className='switch-button !relative'></span>
                  </label>
                </div>
              </button>
              <hr className='-mx-2 my-2 border-border-1' />
              <button type='button' className='w-full' onClick={async () => await signOut()}>
                <div className='flex items-center gap-2.5 hover:bg-hover-2 p-2 px-2.5 rounded-md'>
                  <IoLogOutOutline className='size-6' />
                  Log Out
                </div>
              </button>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
