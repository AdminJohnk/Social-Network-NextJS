'use client';

import { useFormatter, useNow, useTranslations } from 'next-intl';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { isThisWeek, isThisYear } from 'date-fns';
import { useQueryClient } from '@tanstack/react-query';
import { Skeleton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import useSound from 'use-sound';

import { queryCache, useCurrentConversationData, useCurrentUserInfo, useMessagesOption } from '@/hooks/query';
import AvatarGroup from './Avatar/AvatarGroup';
import { Link } from '@/navigation';
import AvatarMessage from './Avatar/AvatarMessage';
import { IMessage, ISocketCall, IUserInfo } from '@/types';
import { useSocketStore } from '@/store/socket';
import { audioCall, videoChat } from '@/lib/utils/call';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { useSendMessage } from '@/hooks/mutation';
import { capitalizeFirstLetter } from '@/lib/utils/convertText';
import { getImageURL } from '@/lib/utils';
import { FaPhone, FaVideo } from 'react-icons/fa';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export interface IChatHeadingProps {
  conversationID: string;
  otherUser: IUserInfo;
}


export default function ChatHeading({ conversationID, otherUser }: IChatHeadingProps) {
  const t = useTranslations();
  const now = useNow({ updateInterval: 1000 * 30 });
  const format = useFormatter();

  const { chatSocket } = useSocketStore();
  const queryClient = useQueryClient();
  const [soundCall, exposedSound] = useSound('/sounds/sound-noti-call.wav', { volume: 0.3 });

  const handleDateTime = useCallback((date: string) => {
    const messageDate = new Date(date).getTime();

    // check if this week
    if (isThisWeek(messageDate, { weekStartsOn: 1 })) {
      return format.relativeTime(new Date(date), new Date());
    }

    // check if this year
    if (isThisYear(messageDate)) {
      return (
        format.dateTime(new Date(date), {
          month: 'long',
          day: 'numeric'
        }) +
        ' • ' +
        format.dateTime(new Date(date), { hour: 'numeric', minute: 'numeric', hour12: true })
      );
    }

    return (
      format.dateTime(new Date(date), {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) +
      ' • ' +
      format.dateTime(new Date(date), { hour: 'numeric', minute: 'numeric', hour12: true })
    );
  }, []);

  const { currentConversation, isFetchingCurrentConversation } = useCurrentConversationData(conversationID);

  const { currentUserInfo } = useCurrentUserInfo();

  const { activeMembers: members } = useSocketStore();

  const activeUser = members.find((member) => member._id === otherUser?._id);

  const statusText = useMemo(() => {
    if (currentConversation) {
      if (currentConversation.type === 'group') {
        const membersActive = currentConversation.members.filter(
          (member) =>
            member._id === currentUserInfo._id ||
            members.some((user) => user._id === member._id && user.is_online)
        );

        const memberCount = currentConversation.members.length;
        const activeMemberCount = membersActive.length;

        return `${memberCount} ${t('members')} - ${activeMemberCount === 1 ? t('Only you') : activeMemberCount
          } ${t('online')}`;
      }

      const lastOnline =
        !activeUser?.first_online || !activeUser ? otherUser.last_online : activeUser.last_online;

      return activeUser?.is_online ? t('Online') : t('Last seen at') + ' ' + handleDateTime(lastOnline);
    }
  }, [currentConversation, activeUser, members, currentUserInfo, now, otherUser]);

  const { mutateSendMessage } = useSendMessage();

  const handleSendEndCall = useCallback((data: ISocketCall, type: string, status: string) => {
    const message = {
      _id: uuidv4().replace(/-/g, ''),
      conversation_id: data?.conversation_id,
      sender: {
        _id: data?.author._id,
        user_image: data?.author.user_image,
        name: data?.author.name
      },
      isSending: true,
      content: `${capitalizeFirstLetter(type)} call ${status}`,
      type: type,
      createdAt: new Date()
    };

    mutateSendMessage(message as unknown as IMessage);
    chatSocket.emit(Socket.PRIVATE_MSG, { conversationID: data?.conversation_id, message });
  }, []);

  const [openCall, setOpenCall] = useState(false);
  const [socketCall, setSocketCall] = useState<ISocketCall>();
  const [callType, setCallType] = useState<string>();
  const [isMissed, setIsMissed] = useState(false);

  const notiCall = (data: ISocketCall, type: string, isMissed: boolean) => {
    if (isMissed)
      return (
        <Dialog open={openCall} onOpenChange={setOpenCall}>
          <DialogContent className='bg-background-1 max-w-[600px] border-none'>
            <DialogHeader>
              <DialogTitle>{type === 'video' ? t('Video Call') : t('Voice Call')}</DialogTitle>
            </DialogHeader>
            {type === 'video' ? (<FaVideo className='text-2xl' />) : (<FaPhone className='text-2xl' />)}
            <span className='text-sm font-medium text-left ml-2 select-none'>{type === 'video' ? t('Video Call') : t('Voice Call')}</span>
            <div className='flex flex-row items-center justify-center pt-4 pb-2'>
              <Image
                width={500}
                height={500}
                className='h-12 w-12 mr-3 rounded-full overflow-hidden'
                src={getImageURL(data?.user_image, 'avatar')}
                alt='avatar'
              />
              <div className='font-semibold text-lg'>
                {type === 'video' ? t('You missed a video call') : t('You missed a voice call')}&nbsp;
                {data?.typeofConversation === 'group'
                  ? `${t('from')} ${data?.conversation_name}`
                  : `${t('from')} ${data?.author.name}`}
              </div>
            </div>
            <DialogFooter>
              <div className='mt-6 flex items-center justify-end gap-x-3'>
                <Button
                  onClick={() => {
                    setOpenCall(false);
                  }}>
                  {t('Close')}
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );

    return (
      <Dialog open={openCall} onOpenChange={setOpenCall}>
        <DialogContent className='bg-background-1 max-w-[600px] border-none'>
          <DialogHeader>
            <DialogTitle>{type === 'video' ? t('Video Call') : t('Voice Call')}</DialogTitle>
          </DialogHeader>
          {type === 'video' ? (<FaVideo className='text-2xl' />) : (<FaPhone className='text-2xl' />)}
          <span className='text-sm font-medium text-left ml-2 select-none'>{type === 'video' ? t('Video Call') : t('Voice Call')}</span>
          <div className='flex flex-row items-center justify-center pt-4 pb-2'>
            <Image
              width={500}
              height={500}
              className='h-12 w-12 mr-3 rounded-full overflow-hidden'
              src={getImageURL(data?.user_image, 'avatar_mini')}
              alt='avatar'
            />
            <div className='font-semibold text-lg'>
              {data?.author.name} {t('is calling')}&nbsp;
              {data?.typeofConversation === 'group' ? `${t('from')} ${data?.conversation_name}` : t('you')}
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                chatSocket.emit(Socket.LEAVE_VIDEO_CALL, { ...data, type: 'missed' });
                exposedSound.stop();
                setOpenCall(false);
              }}>
              {t('Decline')}
            </Button>
            <Button
              onClick={() => {
                videoChat(data?.conversation_id);
                soundCall()
                setOpenCall(false);
              }}>
              {t('Accept')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  };

  useEffect(() => {
    chatSocket.on(Socket.VIDEO_CALL, (data: ISocketCall) => {
      soundCall();
      setOpenCall(true);
      setSocketCall(data);
      setCallType('video');
      setIsMissed(false);
    });

    chatSocket.on(Socket.VOICE_CALL, (data: ISocketCall) => {
      soundCall();
      setOpenCall(true);
      setSocketCall(data);
      setCallType('voice');
      setIsMissed(false);
    });

    chatSocket.on(Socket.END_VIDEO_CALL, (data: ISocketCall) => {
      queryClient.invalidateQueries({ queryKey: ['called'] });
      if (openCall) {
        exposedSound.stop();
        setSocketCall(data);
        setCallType('video');
        setIsMissed(true);
      }
    });

    chatSocket.on(Socket.END_VOICE_CALL, (data: ISocketCall) => {
      queryClient.invalidateQueries({ queryKey: ['called'] });
      if (openCall) {
        exposedSound.stop();
        setSocketCall(data);
        setCallType('voice');
        setIsMissed(true);
      }
    });

    chatSocket.on(Socket.SEND_END_VIDEO_CALL, (data: ISocketCall) => {
      handleSendEndCall(data, 'video', data?.type);
    });

    chatSocket.on(Socket.SEND_END_VOICE_CALL, (data: ISocketCall) => {
      handleSendEndCall(data, 'voice', data?.type);
    });

    return () => {
      chatSocket.off(Socket.VIDEO_CALL);
      chatSocket.off(Socket.VOICE_CALL);
      chatSocket.off(Socket.END_VIDEO_CALL);
      chatSocket.off(Socket.END_VOICE_CALL);
      chatSocket.off(Socket.SEND_END_VIDEO_CALL);
      chatSocket.off(Socket.SEND_END_VOICE_CALL);

      if (queryCache.find({ queryKey: ['messages', conversationID] })?.getObserversCount() ?? 0 === 0) {
        // remove all pages of messages from cache except the first page
        queryClient.removeQueries({ queryKey: ['messages', conversationID], exact: true });
        queryClient.prefetchInfiniteQuery(useMessagesOption(conversationID));
      }
    };
  }, [openCall, socketCall, callType, isMissed]);

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
              <div className='text-base font-bold'> {currentConversation.name || otherUser.name}</div>
              <div className='text-xs text-green-500 font-semibold'> {statusText} </div>
            </div>
          </div>

          {notiCall(socketCall!, callType!, isMissed)}

          <div className='flex items-center gap-2'>
            <button type='button' className='hover:bg-hover-1 p-1.5 rounded-full' onClick={() => { audioCall(conversationID) }}>
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
            <button type='button' className='hover:bg-hover-1 p-1.5 rounded-full' onClick={() => { videoChat(conversationID) }}>
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
