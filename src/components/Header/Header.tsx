/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useThemeMode } from 'flowbite-react';
import Link from 'next/link';
import {
  IoAddCircleOutline,
  IoBook,
  IoCamera,
  IoChatboxEllipsesOutline,
  IoCheckmarkCircleOutline,
  IoChevronBack,
  IoChevronForward,
  IoClose,
  IoCloseOutline,
  IoCreateOutline,
  IoEllipsisHorizontal,
  IoExpandOutline,
  IoHappy,
  IoLocation,
  IoMenuOutline,
  IoNotificationsOffOutline,
  IoNotificationsOutline,
  IoSearch,
  IoSearchOutline,
  IoSettingsOutline,
  IoTrash,
  IoVideocam
} from 'react-icons/io5';

export default function Header() {
  const { toggleMode, mode } = useThemeMode();

  return (
    <header className='z-[100] h-[--m-top] fixed top-0 left-0 w-full flex items-center bg-background-1 backdrop-blur-xl border-b border-border-1'>
      <div className='flex items-center w-full xl:px-6 px-2 max-lg:gap-10'>
        <div className='2xl:w-[--w-side] lg:w-[--w-side-sm]'>
          <div className='flex items-center gap-1'>
            <button
              data-uk-toggle='target: #site_sidebar ; cls :!-translate-x-0'
              className='flex items-center justify-center w-8 h-8 text-xl rounded-full hover:bg-gray-100 xl:hidden dark:hover:bg-slate-600 group'>
              <IoMenuOutline className='text-2xl group-aria-expanded:hidden' />
              <IoCloseOutline className='hidden text-2xl group-aria-expanded:block' />
            </button>
            <div id='logo'>
              <Link href=''>
                <img src='images/home/logo.png' alt='' className='w-28 md:block hidden dark:!hidden' />
                <img src='images/home/logo-light.png' alt='' className='dark:md:block hidden' />
                <img
                  src='images/home/logo-mobile.png'
                  className='hidden max-md:block w-20 dark:!hidden'
                  alt=''
                />
                <img
                  src='images/home/logo-mobile-light.png'
                  className='hidden dark:max-md:block w-20'
                  alt=''
                />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex-1 relative'>
          <div className='max-w-[1220px] mx-auto flex items-center'>
            <div
              id='search--box'
              className='xl:w-[680px] sm:w-96 sm:relative rounded-xl overflow-hidden z-20 bg-foreground-1 max-md:hidden w-screen left-0 max-sm:fixed max-sm:top-2'>
              <IoSearch className='absolute left-4 top-1/2 -translate-y-1/2' />
              <input
                type='text'
                placeholder='Search Friends, videos ..'
                className='w-full !pl-10 !font-normal !bg-transparent h-12 !text-sm border-none'
              />
            </div>
            <div
              className='hidden open !z-10'
              data-uk-drop='pos: bottom-center ; animation: uk-animation-slide-bottom-small; mode:click'>
              <div className='xl:w-[694px] sm:w-96 bg-hover-1 w-screen p-2 rounded-lg shadow-lg -mt-14 pt-14'>
                <div className='flex justify-between px-2 py-2.5 text-sm font-medium'>
                  <div className='text-black dark:text-white'>Recent</div>
                  <button type='button' className='text-blue-500'>
                    Clear
                  </button>
                </div>
                <nav className='text-sm font-medium'>
                  <Link
                    href='#'
                    className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
                    <img src='images/home/avatar-2.jpg' className='w-9 h-9 rounded-full' />
                    <div>
                      <div>Jesse Steeve</div>
                      <div className='text-xs text-blue-500 font-medium mt-0.5'>Friend</div>
                    </div>
                    <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
                  </Link>
                  <Link
                    href='#'
                    className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
                    <img src='images/home/avatar-2.jpg' className='w-9 h-9 rounded-full' />
                    <div>
                      <div>Martin Gray</div>
                      <div className='text-xs text-blue-500 font-medium mt-0.5'>Friend</div>
                    </div>
                    <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
                  </Link>
                  <Link
                    href='#'
                    className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
                    <img src='images/home/group-2.jpg' className='w-9 h-9 rounded-full' />
                    <div>
                      <div>Delicious Foods</div>
                      <div className='text-xs text-rose-500 font-medium mt-0.5'>Group</div>
                    </div>
                    <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
                  </Link>
                  <Link
                    href='#'
                    className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
                    <img src='images/home/group-1.jpg' className='w-9 h-9 rounded-full' />
                    <div>
                      <div>Delicious Foods</div>
                      <div className='text-xs text-yellow-500 font-medium mt-0.5'>Page</div>
                    </div>
                    <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
                  </Link>
                  <Link
                    href='#'
                    className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
                    <img src='images/home/avatar-6.jpg' className='w-9 h-9 rounded-full' />
                    <div>
                      <div>John Welim</div>
                      <div className='text-xs text-blue-500 font-medium mt-0.5'>Friend</div>
                    </div>
                    <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
                  </Link>
                  <Link
                    href='#'
                    className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
                    <IoSearchOutline className='text-2xl' />
                    Creative ideas about Business
                  </Link>
                  <Link
                    href='#'
                    className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-2 rounded-lg'>
                    <IoSearchOutline className='text-2xl' />8 Facts About Writting
                  </Link>
                </nav>
                <div className='flex justify-end pr-2 text-sm font-medium text-red-500'>
                  <Link href='#' className='flex hover:bg-red-50 dark:hover:bg-slate-800 p-1.5 rounded'>
                    <IoTrash className='mr-2 text-lg' />
                    Clear your history
                  </Link>
                </div>
              </div>
            </div>

            <div className='flex items-center sm:gap-4 gap-2 absolute right-5 top-1/2 -translate-y-1/2 text-black'>
              <button
                type='button'
                className='sm:p-2 p-1 rounded-full relative sm:bg-foreground-1 dark:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 max-sm:hidden'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15'></path>
                </svg>
                <IoAddCircleOutline className='sm:hidden text-2xl' />
              </button>
              <div
                className='hidden bg-foreground-1 p-4 rounded-lg overflow-hidden drop-shadow-xl md:w-[324px] w-screen border2'
                data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
                <h3 className='font-bold text-md'>Create</h3>

                <div className='mt-4' tabIndex={-1} data-uk-slider='finite:true;sets: true'>
                  <div className='uk-slider-container pb-1'>
                    <ul
                      className='uk-slider-items grid-small'
                      data-uk-scrollspy='target: > li; cls: uk-animation-scale-up , uk-animation-slide-right-small; delay: 20 ;repeat: true'>
                      <li className='w-28' data-uk-scrollspy-class='uk-animation-fade'>
                        <div className='p-3 px-4 rounded-lg bg-teal-100/60 text-teal-600 dark:text-white dark:bg-dark-1'>
                          <IoBook className='text-2xl drop-shadow-md' />
                          <div className='mt-1.5 text-sm font-medium'>Story</div>
                        </div>
                      </li>
                      <li className='w-28'>
                        <div className='p-3 px-4 rounded-lg bg-sky-100/60 text-sky-600 dark:text-white dark:bg-dark-1'>
                          <IoCamera className='text-2xl drop-shadow-md' />
                          <div className='mt-1.5 text-sm font-medium'>Post</div>
                        </div>
                      </li>
                      <li className='w-28'>
                        <div className='p-3 px-4 rounded-lg bg-purple-100/60 text-purple-600 dark:text-white dark:bg-dark-1'>
                          <IoVideocam className='text-2xl drop-shadow-md' />
                          <div className='mt-1.5 text-sm font-medium'>Reel</div>
                        </div>
                      </li>
                      <li className='w-28'>
                        <div className='p-3 px-4 rounded-lg bg-pink-100/60 text-pink-600 dark:text-white dark:bg-dark-1'>
                          <IoLocation className='text-2xl drop-shadow-md' />
                          <div className='mt-1.5 text-sm font-medium'>location</div>
                        </div>
                      </li>
                      <li className='w-28'>
                        <div className='p-3 px-4 rounded-lg bg-sky-100/70 text-sky-600 dark:text-white dark:bg-dark-1'>
                          <IoHappy className='text-2xl drop-shadow-md' />
                          <div className='mt-1.5 text-sm font-medium'>Status</div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className='dark:hidden'>
                    <Link
                      className='absolute -translate-y-1/2 top-1/2 -left-4 flex items-center w-8 h-full px-1.5 justify-start bg-gradient-to-r from-white via-white dark:from-transparent dark:via-transparent'
                      href='#'
                      data-uk-slider-item='previous'>
                      <IoChevronBack className='text-xl dark:text-white' />
                    </Link>
                    <Link
                      className='absolute -translate-y-1/2 top-1/2 -right-4 flex items-center w-8 h-full px-1.5 justify-end bg-gradient-to-l from-white via-white dark:from-transparent dark:via-transparent'
                      href='#'
                      data-uk-slider-item='next'>
                      <IoChevronForward className='text-xl dark:text-white' />
                    </Link>
                  </div>

                  <div className='justify-center mt-2 -mb-2 hidden dark:flex'>
                    <ul className='inline-flex flex-wrap justify-center gap-1 uk-dotnav uk-slider-nav'></ul>
                  </div>
                </div>

                <ul
                  className='-m-1 mt-4 pb-1 text-xs text-gray-500 dark:text-white'
                  data-uk-scrollspy='target: > li; cls: uk-animation-scale-up , uk-animation-slide-bottom-small ;repeat: true'>
                  <li className='flex items-center gap-4 hover:bg-hover-1 rounded-md p-1.5 cursor-pointer'>
                    <img src='images/home/group.png' alt='' className='w-7' />
                    <div className='flex-1'>
                      <Link href=''>
                        <h4 className='font-medium text-sm text-black dark:text-white'>Groups</h4>
                      </Link>
                      <div className='mt-1 text-xs text-gray-500 dark:text-white'>
                        Meet people with similar interests.
                      </div>
                    </div>
                  </li>
                  <li className='flex items-center gap-4 hover:bg-hover-1 rounded-md p-1.5 cursor-pointer'>
                    <img src='images/home/page.png' alt='' className='w-7' />
                    <div className='flex-1'>
                      <Link href=''>
                        <h4 className='font-medium text-sm text-black dark:text-white'>Pages</h4>
                      </Link>
                      <div className='mt-1'>Find and connect with businesses.</div>
                    </div>
                  </li>
                  <li className='flex items-center gap-4 hover:bg-hover-1 rounded-md p-1.5 cursor-pointer'>
                    <img src='images/home/event.png' className='w-7' />
                    <div className='flex-1'>
                      <Link href=''>
                        <h4 className='font-medium text-sm text-black dark:text-white'>Event</h4>
                      </Link>
                      <div className='mt-1'>Discover fun activities near you .</div>
                    </div>
                  </li>
                  <li className='flex items-center gap-4 hover:bg-hover-1 rounded-md p-1.5 cursor-pointer'>
                    <img src='images/home/market.png' className='w-8 -ml-1' />
                    <div className='flex-1'>
                      <Link href=''>
                        <h4 className='font-medium text-sm text-black dark:text-white'>Event</h4>
                      </Link>
                      <div className='mt-1'>Find local buyers and sellers .</div>
                    </div>
                  </li>
                  <li className='flex items-center gap-4 hover:bg-hover-1 rounded-md p-1.5 cursor-pointer'>
                    <img src='images/home/game.png' alt='' className='w-7' />
                    <div className='flex-1'>
                      <Link href=''>
                        <h4 className='font-medium text-sm text-black dark:text-white'>Games</h4>
                      </Link>
                      <div className='mt-1'>play game with friends have fun.</div>
                    </div>
                  </li>
                </ul>
              </div>

              <button
                type='button'
                className='sm:p-2 p-1 rounded-full relative sm:bg-foreground-1 dark:text-white'
                data-uk-tooltip='title: Notification; pos: bottom; offset:6'>
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
                <div className='absolute top-0 right-0 -m-1 bg-red-600 text-white text-xs px-1 rounded-full'>
                  6
                </div>
                <IoNotificationsOutline className='sm:hidden text-2xl' />
              </button>
              <div
                className='hidden bg-white pr-1.5 rounded-lg drop-shadow-xl dark:bg-slate-700 md:w-[365px] w-screen border2'
                data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
                <div className='flex items-center justify-between gap-2 p-4 pb-2'>
                  <h3 className='font-bold text-xl text-text-1'>Notifications</h3>

                  <div className='flex gap-2.5'>
                    <button
                      type='button'
                      className='p-1 flex rounded-full focus:bg-foreground-1 dark:text-white'>
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
                        <img
                          src='images/home/avatar-3.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1'>
                        <p>
                          <b className='font-bold mr-1'> Alexa Gray</b> started following you. Welcome him to
                          your profile. 👋
                        </p>
                        <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>4 hours ago</div>
                        <div className='w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5'></div>
                      </div>
                    </Link>
                    <Link
                      href='#'
                      className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1'>
                      <div className='relative w-12 h-12 shrink-0'>
                        <img
                          src='images/home/avatar-7.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1'>
                        <p>
                          <b className='font-bold mr-1'>Jesse Steeve</b> mentioned you in a story. Check it
                          out and reply. 📣
                        </p>
                        <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>8 hours ago</div>
                      </div>
                    </Link>
                    <Link
                      href='#'
                      className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1'>
                      <div className='relative w-12 h-12 shrink-0'>
                        <img
                          src='images/home/avatar-6.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1'>
                        <p>
                          <b className='font-bold mr-1'> Alexa stella</b> commented on your photo “Wow,
                          stunning shot!” 💬
                        </p>
                        <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>8 hours ago</div>
                      </div>
                    </Link>
                    <Link
                      href='#'
                      className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1'>
                      <div className='relative w-12 h-12 shrink-0'>
                        <img
                          src='images/home/avatar-2.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
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
                        <img
                          src='images/home/avatar-3.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1'>
                        <p>
                          <b className='font-bold mr-1'> Sarah Gray</b> sent you a message. He wants to chat
                          with you. 💖
                        </p>
                        <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>4 hours ago</div>
                        <div className='w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5'></div>
                      </div>
                    </Link>
                    <Link
                      href='#'
                      className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1'>
                      <div className='relative w-12 h-12 shrink-0'>
                        <img
                          src='images/home/avatar-4.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
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
                        <img
                          src='images/home/avatar-2.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1'>
                        <p>
                          <b className='font-bold mr-1'> Lewis Lewis</b> mentioned you in a story. Check it
                          out and reply. 📣
                        </p>
                        <div className='text-xs text-gray-500 mt-1.5 dark:text-white/80'>8 hours ago</div>
                      </div>
                    </Link>
                    <Link
                      href='#'
                      className='relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-hover-1'>
                      <div className='relative w-12 h-12 shrink-0'>
                        <img
                          src='images/home/avatar-7.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1'>
                        <p>
                          <b className='font-bold mr-1'> Martin Gray</b> liked your photo of the Eiffel Tower.
                          😍
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

              <button
                type='button'
                className='sm:p-2 p-1 rounded-full relative sm:bg-foreground-1 dark:text-white'
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
                className='hidden bg-foreground-1 pr-1.5 rounded-lg drop-shadow-xl md:w-[360px] w-screen border-border-1'
                data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
                <div className='flex items-center justify-between gap-2 p-4 pb-1'>
                  <h3 className='font-bold text-xl text-text-1'>Chats</h3>

                  <div className='flex gap-2.5 text-lg text-slate-900 dark:text-white'>
                    <IoExpandOutline />
                    <IoCreateOutline />
                  </div>
                </div>

                <div className='relative w-full p-2 px-3'>
                  <input
                    type='text'
                    className='w-full !pl-10 !rounded-lg dark:!bg-white/10'
                    placeholder='Search'
                  />
                  <IoSearchOutline className='dark:text-white absolute left-7 -translate-y-1/2 top-1/2' />
                </div>

                <div className='h-80 overflow-y-auto pr-2'>
                  <div className='p-2 pt-0 pr-1 dark:text-white/80'>
                    <Link
                      href='#'
                      className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-1'>
                      <div className='relative w-10 h-10 shrink-0'>
                        <img
                          src='images/home/avatar-2.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center gap-2 mb-1'>
                          <div className='mr-auto text-sm text-black dark:text-white font-medium'>
                            Jesse Steeve
                          </div>
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
                      className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-1'>
                      <div className='relative w-10 h-10 shrink-0'>
                        <img
                          src='images/home/avatar-4.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center gap-2 mb-1'>
                          <div className='mr-auto text-sm text-black dark:text-white font-medium'>
                            Martin Gray
                          </div>
                          <div className='text-xs text-gray-500 dark:text-white/80'>02:40AM</div>
                        </div>
                        <div className='font-normal overflow-hidden text-ellipsis text-xs whitespace-nowrap'>
                          Product photographer wanted? 📷
                        </div>
                      </div>
                    </Link>
                    <Link
                      href='#'
                      className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-1'>
                      <div className='relative w-10 h-10 shrink-0'>
                        <img
                          src='images/home/avatar-5.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center gap-2 mb-1'>
                          <div className='mr-auto text-sm text-black dark:text-white font-medium'>
                            Jesse Steeve
                          </div>
                          <div className='text-xs text-gray-500 dark:text-white/80'>2 day</div>
                        </div>
                        <div className='font-normal overflow-hidden text-ellipsis text-xs whitespace-nowrap'>
                          Want to buy landscape photo? 🌄
                        </div>
                      </div>
                    </Link>
                    <Link
                      href='#'
                      className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-1'>
                      <div className='relative w-10 h-10 shrink-0'>
                        <img
                          src='images/home/avatar-3.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center gap-2 mb-1'>
                          <div className='mr-auto text-sm text-black dark:text-white font-medium'>
                            Monroe Parker
                          </div>
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
                      className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-1'>
                      <div className='relative w-10 h-10 shrink-0'>
                        <img
                          src='images/home/avatar-7.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center gap-2 mb-1'>
                          <div className='mr-auto text-sm text-black dark:text-white font-medium'>
                            Alex Dolve
                          </div>
                          <div className='text-xs text-gray-500 dark:text-white/80'>2 month</div>
                        </div>
                        <div className='font-normal overflow-hidden text-ellipsis text-xs whitespace-nowrap'>
                          Photo editor needed. Fix photos? �&nbsp;️
                        </div>
                      </div>
                    </Link>
                    <Link
                      href='#'
                      className='relative flex items-center gap-4 p-2 py-3 duration-200 rounded-lg hover:bg-hover-1'>
                      <div className='relative w-10 h-10 shrink-0'>
                        <img
                          src='images/home/avatar-4.jpg'
                          alt=''
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center gap-2 mb-1'>
                          <div className='mr-auto text-sm text-black dark:text-white font-medium'>
                            Jesse Steeve
                          </div>
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

                <div className='w-3 h-3 absolute -top-1.5 right-3 border-l border-t rotate-45 max-md:hidden bg-background-1 dark:border-transparent'></div>
              </div>

              {/* <!-- profile --> */}
              <div className='rounded-full relative bg-foreground-1 cursor-pointer shrink-0'>
                <img
                  src='images/home/avatar-2.jpg'
                  alt=''
                  className='sm:w-9 sm:h-9 w-7 h-7 rounded-full shadow shrink-0'
                />
              </div>
              <div
                className='hidden bg-white rounded-lg drop-shadow-xl dark:bg-slate-700 w-64 border2'
                data-uk-drop='offset:6;pos: bottom-right;animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
                <Link href=''>
                  <div className='p-4 py-5 flex items-center gap-4'>
                    <img src='images/home/avatar-2.jpg' alt='' className='w-10 h-10 rounded-full shadow' />
                    <div className='flex-1'>
                      <h4 className='text-sm font-medium text-text-1'>Stell johnson</h4>
                      <div className='text-sm mt-1 text-blue-600 font-light dark:text-white/70'>@mohnson</div>
                    </div>
                  </div>
                </Link>

                <hr className='' />

                <nav className='p-2 text-sm text-black font-normal dark:text-white'>
                  <Link href=''>
                    <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md text-blue-600'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'></path>
                      </svg>
                      Upgrade To Premium
                    </div>
                  </Link>
                  <Link href=''>
                    <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'></path>
                      </svg>
                      My Billing
                    </div>
                  </Link>
                  <Link href=''>
                    <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46'></path>
                      </svg>
                      Advancing
                    </div>
                  </Link>
                  <Link href=''>
                    <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'></path>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
                      </svg>
                      My Account
                    </div>
                  </Link>
                  <button type='button' className='w-full'>
                    <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'></path>
                      </svg>
                      Night mode
                      <label className='switch cursor-pointer ml-auto'>
                        <input
                          type='checkbox'
                          checked={mode === 'dark' ? true : false}
                          onChange={toggleMode}
                        />
                        <span className='switch-button !relative'></span>
                      </label>
                    </div>
                  </button>
                  <hr className='-mx-2 my-2/60' />
                  <Link href=''>
                    <div className='flex items-center gap-2.5 hover:bg-hover-1 p-2 px-2.5 rounded-md'>
                      <svg
                        className='w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'></path>
                      </svg>
                      Log Out
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
