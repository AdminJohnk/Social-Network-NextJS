'use client';

import { FiRefreshCw } from 'react-icons/fi';
import Slider from 'react-slick';
import OnlineItem from './OnlineItem';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { cn } from '@/lib/utils';

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <span
      className={cn(
        'text-text-1 text-xl absolute -right-3 top-2 rounded-full bg-foreground-2 cursor-pointer'
      )}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </span>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <span
      className={cn(
        'text-text-1 text-xl absolute -left-5 top-2 rounded-full bg-foreground-2 cursor-pointer'
      )}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </span>
  );
}

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const FriendList = [
  { src: '/images/avatars/avatar-7.jpg' },
  { src: '/images/avatars/avatar-2.jpg' },
  { src: '/images/avatars/avatar-3.jpg' },
  { src: '/images/avatars/avatar-4.jpg' },
  { src: '/images/avatars/avatar-5.jpg' },
  { src: '/images/avatars/avatar-6.jpg' },
  { src: '/images/avatars/avatar-1.jpg' },
  { src: '/images/avatars/avatar-5.jpg' },
  { src: '/images/avatars/avatar-3.jpg' },
  { src: '/images/avatars/avatar-5.jpg' },
  { src: '/images/avatars/avatar-6.jpg' },
  { src: '/images/avatars/avatar-1.jpg' }
];

export interface IOnlineFriendProps {}

export default function OnlineFriend(props: IOnlineFriendProps) {
  return (
    <div className='online-friend px-5 py-4 bg-foreground-1 rounded-lg'>
      <div className='flex-between'>
        <span className='h5-bold'>People You might know</span>
        <span>
          <FiRefreshCw className='size-4 cursor-pointer' />
        </span>
      </div>
      <div className='mt-6'>
        <Slider {...settings} className='relative'>
          {FriendList.map((item, index) => {
            return (
              <span className='me-2' key={index}>
                <OnlineItem key={index} size={10} src={item.src} />
              </span>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
