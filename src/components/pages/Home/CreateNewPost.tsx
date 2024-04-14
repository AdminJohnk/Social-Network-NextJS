'use client';

import PostPrivacy from '@/components/shared/PostPrivacy';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import {
  IoEllipsisHorizontal,
  IoHappy,
  IoImage,
  IoLocation,
  IoVideocam
} from 'react-icons/io5';

export interface ICreateNewPostProps {}

export default function CreateNewPost(props: ICreateNewPostProps) {
  const t = useTranslations();

  const [privacy, setPrivacy] = useState('public');

  return (
    <div className='hidden lg:p-20' id='create-status' data-uk-modal>
      <div className='uk-modal-dialog tt relative overflow-hidden mx-auto bg-background-1 shadow-xl rounded-lg md:w-[520px] w-full'>
        <div className='text-center py-4 border-b mb-0 border-border-1'>
          <h2 className='text-sm font-medium text-text-1'>
            {' '}
            {t('Create Status')}{' '}
          </h2>

          {/* <!-- close button --> */}
          <button
            type='button'
            className='button-icon absolute top-0 right-0 m-2.5 uk-modal-close'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </button>
        </div>

        <div className='space-y-5 mt-3 p-2'>
          <textarea
            className='w-full resize-none !text-text-1 placeholder:!text-text-2 !bg-background-1 !border-transparent focus:!border-transparent focus:!ring-transparent !font-normal !text-xl'
            rows={6}
            placeholder={t('What do you have in mind?')}
          />
        </div>

        <div className='flex items-center gap-2 text-sm py-2 px-4 font-medium flex-wrap'>
          <button
            type='button'
            className='flex items-center gap-1.5 bg-sky-50 text-sky-600 rounded-full py-1 px-2 border-2 border-sky-100 dark:bg-sky-950 dark:border-sky-900'
          >
            <IoImage className='text-base' />
            {t('Image')}
          </button>
          <button
            type='button'
            className='flex items-center gap-1.5 bg-teal-50 text-teal-600 rounded-full py-1 px-2 border-2 border-teal-100 dark:bg-teal-950 dark:border-teal-900'
          >
            <IoVideocam className='text-base' />
            {t('Video')}
          </button>
          <button
            type='button'
            className='flex items-center gap-1.5 bg-orange-50 text-orange-600 rounded-full py-1 px-2 border-2 border-orange-100 dark:bg-yellow-950 dark:border-yellow-900'
          >
            <IoHappy className='text-base' />
            {t('Feeling')}
          </button>
          <button
            type='button'
            className='flex items-center gap-1.5 bg-red-50 text-red-600 rounded-full py-1 px-2 border-2 border-rose-100 dark:bg-rose-950 dark:border-rose-900'
          >
            <IoLocation className='text-base' />
            {t('Check in')}
          </button>
          <button
            type='button'
            className='grid place-items-center w-8 h-8 text-xl rounded-full hover:bg-hover-1'
          >
            <IoEllipsisHorizontal />
          </button>
        </div>

        <div className='p-5 flex justify-between items-center'>
          <PostPrivacy setPrivacy={setPrivacy} />
          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white py-2 px-12 text-[14px]'
            >
              {t('Create')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
