'use client';

import * as React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { Avatar, Divider } from '@mui/material';

const NewNotification = [
  {
    user: {
      name: 'John Michael',
      avatar: '/images/avatars/avatar-1.jpg'
    },
    content: 'who you might know, is on Instello',
    time: '1 hour ago'
  },
  {
    user: {
      name: 'Alexa Gray',
      avatar: '/images/avatars/avatar-2.jpg'
    },
    content: 'started following you. Welcome him to your profile. 👋',
    time: '4 hour ago'
  },
  {
    user: {
      name: 'Sarah Lee',
      avatar: '/images/avatars/avatar-3.jpg'
    },
    content: 'liked your post "Amazing sunset!"',
    time: '8 hour ago'
  }
];

const ThisWeekNotification = [
  {
    user: {
      name: 'David Kim',
      avatar: '/images/avatars/avatar-4.jpg'
    },
    content: 'commented on your photo "Happy birthday!" 💖',
    time: '12 hour ago'
  },
  {
    user: {
      name: 'Instello Team',
      avatar: '/images/logo-icon.png'
    },
    content: 'suggested some groups you might like to join.',
    time: '1 day ago'
  },
  {
    user: {
      name: 'Emily Jones',
      avatar: '/images/avatars/avatar-5.jpg'
    },
    content: 'mentioned you in a post: "Check out this article by @username"',
    time: '2 days ago'
  },
  {
    user: {
      name: 'William Chen',
      avatar: '/images/avatars/avatar-6.jpg'
    },
    content: 'is celebrating their work anniversary today! 😍  ',
    time: '3 days ago'
  },
  {
    user: {
      name: 'Christine Lee',
      avatar: '/images/avatars/avatar-7.jpg'
    },
    content: 'started a new conversation with you. Say hi! ',
    time: '4 days ago'
  },
  {
    user: {
      name: 'Instello Polls',
      avatar: '/images/logo-icon.png'
    },
    content: 'created a new poll: "What is your favorite food?" Vote now!',
    time: '1 week ago'
  },
  {
    user: {
      name: 'Michael Brown',
      avatar: '/images/avatars/avatar-5.jpg'
    },
    content: 'shared a link: "Interesting article about social media trends"',
    is_followed: false,
    time: '2 weeks ago'
  }
];

export interface INotificationProps {}

export default function Notification(props: INotificationProps) {
  return (
    <div className='notification'>
      <div className='title flex-between px-5 mb-6'>
        <span className='h3-semibold'>Notification</span>
        <div className='flex-start gap-2 *:size-6'>
          <IoSettingsOutline />
          <IoIosCheckmarkCircleOutline />
        </div>
      </div>
      <div className='new'>
        <div className='mx-5 base-bold mb-4'>New</div>
        <div className='notification-list px-2'>
          {NewNotification.map((item, index) => (
            <div
              key={index}
              className='notification-item flex-between gap-3 px-3 py-2 mb-1 hover:bg-hover-1 hover:cursor-pointer rounded-lg duration-300'
            >
              <div className='left flex-start'>
                <div className='avatar me-3'>
                  <Avatar src={item.user.avatar} className='size-12' />
                </div>
                <div className='content'>
                  <div>
                    <span className='base-bold me-2'>{item.user.name}</span>
                    <span>{item.content}</span>
                  </div>
                  <div className='text-text-2 small-regular mt-1'>
                    {item.time}
                  </div>
                </div>
              </div>
              {/* <div className='right'>
                {!item.is_followed && <div className='followed'>Follow</div>}
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <Divider className='bg-border-1 my-5' />
      <div className='this-week'>
        <div className='mx-5 base-bold my-4'>This Week</div>
        <div className='notification-list'>
          {ThisWeekNotification.map((item, index) => (
            <div
              key={index}
              className='notification-item flex-between gap-3 px-3 py-2 mb-1 hover:bg-hover-1 hover:cursor-pointer rounded-lg duration-300'
            >
              <div className='left flex-start'>
                <div className='avatar me-3'>
                  <Avatar src={item.user.avatar} className='size-12' />
                </div>
                <div className='content'>
                  <div>
                    <span className='base-bold me-2'>{item.user.name}</span>
                    <span>{item.content}</span>
                  </div>
                  <div className='text-text-2 small-regular mt-1'>
                    {item.time}
                  </div>
                </div>
              </div>
              {/* <div className='right'>
                {!item.is_followed && <div className='followed'>Follow</div>}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
