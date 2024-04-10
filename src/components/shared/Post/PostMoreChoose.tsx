import { useTranslations } from 'next-intl';
import { CiBookmark, CiFlag1 } from 'react-icons/ci';
import {
  IoOpenOutline,
  IoTrashOutline,
  IoBookmark,
  IoBookmarkOutline
} from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { Link } from '@/navigation';
import { IPost } from '@/types';
import { IFeaturePost } from '@/types';
import { useSavePost } from '@/hooks/mutation';
import { useEffect, useState } from 'react';

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
  const [is_saved, setIsSaved] = useState(post.is_saved);

  useEffect(() => {
    setIsSaved(post.is_saved);
  }, [post.is_saved]);

  return (
    <div className='post-more-choose w-56 bg-foreground-1 border border-border-1 text-text-1 p-2'>
      {/* Open Post In New Tab */}
      <div>
        {feature === 'detail' ? (
          <></>
        ) : (
          <div
            className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'
            onClick={e => {
              e.preventDefault();
              window.open('/posts/' + post._id, '_blank');
            }}
          >
            <span className='text-2xl'>
              <IoOpenOutline />
            </span>
            <span>{t('Open Post In New Tab')}</span>
          </div>
        )}
        {/* Add To Favorite */}
        <div
          className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'
          onClick={() => {
            setIsSaved(!is_saved);
            mutateSavePost(post._id);
          }}
        >
          <span className='text-2xl'>
            {is_saved ? <IoBookmark /> : <IoBookmarkOutline />}
          </span>
          <span>
            {is_saved ? t('Remove From Favorite') : t('Add To Favorite')}
          </span>
        </div>
        {isMyPost && (
          <div className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'>
            <span className='text-2xl'>
              <FiEdit />
            </span>
            <span>{t('Edit Post')}</span>
          </div>
        )}
        {/* Report This Post */}
        <div className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'>
          <span className='text-2xl'>
            <CiFlag1 />
          </span>
          <span>{t('Report This Post')}</span>
        </div>
        {/* Delete Post */}
        {isMyPost && (
          <div className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close'>
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
