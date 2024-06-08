'use client';

import { InfiniteData, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { CircularProgress, Skeleton } from '@mui/material';

import InputChat from './InputChat';
import ChatHeading from './ChatHeading';
import MessageList from './MessageList';
import { useCurrentConversationData, useCurrentUserInfo } from '@/hooks/query';
import { IMessage } from '@/types';
import { IoChevronBackOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { random } from 'lodash';

export interface IChatsBubbleProps {
  conversationID: string | undefined;
}

export default function ChatsBubble({ conversationID }: IChatsBubbleProps) {
  const queryClient = useQueryClient();

  if (!conversationID) return <></>;

  const { currentUserInfo } = useCurrentUserInfo();

  const { currentConversation, isLoadingCurrentConversation } = useCurrentConversationData(conversationID);

  const otherUser = useMemo(() => {
    return currentConversation?.members?.filter((member) => member._id !== currentUserInfo._id)[0];
  }, [currentUserInfo, currentConversation?.members]);

  useEffect(() => {
    return () => {
      queryClient.setQueryData<InfiniteData<IMessage[], number>>(['messages', conversationID], (oldData) => {
        if (!oldData) return;
        return {
          pageParams: oldData.pageParams.slice(-1),
          pages: oldData.pages.slice(-1)
        };
      });
    };
  }, []);

  return (
    <div className='flex-1 w-full h-dvh relative'>
      {/* <!-- chat heading --> */}
      {isLoadingCurrentConversation ? (
        <div className='w-full'>
          <div className='flex items-center justify-between gap-2 w-full px-6 py-3.5 z-10 border-b dark:border-slate-700 uk-animation-slide-top-medium'>
            <div className='flex items-center sm:gap-4 gap-2'>
              {/* <!-- toggle for mobile --> */}
              <button
                type='button'
                className='md:hidden'
                data-uk-toggle='target: #side-chat ; cls: max-md:-translate-x-full'>
                <IoChevronBackOutline className='text-2xl -ml-4 !bg-foreground-1' />
              </button>

              <div className='relative cursor-pointer max-md:hidden'>
                <Skeleton
                  variant='rectangular'
                  width={40}
                  height={40}
                  className='w-8 h-8 rounded-full shadow !bg-foreground-1'
                />
                <div className='w-3 h-3 bg-teal-500 rounded-full absolute -right-1 -bottom-0.5 m-px'></div>
              </div>
              <div className='cursor-pointer'>
                <div className='text-base font-bold'>
                  <Skeleton variant='text' width={90} sx={{ fontSize: '1rem' }} className='!bg-foreground-1' />
                </div>
                <div className='text-xs text-green-500 font-semibold'>
                  <Skeleton variant='text' width={90} sx={{ fontSize: '1rem' }} className='!bg-foreground-1' />
                </div>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <button type='button' className='hover:bg-hover-1 p-1.5 rounded-full'>
                <Skeleton
                  variant='rectangular'
                  width={40}
                  height={40}
                  className='w-8 h-8 rounded-full shadow !bg-foreground-1'
                />
              </button>
              <button type='button' className='hover:bg-hover-1 p-1.5 rounded-full'>
                <Skeleton
                  variant='rectangular'
                  width={40}
                  height={40}
                  className='w-8 h-8 rounded-full shadow !bg-foreground-1'
                />
              </button>
              <button type='button' className='hover:bg-hover-1 p-1.5 rounded-full'>
                <Skeleton
                  variant='rectangular'
                  width={40}
                  height={40}
                  className='w-8 h-8 rounded-full shadow !bg-foreground-1'
                />
              </button>
            </div>
          </div>
          <div className='w-full ps-5 pe-2 pt-10 overflow-auto h-[calc(100vh-138px)] custom-scrollbar-fg'>
            <div className='w-full flex mb-2'>
              <div className='w-3/5 h-1/6 flex items-end gap-3'>
                <Skeleton
                  variant='rectangular'
                  width={40}
                  height={40}
                  className='w-8 h-8 rounded-full shadow !bg-foreground-1'
                />
                <Skeleton variant="rounded" className='!w-11/12 !h-24 !bg-foreground-1 !rounded-xl' />
              </div>
            </div>
            {Array.from({ length: 9 }).map((_, index) => {
              const rand = random(0, 1);
              return (
                <div key={index} className={cn('w-full flex mb-2', rand && 'flex-row-reverse')}>
                  <div className={cn('w-3/5 h-1/6 flex items-end gap-3', rand && 'flex-row-reverse')}>
                    {!rand && <Skeleton
                      variant='rectangular'
                      width={40}
                      height={40}
                      className='w-8 h-8 rounded-full shadow !bg-foreground-1'
                    />}
                    <Skeleton variant="rounded" className='!w-11/12 !h-24 !bg-foreground-1 !rounded-xl' />
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flex w-full items-center gap-2 p-2'>
            <Skeleton variant="rectangular" width={40} height={40} className='w-8 h-8 rounded-full shadow !bg-foreground-1' />
            <Skeleton variant="rectangular" width={40} height={40} className='w-8 h-8 rounded-full shadow !bg-foreground-1' />
            <Skeleton variant="rectangular" width={210} height={40} className='!rounded-lg !w-full !bg-foreground-1' />
            <Skeleton variant="rectangular" width={40} height={40} className='w-8 h-8 rounded-full shadow !bg-foreground-1' />
          </div>
        </div>
      ) : (
        <>
          <ChatHeading conversationID={conversationID} otherUser={otherUser} />

          <MessageList
            conversationID={conversationID}
            currentConversation={currentConversation}
            otherUser={otherUser}
          />

          <InputChat conversationID={conversationID} members={currentConversation.members} />
        </>
      )}
    </div>
  );
}
