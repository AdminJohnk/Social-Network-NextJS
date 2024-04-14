import Divider from '@/components/shared/Divider';
import { Skeleton } from '@mui/material';

export interface ITabCoverSkeletonProps {}

export default function TabCoverSkeleton(props: ITabCoverSkeletonProps) {
  return (
    <div className='post-skeleton bg-foreground-1 rounded-xl p-6'>
      <div className='flex-between'>
        <div className='flex-start gap-3'>
          <Skeleton className='bg-foreground-2' variant='circular' width={60} height={60} />
          <div className='flex flex-col'>
            <Skeleton className='bg-foreground-2 w-36' variant='text' sx={{ fontSize: '1.5rem' }} />
            <Skeleton className='bg-foreground-2 w-36' variant='text' sx={{ fontSize: '1rem' }} />
          </div>
        </div>
      </div>
      <Divider className='my-6' />
      <div className='flex-between mt-4'>
        <Skeleton className='bg-foreground-2 w-16 me-3' variant='text' sx={{ fontSize: '1.5rem' }} />
        <Skeleton className='bg-foreground-2 w-16' variant='text' sx={{ fontSize: '1.5rem' }} />
        <Skeleton className='bg-foreground-2 w-16' variant='text' sx={{ fontSize: '1.5rem' }} />
        <Skeleton className='bg-foreground-2 w-16' variant='text' sx={{ fontSize: '1.5rem' }} />
        <Skeleton className='bg-foreground-2 w-16' variant='text' sx={{ fontSize: '1.5rem' }} />
      </div>
    </div>
  );
}
