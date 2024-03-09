'use client';

import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar } from '@mui/material';
import { cn } from '@/lib/utils';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <span
      className={cn('text-text-1 text-xl absolute -right-5 top-5 rounded-full bg-hover-1 cursor-pointer p-1')}
      onClick={onClick}>
      <IoIosArrowForward />
    </span>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <span
      className={cn('text-text-1 text-xl absolute -left-10 top-5 rounded-full bg-hover-1 cursor-pointer p-1')}
      onClick={onClick}>
      <IoIosArrowBack />
    </span>
  );
}

export interface IStoryProps {}

export default function Story(props: IStoryProps) {
  // var settings: Settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 10,
  //   slidesToScroll: 10,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

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
          slidesToShow: 8,
          slidesToScroll: 8
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
      image: 'images/avatars/avatar-1.jpg'
    },
    {
      id: 2,
      name: 'Jane Doe',
      image: 'images/avatars/avatar-2.jpg'
    },
    {
      id: 3,
      name: 'John Doe',
      image: 'images/avatars/avatar-3.jpg'
    },
    {
      id: 4,
      name: 'Jane Doe',
      image: 'images/avatars/avatar-4.jpg'
    },
    {
      id: 5,
      name: 'John Doe',
      image: 'images/avatars/avatar-5.jpg'
    },
    {
      id: 6,
      name: 'Jane Doe',
      image: 'images/avatars/avatar-6.jpg'
    },
    {
      id: 7,
      name: 'John Doe',
      image: 'images/avatars/avatar-7.jpg'
    },
    {
      id: 8,
      name: 'Jane Doe',
      image: 'images/avatars/avatar-5.jpg'
    },
    {
      id: 9,
      name: 'John Doe',
      image: 'images/avatars/avatar-4.jpg'
    },
    {
      id: 10,
      name: 'Jane Doe',
      image: 'images/avatars/avatar-3.jpg'
    },
    {
      id: 11,
      name: 'John Doe',
      image: 'images/avatars/avatar-6.jpg'
    },
    {
      id: 12,
      name: 'Jane Doe',
      image: 'images/avatars/avatar-1.jpg'
    },
    {
      id: 13,
      name: 'John Doe',
      image: 'images/avatars/avatar-7.jpg'
    },
    {
      id: 14,
      name: 'Jane Doe',
      image: 'images/avatars/avatar-2.jpg'
    },
    {
      id: 15,
      name: 'John Doe',
      image: 'images/avatars/avatar-6.jpg'
    },
    {
      id: 16,
      name: 'Jane Doe',
      image: 'images/avatars/avatar-3.jpg'
    },
    {
      id: 17,
      name: 'John Doe',
      image: 'images/avatars/avatar-4.jpg'
    },
    {
      id: 18,
      name: 'Jane Doe',
      image: 'images/avatars/avatar-1.jpg'
    }
  ];

  return (
    <div className='story'>
      <div className='mb-5 h3-bold'>Stories</div>
      <Slider {...settings} className='relative'>
        {storyList.map((story) => (
          <div key={story.id}>
            <Avatar src={story.image} className='size-16' />
          </div>
        ))}
      </Slider>
    </div>
  );
}
