'use client'

import { useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useCurrentUserInfo, useGetCommunityByID } from '@/hooks/query';
import { IUserInfo } from '@/types';
import HoverUser from '@/components/shared/Post/HoverUser';
import AvatarMessage from '../../Chat/Avatar/AvatarMessage';
import { Link, useRouter } from '@/navigation';
import { CircularProgress } from '@mui/material';
import { Button } from '@/components/ui/button';
import { useAcceptJoinCommunity, useRejectJoinCommunity } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { cn } from '@/lib/utils';
import { IoIosMore } from 'react-icons/io';

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
  const { currentUserInfo } = useCurrentUserInfo();
  const isAdmin = useMemo(() => community && community.admins.some((admin) => admin._id === currentUserInfo._id), [community, community?.admins]);

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
      {(!isAdmin) ? null : isLoadingCommunity ? (
        <div className='flex justify-center items-center h-96'>
          <div className='flex flex-col items-center'>
            <CircularProgress />
            <span className='mt-4'>Loading...</span>
          </div>
        </div>
      ) : (
        <div className='bg-foreground-1 p-6 mt-8 mb-2 rounded-xl'>
          <h2 className='text-lg font-semibold'>{userSentRequest?.length} Requests</h2>
          <div className='mt-4 grid grid-cols-2 max-md:grid-cols-1 gap-4 max-md:gap-2'>
            {userSentRequest && userSentRequest.length > 0 &&
              userSentRequest.map((user) => (
                <div className='flex-center' key={user._id}>
                  <div className="flex justify-between items-center rounded-lg bg-foreground-2 w-full p-2">
                    <div className='flex items-center gap-2'>
                      <HoverUser user={user}>
                        <div
                          className='cursor-pointer rounded-full'
                          onClick={() => router.push(`/profile/${user._id}`)}>
                          <AvatarMessage user={user} size={64} />
                        </div>
                      </HoverUser>
                      <div>
                        <HoverUser user={user}>
                          <Link href={`/profile/${user._id}`} className="text-lg font-semibold hover:underline cursor-pointer">{user.name}</Link>
                        </HoverUser>
                        <div className="flex items-center mt-1">
                          <span className="ml-1 text-sm text-gray-400">
                            {user.email}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='popover'>
                      <div className='p-2.5 rounded-full hover:bg-hover-1 cursor-pointer'>
                        <IoIosMore className='size-6' />
                      </div>
                      <div
                        className='!w-fit'
                        data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right'>
                        <div className='flex flex-col gap-2 bg-foreground-1 p-2 rounded-lg shadow-lg'>
                          <Button
                            className={cn('button lg:px-6 text-white max-md:flex-1', isLoading && 'select-none')}
                            variant={'destructive'}
                            disabled={isLoading && isUserSelected === user._id}
                            onClick={() => { handleRejectRequest(user._id) }}>
                            {t('Reject')}
                          </Button>
                          <Button
                            className={cn('button lg:px-6 text-white max-md:flex-1', isLoading && 'select-none')}
                            disabled={isLoading && isUserSelected === user._id}
                            onClick={() => {
                              handleAcceptRequest(user._id);
                            }}>
                            {isLoading && isUserSelected === user._id && <CircularProgress size={20} className='!text-text-1 mr-2' />}
                            {t('Accept')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          {!userSentRequest && (
            <div className='flex justify-center items-center h-96'>
              <span className='text-text-2 text-2xl font-semibold'>{t('No request found')}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
