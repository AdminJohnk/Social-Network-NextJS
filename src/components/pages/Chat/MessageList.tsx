'use client';

import { useCallback } from 'react';

import MessageBox from './MessageBox';
import { useMessages } from '@/hooks/query';
import { IConversation, IMessage } from '@/types';

export interface IMessageListProps {
  conversationID: string;
  currentConversation: IConversation;
}

export default function MessageList({ conversationID, currentConversation }: IMessageListProps) {
  const { messages, isLoadingMessages, fetchPreviousMessages, isFetchingPreviousPage, hasPreviousMessages } =
    useMessages(conversationID);

  const isAdmin = useCallback(
    (userID: string) => {
      return currentConversation.admins.some((admin) => admin._id === userID);
    },
    [currentConversation]
  );

  const isCreator = useCallback(
    (userID: string) => {
      return currentConversation.creator === userID;
    },
    [currentConversation]
  );

  const isPrevMesGroup = useCallback((message: IMessage, index: number, messArr: IMessage[]) => {
    if (index === 0) return false;
    if (!messArr) return false;
    const preMessage = messArr[index - 1];
    if (preMessage.type === 'notification') return false;

    const isSameSender = message.sender._id === preMessage.sender._id;
    if (!isSameSender) return false;

    return new Date(message.createdAt).getTime() - new Date(preMessage.createdAt).getTime() < 60000;
  }, []);

  const isNextMesGroup = useCallback((message: IMessage, index: number, messArr: IMessage[]) => {
    if (index === messArr.length - 1) return false;
    if (!messArr) return false;

    const nextMessage = messArr[index + 1];
    if (nextMessage.type === 'notification') return false;

    const isSameSender = message.sender._id === nextMessage.sender._id;
    if (!isSameSender) return false;

    return new Date(nextMessage.createdAt).getTime() - new Date(message.createdAt).getTime() < 60000;
  }, []);

  const isMoreThan10Min = useCallback((message: IMessage, index: number, messArr: IMessage[]) => {
    if (index === 0) return true;
    if (!messArr) return false;

    const preMessage = messArr[index - 1];

    return new Date(message.createdAt).getTime() - new Date(preMessage.createdAt).getTime() > 600000;
  }, []);

  return (
    <div className='text-sm font-medium'>
      {messages?.map((message, index, messArr) => (
        <MessageBox
          key={conversationID + '|' + message._id}
          isLastMes={index === messArr.length - 1}
          message={message}
          seen={currentConversation.seen}
          isAdmin={isAdmin(message.sender._id)}
          isCreator={isCreator(message.sender._id)}
          isPrevMesGroup={isPrevMesGroup(message, index, messArr)}
          isNextMesGroup={isNextMesGroup(message, index, messArr)}
          isMoreThan10Min={isMoreThan10Min(message, index, messArr)}
        />
      ))}
    </div>
  );
}
