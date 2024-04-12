'use client';

import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar } from '@mui/material';
import { cn } from '@/lib/utils';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoCamera } from 'react-icons/io5';
import { useTranslations } from 'next-intl';

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <span
      className={cn(
        'text-text-1 text-xl absolute -right-5 top-5 rounded-full bg-foreground-2 cursor-pointer p-1'
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
        'text-text-1 text-xl absolute -left-10 top-5 rounded-full bg-foreground-2 cursor-pointer p-1'
      )}
      onClick={onClick}>
      <IoIosArrowBack />
    </span>
  );
}

export interface IStoryProps {}

export default function Story(props: IStoryProps) {
  var settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      }
    ]
  };

  const storyList = [
    {
      id: 1,
      name: 'John Doe',
      image: '/images/avatars/avatar-1.jpg'
    },
    {
      id: 2,
      name: 'Jane Doe',
      image: '/images/avatars/avatar-2.jpg'
    },
    {
      id: 3,
      name: 'John Doe',
      image: '/images/avatars/avatar-3.jpg'
    },
    {
      id: 4,
      name: 'Jane Doe',
      image: '/images/avatars/avatar-4.jpg'
    },
    {
      id: 5,
      name: 'John Doe',
      image: '/images/avatars/avatar-5.jpg'
    },
    {
      id: 6,
      name: 'Jane Doe',
      image: '/images/avatars/avatar-6.jpg'
    },
    {
      id: 7,
      name: 'John Doe',
      image: '/images/avatars/avatar-7.jpg'
    },
    {
      id: 8,
      name: 'Jane Doe',
      image: '/images/avatars/avatar-5.jpg'
    },
    {
      id: 9,
      name: 'John Doe',
      image: '/images/avatars/avatar-4.jpg'
    },
    {
      id: 10,
      name: 'Jane Doe',
      image: '/images/avatars/avatar-3.jpg'
    },
    {
      id: 11,
      name: 'John Doe',
      image: '/images/avatars/avatar-6.jpg'
    },
    {
      id: 12,
      name: 'Jane Doe',
      image: '/images/avatars/avatar-1.jpg'
    },
    {
      id: 13,
      name: 'John Doe',
      image: '/images/avatars/avatar-7.jpg'
    },
    {
      id: 14,
      name: 'Jane Doe',
      image: '/images/avatars/avatar-2.jpg'
    },
    {
      id: 15,
      name: 'John Doe',
      image: '/images/avatars/avatar-6.jpg'
    },
    {
      id: 16,
      name: 'Jane Doe',
      image: '/images/avatars/avatar-3.jpg'
    },
    {
      id: 17,
      name: 'John Doe',
      image: '/images/avatars/avatar-4.jpg'
    },
    {
      id: 18,
      name: 'Jane Doe',
      image: '/images/avatars/avatar-1.jpg'
    }
  ];

  const t = useTranslations();

  return (
    <div className='story px-10'>
      <div className='mb-5 h3-bold'>{t('Stories')}</div>
      <Slider {...settings} className='relative'>
        <div
          className='md:!size-16 !size-12 rounded-full border-2 
        border-dashed !grid place-items-center cursor-pointer
        bg-foreground-2 border-border-1 shrink-0'
          data-uk-toggle='target: #create-story'>
          <IoCamera className='text-2xl' />
        </div>
        {storyList.map((story) => (
          <div key={story.id}>
            <Avatar src={story.image} sx={{ width: 64, height: 64 }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
