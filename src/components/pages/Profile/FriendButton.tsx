'use client';

import { Button } from '@/components/ui/button';
import {
  useAcceptFriendUser,
  useAddFriendUser,
  useCancelFriendUser,
  useDeclineFriendUser,
  useDeleteFriendUser
} from '@/hooks/mutation';
import { useCurrentUserInfo, useOtherUserInfo } from '@/hooks/query';
import { CircularProgress, Skeleton } from '@mui/material';
import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoAddCircle } from 'react-icons/io5';
import { MdCancel } from 'react-icons/md';
import { RiArrowGoBackFill } from 'react-icons/ri';

export interface IFriendButtonProps {
  profileID: string;
  variant?: 'main' | 'default';
}

const ButtonComponent = ({
  isLoading,
  preIcon,
  onClick,
  variant = 'main',
  buttonText
}: Partial<{
  isLoading: boolean;
  preIcon: React.ReactNode;
  onClick: () => void;
  variant?: 'main' | 'default';
  buttonText: string;
}>) => {
  const t = useTranslations();

  return (
    <Button
      className='whitespace-nowrap'
      variant={variant}
      preIcon={isLoading ? <CircularProgress size={17} className='!text-text-1' /> : preIcon}
      onClick={onClick}>
      {t(buttonText)}
    </Button>
  );
};

const NavComponent = ({ onClick, text }: { onClick: () => void; text: string }) => {
  const t = useTranslations();

  return (
    <nav className='*:cursor-pointer *:rounded-md *:px-4 *:py-2 *:duration-300 hover:*:!bg-hover-1'>
      <div className='uk-drop-close' onClick={onClick}>
        <span className='text-sm'>{t(text)}</span>
      </div>
    </nav>
  );
};

export default function FriendButton({ profileID, variant = 'main' }: IFriendButtonProps) {
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

  const handleButtonClick = (mutateFunction: UseMutateAsyncFunction<void, Error, string, unknown>) => {
    setIsLoading(true);
    mutateFunction(profileID, {
      onSettled: () => {
        setIsLoading(false);
      }
    });
  };

  return isMe ? null : isLoadingOtherUserInfo ? (
    <Skeleton className='!bg-foreground-1' variant='circular' width={40} height={40} />
  ) : (
    <>
      {!isFriend && !sentRequest && !receivedRequest && (
        <ButtonComponent
          variant={variant}
          isLoading={isLoading}
          preIcon={<IoAddCircle className='text-xl' />}
          onClick={() => handleButtonClick(mutateAddFriendUser)}
          buttonText='Add Friend'
        />
      )}
      {sentRequest && (
        <ButtonComponent
          variant={variant}
          isLoading={isLoading}
          preIcon={<MdCancel className='text-xl' />}
          onClick={() => handleButtonClick(mutateCancelFriendUser)}
          buttonText='Cancel Request'
        />
      )}
      {receivedRequest && (
        <div>
          <ButtonComponent
            variant={variant}
            isLoading={isLoading}
            preIcon={<RiArrowGoBackFill className='text-xl' />}
            buttonText='Response'
          />
          <div
            className='w-[240px] !bg-foreground-1'
            data-uk-drop='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
            <NavComponent onClick={() => handleButtonClick(mutateAcceptFriendUser)} text='Accept' />
            <NavComponent onClick={() => handleButtonClick(mutateDeclineFriendUser)} text='Decline' />
          </div>
        </div>
      )}
      {isFriend && (
        <div>
          <ButtonComponent
            variant={variant}
            isLoading={isLoading}
            preIcon={<FaCheckCircle className='text-xl' />}
            buttonText='Friend'
          />
          <div
            className='w-[240px] !bg-foreground-1'
            data-uk-drop='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
            <NavComponent onClick={() => handleButtonClick(mutateDeleteFriendUser)} text='Unfriend' />
          </div>
        </div>
      )}
    </>
  );
}
