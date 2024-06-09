'use client';

import { useCallback } from 'react';
import { isThisWeek, isThisYear, isToday } from 'date-fns';
import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';

import { useCurrentUserInfo, useGetAllSeriesByUserID } from '@/hooks/query';
import { Skeleton } from '@mui/material';
import { Link } from '@/navigation';
import { getImageURL } from '@/lib/utils';

export default function MySeries() {
  const t = useTranslations();
  const format = useFormatter();
  const { currentUserInfo } = useCurrentUserInfo();
  const { allSeries, isFetchingNextSeries, hasNextSeries, isLoadingAllSeries, fetchNextSeries } =
    useGetAllSeriesByUserID(currentUserInfo._id);

  const handleDateTime = useCallback((date: string) => {
    const messageDate = new Date(date).getTime();

    // check if today
    if (isToday(messageDate)) {
      return format.relativeTime(new Date(date), new Date());
    }

    // check if this week
    if (isThisWeek(messageDate, { weekStartsOn: 1 })) {
      return (
        format.dateTime(new Date(date), { weekday: 'long' }) +
        ' • ' +
        format.dateTime(new Date(date), {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        })
      );
    }

    // check if this year
    if (isThisYear(messageDate)) {
      return format.dateTime(new Date(date), {
        month: 'long',
        day: 'numeric'
      });
    }

    return format.dateTime(new Date(date), {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }, []);

  return (
    <div>
      {isLoadingAllSeries ? (
        <div className='grid grid-cols-2 gap-2.5 md:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div className='card h-64' key={index}>
              <Skeleton variant='rectangular' width={400} height={128} />
              <div className='card-body flex h-32 flex-col justify-between'>
                <div>
                  <Skeleton className='!bg-foreground-2' variant='text' width={300} height={20} />
                  <Skeleton className='!bg-foreground-2' variant='text' width={250} height={20} />
                </div>
                <div className='card-list-info mt-1 text-xs'>
                  <Skeleton className='!bg-foreground-2' variant='text' width={150} height={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className='grid grid-cols-2 gap-2.5 md:grid-cols-3'
          data-uk-scrollspy='target: > div; cls: uk-animation-scale-up; delay: 20 ;repeat: true'>
          {allSeries.map((item) => (
            <div className='card h-64' key={item._id}>
              <Link href={`/series/${item._id}`}>
                <div className='card-media h-32'>
                  <Image
                    src={getImageURL(item.cover_image, 'post')}
                    alt='cover'
                    width={1000}
                    height={1000}
                    className='object-cover'
                    priority
                  />
                  <div className='card-overlay'></div>
                </div>
              </Link>
              <div className='card-body flex h-32 flex-col justify-between'>
                <div>
                  <Link href={`/series/${item._id}`}>
                    <h4 className='card-title line-clamp-2 text-sm'>{item.title}</h4>
                  </Link>

                  <Link
                    className='text-md mt-0.5 text-text-2 hover:underline'
                    href={`/profile/${item.user._id}`}>
                    {item.user.name}
                  </Link>
                </div>

                <div className='card-list-info mt-1 text-xs'>
                  <div> {handleDateTime(item.createdAt)} </div>
                  <div className='hidden md:block'>·</div>
                  <div>
                    {format.number(item.view, { notation: 'compact', compactDisplay: 'long' })}&nbsp;
                    {t('views', { count: item.view })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isFetchingNextSeries && (
        <div className='card h-64'>
          <Skeleton variant='rectangular' width={400} height={128} />
          <div className='card-body flex h-32 flex-col justify-between'>
            <div>
              <Skeleton className='!bg-foreground-2' variant='text' width={300} height={20} />
              <Skeleton className='!bg-foreground-2' variant='text' width={250} height={20} />
            </div>
            <div className='card-list-info mt-1 text-xs'>
              <Skeleton className='!bg-foreground-2' variant='text' width={150} height={20} />
            </div>
          </div>
        </div>
      )}

      {hasNextSeries && (
        <div className='my-6 flex justify-center'>
          <button
            type='button'
            className='rounded-full bg-foreground-1 px-5 py-2 text-sm font-semibold shadow-md duration-300 hover:bg-hover-1'
            onClick={() => fetchNextSeries()}>
            {t('Load more')}...
          </button>
        </div>
      )}
    </div>
  );
}
