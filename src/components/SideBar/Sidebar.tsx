'use client';

import * as React from 'react';
import { IoMdHome, IoMdNotificationsOutline, IoMdPeople } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineExplore, MdArrowForwardIos } from 'react-icons/md';
import { TbMessage } from 'react-icons/tb';
import { BsCameraReels } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useSession } from 'next-auth/react';
import { CiCirclePlus } from 'react-icons/ci';
import { CgComponents, CgProfile } from 'react-icons/cg';
import { Avatar, Skeleton } from '@mui/material';
import Link from 'next/link';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import AccountDetail from '@/components/Profile/AccountDetail';
import getImageURL, { cn } from '@/lib/utils';
import Image from 'next/image';

export interface ISideBarProps {}

export default function SideBar(props: ISideBarProps) {
  const [open, setOpen] = React.useState(false);
  const [collapse, setCollapse] = React.useState(true);

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
        alert('Search');
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
      link: '/notifications'
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
      className={cn(
        'side-bar fixed left-0 top-0 h-dvh bg-foreground-1 px-2 w-60 max-lg/2:w-20 overflow-y-scroll custom-scrollbar-none'
      )}>
      <div>
        <div
          className={cn('h2-bold mb-1 px-3 mt-1 hidden max-lg/2:block max-lg/2:flex-center', {
            block: !collapse
          })}>
          <Image className='size-6' src='/images/logo-icon.png' width={40} height={40} alt='logo' />
        </div>
        <div className={cn('h2-bold mb-1 px-3 max-lg/2:hidden')}>Instello</div>

        {MenuItem.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              if (item.onclick) item.onclick();
            }}
            className={cn(
              'flex-start group mb-3 cursor-pointer rounded-lg px-3 py-2.5 hover:bg-hover-1 max-lg/2:flex-center'
            )}>
            <div className={cn('text-2xl mr-3 max-lg/2:mr-0 text-text-1')}>{item.icon}</div>
            <div className={cn('text-text-2 group-hover:text-text-1 max-lg/2:hidden')}>{item.title}</div>
          </Link>
        ))}
      </div>
      {session ? (
        <div className='mt-5'>
          <HoverCard openDelay={100} onOpenChange={setOpen} open={open}>
            <HoverCardTrigger
              className='flex-center select-none lg:flex-start mb-2 cursor-default px-3'
              onClick={() => {
                
              }}>
              <Avatar className='size-7 lg:me-3' src={getImageURL(session?.user.image!)} />
              <span className='base-bold me-7 text-text-2 max-lg/2:hidden'>
                {session?.user.name || 'John Doe'}
              </span>
              <MdArrowForwardIos
                className={cn('transition duration-200 max-lg/2:hidden', open && '-rotate-90')}
              />
            </HoverCardTrigger>
            <HoverCardContent className='mb-2 overflow-hidden rounded-lg border border-border-1 bg-foreground-1 py-3 text-text-1'>
              <AccountDetail />
            </HoverCardContent>
          </HoverCard>
        </div>
      ) : (
        <div className='flex-center lg:flex-start mb-2 cursor-default px-3'>
          <Skeleton className='size-7 lg:me-3' variant='circular' width={40} height={40} />
          <Skeleton className='base-bold me-7 hidden lg:block' variant='text' width={100} height={30} />
          <MdArrowForwardIos className='hidden transition duration-200 lg:block' />
        </div>
      )}
    </nav>
  );
}
