/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import * as React from 'react';
import { IoAddCircle, IoChevronBack, IoChevronForward } from 'react-icons/io5';

export interface ISliderPostProps {}

export default function SliderPost(props: ISliderPostProps) {
  return (
    <div className='mt-8'>
      {/* <!-- post heading --> */}
      <div className='flex items-center justify-between py-3'>
        <h1 className='text-xl font-bold text-black dark:text-white'>Highths</h1>

        <button type='button' className='lg:hidden'>
          <svg
            id='icon__outline'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'></path>
          </svg>
        </button>
      </div>

      <div className='relative mt-5' tabIndex={-1} data-uk-slider='autoplay: true;finite: true'>
        <div className='overflow-hidden uk-slider-container py-10'>
          <ul
            className='-ml-2 uk-slider-items w-[calc(100%+0.875rem)]'
            data-uk-scrollspy='target: > li; cls: uk-animation-slide-right-small; delay: 50'
            data-uk-lightbox=''>
            <li
              className='lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 max-lg:hidden'
              data-uk-scrollspy-class='uk-animation-fade'>
              <div className='flex flex-col items-center justify-center rounded-lg h-64 border-2 border-dashed border-teal-600'>
                <IoAddCircle className='text-4xl text-teal-900' />
                <div className='mt-1 font-semibold'>Add New</div>
              </div>
            </li>
            <li className='lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5'>
              <Link href='images/avatars/avatar-lg-1.jpg' data-caption='Caption'>
                <div className=' lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100'>
                  <div className='w-full lg:h-64 aspect-[2.5/4] relative'>
                    <img
                      src='images/avatars/avatar-lg-1.jpg'
                      className='rounded-lg w-full h-full object-cover inset-0'
                      alt=''
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className='lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5'>
              <Link href='images/avatars/avatar-lg-2.jpg' data-caption='Caption'>
                <div className=' lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100'>
                  <div className='w-full lg:h-64 aspect-[2.5/4] relative'>
                    <img
                      src='images/avatars/avatar-lg-2.jpg'
                      className='rounded-lg w-full h-full object-cover inset-0'
                      alt=''
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className='lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5'>
              <Link href='images/avatars/avatar-lg-3.jpg' data-caption='Caption'>
                <div className=' lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100'>
                  <div className='w-full lg:h-64 aspect-[2.5/4] relative'>
                    <img
                      src='images/avatars/avatar-lg-3.jpg'
                      className='rounded-lg w-full h-full object-cover inset-0'
                      alt=''
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className='lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5'>
              <Link href='images/avatars/avatar-lg-4.jpg' data-caption='Caption'>
                <div className=' lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100'>
                  <div className='w-full lg:h-64 aspect-[2.5/4] relative'>
                    <img
                      src='images/avatars/avatar-lg-4.jpg'
                      className='rounded-lg w-full h-full object-cover inset-0'
                      alt=''
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className='lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5'>
              <Link href='images/avatars/avatar-lg-5.jpg' data-caption='Caption'>
                <div className=' lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100'>
                  <div className='w-full lg:h-64 aspect-[2.5/4] relative'>
                    <img
                      src='images/avatars/avatar-lg-5.jpg'
                      className='rounded-lg w-full h-full object-cover inset-0'
                      alt=''
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className='lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5'>
              <div className='w-full lg:h-64 aspect-[2.5/4] bg-slate-200/60 rounded-lg animate-pulse'></div>
            </li>
          </ul>
        </div>

        <button
          type='button'
          className='absolute -translate-y-1/2 bg-hover-1 rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center shadow  dark:bg-dark3'
          data-uk-slider-item='previous'>
          {' '}
          <IoChevronBack className='text-2xl' />{' '}
        </button>
        <button
          type='button'
          className='absolute -right-4 -translate-y-1/2 bg-hover-1 rounded-full top-1/2 grid w-9 h-9 place-items-center shadow  dark:bg-dark3'
          data-uk-slider-item='next'>
          {' '}
          <IoChevronForward className='text-2xl' />{' '}
        </button>
      </div>
    </div>
  );
}
