import { Skeleton } from '@mui/material';

export default function SideSkeleton() {
  return (
    <div className='side-skeleton bg-foreground-1 rounded-lg p-4'>
      <div className='flex-between'>
        <div className='flex-start'>
          <Skeleton className='!bg-foreground-2 w-56' variant='text' sx={{ fontSize: '1.8rem' }} />
        </div>
        <div>
          <Skeleton className='!bg-foreground-2' variant='circular' width={25} height={25} />
        </div>
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <Skeleton className='!bg-foreground-2 w-96 rounded-lg' variant='text' sx={{ fontSize: '2.5rem' }} />
        <Skeleton className='!bg-foreground-2 w-96 rounded-lg' variant='text' sx={{ fontSize: '2.5rem' }} />
        <Skeleton className='!bg-foreground-2 w-96 rounded-lg' variant='text' sx={{ fontSize: '2.5rem' }} />
        <Skeleton className='!bg-foreground-2 w-96 rounded-lg' variant='text' sx={{ fontSize: '2.5rem' }} />
        <Skeleton className='!bg-foreground-2 w-96 rounded-lg' variant='text' sx={{ fontSize: '2.5rem' }} />
      </div>
    </div>
  );
}
