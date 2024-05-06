'use client';

import { cn } from '@/lib/utils';
import { FaPen, FaPencilAlt } from 'react-icons/fa';
import { IoArrowUpCircleOutline } from 'react-icons/io5';

export interface IEditButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function EditButton(props: IEditButtonProps) {
  return (
    <span
      {...props}
      className={cn(
        'fixed top-1/2 right-4 z-50 cursor-pointer bg-foreground-1 rounded-full drop-shadow-xl'
      )}
    >
      <div className='p-3 bg-2 rounded-full'>
        <FaPencilAlt className='size-6 text-text-1' />
      </div>
    </span>
  );
}
