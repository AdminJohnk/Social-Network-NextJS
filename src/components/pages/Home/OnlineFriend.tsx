'use client';

import Slider from 'react-slick';
import { Children, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { useSocketStore } from '@/store/socket';
import { useCurrentUserInfo } from '@/hooks/query';
import AvatarMessage from '@/components/pages/Chat/Avatar/AvatarMessage';

function SampleNextArrow(props: React.ButtonHTMLAttributes<HTMLSpanElement>) {
  const { onClick } = props;
  return (
    <span
      className={cn(
        'text-text-1 text-xl absolute -right-3 top-2 rounded-full bg-foreground-2 cursor-pointer'
      )}
      onClick={onClick}>
      <IoIosArrowForward />
    </span>
  );
}

function SamplePrevArrow(props: React.ButtonHTMLAttributes<HTMLSpanElement>) {
  const { onClick } = props;
  return (
    <span
      className={cn('text-text-1 text-xl absolute -left-5 top-2 rounded-full bg-foreground-2 cursor-pointer ml-2')}
      onClick={onClick}>
      <IoIosArrowBack />
    </span>
  );
}

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

export default function OnlineFriend() {
  const t = useTranslations();

  const { currentUserInfo } = useCurrentUserInfo();
  const { activeMembers: members } = useSocketStore();

  const friendsIsOnline = useMemo(() => {
    return currentUserInfo.friends.filter((friend) => members.some((member) => member._id === friend._id && member.is_online));
  }, [currentUserInfo.friends, members]);

  const listEmptyStart = useMemo(() => {
    return Math.floor((10 - friendsIsOnline.length) / 2);
  }, [friendsIsOnline]);

  const listEmptyEnd = useMemo(() => {
    return 10 - friendsIsOnline.length - listEmptyStart;
  }, [friendsIsOnline, listEmptyStart]);

  return (
    <div className='online-friend px-5 py-4 bg-foreground-1 rounded-lg'>
      <div className='flex-start'>
        <span className='h5-bold'>{t('Online friends')}</span>
      </div>
      <div className='mt-6'>
        <Slider {...settings}>
          {friendsIsOnline.length < 10 ?
            Array(listEmptyStart).fill(null).map((_, index) => (
              <div key={index} className='p-1'>
                <div className='w-10 h-10'></div>
              </div>
            )) : null
          }
          {Children.toArray(
            friendsIsOnline.map((friend) => {
              return (
                <Link
                  key={friend._id}
                  href={`/profile/${friend._id}`}
                  className='p-1 cursor-pointer'
                  data-uk-tooltip={`title: ${friend.name}; pos: top; delay: 200; offset: 6`}>
                  <AvatarMessage user={friend} />
                </Link>
              );
            })
          )}
          {friendsIsOnline.length < 10 ?
            Array(listEmptyEnd).fill(null).map((_, index) => (
              <div key={index} className='p-1'>
                <div className='w-10 h-10'></div>
              </div>
            )) : null
          }
        </Slider>
      </div>
    </div>
  );
}
