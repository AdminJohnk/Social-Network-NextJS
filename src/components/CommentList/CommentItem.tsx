import * as React from 'react';
import { Avatar } from '@mui/material';

export interface ICommentItemProps {}

export default function CommentItem(props: ICommentItemProps) {
  return (
    <div className='flex-start'>
      <Avatar src='/images/avatars/avatar-3.jpg' sx={{width: 24, height: 24}} />
      <div className='flex flex-col ms-3'>
        <span className='base-bold'>Steeve</span>
        <span>What a beautiful photo! I love it. 😍</span>
      </div>
    </div>
  );
}
