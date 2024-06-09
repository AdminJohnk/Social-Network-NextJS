'use client';

import { isThisWeek, isThisYear, isToday } from 'date-fns';
import { useFormatter, useNow, useTranslations } from 'next-intl';
import { useCallback } from 'react';

import { useGetAllSeries } from '@/hooks/query';
import { Link } from '@/navigation';
import { Skeleton } from '@mui/material';

export default function TrendingSeries() {
  const t = useTranslations();
  useNow({ updateInterval: 1000 * 30 });
  const format = useFormatter();

  const { allSeries, isLoadingAllSeries } = useGetAllSeries();

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

  return isLoadingAllSeries ? (
    <div className='box rounded-lg bg-foreground-1 p-5 px-6'>
      <div className='flex items-baseline justify-between'>
        <h3 className='text-base font-bold'> {t('Trending Series')}</h3>
        <Skeleton className='!bg-foreground-2' variant='text' width={50} height={20} />
      </div>

      <div className='mt-4 space-y-4'>
        <ul className='grid gap-4'>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <Skeleton className='!bg-foreground-2' variant='text' width='100%' height={20} />
              <div className='mt-2 flex items-center gap-2 text-xs text-text-2'>
                <Skeleton className='!bg-foreground-2' variant='text' width={100} height={20} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className='box rounded-lg bg-foreground-1 p-5 px-6'>
      <div className='flex items-baseline justify-between'>
        <h3 className='text-base font-bold'> {t('Trending Series')}</h3>
        {allSeries.length > 5 ? (
          <Link href='' className='text-sm text-blue-500'>
            {t('See all')}
          </Link>
        ) : (
          <div className='invisible' />
        )}
      </div>

      <div className='mt-4 space-y-4'>
        <ul className='grid gap-4'>
          {allSeries.slice(0, 5).map((item) => (
            <li key={item._id}>
              <Link href={`/series/${item._id}`}>
                <h4 className='line-clamp-2 duration-200 hover:opacity-80'>{item.title}</h4>
              </Link>
              <div className='mt-2 flex items-center gap-2 text-xs text-text-2'>
                <div>{handleDateTime(item.createdAt)}</div>
                <div className='hidden md:block'>·</div>
                <div>
                  {format.number(item.view, { notation: 'compact', compactDisplay: 'long' })}&nbsp;
                  {t('views', { count: item.view })}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
