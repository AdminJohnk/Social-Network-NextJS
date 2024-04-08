'use client';

import { } from 'react';
import { useMemo, useCallback } from 'react'
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import InputChat from '../InputChat';
import ChatHeading from '../ChatHeading';
import { useCurrentConversationData, useCurrentUserInfo, useMessages } from '@/hooks/query';
import MessageBox from '../MessageBox';
import { IMessage } from '@/types';
import AvatarGroup from '../Avatar/AvatarGroup';
import AvatarMessage from '../Avatar/AvatarMessage';
import { useSession } from 'next-auth/react';

export interface IChatsBubbleProps {
    conversationID: string[] | undefined;
}

export default function ChatsBubble({ conversationID }: IChatsBubbleProps) {
    const t = useTranslations();

    if (conversationID === undefined) return <></>

    const { data: session } = useSession();

    const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

    const { currentConversation, isLoadingCurrentConversation, isFetchingCurrentConversation } = useCurrentConversationData(conversationID[0]);
    const otherUser = useMemo(() => {
        return currentConversation?.members?.filter((member) => member._id !== currentUserInfo?._id)[0];
    }, [currentUserInfo, currentConversation?.members]);


    const { messages, isLoadingMessages, fetchPreviousMessages, isFetchingPreviousPage, hasPreviousMessages } = useMessages(conversationID[0]);

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

    return (
        <div className='flex-1'>
            {/* <!-- chat heading --> */}
            <ChatHeading conversationID={conversationID[0]} otherUser={otherUser} />
            {(isLoadingMessages || isFetchingCurrentConversation || isLoadingCurrentConversation) ? <div className='flex items-center justify-center h-full'>Loading...</div> : (
                <div className='w-full p-5 py-10 overflow-y-auto md:h-[calc(100vh-137px)] h-[calc(100vh-250px)] custom-scrollbar-fg'>
                    <div className='py-10 flex-center flex-col text-center text-sm lg:pt-8'>
                        {currentConversation.type === 'group' ? (
                            <AvatarGroup
                                key={currentConversation._id}
                                users={currentConversation.members}
                                image={currentConversation.image}
                                size={80}
                            />
                        ) : (
                            <Link href={`/profile/${otherUser._id}`}>
                                <AvatarMessage key={otherUser._id} user={otherUser} size={100} />
                            </Link>
                        )}
                        {currentConversation.type === 'group' ? (
                            <>
                                <div className='mt-8'>
                                    <div className='md:text-xl text-base font-medium text-black dark:text-white'>
                                        {currentConversation.name}
                                    </div>
                                    <div className='text-gray-500 text-sm dark:text-white/80'>
                                        {currentConversation.members.length} {t('members')}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='mt-8'>
                                    <div className='md:text-xl text-base font-medium text-black dark:text-white'>
                                        {otherUser.name}
                                    </div>

                                    <div className='text-gray-500 text-sm dark:text-white/80'>
                                        {otherUser.alias && (<>@{otherUser.alias}</>)}
                                    </div>
                                </div>
                                <div className='mt-3.5'>
                                    <Link
                                        href={`/profile/${otherUser._id}`}
                                        className='inline-block rounded-lg px-4 py-1.5 text-sm font-semibold bg-foreground-2'>
                                        {t('View profile')}
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>

                    <div className='text-sm font-medium'>
                        {messages?.map((message, index, messArr) => (
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
                    </div>
                </div>
                // <!-- sending message area --> 
            )}
            <InputChat conversationID={conversationID}
                members={currentConversation?.members} />
        </div>
    );
}
