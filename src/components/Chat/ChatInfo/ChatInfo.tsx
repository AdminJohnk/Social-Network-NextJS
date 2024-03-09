/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {
  IoClose,
  IoFlagOutline,
  IoNotificationsOffOutline,
  IoSettingsOutline,
  IoStopCircleOutline,
  IoTrashOutline
} from 'react-icons/io5';

export interface IChatInfoProps {
  isShowInfo?: boolean;
}

export default function ChatInfo(props: IChatInfoProps) {
  return (
    <div className='right w-full h-full absolute top-0 right-0 z-10 hidden transition-transform'>
      <div className='w-[360px] border-l shadow-lg h-screen bg-white absolute right-0 top-0 uk-animation-slide-right-medium delay-200 z-50 dark:bg-background-2 dark:border-slate-700'>
        <div className='w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500 -mt-px'></div>

        <div className='py-10 text-center text-sm pt-20'>
          <img src='images/avatars/avatar-3.jpg' className='w-24 h-24 rounded-full mx-auto mb-3' alt='' />
          <div className='mt-8'>
            <div className='md:text-xl text-base font-medium text-black dark:text-white'> Monroe Parker </div>
            <div className='text-gray-500 text-sm mt-1 dark:text-white/80'>@Monroepark</div>
          </div>
          <div className='mt-5'>
            <Link
              href='profile.html'
              className='inline-block rounded-full px-4 py-1.5 text-sm font-semibold bg-hover-1'>
              View profile
            </Link>
          </div>
        </div>

        <hr className='opacity-80 dark:border-slate-700' />

        <ul className='text-base font-medium p-3'>
          <li>
            <div className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
              <IoNotificationsOffOutline className='text-2xl' />
              Mute Notification
              <label className='switch cursor-pointer ml-auto'>
                {' '}
                <input type='checkbox' defaultChecked />
                <span className='switch-button !relative'></span>
              </label>
            </div>
          </li>
          <li>
            {' '}
            <button type='button' className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
              {' '}
              <IoFlagOutline className='text-2xl' /> Report{' '}
            </button>
          </li>
          <li>
            {' '}
            <button type='button' className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
              {' '}
              <IoSettingsOutline className='text-2xl' /> Ignore messages{' '}
            </button>{' '}
          </li>
          <li>
            {' '}
            <button type='button' className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
              {' '}
              <IoStopCircleOutline className='text-2xl' /> Block{' '}
            </button>{' '}
          </li>
          <li>
            {' '}
            <button
              type='button'
              className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-red-50 text-red-500'>
              {' '}
              <IoTrashOutline className='text-2xl' /> Delete Chat{' '}
            </button>{' '}
          </li>
        </ul>

        {/* <!-- close button --> */}
        <button
          type='button'
          className='absolute top-0 right-0 m-4 p-2 hover:bg-hover-1 rounded-full'
          data-uk-toggle='target: .right ; cls: hidden'>
          <IoClose className='text-2xl flex' />
        </button>
      </div>

      {/* <!-- overly --> */}
      <div
        className='bg-slate-100/40 backdrop-blur absolute w-full h-full dark:bg-slate-800/40'
        data-uk-toggle='target: .right ; cls: hidden'></div>
    </div>
  );
}
