'use client';

import { } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useRouter } from '@/navigation';
import { Button } from '@/components/ui/button';
import SlideHeader from '@/components/pages/Register/SlideHeader';

export interface IFollowPeopleProps {
}

export default function FollowPeople({ }: IFollowPeopleProps) {
  const t = useTranslations();
  const router = useRouter();

  return (
    <div>
      <SlideHeader step={4} />
      <div className='mt-4'>
        <span className='font-bold text-3xl max-md:text-lg'> {t('Here are some people with similar interests')}</span>
        <div className='*:mt-4'>

          <div className='bg-foreground-1 rounded-lg p-4 flex gap-4 items-center justify-between'>
            <div className='flex-start gap-3'>
              <div className='rounded-full bg-foreground-2 p-2'>
                <Image width={500} height={500} src='/assets/images/avatar/1.jpg' alt='avatar' className='w-10 h-10 rounded-full' />
              </div>
              <div className='flex flex-col gap-2'>
                <span className='font-semibold'> {t('John Doe')}</span>
                <span className='text-white/75'> {t('Frontend Developer')}</span>
              </div>
            </div>
            <Button >{t('Follow')}</Button>
          </div>
          
        </div>

        <div className='mt-2 flex justify-end p-4'>
          <div className='*:mr-2'>
            <Button variant={'ghost'} onClick={() => router.push('/select-communities')}>{t('Back')}</Button>
            <Button onClick={() => router.push('/complete-profile')} >{t('Continue')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
