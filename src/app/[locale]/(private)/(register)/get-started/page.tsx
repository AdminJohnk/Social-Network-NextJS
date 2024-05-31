'use client';

import { } from 'react';
import { useTranslations } from 'next-intl';

import SlideHeader from '@/components/pages/Register/SlideHeader';
import { Radio } from 'flowbite-react';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaBriefcase } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useRouter } from '@/navigation';

export default function GetStarted() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div>
      <SlideHeader step={1} />
      <div className='mt-4'>
        <h1 className='text-2xl max-md:text-lg font-semibold'>{t('Welcome to the community')}</h1>
        <p className='mt-2 text-text-1'>
          {t('Let’s get started by creating your account')}. {t('It only takes a few minutes')}.
        </p>

        <div className='mt-6'>
          <span className='font-bold text-3xl max-md:text-lg'> {t('How would you like to get started?')}</span>
          <div className='*:mt-3'>
            <div className='bg-foreground-1 rounded-lg px-4 py-6 flex gap-4 items-center'>
              <div>
                <Radio name='get_started' value={''} defaultChecked />
              </div>
              <div className=' rounded-full bg-foreground-2 p-2'>
                <FaPeopleGroup className='text-2xl text-blue-1' />
              </div>
              <div className='flex flex-col gap-3'>
                <span className='font-bold text-lg'> {t('Connect with developers and the community')}</span>
                <span className='text-lg max-md:text-lg text-white/75'> {t('Explore communities and build your developer network')}.</span>
              </div>
            </div>

            <div className='bg-foreground-1 rounded-lg px-4 py-6 flex gap-4 items-center'>
              <div>
                <Radio name='get_started' value={''} />
              </div>
              <div className=' rounded-full bg-foreground-2 p-2'>
                <FaBriefcase className='text-2xl text-green-1' />
              </div>
              <div className='flex flex-col gap-3'>
                <span className='font-bold text-lg'> {t('Connect with developers and the community')}</span>
                <span className='text-lg max-md:text-lg text-white/75'> {t('Set preferences and explorer jobs tailored for you')}.</span>
              </div>
            </div>
          </div>

          <div className='mt-2 flex justify-end p-4'>
            <Button onClick={() => router.push('/select-interest')}>{t('Continue')}</Button>
          </div>
        </div>
      </div>
    </div >
  );
}
