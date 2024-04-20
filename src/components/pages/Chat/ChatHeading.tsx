'use client';

import { useFormatter, useNow, useTranslations } from 'next-intl';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

import { useCurrentConversationData, useCurrentUserInfo } from '@/hooks/query';
import AvatarGroup from './Avatar/AvatarGroup';
import { Link } from '@/navigation';
import AvatarMessage from './Avatar/AvatarMessage';
import { IUserInfo } from '@/types';
import { Skeleton } from '@mui/material';
import { useSocketStore } from '@/store/socket';

export interface IChatHeadingProps {
  conversationID: string;
  otherUser: IUserInfo;
}

export default function ChatHeading({ conversationID, otherUser }: IChatHeadingProps) {
  const t = useTranslations();
  const now = useNow({ updateInterval: 1000 * 30 });
  const format = useFormatter();

  const { currentConversation, isFetchingCurrentConversation } = useCurrentConversationData(conversationID);

  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

  const { activeMembers: members } = useSocketStore();

  const activeUser = members.find((member) => member._id === otherUser?._id);

  const statusText = useMemo(() => {
    if (currentConversation) {
      if (currentConversation.type === 'group') {
        const membersActive = currentConversation.members.filter(
          (member) =>
            member._id === currentUserInfo?._id ||
            members.some((user) => user._id === member._id && user.is_online)
        );

        const memberCount = currentConversation.members.length;
        const activeMemberCount = membersActive.length;

        return `${memberCount} ${t('members')} - ${
          activeMemberCount === 1 ? t('Only you') : activeMemberCount
        } ${t('online')}`;
      }

      const lastOnline =
        !activeUser?.first_online || !activeUser ? otherUser.last_online : activeUser.last_online;

      return activeUser?.is_online
        ? t('Online')
        : t('Last seen at') + ' ' + format.relativeTime(lastOnline as unknown as Date, now);
    }
  }, [currentConversation, activeUser, members, currentUserInfo, now, otherUser]);

  return (
    <>
      {isFetchingCurrentConversation ? (
        <div className='flex items-center justify-between gap-2 w- px-6 py-3.5 z-10 border-b dark:border-slate-700 uk-animation-slide-top-medium'>
          <div className='flex items-center sm:gap-4 gap-2'>
            {/* <!-- toggle for mobile --> */}
            <button
              type='button'
              className='md:hidden'
              data-uk-toggle='target: #side-chat ; cls: max-md:-translate-x-full'>
              <IoChevronBackOutline className='text-2xl -ml-4' />
            </button>

            <div
              className='relative cursor-pointer max-md:hidden'
              data-uk-toggle='target: .right ; cls: hidden'>
              <Skeleton
                variant='rectangular'
                width={40}
                height={40}
                className='w-8 h-8 rounded-full shadow'
              />
              <div className='w-3 h-3 bg-teal-500 rounded-full absolute -right-1 -bottom-0.5 m-px'></div>
            </div>
            <div className='cursor-pointer' data-uk-toggle='target: .right ; cls: hidden'>
              <div className='text-base font-bold'>
                <Skeleton variant='text' width={90} sx={{ fontSize: '1rem' }} />
              </div>
              <div className='text-xs text-green-500 font-semibold'>
                <Skeleton variant='text' width={90} sx={{ fontSize: '1rem' }} />
              </div>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <button type='button' className='hover:bg-hover-1 p-1.5 rounded-full'>
              <Skeleton
                variant='rectangular'
                width={40}
                height={40}
                className='w-8 h-8 rounded-full shadow'
              />
            </button>
            <button type='button' className='hover:bg-hover-1 p-1.5 rounded-full'>
              <Skeleton
                variant='rectangular'
                width={40}
                height={40}
                className='w-8 h-8 rounded-full shadow'
              />
            </button>
            <button type='button' className='hover:bg-hover-1 p-1.5 rounded-full'>
              <Skeleton
                variant='rectangular'
                width={40}
                height={40}
                className='w-8 h-8 rounded-full shadow'
              />
            </button>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-between gap-2 w- px-6 py-3.5 z-10 border-b dark:border-slate-700 uk-animation-slide-top-medium'>
          <div className='flex items-center sm:gap-4 gap-2'>
            {/* <!-- toggle for mobile --> */}
            <button
              type='button'
              className='md:hidden'
              data-uk-toggle='target: #side-chat ; cls: max-md:-translate-x-full'>
              <IoChevronBackOutline className='text-2xl -ml-4' />
            </button>

            <div className='relative cursor-pointer max-md:hidden'>
              {currentConversation.type === 'group' ? (
                <AvatarGroup
                  key={currentConversation._id}
                  users={currentConversation.members}
                  image={currentConversation.image}
                />
              ) : (
                <Link href={`/profile/${otherUser._id}`}>
                  <AvatarMessage key={otherUser._id} user={otherUser} />
                </Link>
              )}
              {/* <div className='w-3 h-3 bg-teal-500 rounded-full absolute -right-1 -bottom-0.5 m-px'></div> */}
            </div>
            <div className='cursor-pointer'>
              <div className='text-base font-bold'> {currentConversation.name ?? otherUser.name}</div>
              <div className='text-xs text-green-500 font-semibold'> {statusText} </div>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <button type='button' className='hover:bg-hover-1 p-1.5 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-6 h-6'>
                <path
                  fillRule='evenodd'
                  d='M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z'
                  clipRule='evenodd'></path>
              </svg>
            </button>
            <button type='button' className='hover:bg-hover-1 p-1.5 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'></path>
              </svg>
            </button>
            <button
              type='button'
              className='hover:bg-hover-1 p-1.5 rounded-full'
              data-uk-toggle='target: .right ; cls: hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
