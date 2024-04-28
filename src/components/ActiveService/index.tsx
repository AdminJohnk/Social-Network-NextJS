'use client';

import { useCallback, useEffect, useState } from 'react';
import useSound from 'use-sound';
import { useTranslations } from 'next-intl';
import { v4 as uuidv4 } from 'uuid';
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
  useReceiveSeenConversation,
  useSendMessage
} from '@/hooks/mutation';
import { useSocketStore } from '@/store/socket';
import { IConversation, IMessage, ISocketCall } from '@/types';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { getImageURL } from '@/lib/utils';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { audioCall, videoChat } from '@/lib/utils/call';
import { capitalizeFirstLetter } from '@/lib/utils/convertText';

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
  const [soundCall, exposedSound] = useSound('/sounds/sound-noti-call.wav', { volume: 0.3 });

  const queryClient = useQueryClient();

  const { currentUserInfo } = useCurrentUserInfo();

  const { mutateSendMessage } = useSendMessage();
  const { mutateReceiveConversation } = useReceiveConversation();
  const { mutateReceiveLeaveGroup } = useReceiveLeaveGroup();
  const { mutateReceiveDissolveGroup } = useReceiveDissolveGroup();
  const { mutateReceiveSeenConversation } = useReceiveSeenConversation();
  const { mutateReceiveMessage } = useReceiveMessage(currentUserInfo._id);
  const { mutateConversation } = useMutateConversation(currentUserInfo._id || '');

  const [openCall, setOpenCall] = useState(false);
  const [dataCall, setDataCall] = useState<ISocketCall>();
  const [callType, setCallType] = useState<string>();
  const [isMissed, setIsMissed] = useState(false);

  const handleSendEndCall = useCallback(
    (data: ISocketCall, type: 'video' | 'voice', status: 'missed' | 'ended') => {
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
        seen: [],
        type: type,
        createdAt: new Date()
      };

      mutateSendMessage(message as unknown as IMessage);
      chatSocket.emit(Socket.PRIVATE_MSG, { conversationID: data?.conversation_id, message });
    },
    []
  );

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
    chatSocket.on(Socket.SEEN_MSG, (conversation: IConversation) => {
      mutateReceiveSeenConversation(conversation);
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
      soundCall();
      setOpenCall(true);
      setDataCall(data);
      setCallType('video');
      setIsMissed(false);
    });
    chatSocket.on(Socket.VOICE_CALL, (data: ISocketCall) => {
      soundCall();
      setOpenCall(true);
      setDataCall(data);
      setCallType('voice');
      setIsMissed(false);
    });
    chatSocket.on(Socket.END_VIDEO_CALL, (data: ISocketCall) => {
      queryClient.invalidateQueries({ queryKey: ['called'] });
      if (openCall) {
        exposedSound.stop();
        setDataCall(data);
        setCallType('video');
        setIsMissed(true);
      }
    });
    chatSocket.on(Socket.END_VOICE_CALL, (data: ISocketCall) => {
      queryClient.invalidateQueries({ queryKey: ['called'] });
      if (openCall) {
        exposedSound.stop();
        setDataCall(data);
        setCallType('voice');
        setIsMissed(true);
      }
    });
    chatSocket.on(Socket.SEND_END_VIDEO_CALL, (data: ISocketCall) => {
      handleSendEndCall(data, 'video', data.type);
    });
    chatSocket.on(Socket.SEND_END_VOICE_CALL, (data: ISocketCall) => {
      handleSendEndCall(data, 'voice', data.type);
    });

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
      <DialogContent className='bg-background-1 max-w-[600px] border-none'>
        <DialogHeader>
          <DialogTitle>{callType === 'video' ? t('Video Call') : t('Voice Call')}</DialogTitle>
        </DialogHeader>
        {callType === 'video' ? <FaVideo className='text-2xl' /> : <FaPhone className='text-2xl' />}
        <span className='text-sm font-medium text-left ml-2 select-none'>
          {callType === 'video' ? t('Video Call') : t('Voice Call')}
        </span>
        <div className='flex flex-row items-center justify-center pt-4 pb-2'>
          <Image
            width={500}
            height={500}
            className='h-12 w-12 mr-3 rounded-full overflow-hidden'
            src={getImageURL(dataCall?.user_image, 'avatar_mini')}
            alt='avatar'
          />
          <div className='font-semibold text-lg'>
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
            onClick={() => {
              if (isMissed) setOpenCall(false);
              else {
                callType === 'video'
                  ? chatSocket.emit(Socket.LEAVE_VIDEO_CALL, { ...dataCall, type: 'missed' })
                  : chatSocket.emit(Socket.LEAVE_VOICE_CALL, { ...dataCall, type: 'missed' });
                exposedSound.stop();
                setOpenCall(false);
              }
            }}>
            {isMissed ? t('Close') : t('Decline')}
          </Button>
          {!isMissed && (
            <Button
              onClick={() => {
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
