import { useTranslations } from 'next-intl';
import { CiBookmark, CiFlag1 } from 'react-icons/ci';
import { IoOpenOutline, IoTrashOutline } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { Link } from '@/navigation';
import { IPost } from '@/types';
import { IFeaturePost } from '@/types';
import { useSavePost } from '@/hooks/mutation';
import { useState } from 'react';

export interface IPostMoreChooseProps {
  post: IPost;
  isMyPost: boolean;
  feature?: IFeaturePost;
}

export default function PostMoreChoose({
  post,
  isMyPost,
  feature
}: IPostMoreChooseProps) {
  const t = useTranslations();
  const { mutateSavePost } = useSavePost();

  return (
    <div className='post-more-choose w-56 bg-foreground-1 border border-border-1 text-text-1 p-2'>
      {/* Open Post In New Tab */}
      <div>
        {feature === 'detail' ? (
          <></>
        ) : (
          <Link
            href={'/posts/' + post._id}
            className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg'
            target='__blank'
          >
            <span className='text-2xl'>
              <IoOpenOutline />
            </span>
            <span>{t('Open Post In New Tab')}</span>
          </Link>
        )}
        {/* Add To Favorite */}
        <div
          className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg'
          onClick={() => {
            mutateSavePost(post._id);
          }}
        >
          <span className='text-2xl'>
            <CiBookmark />
          </span>
          <span>{t('Add To Favorite')}</span>
        </div>
        {isMyPost && (
          <div className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg'>
            <span className='text-2xl'>
              <FiEdit />
            </span>
            <span>{t('Edit Post')}</span>
          </div>
        )}
        {/* Report This Post */}
        <div className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg'>
          <span className='text-2xl'>
            <CiFlag1 />
          </span>
          <span>{t('Report This Post')}</span>
        </div>
        {/* Delete Post */}
        {isMyPost && (
          <div className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg'>
            <span className='text-2xl'>
              <IoTrashOutline />
            </span>
            <span>{t('Delete Post')}</span>
          </div>
        )}
      </div>
    </div>
  );
}
