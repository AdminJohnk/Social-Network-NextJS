'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Avatar, CircularProgress } from '@mui/material';

import { getImageURL } from '@/lib/utils';
import { useCommentStore } from '@/store/comment';
import { useCommentsData, useCurrentUserInfo } from '@/hooks/query';
import HoverUser from '../Post/HoverUser';
import { Link } from '@/navigation';
import { ICommentPost } from '@/types';

export interface ICommentListProps {
  postID: string;
  comment_number: number;
}

export default function CommentList({ postID, comment_number }: ICommentListProps) {
  const t = useTranslations();

  const { currentUserInfo } = useCurrentUserInfo();
  const { comments, isLoadingComments } = useCommentsData(postID);

  const { comment } = useCommentStore();

  const [showMore, setShowMore] = useState(false);

  const [commentToShow, setCommentToShow] = useState<string[]>([]);
  const handleShowMore = (id: string) => {
    setShowMore(!showMore);
    if (!commentToShow.includes(id)) {
      setCommentToShow([...commentToShow, id]);
    } else {
      setCommentToShow(commentToShow.filter((item) => item !== id));
    }
  };

  const showContent = (content: string, id: string) => {
    if (commentToShow.includes(id)) {
      return content;
    }
    return content.length > 500 ? content.slice(0, 500) : content;
  }

  const [commentList, setCommentList] = useState<ICommentPost[]>([]);
  const [showMoreComment, setShowMoreComment] = useState(false);

  useEffect(() => {
    if (comments) {
      setCommentList(showMoreComment ? comments : comments.slice(0, 3));
    }
  }, [comments, showMoreComment]);

  return (
    <div>
      {comment && comment.post === postID && (
        <div className='flex-start opacity-70 mb-3'>
          <Avatar src={getImageURL(currentUserInfo.user_image)} sx={{ width: 30, height: 30 }} />
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
          <div className='w-full flex-center py-10' >
            <CircularProgress size={20} className='!text-text-1' />
          </div>
        ) : (
          <>
            <div className='*:mb-3'>
              {commentList.map((comment) => {
                return (
                  <div key={comment._id} className='flex-start !items-start'>
                    <HoverUser user={comment.user}>
                      <Link href={`/profile/${comment.user._id}`} className='mt-1'>
                        <Avatar src={getImageURL(comment.user.user_image)} sx={{ width: 30, height: 30 }} />
                      </Link>
                    </HoverUser>
                    <div className='flex flex-col ms-3 w-4/5 bg-foreground-2 px-4 py-2 rounded-lg'>
                      <div className='base-bold hover:underline'>
                        <HoverUser user={comment.user}>
                          <Link href={`/profile/${comment.user._id}`}>
                            {comment.user.name}
                          </Link>
                        </HoverUser>
                      </div>
                      <div className='break-words w-full'>
                        <span>{showContent(comment.content, comment._id)}</span>
                        {comment.content.length > 500 && (
                          <span className='cursor-pointer ml-2 font-semibold' onClick={() => handleShowMore(comment._id)}>{!commentToShow.includes(comment._id) ? t('See More') : t('See Less')}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {comments.length > 3 && (
              <div className='flex-start text-text-3 cursor-pointer hover:text-primary-500 duration-300'
                onClick={() => { setShowMoreComment(!showMoreComment) }}>
                {!showMoreComment ? (
                  <>
                    <IoIosArrowDown />
                    <span className='ms-3'>{t('More Comment')}</span>
                  </>
                ) : (<>
                  <IoIosArrowUp />
                  <span className='ms-3'>{t('Less Comment')}</span>
                </>)}
              </div>
            )}
          </>
        ))}
    </div>
  );
}
