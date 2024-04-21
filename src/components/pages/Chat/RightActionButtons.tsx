'use client';

import { useState } from 'react';
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
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import CreateNewGroup from './Modal/CreateNewGroup';

interface IRightActionButtons {}

interface Option {
  label: string;
  value: string;
  id: string;
}

export default function RightActionButtons({}: IRightActionButtons) {
  const t = useTranslations();

  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <button className='group'>
        <IoSettingsOutline className='text-2xl flex group-aria-expanded:rotate-180' />
      </button>
      <div
        className='md:w-[270px] w-full hidden'
        data-uk-dropdown='pos: bottom-left; mode: click;offset:10; animation: uk-animation-slide-bottom-small; animate-out: true;'>
        <nav className='space-y-1'>
          {/* <Modal
              open={openAddMember}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground-1 shadow-lg rounded-md outline-none'>
                <CreateNewGroup users={currentUserInfo?.members ?? []} handleClose={handleClose} />
              </div>
            </Modal> */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='flex-start gap-3 p-2 rounded-xl hover:!bg-foreground-2 w-full'>
              <IoAddCircleOutline className='text-2xl shrink-0' />
              {t('Create New Group')}
            </DialogTrigger>
            <DialogContent className='bg-background-1 max-w-[600px] border-none'>
              <DialogHeader>
                <DialogTitle>{t('Create New Group')}</DialogTitle>
              </DialogHeader>
              <CreateNewGroup users={currentUserInfo?.members ?? []} handleClose={handleClose} />
            </DialogContent>
          </Dialog>

          <div className='flex-start gap-3 p-2 rounded-xl hover:!bg-foreground-2'>
            <IoCheckmarkOutline className='text-2xl shrink-0' />
            {t('Mark all as read')}
          </div>
          <div className='flex-start gap-3 p-2 rounded-xl hover:!bg-foreground-2'>
            <IoNotificationsOutline className='text-2xl shrink-0' />
            {t('Notifications setting')}
          </div>
          <div className='flex-start gap-3 p-2 rounded-xl hover:!bg-foreground-2'>
            <IoVolumeMuteOutline className='text-2xl shrink-0' />
            {t('Mute notifications')}
          </div>
        </nav>
      </div>
    </>
  );
}
