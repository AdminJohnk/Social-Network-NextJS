'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import Modal from '@mui/material/Modal';
import { useSession } from 'next-auth/react';
import { useRouter as useRouterNext } from 'next/navigation';
import { Link, useRouter } from '@/navigation';
import { CircularProgress } from '@mui/material';
import { BiSolidEdit } from 'react-icons/bi';

import { useCurrentUserInfo } from '@/hooks/query';
import RepositoryItem from '@/components/shared/Repository/Repository';
import { Button } from '@/components/ui/button';
import AddNewRepository from './AddNewRepository';

export default function RepositoryTab() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const { data: session, update } = useSession();
  const { currentUserInfo } = useCurrentUserInfo();
  const router = useRouter();
  const routerNext = useRouterNext();

  const [isLoginGithub, setIsLoginGithub] = useState<boolean>(false);

  useEffect(() => {
    if (searchParams.get('repoUrl')) {
      (async () => {
        if (
          searchParams.get('repoUrl') &&
          searchParams.get('userGithubName') &&
          searchParams.get('userGithubLink')
        ) 
          await update({
            ...session,
            repos_url: searchParams.get('repoUrl'),
            user_github_name: searchParams.get('userGithubName'),
            user_github_link: searchParams.get('userGithubLink')
          }).then(() => router.replace('/edit-profile?tab=repository'));
      })();
    }
  }, [searchParams]);

  useEffect(() => {
    if (session?.repos_url) {
      setIsLoginGithub(true);
    }
  }, [session]);

  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isLoadingLogout, setIsLoadingLogout] = useState(false);

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
            <Button
              variant='destructive'
              disabled={isLoadingLogout}
              onClick={async () => {
                setIsLoadingLogout(true);
                await update({
                  repos_url: '',
                  user_github_name: '',
                  user_github_link: ''
                }).then(() => {
                  setIsLoadingLogout(false);
                  setIsLoginGithub(false);
                });
              }}>
              {isLoadingLogout && <CircularProgress size={20} className='!text-text-1 mr-2' />}
              Logout
            </Button>
            <span className='ml-auto' onClick={handleOpen}>
              <BiSolidEdit className='size-5 hover:text-text-1 duration-300 cursor-pointer' />
            </span>
          </div>
        ) : (
          <Button
            disabled={isLoadingLogin}
            onClick={() => {
              setIsLoadingLogin(true);
              routerNext.push('/api/repo-github');
            }}>
            {isLoadingLogin && <CircularProgress size={20} className='!text-text-1 mr-2' />}
            Login GitHub
          </Button>
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
          currentUserInfo.repositories.map((item, index) => <RepositoryItem item={item} key={index} />)
        )}
      </div>
    </div>
  );
}
