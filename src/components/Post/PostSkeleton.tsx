import { Skeleton, Typography, TypographyProps } from '@mui/material';
import * as React from 'react';

const variants = [
  'h1',
  'h3',
  'body1',
  'caption'
] as readonly TypographyProps['variant'][];

export interface IPostSkeletonProps {}

export default function PostSkeleton(props: IPostSkeletonProps) {
  return (
    <div className='post-skeleton bg-foreground-1 rounded-lg p-4'>
      <div className='flex-between'>
        <div className='flex-start gap-3'>
          <Skeleton
            className='bg-foreground-2'
            variant='circular'
            width={40}
            height={40}
          />
          <div className='flex flex-col'>
            <Skeleton
              className='bg-foreground-2 w-36'
              variant='text'
              sx={{ fontSize: '1.5rem' }}
            />
            <Skeleton
              className='bg-foreground-2 w-36'
              variant='text'
              sx={{ fontSize: '1rem' }}
            />
          </div>
        </div>
        <div>
          <Skeleton
            className='bg-foreground-2'
            variant='circular'
            width={25}
            height={25}
          />
        </div>
      </div>
      <Skeleton
        className='bg-foreground-2 mt-5 w-full rounded-lg'
        variant='rectangular'
        height={200}
      />
      <div className='flex-between mt-4'>
        <div className='flex-start'>
          <Skeleton
            className='bg-foreground-2 w-16 me-3'
            variant='text'
            sx={{ fontSize: '1.5rem' }}
          />{' '}
          <Skeleton
            className='bg-foreground-2 w-16'
            variant='text'
            sx={{ fontSize: '1.5rem' }}
          />
        </div>
        <div className='flex-start'>
          <Skeleton
            className='bg-foreground-2 me-3'
            variant='circular'
            width={25}
            height={25}
          />
          <Skeleton
            className='bg-foreground-2'
            variant='circular'
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
}
