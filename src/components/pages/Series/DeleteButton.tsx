'use client';

import { cn } from '@/lib/utils';
import { BiSolidTrashAlt } from 'react-icons/bi';
import {  FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

export interface IDeleteButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function DeleteButton({ className, ...props }: IDeleteButtonProps) {
  return (
    <span
      {...props}
      className={
        (cn('cursor-pointer bg-foreground-1 rounded-full drop-shadow-xl'),
        className)
      }
    >
      <div className='p-3 bg-2 rounded-full'>
        <BiSolidTrashAlt  className='size-5 text-text-1' />
      </div>
    </span>
  );
}
