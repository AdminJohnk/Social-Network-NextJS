import { Skeleton } from '@mui/material';
import * as React from 'react';

export interface ITabContentSkeletonProps {}

export default function TabContentSkeleton(props: ITabContentSkeletonProps) {
  return (
    <div className='post-skeleton bg-foreground-1 rounded-lg p-4'>
      <div className='flex-between'>
        <div className='flex-start gap-3'>
          <div className='flex flex-col'>
            <Skeleton className='bg-foreground-2 w-36' variant='text' sx={{ fontSize: '5rem' }} />
            <Skeleton className='bg-foreground-2 w-36' variant='text' sx={{ fontSize: '5rem' }} />
          </div>
        </div>
      </div>
      <Skeleton className='bg-foreground-2 mt-5 w-full rounded-lg' variant='rectangular' height={200} />
      <div className='flex-between mt-4'>
        <div className='flex-start'>
          <Skeleton className='bg-foreground-2 w-16 me-3' variant='text' sx={{ fontSize: '1.5rem' }} />
          <Skeleton className='bg-foreground-2 w-16' variant='text' sx={{ fontSize: '1.5rem' }} />
        </div>
        <div className='flex-start'>
          <Skeleton className='bg-foreground-2 me-3' variant='circular' width={25} height={25} />
          <Skeleton className='bg-foreground-2' variant='circular' width={25} height={25} />
        </div>
      </div>
    </div>
  );
}
