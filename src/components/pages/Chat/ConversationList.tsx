'use client';

import { useEffect, useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useSession } from 'next-auth/react';

import RightActionButtons from './RightActionButtons';
import HeadingTitle from './HeadingTitle';
import SearchChat from './SearchChat';
import ConversationBox from './ConversationBox';
import { useConversationsData, useCurrentUserInfo } from '@/hooks/query';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { useSocketStore } from '@/store/socket';
import { IConversation, IMessage } from '@/types';
import {
  useMutateConversation,
  useReceiveConversation,
  useReceiveDissolveGroup,
  useReceiveLeaveGroup,
  useReceiveMessage,
  useReceiveSeenConversation
} from '@/hooks/mutation';
import { cn } from '@/lib/utils';

interface IConversationListProps {
  conversationID?: string;
}

function ConversationList({ conversationID }: IConversationListProps) {
  const { conversations, isLoadingConversations } = useConversationsData();

  const { chatSocket } = useSocketStore();

  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

  const [search, setSearch] = useState('');


  const { mutateReceiveConversation } = useReceiveConversation();
  const { mutateReceiveLeaveGroup } = useReceiveLeaveGroup();
  const { mutateReceiveDissolveGroup } = useReceiveDissolveGroup();
  const { mutateReceiveSeenConversation } = useReceiveSeenConversation();
  const { mutateReceiveMessage } = useReceiveMessage(currentUserInfo?._id, conversationID);
  const { mutateConversation } = useMutateConversation(currentUserInfo?._id || '');

  useEffect(() => {
    chatSocket.on(Socket.PRIVATE_CONVERSATION, (conversation: IConversation) => {
      mutateReceiveConversation(conversation);
    });
    chatSocket.on(Socket.LEAVE_GROUP, (conversation: IConversation) => {
      mutateReceiveLeaveGroup(conversation);
    });
    chatSocket.on(Socket.DISSOLVE_GROUP, (conversation: IConversation) => {
      mutateReceiveDissolveGroup(conversation);
    });
    chatSocket.on(Socket.PRIVATE_MSG, (message: IMessage) => {
      mutateReceiveMessage(message);
    });
    chatSocket.on(Socket.SEEN_MSG, (conversation: IConversation) => {
      mutateReceiveSeenConversation(conversation);
    });
    chatSocket.on(Socket.CHANGE_CONVERSATION_IMAGE, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'image' });
    });
    chatSocket.on(Socket.CHANGE_CONVERSATION_COVER, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'cover_image' });
    });
    chatSocket.on(Socket.CHANGE_CONVERSATION_NAME, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'name' });
    });
    chatSocket.on(Socket.ADD_MEMBER, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'add_member' });
    });
    chatSocket.on(Socket.REMOVE_MEMBER, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'remove_member' });
    });
    chatSocket.on(Socket.COMMISSION_ADMIN, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'commission_admin' });
    });
    chatSocket.on(Socket.DECOMMISSION_ADMIN, (conversation: IConversation) => {
      mutateConversation({ ...conversation, typeUpdate: 'remove_admin' });
    });
  }, []);

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
        <SearchChat setSearch={setSearch} />
      </div>
      {isLoadingConversations ? (
        <div className='h-[calc(100vh-127px)] text-center py-10'>Loading...</div>
      ) : (
        <div className={'space-y-2 p-2 overflow-y-auto h-[calc(100vh-127px)] custom-scrollbar-fg'}>
          {conversations.map((conversation) => (
            <div className={cn('rounded-xl', conversationID === conversation._id && 'bg-hover-2')}>
              <ConversationBox key={conversation._id} conversation={conversation} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ConversationList;
