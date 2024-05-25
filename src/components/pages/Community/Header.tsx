'use client';

import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

import CreateEditCommunity from './CreateEditCommunity';
import Modal from '@/components/shared/Modal';
import { Tabs, TabTitle } from '@/components/ui/tabs';

export default function Header() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <div className='page-heading'>
      <div className='flex-between'>
        <div className='flex-start gap-3'>
          <h1 className='page-title'> {t('Communities')} </h1>
          <span className='p-1 rounded-full bg-foreground-1'>
            <IoAdd className='size-5 text-1' onClick={() => setOpen(true)} />
          </span>
          <Modal open={open} handleClose={() => setOpen(false)}>
            <CreateEditCommunity handleClose={() => setOpen(false)} />
          </Modal>
        </div>
        <Link href='/community/manager' className='text-blue-500 text-sm hover:underline'>
          {t('Manage your communities')}
        </Link>
      </div>

      <Tabs id='community-tabs' disableChevron>
        <TabTitle>{t('Popular')}</TabTitle>
        <TabTitle>{t('My communities')}</TabTitle>
      </Tabs>
    </div>
  );
}
