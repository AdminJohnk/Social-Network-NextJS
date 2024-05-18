'use client';

import { cn } from '@/lib/utils';
import { FaPencilAlt } from 'react-icons/fa';

export interface IEditButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function EditButton({ className, ...props }: IEditButtonProps) {
  return (
    <span
      {...props}
      className={
        (cn('cursor-pointer bg-foreground-1 rounded-full drop-shadow-xl'),
        className)
      }
    >
      <div className='p-3 bg-2 rounded-full'>
        <FaPencilAlt className='size-5 text-text-1' />
      </div>
    </span>
  );
}
