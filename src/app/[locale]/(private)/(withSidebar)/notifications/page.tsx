'use client';

import NotificationList from '@/components/pages/Notification/NotificationList';

export interface INotificationsProps {}

export default function Notifications(props: INotificationsProps) {
  return (
    <div className='ms-60 mt-16 pb-5 pt-5 max-lg/2:ms-0'>
      <div className='mx-auto max-w-[700px] bg-foreground-1 py-3 rounded-md'>
        <NotificationList />
      </div>
    </div>
  );
}
