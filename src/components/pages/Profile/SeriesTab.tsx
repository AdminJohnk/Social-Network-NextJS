'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useGetAllSeries } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { FaRegCircle } from 'react-icons/fa';
import { Link } from '@/navigation';
import Nodata from '@/components/shared/Nodata';
import { useTranslations } from 'next-intl';
import { CircularProgress } from '@mui/material';

export interface ISeriesTabProps {
  profileID: string;
}

export default function SeriesTab({ profileID }: ISeriesTabProps) {
  const t = useTranslations();
  const { allSeries, isFetchingNextSeries, hasNextSeries, isLoadingAllSeries } = useGetAllSeries(profileID);

  return (
    <div className='bg-foreground-1 my-8 w-full rounded-md px-20 py-8'>
      {isLoadingAllSeries ? (
        <div className='w-full flex-center py-10'>
          <CircularProgress size={20} className='!text-text-1' />
        </div>
      ) : !allSeries || !allSeries.length ? (
        <Nodata width={150} height={150} title={t('No series found')} />
      ) : (
        allSeries?.map((series, index) => {
          const description =
            series.description.length > 150 ? series.description.slice(0, 150) + '...' : series.description;

          return (
            <div key={index}>
              <Link
                href={`/series/${series._id}`}
                target='_blank'
                className='grid grid-cols-5 gap-4 cursor-pointer'>
                <div className='col-span-4'>
                  <h1 className='h3-bold hover:underline duration-300'>{series.title}</h1>
                  <p className='text-text-2 mt-4' dangerouslySetInnerHTML={{ __html: description }}></p>
                  <Button className='my-4'>{t('View series')}</Button>
                </div>
                <div className='col-span-1'>
                  <Image
                    alt='Ethereum'
                    src={getImageURL(series.cover_image, 'post_mini') || ''}
                    className='rounded-md object-cover w-full h-[132px]'
                    width={1000}
                    height={1000}
                  />
                </div>
              </Link>
              <div className='space-y-4 mt-3'>
                {series.posts.map((post, index) => (
                  <Link
                    key={index}
                    className='w-full group cursor-pointer'
                    href={`/series/${series._id}/posts/${post._id}`}>
                    <div className='flex items-center w-full'>
                      <FaRegCircle className='text-blue-500 size-3' />
                      <div className='ms-3'>
                        <h2 className='h5-semibold hover:underline duration-300 group-hover:underline'>
                          {post.title}
                        </h2>
                        <p className='small-regular text-text-2'>
                          {post.read_time > 1 ? `${post.read_time} mins read` : `${post.read_time} min read`}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
