'use client';

import { useFormatter, useNow, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/navigation';
import { useCallback } from 'react';
import { isThisWeek, isThisYear, isToday } from 'date-fns';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { CircularProgress } from '@mui/material';

import { useGetAllSeries } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';

export default function BlogSlideList() {
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
    <div data-uk-slider='finite:true'>
      <div className='uk-slider-container pb-1'>
        {isLoadingAllSeries ? (
          <div className='flex-center w-full h-full p-5'>
            <CircularProgress size={20} className='!text-text-1' />
          </div>
        ) : (
          <ul className='uk-slider-items grid-small'>
            {allSeries.map((item) => (
              <li className='sm:w-1/3 w-1/2' key={item._id}>
                <div className='card h-64'>
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
                  <div className='card-body h-32 flex flex-col justify-between'>
                    <div>
                      <Link href={`/series/${item._id}`}>
                        <h4 className='card-title text-sm line-clamp-2'>{item.title}</h4>
                      </Link>

                      <Link
                        className='text-text-2 text-md mt-0.5 hover:underline'
                        href={`/profile/${item.user._id}`}>
                        {item.user.name}
                      </Link>
                    </div>

                    <div className='card-list-info mt-1 text-xs'>
                      <div> {handleDateTime(item.createdAt)} </div>
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
      </div>

      {!isLoadingAllSeries && (
        <>
          <Link className='nav-prev' href='' data-uk-slider-item='previous'>
            <IoChevronBack />
          </Link>
          <Link className='nav-next' href='' data-uk-slider-item='next'>
            <IoChevronForward />
          </Link>
        </>
      )}
    </div>
  );
}
