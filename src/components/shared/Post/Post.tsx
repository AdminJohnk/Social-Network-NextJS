'use client';

import { Avatar } from '@mui/material';
import Image from 'next/image';
import { Link } from '@/navigation';
import { IoIosMore } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { GoShare } from 'react-icons/go';
import { IoHeart } from 'react-icons/io5';
import { FaCommentDots } from 'react-icons/fa';
import { useFormatter, useNow, useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { isThisWeek, isThisYear, isToday } from 'date-fns';

import CommentList from '@/components/shared/CommentList';
import InputComment from '@/components/shared/InputComment';
import PostMoreChoose from './PostMoreChoose';
import { IFeaturePost, IPost, IUserInfo } from '@/types';
import { cn, getImageURL } from '@/lib/utils';
import ShowContent from '../ShowContent/ShowContent';
import CreateNewPostShare from '../CreateNewPostShare/CreateNewPostShare';
import Modal from '@/components/shared/Modal';
import { useCurrentUserInfo } from '@/hooks/query';

export interface IPostProps {
  post: IPost;
  feature?: IFeaturePost;
}

export default function Post({ post, feature }: IPostProps) {
  const t = useTranslations();
  const content =
    post.type === 'Post'
      ? post.post_attributes.content
      : post.post_attributes.post
      ? post.post_attributes.post.post_attributes.content
      : '';
  const [contentTiptap, setContentTiptap] = useState(content);
  const [expanded, setExpanded] = useState(false);

  const isMoreThan500 = content?.length > 500;

  useNow({ updateInterval: 1000 * 30 });
  const format = useFormatter();

  const { currentUserInfo } = useCurrentUserInfo();

  const handleDateTime = useCallback((date: string) => {
    const messageDate = new Date(date).getTime();

    // check if today
    if (isToday(messageDate)) {
      return format.relativeTime(new Date(date), new Date());
    }

    // check if this week
    if (isThisWeek(messageDate, { weekStartsOn: 1 })) {
      return (
        format.dateTime(new Date(date), { weekday: 'long' }) +
        ' • ' +
        format.dateTime(new Date(date), {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        })
      );
    }

    // check if this year
    if (isThisYear(messageDate)) {
      return (
        format.dateTime(new Date(date), {
          month: 'long',
          day: 'numeric'
        }) +
        ' • ' +
        format.dateTime(new Date(date), {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        })
      );
    }

    return (
      format.dateTime(new Date(date), {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) +
      ' • ' +
      format.dateTime(new Date(date), {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    );
  }, []);

  const images: string[] =
    post.type === 'Post'
      ? post.post_attributes.images
      : post.post_attributes.post
      ? post.post_attributes.post.post_attributes.images
      : [];

  const ownerPost: IUserInfo = post?.post_attributes?.owner_post as IUserInfo;

  const isMyPost = post.post_attributes.user._id === currentUserInfo._id;

  useEffect(() => {
    if (isMoreThan500 && !expanded)
      setContentTiptap(content.slice(0, 500) + '...');
    else setContentTiptap(content);
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
            <Link
              href={`/profile/${post.post_attributes.user._id}`}
              className='base-bold'
            >
              {post.post_attributes.user.name}
            </Link>
            <Link
              href={`/posts/${post._id}`}
              className='small-bold text-text-2 hover:underline hover:text-text-1'
            >
              {handleDateTime(post.createdAt)}
            </Link>
          </div>
        </div>
        {feature !== 'sharing' && (
          <div className='popover'>
            <div className='p-2.5 rounded-full hover:bg-hover-1 cursor-pointer'>
              <IoIosMore className='size-6' />
            </div>
            <div
              className='!w-fit'
              data-uk-drop='offset:6;pos: bottom-left; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-left'
            >
              <PostMoreChoose
                feature={feature}
                post={post}
                isMyPost={isMyPost}
              />
            </div>
          </div>
        )}
      </div>
      {post.type === 'Share' && (
        <div className='my-4 content-share'>
          <ShowContent content={post?.post_attributes?.content_share} />
        </div>
      )}
      <div
        className={cn(
          post.type === 'Share' && 'border border-border-1 rounded-lg'
        )}
      >
        {post.type === 'Share' &&
          (content.length > 0 ? (
            <div
            className={cn('mt-4 flex-start', post.type === 'Share' && 'px-5')}
          >
              <Link href={`/profile/${ownerPost._id}`}>
                <Avatar src={getImageURL(ownerPost.user_image)} />
              </Link>
              <div className='flex flex-col ms-3'>
                <Link href={`/profile/${ownerPost._id}`} className='base-bold'>
                  {ownerPost.name}
                </Link>
                <Link
                  href={`/posts/${post.post_attributes.post!._id}`}
                  className='small-bold text-text-2 hover:underline hover:text-text-1'
              >
                  {handleDateTime(post.post_attributes.post!.createdAt)}
                </Link>
              </div>
            </div>
          ) : (
            <div className='my-4 flex-center'>
              <div className='text-text-2 h3-semibold'>{t('This post is no longer available')}</div>
            </div>
          ))}
        {content.length > 0 && (
          <div className={cn('mt-4', post.type === 'Share' && 'px-5')}>
            <ShowContent content={contentTiptap} />
            {isMoreThan500 && (
              <div
                className='clickMore my-3 text-text-2 cursor-pointer hover:text-text-1 duration-500'
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? t('Read less') : t('Read more')}
              </div>
            )}
            {images.length !== 0 && (
              <div className='flex flex-wrap mb-5'>
              {images.map((image, index) => (
                <div key={index} className='mt-4'>
                    <Image
                      className='rounded-lg w-full h-full object-cover'
                      src={getImageURL(image)}
                      width={1500}
                      height={1500}
                      alt='image'
                    />
                </div>
              ))}
              </div>
            )}
          </div>
        )}
      </div>
      {feature !== 'sharing' && (
        <div
          className={cn(
            'react flex-between mt-4',
            post.type === 'Share' && 'mt-4'
          )}
        >
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
            {post.type === 'Post' && (
              <span>
                <GoShare
                  className='size-5 text-text-2 hover:text-text-1 duration-300 cursor-pointer'
                  onClick={handleOpen}
                />
                <Modal
                  componentModal={
                    <CreateNewPostShare handleClose={handleClose} post={post} />
                  }
                  open={open}
                  handleClose={handleClose}
                  children={<></>}
                />
              </span>
            )}
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
