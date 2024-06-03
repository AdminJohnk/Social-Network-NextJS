'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useRouter } from '@/navigation';
import { Button } from '@/components/ui/button';
import SlideHeader from '@/components/pages/Register/SlideHeader';
import { useAllUsersData, useCurrentUserInfo } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import FriendButton from '@/components/pages/Profile/FriendButton';
import { CircularProgress } from '@mui/material';

export interface IFollowPeopleProps {
}

export default function FollowPeople({ }: IFollowPeopleProps) {
  const t = useTranslations();
  const router = useRouter();
  const { currentUserInfo } = useCurrentUserInfo();
  const { allUsers, isLoadingAllUsers } = useAllUsersData();

  return (
    <div>
      <SlideHeader step={4} />
      <div className='mt-4'>
        <span className='font-bold text-3xl max-md:text-lg'> {t('Here are some people with similar interests')}</span>
        <div className='*:mt-4'>
          {isLoadingAllUsers ? (
            <div className='flex justify-center items-center'>
              <div className='flex flex-col items-center'>
                <CircularProgress />
                <span className='mt-4'>Loading...</span>
              </div>
            </div>
          ) : allUsers.length > 0 && allUsers.map((item, index) => (
            <div key={index} className='bg-foreground-1 rounded-lg p-4 flex gap-4 items-center justify-between'>
              <div className='flex-start gap-3'>
                <Image width={500} height={500} src={getImageURL(item.user_image)} alt='avatar' className='w-14 h-14 rounded-full' />
                <div className='flex flex-col gap-2'>
                  <span className='font-semibold'> {item.name}</span>
                  <span className='text-white/75'> {item.email}</span>
                </div>
              </div>
              <FriendButton profileID={item._id} />
            </div>
          ))}
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
