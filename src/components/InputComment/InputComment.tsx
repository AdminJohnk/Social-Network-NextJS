import { Avatar, Input } from '@mui/material';
import * as React from 'react';

export interface IInputCommentProps {}

export default function InputComment(props: IInputCommentProps) {
  return (
    <div className='flex-between'>
      <div className='flex-start w-10/12'>
        <Avatar src='/images/avatars/avatar-3.jpg' className='size-6 me-5' />
        <input className='bg-transparent w-[85%] px-2 outline-none' placeholder='Add Comment...' />
      </div>
      <span className='me-2 px-4 py-1 bg-hover-1 hover:bg-hover-2 duration-300 rounded-2xl w-2/12 text-center'>
        Reply
      </span>
    </div>
  );
}
