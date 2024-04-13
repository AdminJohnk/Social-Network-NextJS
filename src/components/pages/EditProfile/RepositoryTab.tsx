'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import Modal from '@mui/material/Modal';
import { useSession } from 'next-auth/react';
import { useRouter as useRouterNext } from 'next/navigation';
import { useRouter } from '@/navigation';

import { useUpdateUser } from '@/hooks/mutation';
import { useCurrentUserInfo } from '@/hooks/query';
import RepositoryItem from '@/components/shared/Repository/Repository';
import AddNewRepository from './AddNewRepository';

export interface IRepositoryTabProps {}

export default function RepositoryTab(props: IRepositoryTabProps) {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const { data: session, update } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');
  const router = useRouter();
  const routerNext = useRouterNext();

  const [isLoginGithub, setIsLoginGithub] = useState<boolean>(false);

  useEffect(() => {
    if (searchParams.get('repoUrl')) {
      (async () =>
        await update({
          ...session,
          repos_url: searchParams.get('repoUrl'),
          user_github_name: searchParams.get('userGithubName')
        }).then(() => router.replace('/edit-profile?tab=repository')))();
    }
  }, [searchParams]);

  useEffect(() => {
    if (session?.repos_url) {
      setIsLoginGithub(true);
    }
  }, [session]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateUpdateUser } = useUpdateUser();

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className='mb-10'>
        {isLoginGithub ? (
          <span
            className='px-3 py-2 rounded-md cursor-pointer duration-300 bg-foreground-2 hover:bg-hover-2'
            onClick={handleOpen}>
            Edit
          </span>
        ) : (
          <span
            className='px-3 py-2 rounded-md cursor-pointer duration-300 bg-foreground-2 hover:bg-hover-2'
            onClick={() => {
              routerNext.push('/api/repo-github');
            }}>
            Login GitHub
          </span>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground-1 shadow-lg rounded-md outline-none'>
            <AddNewRepository handleClose={handleClose} />
          </div>
        </Modal>
      </div>
      <div className='flex flex-wrap justify-between mt-5'>
        {currentUserInfo?.repositories?.length === 0 ? (
          <>No repos</>
        ) : (
          currentUserInfo?.repositories.map((item, index) => {
            return <RepositoryItem item={item} key={index} />;
          })
        )}
      </div>
    </div>
  );
}
