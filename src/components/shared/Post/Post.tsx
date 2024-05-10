'use client';

import { Avatar } from '@mui/material';
import { Link } from '@/navigation';
import { IoIosMore } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { GoShare } from 'react-icons/go';
import { IoHeart, IoLockClosed } from 'react-icons/io5';
import { FaCommentDots, FaUserFriends } from 'react-icons/fa';
import { useFormatter, useNow, useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { MdPublic } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
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
import ImagePost from '../ImagePost';
import PostSkeleton from './PostSkeleton';
import LinkPreview from '../LinkPreview';
import ShowUsersAndGroupsToSendPost from './ShowUsersAndGroupsToSendPost';
import HoverUser from './HoverUser';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export interface IPostProps {
  post: IPost;
  feature?: IFeaturePost;
}

export default function Post({ post, feature }: IPostProps) {
  const t = useTranslations();
  const content =
    post?.type === 'Post'
      ? post?.post_attributes.content
      : post?.post_attributes.post
        ? post?.post_attributes.post.post_attributes.content
        : '';

  // const regex = /<a[^>]*>([^<]+)<\/a>/g;
  let match;
  // let url;

  // while ((match = regex.exec(content)) !== null) {
  //   url = match;
  // }

  // url = url?.[1];

  const regex = /<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
  let urls = []; // Array to store all extracted URLs

  while ((match = regex.exec(content)) !== null) {
    urls.push(match[1]); // Extract and store URL directly
  }

  const url = urls[urls.length - 1];

  // const url = content.match(/<a[^>]*>([^<]+)<\/a>/)?.[1];

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
    post?.type === 'Post'
      ? post?.post_attributes.images
      : post?.post_attributes.post
        ? post?.post_attributes.post.post_attributes.images
        : [];

  const ownerPost: IUserInfo = post?.post_attributes?.owner_post as IUserInfo;

  const isMyPost = post?.post_attributes.user._id === currentUserInfo._id;

  useEffect(() => {
    if (isMoreThan500 && !expanded) setContentTiptap(content.slice(0, 500) + '...');
    else setContentTiptap(content);
  }, [expanded, content, isMoreThan500]);

  // Modal
  const [openShare, setOpenShare] = useState(false);
  const handleOpenShare = () => setOpenShare(true);
  const handleCloseShare = () => setOpenShare(false);

  const [openSendMessage, setOpenSendMessage] = useState(false);
  const handleOpenSendMessage = () => setOpenSendMessage(true);
  const handleCloseSendMessage = () => setOpenSendMessage(false);

  return (
    <>
      {!post ? (
        <PostSkeleton />
      ) : (
        <div className='post bg-foreground-1 rounded-lg p-4'>
          <div className='flex-between'>
            <div className='flex-start'>
              <HoverUser user={post.post_attributes.user}>
                <Link href={`/profile/${post.post_attributes.user._id}`}>
                  <Avatar src={getImageURL(post.post_attributes.user.user_image)} />
                </Link>
              </HoverUser>
              <div className='flex gap-1 flex-col ms-3'>
                <HoverUser user={post.post_attributes.user}>
                  <Link href={`/profile/${post.post_attributes.user._id}`} className='base-bold'>
                    {post.post_attributes.user.name}
                  </Link>
                </HoverUser>
                <div className='flex-start gap-1 *:small-bold *:text-text-2 hover:*:underline hover:*:text-text-1'>
                  <Link href={`/posts/${post._id}`}>{handleDateTime(post.createdAt)}</Link>
                  <span>•</span>
                  {post.visibility === 'public' ? (
                    <MdPublic className='size-4' />
                  ) : post.visibility === 'friend' ? (
                    <FaUserFriends className='size-4' />
                  ) : (
                    <IoMdLock className='size-4' />
                  )}
                </div>
              </div>
            </div>
            {feature !== 'sharing' && (
              <div className='popover'>
                <div className='p-2.5 rounded-full hover:bg-hover-1 cursor-pointer'>
                  <IoIosMore className='size-6' />
                </div>
                <div
                  className='!w-fit'
                  data-uk-drop='offset:6;pos: bottom-left; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-left'>
                  <PostMoreChoose feature={feature} post={post} isMyPost={isMyPost} />
                </div>
              </div>
            )}
          </div>
          {post.type === 'Share' && post.post_attributes.content ? (
            <div className='my-4 content-share'>
              <ShowContent content={post.post_attributes.content} />
            </div>
          ) : (
            <div className='my-4' />
          )}
          <div className={cn(post.type === 'Share' && 'border border-border-1 rounded-lg')}>
            {post.type === 'Share' &&
              (content.length > 0 ? (
                <div className={cn('mt-4 flex-start', post.type === 'Share' && 'px-5')}>
                  <HoverUser user={ownerPost}>
                    <Link href={`/profile/${ownerPost._id}`}>
                      <Avatar src={getImageURL(ownerPost.user_image)} />
                    </Link>
                  </HoverUser>
                  <div className='flex flex-col ms-3'>
                    <HoverUser user={ownerPost}>
                      <Link href={`/profile/${ownerPost._id}`} className='base-bold'>
                        {ownerPost.name}
                      </Link>
                    </HoverUser>
                    <div className='flex-start gap-1 *:small-bold *:text-text-2 hover:*:underline hover:*:text-text-1'>
                      <Link href={`/posts/${post.post_attributes.post!._id}`}>
                        {handleDateTime(post.post_attributes.post!.createdAt)}
                      </Link>
                      <span>•</span>
                      {post.post_attributes.post!.visibility === 'public' ? (
                        <MdPublic className='size-4' />
                      ) : post.post_attributes.post!.visibility === 'friend' ? (
                        <FaUserFriends className='size-4' />
                      ) : (
                        <IoMdLock className='size-4' />
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className='my-4 flex gap-1 px-2'>
                  <div className='m-1'>
                    <IoLockClosed className='text-text-2 size-7' />
                  </div>
                  <div className='flex flex-col'>
                    <div className='text-text-2 h4-semibold max-md:h5-semibold'>
                      {t('This content is not currently visible')}
                    </div>
                    <div className='text-text-2'>
                      {t(
                        'This error is often caused by the owner only sharing the content with a small group'
                      )}
                      , {t('changing who can see it')}, {t('or deleting the content')}.
                    </div>
                  </div>
                </div>
              ))}
            {content.length > 0 && (
              <div className={cn('mt-4', post.type === 'Share' && 'px-5')}>
                <ShowContent content={contentTiptap} />
                {isMoreThan500 && (
                  <div
                    className='clickMore my-3 text-text-2 cursor-pointer hover:text-text-1 duration-500'
                    onClick={() => setExpanded(!expanded)}>
                    {expanded ? t('Read less') : t('Read more')}
                  </div>
                )}
                {images.length !== 0 && <ImagePost images={images} />}
                {images.length === 0 && url && <LinkPreview url={url} />}
              </div>
            )}
          </div>
          {feature !== 'sharing' && (
            <div className={cn('flex-between mt-4', post.type === 'Share' && 'mt-4')}>
              <div className='left flex-start gap-5'>
                <div className='flex-start gap-3'>
                  <Tooltip>
                    <TooltipTrigger className='p-1 bg-foreground-2 rounded-full'>
                      <IoHeart className='size-4 text-red-600 cursor-pointer' />
                    </TooltipTrigger>
                    <TooltipContent className='font-semibold'>{t('Like')}</TooltipContent>
                  </Tooltip>
                  <span>{post.post_attributes.like_number}</span>
                </div>
                <div className='flex-start gap-3'>
                  <Tooltip>
                    <TooltipTrigger className='p-1 bg-foreground-2 rounded-full'>
                      <FaCommentDots className='size-4 cursor-pointer' />
                    </TooltipTrigger>
                    <TooltipContent className='font-semibold'>{t('Comment')}</TooltipContent>
                  </Tooltip>
                  <span>{post.post_attributes.comment_number}</span>
                </div>
              </div>
              <div className='right flex-start gap-5'>
                {content.length > 0 && (
                  <div>
                    <Tooltip>
                      <TooltipTrigger>
                        <FiSend
                          className='size-5 text-text-2 hover:text-text-1 duration-300 cursor-pointer'
                          onClick={handleOpenSendMessage}
                        />
                      </TooltipTrigger>
                      <TooltipContent className='font-semibold'>{t('Send in chat')}</TooltipContent>
                    </Tooltip>
                    <Modal open={openSendMessage} handleClose={handleCloseSendMessage}>
                      <ShowUsersAndGroupsToSendPost
                        key={post._id}
                        post_id={post.type === 'Share' ? post.post_attributes.post?._id! : post._id}
                        content={content}
                      />
                    </Modal>
                  </div>
                )}
                {post.type === 'Post' && (
                  <div>
                    <Tooltip>
                      <TooltipTrigger>
                        <GoShare
                          className='size-5 text-text-2 hover:text-text-1 duration-300 cursor-pointer'
                          onClick={handleOpenShare}
                        />
                      </TooltipTrigger>
                      <TooltipContent className='font-semibold'>{t('Share')}</TooltipContent>
                    </Tooltip>
                    <Modal open={openShare} handleClose={handleCloseShare}>
                      <CreateNewPostShare handleClose={handleCloseShare} post={post} />
                    </Modal>
                  </div>
                )}
              </div>
            </div>
          )}
          {feature !== 'sharing' && (
            <div>
              <div className='comment-list mt-7'>
                <CommentList postID={post._id} comment_number={post.post_attributes.comment_number} />
              </div>
              <div className='mt-8'>
                <InputComment postID={post._id} owner_post={post.post_attributes.user._id} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
