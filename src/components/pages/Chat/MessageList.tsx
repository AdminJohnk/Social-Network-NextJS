'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CircularProgress } from '@mui/material';
import { debounce } from 'lodash';

import MessageBox from './MessageBox';
import { useCurrentUserInfo, useMessages } from '@/hooks/query';
import { IConversation, IMessage, IUserInfo } from '@/types';
import { useSocketStore } from '@/store/socket';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { getImageURL } from '@/lib/utils';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FaPhone, FaVideo } from 'react-icons/fa';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { audioCall, videoChat } from '@/lib/utils/call';

export interface IMessageListProps {
  conversationID: string;
  currentConversation: IConversation;
  otherUser: IUserInfo;
}

export interface IReCallProps {
  open: boolean;
  type: 'video' | 'voice';
}

export default function MessageList({ conversationID, currentConversation, otherUser }: IMessageListProps) {
  const t = useTranslations();
  const { messages, isLoadingMessages, fetchPreviousMessages, isFetchingPreviousPage, hasPreviousMessages } =
    useMessages(conversationID);

  const [seenRef, isSeen] = useInView({ threshold: 0 });

  const [topRef, isOnTop] = useInView({ threshold: 0 });

  const { currentUserInfo } = useCurrentUserInfo();

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
      !currentConversation.lastMessage.seen.some((user) => user._id === currentUserInfo._id)
    ) {
      chatSocket.emit(Socket.SEEN_MSG, {
        conversationID,
        userID: currentUserInfo._id
      });
    }
  }, [currentConversation.lastMessage.seen, conversationID, messages]);

  useEffect(() => {
    if (isSeen) {
      seenMessage();
    }
  }, [isSeen, seenMessage]);

  useEffect(() => {
    if (isOnTop) {
      fetchPreMessages();
    }
  }, [isOnTop]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const typingDiv = useRef<HTMLDivElement>(null);

  const setTyping = useCallback(
    debounce((data: string) => setTypingUsers((prev) => prev.filter((user) => user !== data)), 500),
    []
  );

  const scrollToBottom = useCallback(
    (type: ScrollBehavior) => {
      if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: type, block: 'end' });
    },
    [bottomRef.current]
  );

  useEffect(() => {
    if (!messages) return;
    if (count === 0) {
      scrollToBottom('instant');
      setCount(messages.length);
      return;
    }
    if (messages.length - count === 1) scrollToBottom('auto');
    // if load more message => keep scroll position
    if (messages.length - count > 1) {
      if (messageRef.current) {
        messageRef.current.scrollTop = messageRef.current.scrollHeight - scrollPosition;
      }
    }
    setCount(messages.length);
  }, [messages]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const fetchPreMessages = useCallback(() => {
    if (!isFetchingPreviousPage && messages && hasPreviousMessages) {
      const element = messageRef.current;
      if (element) {
        setScrollPosition(element.scrollHeight - element.scrollTop);
      }

      fetchPreviousMessages();
    }
  }, [isFetchingPreviousPage, messages, hasPreviousMessages]);

  const scrollToBottomWhenTyping = () => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  };
  // Scroll to the bottom whenever messages change
  useEffect(() => {
    scrollToBottomWhenTyping();
  }, [typingUsers.length]);

  useEffect(() => {
    chatSocket.on(Socket.IS_TYPING + conversationID, (data: string) => {
      setTypingUsers((prev) =>
        prev.some((user) => user === data) || data === currentUserInfo._id ? prev : [...prev, data]
      );
      setIsTyping(true);
    });
    chatSocket.on(Socket.STOP_TYPING + conversationID, (data: string) => {
      setIsTyping(typingUsers.length !== 1);
      setTyping(data);
    });

    if (typingDiv.current) {
      typingDiv.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      if (typingUsers.length === 0 || !isTyping) {
        typingDiv.current.style.opacity = '0';
        typingDiv.current.style.transform = 'translateY(0)';
      } else {
        typingDiv.current.style.opacity = '1';
        typingDiv.current.style.transform = 'translateY(calc(-2rem + 18px))';
      }
    }

    return () => {
      chatSocket.off(Socket.IS_TYPING + conversationID);
      chatSocket.off(Socket.STOP_TYPING + conversationID);
    };
  }, [typingUsers.length, currentUserInfo._id, isTyping]);

  const [openReCall, setOpenReCall] = useState<IReCallProps>({ open: false, type: 'video' });

  return (
    <>
      {isLoadingMessages ? (
        <div className='flex-center p-1'>
          <CircularProgress size={20} className='!text-text-1' />
        </div>
      ) : (
        <>
          <div className='text-sm font-medium'>
            <div className='pt-1' ref={topRef} />
            {messages.map((message, index, messArr) => (
              <MessageBox
                key={conversationID + '|' + message._id}
                type={currentConversation.type}
                isLastMes={index === messArr.length - 1}
                message={message}
                seen={currentConversation.lastMessage.seen}
                isAdmin={isAdmin(message.sender._id)}
                isCreator={isCreator(message.sender._id)}
                isPrevMesGroup={isPrevMesGroup(message, index, messArr)}
                isNextMesGroup={isNextMesGroup(message, index, messArr)}
                isMoreThan10Min={isMoreThan10Min(message, index, messArr)}
                setOpenReCall={setOpenReCall}
              />
            ))}
            <div ref={seenRef} className='w-0 h-0' />
            <div className={typingUsers.length > 0 ? 'pb-6' : 'pb-1'} ref={bottomRef} />
          </div>
          <div className='px-2 flex flex-row items-center opacity-0' ref={typingDiv}>
            {currentConversation.members.map((member) => {
              const index = typingUsers.findIndex((user) => user === member._id);
              if (index !== -1) {
                return (
                  <img
                    key={member._id}
                    className='rounded-full bg-border-1 border-2 border-solid -top-2 absolute h-6 w-6 overflow-hidden'
                    src={getImageURL(member.user_image, 'avatar_mini')}
                    style={{ left: `${index * 30 + typingUsers.length * 10}px` }}
                  />
                );
              }
              return null;
            })}
            <div
              className='typing-indicator rounded-full'
              style={{ left: `${typingUsers.length * 30 + typingUsers.length * 10}px` }}>
              <div /> <div /> <div />
            </div>
          </div>

          <Dialog open={openReCall.open} onOpenChange={() => setOpenReCall((prev) => ({ ...prev, open: false }))}>
            <DialogContent className='bg-background-1 max-w-[600px] border-none'>
              <DialogHeader>
                <DialogTitle>{openReCall.type === 'video' ? t('Video Call') : t('Voice Call')}</DialogTitle>
              </DialogHeader>
              <div className="flex-center">
                {openReCall.type === 'video' ? t('Call the group to start a new video call') : t('Call the group to start a new voice call')}
              </div>
              <DialogFooter>
                <Button
                  onClick={() => {
                    setOpenReCall((prev) => ({ ...prev, open: false }));
                  }}>
                  {t('Cancel')}
                </Button>
                <Button
                  onClick={() => {
                    if (openReCall.type === 'video') {
                      videoChat(conversationID);
                    } else {
                      audioCall(conversationID);
                    }
                    setOpenReCall((prev) => ({ ...prev, open: false }));
                  }}>
                  {t('Call')}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}
    </>
  );
}
