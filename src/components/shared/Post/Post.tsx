import { Avatar } from '@mui/material';
import Image from 'next/image';
import { Link } from '@/navigation';
import { IoIosMore } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { GoShare } from 'react-icons/go';
import { IoHeart } from 'react-icons/io5';
import { FaCommentDots } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

import CommentList from '@/components/shared/CommentList';
import InputComment from '@/components/shared/InputComment';
import PopoverClick from '@/components/ui/click-cards';
import PostMoreChoose from './PostMoreChoose';
import { IFeaturePost, IPost } from '@/types';
import { getImageURL } from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';

export interface IPostProps {
  post: IPost;
  feature?: IFeaturePost;
}

export default function Post({ post, feature }: IPostProps) {
  const t = useTranslations();
  const content = post.post_attributes.content;
  const [contentQuill, setContent] = useState(content);
  const isMoreThan500 = content.length > 500;
  const [expanded, setExpanded] = useState(false);

  const { data: session } = useSession();

  const isMyPost = post.post_attributes.user._id === session?.id;

  useEffect(() => {
    if (isMoreThan500 && !expanded) setContent(content.slice(0, 500) + '...');
    else setContent(content);
  }, [expanded, content, isMoreThan500]);

  return (
    <div className='post bg-foreground-1 rounded-lg p-4'>
      <div className='flex-between'>
        <div className='flex-start'>
          <Link href={`/profile/${post.post_attributes.user._id}`}>
            <Avatar src={getImageURL(post.post_attributes.user.user_image)} />
          </Link>
          <div className='flex flex-col ms-3'>
            <Link
              href={`/profile/${post.post_attributes.user._id}`}
              className='base-bold'
            >
              {post.post_attributes.user.name}
            </Link>
            <Link
              href={`/posts/${post._id}`}
              className='small-bold text-text-2 hover:no-underline hover:text-text-2'
            >
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
            hoverContent={
              <PostMoreChoose
                feature={feature}
                post={post}
                isMyPost={isMyPost}
              />
            }
          />
        </div>
      </div>
      <div className='mt-4'>
        <div dangerouslySetInnerHTML={{ __html: contentQuill }} />
        {isMoreThan500 && (
          <div
            className='clickMore my-3 cursor-pointer hover:text-text-2 duration-500'
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Read less' : 'Read more'}
          </div>
        )}
        {post.post_attributes.images.length !== 0 && (
          <Image
            className='rounded-lg w-full h-full object-cover'
            src={getImageURL(post.post_attributes.images[0])}
            width={1500}
            height={1500}
            alt='image'
          />
        )}
      </div>
      <div className='react flex-between mt-4'>
        <div className='left flex gap-5'>
          <div className='flex gap-3'>
            <span className='p-1 bg-foreground-2 rounded-full'>
              <IoHeart className='size-4 text-red-600 cursor-pointer' />
            </span>
            <span>{post.post_attributes.like_number}</span>
          </div>
          <div className='flex gap-3'>
            <span className='p-1 bg-foreground-2 rounded-full'>
              <FaCommentDots className='size-4 cursor-pointer' />
            </span>
            <span>{post.post_attributes.comment_number}</span>
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
        <CommentList postID={post._id} />
      </div>
      <div className='mt-8'>
        <InputComment postID={post._id} />
      </div>
    </div>
  );
}
