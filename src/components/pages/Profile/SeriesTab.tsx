'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCurrentUserInfo, useGetAllSeriesByUserID } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { Link } from '@/navigation';
import Nodata from '@/components/shared/Nodata';
import { useTranslations } from 'next-intl';
import { CircularProgress, Skeleton } from '@mui/material';
import { PostItem } from '../Series/PostItem';
import { Timeline } from 'flowbite-react';

export interface ISeriesTabProps {
  profileID: string;
}

export default function SeriesTab({ profileID }: ISeriesTabProps) {
  const t = useTranslations();

  const { currentUserInfo } = useCurrentUserInfo();
  const { allSeries, isFetchingNextSeries, hasNextSeries, isLoadingAllSeries } =
    useGetAllSeriesByUserID(profileID);

  return (
    <div className='my-8 w-full space-y-14 rounded-md bg-foreground-1 px-20 py-8'>
      {isLoadingAllSeries ? (
        <div className=''>
          <div className='grid cursor-pointer grid-cols-5 gap-4'>
            <div className='col-span-4'>
              <h1 className='h3-bold duration-300 hover:underline'>
                <Skeleton variant='text' sx={{ fontSize: '1rem' }} className='!w-full !bg-foreground-2' />
              </h1>
              <p className='mb-4 mt-4 text-text-2'>
                <Skeleton variant='text' sx={{ fontSize: '1rem' }} className='!w-full !bg-foreground-2' />
              </p>
              <Skeleton variant='rounded' width={100} height={40} className='!bg-foreground-2' />
            </div>
            <div className='col-span-1'>
              <Skeleton variant='rectangular' className='!h-[132px] w-full !bg-foreground-2' />
            </div>
          </div>
        </div>
      ) : !allSeries || !allSeries.length ? (
        <Nodata width={150} height={150} title={t('No series found')} />
      ) : (
        allSeries?.map((series, index) => {
          const description =
            series.description.length > 150 ? series.description.slice(0, 150) + '...' : series.description;

          const isMe = series ? series.user._id === currentUserInfo._id : false;

          return (
            <div key={index}>
              <Link href={`/series/${series._id}`} className='grid cursor-pointer grid-cols-5 gap-4'>
                <div className='col-span-4 max-md:col-span-3'>
                  <h1 className='h3-bold duration-300 hover:underline'>{series.title}</h1>
                  <p className='mt-4 text-text-2' dangerouslySetInnerHTML={{ __html: description }}></p>
                  <Button className='my-4'>{t('View series')}</Button>
                </div>
                <div className='col-span-1 max-md:col-span-2'>
                  <Image
                    alt='Ethereum'
                    src={getImageURL(series.cover_image, 'post_mini') || ''}
                    className='h-[132px] w-full rounded-md object-cover'
                    width={1000}
                    height={1000}
                  />
                </div>
              </Link>
              <Timeline className='mt-6 border-border-1'>
                {series.posts.map((post) => {
                  return <PostItem key={post._id} post={post} series_id={series._id} isMe={isMe} />;
                })}
              </Timeline>
            </div>
          );
        })
      )}
    </div>
  );
}
