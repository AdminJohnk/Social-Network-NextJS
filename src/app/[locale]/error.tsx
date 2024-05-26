'use client';

import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import LoadingLogo from '@/components/shared/LoadingLogo';
import { Button } from '@/components/ui/button';
import { ErrorResponse } from '@/types';

export default function Error({
  error,
  reset
}: {
  error: ErrorResponse & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations();
  if (error?.response?.status === 401) {
    signOut();
    return <LoadingLogo />;
  }

  return (
    <div className='h-dvh w-full overflow-hidden flex-center'>
      <div className='lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 w-2/3 flex-center flex-col-reverse lg:flex-row md:gap-28 gap-16'>
        <div className='w-full xl:w-1/2 relative'>
          <div className='relative'>
            <div className='absolute'>
              <h1 className='my-2 text-text-1 font-bold text-2xl'>{t('Oops! Something went wrong!')}</h1>
              <p className='my-2 text-text-1'>
                {t('Sorry about that! Please try again or go back to the previous page')}.
              </p>
              <Button type='button' onClick={reset}>
                {t('Try again')}
              </Button>
            </div>
          </div>
        </div>
        <Image
          height={5000}
          width={5000}
          alt='image'
          src='https://i.ibb.co/ck1SGFJ/Group.png'
          className='size-auto'
        />
      </div>
    </div>
  );
}
