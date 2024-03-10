import Image from 'next/image';
import Link from 'next/link';
import {
  IoCheckmarkCircleOutline,
  IoEllipsisHorizontal,
  IoNotificationsOffOutline,
  IoNotificationsOutline,
  IoSettingsOutline
} from 'react-icons/io5';

export default function NotificationsHeader() {
  return (
    <>
      <button
        type='button'
        className='sm:p-2 p-1 rounded-full relative sm:bg-foreground-1 dark:text-white'
        data-uk-tooltip='title: Notifications; pos: bottom; offset:6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6 max-sm:hidden'>
          <path d='M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z'></path>
          <path
            fillRule='evenodd'
            d='M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z'
            clipRule='evenodd'></path>
        </svg>
        <div className='absolute top-0 right-0 -m-1 bg-red-600 text-white text-xs px-1 rounded-full'>6</div>
        <IoNotificationsOutline className='sm:hidden text-2xl' />
      </button>
      <div
        className='hidden bg-white pr-1.5 rounded-lg drop-shadow-xl dark:bg-slate-700 md:w-[365px] w-screen border2'
        data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
        <div className='flex items-center justify-between gap-2 p-4 pb-2'>
          <h3 className='font-bold text-xl text-text-1'>Notifications</h3>

          <div className='flex gap-2.5'>
            <button type='button' className='p-1 flex rounded-full focus:bg-foreground-1 dark:text-white'>
              <IoEllipsisHorizontal className='text-xl' />
            </button>
            <div
              className='w-[280px] group'
              data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click; offset:5'>
              <nav className='text-sm'>
                <Link href='#'>
                  <IoCheckmarkCircleOutline className='text-xl shrink-0' />
                  Mark all as read
                </Link>
                <Link href='#'>
                  <IoSettingsOutline className='text-xl shrink-0' />
                  Notification setting
                </Link>
                <Link href='#'>
                  <IoNotificationsOffOutline className='text-xl shrink-0' />
                  Mute Notification
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className='text-sm h-[400px] w-full overflow-y-auto pr-2'>
          <div className='pl-2 p-1 text-sm font-normal dark:text-white'>
            <Link
              href='#'
              className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1 bg-teal-500/5'>
              <div className='relative w-12 h-12 shrink-0'>
                <Image
                  src='/images/home/avatar-3.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1'>
                <p>
                  <b className='font-bold mr-1'> Alexa Gray</b> started following you. Welcome him to your
                  profile. 👋
                </p>
                <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>4 hours ago</div>
                <div className='w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5'></div>
              </div>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1'>
              <div className='relative w-12 h-12 shrink-0'>
                <Image
                  src='/images/home/avatar-7.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1'>
                <p>
                  <b className='font-bold mr-1'>Jesse Steeve</b> mentioned you in a story. Check it out and
                  reply. 📣
                </p>
                <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>8 hours ago</div>
              </div>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1'>
              <div className='relative w-12 h-12 shrink-0'>
                <Image
                  src='/images/home/avatar-6.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1'>
                <p>
                  <b className='font-bold mr-1'> Alexa stella</b> commented on your photo “Wow, stunning
                  shot!” 💬
                </p>
                <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>8 hours ago</div>
              </div>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1'>
              <div className='relative w-12 h-12 shrink-0'>
                <Image
                  src='/images/home/avatar-2.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1'>
                <p>
                  <b className='font-bold mr-1'> John Michael</b> who you might know, is on socialite.
                </p>
                <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>2 hours ago</div>
              </div>
              <button type='button' className='button text-white bg-primary'>
                fallow
              </button>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1 bg-teal-500/5'>
              <div className='relative w-12 h-12 shrink-0'>
                <Image
                  src='/images/home/avatar-3.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1'>
                <p>
                  <b className='font-bold mr-1'> Sarah Gray</b> sent you a message. He wants to chat with you.
                  💖
                </p>
                <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>4 hours ago</div>
                <div className='w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5'></div>
              </div>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1'>
              <div className='relative w-12 h-12 shrink-0'>
                <Image
                  src='/images/home/avatar-4.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1'>
                <p>
                  <b className='font-bold mr-1'> Jesse Steeve</b> sarah tagged you <br />
                  in a photo of your birthday party. 📸
                </p>
                <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>8 hours ago</div>
              </div>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1'>
              <div className='relative w-12 h-12 shrink-0'>
                <Image
                  src='/images/home/avatar-2.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1'>
                <p>
                  <b className='font-bold mr-1'> Lewis Lewis</b> mentioned you in a story. Check it out and
                  reply. 📣
                </p>
                <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>8 hours ago</div>
              </div>
            </Link>
            <Link
              href='#'
              className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1'>
              <div className='relative w-12 h-12 shrink-0'>
                <Image
                  src='/images/home/avatar-7.jpg'
                  alt=''
                  className='object-cover w-full h-full rounded-full'
                  width={50}
                  height={50}
                />
              </div>
              <div className='flex-1'>
                <p>
                  <b className='font-bold mr-1'> Martin Gray</b> liked your photo of the Eiffel Tower. 😍
                </p>
                <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>8 hours ago</div>
              </div>
            </Link>
          </div>
        </div>

        <Link href='#'>
          <div className='text-center py-4 border-t border-border-1 text-sm font-medium text-blue-600 dark:text-white'>
            View Notifications
          </div>
        </Link>

        <div className='w-3 h-3 absolute -top-1.5 right-3 bg-foreground-1 border-l border-t rotate-45 max-md:hidden dark:border-transparent'></div>
      </div>
    </>
  );
}
