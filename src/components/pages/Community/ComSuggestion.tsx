import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosAddCircle } from 'react-icons/io';

export interface IComSuggestionProps {}

export default function ComSuggestion(props: IComSuggestionProps) {
  return (
    <div>
      <div className='sm:my-6 my-3 flex items-center justify-between lg:mt-10'>
        <div>
          <h2 className='h5-semibold'>Suggestions</h2>
          <p className='base-regular text-text-2 leading-6'>
            Find a communities You Might Be Interested In.
          </p>
        </div>
        <Link href='#' className='text-blue-500 sm:block hidden text-sm'>
          See all
        </Link>
      </div>

      <div className='grid md:grid-cols-2 md:gap-2 gap-3 *:bg-foreground-1'>
        <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
          <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
            <Image
              width={500}
              height={500}
              src='/images/group/group-4.jpg'
              className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
              alt=''
            />
          </div>
          <div className='flex-1'>
            <Link
              href='/community/123'
              className='md:text-lg text-base font-semibold capitalize'
            >
              Delicious Foods
            </Link>
            <div className='flex space-x-2 items-center text-sm font-normal'>
              <div> 16K Members</div>
              <div>·</div>
              <div> 12 posts a week</div>
            </div>
            <div className='flex items-center mt-2'>
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-2.jpg'
                className='w-6 rounded-full border-border-1 mr-2'
                alt=''
              />
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-4.jpg'
                className='w-6 rounded-full border-border-1'
                alt=''
              />
              <div className='text-sm ml-2'>14 friends are members</div>
            </div>
          </div>
          <button
            type='button'
            className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 gap-1 max-md:hidden'
          >
            <IoIosAddCircle className='size-5' /> <span>Join</span>
          </button>
        </div>
        <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
          <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
            <Image
              width={500}
              height={500}
              src='/images/group/group-3.jpg'
              className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
              alt=''
            />
          </div>
          <div className='flex-1'>
            <Link
              href='/community/123'
              className='md:text-lg text-base font-semibold capitalize'
            >
              Abstract minimal
            </Link>
            <div className='flex space-x-2 items-center text-sm font-normal'>
              <div> 18K Members</div>
              <div>·</div>
              <div> 16 posts a week</div>
            </div>
            <div className='flex items-center mt-2'>
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-2.jpg'
                className='w-6 rounded-full border-border-1 -mr-2'
                alt=''
              />
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-4.jpg'
                className='w-6 rounded-full border-border-1'
                alt=''
              />
              <div className='text-sm ml-2'>24 friends are members</div>
            </div>
          </div>
          <button
            type='button'
            className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 gap-1 max-md:hidden'
          >
            <IoIosAddCircle className='size-5' /> <span>Join</span>
          </button>
        </div>
        <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
          <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
            <Image
              width={500}
              height={500}
              src='/images/group/group-2.jpg'
              className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
              alt=''
            />
          </div>
          <div className='flex-1'>
            <Link
              href='/community/123'
              className='md:text-lg text-base font-semibold capitalize'
            >
              Delicious Foods
            </Link>
            <div className='flex space-x-2 items-center text-sm font-normal'>
              <div> 19K Members</div>
              <div>·</div>
              <div> 21 posts a week</div>
            </div>
            <div className='flex items-center mt-2'>
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-2.jpg'
                className='w-6 rounded-full border-border-1 -mr-2'
                alt=''
              />
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-4.jpg'
                className='w-6 rounded-full border-border-1'
                alt=''
              />
              <div className='text-sm ml-2'>16 friends are members</div>
            </div>
          </div>
          <button
            type='button'
            className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 gap-1 max-md:hidden'
          >
            <IoIosAddCircle className='size-5' /> <span>Join</span>
          </button>
        </div>
        <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
          <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
            <Image
              width={500}
              height={500}
              src='/images/group/group-1.jpg'
              className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
              alt=''
            />
          </div>
          <div className='flex-1'>
            <Link
              href='/community/123'
              className='md:text-lg text-base font-semibold capitalize'
            >
              Graphic Design
            </Link>
            <div className='flex space-x-2 items-center text-sm font-normal'>
              <div> 24K Members</div>
              <div>·</div>
              <div> 12 posts a week</div>
            </div>
            <div className='flex items-center mt-2'>
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-2.jpg'
                className='w-6 rounded-full border-border-1 -mr-2'
                alt=''
              />
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-4.jpg'
                className='w-6 rounded-full border-border-1'
                alt=''
              />
              <div className='text-sm ml-2'>14 friends are members</div>
            </div>
          </div>
          <button
            type='button'
            className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 gap-1 max-md:hidden'
          >
            <IoIosAddCircle className='size-5' /> <span>Join</span>
          </button>
        </div>
        <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
          <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
            <Image
              width={500}
              height={500}
              src='/images/group/group-3.jpg'
              className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
              alt=''
            />
          </div>
          <div className='flex-1'>
            <Link
              href='/community/123'
              className='md:text-lg text-base font-semibold capitalize'
            >
              Abstract minimal
            </Link>
            <div className='flex space-x-2 items-center text-sm font-normal'>
              <div> 18K Members</div>
              <div>·</div>
              <div> 16 posts a week</div>
            </div>
            <div className='flex items-center mt-2'>
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-2.jpg'
                className='w-6 rounded-full border-border-1 -mr-2'
                alt=''
              />
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-4.jpg'
                className='w-6 rounded-full border-border-1'
                alt=''
              />
              <div className='text-sm ml-2'>24 friends are members</div>
            </div>
          </div>
          <button
            type='button'
            className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 gap-1 max-md:hidden'
          >
            <IoIosAddCircle className='size-5' /> <span>Join</span>
          </button>
        </div>
        <div className='flex md:items-center space-x-4 p-4 rounded-md box'>
          <div className='sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative'>
            <Image
              width={500}
              height={500}
              src='/images/group/group-4.jpg'
              className='absolute w-full h-full inset-0 rounded-md object-cover shadow-sm'
              alt=''
            />
          </div>
          <div className='flex-1'>
            <Link
              href='/community/123'
              className='md:text-lg text-base font-semibold capitalize'
            >
              Delicious Foods
            </Link>
            <div className='flex space-x-2 items-center text-sm font-normal'>
              <div> 16K Members</div>
              <div>·</div>
              <div> 12 posts a week</div>
            </div>
            <div className='flex items-center mt-2'>
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-2.jpg'
                className='w-6 rounded-full border-border-1 -mr-2'
                alt=''
              />
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-4.jpg'
                className='w-6 rounded-full border-border-1'
                alt=''
              />
              <div className='text-sm ml-2'>14 friends are members</div>
            </div>
          </div>
          <button
            type='button'
            className='button flex-start bg-foreground-2 hover:bg-hover-2 duration-300 gap-1 max-md:hidden'
          >
            <IoIosAddCircle className='size-5' /> <span>Join</span>
          </button>
        </div>
      </div>
    </div>
  );
}
