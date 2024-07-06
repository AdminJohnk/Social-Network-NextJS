'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { useCallback } from 'react';
import { Skeleton } from '@mui/material';
import { isThisWeek, isThisYear, isToday } from 'date-fns';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useFormatter, useNow, useTranslations } from 'next-intl';

import { useGetAllSeries } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';

export default function BlogSlideThumbnail() {
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
    <div className='card h-[300px] w-full rounded-xl'>
      <Skeleton variant='rectangular' width='100%' height='100%' />
      <div className='card-body absolute bottom-0 w-full'>
        <div className='m-2 mb-8 rounded-md bg-black/10 p-4 backdrop-blur-md'>
          <Skeleton className='!bg-foreground-2' variant='text' width='100%' />
          <Skeleton className='!bg-foreground-2' variant='text' width='100%' />
        </div>
      </div>
    </div>
  ) : (
    <div
      className='uk-visible-toggle relative'
      data-uk-slideshow='finite: true ; min-height: 300; max-height: 500'>
      <ul className='uk-slideshow-items'>
        {allSeries.map((item) => (
          <li key={item._id} className='w-full overflow-hidden rounded-xl'>
            <Link href={`/series/${item._id}`}>
              <Image
                src={getImageURL(item.cover_image)}
                alt='cover'
                className='h-full w-full object-cover'
                width={1000}
                height={1000}
                priority
              />
            </Link>
            <div className='uk-transition-slide-bottom-small absolute bottom-0 w-full'>
              <div className='m-2 mb-8 rounded-md bg-black/10 p-4 backdrop-blur-md'>
                <Link href={`/series/${item._id}`}>
                  <h4 className='text-sm font-medium text-white'>{item.title}</h4>
                </Link>
                <div className='mt-2 flex items-center gap-2 text-xs text-white'>
                  <div>{handleDateTime(item.createdAt)}</div>
                  <div className='hidden md:block'>·</div>
                  <div>
                    {format.number(item.view, { notation: 'compact', compactDisplay: 'long' })}&nbsp;
                    {t('views', { count: item.view })}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className='flex justify-center'>
        <ul className='uk-dotnav uk-slideshow-nav absolute bottom-3 inline-flex flex-wrap justify-center gap-1.5'></ul>
      </div>

      <Link className='nav-prev' href='' data-uk-slideshow-item='previous'>
        <IoChevronBack />
      </Link>
      <Link className='nav-next' href='' data-uk-slideshow-item='next'>
        <IoChevronForward />
      </Link>
    </div>
  );
}
