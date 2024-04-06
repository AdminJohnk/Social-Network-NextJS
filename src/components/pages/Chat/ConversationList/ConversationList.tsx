'use client';


import React from 'react';
import { Link } from '@/navigation';
import Image from 'next/image';
import { useConversationsData } from '@/hooks/query';
import { IConversation } from '@/types';
import ConversationBox from '../ConversationBox';

export interface IConversationListProps {
  conversations: IConversation[],

}

function ConversationList({ conversations }: IConversationListProps) {

  return (
    <div className='space-y-2 p-2 overflow-y-auto h-[calc(100vh-127px)] custom-scrollbar-fg'>
      {conversations.map((conversation) => (
        <ConversationBox key={conversation._id} conversation={conversation} />
      ))}
    </div>
  );
}

export default ConversationList;
