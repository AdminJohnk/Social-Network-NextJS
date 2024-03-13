import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface IComMineListProps {}

export default function ComMineList(props: IComMineListProps) {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2.5'>
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
        <div className='card-body'>
          <Link href='/community/123'>
            <h4 className='card-title'> Delicious Foods </h4>
          </Link>
          <div className='card-list-info font-normal mt-1'>
            <Link href='#'> Health </Link>
            <div className='md:block hidden'>·</div>
            <div>42k members </div>
          </div>
          <div className='flex gap-2'>
            <button
              type='button'
              className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'
            >
              Join
            </button>
            <button
              type='button'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 flex-1'
            >
              Edit
            </button>
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
        <div className='card-body'>
          <Link href='/community/123'>
            <h4 className='card-title'> Graphic Design </h4>
          </Link>
          <div className='card-list-info font-normal mt-1'>
            <Link href='#'> Health </Link>
            <div className='md:block hidden'>·</div>
            <div>42k members </div>
          </div>
          <div className='flex gap-2'>
            <button
              type='button'
              className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'
            >
              Join
            </button>
            <button
              type='button'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 flex-1'
            >
              Edit
            </button>
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
        <div className='card-body'>
          <Link href='/community/123'>
            <h4 className='card-title'> Abstract minimal </h4>
          </Link>
          <div className='card-list-info font-normal mt-1'>
            <Link href='#'> Delicious Foods </Link>
            <div className='md:block hidden'>·</div>
            <div>232k members </div>
          </div>
          <div className='flex gap-2'>
            <button
              type='button'
              className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'
            >
              Join
            </button>
            <button
              type='button'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 flex-1'
            >
              Edit
            </button>
          </div>
        </div>
      </div>
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
        <div className='card-body'>
          <Link href='/community/123'>
            <h4 className='card-title'> Delicious Foods </h4>
          </Link>
          <div className='card-list-info font-normal mt-1'>
            <Link href='#'> Travel </Link>
            <div className='md:block hidden'>·</div>
            <div>620k members </div>
          </div>
          <div className='flex gap-2'>
            <button
              type='button'
              className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white flex-1'
            >
              Join
            </button>
            <button
              type='button'
              className='button bg-foreground-2 hover:bg-hover-2 duration-300 flex-1'
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
