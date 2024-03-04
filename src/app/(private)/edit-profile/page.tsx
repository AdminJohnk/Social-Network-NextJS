'use client';

import { Button } from '@/components/ui/button';
import * as React from 'react';
import { IoArrowBack, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';

import getImageURL from '@/lib/utils';

export interface IEditProfileProps { }

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function EditProfile(props: IEditProfileProps) {
  const { data: session } = useSession();

  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='flex flex-1 *:w-full *:max-w-2xl flex-col items-center gap-10 px-5 py-10 md:p-14 custom-scrollbar-bg overflow-scroll'>
      <div className=''>
        <Button variant='ghost'>
          <IoArrowBack size={18} />
          <span className='small-medium lg:base-medium'>Back</span>
        </Button>
      </div>
      <div className='rounded-xl border border-slate-200 bg-foreground-1 shadow-sm dark:border-slate-700 dark:bg-dark-1'>
        <div className='flex space-y-4'>
          <div className='flex-start gap-4 p-8'>
            <Avatar className='size-20' src={getImageURL(session?.user.image!)} />
            <div className='flex flex-col'>
              <span className='h5-bold mb-2'>{session?.user.name}</span>
              <span className='small-regular text-text-2'>@{session?.user.name}</span>
            </div>
          </div>
        </div>

        <hr className='m-0 border-t border-gray-100 dark:border-slate-700' />

        <div className='relative -mb-px px-2' data-uk-slider='finite: true' tabIndex={-1}>
          <nav className='uk-slider-container overflow-hidden rounded-xl pt-2'>
            <ul
              className='uk-slider-items w-[calc(100%+10px)] text-sm font-semibold capitalize text-gray-500 dark:text-white'
              data-uk-switcher='connect: #setting_tab ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium'>
              <li className='w-auto pr-2.5'>
                <a className='inline-block select-none border-b-2 border-transparent p-4 pt-2 text-white transition-colors duration-300 ease-in-out aria-selected:border-blue-500 aria-selected:text-blue-500'>
                  General
                </a>
              </li>
              <li className='w-auto pr-2.5'>
                <a className='inline-block select-none border-b-2 border-transparent p-4 pt-2 text-white transition-colors duration-300 ease-in-out aria-selected:border-blue-500 aria-selected:text-blue-500'>
                  Social links
                </a>
              </li>
              <li className='w-auto pr-2.5'>
                <a className='inline-block select-none border-b-2 border-transparent p-4 pt-2 text-white transition-colors duration-300 ease-in-out aria-selected:border-blue-500 aria-selected:text-blue-500'>
                  Expertise
                </a>
              </li>
              <li className='w-auto pr-2.5'>
                <a className='inline-block select-none border-b-2 border-transparent p-4 pt-2 text-white transition-colors duration-300 ease-in-out aria-selected:border-blue-500 aria-selected:text-blue-500'>
                  Experience
                </a>
              </li>
              <li className='w-auto pr-2.5'>
                <a className='inline-block select-none border-b-2 border-transparent p-4 pt-2 text-white transition-colors duration-300 ease-in-out aria-selected:border-blue-500 aria-selected:text-blue-500'>
                  Repository
                </a>
              </li>
              <li className='w-auto pr-2.5'>
                <a className='inline-block select-none border-b-2 border-transparent p-4 pt-2 text-white transition-colors duration-300 ease-in-out aria-selected:border-blue-500 aria-selected:text-blue-500'>
                  Password
                </a>
              </li>
            </ul>
          </nav>

          <a
            className='absolute -translate-y-1/2 top-1/2 left-0 flex items-center w-20 h-full p-2.5 justify-start rounded-xl bg-gradient-to-r from-white via-white dark:from-dark-1 dark:via-dark-1'
            data-uk-slider-item='previous'>
            <IoChevronBack className='text-2xl ml-1' />
          </a>
          <a
            className='absolute right-0 -translate-y-1/2 top-1/2 flex items-center w-20 h-full p-2.5 justify-end rounded-xl bg-gradient-to-l from-white via-white dark:from-dark-1 dark:via-dark-1'
            data-uk-slider-item='next'>
            <IoChevronForward className='text-2xl mr-1' />
          </a>
        </div>
      </div>

      <div className='mb-20 mt-6 text-sm font-medium text-gray-600 dark:text-white/80'>
        <div
          id='setting_tab'
          className='uk-switcher overflow-hidden rounded-xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-dark-1 md:px-20 md:py-12'>
          <div>
            123456123456123456123456123456
            <div>123456</div>
            <div>234567</div>
            <div>345678</div>
            <div>456789</div>
            <div>567890</div>
            <div>678901</div>
          </div>
          <div>
            234567234567234567234567
            <div>123456</div>
            <div>234567</div>
            <div>345678</div>
            <div>456789</div>
            <div>567890</div>
            <div>678901</div>
          </div>
          <div>
            345678345678345678345678345678
            <div>123456</div>
            <div>234567</div>
            <div>345678</div>
            <div>456789</div>
            <div>567890</div>
            <div>678901</div>
          </div>
          <div>
            456789456789456789456789
            <div>123456</div>
            <div>234567</div>
            <div>345678</div>
            <div>456789</div>
            <div>567890</div>
            <div>678901</div>
          </div>
          <div>
            567890567890567890567890567890
            <div>123456</div>
            <div>234567</div>
            <div>345678</div>
            <div>456789</div>
            <div>567890</div>
            <div>678901</div>
          </div>
          <div>
            678901678901678901678901678901
            <div>123456</div>
            <div>234567</div>
            <div>345678</div>
            <div>456789</div>
            <div>567890</div>
            <div>678901</div>
          </div>
        </div>
      </div>
    </div>
  );
}
