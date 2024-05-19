'use client';

import { useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useCurrentUserInfo, useGetCommunityByID } from '@/hooks/query';
import { IPost, IUserInfo } from '@/types';
import HoverUser from '@/components/shared/Post/HoverUser';
import AvatarMessage from '../../Chat/Avatar/AvatarMessage';
import { Link, useRouter } from '@/navigation';
import { CircularProgress } from '@mui/material';
import { Button } from '@/components/ui/button';
import {
  useAcceptJoinCommunity,
  useAcceptPostCommunity,
  useRejectJoinCommunity,
  useRejectPostCommunity
} from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { cn } from '@/lib/utils';
import { IoIosMore } from 'react-icons/io';
import Post from '@/components/shared/Post';

export interface IRequestListProps {
  communityID: string;
}

export default function RequestList({ communityID }: IRequestListProps) {
  const t = useTranslations();
  const router = useRouter();

  const { community, isLoadingCommunity } = useGetCommunityByID(communityID);
  const [userSentRequest, setUserSentRequest] = useState<IUserInfo[]>();
  const [postRequest, setPostRequest] = useState<IPost[]>();

  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  useEffect(() => {
    if (community) {
      if (community.waitlist_users.length > 0) {
        setUserSentRequest(community.waitlist_users);
      }
      if (community.waitlist_posts.length > 0) {
        setPostRequest(community.waitlist_posts);
      }
    }
  }, [community]);

  const { currentUserInfo } = useCurrentUserInfo();
  const isAdmin = useMemo(
    () => community && community.admins.some((admin) => admin._id === currentUserInfo._id),
    [community, community?.admins]
  );

  const { mutateAcceptJoinCommunity, isLoadingAcceptJoinCommunity } = useAcceptJoinCommunity();
  const { mutateRejectJoinCommunity, isLoadingRejectJoinCommunity } = useRejectJoinCommunity();
  const { mutateAcceptPostCommunity, isLoadingAcceptPostCommunity } = useAcceptPostCommunity();
  const { mutateRejectPostCommunity, isLoadingRejectPostCommunity } = useRejectPostCommunity();

  const handleAcceptJoinRequest = (user_id: string) => {
    setSelectedUser(user_id);
    mutateAcceptJoinCommunity(
      { communityID, userID: user_id },
      {
        onSuccess: () => {
          showSuccessToast(t('Successfully accepted the member request!'));
          setUserSentRequest((prev) => prev?.filter((item) => item._id !== user_id));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        }
      }
    );
  };

  const handleRejectJoinRequest = (user_id: string) => {
    setSelectedUser(user_id);
    mutateRejectJoinCommunity(
      { communityID, userID: user_id },
      {
        onSuccess: () => {
          showSuccessToast(t('Successfully rejected the member request!'));
          setUserSentRequest((prev) => prev?.filter((item) => item._id !== user_id));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        }
      }
    );
  };

  const handleAcceptPostRequest = (post_id: string) => {
    setSelectedPost(post_id);
    mutateAcceptPostCommunity(
      { id: communityID, post_id },
      {
        onSuccess: () => {
          showSuccessToast(t('Successfully accepted the post request!'));
          setPostRequest((prev) => prev?.filter((item) => item._id !== post_id));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        }
      }
    );
  };

  const handleRejectPostRequest = (post_id: string) => {
    setSelectedPost(post_id);
    mutateRejectPostCommunity(
      { id: communityID, post_id },
      {
        onSuccess: () => {
          showSuccessToast(t('Successfully rejected the post request!'));
          setPostRequest((prev) => prev?.filter((item) => item._id !== post_id));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        }
      }
    );
  };

  return (
    <>
      {!isAdmin ? null : isLoadingCommunity ? (
        <div className='flex justify-center items-center h-96'>
          <div className='flex flex-col items-center'>
            <CircularProgress />
            <span className='mt-4'>Loading...</span>
          </div>
        </div>
      ) : (
        <div className='space-y-4 bg-foreground-1 p-6 mt-8 mb-2 rounded-xl'>
          <div className=''>
            <h2 className='text-lg font-semibold'>
              {userSentRequest?.length} {t('Member Requests')}
            </h2>
            <div className='mt-4 grid grid-cols-2 max-md:grid-cols-1 gap-4 max-md:gap-2'>
              {userSentRequest &&
                userSentRequest.length > 0 &&
                userSentRequest.map((user) => (
                  <div className='flex-center' key={user._id}>
                    <div className='flex justify-between items-center rounded-lg bg-foreground-2 w-full p-2'>
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
                            <Link
                              href={`/profile/${user._id}`}
                              className='text-lg font-semibold hover:underline cursor-pointer'>
                              {user.name}
                            </Link>
                          </HoverUser>
                          <div className='flex items-center mt-1'>
                            <span className='ml-1 text-sm text-gray-400'>{user.email}</span>
                          </div>
                        </div>
                      </div>
                      <div className='popover'>
                        <div className='p-2.5 rounded-full hover:bg-hover-1 cursor-pointer'>
                          <IoIosMore className='size-6 select-none' />
                        </div>
                        <div
                          className='!w-fit'
                          data-uk-drop='offset:6;pos: left-top;shift: false; flip: false; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right'>
                          <div className='flex flex-col gap-2 bg-foreground-1 p-2 rounded-lg shadow-lg'>
                            <Button
                              className={cn(
                                'button lg:px-6 text-white max-md:flex-1',
                                isLoadingAcceptJoinCommunity && selectedUser === user._id && 'select-none'
                              )}
                              disabled={isLoadingAcceptJoinCommunity && selectedUser === user._id}
                              onClick={() => handleAcceptJoinRequest(user._id)}>
                              {isLoadingAcceptJoinCommunity && selectedUser === user._id && (
                                <CircularProgress size={20} className='!text-text-1 mr-2' />
                              )}
                              {t('Accept')}
                            </Button>
                            <Button
                              className={cn(
                                'button lg:px-6 text-white max-md:flex-1',
                                isLoadingRejectJoinCommunity && selectedUser === user._id && 'select-none'
                              )}
                              variant={'destructive'}
                              disabled={isLoadingRejectJoinCommunity && selectedUser === user._id}
                              onClick={() => handleRejectJoinRequest(user._id)}>
                              {isLoadingRejectJoinCommunity && selectedUser === user._id && (
                                <CircularProgress size={20} className='!text-text-1 mr-2' />
                              )}
                              {t('Reject')}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {!userSentRequest?.length && (
              <div className='flex-center p-4'>
                <span className='text-text-2 text-2xl font-semibold'>{t('No member request')}</span>
              </div>
            )}
          </div>
          <div className=''>
            <h2 className='text-lg font-semibold'>
              {postRequest?.length} {t('Post Requests')}
            </h2>
            <div className='mt-4 flex-center'>
              <div className='w-1/2'>
                {postRequest &&
                  postRequest.length > 0 &&
                  postRequest.map((post) => (
                    <div key={post._id} className='bg-foreground-2 flex-center flex-col rounded-lg'>
                      <Post post={post} feature='requested' />
                      <div className='w-full pr-4 pb-4 flex-end gap-5'>
                        <Button
                          className={cn(
                            isLoadingAcceptPostCommunity && selectedPost === post._id && 'select-none'
                          )}
                          disabled={isLoadingAcceptPostCommunity && selectedPost === post._id}
                          onClick={() => handleAcceptPostRequest(post._id)}>
                          {isLoadingAcceptPostCommunity && selectedPost === post._id && (
                            <CircularProgress size={20} className='!text-text-1 mr-2' />
                          )}
                          {t('Accept')}
                        </Button>
                        <Button
                          variant='destructive'
                          className={cn(
                            isLoadingRejectPostCommunity && selectedPost === post._id && 'select-none'
                          )}
                          disabled={isLoadingRejectPostCommunity && selectedPost === post._id}
                          onClick={() => handleRejectPostRequest(post._id)}>
                          {isLoadingRejectPostCommunity && selectedPost === post._id && (
                            <CircularProgress size={20} className='!text-text-1 mr-2' />
                          )}
                          {t('Reject')}
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {!postRequest?.length && (
              <div className='flex-center p-4'>
                <span className='text-text-2 text-2xl font-semibold'>{t('No post request')}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
