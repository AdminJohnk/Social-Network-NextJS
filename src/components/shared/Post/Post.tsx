'use client';

import { Avatar, Modal } from '@mui/material';
import Image from 'next/image';
import { Link } from '@/navigation';
import { IoIosMore } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { GoShare } from 'react-icons/go';
import { IoHeart } from 'react-icons/io5';
import { FaCommentDots } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import CommentList from '@/components/shared/CommentList';
import InputComment from '@/components/shared/InputComment';
import PostMoreChoose from './PostMoreChoose';
import { IFeaturePost, IPost } from '@/types';
import { getImageURL } from '@/lib/utils';
import NewPostShare from '../NewPostShare/NewPostShare';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export interface IPostProps {
  post: IPost;
  feature?: IFeaturePost;
}

export default function Post({ post, feature }: IPostProps) {
  const t = useTranslations();
  const content =
    post.type === 'Post' ? post.post_attributes.content : post.post_attributes.post!.post_attributes.content;
  const [contentQuill, setContent] = useState(content);
  const isMoreThan500 = content.length > 500;
  const [expanded, setExpanded] = useState(false);

  const { data: session } = useSession();

  const isMyPost = post.post_attributes.user._id === session?.id;

  useEffect(() => {
    if (isMoreThan500 && !expanded) setContent(content.slice(0, 500) + '...');
    else setContent(content);
  }, [expanded, content, isMoreThan500]);

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='post bg-foreground-1 rounded-lg p-4'>
      <div className='flex-between'>
        <div className='flex-start'>
          <Link href={`/profile/${post.post_attributes.user._id}`}>
            <Avatar src={getImageURL(post.post_attributes.user.user_image)} />
          </Link>
          <div className='flex flex-col ms-3'>
            <Link href={`/profile/${post.post_attributes.user._id}`} className='base-bold'>
              {post.post_attributes.user.name}
            </Link>
            <Link
              href={`/posts/${post._id}`}
              className='small-bold text-text-2 hover:no-underline hover:text-text-2'>
              {t('hours ago', { count: 2 })}
            </Link>
          </div>
        </div>
        {feature !== 'sharing' && (
          <div className='popover'>
            <div className='p-2.5 rounded-full hover:bg-hover-1 cursor-pointer'>
              <IoIosMore className='size-6' />
            </div>
            <div data-uk-drop='offset:6;pos: bottom-left; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right'>
              <PostMoreChoose feature={feature} post={post} isMyPost={isMyPost} />
            </div>
          </div>
        )}
      </div>
      <div className='mt-4'>
        <div className='base-regular' dangerouslySetInnerHTML={{ __html: contentQuill }} />
        {isMoreThan500 && (
          <div
            className='clickMore my-3 cursor-pointer hover:text-text-2 duration-500'
            onClick={() => setExpanded(!expanded)}>
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
      {feature !== 'sharing' && (
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
              <FiSend className='size-5 text-text-2 hover:text-text-1 duration-300 cursor-pointer' />
            </span>
            <span>
              {/* <GoShare
                className='size-5 text-text-2 hover:text-text-1 duration-300 cursor-pointer'
                onClick={handleOpen}
              /> */}
              {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
              >
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground-1 shadow-lg rounded-md outline-none'>
                  <NewPostShare handleClose={handleClose} post={post} />
                </div>
              </Modal> */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger>
                  <GoShare className='size-5 text-text-2 hover:text-text-1 duration-300 cursor-pointer' />
                </DialogTrigger>
                <DialogContent className='min-w-[610px] max-h-[600px] overflow-y-scroll custom-scrollbar-fg'>
                  <NewPostShare handleClose={handleClose} post={post} />
                </DialogContent>
              </Dialog>
            </span>
          </div>
        </div>
      )}
      {feature !== 'sharing' && (
        <div>
          <div className='comment-list mt-7'>
            <CommentList postID={post._id} />
          </div>
          <div className='mt-8'>
            <InputComment postID={post._id} />
          </div>
        </div>
      )}
    </div>
  );
}
