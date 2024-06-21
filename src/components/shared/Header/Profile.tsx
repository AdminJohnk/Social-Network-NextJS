'use client';

import { useThemeMode, ThemeMode } from 'flowbite-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { Link } from '@/navigation';
import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline, IoMoonOutline, IoLogOutOutline } from 'react-icons/io5';
import { Skeleton } from '@mui/material';
import { useTranslations } from 'next-intl';

import { getImageURL } from '@/lib/utils';
import { useCurrentUserInfo } from '@/hooks/query';
import { FaUserSecret } from 'react-icons/fa';

export default function ProfileHeader() {
  const { toggleMode, mode } = useThemeMode();
  const [modeTheme, setModeTheme] = useState<ThemeMode>('dark');
  const t = useTranslations();

  const { currentUserInfo, isLoadingCurrentUserInfo } = useCurrentUserInfo();

  useEffect(() => {
    setModeTheme(mode);
  }, [mode]);

  const closeProfileDropdown = () => {
    UIkit.drop('#profile-dropdown').hide();
  };

  return (
    <>
      {isLoadingCurrentUserInfo ? (
        <Skeleton variant='circular' className='h-7 w-7 !bg-foreground-1 sm:h-9 sm:w-9' />
      ) : (
        <>
          <div
            className='relative shrink-0 cursor-pointer rounded-full bg-foreground-1'
            data-uk-tooltip={`title: ${t('Account')}; pos: bottom; offset:6; delay: 300`}>
            <Image
              src={getImageURL(currentUserInfo.user_image) || '/images/home/avatar-2.jpg'}
              alt=''
              className='h-7 w-7 shrink-0 rounded-full object-cover shadow sm:h-9 sm:w-9'
              width={200}
              height={200}
            />
          </div>
          <div
            id='profile-dropdown'
            className='hidden w-64 rounded-lg border-border-1 bg-foreground-2 drop-shadow-xl'
            data-uk-drop='offset:10;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right'>
            <Link
              href={`/profile/${currentUserInfo._id}`}
              className='relative flex items-center gap-4 p-4 py-5'
              onClick={closeProfileDropdown}>
              <Image
                src={getImageURL(currentUserInfo.user_image) || '/images/home/avatar-2.jpg'}
                alt=''
                className='h-10 w-10 rounded-full object-cover shadow'
                width={200}
                height={200}
              />
              <div className='flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>
                <h4 className='truncate text-sm font-medium text-text-1'>
                  {currentUserInfo.name || 'User Name'}
                </h4>
                <h6 className='mt-1 truncate text-sm font-light text-blue-600 dark:text-white/70'>
                  {currentUserInfo.email || '@username'}
                </h6>
              </div>
            </Link>

            {currentUserInfo.role.includes('0101') && (
              <>
                <hr className='border-border-1' />

                <nav className='p-2 text-sm font-normal text-text-1'>
                  <Link href={`/admin`}>
                    <div
                      className='flex items-center gap-2.5 rounded-md p-2 px-2.5 hover:bg-hover-1'
                      onClick={closeProfileDropdown}>
                      <FaUserSecret className='size-6' />
                      {t('Admin Dashboard')}
                    </div>
                  </Link>
                </nav>
              </>
            )}

            <hr className='border-border-1' />

            <nav className='p-2 text-sm font-normal text-text-1'>
              <Link href={`/profile/${currentUserInfo._id}`}>
                <div
                  className='flex items-center gap-2.5 rounded-md p-2 px-2.5 hover:bg-hover-1'
                  onClick={closeProfileDropdown}>
                  <CgProfile className='size-6' />
                  {t('My Profile')}
                </div>
              </Link>
              <Link href='/edit-profile'>
                <div
                  className='flex items-center gap-2.5 rounded-md p-2 px-2.5 hover:bg-hover-1'
                  onClick={closeProfileDropdown}>
                  <IoSettingsOutline className='size-6' />
                  {t('Account Settings')}
                </div>
              </Link>
              <button type='button' className='w-full'>
                <div className='flex items-center gap-2.5 rounded-md p-2 px-2.5 hover:bg-hover-1'>
                  <IoMoonOutline className='size-6' />
                  {t('Night Mode')}
                  <label className='switch ml-auto cursor-pointer'>
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
              <button type='button' className='w-full' onClick={() => signOut()}>
                <div className='flex items-center gap-2.5 rounded-md p-2 px-2.5 hover:bg-hover-1'>
                  <IoLogOutOutline className='size-6' />
                  {t('Log Out')}
                </div>
              </button>
            </nav>

            <div className='absolute -top-1.5 right-3 h-3 w-3 rotate-45 border-l border-t bg-foreground-2 dark:border-transparent max-md:hidden'></div>
          </div>
        </>
      )}
    </>
  );
}
