'use client';

import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSession } from 'next-auth/react';

import MessageBox from './MessageBox';
import { useCurrentUserInfo, useMessages } from '@/hooks/query';
import { IConversation, IMessage, IUserInfo } from '@/types';
import { useSocketStore } from '@/store/socket';
import { Socket } from '@/lib/utils/constants/SettingSystem';

export interface IMessageListProps {
  conversationID: string;
  currentConversation: IConversation;
  otherUser: IUserInfo;
}

export default function MessageList({ conversationID, currentConversation, otherUser }: IMessageListProps) {
  const { messages, isLoadingMessages, fetchPreviousMessages, isFetchingPreviousPage, hasPreviousMessages } =
    useMessages(conversationID);

  const { data: session } = useSession();

  const [seenRef, isSeen] = useInView({ threshold: 0 });

  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

  const { activeMembers: members, chatSocket } = useSocketStore();


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

  const [count, setCount] = useState(0);
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const activeUser = members.find((member) => member._id === otherUser._id);

  const seenMessage = useCallback(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].sender._id !== currentUserInfo._id &&
      !currentConversation.seen.some((user) => user._id === currentUserInfo._id)
    ) {
      chatSocket.emit(Socket.SEEN_MSG, {
        conversationID,
        userID: currentUserInfo._id
      });
    }
  }, [currentConversation.seen, conversationID, messages]);

  useEffect(() => {
    if (isSeen) {
      seenMessage();
    }
  }, [isSeen, seenMessage]);

  return (
    <>
      {isLoadingMessages ? (<div className='text-center'>Loading...</div>) : (
        <div className='text-sm font-medium'>
          {messages.map((message, index, messArr) => (
            <MessageBox
              key={conversationID + '|' + message._id}
              type={currentConversation.type}
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
          <div ref={seenRef} className='w-0 h-0' />
        </div>
      )}
    </>
  );
}
