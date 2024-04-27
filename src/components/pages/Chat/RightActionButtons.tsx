'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  IoAddCircleOutline,
  IoCheckmarkOutline,
  IoEllipsisHorizontal,
  IoNotificationsOutline,
  IoVolumeMuteOutline
} from 'react-icons/io5';

import { useCurrentUserInfo } from '@/hooks/query';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import CreateNewGroup from './Modal/CreateNewGroup';

interface IRightActionButtons {}

interface Option {
  label: string;
  value: string;
  id: string;
}

export default function RightActionButtons({}: IRightActionButtons) {
  const t = useTranslations();
  const { currentUserInfo } = useCurrentUserInfo();

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className='p-2 rounded-full hover:bg-hover-1'>
        <IoEllipsisHorizontal className='text-2xl' />
      </button>
      <div
        className='md:w-[270px] !w-fit hidden'
        data-uk-dropdown='pos: bottom-right; mode: click; offset:5; animation: uk-animation-slide-top-small; animate-out: true;'
      >
        <nav className='space-y-1'>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='flex-start gap-3 p-2 rounded-xl hover:!bg-foreground-2 w-full'>
              <IoAddCircleOutline className='text-2xl shrink-0' />
              <span>{t('Create New Group')}</span>
            </DialogTrigger>
            <DialogContent className='bg-background-1 max-w-[600px] border-none'>
              <DialogHeader>
                <DialogTitle>{t('Create New Group')}</DialogTitle>
              </DialogHeader>
              <CreateNewGroup
                users={currentUserInfo.members ?? []}
                handleClose={handleClose}
              />
            </DialogContent>
          </Dialog>

          <div className='flex-start gap-3 p-2 rounded-xl hover:!bg-foreground-2'>
            <IoCheckmarkOutline className='text-2xl shrink-0' />
            <span>{t('Mark all as read')}</span>
          </div>
          <div className='flex-start gap-3 p-2 rounded-xl hover:!bg-foreground-2'>
            <IoNotificationsOutline className='text-2xl shrink-0' />
            <span>{t('Notifications setting')}</span>
          </div>
          <div className='flex-start gap-3 p-2 rounded-xl hover:!bg-foreground-2'>
            <IoVolumeMuteOutline className='text-2xl shrink-0' />
            <span>{t('Mute notifications')}</span>
          </div>
        </nav>
      </div>
    </>
  );
}
