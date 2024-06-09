import { Skeleton } from '@mui/material';

export default function PostSkeleton() {
  return (
    <div className='post-skeleton rounded-lg bg-foreground-1 p-4'>
      <div className='flex-between'>
        <div className='flex-start gap-3'>
          <Skeleton className='!bg-foreground-2' variant='circular' width={40} height={40} />
          <div className='flex flex-col'>
            <Skeleton className='w-36 !bg-foreground-2' variant='text' sx={{ fontSize: '1.5rem' }} />
            <Skeleton className='w-36 !bg-foreground-2' variant='text' sx={{ fontSize: '1rem' }} />
          </div>
        </div>
        <div>
          <Skeleton className='!bg-foreground-2' variant='circular' width={25} height={25} />
        </div>
      </div>
      <Skeleton className='mt-5 w-full rounded-lg !bg-foreground-2' variant='rectangular' height={200} />
      <div className='flex-between mt-4'>
        <div className='flex-start'>
          <Skeleton className='me-3 w-16 !bg-foreground-2' variant='text' sx={{ fontSize: '1.5rem' }} />
          <Skeleton className='w-16 !bg-foreground-2' variant='text' sx={{ fontSize: '1.5rem' }} />
        </div>
        <div className='flex-start'>
          <Skeleton className='me-3 !bg-foreground-2' variant='circular' width={25} height={25} />
          <Skeleton className='!bg-foreground-2' variant='circular' width={25} height={25} />
        </div>
      </div>
    </div>
  );
}
