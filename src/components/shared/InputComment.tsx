'use client';

import { useState } from 'react';
import { Avatar, CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';

import { Button } from '../ui/button';
import { useCurrentUserInfo } from '@/hooks/query';
import { useCommentPost } from '@/hooks/mutation';
import { getImageURL } from '@/lib/utils';
import { TypeofComment } from '@/types';
import { useCommentStore } from '@/store/comment';

export interface IInputCommentProps {
  type?: TypeofComment;
  postID: string;
  owner_post: string;
  parent?: string;
  parentUser?: string;
}

export default function InputComment({
  postID,
  owner_post,
  parent,
  parentUser,
  type = 'parent'
}: IInputCommentProps) {
  const t = useTranslations();

  const [content, setContent] = useState('');

  const { currentUserInfo } = useCurrentUserInfo();

  const { setComment } = useCommentStore();

  const { mutateCommentPost, isLoadingCommentPost } = useCommentPost();

  const isEmpty = content.trim() === '';

  const handleCommentPost = async () => {
    if (isEmpty || isLoadingCommentPost) return;

    const comment = { post: postID, owner_post, content: content, parent, parentUser, type };

    setComment(comment);
    mutateCommentPost(comment).then(() => {
      setContent('');
      setComment(undefined);
    });
  };

  return (
    <div className='flex-between'>
      <div className='flex-start w-10/12'>
        <Avatar
          src={getImageURL(currentUserInfo.user_image)}
          sx={{ width: 24, height: 24 }}
          className='me-5'
        />
        <input
          value={content}
          disabled={isLoadingCommentPost}
          className='w-full bg-transparent px-2 outline-none disabled:cursor-not-allowed'
          placeholder={t('Add Comment') + '...'}
          onChange={(e) => setContent(e.currentTarget.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter' && !isEmpty && !isLoadingCommentPost) {
              handleCommentPost();
            }
          }}
        />
      </div>
      <div className='flex-end me-2 w-2/12'>
        <Button
          variant='main'
          type='button'
          disabled={isEmpty || isLoadingCommentPost}
          onClick={handleCommentPost}
          className='rounded-2xl bg-foreground-2 px-4 py-1 text-center duration-300 hover:bg-hover-2'>
          {isLoadingCommentPost && <CircularProgress size={16} className='mr-2 !text-text-1' />}
          {t('Comment')}
        </Button>
      </div>
    </div>
  );
}
