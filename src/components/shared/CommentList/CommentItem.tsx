import { Avatar } from '@mui/material';

import { ICommentPost } from '@/types';
import { getImageURL } from '@/lib/utils';

export interface ICommentItemProps {
  comment: ICommentPost;
}

export default function CommentItem({ comment }: ICommentItemProps) {
  return (
    <div className='flex-start'>
      <Avatar src={getImageURL(comment.user.user_image)} sx={{ width: 24, height: 24 }} />
      <div className='flex flex-col ms-3'>
        <span className='base-bold'>{comment.user.name}</span>
        <span>{comment.content}</span>
      </div>
    </div>
  );
}
