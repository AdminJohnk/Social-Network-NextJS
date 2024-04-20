'use client';

import { useCallback, useState } from 'react';
import { Link, useRouter } from '@/navigation';
import { Modal } from '@mui/material';
import { useTranslations } from 'next-intl';
import {
  IoAddCircleOutline,
  IoCheckmarkOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoVolumeMuteOutline
} from 'react-icons/io5';
import { useSession } from 'next-auth/react';

import { useCurrentUserInfo } from '@/hooks/query';
import { useSocketStore } from '@/store/socket';
import CreateNewGroup from './Modal/CreateNewGroup';

interface IRightActionButtons {
}

interface Option {
  label: string;
  value: string;
  id: string;
}

export default function RightActionButtons({ }: IRightActionButtons) {
  const t = useTranslations();


  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

  const [openAddMember, setOpenCreateNewGroup] = useState(false);

  const handleOpen = () => setOpenCreateNewGroup(true);
  const handleClose = () => setOpenCreateNewGroup(false);

  return (
    <>
      <button className='group'>
        <IoSettingsOutline className='text-2xl flex group-aria-expanded:rotate-180' />
      </button>
      <div
        className='md:w-[270px] w-full hidden'
        data-uk-dropdown='pos: bottom-left; offset:10; animation: uk-animation-slide-bottom-small'>
        <nav>
          <Link href={''} className='hover:!bg-foreground-2' onClick={handleOpen}>
            <IoAddCircleOutline className='text-2xl shrink-0 -ml-1' />
            {t('Create New Group')}
            <Modal
              open={openAddMember}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground-1 shadow-lg rounded-md outline-none'>
                <CreateNewGroup
                  users={currentUserInfo?.members ?? []}
                  handleClose={handleClose}
                />
              </div>
            </Modal>
          </Link>
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
