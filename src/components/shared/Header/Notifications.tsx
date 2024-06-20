'use client';

import { useRouter } from '@/navigation';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import { useGetAllNotifications, useGetUnRedNotiNumber } from '@/hooks/query';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { useReadAllNotification } from '@/hooks/mutation';
import { useNotificationStore } from '@/store/notification';
import NotificationList from '../../pages/Notification/NotificationList';

export default function NotificationsHeader() {
  const t = useTranslations();
  const router = useRouter();

  const { allNotifications } = useGetAllNotifications();
  const { mutateReadAllNotification } = useReadAllNotification();

  const { unReadNotifyNumber, setUnReadNotifyNumber, allNotifyState, setAllNotifyState } =
    useNotificationStore();
  const { unRedNotiNumber } = useGetUnRedNotiNumber();

  useEffect(() => {
    if (allNotifications) {
      setAllNotifyState(allNotifications);
    }
  }, [allNotifications]);

  useEffect(() => {
    if (unRedNotiNumber !== undefined) {
      setUnReadNotifyNumber(unRedNotiNumber);
    }
  }, [unRedNotiNumber]);

  return (
    <div>
      <button
        type='button'
        className='relative rounded-full p-1 sm:bg-foreground-1 sm:p-2'
        data-uk-tooltip={`title: ${t('Notifications')}; pos: bottom; offset:6; delay: 300`}
        onClick={() => {
          if (unRedNotiNumber !== 0) {
            setUnReadNotifyNumber(0);
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
            unReadNotifyNumber === 0 && 'hidden'
          )}>
          {unReadNotifyNumber}
        </div>
        <IoNotificationsOutline className='text-2xl sm:hidden' />
      </button>
      <div
        className='hidden w-screen rounded-lg border-border-1 bg-foreground-2 drop-shadow-xl md:w-[365px]'
        data-uk-drop='offset:6;pos: bottom-right; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right '>
        <div className='custom-scrollbar-fg h-[400px] w-full overflow-y-auto pr-2 text-sm'>
          <NotificationList />
        </div>

        {allNotifyState?.length > 0 && (
          <div
            className='uk-drop-close cursor-pointer'
            onClick={() => {
              router.push('/notifications');
            }}>
            <div className='border-t border-border-1 py-4 text-center text-sm font-medium text-blue-500 duration-300 hover:text-blue-600'>
              {t('View all Notifications')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
