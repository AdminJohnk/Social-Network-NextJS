'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import Modal from '@mui/material/Modal';
import { useSession } from 'next-auth/react';
import { useRouter as useRouterNext } from 'next/navigation';
import { Link, useRouter } from '@/navigation';

import { useCurrentUserInfo } from '@/hooks/query';
import RepositoryItem from '@/components/shared/Repository/Repository';
import AddNewRepository from './AddNewRepository';
import { BiSolidEdit } from 'react-icons/bi';

export interface IRepositoryTabProps {}

export default function RepositoryTab(props: IRepositoryTabProps) {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const { data: session, update } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');
  const router = useRouter();
  const routerNext = useRouterNext();

  const [isLoginGithub, setIsLoginGithub] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (searchParams.get('repoUrl')) {
      (async () =>
        await update({
          ...session,
          repos_url: searchParams.get('repoUrl'),
          user_github_name: searchParams.get('userGithubName'),
          user_github_link: searchParams.get('userGithubLink')
        }).then(() => router.replace('/edit-profile?tab=repository')))();
    }
  }, [searchParams]);

  useEffect(() => {
    if (session?.repos_url) {
      setIsLoginGithub(true);
    }
  }, [session]);

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className='mb-10'>
        {isLoginGithub ? (
          <div className='flex-start text-text-2'>
            <div>
              <span>Login with account: </span>
              <Link
                href={session?.user_github_link || ''}
                className='text-primary-500 hover:text-primary-600 duration-300 cursor-pointer'
                target='_blank'>
                {session?.user_github_name}
              </Link>
            </div>
            <span className='mx-2'>|</span>
            <button
              className='hover:text-text-1 cursor-pointer duration-300'
              disabled={isDisabled}
              onClick={() => {
                update({
                  repos_url: '',
                  user_github_name: '',
                  user_github_link: ''
                });
                setIsDisabled(true);
                setIsLoginGithub(false);
              }}>
              Logout
            </button>
            <span className='ml-auto' onClick={handleOpen}>
              <BiSolidEdit className='size-5 hover:text-text-1 duration-300 cursor-pointer' />
            </span>
          </div>
        ) : (
          <button
            className='px-3 py-2 rounded-md cursor-pointer duration-300 bg-foreground-2 hover:bg-hover-2'
            disabled={isDisabled}
            onClick={() => {
              routerNext.push('/api/repo-github');
              setIsDisabled(true);
            }}>
            Login GitHub
          </button>
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
        {currentUserInfo.repositories?.length === 0 ? (
          <>No repos</>
        ) : (
          currentUserInfo.repositories.map((item, index) => {
            return <RepositoryItem item={item} key={index} />;
          })
        )}
      </div>
    </div>
  );
}
