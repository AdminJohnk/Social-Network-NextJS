'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
// import { v4 as uuidv4 } from 'uuid';
import { FaPhone, FaVideo } from 'react-icons/fa6';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';

import { useCurrentUserInfo, useGetAllUsersUsedToChatWith } from '@/hooks/query';
import {
  useMutateConversation,
  useReceiveConversation,
  useReceiveDissolveGroup,
  useReceiveLeaveGroup,
  useReceiveMessage,
  useReceiveSeenMessage
} from '@/hooks/mutation';
import { useSocketStore } from '@/store/socket';
import { IConversation, IMessage, INotification, ISocketCall } from '@/types';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { getImageURL } from '@/lib/utils';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { audioCall, videoChat } from '@/lib/utils/call';
import { showNotifyToast } from '../ui/toast';
import NotificationItem from '../pages/Notification/NotificationItem';

export const PresenceService = () => {
  const { currentUserInfo } = useCurrentUserInfo();
  const { allUsersUsedToChatWith } = useGetAllUsersUsedToChatWith();

  const { presenceSocket, setActiveMembers } = useSocketStore();

  useEffect(() => {
    if (currentUserInfo && allUsersUsedToChatWith && presenceSocket) {
      presenceSocket.emit(Socket.SET_PRESENCE, currentUserInfo._id);

      currentUserInfo.members = [...currentUserInfo.friends, ...allUsersUsedToChatWith].filter(
        (item, index, arr) =>
          arr.findIndex((t) => t._id === item._id) === index && item._id !== currentUserInfo._id
      );

      const members = [...currentUserInfo.members].map((member) => ({
        _id: member._id,
        last_online: member.last_online,
        first_online: false,
        is_online: false
      }));

      members.push({
        _id: currentUserInfo._id,
        last_online: currentUserInfo.last_online,
        first_online: true,
        is_online: true
      });

      let membersArr = [...members];

      presenceSocket.on(Socket.SET_ACTIVE_MEM, (data: string[]) => {
        membersArr = [...membersArr].map((member) => {
          if (data.includes(member._id)) {
            return { ...member, first_online: true, is_online: true };
          }
          return { ...member, last_online: new Date().toUTCString(), is_online: false };
        });

        setActiveMembers(membersArr);
      });
    }

    return () => {
      if (presenceSocket) {
        presenceSocket.off(Socket.SET_ACTIVE_MEM);
      }
    };
  }, [currentUserInfo, allUsersUsedToChatWith, presenceSocket]);

  return <></>;
};

