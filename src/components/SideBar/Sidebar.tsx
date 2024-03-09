'use client';

import * as React from 'react';
import { IoMdHome, IoMdNotificationsOutline, IoMdPeople } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
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
  const [open, setOpen] = React.useState(true);

  const [collapse, setCollapse] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [openNotification, setOpenNotification] = React.useState(false);

  const CloseAllComponent = () => {
    setOpenSearch(false);
    setOpenNotification(false);
  };

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
          setCollapse(false);
          setOpenSearch(false);
        } else {
          CloseAllComponent();
          setCollapse(true);
          setOpenSearch(true);
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
          setCollapse(false);
          setOpenNotification(false);
        } else {
          CloseAllComponent();
          setCollapse(true);
          setOpenNotification(true);
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
    <nav
      className={cn('side-bar fixed left-0 top-0 h-dvh bg-foreground-1')}
      style={{
        zIndex: 2
      }}
    >
      <div className={cn('flex h-full', collapse && '')}>
        <div
          className={cn(
            'overflow-y-scroll px-2 w-60 max-lg/2:w-20 custom-scrollbar-none h-full animate-fade-right',
            collapse ? 'w-20' : ''
          )}
        >
          <div
            className={cn(
              'h2-bold px-3 mt-3 mb-3 hidden max-lg/2:block max-lg/2:flex-center',
              collapse && 'block flex-center'
            )}
          >
            <Image
              className='size-6'
              src='/assets/images/logo-icon.png'
              width={40}
              height={40}
              alt='logo'
            />
          </div>
          <div
            className={cn(
              'h2-bold mb-1 px-3 max-lg/2:hidden',
              collapse && 'hidden'
            )}
          >
            Devhub
          </div>

          {MenuItem.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={() => {
                if (item.onclick) item.onclick();
              }}
            >
              <div
                className={cn(
                  'group mb-3 cursor-pointer rounded-lg px-3 py-2.5 hover:bg-hover-1 max-lg/2:flex-center',
                  collapse ? 'flex-center' : 'flex-start'
                )}
              >
                <div
                  className={cn(
                    'text-2xl mr-3 max-lg/2:mr-0 text-text-1',
                    collapse && 'mr-0'
                  )}
                >
                  {item.icon}
                </div>
                <div
                  className={cn(
                    'text-text-2 group-hover:text-text-1 max-lg/2:hidden',
                    collapse && 'hidden'
                  )}
                >
                  {item.title}
                </div>
              </div>
            </Link>
          ))}

          {session ? (
            <div className='mt-5'>
              <HoverCard openDelay={100} onOpenChange={setOpen}>
                <HoverCardTrigger
                  className={cn(
                    'max-lg/2:flex-center mb-2 cursor-default px-3',
                    collapse ? 'flex-center' : 'flex-start'
                  )}
                  onMouseEnter={() => {
                    CloseAllComponent();
                    setCollapse(false);
                  }}
                >
                  <Avatar
                    className={cn(
                      'size-7 me-3 max-lg/2:me-0',
                      collapse && 'me-0'
                    )}
                    src={getImageURL(session?.user.image!)}
                  />
                  <span
                    className={cn(
                      'base-bold me-7 text-text-2 max-lg/2:hidden',
                      collapse && 'hidden'
                    )}
                  >
                    {session?.user.name || 'John Doe'}
                  </span>
                  <MdArrowForwardIos
                    className={cn(
                      'transition duration-200 max-lg/2:hidden',
                      collapse && 'hidden',
                      open && '-rotate-90'
                    )}
                  />
                </HoverCardTrigger>
                <HoverCardContent className='mb-2 overflow-hidden rounded-lg border border-border-1 bg-foreground-1 py-3 text-text-1'>
                  <AccountDetail />
                </HoverCardContent>
              </HoverCard>
            </div>
          ) : (
            <div className='flex-center lg:flex-start mb-2 cursor-default px-3'>
              <Skeleton
                className='size-7 lg:me-3'
                variant='circular'
                width={40}
                height={40}
              />
              <Skeleton
                className='base-bold me-7 hidden lg:block'
                variant='text'
                width={100}
                height={30}
              />
              <MdArrowForwardIos
                className={cn(
                  'hidden transition duration-200 lg:block',
                  open && '-rotate-90'
                )}
              />
            </div>
          )}
        </div>
        <div
          className={cn(
            'search w-[380px] bg-foreground-1 overflow-y-scroll custom-scrollbar-fg py-6 h-full duration-300',
            openSearch
              ? 'animate-in slide-in-from-left border-s border-border-1'
              : 'w-0 border-none'
          )}
        >
          <Search />
        </div>
        <div
          className={cn(
            'search w-[380px] bg-foreground-1 overflow-y-scroll custom-scrollbar-fg py-6 h-full duration-300',
            openNotification
              ? 'animate-in slide-in-from-left border-s border-border-1'
              : 'w-0 border-none'
          )}
        >
          <Notification />
        </div>
      </div>
    </nav>
  );
}
