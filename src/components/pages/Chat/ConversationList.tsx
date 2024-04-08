'use client';

import { useConversationsData } from '@/hooks/query';
import ConversationBox from './ConversationBox';

function ConversationList() {
  const { conversations, isLoadingConversations } = useConversationsData();

  return (
    <>
      {isLoadingConversations ? (
        <div className='h-[calc(100vh-127px)] text-center py-10'>Loading...</div>
      ) : (
        <div className='space-y-2 p-2 overflow-y-auto h-[calc(100vh-127px)] custom-scrollbar-fg'>
          {conversations.map((conversation) => (
            <ConversationBox key={conversation._id} conversation={conversation} />
          ))}
        </div>
      )}
    </>
  );
}

export default ConversationList;
