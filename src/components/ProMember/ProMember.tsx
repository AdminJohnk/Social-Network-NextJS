'use client';

import * as React from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { cn } from '@/lib/utils';
import SuggestMemberItem from '../SuggestMemberItem/SuggestMemberItem';

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <span
      className={cn(
        'text-text-1 text-xl absolute -right-3 top-10 rounded-full bg-hover-1 cursor-pointer p-2'
      )}
      onClick={onClick}>
      <IoIosArrowForward />
    </span>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <span
      className={cn(
        'text-text-1 text-xl absolute -left-4 top-10 rounded-full bg-hover-1 cursor-pointer p-2'
      )}
      onClick={onClick}>
      <IoIosArrowBack />
    </span>
  );
}

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const MemberList = [
  {
    id: 1,
    name: 'John Doe',
    follow_number: '12K',
    avatar: '/assets/images/avatars/avatar-1.jpg'
  },
  {
    id: 2,
    name: 'Jane Doe',
    follow_number: '10K',
    avatar: '/assets/images/avatars/avatar-2.jpg'
  },
  {
    id: 3,
    name: 'John Doe',
    follow_number: '12K',
    avatar: '/assets/images/avatars/avatar-3.jpg'
  },
  {
    id: 4,
    name: 'Jane Doe',
    follow_number: '10K',
    avatar: '/assets/images/avatars/avatar-4.jpg'
  },
  {
    id: 5,
    name: 'John Doe',
    follow_number: '12K',
    avatar: '/assets/images/avatars/avatar-5.jpg'
  },
  {
    id: 6,
    name: 'Jane Doe',
    follow_number: '10K',
    avatar: '/assets/images/avatars/avatar-6.jpg'
  }
];

export interface IOnlineFriendProps {}

export default function OnlineFriend(props: IOnlineFriendProps) {
  return (
    <div className='online-friend px-5 py-4 bg-foreground-1 rounded-lg'>
      <div className='flex-between'>
        <span className='h5-bold'>Pro Members</span>
      </div>
      <div className='mt-6'>
        <Slider {...settings} className='relative'>
          {MemberList.map((item, index) => {
            return (
              <div key={index}>
                <SuggestMemberItem member={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
