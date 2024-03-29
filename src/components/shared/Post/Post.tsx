import { Avatar } from '@mui/material';
import Image from 'next/image';
import { Link } from '@/navigation';
import { IoIosMore } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { GoShare } from 'react-icons/go';
import { IoHeart } from 'react-icons/io5';
import { FaCommentDots } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

import CommentList from '@/components/shared/CommentList/CommentList';
import InputComment from '@/components/shared/InputComment/InputComment';
import PopoverClick from '@/components/ui/click-cards';
import PostMoreChoose from './PostMoreChoose';

export interface IPostProps { }

export default function Post(props: IPostProps) {
  const t = useTranslations();

  return (
    <div className='post bg-foreground-1 rounded-lg p-4'>
      <div className='flex-between'>
        <div className='flex-start'>
          <Avatar src='/images/avatars/avatar-3.jpg' />
          <div className='flex flex-col ms-3'>
            <span className='base-bold'>Monroe Parker</span>
            <Link
              href='/posts/657f06489c29b021b905b804'
              className='small-bold text-text-2 hover:no-underline hover:text-text-2'>
              {t('hours ago', { count: 2 })}
            </Link>
          </div>
        </div>
        <div className='popover'>
          <PopoverClick
            content={
              <div className='p-2.5 rounded-full hover:bg-hover-1 cursor-pointer'>
                <IoIosMore className='size-6' />
              </div>
            }
            hoverContent={<PostMoreChoose />}
          />
        </div>
      </div>
      <div className='mt-4'>
        <Image
          className='rounded-lg w-full h-full object-cover'
          src='/images/reels/reels-1.jpg'
          width={1500}
          height={1500}
          alt='image'
        />
      </div>
      <div className='react flex-between mt-4'>
        <div className='left flex gap-5'>
          <div className='flex gap-3'>
            <span className='p-1 bg-foreground-2 rounded-full'>
              <IoHeart className='size-4 text-red-600 cursor-pointer' />
            </span>
            <span>1.380</span>
          </div>
          <div className='flex gap-3'>
            <span className='p-1 bg-foreground-2 rounded-full'>
              <FaCommentDots className='size-4 cursor-pointer' />
            </span>
            <span>260</span>
          </div>
        </div>
        <div className='right flex-start gap-5'>
          <span>
            <FiSend className='size-5' />
          </span>
          <span>
            <GoShare className='size-5' />
          </span>
        </div>
      </div>
      <div className='comment-list mt-7'>
        <CommentList />
      </div>
      <div className='mt-8'>
        <InputComment />
      </div>
    </div>
  );
}
