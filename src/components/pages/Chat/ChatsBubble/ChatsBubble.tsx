'use client';

import { useMemo, useCallback } from 'react'
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import * as React from 'react';
import InputChat from '../InputChat';
import ChatHeading from '../ChatHeading';
import { useCurrentConversationData, useCurrentUserInfo, useMessages } from '@/hooks/query';
import MessageBox from '../MessageBox';
import { IMessage } from '@/types';

export interface IChatsBubbleProps {
    conversationID: string[] | undefined;
}

export default function ChatsBubble({ conversationID }: IChatsBubbleProps) {
    const t = useTranslations();

    if (conversationID === undefined) return <></>

    const { currentUserInfo } = useCurrentUserInfo();

    const { currentConversation } = useCurrentConversationData(conversationID[0]);
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
            <ChatHeading conversationID={conversationID[0]} />
            {isLoadingMessages ? <div className='flex items-center justify-center h-full'>Loading...</div> : (
                <div className='w-full p-5 py-10 overflow-y-auto md:h-[calc(100vh-137px)] h-[calc(100vh-250px)] custom-scrollbar-fg'>
                    <div className='py-10 text-center text-sm lg:pt-8'>
                        <Image
                            width={500}
                            height={500}
                            src='/images/avatars/avatar-6.jpg'
                            className='w-24 h-24 rounded-full mx-auto mb-3'
                            alt=''
                        />
                        <div className='mt-8'>
                            <div className='md:text-xl text-base font-medium text-black dark:text-white'>
                                Monroe Parker
                            </div>
                            <div className='text-gray-500 text-sm   dark:text-white/80'>@Monroepark</div>
                        </div>
                        <div className='mt-3.5'>
                            <Link
                                href='/profile/me'
                                className='inline-block rounded-lg px-4 py-1.5 text-sm font-semibold bg-foreground-2'>
                                {t('View profile')}
                            </Link>
                        </div>
                    </div>

                    <div className='text-sm font-medium space-y-6'>
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
            <InputChat />
        </div>
    );
}
