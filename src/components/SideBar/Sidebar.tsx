import * as React from 'react';
import {
  IoMdHome,
  IoMdNotificationsOutline,
  IoMdPeople,
  IoIosLogOut
} from 'react-icons/io';
import { IoSearch, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineExplore, MdArrowForwardIos } from 'react-icons/md';
import { TbMessage } from 'react-icons/tb';
import { BsCameraReels } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { CiCirclePlus } from 'react-icons/ci';
import { CgComponents, CgProfile } from 'react-icons/cg';
import { Avatar, Divider } from '@mui/material';
import { CiUser } from 'react-icons/ci';
import { GrUpgrade } from 'react-icons/gr';
import MouseOverPopover from '../ui/popover';
import Link from 'next/link';

export interface ISideBarProps {}

const MenuItem = [
  {
    title: 'Home',
    icon: <IoMdHome />,
    link: '/'
  },
  {
    title: 'Search',
    icon: <IoSearch />,
    link: '/search'
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
    title: 'Shop',
    icon: <FiShoppingCart />,
    link: '/shop'
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
    title: 'Components',
    icon: <CgComponents />,
    link: '/components'
  },
  {
    title: 'Profile',
    icon: <CgProfile />,
    link: '/profile'
  }
];

export default function SideBar(props: ISideBarProps) {
  return (
    <div className='fixed top-0 left-0 side-bar bg-foreground-1 w-60 min-h-dvh h-fit px-2'>
      <div className='h2-bold mb-1 px-3'>Instello</div>
      <div>
        {MenuItem.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className='flex-start mb-3 px-3 py-2.5 rounded-lg group cursor-pointer hover:bg-hover-1'>
            <div className='text-2xl mr-3'>{item.icon}</div>
            <div className='text-text-2 group-hover:text-text-1'>
              {item.title}
            </div>
          </Link>
        ))}
      </div>
      <MouseOverPopover
        DisplayContent={
          <div className='px-3 flex-start'>
            <Avatar className='size-7 me-3' />
            <span className='me-7 base-bold'>Monroe Parker</span>
            <MdArrowForwardIos />
          </div>
        }
        HideContent={
          <div className='bg-foreground-1 text-text-1 py-3 w-64 rounded-lg overflow-hidden border border-border-1'>
            <div className='ps-3'>
              <Avatar className='size-7 mb-3' />
              <div>
                <span className='h5-bold mb-2'>Monroe Parker</span>
              </div>
              <div>
                <span className='small-regular text-text-2 mb-4'>@monroe</span>
              </div>{' '}
              <div className='*:small-bold'>
                <span className='me-2'>620K</span>
                <span className='text-text-2 me-3'>Following</span>
                <span className='me-2'>38K</span>
                <span className='text-text-2'>Followers</span>
              </div>
            </div>
            <Divider className='bg-text-1 my-3' />
            <div className='*:px-3 *:py-2.5'>
              <div className='flex'>
                <span className='text-xl me-3'>
                  <CiUser />
                </span>
                <span>Profile</span>
              </div>
              <div className='flex'>
                <span className='text-xl me-3'>
                  <GrUpgrade />
                </span>
                <span>Upgrade</span>
              </div>
              <div className='flex'>
                <span className='text-xl me-3'>
                  <IoSettingsOutline />
                </span>
                <span>Account Setting</span>
              </div>
              <div className='flex'>
                <span className='text-xl me-3'>
                  <IoIosLogOut />
                </span>
                <span>Log Out</span>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
