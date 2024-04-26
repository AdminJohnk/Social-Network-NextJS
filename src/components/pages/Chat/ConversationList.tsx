'use client';

import { useEffect, useState } from 'react';
import { IoChevronDownOutline, IoSearchOutline } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import { CircularProgress } from '@mui/material';

import RightActionButtons from './RightActionButtons';
import HeadingTitle from './HeadingTitle';
import ConversationBox from './ConversationBox';
import { useConversationsData, useCurrentUserInfo } from '@/hooks/query';
import { IConversation } from '@/types';
import { cn } from '@/lib/utils';
import { useDebounce } from '@/hooks/special';

interface IConversationListProps {
  conversationID?: string;
}

function ConversationList({ conversationID }: IConversationListProps) {
  const t = useTranslations();

  const { conversations, isLoadingConversations } = useConversationsData();
  const [searchConversation, setSearchConversation] = useState<IConversation[]>(conversations);

  const { currentUserInfo } = useCurrentUserInfo();

  const [search, setSearch] = useState('');
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const searchDebounce = useDebounce(search, 500);

  useEffect(() => {
    setSearchConversation(conversations);
  }, [conversations]);

  useEffect(() => {
    if (!searchDebounce) {
      setIsLoadingSearch(false);
      setSearchConversation(conversations);
      return;
    }

    setIsLoadingSearch(false);
    setSearchConversation(
      conversations.filter((conversation) => {
        const otherUser = conversation.members.find((member) => member._id !== currentUserInfo._id);
        const name = (conversation.name || otherUser!.name)
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();
        const search = searchDebounce
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();
        return name.includes(search);
      })
    );
  }, [searchDebounce, conversations]);

  return (
    <>
      {/* <!-- heading title --> */}
      <div className='p-4'>
        <div className='flex mt-2 items-center justify-between'>
          <HeadingTitle />
          {/* <!-- right action buttons --> */}
          <div className='flex items-center gap-2.5'>
            <RightActionButtons />

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
        <div className='relative mt-4'>
          <div className='absolute left-3 bottom-1/2 translate-y-1/2 flex'>
            <IoSearchOutline className='text-xl' />
          </div>
          <input
            type='text'
            placeholder={t('Search')}
            className='w-full !pl-10 !py-2 !rounded-lg bg-foreground-1'
            onChange={(e) => {
              setSearch(e.target.value);
              if (!isLoadingSearch) setIsLoadingSearch(true);
            }}
          />
        </div>
      </div>
      <div className={'space-y-2 p-2 overflow-y-auto custom-scrollbar-fg'}>
        {isLoadingConversations ? (
          <div className='w-full flex-center py-10'>
            <CircularProgress size={20} className='!text-text-1' />
          </div>
        ) : isLoadingSearch ? (
          <div className='w-full flex-center py-10'>
            <CircularProgress size={20} className='!text-text-1' />
          </div>
        ) : (
          searchConversation?.map((conversation) => (
            <div
              key={conversation._id}
              className={cn('rounded-xl', conversationID === conversation._id && 'bg-hover-2')}>
              <ConversationBox key={conversation._id} conversation={conversation} />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ConversationList;