export const ChatService = () => {
  const t = useTranslations();
  const { chatSocket } = useSocketStore();
  const notiCall = new Audio('/sounds/sound-noti-call.wav');
  notiCall.volume = 0.3;

  const playNoti = useCallback(() => {
    notiCall.currentTime = 0;
    notiCall.play();
  }, [notiCall]);

  const pauseNoti = useCallback(() => {
    notiCall.pause();
  }, [notiCall]);

  const queryClient = useQueryClient();

  const { currentUserInfo } = useCurrentUserInfo();

  // const { mutateSendMessage } = useSendMessage();
  const { mutateReceiveConversation } = useReceiveConversation();
  const { mutateReceiveLeaveGroup } = useReceiveLeaveGroup();
  const { mutateReceiveDissolveGroup } = useReceiveDissolveGroup();
  const { mutateReceiveSeenMessage } = useReceiveSeenMessage();
  const { mutateReceiveMessage } = useReceiveMessage(currentUserInfo._id);
  const { mutateConversation } = useMutateConversation(currentUserInfo._id || '');

  const [openCall, setOpenCall] = useState(false);
  const [dataCall, setDataCall] = useState<ISocketCall>();
  const [callType, setCallType] = useState<string>();
  const [isMissed, setIsMissed] = useState(false);

  // const handleSendEndCall = useCallback(
  //   (data: ISocketCall, type: 'video' | 'voice', status: 'missed' | 'ended') => {
  //     const message = {
  //       _id: uuidv4().replace(/-/g, ''),
  //       conversation_id: data?.conversation_id,
  //       sender: {
  //         _id: data?.author._id,
  //         user_image: data?.author.user_image,
  //         name: data?.author.name
  //       },
  //       isSending: true,
  //       content: `${capitalizeFirstLetter(type)} call ${status}`,
  //       seen: [],
  //       type: type,
  //       createdAt: new Date()
  //     };

  //     mutateSendMessage(message as unknown as IMessage);
  //     chatSocket.emit(Socket.PRIVATE_MSG, { conversationID: data?.conversation_id, message });
  //   },
  //   []
  // );

  useEffect(() => {
    chatSocket.emit(Socket.SETUP, currentUserInfo._id);

    chatSocket.on(Socket.PRIVATE_CONVERSATION, (conversation: IConversation) => {
      mutateReceiveConversation(conversation);
    });
    chatSocket.on(Socket.LEAVE_GROUP, (conversation: IConversation) => {
      mutateReceiveLeaveGroup(conversation);
    });
    chatSocket.on(Socket.DISSOLVE_GROUP, (conversation: IConversation) => {
      mutateReceiveDissolveGroup(conversation);
    });
    chatSocket.on(Socket.PRIVATE_MSG, (message: IMessage) => {
      mutateReceiveMessage(message);
    });
    chatSocket.on(Socket.SEEN_MSG, (data: { conversation: IConversation; message: IMessage }) => {
      mutateReceiveSeenMessage(data);
    });
    chatSocket.on(Socket.CHANGE_CONVERSATION_IMAGE, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'image' });
    });
    chatSocket.on(Socket.CHANGE_CONVERSATION_COVER, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'cover_image' });
    });
    chatSocket.on(Socket.CHANGE_CONVERSATION_NAME, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'name' });
    });
    chatSocket.on(Socket.ADD_MEMBER, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'add_member' });
    });
    chatSocket.on(Socket.REMOVE_MEMBER, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'remove_member' });
    });
    chatSocket.on(Socket.COMMISSION_ADMIN, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'commission_admin' });
    });
    chatSocket.on(Socket.DECOMMISSION_ADMIN, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'remove_admin' });
    });
    chatSocket.on(Socket.VIDEO_CALL, (data: ISocketCall) => {
      playNoti();
      setOpenCall(true);
      setDataCall(data);
      setCallType('video');
      setIsMissed(false);
    });
    chatSocket.on(Socket.VOICE_CALL, (data: ISocketCall) => {
      playNoti();
      setOpenCall(true);
      setDataCall(data);
      setCallType('voice');
      setIsMissed(false);
    });
    chatSocket.on(Socket.END_VIDEO_CALL, (data: ISocketCall) => {
      queryClient.invalidateQueries({ queryKey: ['called'] });
      setIsMissed(true);
      pauseNoti();
      if (openCall) {
        setDataCall(data);
        setCallType(undefined);
      } else {
        setDataCall(undefined);
        setCallType(undefined);
      }
    });
    chatSocket.on(Socket.END_VOICE_CALL, (data: ISocketCall) => {
      queryClient.invalidateQueries({ queryKey: ['called'] });
      pauseNoti();
      setIsMissed(true);
      if (openCall) {
        setDataCall(data);
        setCallType(undefined);
      } else {
        setDataCall(undefined);
        setCallType(undefined);
      }
    });
    // chatSocket.on(Socket.SEND_END_VIDEO_CALL, (data: ISocketCall) => {
    //   handleSendEndCall(data, 'video', data.type);
    // });
    // chatSocket.on(Socket.SEND_END_VOICE_CALL, (data: ISocketCall) => {
    //   handleSendEndCall(data, 'voice', data.type);
    // });

    return () => {
      chatSocket.off(Socket.PRIVATE_CONVERSATION);
      chatSocket.off(Socket.LEAVE_GROUP);
      chatSocket.off(Socket.DISSOLVE_GROUP);
      chatSocket.off(Socket.PRIVATE_MSG);
      chatSocket.off(Socket.SEEN_MSG);
      chatSocket.off(Socket.CHANGE_CONVERSATION_IMAGE);
      chatSocket.off(Socket.CHANGE_CONVERSATION_COVER);
      chatSocket.off(Socket.CHANGE_CONVERSATION_NAME);
      chatSocket.off(Socket.ADD_MEMBER);
      chatSocket.off(Socket.REMOVE_MEMBER);
      chatSocket.off(Socket.COMMISSION_ADMIN);
      chatSocket.off(Socket.DECOMMISSION_ADMIN);
      chatSocket.off(Socket.VIDEO_CALL);
      chatSocket.off(Socket.VOICE_CALL);
      chatSocket.off(Socket.END_VIDEO_CALL);
      chatSocket.off(Socket.END_VOICE_CALL);
      chatSocket.off(Socket.SEND_END_VIDEO_CALL);
      chatSocket.off(Socket.SEND_END_VOICE_CALL);
    };
  }, []);

  return (
    <Dialog open={openCall} onOpenChange={setOpenCall}>
      <DialogContent className='max-w-[600px] border-none bg-background-1'>
        <DialogHeader>
          <DialogTitle>{callType === 'video' ? t('Video Call') : t('Voice Call')}</DialogTitle>
        </DialogHeader>
        {callType === 'video' ? <FaVideo className='text-2xl' /> : <FaPhone className='text-2xl' />}
        <span className='ml-2 select-none text-left text-sm font-medium'>
          {callType === 'video' ? t('Video Call') : t('Voice Call')}
        </span>
        <div className='flex flex-row items-center justify-center pb-2 pt-4'>
          <Image
            width={500}
            height={500}
            className='mr-3 h-12 w-12 overflow-hidden rounded-full'
            src={getImageURL(dataCall?.user_image, 'avatar_mini')}
            alt='avatar'
          />
          <div className='text-lg font-semibold'>
            {isMissed ? (
              <>
                {callType === 'video' ? t('You missed a video call') : t('You missed a voice call')}&nbsp;
                {dataCall?.typeofConversation === 'group'
                  ? `${t('from')} ${dataCall?.conversation_name}`
                  : `${t('from')} ${dataCall?.author.name}`}
              </>
            ) : (
              <>
                {dataCall?.author.name} {t('is calling')}&nbsp;
                {dataCall?.typeofConversation === 'group'
                  ? `${t('from')} ${dataCall?.conversation_name}`
                  : t('you')}
              </>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button
            type='button'
            onClick={() => {
              if (!isMissed) {
                callType === 'video'
                  ? chatSocket.emit(Socket.LEAVE_VIDEO_CALL, { ...dataCall, type: 'missed' })
                  : chatSocket.emit(Socket.LEAVE_VOICE_CALL, { ...dataCall, type: 'missed' });
              }
              pauseNoti();
              setOpenCall(false);
            }}>
            {isMissed ? t('Close') : t('Decline')}
          </Button>
          {!isMissed && (
            <Button
              type='button'
              onClick={() => {
                pauseNoti();
                callType === 'video'
                  ? videoChat(dataCall!.conversation_id)
                  : audioCall(dataCall!.conversation_id);
                setOpenCall(false);
              }}>
              {t('Accept')}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const NotifyService = () => {
  const { notiSocket } = useSocketStore();
  const { currentUserInfo } = useCurrentUserInfo();

  const queryClient = useQueryClient();

  useEffect(() => {
    notiSocket.emit(Socket.SETUP, currentUserInfo._id);

    notiSocket.on(Socket.NOTI, async (notification: INotification) => {
      await queryClient.invalidateQueries({ queryKey: ['unRedNotiNumber'] });
      await queryClient.invalidateQueries({ queryKey: ['allNotifications'] });
      showNotifyToast(<NotificationItem notification={notification} />);
    });
    return () => {
      if (notiSocket) {
        notiSocket.off(Socket.NOTI_ARR);
      }
    };
  }, []);

  return <></>;
};
