import Image from 'next/image';
import { Link } from '@/navigation';
import * as React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

export interface IComYouManageProps {}

export default function ComYouManage(props: IComYouManageProps) {
  return (
    <div className='box p-5'>
      <div className='flex items-baseline justify-between'>
        <h3 className='font-bold text-base'> Groups You Manage </h3>
        <Link href='#' className='text-sm text-blue-500'>
          See all
        </Link>
      </div>
      <div className='relative mt-2' data-uk-slider>
        <div className='overflow-hidden uk-slider-container'>
          <ul
            className='-ml-2 uk-slider-items w-[calc(100%+0.5rem)] pt-3 text-center'
            data-uk-scrollspy='target: > li; cls: uk-animation-scale-up; delay: 20 ;repeat: true'>
            <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
              <Link href='/community'>
                <div className='relative'>
                  <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                    <Image width={500} height={500} src='/images/group/group-1.jpg' alt='' />
                    <div className='card-overly'></div>
                  </div>
                  <h4 className='card-title text-sm pt-2 line-clamp-1'>Graphic Design</h4>
                  <div className='bg-blue-600 rounded-full w-3 h-3 ring-4 ring-white absolute top-0 right-0 -m-1 z-[2]'></div>
                </div>
              </Link>
            </li>
            <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
              <Link href='/community'>
                <div className='relative'>
                  <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                    <Image width={500} height={500} src='/images/group/group-2.jpg' alt='' />
                    <div className='card-overly'></div>
                  </div>
                  <h4 className='card-title text-sm pt-2 line-clamp-1'>Delicious Foods</h4>
                  <div className='bg-blue-600 rounded-full w-3 h-3 ring-4 ring-white absolute top-0 right-0 -m-1 z-[2]'></div>
                </div>
              </Link>
            </li>
            <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
              <Link href='/community'>
                <div className='relative'>
                  <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                    <Image width={500} height={500} src='/images/group/group-3.jpg' alt='' />
                    <div className='card-overly'></div>
                  </div>
                  <h4 className='card-title text-sm pt-2 line-clamp-1'>Abstract minimal</h4>
                  <div className='bg-blue-600 rounded-full w-3 h-3 ring-4 ring-white absolute top-0 right-0 -m-1 z-[2]'></div>
                </div>
              </Link>
            </li>
            <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
              <Link href='/community'>
                <div className='relative'>
                  <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                    <Image width={500} height={500} src='/images/group/group-4.jpg' alt='' />
                    <div className='card-overly'></div>
                  </div>
                  <h4 className='card-title text-sm pt-2 line-clamp-1'>Delicious Foods</h4>
                </div>
              </Link>
            </li>
            <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
              <Link href='/community'>
                <div className='relative'>
                  <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                    <Image width={500} height={500} src='/images/group/group-5.jpg' alt='' />
                    <div className='card-overly'></div>
                  </div>
                  <h4 className='card-title text-sm pt-2 line-clamp-1'>Property Rent</h4>
                </div>
              </Link>
            </li>
            <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
              <Link href='/community'>
                <div className='relative'>
                  <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                    <Image width={500} height={500} src='/images/group/group-3.jpg' alt='' />
                    <div className='card-overly'></div>
                  </div>
                  <h4 className='card-title text-sm pt-2 line-clamp-1'>Abstract minimal</h4>
                  <div className='bg-blue-600 rounded-full w-3 h-3 ring-4 ring-white absolute top-0 right-0 -m-1 z-[2]'></div>
                </div>
              </Link>
            </li>
            <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
              <Link href='/community'>
                <div className='relative'>
                  <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                    <Image width={500} height={500} src='/images/group/group-1.jpg' alt='' />
                    <div className='card-overly'></div>
                  </div>
                  <h4 className='card-title text-sm pt-2 line-clamp-1'>Graphic Design</h4>
                </div>
              </Link>
            </li>
            <li className='md:w-[14.28%] w-32 pr-3 pt-3'>
              <Link href='/community'>
                <div className='relative'>
                  <div className='card-media md:aspect-[2/1.8] max-lg:h-28 rounded-lg'>
                    <Image width={500} height={500} src='/images/group/group-1.jpg' alt='' />
                    <div className='card-overly'></div>
                  </div>
                  <h4 className='card-title text-sm pt-2 line-clamp-1'>Graphic Design</h4>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <Link className='nav-prev !top-12' href='#' data-uk-slider-item='previous'>
          <IoChevronBack />
        </Link>
        <Link className='nav-next !top-12' href='#' data-uk-slider-item='next'>
          <IoChevronForward />
        </Link>
      </div>
    </div>
  );
}
