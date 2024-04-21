'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

import { useCurrentUserInfo, useGetAllUsersUsedToChatWith } from '@/hooks/query';
import {
  useMutateConversation,
  useReceiveConversation,
  useReceiveDissolveGroup,
  useReceiveLeaveGroup,
  useReceiveMessage,
  useReceiveSeenConversation
} from '@/hooks/mutation';
import { useSocketStore } from '@/store/socket';
import { IConversation, IMessage } from '@/types';
import { Socket } from '@/lib/utils/constants/SettingSystem';

export const PresenceService = () => {
  const { data: session } = useSession();

  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');
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
  }, [currentUserInfo, allUsersUsedToChatWith, presenceSocket]);

  return <></>;
};

export const ChatService = () => {
  const { chatSocket } = useSocketStore();
  const { data: session } = useSession();

  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');

  const { mutateReceiveConversation } = useReceiveConversation();
  const { mutateReceiveLeaveGroup } = useReceiveLeaveGroup();
  const { mutateReceiveDissolveGroup } = useReceiveDissolveGroup();
  const { mutateReceiveSeenConversation } = useReceiveSeenConversation();
  const { mutateReceiveMessage } = useReceiveMessage(currentUserInfo._id);
  const { mutateConversation } = useMutateConversation(currentUserInfo._id || '');

  useEffect(() => {
    if (session && chatSocket) chatSocket.emit(Socket.SETUP, session.id);
  }, [session, chatSocket]);

  useEffect(() => {
    if (currentUserInfo && chatSocket) {
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
    }
  }, [currentUserInfo, chatSocket]);

  return <></>;
};
