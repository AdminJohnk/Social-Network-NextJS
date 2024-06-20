import Nodata from '@/components/shared/Nodata';
import NotificationItem from './NotificationItem';
import { useTranslations } from 'next-intl';
import { IoCheckmarkCircleOutline, IoEllipsisHorizontal, IoSettingsOutline } from 'react-icons/io5';
import { useNotificationStore } from '@/store/notification';
import { useRouter } from '@/navigation';
import { useMarkAllAsReadNotify } from '@/hooks/mutation';

export interface INotificationListProps {}

export default function NotificationList(props: INotificationListProps) {
  const t = useTranslations();
  const router = useRouter();

  const { mutateMarkAllAsReadNoti } = useMarkAllAsReadNotify();
  const { allNotifyState, setAllNotifyState } = useNotificationStore();

  return (
    <div className='h-full w-full rounded-md'>
      <div className='flex items-center justify-between gap-2 p-4 pb-2'>
        <h3 className='text-xl font-bold text-text-1'>{t('Notifications')}</h3>
        {allNotifyState?.length > 0 && (
          <div className='flex gap-2.5'>
            <button type='button' className='flex rounded-full p-1 hover:bg-foreground-1'>
              <IoEllipsisHorizontal className='text-xl' />
            </button>
            <div
              className='group w-[280px]'
              data-uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click; offset:5'>
              <div className='*:flex-start text-sm *:cursor-pointer *:gap-2 *:rounded-md *:px-2 *:py-2 *:duration-300 hover:*:!bg-hover-1'>
                <div
                  className='uk-dropdown-close'
                  onClick={() => {
                    mutateMarkAllAsReadNoti();
                    const newAllNotifyState = allNotifyState.map((notification) => {
                      return { ...notification, is_read: true };
                    });

                    setAllNotifyState(newAllNotifyState);
                  }}>
                  <IoCheckmarkCircleOutline className='shrink-0 text-xl' />
                  <span>{t('Mark all as read')}</span>
                </div>
                <div
                  className='uk-dropdown-close uk-drop-close'
                  onClick={() => {
                    router.push('/notifications');
                  }}>
                  <IoSettingsOutline className='shrink-0 text-xl' />
                  <span> {t('Open Notifications')}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {allNotifyState?.length === 0 ? (
          <div className='flex-center h-full w-full'>
            <Nodata width={150} height={150} title={t('No notification found')} />
          </div>
        ) : (
          <div className='p-1 pl-2 text-sm font-normal'>
            {allNotifyState?.map((notification) => {
              return (
                <NotificationItem
                  key={notification._id}
                  notification={notification}
                  className='uk-drop-close'
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
