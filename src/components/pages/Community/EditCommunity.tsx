'use client';

import { useState } from 'react';

import Modal from '@/components/shared/Modal';
import CreateEditCommunity from './CreateEditCommunity';
import { useTranslations } from 'next-intl';
import { ICreateCommunity, IUserInfo } from '@/types';

export interface IEditCommunityProps {
  dataEdit: Omit<ICreateCommunity, 'members'> & { _id: string; members: IUserInfo[] };
}

export default function EditCommunity({ dataEdit }: IEditCommunityProps) {
  const t = useTranslations();

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='button bg-foreground-2 hover:bg-hover-2 duration-300 min-w-fit'
        onClick={() => setOpen(true)}>
        {t('Edit')}
      </button>

      <Modal open={open} handleClose={() => setOpen(false)}>
        <CreateEditCommunity handleClose={() => setOpen(false)} dataEdit={dataEdit} />
      </Modal>
    </>
  );
}
