/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export interface IConversationListProps {}

function ConversationList(props: IConversationListProps) {
  return (
    <div className='space-y-2 p-2 overflow-y-auto h-[calc(100vh-127px)] custom-scrollbar-fg'>
      <Link
        href='#'
        className='relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-hover-1'>
        <div className='relative w-14 h-14 shrink-0'>
          <img src='images/avatars/avatar-5.jpg' alt='' className='object-cover w-full h-full rounded-full' />
          <div className='w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800'></div>
        </div>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1.5'>
            <div className='mr-auto text-sm text-black dark:text-white font-medium'>Jesse Steeve</div>
            <div className='text-xs font-light text-gray-500 dark:text-white/70'>09:40AM</div>
          </div>
          <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
            Love your photos 😍
          </div>
        </div>
      </Link>
      <Link
        href='#'
        className='relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-hover-1'>
        <div className='relative w-14 h-14 shrink-0'>
          <img src='images/avatars/avatar-2.jpg' alt='' className='object-cover w-full h-full rounded-full' />
        </div>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1.5'>
            <div className='mr-auto text-sm text-black dark:text-white font-medium'>Martin Gray</div>
            <div className='text-xs font-light text-gray-500 dark:text-white/70'>09:40AM</div>
            <div className='w-2.5 h-2.5 bg-blue-600 rounded-full dark:bg-slate-700'></div>
          </div>
          <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
            Photo editor needed. Fix photos? 🛠️
          </div>
        </div>
      </Link>
      <Link
        href='#'
        className='relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-hover-1'>
        <div className='relative w-14 h-14 shrink-0'>
          <img src='images/avatars/avatar-3.jpg' alt='' className='object-cover w-full h-full rounded-full' />
          <div className='w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800'></div>
        </div>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1.5'>
            <div className='mr-auto text-sm text-black dark:text-white font-medium'>Monroe Parker</div>
            <div className='text-xs font-light text-gray-500 dark:text-white/70'>09:40AM</div>
          </div>
          <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
            Can i call you to day?
          </div>
        </div>
      </Link>
      <Link
        href='#'
        className='relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-hover-1'>
        <div className='relative w-14 h-14 shrink-0'>
          <img src='images/avatars/avatar-4.jpg' alt='' className='object-cover w-full h-full rounded-full' />
        </div>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1.5'>
            <div className='mr-auto text-sm text-black dark:text-white font-medium'>James Lewis</div>
            <div className='text-xs font-light text-gray-500 dark:text-white/70'>09:40AM</div>
          </div>
          <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
            {' '}
            Want to buy landscape photo? 🌄{' '}
          </div>
        </div>
      </Link>

      <Link
        href='#'
        className='relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-hover-1'>
        <div className='relative w-14 h-14 shrink-0'>
          <img src='images/avatars/avatar-5.jpg' alt='' className='object-cover w-full h-full rounded-full' />
          <div className='w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800'></div>
        </div>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1.5'>
            <div className='mr-auto text-sm text-black dark:text-white font-medium'>Jesse Steeve</div>
            <div className='text-xs font-light text-gray-500 dark:text-white/70'>09:40AM</div>
          </div>
          <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
            Headshot needed. Resume. Do it? 👩‍💼
          </div>
        </div>
      </Link>
      <Link
        href='#'
        className='relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-hover-1'>
        <div className='relative w-14 h-14 shrink-0'>
          <img src='images/avatars/avatar-2.jpg' alt='' className='object-cover w-full h-full rounded-full' />
        </div>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1.5'>
            <div className='mr-auto text-sm text-black dark:text-white font-medium'>Martin Gray</div>
            <div className='text-xs font-light text-gray-500 dark:text-white/70'>04:20PM</div>
            <div className='w-2.5 h-2.5 bg-blue-600 rounded-full dark:bg-slate-700'></div>
          </div>
          <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
            Online course interesting? 🎓
          </div>
        </div>
      </Link>
      <Link
        href='#'
        className='relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-hover-1'>
        <div className='relative w-14 h-14 shrink-0'>
          <img src='images/avatars/avatar-3.jpg' alt='' className='object-cover w-full h-full rounded-full' />
        </div>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1.5'>
            <div className='mr-auto text-sm text-black dark:text-white font-medium'>Monroe Parker</div>
            <div className='text-xs font-light text-gray-500 dark:text-white/70'>09:40AM</div>
          </div>
          <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
            I’m glad you like it.😊
          </div>
        </div>
      </Link>
      <Link
        href='#'
        className='relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-hover-1'>
        <div className='relative w-14 h-14 shrink-0'>
          <img src='images/avatars/avatar-4.jpg' alt='' className='object-cover w-full h-full rounded-full' />
        </div>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1.5'>
            <div className='mr-auto text-sm text-black dark:text-white font-medium'>James Lewis</div>
            <div className='text-xs font-light text-gray-500 dark:text-white/70'>01:10PM</div>
          </div>
          <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
            {' '}
            Product photographer wanted? 📷{' '}
          </div>
        </div>
      </Link>
      <Link
        href='#'
        className='relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-hover-1'>
        <div className='relative w-14 h-14 shrink-0'>
          <img src='images/avatars/avatar-5.jpg' alt='' className='object-cover w-full h-full rounded-full' />
          <div className='w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800'></div>
        </div>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1.5'>
            <div className='mr-auto text-sm text-black dark:text-white font-medium'>Jesse Steeve</div>
            <div className='text-xs font-light text-gray-500 dark:text-white/70'>09:40AM</div>
          </div>
          <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
            Love your photos 😍
          </div>
        </div>
      </Link>
      <Link
        href='#'
        className='relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-hover-1'>
        <div className='relative w-14 h-14 shrink-0'>
          <img src='images/avatars/avatar-2.jpg' alt='' className='object-cover w-full h-full rounded-full' />
        </div>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1.5'>
            <div className='mr-auto text-sm text-black dark:text-white font-medium'>Martin Gray</div>
            <div className='text-xs font-light text-gray-500 dark:text-white/70'>02:52PM</div>
          </div>
          <div className='font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap'>
            Photo editor needed. Fix photos? 🛠️
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ConversationList;
