'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { useCallback } from 'react';
import { CircularProgress } from '@mui/material';
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

  return (
    <div
      className='relative uk-visible-toggle'
      data-uk-slideshow='finite: true ; min-height: 300; max-height: 500'>
      {isLoadingAllSeries ? (
        <div className='flex-center w-full h-full p-5'>
          <CircularProgress size={20} className='!text-text-1' />
        </div>
      ) : (
        <ul className='uk-slideshow-items'>
          {allSeries.map((item) => (
            <li key={item._id} className='w-full overflow-hidden rounded-xl'>
              <Link href={`/series/${item._id}`}>
                <Image
                  src={getImageURL(item.cover_image, 'post')}
                  alt='cover'
                  className='w-full h-full object-cover'
                  width={1000}
                  height={1000}
                  priority
                />
              </Link>
              <div className='absolute bottom-0 w-full uk-transition-slide-bottom-small'>
                <div className='bg-black/10 p-4 m-2 rounded-md backdrop-blur-md mb-8'>
                  <Link href={`/series/${item._id}`}>
                    <h4 className='text-sm font-medium text-white'>{item.title}</h4>
                  </Link>
                  <div className='text-xs mt-2 flex items-center gap-2 text-white'>
                    <div>{handleDateTime(item.createdAt)}</div>
                    <div className='md:block hidden'>·</div>
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
      )}

      <div className='flex justify-center'>
        <ul className='inline-flex flex-wrap justify-center  absolute bottom-3 gap-1.5 uk-dotnav uk-slideshow-nav'></ul>
      </div>

      {!isLoadingAllSeries && (
        <>
          <Link className='nav-prev' href='' data-uk-slideshow-item='previous'>
            <IoChevronBack />
          </Link>
          <Link className='nav-next' href='' data-uk-slideshow-item='next'>
            <IoChevronForward />
          </Link>
        </>
      )}
    </div>
  );
}
