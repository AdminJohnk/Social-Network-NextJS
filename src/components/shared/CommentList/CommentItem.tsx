'use client';

import { Link } from '@/navigation';
import { Avatar } from '@mui/material';

import { ICommentPost } from '@/types';
import { getImageURL } from '@/lib/utils';
import HoverUser from '../Post/HoverUser';
import { useTranslations } from 'next-intl';

export interface ICommentItemProps {
  comment: ICommentPost;
  showMore: (show: boolean) => void;
  isMoreThan500: boolean;
  content: string;
}

export default function CommentItem({ comment, showMore, isMoreThan500, content }: ICommentItemProps) {
  const t = useTranslations();
  return (
    <div className='flex-start !items-start'>
      <HoverUser user={comment.user}>
        <Link href={`/profile/${comment.user._id}`} className='mt-1'>
          <Avatar src={getImageURL(comment.user.user_image)} sx={{ width: 30, height: 30 }} />
        </Link>
      </HoverUser>
      <div className='flex flex-col ms-3 w-4/5 bg-foreground-2 p-2 rounded-lg'>
        <div className='base-bold hover:underline'>
          <HoverUser user={comment.user}>
            <Link href={`/profile/${comment.user._id}`}>
              {comment.user.name}
            </Link>
          </HoverUser>
        </div>
        <div className='break-words w-full'><span>{content}</span>{isMoreThan500 && (<span className='cursor-pointer ml-2 font-semibold' onClick={() => showMore(true)}>{t('See More')}</span>)}</div>
      </div>
    </div>
  );
}
