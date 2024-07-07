'use client';

import { useDeleteNotify, useMarkIsReadNotify, useSetSubUnRedNotiNumber } from '@/hooks/mutation';
import { cn, getImageURL } from '@/lib/utils';
import { Link, useRouter } from '@/navigation';
import { useNotificationStore } from '@/store/notification';
import { INotification, NotificationType } from '@/types';
import { useQueryClient } from '@tanstack/react-query';
import { useFormatter, useNow, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoCheckmarkCircleOutline, IoEllipsisHorizontal, IoSettingsOutline } from 'react-icons/io5';
const {
  LIKEPOST_001,
  SHAREPOST_001,
  COMMENTPOST_001,
  SENDFRIENDREQUEST_001,
  ACCEPTFRIENDREQUEST_001,
  CREATEPOST_001
} = NotificationType;

export interface INotificationItemProps {
  notification: INotification;
  className?: string;
}

export default function NotificationItem({ notification, className }: INotificationItemProps) {
  const t = useTranslations();
  const format = useFormatter();
  const router = useRouter();
  useNow({ updateInterval: 1000 * 30 });

  const queryClient = useQueryClient();
  const { mutateMarkIsReadNoti } = useMarkIsReadNotify();
  const { mutateSetSubUnRedNotiNumber } = useSetSubUnRedNotiNumber();
  const { mutateDeleteNotify } = useDeleteNotify();
  const { unReadNotifyNumber, setUnReadNotifyNumber, allNotifyState, setAllNotifyState } =
    useNotificationStore();
  const [notificationState, setNotificationState] = useState<INotification>(notification);

  useEffect(() => {
    if (notification) {
      setNotificationState(notification);
    }
  }, [notification]);

  const isPostNotify = () => {
    if (
      notificationState.type === LIKEPOST_001.type ||
      notificationState.type === SHAREPOST_001.type ||
      notificationState.type === COMMENTPOST_001.type ||
      notificationState.type === CREATEPOST_001.type
    ) {
      return true;
    } else {
      return false;
    }
  };

  const validateQueries = () => {
    const isPost = isPostNotify();
    if (isPost) {
      queryClient.invalidateQueries({ queryKey: ['post', notificationState.options.post] });

      queryClient.invalidateQueries({ queryKey: ['comments', notificationState.options.post] });
    }
  };

  const generateLink = () => {
    const isPost = isPostNotify();
    if (isPost) {
      const post = notificationState.options.post!;
      return `/posts/${post}`;
    } else if (
      notificationState.type === SENDFRIENDREQUEST_001.type ||
      notificationState.type === ACCEPTFRIENDREQUEST_001.type
    ) {
      queryClient.invalidateQueries({ queryKey: ['currentUserInfo'] });
      return `/profile/${notificationState.options.friend}`;
    }
    return '';
  };

  const link = generateLink();

  return (
    <div className={'flex-between relative cursor-pointer rounded-xl p-2 duration-200 hover:bg-hover-1'}>
      <div
        className={cn('flex items-center gap-3', className)}
        onClick={() => {
          if (!notificationState.is_read) {
            mutateMarkIsReadNoti(notificationState._id);
          }
          if (unReadNotifyNumber !== 0) {
            setUnReadNotifyNumber(unReadNotifyNumber - 1);
            mutateSetSubUnRedNotiNumber();
          }
          validateQueries();
          router.push(link);
        }}>
        <div className='relative h-12 w-12 shrink-0'>
          <Image
            src={getImageURL(notificationState.sender.user_image)}
            alt=''
            className='h-full w-full rounded-full object-cover'
            width={50}
            height={50}
          />
        </div>
        <div className='flex-1'>
          <p>
            <b className={cn('mr-1 font-bold', !notificationState.is_read && 'text-text-2')}>
              {notificationState.sender.name}
            </b>
            <span className={cn('', !notificationState.is_read && 'text-text-2')}>
              {t(notificationState.content)}
            </span>
          </p>
          <div className='/80 mt-1.5 text-xs text-gray-500'>
            {format.relativeTime(new Date(notificationState.createAt), new Date())}
          </div>
        </div>
      </div>
      {!notificationState.is_read && (
        <div className='flex-center'>
          <div className='bottom-[10%] right-3 ms-2 h-2.5 w-2.5 rounded-full bg-teal-600'></div>
        </div>
      )}
      <div className='top-[50%]] absolute right-6'>
        <button type='button' className='flex rounded-full p-1 hover:bg-foreground-1'>
          <IoEllipsisHorizontal className='text-xl' />
        </button>
        <div
          className='group w-[280px]'
          data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click; offset:5'>
          <nav className='*:flex-start text-sm *:cursor-pointer *:gap-2 *:rounded-md *:px-2 *:py-2 *:duration-300 hover:*:!bg-hover-1'>
            <div
              className='uk-dropdown-close'
              onClick={() => {
                mutateMarkIsReadNoti(notificationState._id);
                const newNotificationState = { ...notificationState, is_read: true };
                setNotificationState(newNotificationState);
              }}>
              <IoCheckmarkCircleOutline className='shrink-0 text-xl' />
              {t('Mark as read')}
            </div>
            <div
              className='uk-dropdown-close'
              onClick={() => {
                mutateDeleteNotify(notificationState._id);
                const newAllNotifyState = allNotifyState.filter((notification) => {
                  return notification._id !== notificationState._id;
                });
                setAllNotifyState(newAllNotifyState);
              }}>
              <IoSettingsOutline className='shrink-0 text-xl' />
              {t('Remove this notification')}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
