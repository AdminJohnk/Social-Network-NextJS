'use client';

import { useCallback, useMemo } from 'react';
import { useCurrentUserInfo } from '@/hooks/query';
import { IConversation, IMessage } from '@/types';
import { cn } from '@/lib/utils';
import AvatarGroup from './Avatar/AvatarGroup';
import AvatarMessage from './Avatar/AvatarMessage';
import { Link } from '@/navigation';
import { useSession } from 'next-auth/react';
import { useFormatter, useNow, useTranslations } from 'next-intl';
import { isThisWeek, isThisYear, isToday } from 'date-fns';
import ContextMenuConversationBox from './ContextMenuConversationBox';

export interface IConversationBoxProps {
  conversation: IConversation;
}

export default function ConversationBox({ conversation }: IConversationBoxProps) {
  if (!conversation.lastMessage && conversation.type === 'private') return <></>;

  const t = useTranslations();

  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

  useNow({ updateInterval: 1000 * 30 });
  const format = useFormatter();

  const handleDateTime = useCallback((date: string) => {
    const messageDate = new Date(date).getTime();

    // check if today
    if (isToday(messageDate)) {
      return format.relativeTime(new Date(date), new Date());
    }

    // check if this week
    if (isThisWeek(messageDate, { weekStartsOn: 1 })) {
      return (
        format.dateTime(new Date(date), { weekday: 'long' }) +
        ' • ' +
        format.dateTime(new Date(date), { hour: 'numeric', minute: 'numeric', hour12: true })
      );
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

  const isSeen = conversation.seen.some((user) => user._id === currentUserInfo._id);
  const isGroup = conversation.type === 'group';
  const isLastMessageFromCurrentUser =
    conversation.lastMessage && conversation.lastMessage.sender._id === currentUserInfo._id;

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

  const isOwn = useMemo(() => {
    return currentUserInfo._id === conversation.lastMessage?.sender?._id;
  }, [conversation.lastMessage, currentUserInfo]);

  const senderName = useMemo(() => {
    if (isOwn) {
      if (conversation.lastMessage?.type === 'notification') return t('You') + ' ';
      else return t('You') + ': ';
    }

    const lastMessageSenderName = conversation.lastMessage?.sender?.name;
    if (!lastMessageSenderName) return '';

    const arr = lastMessageSenderName.split(' ');

    if (conversation.lastMessage?.type === 'notification') return arr[arr.length - 1] + ' ';

    if (conversation.type === 'private') return '';

    return arr[arr.length - 1] + ': ';
  }, [isOwn, conversation.lastMessage, conversation.type]);

  const hasSeen = useMemo(() => {
    if (!conversation.lastMessage) return false;

    return conversation.seen.some((user) => user._id === currentUserInfo._id);
  }, [conversation.lastMessage, conversation.seen, currentUserInfo]);

  const switchNoti = useCallback((message: IMessage) => {
    if (!message) return;
    switch (message.action) {
      case 'add_member':
        if (message.target) return t('added') + ' ' + message.target.name + ' ' + t('to the group');
        break;
      case 'remove_member':
        if (message.target) return t('removed') + ' ' + message.target.name + ' ' + t('from the group');
        break;
      case 'change_name':
        return t('changed the group name to') + ' ' + message.content;
      case 'change_avatar':
        return t('changed the group avatar');
      case 'leave_conversation':
        return t('left the conversation');
      case 'promote_admin':
        if (message.target) return t('promoted') + ' ' + message.target.name + ' ' + t('to administrator');
        break;
      case 'revoke_admin':
        if (message.target) return t('revoked') + ' ' + message.target.name + ' ' + t('as administrator');
        break;
      default:
        return t(message.content);
    }
  }, []);

  const lastMessageText = useMemo(() => {
    if (conversation.lastMessage?.images?.length! > 0) return t('Sent an image');

    if (conversation.lastMessage?.type === 'voice' || conversation.lastMessage?.type === 'video')
      return t('The call has ended');

    if (conversation.lastMessage?.type === 'notification') return switchNoti(conversation.lastMessage);

    if (conversation.lastMessage?.content) return conversation.lastMessage?.content;

    return t('Start a conversation');
  }, [conversation.lastMessage]);

  return (
    <ContextMenuConversationBox>
      <Link
        href={`/messages/${conversation._id}`}
        className='relative flex items-center gap-4 px-2 py-3 duration-200 rounded-xl hover:bg-hover-1'>
        {conversation.type === 'group' ? (
          <AvatarGroup
            key={conversation._id}
            users={conversation.members}
            image={conversation.image}
            size={50}
          />
        ) : (
          <AvatarMessage key={conversation._id} user={otherUser!} size={50} />
        )}
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1.5'>
            <div className='mr-auto text-sm text-black dark:text-white font-medium'>
              {conversation.name || otherUser!.name}
            </div>
            <div className='text-xs font-light text-gray-500 dark:text-white/70'>
              {handleDateTime(conversation?.lastMessage?.createdAt || conversation.createdAt)}
            </div>
          </div>
          <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
            <span className={cn('truncate text-sm', !isOwn && !hasSeen ? 'font-extrabold' : 'text-text-2')}>
              {senderName + lastMessageText}
            </span>
          </div>
        </div>
      </Link>
    </ContextMenuConversationBox>
  );
}
