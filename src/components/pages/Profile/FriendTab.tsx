'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Nodata from '@/components/shared/Nodata';
import { useCurrentUserInfo, useOtherUserInfo } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { Link } from '@/navigation';
import { IUserInfo } from '@/types';
import { Skeleton } from '@mui/material';

import FriendButton from './FriendButton';

interface IRenderFriendItemProps {
  friend: IUserInfo;
}

function RenderFriendItem({ friend }: IRenderFriendItemProps) {
  const t = useTranslations();
  const { currentUserInfo } = useCurrentUserInfo();

  const isMe = friend._id == currentUserInfo._id;

  return (
    <div className='flex-between'>
      <Link href={`/profile/${friend._id}`}>
        <div className='flex-start w-full'>
          <Image
            src={getImageURL(friend.user_image, 'avatar')}
            alt={friend.name}
            className='h-10 w-10 rounded-full'
            width={40}
            height={40}
          />
          <div className='ml-3 break-words'>
            <p>
              {friend.name} {isMe && `(${t('You')})`}
            </p>
            {friend.experiences?.length > 0 && (
              <span className='small-regular mt-1 text-text-2'>
                {t('Work at')}
                <span className='small-bold mx-1'>{friend.experiences[0]?.company_name}</span>
                {t('as')}
                <span className='small-bold mx-1'>{friend.experiences[0]?.position_name}</span>
              </span>
            )}
          </div>
        </div>
      </Link>
      <FriendButton profileID={friend._id} />
    </div>
  );
}

export interface IFriendTabProps {
  profileID: string;
}

export default function FriendTab({ profileID }: IFriendTabProps) {
  const { otherUserInfo, isLoadingOtherUserInfo } = useOtherUserInfo(profileID);

  return isLoadingOtherUserInfo ? (
    <div className='my-8 w-full rounded-md bg-foreground-1'>
      <div className='flex-between w-full flex-wrap gap-10 px-10 py-8'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className='w-[calc(50%-2.5rem)]'>
            <div className='flex-between'>
              <Skeleton variant='circular' width={60} height={60} className='!bg-foreground-2' />
              <div className='flex w-3/5 flex-col py-1 pl-3'>
                <Skeleton variant='text' sx={{ fontSize: '1rem' }} className='!w-3/4 !bg-foreground-2' />
                <Skeleton variant='text' sx={{ fontSize: '1rem' }} className='!w-3/4 !bg-foreground-2' />
              </div>
              <Skeleton variant='rounded' width={100} height={40} className='!bg-foreground-2' />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className='my-8 w-full rounded-md bg-foreground-1'>
      {otherUserInfo?.friends.length <= 0 ? (
        <div className='flex-center w-full px-10 py-8'>
          <Nodata width={150} height={150} title={'No friend found'}></Nodata>
        </div>
      ) : (
        <div className='flex-between w-full flex-wrap gap-10 px-10 py-8'>
          {otherUserInfo?.friends.map((friend, index) => (
            <div className='w-[calc(50%-2.5rem)]' key={index}>
              <RenderFriendItem friend={friend} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
