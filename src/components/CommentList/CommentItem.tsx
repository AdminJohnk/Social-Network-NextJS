import * as React from 'react';
import { Avatar } from '@mui/material';

export interface ICommentItemProps {}

export default function CommentItem(props: ICommentItemProps) {
  return (
    <div className='flex-start'>
      <Avatar src='/assets/images/avatars/avatar-3.jpg' className='size-6' />
      <div className='flex flex-col ms-3'>
        <span className='base-bold'>Steeve</span>
        <span>What a beautiful photo! I love it. 😍</span>
      </div>
    </div>
  );
}
