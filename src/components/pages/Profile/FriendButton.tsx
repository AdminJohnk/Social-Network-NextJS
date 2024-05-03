'use client';

import { Button } from '@/components/ui/button';
import { useAcceptFriendUser, useAddFriendUser, useCancelFriendUser, useDeclineFriendUser, useDeleteFriendUser } from '@/hooks/mutation';
import { useCurrentUserInfo, useOtherUserInfo } from '@/hooks/query';
import { CircularProgress, Skeleton } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoAddCircle } from 'react-icons/io5';
import { MdCancel } from 'react-icons/md';
import { RiArrowGoBackFill } from 'react-icons/ri';

export interface IFriendButtonProps {
  profileID: string;
}

export default function FriendButton({ profileID }: IFriendButtonProps) {
  const t = useTranslations();
  const { otherUserInfo, isLoadingOtherUserInfo } = useOtherUserInfo(profileID);
  const { currentUserInfo } = useCurrentUserInfo();

  const isMe = currentUserInfo._id === profileID;

  const { mutateAddFriendUser } = useAddFriendUser();

  const { mutateAcceptFriendUser } = useAcceptFriendUser();

  const { mutateCancelFriendUser } = useCancelFriendUser();

  const { mutateDeclineFriendUser } = useDeclineFriendUser();

  const { mutateDeleteFriendUser } = useDeleteFriendUser();

  const isFriend = currentUserInfo.friends?.some((friend) => friend._id === profileID);

  const sentRequest = useMemo(() => {
    if (currentUserInfo && otherUserInfo) {
      return currentUserInfo.requestSent.indexOf(otherUserInfo._id) !== -1;
    }
    return false;
  }, [currentUserInfo, otherUserInfo]);

  const receivedRequest = useMemo(() => {
    if (currentUserInfo && otherUserInfo) {
      return currentUserInfo.requestReceived.indexOf(otherUserInfo._id) !== -1;
    }
    return false;
  }, [currentUserInfo, otherUserInfo]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      {isLoadingOtherUserInfo ? (
        <Skeleton variant='circular' width={40} height={40} />
      ) : (<>
        {!isFriend && !sentRequest && !receivedRequest && !isMe && (
          <Button
            variant='main'
            preIcon={
              isLoading ? (
                <CircularProgress size={17} className='!text-text-1' />
              ) : (
                <IoAddCircle className='text-xl' />
              )
            }
            onClick={() => {
              setIsLoading(true);
              mutateAddFriendUser(profileID, {
                onSettled: () => {
                  setIsLoading(false);
                }
              });
            }}>
            {t('Add Friend')}
          </Button>
        )}
        {sentRequest && !isMe && (
          <Button
            variant='main'
            preIcon={
              isLoading ? (
                <CircularProgress size={17} className='!text-text-1' />
              ) : (
                <MdCancel className='text-xl' />
              )
            }
            onClick={() => {
              setIsLoading(true);
              mutateCancelFriendUser(profileID, {
                onSettled: () => {
                  setIsLoading(false);
                }
              });
            }}>
            {t('Cancel Request')}
          </Button>
        )}
        {receivedRequest && !isMe && (
          <div>
            <Button
              variant='main'
              preIcon={
                isLoading ? (
                  <CircularProgress size={17} className='!text-text-1' />
                ) : (
                  <RiArrowGoBackFill className='text-xl' />
                )
              }>
              <span className='text-sm'> {t('Response')} </span>
            </Button>
            <div
              className='w-[240px] !bg-foreground-1'
              data-uk-drop='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
              <nav className='*:py-2 *:px-4 hover:*:!bg-hover-1 *:cursor-pointer *:duration-300 *:rounded-md'>
                <div
                  className='uk-drop-close'
                  onClick={() => {
                    setIsLoading(true);
                    mutateAcceptFriendUser(profileID, {
                      onSettled: () => {
                        setIsLoading(false);
                      }
                    });
                  }}>
                  <span className='text-sm'>{t('Accept')}</span>
                </div>
                <div
                  className='uk-drop-close'
                  onClick={() => {
                    setIsLoading(true);
                    mutateDeclineFriendUser(profileID, {
                      onSettled: () => {
                        setIsLoading(false);
                      }
                    });
                  }}>
                  <span className='text-sm'>{t('Decline')}</span>
                </div>
              </nav>
            </div>
          </div>
        )}
        {isFriend && !isMe && (
          <div>
            <Button
              variant='main'
              preIcon={
                isLoading ? (
                  <CircularProgress size={17} className='!text-text-1' />
                ) : (
                  <FaCheckCircle className='text-xl' />
                )
              }>
              <span className='text-sm'> {t('Friend')} </span>
            </Button>
            <div
              className='w-[240px] !bg-foreground-1'
              data-uk-drop='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
              <nav className='*:py-2 *:px-4 hover:*:!bg-hover-1 *:cursor-pointer *:duration-300 *:rounded-md'>
                <div
                  className='uk-drop-close'
                  onClick={() => {
                    setIsLoading(true);
                    mutateDeleteFriendUser(profileID, {
                      onSettled: () => {
                        setIsLoading(false);
                      }
                    });
                  }}>
                  <span className='text-sm'>{t('Unfriend')}</span>
                </div>
              </nav>
            </div>
          </div>
        )}
      </>
      )}
    </>
  );
}