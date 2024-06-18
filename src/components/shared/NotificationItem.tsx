import { useMarkIsReadNotify, useSetSubUnRedNotiNumber } from '@/hooks/mutation';
import { usePostData } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { Link } from '@/navigation';
import { INotification, NotificationType } from '@/types';
import { useQueryClient } from '@tanstack/react-query';
import { useFormatter, useNow, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
  unread_noti_number?: number;
  setUnread_noti_number?: (unread_noti_number: number) => void;
}

export default function NotificationItem({
  notification,
  className,
  unread_noti_number,
  setUnread_noti_number
}: INotificationItemProps) {
  const t = useTranslations();
  const format = useFormatter();
  const router = useRouter();
  useNow({ updateInterval: 1000 * 30 });

  const queryClient = useQueryClient();
  const { mutateMarkIsReadNoti } = useMarkIsReadNotify();
  const { mutateSetSubUnRedNotiNumber } = useSetSubUnRedNotiNumber();

  const generateLink = () => {
    if (
      notification.type === LIKEPOST_001.type ||
      notification.type === SHAREPOST_001.type ||
      notification.type === COMMENTPOST_001.type ||
      notification.type === CREATEPOST_001.type
    ) {
      queryClient.invalidateQueries({ queryKey: ['post', notification.options.post] });

      queryClient.invalidateQueries({ queryKey: ['comments', notification.options.post] });

      const post = notification.options.post!;
      return `/posts/${post}`;
    } else if (
      notification.type === SENDFRIENDREQUEST_001.type ||
      notification.type === ACCEPTFRIENDREQUEST_001.type
    ) {
      queryClient.invalidateQueries({ queryKey: ['currentUserInfo'] });
      console.log('notification::', notification);
      return `/profile/${notification.options.friend}`;
    }
    return '';
  };

  const link = generateLink();

  return (
    <div
      className={cn(
        'relative flex cursor-pointer items-center gap-3 rounded-xl p-2 pr-10 duration-200 hover:bg-hover-1',
        className
      )}
      onClick={() => {
        router.push(link);
        if (!notification.is_read) {
          mutateMarkIsReadNoti(notification._id);
        }
        setUnread_noti_number && setUnread_noti_number(unread_noti_number! - 1);
        mutateSetSubUnRedNotiNumber();
      }}>
      <div className='relative h-12 w-12 shrink-0'>
        <Image
          src={getImageURL(notification.sender.user_image)}
          alt=''
          className='h-full w-full rounded-full object-cover'
          width={50}
          height={50}
        />
      </div>
      <div className='flex-1'>
        <p>
          <b className={cn('mr-1 font-bold', !notification.is_read && 'text-text-2')}>
            {notification.sender.name}
          </b>
          <span className={cn('', !notification.is_read && 'text-text-2')}>{t(notification.content)}</span>
        </p>
        <div className='/80 mt-1.5 text-xs text-gray-500'>
          {format.relativeTime(new Date(notification.createAt), new Date())}
        </div>
        {!notification.is_read && (
          <div className='absolute right-3 top-5 h-2.5 w-2.5 rounded-full bg-teal-600'></div>
        )}
      </div>
    </div>
  );
}
