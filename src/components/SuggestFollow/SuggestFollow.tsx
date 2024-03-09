import { Avatar } from '@mui/material';
import * as React from 'react';
import { FiRefreshCw } from 'react-icons/fi';

const FollowList = [
  {
    name: 'John Doe',
    avatar: '/images/avatars/avatar-7.jpg',
    feature: 'Suggested For You'
  },
  {
    name: 'James Lewis',
    avatar: '/images/avatars/avatar-2.jpg',
    feature: 'Follow By Johnson'
  },
  {
    name: 'Jane Doe',
    avatar: '/images/avatars/avatar-3.jpg',
    feature: 'Suggested For You'
  },
  {
    name: 'John Doe',
    avatar: '/images/avatars/avatar-4.jpg',
    feature: 'Follow By Marisa'
  },
  {
    name: 'John Doe',
    avatar: '/images/avatars/avatar-5.jpg',
    feature: 'Suggested For You'
  }
];

export interface ISuggestFollowProps {}

export default function SuggestFollow(props: ISuggestFollowProps) {
  return (
    <div className='suggest-follow px-5 py-4 bg-foreground-1 rounded-lg'>
      <div className='flex-between'>
        <span className='h5-bold'>People You might know</span>
        <span>
          <FiRefreshCw className='size-4 cursor-pointer' />
        </span>
      </div>
      <div className='mt-5'>
        {FollowList.map((item, index) => {
          return (
            <div key={index} className='flex-between mb-5'>
              <div className='flex-start'>
                <Avatar src={item.avatar} className='size-10' />
                <div className='flex flex-col ms-3'>
                  <span className='base-bold'>{item.name}</span>
                  <span className='small-regular text-text-2'>{item.feature}</span>
                </div>
              </div>
              <button className='base-bold bg-hover-1 hover:bg-hover-2 duration-300 text-text-2 px-4 py-1 rounded-2xl'>
                Follow
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
