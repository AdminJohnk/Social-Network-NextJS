'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import {
  IoCheckmarkCircleOutline,
  IoEllipsisHorizontal,
  IoNotificationsOffOutline,
  IoNotificationsOutline,
  IoSettingsOutline
} from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import NotificationItem from '../NotificationItem';
import { useGetAllNotifications, useCurrentUserInfo, useGetUnRedNotiNumber } from '@/hooks/query';
import Nodata from '../Nodata';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useReadAllNotification } from '@/hooks/mutation';

export default function NotificationsHeader() {
  const t = useTranslations();

  const {
    allNotifications,
    isFetchingAllNotifications,
    refetchAllNotifications,
    fetchNextAllNotifications,
    hasNextAllNotifications
  } = useGetAllNotifications();

  const { mutateReadAllNotification } = useReadAllNotification();

  const { unRedNotiNumber } = useGetUnRedNotiNumber();

  const [unread_noti_number, setUnread_noti_number] = useState<number>(0);

  useEffect(() => {
    if (unRedNotiNumber) {
      setUnread_noti_number(unRedNotiNumber);
    }
  }, [unRedNotiNumber]);

  return (
    <div>
      <button
        type='button'
        className='relative rounded-full p-1 sm:bg-foreground-1 sm:p-2'
        data-uk-tooltip={`title: ${t('Notifications')}; pos: bottom; offset:6; delay: 300`}
        onClick={() => {
          setUnread_noti_number(0);
          if (unread_noti_number !== 0) {
            mutateReadAllNotification();
          }
        }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='h-6 w-6 max-sm:hidden'>
          <path d='M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z'></path>
          <path
            fillRule='evenodd'
            d='M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z'
            clipRule='evenodd'></path>
        </svg>
        <div
          className={cn(
            'absolute right-0 top-0 -m-1 rounded-full bg-red-600 px-1 text-xs text-light-1',
            unread_noti_number === 0 && 'hidden'
          )}>
          {unread_noti_number || 0}
        </div>
        <IoNotificationsOutline className='text-2xl sm:hidden' />
      </button>
      <div
        className='hidden w-screen rounded-lg border-border-1 bg-foreground-2 pr-1.5 drop-shadow-xl md:w-[365px]'
        data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
        <div className='flex items-center justify-between gap-2 p-4 pb-2'>
          <h3 className='text-xl font-bold text-text-1'>{t('Notifications')}</h3>

          <div className='flex gap-2.5'>
            <button type='button' className='flex rounded-full p-1 focus:bg-foreground-1'>
              <IoEllipsisHorizontal className='text-xl' />
            </button>
            <div
              className='group w-[280px]'
              data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click; offset:5'>
              <nav className='text-sm'>
                <Link href=''>
                  <IoCheckmarkCircleOutline className='shrink-0 text-xl' />
                  {t('Mark all as read')}
                </Link>
                <Link href=''>
                  <IoSettingsOutline className='shrink-0 text-xl' />
                  {t('Notification setting')}
                </Link>
                <Link href=''>
                  <IoNotificationsOffOutline className='shrink-0 text-xl' />
                  {t('Mute notifications')}
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className='custom-scrollbar-fg h-[400px] w-full overflow-y-auto pr-2 text-sm'>
          {allNotifications?.length === 0 ? (
            <div className='flex-center h-full w-full'>
              <Nodata width={150} height={150} title={t('No notification found')} />
            </div>
          ) : (
            <div className='p-1 pl-2 text-sm font-normal'>
              {allNotifications?.map((notification, index) => (
                <NotificationItem
                  key={index}
                  notification={notification}
                  unread_noti_number={unread_noti_number}
                  setUnread_noti_number={setUnread_noti_number}
                  className='uk-drop-close'
                />
              ))}
            </div>
          )}
        </div>

        {allNotifications?.length > 0 && (
          <Link href=''>
            <div className='border-t border-border-1 py-4 text-center text-sm font-medium text-blue-600'>
              {t('View all Notifications')}
            </div>
          </Link>
        )}

        <div className='absolute -top-1.5 right-3 h-3 w-3 rotate-45 border-l border-t bg-foreground-2 dark:border-transparent max-md:hidden'></div>
      </div>
    </div>
  );
}
