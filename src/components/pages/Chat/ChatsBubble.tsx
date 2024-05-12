'use client';

import { InfiniteData, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { CircularProgress } from '@mui/material';

import InputChat from './InputChat';
import ChatHeading from './ChatHeading';
import MessageList from './MessageList';
import { useCurrentConversationData, useCurrentUserInfo } from '@/hooks/query';
import { IMessage } from '@/types';

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
        <div className='flex-center h-full p-1'>
          <CircularProgress size={20} className='!text-text-1' />
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
