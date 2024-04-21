'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import ConversationList from '@/components/pages/Chat/ConversationList';
import ChatInfo from '@/components/pages/Chat/ChatInfo';
import ChatsBubble from '@/components/pages/Chat/ChatsBubble';
import ChatSideBar from '@/components/pages/Chat/ChatSideBar';

export interface IMessageProps {
  params: {
    conversationID: string[] | undefined;
  };
}

const Message = ({ params: { conversationID } }: IMessageProps) => {
  const t = useTranslations();

  const [select, setSelect] = useState(<ConversationList />);

  const handleSelect = (list: React.ReactElement) => {
    setSelect(list);
  };

  return (
    <>
      <div id='wrapper' className='divide-x divide-foreground-2'>
        <ChatSideBar conversationID={conversationID?.[0]} setSideBarSelect={handleSelect} />
        {/* <!-- main contents --> */}
        {/* <main className="2xl:ml-[290px] xl:ml-[240px] md:ml-[73px]"> */}
        <main className='ml-[80px]'>
          <div className='mx-auto h-screen relative shadow-lg overflow-hidden border-border-1'>
            <div className='flex bg-background-1'>
              {/* <!-- sidebar --> */}
              <div className='md:w-[360px] relative border-r dark:border-slate-700'>
                <div
                  id='side-chat'
                  className='top-0 left-0 max-md:fixed max-md:w-5/6 max-md:h-screen z-50 max-md:shadow max-md:-translate-x-full bg-background-1'>
                  {/* <!-- conversations list --> */}
                  {select}
                </div>

                {/* <!-- overlay --> */}
                <div
                  id='side-chat'
                  className='bg-slate-100/40 backdrop-blur w-full h-full dark:bg-slate-800/40 z-40 fixed inset-0 max-md:-translate-x-full md:hidden'
                  data-uk-toggle='target: #side-chat ; cls: max-md:-translate-x-full'></div>
              </div>

              {/* <!-- message center --> */}
              {/* <!-- chats bubble --> */}
              <ChatsBubble conversationID={conversationID} />

              {/* <!-- user profile right info --> */}
              <ChatInfo conversationID={conversationID} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Message;
