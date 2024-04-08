import { unstable_setRequestLocale } from 'next-intl/server';
import { IoCheckmarkCircleOutline, IoChevronDownOutline } from 'react-icons/io5';

import ConversationList from '@/components/pages/Chat/ConversationList';
import ChatInfo from '@/components/pages/Chat/ChatInfo';
import ChatsBubble from '@/components/pages/Chat/ChatsBubble';
import RightActionButtons from '@/components/pages/Chat/RightActionButtons';
import SearchChat from '@/components/pages/Chat/SearchChat';
import HeadingTitle from '@/components/pages/Chat/HeadingTitle';
import SideBar from '@/components/shared/SideBar';

export interface IMessageProps {
  params: {
    locale: string;
    conversationID: string[] | undefined;
  };
}

const Message = ({ params: { locale, conversationID } }: IMessageProps) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      <div id='wrapper'>
        <SideBar />
        {/* <!-- main contents --> */}
        <main className="2xl:ml-[290px] xl:ml-[240px] md:ml-[73px]">
          <div className='mx-auto h-screen relative shadow-lg overflow-hidden border-border-1'>
            <div className='flex bg-white dark:bg-background-2'>
              {/* <!-- sidebar --> */}
              <div className='md:w-[360px] relative border-r dark:border-slate-700'>
                <div
                  id='side-chat'
                  className='top-0 left-0 max-md:fixed max-md:w-5/6 max-md:h-screen bg-white z-50 max-md:shadow max-md:-translate-x-full dark:bg-background-2'>
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

                  {/* <!-- conversations list --> */}

                  <ConversationList />
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
