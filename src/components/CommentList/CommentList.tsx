import * as React from 'react';
import CommentItem from './CommentItem';
import { IoIosArrowDown } from 'react-icons/io';

export interface ICommentListProps {}

export default function CommentList(props: ICommentListProps) {
  return (
    <div>
      <div className='*:mb-3'>
        <CommentItem />
        <CommentItem />
      </div>
      <div className='flex-start text-text-3 cursor-pointer hover:text-primary-500 duration-300'>
        <IoIosArrowDown />
        <span className='ms-3'>More Comment</span>
      </div>
    </div>
  );
}
