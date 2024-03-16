import Link from 'next/link';
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
import { unstable_setRequestLocale } from 'next-intl/server';

import ConversationList from '@/components/pages/Chat/ConversationList';
import InputChat from '@/components/pages/Chat/InputChat';
import ChatInfo from '@/components/pages/Chat/ChatInfo';
import ChatHeading from '@/components/pages/Chat/ChatHeading';

export interface IMessageProps {
  params: {
    locale: string;
  };
}

const Message = ({ params: { locale } }: IMessageProps) => {
  unstable_setRequestLocale(locale)

  const t = useTranslations();

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
                  <ConversationList />
                </div>

                {/* <!-- overlay --> */}
                <div
                  id='side-chat'
                  className='bg-slate-100/40 backdrop-blur w-full h-full dark:bg-slate-800/40 z-40 fixed inset-0 max-md:-translate-x-full md:hidden'
                  data-uk-toggle='target: #side-chat ; cls: max-md:-translate-x-full'></div>
              </div>

              {/* <!-- message center --> */}
              <div className='flex-1'>
                {/* <!-- chat heading --> */}
                <ChatHeading />

                {/* <!-- chats bubble --> */}
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
                      <div className='text-gray-500 text-sm   dark:text-white/80'> @Monroepark </div>
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
                    {/* <!-- received --> */}
                    <div className='flex gap-3'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-2.jpg'
                        alt=''
                        className='w-9 h-9 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-foreground-2'> Hi, I’m John </div>
                    </div>

                    {/* <!-- sent --> */}
                    <div className='flex gap-2 flex-row-reverse items-end'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-3.jpg'
                        alt=''
                        className='w-5 h-5 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow'>
                        I’m Lisa. welcome John
                      </div>
                    </div>

                    {/* <!-- time --> */}
                    <div className='flex justify-center '>
                      <div className='font-medium text-gray-500 text-sm dark:text-white/70'>
                        April 8,2023,6:30 AM
                      </div>
                    </div>

                    {/* <!-- received --> */}
                    <div className='flex gap-3'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-2.jpg'
                        alt=''
                        className='w-9 h-9 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-foreground-2'>
                        I’m selling a photo of a sunset. It’s a print on canvas, signed by the photographer.
                        Do you like it? 😊
                      </div>
                    </div>

                    {/* <!-- sent --> */}
                    <div className='flex gap-2 flex-row-reverse items-end'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-3.jpg'
                        alt=''
                        className='w-4 h-4 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow'>
                        Wow, it’s beautiful. How much ? 😍
                      </div>
                    </div>

                    {/* <!-- sent media--> */}
                    <div className='flex gap-2 flex-row-reverse items-end'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-3.jpg'
                        alt=''
                        className='w-4 h-4 rounded-full shadow'
                      />

                      <Link className='block rounded-[18px] border overflow-hidden' href='#'>
                        <div className='max-w-md'>
                          <div className='max-w-full relative w-72'>
                            <div className='relative' style={{ paddingBottom: '57.4286%' }}>
                              <div className='w-full h-full absolute inset-0'>
                                <Image
                                  width={500}
                                  height={500}
                                  src='/images/product/product-2.jpg'
                                  alt=''
                                  className='block max-w-full max-h-52 w-full h-full object-cover'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!-- time --> */}
                    <div className='flex justify-center '>
                      <div className='font-medium text-gray-500 text-sm dark:text-white/70'>
                        April 8,2023,6:30 AM
                      </div>
                    </div>

                    {/* <!-- received --> */}
                    <div className='flex gap-3'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-2.jpg'
                        alt=''
                        className='w-9 h-9 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-foreground-2'>
                        I’m glad you like it. I’m asking for $200 🤑
                      </div>
                    </div>

                    {/* <!-- sent --> */}
                    <div className='flex gap-2 flex-row-reverse items-end'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-3.jpg'
                        alt=''
                        className='w-5 h-5 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow'>
                        $200? Too steep. Can you lower the price a bit? 😕
                      </div>
                    </div>

                    {/* <!-- received --> */}
                    <div className='flex gap-3'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-2.jpg'
                        alt=''
                        className='w-9 h-9 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-foreground-2'>
                        Well, I can’t go too low because I paid a lot. But I’m willing to negotiate. What’s
                        your offer? 🤔
                      </div>
                    </div>

                    {/* <!-- sent -->  */}
                    <div className='flex gap-2 flex-row-reverse items-end'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-3.jpg'
                        alt=''
                        className='w-5 h-5 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow'>
                        Sorry, can’t pay more than $150. 😅
                      </div>
                    </div>

                    {/* <!-- time --> */}
                    <div className='flex justify-center '>
                      <div className='font-medium text-gray-500 text-sm dark:text-white/70'>
                        April 8,2023,6:30 AM
                      </div>
                    </div>

                    {/* <!-- received --> */}
                    <div className='flex gap-3'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-2.jpg'
                        alt=''
                        className='w-9 h-9 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-foreground-2'>
                        $150? Too low. Photo worth more. 😬
                      </div>
                    </div>

                    {/* <!-- sent --> */}
                    <div className='flex gap-2 flex-row-reverse items-end'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-3.jpg'
                        alt=''
                        className='w-5 h-5 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow'>
                        Too high. I Can’t . How about $160? Final offer. 😬
                      </div>
                    </div>

                    {/* <!-- received --> */}
                    <div className='flex gap-3'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-2.jpg'
                        alt=''
                        className='w-9 h-9 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-foreground-2'>
                        Fine, fine. You’re hard to please. I’ll take $160, but only because I like you. 😍
                      </div>
                    </div>

                    {/* <!-- sent --> */}
                    <div className='flex gap-2 flex-row-reverse items-end'>
                      <Image
                        width={500}
                        height={500}
                        src='/images/avatars/avatar-3.jpg'
                        alt=''
                        className='w-5 h-5 rounded-full shadow'
                      />
                      <div className='px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow'>
                        Great, thank you. I appreciate it. I love this photo and can’t wait to hang it. 😩
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- sending message area --> */}
                <InputChat />
              </div>

              {/* <!-- user profile right info --> */}
              <ChatInfo />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Message;
