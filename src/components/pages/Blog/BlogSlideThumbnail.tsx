import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

export interface IBlogSlideThumbnailProps {}

export default function BlogSlideThumbnail(props: IBlogSlideThumbnailProps) {
  return (
    <div
      className='relative uk-visible-toggle'
      tabIndex={-1}
      data-uk-slideshow='finite: true ; min-height: 300; max-height: 500'>
      <ul className='uk-slideshow-items'>
        <li className='w-full overflow-hidden rounded-xl'>
          <Image
            src='/images/blog/img-3.jpg'
            alt=''
            className='w-full h-full object-cover'
            width={1000}
            height={1000}
          />
          <div className='absolute bottom-0 w-full uk-transition-slide-bottom-small'>
            <div className='bg-black/10 p-4 m-2 rounded-md backdrop-blur-lg mb-8'>
              <Link href='/profile/friend'>
                <h4 className='text-sm font-medium'>
                  Interesting JavaScript and CSS libraries should Know About
                </h4>
              </Link>
              <div className='text-xs mt-2 flex items-center gap-2'>
                <div> 10 Jun 2022 </div>
                <div className='md:block hidden'>·</div>
                <div> 156.9K views</div>
              </div>
            </div>
          </div>
        </li>
        <li className='w-full overflow-hidden rounded-md'>
          <Image
            src='/images/blog/img-2.jpg'
            alt=''
            className='w-full h-full object-cover'
            width={1000}
            height={1000}
          />
          <div className='absolute bottom-0 w-full uk-transition-slide-bottom-small'>
            <div className='bg-black/10 p-4 m-2 rounded-md backdrop-blur-lg mb-8'>
              <Link href='/profile/friend'>
                <h4 className='text-sm font-medium'>
                  Awesome web dev tools and resources for 2024 in 30 minutes
                </h4>
              </Link>
              <div className='text-xs mt-2 flex items-center gap-2'>
                <div> 10 Jun 2022 </div>
                <div className='md:block hidden'>·</div>
                <div> 156.9K views</div>
              </div>
            </div>
          </div>
        </li>
        <li className='w-full overflow-hidden rounded-md'>
          <Image
            src='/images/blog/img-4.jpg'
            alt=''
            className='w-full h-full object-cover'
            width={1000}
            height={1000}
          />
          <div className='absolute bottom-0 w-full uk-transition-slide-bottom-small'>
            <div className='bg-black/10 p-4 m-2 rounded-md backdrop-blur-lg mb-8'>
              <Link href='/profile/friend'>
                <h4 className='text-sm font-medium'>
                  Interesting javaScript and CSS libraries you should be learn
                </h4>
              </Link>
              <div className='text-xs mt-2 flex items-center gap-2'>
                <div> 10 Jun 2022 </div>
                <div className='md:block hidden'>·</div>
                <div> 156.9K views</div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className='flex justify-center'>
        <ul className='inline-flex flex-wrap justify-center  absolute bottom-3 gap-1.5 uk-dotnav uk-slideshow-nav'></ul>
      </div>

      <Link className='nav-prev' href='#' data-uk-slideshow-item='previous'>
        <IoChevronBack />
      </Link>
      <Link className='nav-next' href='#' data-uk-slideshow-item='next'>
        <IoChevronForward />
      </Link>
    </div>
  );
}
