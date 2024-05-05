'use client';

import { useTranslations } from 'next-intl';
import { IoIosArrowDown } from 'react-icons/io';
import { Avatar, CircularProgress } from '@mui/material';

import CommentItem from './CommentItem';
import { useCommentsData, useCurrentUserInfo } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { useCommentStore } from '@/store/comment';

export interface ICommentListProps {
  postID: string;
  comment_number: number;
}

export default function CommentList({ postID, comment_number }: ICommentListProps) {
  const t = useTranslations();

  const { currentUserInfo } = useCurrentUserInfo();
  const { comments, isLoadingComments } = useCommentsData(postID);

  const { comment } = useCommentStore();

  return (
    <div>
      {comment && comment.post === postID && (
        <div className='flex-start opacity-70 mb-3'>
          <Avatar src={getImageURL(currentUserInfo.user_image)} sx={{ width: 24, height: 24 }} />
          <div className='flex flex-col ms-3'>
            <div className='flex-start gap-3'>
              <span className='base-bold'>{currentUserInfo.name}</span>
              <CircularProgress size={12} className='!text-text-1' />
            </div>
            <span>{comment.content}</span>
          </div>
        </div>
      )}
      {comment_number !== 0 &&
        (isLoadingComments ? (
          <div className='w-full flex-center py-10'>
            <CircularProgress size={20} className='!text-text-1' />
          </div>
        ) : (
          <>
            <div className='*:mb-3'>
              {comments.slice(0, 3).map((comment) => (
                <CommentItem key={comment._id} comment={comment} />
              ))}
            </div>
            {comments.length > 3 && (
              <div className='flex-start text-text-3 cursor-pointer hover:text-primary-500 duration-300'>
                <IoIosArrowDown />
                <span className='ms-3'>{t('More Comment')}</span>
              </div>
            )}
          </>
        ))}
    </div>
  );
}
