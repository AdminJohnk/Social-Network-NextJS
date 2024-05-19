'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFormatter, useNow, useTranslations } from 'next-intl';
import { useCurrentUserInfo, useGetCommunityByID } from '@/hooks/query';
import { IPost, IUserInfo } from '@/types';
import HoverUser from '@/components/shared/Post/HoverUser';
import AvatarMessage from '../../Chat/Avatar/AvatarMessage';
import { Link, useRouter } from '@/navigation';
import { CircularProgress } from '@mui/material';
import { Button } from '@/components/ui/button';
import { useAcceptJoinCommunity, useRejectJoinCommunity } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { cn, getImageURL } from '@/lib/utils';
import { IoIosMore } from 'react-icons/io';
import Image from 'next/image';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { isThisWeek, isThisYear, isToday } from 'date-fns';

export interface IRequestListProps {
  communityID: string;
}

export default function RequestList({ communityID }: IRequestListProps) {
  const t = useTranslations();
  const router = useRouter();

  useNow({ updateInterval: 1000 * 30 });
  const format = useFormatter();

  const handleDateTime = useCallback((date: string) => {
    const messageDate = new Date(date).getTime();

    // check if today
    if (isToday(messageDate)) {
      return format.relativeTime(new Date(date), new Date());
    }

    // check if this week
    if (isThisWeek(messageDate, { weekStartsOn: 1 })) {
      return (
        format.dateTime(new Date(date), { weekday: 'long' }) +
        ' • ' +
        format.dateTime(new Date(date), {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        })
      );
    }

    // check if this year
    if (isThisYear(messageDate)) {
      return (
        format.dateTime(new Date(date), {
          month: 'long',
          day: 'numeric'
        }) +
        ' • ' +
        format.dateTime(new Date(date), {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        })
      );
    }

    return (
      format.dateTime(new Date(date), {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) +
      ' • ' +
      format.dateTime(new Date(date), {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    );
  }, []);

  const { community, isLoadingCommunity } = useGetCommunityByID(communityID);
  const [userSentRequest, setUserSentRequest] = useState<IUserInfo[]>();
  const [postRequest, setPostRequest] = useState<IPost[]>();

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

  const { mutateAcceptJoinCommunity } = useAcceptJoinCommunity();
  const { mutateRejectJoinCommunity } = useRejectJoinCommunity();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUserSelected, setIsUserSelected] = useState<string>();

  const handleAcceptRequest = (user_id: string) => {
    setIsLoading(true);
    setIsUserSelected(user_id);
    mutateAcceptJoinCommunity(
      { communityID, userID: user_id },
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
    mutateRejectJoinCommunity(
      { communityID, userID: user_id },
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
                    <div className='flex-between rounded-lg bg-foreground-2 w-full p-2'>
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
                                isLoading && 'select-none'
                              )}
                              disabled={isLoading && isUserSelected === user._id}
                              onClick={() => {
                                handleAcceptRequest(user._id);
                              }}>
                              {isLoading && isUserSelected === user._id && (
                                <CircularProgress size={20} className='!text-text-1 mr-2' />
                              )}
                              {t('Accept')}
                            </Button>
                            <Button
                              className={cn(
                                'button lg:px-6 text-white max-md:flex-1',
                                isLoading && 'select-none'
                              )}
                              variant={'destructive'}
                              disabled={isLoading && isUserSelected === user._id}
                              onClick={() => {
                                handleRejectRequest(user._id);
                              }}>
                              {t('Reject')}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {!userSentRequest && (
              <div className='flex-center p-4'>
                <span className='text-text-2 text-2xl font-semibold'>{t('No member request')}</span>
              </div>
            )}
          </div>
          <div className=''>
            <h2 className='text-lg font-semibold'>
              {postRequest?.length} {t('Post Requests')}
            </h2>
            <div className='mt-4 grid grid-cols-2 max-md:grid-cols-1 gap-4 max-md:gap-2'>
              {postRequest &&
                postRequest.length > 0 &&
                postRequest.map((post) => (
                  <div className='card-list bg-foreground-2 p-4 rounded-lg' key={post._id}>
                    <Link href={`/posts/${post._id}`}>
                      <div className='card-list-media md:w-[320px] md:h-[180px] sm:aspect-[3/1.2] aspect-[3/1.5]'>
                        {post!.post_attributes.images.length > 0 ? (
                          <Image
                            width={1000}
                            height={1000}
                            src={getImageURL(post!.post_attributes.images[0])}
                            alt={post!.post_attributes.images[0]}
                          />
                        ) : (
                          <Image
                            width={1000}
                            height={1000}
                            src={getImageURL(post!.post_attributes.user.user_image)}
                            alt={post!.post_attributes.user.user_image}
                          />
                        )}
                      </div>
                    </Link>
                    <div className='card-list-body relative'>
                      <p className='card-list-text max-h-20 overflow-hidden'>
                        {
                          <ShowContent
                            content={
                              post.post_attributes.content.length > 250
                                ? post.post_attributes.content.slice(0, 500) + '...'
                                : post.post_attributes.content
                            }
                          />
                        }
                      </p>
                      <Link href='timeline.html'>
                        <div className='card-list-link mt-5'> {post.post_attributes.user.name}</div>
                      </Link>
                      <div className='flex items-center justify-between'>
                        <div className='card-list-info'>
                          <div> {handleDateTime(post.createdAt)}</div>
                        </div>
                        {/* <ButtonRemoveSavePost post_id={post._id} /> */}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {!postRequest && (
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
