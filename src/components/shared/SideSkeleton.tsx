import { Skeleton } from '@mui/material';

export default function SideSkeleton() {
  return (
    <div className='side-skeleton rounded-lg bg-foreground-1 p-4'>
      <div className='flex-between'>
        <div className='flex-start'>
          <Skeleton className='w-56 !bg-foreground-2' variant='text' sx={{ fontSize: '1.8rem' }} />
        </div>
        <div>
          <Skeleton className='!bg-foreground-2' variant='circular' width={25} height={25} />
        </div>
      </div>

      <div className='mt-4 flex flex-col gap-2'>
        <Skeleton
          className='w-full max-w-96 rounded-lg !bg-foreground-2'
          variant='text'
          sx={{ fontSize: '2.5rem' }}
        />
        <Skeleton
          className='w-full max-w-96 rounded-lg !bg-foreground-2'
          variant='text'
          sx={{ fontSize: '2.5rem' }}
        />
        <Skeleton
          className='w-full max-w-96 rounded-lg !bg-foreground-2'
          variant='text'
          sx={{ fontSize: '2.5rem' }}
        />
        <Skeleton
          className='w-full max-w-96 rounded-lg !bg-foreground-2'
          variant='text'
          sx={{ fontSize: '2.5rem' }}
        />
        <Skeleton
          className='w-full max-w-96 rounded-lg !bg-foreground-2'
          variant='text'
          sx={{ fontSize: '2.5rem' }}
        />
      </div>
    </div>
  );
}
