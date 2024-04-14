'use client';

import { useConversationsData } from '@/hooks/query';
import ConversationBox from './ConversationBox';
import SearchChat from './SearchChat';
import { IoCheckmarkCircleOutline, IoChevronDownOutline } from 'react-icons/io5';
import RightActionButtons from './RightActionButtons';
import HeadingTitle from './HeadingTitle';

function ConversationList() {
  const { conversations, isLoadingConversations } = useConversationsData();

  return (
    <>
      {/* <!-- heading title --> */}
      <div className='p-4 border-b dark:border-slate-700'>
        <div className='flex mt-2 items-center justify-between'>
          <HeadingTitle />
          {/* <!-- right action buttons --> */}
          <div className='flex items-center gap-2.5'>
            <RightActionButtons />

            <button className=''>
              <IoCheckmarkCircleOutline className='text-2xl flex' />
            </button>

            {/* <!-- mobile toggle menu --> */}
            <button
              type='button'
              className='md:hidden'
              data-uk-toggle='target: #side-chat ; cls: max-md:-translate-x-full'>
              <IoChevronDownOutline />
            </button>
          </div>
        </div>

        {/* <!-- search --> */}
        <SearchChat />
      </div>
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
