'use client';

import { useThemeMode } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileHeader() {
  const { toggleMode, mode } = useThemeMode();

  return (
    <>
      <div className='rounded-full relative bg-foreground-1 cursor-pointer shrink-0'>
        <Image
          src='/images/home/avatar-2.jpg'
          alt=''
          className='sm:w-9 sm:h-9 w-7 h-7 rounded-full shadow shrink-0'
          width={50}
          height={50}
        />
      </div>
      <div
        className='hidden bg-white rounded-lg drop-shadow-xl dark:bg-slate-700 w-64 border2'
        data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
        <Link href=''>
          <div className='p-4 py-5 flex items-center gap-4'>
            <Image
              src='/images/home/avatar-2.jpg'
              alt=''
              className='w-10 h-10 rounded-full shadow'
              width={50}
              height={50}
            />
            <div className='flex-1'>
              <h4 className='text-sm font-medium text-text-1'>Stell johnson</h4>
              <div className='text-sm mt-1 text-blue-600 font-light dark:text-white/70'>@mohnson</div>
            </div>
          </div>
        </Link>

        <hr />

        <nav className='p-2 text-sm text-black font-normal dark:text-white'>
          <Link href=''>
            <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md text-blue-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'></path>
              </svg>
              Upgrade To Premium
            </div>
          </Link>
          <Link href=''>
            <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'></path>
              </svg>
              My Billing
            </div>
          </Link>
          <Link href=''>
            <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46'></path>
              </svg>
              Advancing
            </div>
          </Link>
          <Link href=''>
            <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'></path>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
              </svg>
              My Account
            </div>
          </Link>
          <button type='button' className='w-full'>
            <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'></path>
              </svg>
              Night mode
              <label className='switch cursor-pointer ml-auto'>
                <input type='checkbox' checked={mode === 'dark' ? true : false} onChange={toggleMode} />
                <span className='switch-button !relative'></span>
              </label>
            </div>
          </button>
          <hr className='-mx-2 my-2/60' />
          <Link href=''>
            <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md'>
              <svg
                className='w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'></path>
              </svg>
              Log Out
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
}
