'use client';

import { useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Link } from '@/navigation';
import InputChat from './InputChat';
import ChatHeading from './ChatHeading';
import AvatarGroup from './Avatar/AvatarGroup';
import AvatarMessage from './Avatar/AvatarMessage';
import MessageList from './MessageList';
import { useCurrentConversationData, useCurrentUserInfo } from '@/hooks/query';
import { CircularProgress } from '@mui/material';

export interface IChatsBubbleProps {
  conversationID: string | undefined;
}

export default function ChatsBubble({ conversationID }: IChatsBubbleProps) {
  const t = useTranslations();

  if (conversationID === undefined) return <></>;

  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

  const { currentConversation, isLoadingCurrentConversation } = useCurrentConversationData(conversationID);

  const otherUser = useMemo(() => {
    return currentConversation?.members?.filter((member) => member._id !== currentUserInfo._id)[0];
  }, [currentUserInfo, currentConversation?.members]);

  return (
    <div className='flex-1 relative'>
      {/* <!-- chat heading --> */}
      {isLoadingCurrentConversation ? (
        <div className='flex-center h-full p-1'>
          <CircularProgress size={20} className='!text-text-1' />
        </div>
      ) : (
        <>
          <ChatHeading conversationID={conversationID} otherUser={otherUser} />
          <div className='w-full pt-10 pb-5 overflow-y-auto md:h-[calc(100vh-137px)] h-[calc(100vh-250px)] custom-scrollbar-fg'>
            <div className='py-10 flex-center flex-col text-center text-sm lg:pt-8'>
              {currentConversation.type === 'group' ? (
                <AvatarGroup
                  key={currentConversation._id}
                  users={currentConversation.members}
                  image={currentConversation.image}
                  size={80}
                />
              ) : (
                <Link href={`/profile/${otherUser._id}`}>
                  <AvatarMessage key={otherUser._id} user={otherUser} size={100} />
                </Link>
              )}
              {currentConversation.type === 'group' ? (
                <>
                  <div className='mt-8'>
                    <div className='md:text-xl text-base font-medium text-black dark:text-white'>
                      {currentConversation.name}
                    </div>
                    <div className='text-gray-500 text-sm dark:text-white/80'>
                      {currentConversation.members.length} {t('members')}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='mt-8'>
                    <div className='md:text-xl text-base font-medium text-black dark:text-white'>
                      {otherUser.name}
                    </div>

                    <div className='text-gray-500 text-sm dark:text-white/80'>
                      {otherUser.alias && <>@{otherUser.alias}</>}
                    </div>
                  </div>
                  <div className='mt-3.5'>
                    <Link
                      href={`/profile/${otherUser._id}`}
                      className='inline-block rounded-lg px-4 py-1.5 text-sm font-semibold bg-foreground-2 hover:bg-hover-1'>
                      {t('View profile')}
                    </Link>
                  </div>
                </>
              )}
            </div>

            <MessageList
              conversationID={conversationID}
              currentConversation={currentConversation}
              otherUser={otherUser}
            />
          </div>
          <InputChat conversationID={conversationID} members={currentConversation.members} />
        </>
      )}
    </div>
  );
}
