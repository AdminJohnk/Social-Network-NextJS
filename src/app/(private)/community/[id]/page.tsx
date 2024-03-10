import NewPost from '@/components/NewPost/NewPost';
import Post from '@/components/Post/Post';
import PostSkeleton from '@/components/Post/PostSkeleton';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import About from '../../../../components/pages/Community/About';
import RecentMedia from '../../../../components/pages/Community/RecentMedia';
import { IoIosMore } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';

import SuggestGroup from '../../../../components/pages/Community/SuggestGroup';

export interface ICommunityProps { }

export default function Community(props: ICommunityProps) {
  return (
    <div
      className='ms-60 max-lg/2:ms-20 @container/pri'
      style={{
        zIndex: 1
      }}
    >
      <div
        className='newfeed px-40 py-10 @6xl/pri:px-32 @5xl/pri:px-24 @xl/pri:px-14 @sm/pri:px-2'
        style={{ height: '5000px' }}
      >
        <div className='cover'>
          <Image
            className='w-full h-[300px] object-cover object-center'
            src='/images/group-cover.jpg'
            width={1000}
            height={500}
            alt='cover'
          />
          <div className='bg-foreground-1 p-4 flex items-center justify-between rounded-br-lg rounded-bl-lg'>
            <div>
              <h1 className='h3-bold font-bold'>Friends Forever</h1>
              <p className='text-text-2 mt-2.5 h5-regular'>
                Public group • 1.2K likes • 1.4K followers
              </p>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='flex -space-x-1'>
                <Avatar
                  src='/images/avatars/avatar-1.jpg'
                  className='size-8'
                />
                <Avatar
                  src='/images/avatars/avatar-2.jpg'
                  className='size-8'
                />
                <Avatar
                  src='/images/avatars/avatar-3.jpg'
                  className='size-8'
                />
                <Avatar
                  src='/images/avatars/avatar-4.jpg'
                  className='size-8'
                />
                <Avatar
                  src='/images/avatars/avatar-5.jpg'
                  className='size-8'
                />
              </div>
              <button className='px-6 py-2 bg-foreground-2 hover:bg-hover-2 duration-300 rounded-lg flex-start'>
                <FiPlus className='me-2 size-5' /> <span>Join</span>
              </button>
              <button>
                <IoIosMore className='size-6' />
              </button>
            </div>
          </div>
        </div>
        <div className='content mt-14 max-md:mt-0 flex w-full'>
          <div className='post w-3/5 max-lg:w-full px-9'>
            <div className='new-post mb-8'>
              <NewPost />
            </div>
            <div className='post *:mb-6'>
              <Post />
              <Post />
              <Post />
            </div>
            <div className='post-skeleton *:mb-6'>
              <PostSkeleton />
            </div>
          </div>
          <div className='more-info w-2/5 max-lg:hidden'>
            <div className='mt-6'>
              <About />
            </div>
            {/* <div className='mt-6'>
              <RecentMedia />
            </div> */}
            <div className='mt-6'>
              <SuggestGroup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
