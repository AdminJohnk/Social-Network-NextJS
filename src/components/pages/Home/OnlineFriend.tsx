'use client';

import { Children } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTranslations } from 'next-intl';
import { useSession } from 'next-auth/react';

import AvatarMessage from '@/components/pages/Chat/Avatar/AvatarMessage';
import { useCurrentUserInfo } from '@/hooks/query';
import { cn } from '@/lib/utils';

function SampleNextArrow(props: React.ButtonHTMLAttributes<HTMLDivElement>) {
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

function SamplePrevArrow(props: React.ButtonHTMLAttributes<HTMLDivElement>) {
  const { onClick } = props;
  return (
    <span
      className={cn('text-text-1 text-xl absolute -left-5 top-2 rounded-full bg-foreground-2 cursor-pointer')}
      onClick={onClick}>
      <IoIosArrowBack />
    </span>
  );
}

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

export default function OnlineFriend() {
  const t = useTranslations();

  const { data: session } = useSession();

  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');

  return (
    <div className='online-friend px-5 py-4 bg-foreground-1 rounded-lg'>
      <div className='flex-start'>
        <span className='h5-bold'>{t('Online friends')}</span>
      </div>
      <div className='mt-6'>
        <Slider {...settings}>
          {Children.toArray(
            currentUserInfo.friends.map((friend) => {
              return (
                <div className='p-1 cursor-pointer'>
                  <AvatarMessage user={friend} />
                </div>
              );
            })
          )}
        </Slider>
      </div>
    </div>
  );
}
