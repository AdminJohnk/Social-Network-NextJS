import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface IComSuggestionListProps {}

export default function ComSuggestionList(props: IComSuggestionListProps) {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2.5'>
      <div className='card'>
        <Link href='/community/123'>
          <div className='card-media h-24'>
            <Image
              width={500}
              height={500}
              src='/images/group/group-cover-4.jpg'
              alt=''
            />
            <div className='card-overlay'></div>
          </div>
        </Link>
        <div className='card-body relative z-10'>
          <Image
            width={500}
            height={500}
            src='/images/avatars/avatar-4.jpg'
            alt=''
            className='w-10 rounded-full mb-2 shadow -mt-8 relative border-border-1'
          />
          <Link href='/community/123'>
            <h4 className='card-title'> Delicious Foods </h4>
          </Link>
          <div className='card-list-info font-normal mt-1'>
            <Link href='#'> Travel </Link>
            <div className='md:block hidden'>·</div>
            <div> 232k members </div>
          </div>
          <div className='flex gap-2'>
            <button
              type='button'
              className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'
            >
              Join
            </button>
            <Link
              href='/community-manager'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'
            >
              View
            </Link>
          </div>
        </div>
      </div>
      <div className='card'>
        <Link href='/community/123'>
          <div className='card-media h-24'>
            <Image
              width={500}
              height={500}
              src='/images/group/group-cover-3.jpg'
              alt=''
            />
            <div className='card-overlay'></div>
          </div>
        </Link>
        <div className='card-body relative z-10'>
          <Image
            width={500}
            height={500}
            src='/images/avatars/avatar-3.jpg'
            alt=''
            className='w-10 rounded-full mb-2 shadow -mt-8 relative border-border-1'
          />
          <Link href='/community/123'>
            <h4 className='card-title'> Abstract minimal </h4>
          </Link>
          <div className='card-list-info font-normal mt-1'>
            <Link href='#'> Technology </Link>
            <div className='md:block hidden'>·</div>
            <div> 328k members </div>
          </div>
          <div className='flex gap-2'>
            <button
              type='button'
              className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'
            >
              Join
            </button>
            <Link
              href='/community/123'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'
            >
              View
            </Link>
          </div>
        </div>
      </div>
      <div className='card'>
        <Link href='/community/123'>
          <div className='card-media h-24'>
            <Image
              width={500}
              height={500}
              src='/images/group/group-cover-2.jpg'
              alt=''
            />
            <div className='card-overlay'></div>
          </div>
        </Link>
        <div className='card-body relative z-10'>
          <Image
            width={500}
            height={500}
            src='/images/avatars/avatar-2.jpg'
            alt=''
            className='w-10 rounded-full mb-2 shadow -mt-8 relative border-border-1'
          />
          <Link href='/community/123'>
            <h4 className='card-title'> Delicious Foods </h4>
          </Link>
          <div className='card-list-info font-normal mt-1'>
            <Link href='#'> Business </Link>
            <div className='md:block hidden'>·</div>
            <div> 436k members </div>
          </div>
          <div className='flex gap-2'>
            <button
              type='button'
              className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'
            >
              Join
            </button>
            <Link
              href='/community/123'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'
            >
              View
            </Link>
          </div>
        </div>
      </div>
      <div className='card'>
        <Link href='/community/123'>
          <div className='card-media h-24'>
            <Image
              width={500}
              height={500}
              src='/images/group/group-cover-1.jpg'
              alt=''
            />
            <div className='card-overlay'></div>
          </div>
        </Link>
        <div className='card-body relative z-10'>
          <Image
            width={500}
            height={500}
            src='/images/avatars/avatar-2.jpg'
            alt=''
            className='w-10 rounded-full mb-2 shadow -mt-8 relative border-border-1'
          />
          <Link href='/community/123'>
            <h4 className='card-title'> Graphic Design </h4>
          </Link>
          <div className='card-list-info font-normal mt-1'>
            <Link href='#'> Design </Link>
            <div className='md:block hidden'>·</div>
            <div> 420k members </div>
          </div>
          <div className='flex gap-2'>
            <button
              type='button'
              className='button bg-blue-1 hover:bg-blue-2 text-white duration-300 flex-1'
            >
              Join
            </button>
            <Link
              href='/community/123'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 !w-auto'
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
