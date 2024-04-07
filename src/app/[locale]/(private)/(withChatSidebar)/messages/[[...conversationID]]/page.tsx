'use client';

import { Link } from '@/navigation';
import Image from 'next/image';
import {
  IoCheckmarkCircleOutline,
  IoCheckmarkOutline,
  IoChevronDownOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoVolumeMuteOutline
} from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

import ConversationList from '@/components/pages/Chat/ConversationList';
import ChatInfo from '@/components/pages/Chat/ChatInfo';
import { useConversationsData, useCurrentConversationData, useCurrentUserInfo } from '@/hooks/query';
import ChatsBubble from '@/components/pages/Chat/ChatsBubble';

export interface IMessageProps {
  params: {
    locale: string;
    conversationID: string[] | undefined;
  };
}

const Message = ({ params: { locale, conversationID } }: IMessageProps) => {
  const t = useTranslations();

  const { isLoadingCurrentUserInfo, currentUserInfo } = useCurrentUserInfo();
  const { conversations, isLoadingConversations } = useConversationsData();


  return (
    <>
      <div id='wrapper'>
        {/* <!-- main contents --> */}
        {/* <main className="2xl:ml-[290px] xl:ml-[240px] md:ml-[73px]"> */}
        <main>
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
                      <h2 className='text-2xl font-bold text-black ml-1 dark:text-white'> {t('Chats')} </h2>

                      {/* <!-- right action buttons --> */}
                      <div className='flex items-center gap-2.5'>
                        <button className='group'>
                          <IoSettingsOutline className='text-2xl flex group-aria-expanded:rotate-180' />
                        </button>
                        <div
                          className='md:w-[270px] w-full hidden'
                          data-uk-dropdown='pos: bottom-left; offset:10; animation: uk-animation-slide-bottom-small'>
                          <nav>
                            <Link href='#' className='hover:!bg-foreground-2'>
                              <IoCheckmarkOutline className='text-2xl shrink-0 -ml-1' /> {t('Mark all as read')}
                            </Link>
                            <Link href='#' className='hover:!bg-foreground-2'>
                              <IoNotificationsOutline className='text-2xl shrink-0 -ml-1' /> {t('Notifications setting')}
                            </Link>
                            <Link href='#' className='hover:!bg-foreground-2'>
                              <IoVolumeMuteOutline className='text-2xl shrink-0 -ml-1' /> {t('Mute notifications')}
                            </Link>
                          </nav>
                        </div>

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
                    <div className='relative mt-4'>
                      <div className='absolute left-3 bottom-1/2 translate-y-1/2 flex'>
                        <FaSearch className='text-xl' />
                      </div>
                      <input
                        type='text'
                        placeholder={t('Search')}
                        className='w-full !pl-10 !py-2 !rounded-lg bg-foreground-1'
                      />
                    </div>
                  </div>

                  {/* <!-- users list --> */}
                  {isLoadingConversations ?
                    <div className='h-[calc(100vh-127px)] text-center py-10'>Loading...</div> :
                    <ConversationList conversations={conversations} />}
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
              <ChatInfo conversationID={conversationID}/>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Message;
