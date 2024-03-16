import Image from 'next/image';
import { Link } from '@/navigation';
import { IoChatboxEllipsesOutline, IoCreateOutline, IoExpandOutline, IoSearchOutline } from 'react-icons/io5';

export default function MessagesHeader() {
  return (
    <>
      <button
        type='button'
        className='sm:p-2 p-1 rounded-full relative sm:bg-foreground-1'
        data-uk-tooltip='title: Messages; pos: bottom; offset:6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6 max-sm:hidden'>
          <path
            fillRule='evenodd'
            d='M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z'
            clipRule='evenodd'></path>
        </svg>
        <IoChatboxEllipsesOutline className='sm:hidden text-2xl' />
      </button>
      <div
        className='hidden bg-foreground-2 pr-1.5 rounded-lg drop-shadow-xl md:w-[360px] w-screen border-border-1'
        data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
        <div className='flex items-center justify-between gap-2 p-4 pb-1'>
          <h3 className='font-bold text-xl text-text-1'>Chats</h3>

          <div className='flex gap-2.5 text-lg text-slate-900 dark:text-white'>
            <IoExpandOutline />
            <IoCreateOutline />
          </div>
        </div>

        <div className='relative w-full p-2 px-3'>
          <input type='text' className='w-full !pl-10 !rounded-lg dark:!bg-white/10' placeholder='Search' />
          <IoSearchOutline className='dark:text-white absolute left-7 -translate-y-1/2 top-1/2' />
        </div>

        <div className='h-80 overflow-y-auto pr-2 custom-scrollbar-fg'>
          <div className='p-2 pt-0 pr-1 dark:text-white/80'>
            <Link
              href='#'
              className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-2'>
              <div className='relative w-10 h-10 shrink-0'>
                <Image
                  src='/images/home/avatar-2.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='mr-auto text-sm text-black dark:text-white font-medium'>Jesse Steeve</div>
                  <div className='text-xs text-gray-500 dark:text-white/80'>09:40AM</div>
                  <div className='w-2.5 h-2.5 bg-blue-600 rounded-full dark:bg-slate-700'></div>
                </div>
                <div className='font-normal overflow-hidden text-ellipsis text-xs whitespace-nowrap'>
                  Love your photos 😍
                </div>
              </div>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-2'>
              <div className='relative w-10 h-10 shrink-0'>
                <Image
                  src='/images/home/avatar-4.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='mr-auto text-sm text-black dark:text-white font-medium'>Martin Gray</div>
                  <div className='text-xs text-gray-500 dark:text-white/80'>02:40AM</div>
                </div>
                <div className='font-normal overflow-hidden text-ellipsis text-xs whitespace-nowrap'>
                  Product photographer wanted? 📷
                </div>
              </div>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-2'>
              <div className='relative w-10 h-10 shrink-0'>
                <Image
                  src='/images/home/avatar-5.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='mr-auto text-sm text-black dark:text-white font-medium'>Jesse Steeve</div>
                  <div className='text-xs text-gray-500 dark:text-white/80'>2 day</div>
                </div>
                <div className='font-normal overflow-hidden text-ellipsis text-xs whitespace-nowrap'>
                  Want to buy landscape photo? 🌄
                </div>
              </div>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-2'>
              <div className='relative w-10 h-10 shrink-0'>
                <Image
                  src='/images/home/avatar-3.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='mr-auto text-sm text-black dark:text-white font-medium'>Monroe Parker</div>
                  <div className='text-xs text-gray-500 dark:text-white/80'>4 week</div>
                  <div className='w-2.5 h-2.5 bg-blue-600 rounded-full dark:bg-slate-700'></div>
                </div>
                <div className='font-normal overflow-hidden text-ellipsis text-xs whitespace-nowrap'>
                  I’m glad you like it.😊
                </div>
              </div>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-2'>
              <div className='relative w-10 h-10 shrink-0'>
                <Image
                  src='/images/home/avatar-7.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='mr-auto text-sm text-black dark:text-white font-medium'>Alex Dolve</div>
                  <div className='text-xs text-gray-500 dark:text-white/80'>2 month</div>
                </div>
                <div className='font-normal overflow-hidden text-ellipsis text-xs whitespace-nowrap'>
                  Photo editor needed. Fix photos? �&nbsp;️
                </div>
              </div>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-2'>
              <div className='relative w-10 h-10 shrink-0'>
                <Image
                  src='/images/home/avatar-4.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-1'>
                  <div className='mr-auto text-sm text-black dark:text-white font-medium'>Jesse Steeve</div>
                  <div className='text-xs text-gray-500 dark:text-white/80'>09:40AM</div>
                </div>
                <div className='font-normal overflow-hidden text-ellipsis text-xs whitespace-nowrap'>
                  Love your photos 😍
                </div>
              </div>
            </Link>
          </div>
        </div>

        <Link href='#'>
          <div className='text-center py-4 border-t border-border-1 text-sm font-medium text-blue-600 dark:text-white'>
            See all Messages
          </div>
        </Link>

        <div className='w-3 h-3 absolute -top-1.5 right-3 border-l border-t rotate-45 max-md:hidden bg-foreground-2 dark:border-transparent' />
      </div>
    </>
  );
}
