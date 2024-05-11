import { Avatar } from '@mui/material';
import { Link } from '@/navigation';

import HoverUser from '../Post/HoverUser';
import { ICommentPost } from '@/types';
import { getImageURL } from '@/lib/utils';

export interface ICommentItemProps {
  comment: ICommentPost;
}

export default function CommentItem({ comment }: ICommentItemProps) {
  return (
    <div className='flex-start'>
      <HoverUser user={comment.user}>
        <Link href={`/profile/${comment.user._id}`}>
          <Avatar src={getImageURL(comment.user.user_image)} sx={{ width: 30, height: 30 }} />
        </Link>
      </HoverUser>
      <div className='flex flex-col ms-3'>
        <HoverUser user={comment.user}>
          <Link href={`/profile/${comment.user._id}`}>
            <span className='base-bold hover:underline'>{comment.user.name}</span>
          </Link>
        </HoverUser>
        <span>{comment.content}</span>
      </div>
    </div>
  );
}
