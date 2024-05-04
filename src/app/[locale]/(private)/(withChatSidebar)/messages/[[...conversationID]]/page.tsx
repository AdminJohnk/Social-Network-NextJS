'use client';

import { useEffect, useState } from 'react';

import ConversationList from '@/components/pages/Chat/ConversationList';
import ChatInfo from '@/components/pages/Chat/ChatInfo';
import ChatsBubble from '@/components/pages/Chat/ChatsBubble';
import ChatSideBar from '@/components/pages/Chat/ChatSideBar';
import { useRouter } from '@/navigation';
import { useCurrentConversationData } from '@/hooks/query';
import NoConversationSelected from '@/components/pages/Chat/NoConversationSelected';
import { cn } from '@/lib/utils';
import { FaX } from 'react-icons/fa6';

export interface IMessageProps {
  params: {
    conversationID: string[] | undefined;
  };
}

const Message = ({ params: { conversationID } }: IMessageProps) => {
  const ID = conversationID ? conversationID[0] : undefined;
  const { isErrorCurrentConversation } = useCurrentConversationData(ID);

  const router = useRouter();

  useEffect(() => {
    if (ID && isErrorCurrentConversation) {
      router.push('/messages');
    }
  }, [ID, isErrorCurrentConversation]);

  const [select, setSelect] = useState(<ConversationList />);

  const handleSelect = (list: React.ReactElement) => {
    setSelect(list);
  };

  return (
    <div id='wrapper' className='relative'>
      {/* <!-- main contents --> */}
      {/* <main className="2xl:ml-[290px] xl:ml-[240px] md:ml-[73px]"> */}
      <main className='md:ml-[80px]'>
        <div className='mx-auto h-screen shadow-lg overflow-hidden border-border-1'>
          <div className='flex bg-background-1'>
            {/* <!-- sidebar --> */}
            <div className='md:w-[360px] relative border-r dark:border-slate-700'>
              <div
                id='side-chat'
                className={cn(
                  'top-0 left-0 max-md:fixed max-md:w-full h-dvh z-50 max-md:shadow bg-background-1 duration-300',
                  ID && 'max-md:-translate-x-full'
                )}>
                <ChatSideBar conversationID={ID} setSideBarSelect={handleSelect} />
                {/* <!-- conversations list --> */}
                {select}
                {/* <!-- mobile toggle menu --> */}
                <button
                  type='button'
                  className='absolute right-1 top-1 md:hidden'
                  data-uk-toggle='target: #side-chat ; cls: max-md:-translate-x-full'>
                  <FaX />
                </button>
              </div>

              {/* <!-- overlay --> */}
              <div
                id='side-chat'
                className={cn(
                  'bg-slate-100/40 backdrop-blur w-full h-full dark:bg-slate-800/40 z-40 fixed inset-0 md:hidden',
                  ID && 'max-md:-translate-x-full'
                )}
                data-uk-toggle='target: #side-chat ; cls: max-md:-translate-x-full'
              />
            </div>

            {!ID && <NoConversationSelected />}

            {!isErrorCurrentConversation && (
              <>
                {/* <!-- message center --> */}
                {/* <!-- chats bubble --> */}
                <ChatsBubble conversationID={ID} />

                {/* <!-- user profile right info --> */}
                <ChatInfo conversationID={ID} />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Message;
