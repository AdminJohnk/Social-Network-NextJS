'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from '@/navigation';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { v4 as uuidv4 } from 'uuid';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from '@/components/ui/context-menu';
import { useCurrentUserInfo } from '@/hooks/query';
import { useLeaveGroup, useSendMessage } from '@/hooks/mutation';
import { useSocketStore } from '@/store/socket';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { IConversation, IMessage } from '@/types';

export interface IContextMenuConversationBoxProps {
  children: React.ReactNode;
  conversation: IConversation;
}

export default function ContextMenuConversationBox({
  children,
  conversation
}: IContextMenuConversationBoxProps) {
  const t = useTranslations();
  const { data: session } = useSession();

  const router = useRouter();
  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);
  const { chatSocket } = useSocketStore();

  const { mutateLeaveGroup } = useLeaveGroup();
  const { mutateSendMessage } = useSendMessage();

  const isGroup = conversation.type === 'group';
  const isSeen =
    conversation.lastMessage.sender._id === currentUserInfo._id ||
    conversation.seen.some((seen) => seen._id === currentUserInfo._id);

  const otherUser = useMemo(() => {
    if (isGroup) return;

    return conversation.members.find((member) => member._id !== currentUserInfo._id);
  }, [currentUserInfo, conversation?.members]);

  // const items: MenuProps['items'] = [
  //   {
  //     label: isSeen ? 'Undo reading' : 'Mark as read',
  //     style: { display: isLastMessageFromCurrentUser ? 'none' : 'block' },
  //     key: '1',
  //     icon: <FontAwesomeIcon icon={isSeen ? faReSquareCheck : faSquareCheck} />,
  //     onClick: () => {
  //       const emitType = isSeen ? Socket.UNSEEN_MSG : Socket.SEEN_MSG;
  //       chatSocket.emit(emitType, { conversationID: conversation._id, userID: currentUserInfo._id });
  //     }
  //   },
  //   {
  //     label: 'Mute notifications',
  //     key: '2',
  //     icon: <FontAwesomeIcon icon={faBellSlash} />
  //   },
  //   {
  //     label: 'View profile',
  //     key: '4',
  //     icon: <FontAwesomeIcon icon={faUser} />,
  //     onClick: () => navigate(`/user/${otherUser._id}`),
  //     style: { display: isGroup ? 'none' : 'block' }
  //   },
  //   { type: 'divider' },
  //   {
  //     label: 'Audio call',
  //     key: '5',
  //     icon: <FontAwesomeIcon icon={faPhone} />,
  //     onClick: () => audioCall(conversation._id)
  //   },
  //   {
  //     label: 'Video chat',
  //     key: '6',
  //     icon: <FontAwesomeIcon icon={faVideoCamera} />,
  //     onClick: () => videoChat(conversation._id)
  //   },
  //   { type: 'divider' },
  //   {
  //     label: isGroup ? 'Leave group' : 'Delete chat',
  //     danger: true,
  //     key: '3',
  //     onClick: () => {
  //       mutateLeaveGroup(conversation._id);
  //       const message = {
  //         _id: uuidv4().replace(/-/g, ''),
  //         conversation_id: conversation._id,
  //         sender: {
  //           _id: currentUserInfo._id,
  //           user_image: currentUserInfo.user_image,
  //           name: currentUserInfo.name
  //         },
  //         isSending: true,
  //         type: 'notification',
  //         content: 'left the group',
  //
  //       };

  //       mutateSendMessage(message as unknown as IMessage);
  //       chatSocket.emit(Socket.PRIVATE_MSG, { conversationID: conversation._id, message });
  //     },
  //     icon: <FontAwesomeIcon icon={isGroup ? faRightFromBracket : faTrash} />
  //   }
  // ];
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className='!w-fit'>
        <ContextMenuItem
          onClick={() => {
            const emitType = isSeen ? Socket.UNSEEN_MSG : Socket.SEEN_MSG;
            chatSocket.emit(emitType, { conversationID: conversation._id, userID: currentUserInfo._id });
          }}>
          {isSeen ? t('Undo reading') : t('Mark as read')}
        </ContextMenuItem>
        <ContextMenuItem onClick={() => {}}>{t('Mute notifications')}</ContextMenuItem>
        {!isGroup && (
          <ContextMenuItem onClick={() => router.push(`/profile/${otherUser?._id}`)}>
            {t('View profile')}
          </ContextMenuItem>
        )}
        <ContextMenuSeparator />
        <ContextMenuItem onClick={() => {}}>{t('Audio call')}</ContextMenuItem>
        <ContextMenuItem onClick={() => {}}>{t('Video chat')}</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem
          onClick={() => {
            mutateLeaveGroup(conversation._id);
            const message = {
              _id: uuidv4().replace(/-/g, ''),
              conversation_id: conversation._id,
              sender: {
                _id: currentUserInfo._id,
                user_image: currentUserInfo.user_image,
                name: currentUserInfo.name
              },
              isSending: true,
              type: 'notification',
              action: 'leave_conversation',
              createdAt: new Date()
            };

            mutateSendMessage(message as unknown as IMessage);
            chatSocket.emit(Socket.PRIVATE_MSG, { conversationID: conversation._id, message });
          }}>
          {isGroup ? t('Leave group') : t('Delete chat')}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
