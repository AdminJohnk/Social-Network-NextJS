'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import Modal from '@mui/material/Modal';
import { useSession } from 'next-auth/react';
import { useRouter } from '@/navigation';

import { useUpdateUser } from '@/hooks/mutation';
import { useCurrentUserInfo } from '@/hooks/query';
import RenderRepositoryIem from '@/components/shared/Repository/Repository';
import AddNewRepository from './AddNewRepository';

export interface IRepositoryTabProps {}

export default function RepositoryTab(props: IRepositoryTabProps) {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const { data: session, update } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('repoUrl')) {
      (async () =>
        await update({
          ...session,
          repos_url: searchParams.get('repoUrl'),
          user_github_name: searchParams.get('userGithubName')
        }).then(() => router.replace('/edit-profile?tab=repository')))();
    }
  }, []);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateUpdateUser } = useUpdateUser();

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className='mb-10'>
        <span
          className='px-3 py-2 rounded-md cursor-pointer duration-300 bg-foreground-2 hover:bg-hover-2'
          onClick={handleOpen}>
          Edit
        </span>
        <a href='/api/repo-github'>Click me</a>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
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
