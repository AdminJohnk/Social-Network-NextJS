'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import {
  IoCheckmarkOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoVolumeMuteOutline
} from 'react-icons/io5';

export default function RightActionButtons() {
  const t = useTranslations();

  return (
    <>
      <button className='group'>
        <IoSettingsOutline className='text-2xl flex group-aria-expanded:rotate-180' />
      </button>
      <div
        className='md:w-[270px] w-full hidden'
        data-uk-dropdown='pos: bottom-left; offset:10; animation: uk-animation-slide-bottom-small'>
        <nav>
          <Link href='#' className='hover:!bg-foreground-2'>
            <IoCheckmarkOutline className='text-2xl shrink-0 -ml-1' />
            {t('Mark all as read')}
          </Link>
          <Link href='#' className='hover:!bg-foreground-2'>
            <IoNotificationsOutline className='text-2xl shrink-0 -ml-1' />
            {t('Notifications setting')}
          </Link>
          <Link href='#' className='hover:!bg-foreground-2'>
            <IoVolumeMuteOutline className='text-2xl shrink-0 -ml-1' />
            {t('Mute notifications')}
          </Link>
        </nav>
      </div>
    </>
  );
}
