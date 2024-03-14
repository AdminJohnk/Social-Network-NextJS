import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface IComSuggestionListProps {}

export default function ComSuggestionList(props: IComSuggestionListProps) {
  return (
    <div>
      <div
        className='grid md:grid-cols-3 grid-cols-2 gap-2.5'
        data-uk-scrollspy='target: > div; cls: uk-animation-scale-up; delay: 20 ;repeat: true'>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-4.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-4.jpg'
              alt=''
              className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
            />
            <Link href='/community'>
              <h4 className='card-title'> Delicious Foods </h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href='/community'>
                  <span> 218 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-3.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-3.jpg'
              alt=''
              className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
            />
            <Link href='/community'>
              <h4 className='card-title'> Abstract minimal </h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href='/community'>
                  <span> 218 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-2.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-2.jpg'
              alt=''
              className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
            />
            <Link href='/community'>
              <h4 className='card-title'> Delicious Foods </h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href='/community'>
                  <span> 164 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-3.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-3.jpg'
              alt=''
              className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
            />
            <Link href='/community'>
              <h4 className='card-title'> Abstract minimal </h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href='/community'>
                  <span> 164 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-4.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-4.jpg'
              alt=''
              className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
            />
            <Link href='/community'>
              <h4 className='card-title'> Delicious Foods </h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href='/community'>
                  <span> 325 Members</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-5.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-5.jpg'
              alt=''
              className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
            />
            <Link href='/community'>
              <h4 className='card-title'> Property Rent </h4>
            </Link>

            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href='/community'>
                  <span> 158 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-2.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-2.jpg'
              alt=''
              className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
            />
            <Link href='/community'>
              <h4 className='card-title'> Delicious Foods </h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href='/community'>
                  <span> 164 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-4.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-4.jpg'
              alt=''
              className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
            />
            <Link href='/community'>
              <h4 className='card-title'> Delicious Foods </h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href='/community'>
                  <span> 218 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-3.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Image
              width={500}
              height={500}
              src='/images/avatars/avatar-3.jpg'
              alt=''
              className='w-10 rounded-full mb-2 shadow md:-mt-11 -mt-7 relative border-2 border-white'
            />
            <Link href='/community'>
              <h4 className='card-title'> Abstract minimal </h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href='/community'>
                  <span> 218 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center my-6'>
        <button
          type='button'
          className='bg-foreground-1 hover:bg-hover-1 duration-300 py-2 px-5 rounded-full shadow-md font-semibold text-sm'>
          Load more...
        </button>
      </div>
    </div>
  );
}
