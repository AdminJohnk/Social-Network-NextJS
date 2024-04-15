'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

import { useCurrentUserInfo, useGetAllUsersUsedToChatWith } from '@/hooks/query';
import { useSocketStore } from '@/store/socket';
import { Socket } from '@/lib/utils/constants/SettingSystem';

export const PresenceService = () => {
  const { data: session } = useSession();

  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');
  const { allUsersUsedToChatWith } = useGetAllUsersUsedToChatWith();

  const { presenceSocket, setActiveMembers } = useSocketStore();

  useEffect(() => {
    if (currentUserInfo && allUsersUsedToChatWith) {
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
  }, [currentUserInfo, allUsersUsedToChatWith]);

  return <></>;
};

export const ChatService = () => {
  const { chatSocket } = useSocketStore();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) chatSocket.emit(Socket.SETUP, session.id);
  }, [session]);

  return <></>;
};
