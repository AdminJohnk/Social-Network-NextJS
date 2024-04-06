'use client';

import { useMemo } from 'react';
import { useCurrentUserInfo } from '@/hooks/query';
import { getDateTimeToNow } from '@/lib/descriptions/formatDateTime';
import { IConversation } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import AvatarGroup from '../Avatar/AvatarGroup';
import AvatarMessage from '../Avatar/AvatarMessage';

export interface IConversationBoxProps {
    conversation: IConversation;
}

export default function ConversationBox({ conversation }: IConversationBoxProps) {
    if (!conversation.lastMessage) return <></>;

    const { currentUserInfo } = useCurrentUserInfo();

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
    //         createdAt: new Date()
    //       };

    //       mutateSendMessage(message as unknown as IMessage);
    //       chatSocket.emit(Socket.PRIVATE_MSG, { conversationID: conversation._id, message });
    //     },
    //     icon: <FontAwesomeIcon icon={isGroup ? faRightFromBracket : faTrash} />
    //   }
    // ];

    const isOwn = useMemo(() => {
        return currentUserInfo._id === conversation.lastMessage?.sender?._id;
    }, [conversation.lastMessage]);

    const senderName = useMemo(() => {
        if (isOwn) {
            if (conversation.lastMessage.type === 'notification') return 'You ';
            else return 'You: ';
        }

        const lastMessageSenderName = conversation.lastMessage?.sender?.name;
        if (!lastMessageSenderName) return '';

        const arr = lastMessageSenderName.split(' ');

        if (conversation.lastMessage.type === 'notification') return arr[arr.length - 1] + ' ';

        if (conversation.type === 'private') return '';

        return arr[arr.length - 1] + ': ';
    }, [isOwn, conversation.lastMessage, conversation.type]);

    const hasSeen = useMemo(() => {
        if (!conversation.lastMessage) return false;

        return conversation.seen.some((user) => user._id === currentUserInfo._id);
    }, [conversation.lastMessage, conversation.seen]);

    const lastMessageText = useMemo(() => {
        if (conversation.lastMessage?.images?.length! > 0) return 'Sent an image';

        if (conversation.lastMessage?.type === 'voice' || conversation.lastMessage?.type === 'video')
            return 'The call has ended';

        if (conversation.lastMessage?.content) return conversation.lastMessage.content;

        return 'Start a conversation';
    }, [conversation.lastMessage]);

    return (
        <Link
            href='#'
            className='relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-hover-1'>
            <div className='relative w-14 h-14 shrink-0'>
                {conversation.type === 'group' ? (
                    <AvatarGroup key={conversation._id} users={conversation.members} image={conversation.image} size={50} />
                ) : (
                    <AvatarMessage key={conversation._id} user={otherUser!} size={50} />
                )}
            </div>
            <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-1.5'>
                    <div className='mr-auto text-sm text-black dark:text-white font-medium'> {conversation.name ?? otherUser!.name}</div>
                    <div className='text-xs font-light text-gray-500 dark:text-white/70'>
                        {conversation.lastMessage?.createdAt && (
                            getDateTimeToNow(conversation.lastMessage.createdAt)
                        )}
                    </div>
                </div>
                <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
                    <span className={cn('truncate text-sm', !isOwn && !hasSeen && 'font-bold')}>
                        {senderName + lastMessageText}
                    </span>
                </div>
            </div>
        </Link>
    );
}
