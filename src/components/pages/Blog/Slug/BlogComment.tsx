import Image from 'next/image';
import { Link } from '@/navigation';

import { IoChevronDown } from 'react-icons/io5';
import BlogInputComment from './BlogInputComment';

export interface IBlogCommentProps {}

export default function BlogComment(props: IBlogCommentProps) {
  return (
    <div className='box p-5 px-6 relative bg-foreground-1'>
      <h3 className='font-semibold text-base'>Comments</h3>

      <div className=' font-normal space-y-4 relative mt-4'>
        <div className='flex items-start gap-3 relative'>
          <Link href='/profile/friend'>
            <Image
              src='/images/avatars/avatar-3.jpg'
              alt=''
              className='w-6 h-6 mt-1 rounded-full'
              width={50}
              height={50}
            />
          </Link>
          <div className='flex-1'>
            <Link href='/profile/friend' className='font-medium inline-block'>
              Monroe Parker
            </Link>
            <p className='mt-0.5'>What a beautiful photo! I love it. 😍</p>
          </div>
        </div>
        <div className='flex items-start gap-3 relative'>
          <Link href='/profile/friend'>
            <Image
              src='/images/avatars/avatar-2.jpg'
              alt=''
              className='w-6 h-6 mt-1 rounded-full'
              width={50}
              height={50}
            />
          </Link>
          <div className='flex-1'>
            <Link href='/profile/friend' className='font-medium inline-block'>
              John Michael
            </Link>
            <p className='mt-0.5'> You captured the moment.😎 </p>
          </div>
        </div>
        <div className='flex items-start gap-3 relative'>
          <Link href='/profile/friend'>
            <Image
              src='/images/avatars/avatar-5.jpg'
              alt=''
              className='w-6 h-6 mt-1 rounded-full'
              width={50}
              height={50}
            />
          </Link>
          <div className='flex-1'>
            <Link href='/profile/friend' className='font-medium inline-block'>
              James Lewis
            </Link>
            <p className='mt-0.5'>What a beautiful photo! I love it. 😍</p>
          </div>
        </div>
        <div className='flex items-start gap-3 relative'>
          <Link href='/profile/friend'>
            <Image
              src='/images/avatars/avatar-4.jpg'
              alt=''
              className='w-6 h-6 mt-1 rounded-full'
              width={50}
              height={50}
            />
          </Link>
          <div className='flex-1'>
            <Link href='/profile/friend' className='font-medium inline-block'>
              Martin
            </Link>
            <p className='mt-0.5'> You captured the moment.😎 </p>
          </div>
        </div>
        <div>
          <button type='button' className='flex items-center gap-1.5 text-blue-500 hover:text-blue-500 my-5'>
            <IoChevronDown />
            More Comment
          </button>
        </div>
      </div>

      <BlogInputComment />
    </div>
  );
}
