'use client'

import { use, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useGetCommunityByID } from '@/hooks/query';
import { IUserInfo } from '@/types';
import HoverUser from '@/components/shared/Post/HoverUser';
import AvatarMessage from '../../Chat/Avatar/AvatarMessage';
import { useRouter } from '@/navigation';
import { CircularProgress } from '@mui/material';
import { Button } from '@/components/ui/button';

export interface IRequestListProps {
  communityID: string;
}

export default function RequestList({ communityID }: IRequestListProps) {
  const t = useTranslations();
  const router = useRouter();

  const { community, isLoadingCommunity } = useGetCommunityByID(communityID);
  const [userSentRequest, setUserSentRequest] = useState<IUserInfo[]>();
  useEffect(() => {
    if (community && community.waitlist_users.length > 0) {
      setUserSentRequest(community.waitlist_users);
    }
  }, [community]);
  return (
    <>
      {isLoadingCommunity ? (
        <div className='flex justify-center items-center h-96'>
          <div className='flex flex-col items-center'>
            <CircularProgress />
            <span className='mt-4'>Loading...</span>
          </div>
        </div>
      ) : (<div className='bg-foreground-1 p-4 rounded-xl'>
        {userSentRequest && userSentRequest.length > 0 ?
          userSentRequest.map((item) => {
            return (
              <div key={item._id} className='*:mb-2 flex-between'>
                <div key={item._id} className='flex items-center gap-4'>
                  <HoverUser user={item}>
                    <div className='cursor-pointer' onClick={() => {
                      router.push(`/profile/${item._id}`);
                    }}>
                      <AvatarMessage user={item} />
                    </div>
                  </HoverUser>
                  <div className='flex flex-col'>
                    <HoverUser user={item}>
                      <span className='font-bold cursor-pointer hover:underline' onClick={() => {
                        router.push(`/profile/${item._id}`);
                      }}>
                        {item.name}
                      </span>
                    </HoverUser>
                    <span className='font-semibold text-text-2'>{item.email}</span>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <Button variant={'destructive'}>
                    {t('Reject')}
                  </Button>
                  <Button >
                    {t('Accept')}
                  </Button>
                </div>
              </div>
            );
          }) : (<>
            <div className='flex justify-center items-center h-96'>
              <span className='text-text-2 text-2xl font-semibold'>{t('No request found')}</span>
            </div>
          </>)
        }
      </div>)
      }
    </>
  );
}
