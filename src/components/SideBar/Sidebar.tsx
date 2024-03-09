'use client';

import * as React from 'react';
import { IoMdHome, IoMdNotificationsOutline, IoMdPeople } from 'react-icons/io';
import { IoChevronDown, IoSearch } from 'react-icons/io5';
import { MdOutlineExplore, MdArrowForwardIos } from 'react-icons/md';
import { TbMessage } from 'react-icons/tb';
import { BsCameraReels } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
import { CiCirclePlus } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { Avatar, Skeleton } from '@mui/material';
import Link from 'next/link';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import AccountDetail from '@/components/Profile/AccountDetail';
import getImageURL, { cn } from '@/lib/utils';
import Image from 'next/image';
import Search from '../Search/Search';
import Notification from '../Notification/Notification';

export interface ISideBarProps {}

export default function SideBar(props: ISideBarProps) {
  const [open, setOpen] = React.useState(false);

  const [collapse, setCollapse] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [openNotification, setOpenNotification] = React.useState(false);

  const CloseAllComponent = () => {
    setOpenSearch(false);
    setOpenNotification(false);
  };

  React.useEffect(() => {
    if (openNotification || openSearch) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [openSearch, openNotification]);

  const MenuItem = [
    {
      title: 'Home',
      icon: <IoMdHome />,
      link: '/'
    },
    {
      title: 'Search',
      icon: <IoSearch />,
      link: '',
      onclick: () => {
        if (openSearch) {
          setOpenSearch(false);
        } else {
          setOpenSearch(true);
          if (openNotification) setOpenNotification(false);
        }
      }
    },
    {
      title: 'Explore',
      icon: <MdOutlineExplore />,
      link: '/explore'
    },
    {
      title: 'Messages',
      icon: <TbMessage />,
      link: '/messages'
    },
    {
      title: 'Reels',
      icon: <BsCameraReels />,
      link: '/reels'
    },
    {
      title: 'Notifications',
      icon: <IoMdNotificationsOutline />,
      link: '',
      onclick: () => {
        if (openNotification) {
          setOpenNotification(false);
        } else {
          setOpenNotification(true);
          if (openSearch) setOpenSearch(false);
        }
      }
    },
    {
      title: 'People',
      icon: <IoMdPeople />,
      link: '/people'
    },
    {
      title: 'Create',
      icon: <CiCirclePlus />,
      link: '/create'
    },
    {
      title: 'Profile',
      icon: <CgProfile />,
      link: '/profile'
    }
  ];

  const { data: session } = useSession();

  return (
    <div
      id='site__sidebar'
      className='fixed top-0 left-0 z-[99] pt-[--m-top] overflow-hidden transition-transform xl:duration-500 max-xl:w-full max-xl:-translate-x-full'>
      {/* <!-- sidebar inner --> */}
      <div className='p-2 max-xl:bg-white shadow-sm 2xl:w-72 sm:w-64 w-[80%] h-[calc(100vh-64px)] relative z-30 max-lg:border-r dark:max-xl:!bg-slate-700 dark:border-slate-700'>
        <div className='pr-4' data-simplebar='init'>
          <div className='simplebar-wrapper' style={{ margin: '0px -16px 0px 0px;' }}>
            <div className='simplebar-height-auto-observer-wrapper'>
              <div className='simplebar-height-auto-observer'></div>
            </div>
            <div className='simplebar-mask'>
              <div className='simplebar-offset' style={{ right: '-15px; bottom: 0px;' }}>
                <div
                  className='simplebar-content'
                  style={{ padding: '0px 16px 0px 0px', height: '100%', overflow: 'hidden scroll' }}>
                  <nav id='side'>
                    <ul>
                      <li>
                        <a href='feed.html'>
                          <img src='assets/images/icons/home.png' alt='feeds' className='w-6' />
                          <span> Feed </span>
                        </a>
                      </li>
                      <li>
                        <a href='messages.html'>
                          <img src='assets/images/icons/message.png' alt='messages' className='w-5' />
                          <span> messages </span>
                        </a>
                      </li>
                      <li>
                        <a href='video.html'>
                          <img src='assets/images/icons/video.png' alt='messages' className='w-6' />
                          <span> video </span>
                        </a>
                      </li>
                      <li>
                        <a href='event.html'>
                          <img src='assets/images/icons/event.png' alt='messages' className='w-6' />
                          <span> event </span>
                        </a>
                      </li>
                      <li className='active'>
                        <a href='pages.html'>
                          <img src='assets/images/icons/page.png' alt='pages' className='w-6' />
                          <span> Pages </span>
                        </a>
                      </li>
                      <li>
                        <a href='groups.html'>
                          <img src='assets/images/icons/group.png' alt='groups' className='w-6' />
                          <span> Groups </span>
                        </a>
                      </li>
                      <li>
                        <a href='market.html'>
                          <img src='assets/images/icons/market.png' alt='market' className='w-7 -ml-1' />
                          <span> market </span>
                        </a>
                      </li>
                      <li>
                        <a href='blog.html'>
                          <img src='assets/images/icons/blog.png' alt='blog' className='w-6' />
                          <span> blog </span>
                        </a>
                      </li>
                      <li className='!hidden' id='show__more'>
                        <a href='games.html'>
                          <img src='assets/images/icons/game.png' alt='games' className='w-6' />
                          <span> games </span>
                        </a>
                      </li>
                      <li className='!hidden' id='show__more'>
                        <a href='funding.html'>
                          <img src='assets/images/icons/fund.png' alt='messages' className='w-6' />
                          <span> Fundraiser </span>
                        </a>
                      </li>
                      <li className='!hidden' id='show__more'>
                        <a href='blog-2.html'>
                          <img src='assets/images/icons/blog-2.png' alt='blog' className='w-6' />
                          <span> blog II </span>
                        </a>
                      </li>
                      <li className='!hidden' id='show__more'>
                        <a href='event-2.html'>
                          <img src='assets/images/icons/event-2.png' alt='event' className='w-6' />
                          <span> Event II </span>
                        </a>
                      </li>
                      <li className='!hidden' id='show__more'>
                        <a href='groups-2.html'>
                          <img src='assets/images/icons/group-2.png' alt='groups' className='w-6' />
                          <span> Groups II </span>
                        </a>
                      </li>
                    </ul>

                    <button
                      type='button'
                      className='flex items-center gap-4 py-2 px-4 w-full font-medium text-sm text-black dark:text-white'
                      uk-toggle='target: #show__more; cls: !hidden uk-animation-fade'
                      aria-expanded='true'>
                      <svg
                        className='bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fill-rule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clip-rule='evenodd'></path>
                      </svg>
                      <span id='show__more'> See More </span>
                      <span className='!hidden' id='show__more'>
                        See Less
                      </span>
                    </button>
                  </nav>

                  <div className='font-medium text-sm text-black border-t pt-3 mt-2 dark:text-white dark:border-slate-800'>
                    <div className='px-3 pb-2 text-sm font-medium'>
                      <div className='text-black dark:text-white'>Shortcut</div>
                    </div>
                    <a href='#'>
                      <div className='flex items-center gap-2 p-3 px-4 rounded-xl hover:bg-secondery'>
                        <img
                          src='assets/images/avatars/avatar-2.jpg'
                          alt=''
                          className='w-6 rounded-full object-cover'
                        />
                        <div> Marin Gray</div>
                      </div>
                    </a>
                    <a href='#'>
                      <div className='flex items-center gap-2 p-3 px-4 rounded-xl hover:bg-secondery'>
                        <img
                          src='assets/images/avatars/avatar-7.jpg'
                          alt=''
                          className='w-6 rounded-full object-cover'
                        />
                        <div> Alexa Stella</div>
                      </div>
                    </a>
                    <a href='#'>
                      <div className='flex items-center gap-2 p-3 px-4 rounded-xl hover:bg-secondery'>
                        <img
                          src='assets/images/avatars/avatar-3.jpg'
                          alt=''
                          className='w-6 rounded-full object-cover'
                        />
                        <div> Sarah Ali</div>
                      </div>
                    </a>
                  </div>

                  <nav
                    id='side'
                    className='font-medium text-sm text-black border-t pt-3 mt-2 dark:text-white dark:border-slate-800'>
                    <div className='px-3 pb-2 text-sm font-medium'>
                      <div className='text-black dark:text-white'>Pages</div>
                    </div>

                    <ul className='mt-2 -space-y-2 uk-nav' uk-nav='multiple: true'>
                      <li>
                        <a href='setting.html'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='w-4 h-4'>
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'></path>
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
                          </svg>
                          <span> Setting </span>
                        </a>
                      </li>
                      <li>
                        <a href='upgrade.html'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='w-4 h-4'>
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'></path>
                          </svg>
                          <span> Upgrade </span>
                        </a>
                      </li>
                      <li>
                        <a href='form-login.html'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='w-4 h-4'>
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'></path>
                          </svg>
                          <span> Authentication </span>
                        </a>
                      </li>
                      <li className='uk-parent'>
                        <a href='#' className='group'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='w-4 h-4'>
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'></path>
                          </svg>
                          <span> Development </span>
                          <IoChevronDown className='text-base ml-auto duration-200 group-aria-expanded:rotate-180 md hydrated' />
                        </a>
                        <ul className='pl-10 my-1 space-y-0 text-sm'>
                          <li>
                            <a href='components.html' className='!py-2 !rounded -md'>
                              Elements
                            </a>
                          </li>
                          <li>
                            <a href='components.html' className='!py-2 !rounded -md'>
                              Components
                            </a>
                          </li>
                          <li>
                            <a href='components.html' className='!py-2 !rounded -md'>
                              Icons
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>

                  <div className='text-xs font-medium flex flex-wrap gap-2 gap-y-0.5 p-2 mt-2'>
                    <a href='#' className='hover:underline'>
                      About
                    </a>
                    <a href='#' className='hover:underline'>
                      Blog
                    </a>
                    <a href='#' className='hover:underline'>
                      Careers
                    </a>
                    <a href='#' className='hover:underline'>
                      Support
                    </a>
                    <a href='#' className='hover:underline'>
                      Contact Us
                    </a>
                    <a href='#' className='hover:underline'>
                      Developer
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='simplebar-placeholder' style={{ width: '272px', height: '897px' }}></div>
          </div>
          <div className='simplebar-track simplebar-horizontal' style={{ visibility: 'hidden' }}>
            <div
              className='simplebar-scrollbar'
              style={{ transform: 'translate3d(0px, 0px, 0px)', visibility: 'hidden' }}></div>
          </div>
          <div className='simplebar-track simplebar-vertical' style={{ visibility: 'visible' }}>
            <div
              className='simplebar-scrollbar'
              style={{
                height: '794px',
                transform: 'translate3d(0px, 0px, 0px)',
                visibility: 'visible'
              }}></div>
          </div>
        </div>
      </div>

      {/* <!-- sidebar overly --> */}
      <div
        id='site__sidebar__overly'
        className='absolute top-0 left-0 z-20 w-screen h-screen xl:hidden backdrop-blur-sm'
        uk-toggle='target: #site__sidebar ; cls :!-translate-x-0'
        tabIndex={0}
        aria-expanded='false'></div>
    </div>
  );
}
