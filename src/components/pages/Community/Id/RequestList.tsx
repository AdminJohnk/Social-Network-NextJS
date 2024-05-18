'use client'

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useGetCommunityByID } from '@/hooks/query';
import { IUserInfo } from '@/types';
import HoverUser from '@/components/shared/Post/HoverUser';
import AvatarMessage from '../../Chat/Avatar/AvatarMessage';
import { useRouter } from '@/navigation';
import { CircularProgress } from '@mui/material';
import { Button } from '@/components/ui/button';
import { useAcceptJoinCommunity, useRejectJoinCommunity } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { cn } from '@/lib/utils';

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

  const { mutateAcceptJoinCommunity } = useAcceptJoinCommunity();
  const { mutateRejectJoinCommunity } = useRejectJoinCommunity();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUserSelected, setIsUserSelected] = useState<string>();

  const handleAcceptRequest = (user_id: string) => {
    setIsLoading(true);
    setIsUserSelected(user_id);
    mutateAcceptJoinCommunity({ communityID, userID: user_id },
      {
        onSuccess: () => {
          showSuccessToast(t('Your profile has been updated successfully!'));
          setUserSentRequest((prev) => prev?.filter((item) => item._id !== user_id));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsLoading(false);
          setIsUserSelected(undefined);
        }
      }
    );
  };

  const handleRejectRequest = (user_id: string) => {
    setIsLoading(true);
    setIsUserSelected(user_id);
    mutateRejectJoinCommunity({ communityID, userID: user_id },
      {
        onSuccess: () => {
          showSuccessToast(t('Your profile has been updated successfully!'));
          setUserSentRequest((prev) => prev?.filter((item) => item._id !== user_id));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsLoading(false);
          setIsUserSelected(undefined);
        }
      }
    );
  }

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
                <div className='flex items-center gap-4'>
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
                  <Button
                    className={cn('button lg:px-6 text-white max-md:flex-1', isLoading && 'select-none')}
                    variant={'destructive'}
                    disabled={isLoading && isUserSelected === item._id}
                    onClick={() => { handleRejectRequest(item._id) }}>
                    {t('Reject')}
                  </Button>
                  <Button
                    className={cn('button lg:px-6 text-white max-md:flex-1', isLoading && 'select-none')}
                    disabled={isLoading && isUserSelected === item._id}
                    onClick={() => {
                      handleAcceptRequest(item._id);
                    }}>
                    {isLoading && isUserSelected === item._id && <CircularProgress size={20} className='!text-text-1 mr-2' />}
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
