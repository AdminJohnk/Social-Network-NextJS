import Divider from '@/components/shared/Divider';
import { Skeleton } from '@mui/material';

export default function TabCoverSkeleton() {
  return (
    <div className='post-skeleton rounded-xl bg-foreground-1 p-6'>
      <div className='flex-between'>
        <div className='flex-start gap-3'>
          <Skeleton className='!bg-foreground-2' variant='circular' width={60} height={60} />
          <div className='flex flex-col'>
            <Skeleton className='w-36 !bg-foreground-2' variant='text' sx={{ fontSize: '1.5rem' }} />
            <Skeleton className='w-36 !bg-foreground-2' variant='text' sx={{ fontSize: '1rem' }} />
          </div>
        </div>
      </div>
      <Divider className='my-6' />
      <div className='flex-between mt-4'>
        <Skeleton className='me-3 w-16 !bg-foreground-2' variant='text' sx={{ fontSize: '1.5rem' }} />
        <Skeleton className='w-16 !bg-foreground-2' variant='text' sx={{ fontSize: '1.5rem' }} />
        <Skeleton className='w-16 !bg-foreground-2' variant='text' sx={{ fontSize: '1.5rem' }} />
        <Skeleton className='w-16 !bg-foreground-2' variant='text' sx={{ fontSize: '1.5rem' }} />
        <Skeleton className='w-16 !bg-foreground-2' variant='text' sx={{ fontSize: '1.5rem' }} />
      </div>
    </div>
  );
}
