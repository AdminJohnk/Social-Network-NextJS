'use client';

import { useFormatter, useNow, useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { useCallback } from 'react';
import { isThisWeek, isThisYear, isToday } from 'date-fns';

import { useGetAllSeries } from '@/hooks/query';
import { CircularProgress, Skeleton } from '@mui/material';
import { divide } from 'lodash';

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

  return (
    <div className='box p-5 px-6 bg-foreground-1'>
      <div className='flex items-baseline justify-between'>
        <h3 className='font-bold text-base'> {t('Trending Articles')}</h3>
        {isLoadingAllSeries ? (
          <Skeleton className='bg-foreground-2' variant='text' sx={{ fontSize: '1.5rem' }} />
        ) : allSeries.length > 5 ? (
          <Link href='' className='text-sm text-blue-500'>
            {t('See all')}
          </Link>
        ) : (
          <div className='invisible'/>
        )}
      </div>

      <div className='mt-4 space-y-4'>
        {isLoadingAllSeries ? (
          <div className='flex-center w-full h-full p-5'>
            <CircularProgress size={20} className='!text-text-1' />
          </div>
        ) : (
          <ul className='grid gap-4'>
            {allSeries.slice(0, 5).map((item) => (
              <li key={item._id}>
                <Link href={`/series/${item._id}`}>
                  <h4 className='duration-200 hover:opacity-80 line-clamp-2'>{item.title}</h4>
                </Link>
                <div className='text-xs text-text-2 mt-2 flex items-center gap-2'>
                  <div>{handleDateTime(item.createdAt)}</div>
                  <div className='md:block hidden'>·</div>
                  <div>
                    {format.number(item.view, { notation: 'compact', compactDisplay: 'long' })}&nbsp;
                    {t('views', { count: item.view })}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
