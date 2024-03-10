import { cn } from '@/lib/utils';
import { Avatar, Divider, FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import * as React from 'react';
import { IoSearch } from 'react-icons/io5';
import { CiHashtag } from 'react-icons/ci';

const SearchList = [
  {
    type: 'user',
    id: '1',
    name: 'John smith',
    avatar: '/images/avatars/avatar-1.jpg',
    feature: 'Suggested For You'
  },
  {
    type: 'user',
    id: '2',
    name: 'James Lewis',
    avatar: '/images/avatars/avatar-2.jpg',
    feature: 'Follow By Johnson'
  },
  {
    type: 'text',
    title: 'artificial intelligence',
    post_number: 13.352
  },
  {
    type: 'user',
    id: '3',
    name: 'Monroe Parker',
    avatar: '/images/avatars/avatar-3.jpg',
    feature: 'Follow By Johnson'
  },
  {
    type: 'user',
    id: '4',
    name: 'James Lewis',
    avatar: '/images/avatars/avatar-4.jpg',
    feature: 'Suggested For You'
  },
  {
    type: 'user',
    id: '5',
    name: 'Monroe Parker',
    avatar: '/images/avatars/avatar-5.jpg',
    feature: 'Follow By Johnson'
  },
  {
    type: 'text',
    title: 'UI Designer',
    post_number: 4.248
  },
  {
    type: 'text',
    title: 'Affiliate Marketing',
    post_number: 9.362
  },
  {
    type: 'user',
    id: '4',
    name: 'James Lewis',
    avatar: '/images/avatars/avatar-6.jpg',
    feature: 'Suggested For You'
  },
  {
    type: 'user',
    id: '1',
    name: 'John smith',
    avatar: '/images/avatars/avatar-7.jpg',
    feature: 'Follow By Johnson'
  }
];

export interface ISearchProps {}

export default function Search(props: ISearchProps) {
  return (
    <div className='search'>
      <div className='top px-5'>
        <div className='h3-semibold mb-5'>Search</div>
        <form action=''>
          <div className='flex-start bg-foreground-2 rounded-lg'>
            <div className='ps-3 pe-2'>
              <IoSearch className='size-6' />
            </div>
            <input
              type='text'
              id='name'
              className={cn('bg-transparent !ring-transparent border-none text-text-1 w-full')}
              placeholder='Search'
              autoComplete='one-time-code'
              required
            />
          </div>
        </form>
      </div>
      <Divider className='bg-border-1 my-5' />
      <div className='bottom'>
        <div className='mb-5 px-5 flex-between'>
          <span className='base-bold'>Recent</span>
          <span className='base-semibold text-primary-500 cursor-pointer'>Clear all</span>
        </div>
        <div className='list-search px-2'>
          {SearchList.map((item, index) => {
            if (item.type === 'user') {
              return (
                <div
                  key={index}
                  className='flex-start align-center px-3 py-2 mb-2.5 hover:bg-hover-1 rounded-lg cursor-pointer'>
                  <div className='avatar'>
                    <Avatar src={item.avatar} className='size-10' />
                  </div>
                  <div className='ps-3'>
                    <div className='h6-bold'>{item.name}</div>
                    <div className='small-regular text-text-3'>{item.feature}</div>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className='mb-2.5 py-2 px-3 flex-start hover:bg-hover-1 cursor-pointer rounded-lg'>
                  <div className='rounded-full border border-text-1 p-2.5'>
                    <CiHashtag className='size-4' />
                  </div>
                  <div className='ps-3'>
                    <div className='h6-bold'>{item.title}</div>
                    <div className='small-regular text-text-3'>{item.post_number}K posts</div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
