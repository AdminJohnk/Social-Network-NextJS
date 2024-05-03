'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { IoImage, IoTimeOutline } from 'react-icons/io5';

interface ICreateStoryProps {
  handleClose: () => void;
}

export default function CreateStory({}: ICreateStoryProps) {
  const t = useTranslations();

  return (
    <div className='relative overflow-hidden mx-auto bg-background-1 shadow-xl rounded-lg md:w-[600px] w-full'>
      <div className='text-center py-3 border-b border-border-1'>
        <h2 className='text-sm font-medium'> {t('Create Story')} </h2>
      </div>

      <div className='space-y-5 mt-3 p-2'>
        <div>
          <input
            type='text'
            className='w-full mt-3 border-transparent bg-foreground-1 rounded-xl placeholder:text-text-2'
            placeholder={t('What do you have in mind?')}
          />
        </div>

        <div>
          <div className="w-full h-72 relative border-border-1 rounded-lg overflow-hidden bg-[url('/images/ad_pattern.png')] bg-repeat">
            <label
              htmlFor='createStatusUrl'
              className='flex flex-col justify-center items-center absolute -translate-x-1/2 left-1/2 bottom-0 z-10 w-full pb-6 pt-10 cursor-pointer bg-gradient-to-t from-gray-700/60'>
              <input id='createStatusUrl' type='file' className='hidden' />
              <IoImage className='text-3xl text-teal-600' />
              <span className='text-white mt-2'>{t('Upload image')}</span>
            </label>

            <Image
              id='createStatusImage'
              src='/'
              alt='Uploaded Image'
              style={{ display: 'none' }}
              className='w-full h-full absolute object-cover'
              height={1000}
              width={1000}
            />
          </div>
        </div>

        <div className='flex justify-between items-center p-5'>
          <div className='flex items-start gap-2'>
            <IoTimeOutline className='text-3xl text-sky-600 rounded-full bg-blue-50 dark:bg-transparent' />
            <p className='text-sm text-text-3 font-medium'>
              {t('Your story will be available')} <br /> {t('for')}
              <span className='font-semibold text-text-2'> {t('24 Hours')}</span>
            </p>
          </div>

          <Button type='button' className='lg:px-6 text-white max-md:flex-1'>
            {t('Create')} <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
