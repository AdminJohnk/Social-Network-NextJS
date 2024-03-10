'use client';

import { IoChevronDown } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function SideBar() {
  return (
    <div
      id='site_sidebar'
      className='fixed top-0 left-0 z-[99] pt-[--m-top] overflow-hidden transition-transform xl:duration-500 max-xl:w-full max-xl:-translate-x-full'
    >
      <div className='p-2 max-xl:bg-white shadow-sm 2xl:w-72 sm:w-64 w-[80%] h-[calc(100vh-64px)] relative z-30 max-lg:border-r dark:max-xl:!bg-slate-700 dark:border-slate-700'>
        <SimpleBar className='pr-4'>
          <nav id='side'>
            <ul>
              <li className='active'>
                <Link href='/'>
                  <Image
                    src='/images/home/home.png'
                    alt='feeds'
                    width={24}
                    height={24}
                  />
                  <span> Feed </span>
                </Link>
              </li>
              <li>
                <Link href='messages'>
                  <Image
                    src='/images/home/message.png'
                    alt='messages'
                    width={20}
                    height={20}
                  />
                  <span> messages </span>
                </Link>
              </li>
              <li>
                <Link href=''>
                  <Image
                    src='/images/home/video.png'
                    alt='messages'
                    width={24}
                    height={24}
                  />
                  <span> video </span>
                </Link>
              </li>
              <li>
                <Link href=''>
                  <Image
                    src='/images/home/event.png'
                    alt='messages'
                    width={24}
                    height={24}
                  />
                  <span> event </span>
                </Link>
              </li>
              <li>
                <Link href=''>
                  <Image
                    src='/images/home/page.png'
                    alt='pages'
                    width={24}
                    height={24}
                  />
                  <span> Pages </span>
                </Link>
              </li>
              <li>
                <Link href=''>
                  <Image
                    src='/images/home/group.png'
                    alt='groups'
                    width={24}
                    height={24}
                  />
                  <span> Groups </span>
                </Link>
              </li>
              <li>
                <Link href=''>
                  <Image
                    src='/images/home/market.png'
                    alt='market'
                    className='-ml-1'
                    width={28}
                    height={28}
                  />
                  <span> market </span>
                </Link>
              </li>
              <li>
                <Link href=''>
                  <Image
                    src='/images/home/blog.png'
                    alt='blog'
                    width={24}
                    height={24}
                  />
                  <span> blog </span>
                </Link>
              </li>
              <li className='!hidden' id='show_more'>
                <Link href=''>
                  <Image
                    src='/images/home/game.png'
                    alt='games'
                    width={24}
                    height={24}
                  />
                  <span> games </span>
                </Link>
              </li>
              <li className='!hidden' id='show_more'>
                <Link href=''>
                  <Image
                    src='/images/home/fund.png'
                    alt='messages'
                    width={24}
                    height={24}
                  />
                  <span> Fundraiser </span>
                </Link>
              </li>
              <li className='!hidden' id='show_more'>
                <Link href=''>
                  <Image
                    src='/images/home/blog-2.png'
                    alt='blog'
                    width={24}
                    height={24}
                  />
                  <span> blog II </span>
                </Link>
              </li>
              <li className='!hidden' id='show_more'>
                <Link href=''>
                  <Image
                    src='/images/home/event-2.png'
                    alt='event'
                    width={24}
                    height={24}
                  />
                  <span> Event II </span>
                </Link>
              </li>
              <li className='!hidden' id='show_more'>
                <Link href=''>
                  <Image
                    src='/images/home/group-2.png'
                    alt='groups'
                    width={24}
                    height={24}
                  />
                  <span> Groups II </span>
                </Link>
              </li>
            </ul>

            <button
              type='button'
              className='flex items-center gap-4 py-2 px-4 w-full font-medium text-sm text-black dark:text-white'
              data-uk-toggle='target: #show_more; cls: !hidden uk-animation-fade'
            >
              <svg
                className='bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span id='show_more'> See More </span>
              <span className='!hidden' id='show_more'>
                See Less
              </span>
            </button>
          </nav>

          <div className='font-medium text-sm text-black border-t pt-3 mt-2 dark:text-white dark:border-slate-800'>
            <div className='px-3 pb-2 text-sm font-medium'>
              <div className='text-black dark:text-white'>Shortcut</div>
            </div>
            <Link href='#'>
              <div className='flex items-center gap-2 p-3 px-4 rounded-xl hover:bg-secondery'>
                <Image
                  src='/images/home/avatar-2.jpg'
                  alt=''
                  className='rounded-full object-cover'
                  width={24}
                  height={24}
                />
                <div>Marin Gray</div>
              </div>
            </Link>
            <Link href='#'>
              <div className='flex items-center gap-2 p-3 px-4 rounded-xl hover:bg-secondery'>
                <Image
                  src='/images/home/avatar-7.jpg'
                  alt=''
                  className='rounded-full object-cover'
                  width={24}
                  height={24}
                />
                <div>Alexa Stella</div>
              </div>
            </Link>
            <Link href='#'>
              <div className='flex items-center gap-2 p-3 px-4 rounded-xl hover:bg-secondery'>
                <Image
                  src='/images/home/avatar-3.jpg'
                  alt=''
                  className='rounded-full object-cover'
                  width={24}
                  height={24}
                />
                <div>Sarah Ali</div>
              </div>
            </Link>
          </div>

          <nav
            id='side'
            className='font-medium text-sm text-black border-t pt-3 mt-2 dark:text-white dark:border-slate-800'
          >
            <div className='px-3 pb-2 text-sm font-medium'>
              <div className='text-black dark:text-white'>Pages</div>
            </div>

            <ul className='mt-2 -space-y-2' data-uk-nav='multiple: true'>
              <li>
                <Link href=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-4 h-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
                    ></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    ></path>
                  </svg>
                  <span> Setting </span>
                </Link>
              </li>
              <li>
                <Link href=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-4 h-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
                    ></path>
                  </svg>
                  <span> Upgrade </span>
                </Link>
              </li>
              <li>
                <Link href=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-4 h-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
                    ></path>
                  </svg>
                  <span> Authentication </span>
                </Link>
              </li>
              <li className='uk-parent'>
                <Link href='#' className='group'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-4 h-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
                    ></path>
                  </svg>
                  <span> Development </span>
                  <IoChevronDown className='text-base ml-auto duration-200 group-aria-expanded:rotate-180' />
                </Link>
                <ul className='pl-10 my-1 space-y-0 text-sm'>
                  <li>
                    <Link href='' className='!py-2 !rounded -md'>
                      Elements
                    </Link>
                  </li>
                  <li>
                    <Link href='' className='!py-2 !rounded -md'>
                      Components
                    </Link>
                  </li>
                  <li>
                    <Link href='' className='!py-2 !rounded -md'>
                      Icons
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className='text-xs font-medium flex flex-wrap gap-2 gap-y-0.5 p-2 mt-2'>
            <Link href='#' className='hover:underline'>
              About
            </Link>
            <Link href='#' className='hover:underline'>
              Blog
            </Link>
            <Link href='#' className='hover:underline'>
              Careers
            </Link>
            <Link href='#' className='hover:underline'>
              Support
            </Link>
            <Link href='#' className='hover:underline'>
              Contact Us
            </Link>
            <Link href='#' className='hover:underline'>
              Developer
            </Link>
          </div>
        </SimpleBar>
      </div>

      {/* <!-- sidebar overly --> */}
      <div
        id='site__sidebar__overly'
        className='absolute top-0 left-0 z-20 w-screen h-screen xl:hidden backdrop-blur-sm'
        data-uk-toggle='target: #site_sidebar ; cls :!-translate-x-0'
      ></div>
    </div>
  );
}
