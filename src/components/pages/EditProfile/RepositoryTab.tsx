'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useUpdateUser } from '@/hooks/mutation';
import { useSession } from 'next-auth/react';
import { useCurrentUserInfo } from '@/hooks/query';
import RenderRepositoryIem from '@/components/shared/Repository/Repository';
import AddNewRepository from './AddNewRepository';
import Modal from '@mui/material/Modal';

export interface IRepositoryTabProps {}

export default function RepositoryTab(props: IRepositoryTabProps) {
  const t = useTranslations();
  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateUpdateUser } = useUpdateUser();

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className='mb-10'>
        <span
          className='px-3 py-2 rounded-md cursor-pointer duration-300 bg-foreground-2 hover:bg-hover-2'
          onClick={handleOpen}
        >
          Edit
        </span>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <AddNewRepository />
        </Modal>
      </div>
      <div className='flex flex-wrap justify-between mt-5'>
        {currentUserInfo?.repositories?.length === 0 ? (
          <>No repos</>
        ) : (
          currentUserInfo.repositories.map((item, index) => {
            return RenderRepositoryIem(item, index);
          })
        )}
      </div>
    </div>
  );
}
