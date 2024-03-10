'use client';

import Link from 'next/link';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import MainNavigate from './MainNavigate';
import Shortcuts from './Shortcuts';
import SubNavigate from './SubNavigate';

export default function SideBar() {
  return (
    <div
      id='site_sidebar'
      className='fixed top-0 left-0 z-[99] pt-[--m-top] overflow-hidden transition-transform xl:duration-500 max-lg:w-full max-lg:-translate-x-full'>
      <div className='p-2 max-lg:bg-background-1 shadow-sm 2xl:w-72 sm:w-64 w-[80%] h-[calc(100vh-64px)] relative z-30 max-lg:border-r dark:border-border-1'>
        <SimpleBar>
          <MainNavigate />
          <Shortcuts />
          <SubNavigate />

          <div className='text-xs font-medium flex flex-wrap gap-2 gap-y-0.5 p-2 mt-2'>
            <Link href='#' className='hover:underline'>
              About
            </Link>
            <Link href='#' className='hover:underline'>
              Blog
            </Link>
            <Link href='#' className='hover:underline'>
              Careers
            </Link>
            <Link href='#' className='hover:underline'>
              Support
            </Link>
            <Link href='#' className='hover:underline'>
              Contact Us
            </Link>
            <Link href='#' className='hover:underline'>
              Developer
            </Link>
          </div>
        </SimpleBar>
      </div>
    </div>
  );
}
