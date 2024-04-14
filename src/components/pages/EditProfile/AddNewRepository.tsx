'use client';

import { useCurrentUserInfo, useGetRepository } from '@/hooks/query';
import { useSession } from 'next-auth/react';
import { useMemo, useState } from 'react';
import GithubColors from 'github-colors';
import { IRepository } from '@/types';
import { IoStar } from 'react-icons/io5';
import { BiGitRepoForked } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Checkbox, CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useUpdateUser } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

export interface IAddNewRepositoryProps {
  handleClose: () => void;
}

export default function AddNewRepository({ handleClose }: IAddNewRepositoryProps) {
  const t = useTranslations();
  const { data: session } = useSession();

  const { repositories, isLoadingRepositories } = useGetRepository(session?.repos_url || '');

  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');
  const [newRepositories, setNewRepositories] = useState<IRepository[]>(currentUserInfo.repositories);

  const { mutateUpdateUser } = useUpdateUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit() {
    setIsLoading(true);

    const updateResult = await mutateUpdateUser({
      repositories: newRepositories
    });

    setIsLoading(false);

    showSuccessToast(t('Your repository has been updated successfully!'));

    // OK
    if (updateResult) {
      // Show success notification
    } else {
      // Set error
      showErrorToast(t('Failed to update your profile!'));
    }

    handleClose();
  }

  const isChanged = useMemo(
    () =>
      currentUserInfo.repositories.length != newRepositories.length ||
      currentUserInfo.repositories.some((repo) => {
        return !newRepositories.some((newRepo) => {
          return newRepo.id == repo.id;
        });
      }),
    [newRepositories, currentUserInfo.repositories]
  );

  const RenderItemRepos = (item: IRepository, index: number) => {
    const colorLanguage = GithubColors.get(item.languages)?.color;
    return (
      <div
        className={cn(
          'repositoriesItem px-3 py-4 flex justify-between items-center border border-border-1 h-[100px]',
          index === 0 && 'border-t border-border-1'
        )}
        key={index}>
        <div className='left flex flex-col'>
          <div className='top'>
            <span className='name font-semibold'>{item.name}</span>
            <span
              className='rounded-lg ml-3 text-text-2 small-regular px-1 py-2 border border-text-3'
              style={{
                padding: '0.1rem 0.5rem'
              }}>
              {item.private ? 'Private' : 'Public'}
            </span>
          </div>
          <div className='bottom flex-start items-center text-text-2'>
            <span className='mr-3 flex-start items-center'>
              <span className='mr-2 text-2xl' style={{ color: colorLanguage }}>
                •
              </span>
              {item.languages}
            </span>
            <span className='star mr-3 flex-start'>
              <IoStar />
              <span className='ml-1'>{item.watchers_count}</span>
            </span>
            <span className='fork flex-start'>
              <BiGitRepoForked />
              <span className='ml-1'>{item.forks_count}</span>
            </span>
          </div>
        </div>
        <div className='right'>
          <Checkbox
            defaultChecked={newRepositories.some((repo) => {
              return repo.id == item.id;
            })}
            onChange={(e) => {
              if (e.target.checked) {
                setNewRepositories([...newRepositories, item]);
              } else {
                setNewRepositories(
                  newRepositories.filter((repo) => {
                    return repo.id != item.id;
                  })
                );
              }
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className='w-[600px] p-7 animate-fade-up'>
      {isLoadingRepositories ? (
        <div className='text-center'>
          <div className='mb-6 h5-semibold'>Select the repositories you want to feature</div>
          <CircularProgress size={30} className='text-text-1' />
        </div>
      ) : (
        <div>
          <div className='mb-6 h5-semibold'>Select the repositories you want to feature</div>
          <div className='max-h-[500px] h-fit overflow-y-scroll custom-scrollbar-fg border border-border-1'>
            {repositories?.map((item, index) => {
              return RenderItemRepos(item, index);
            })}
          </div>
          <div className='mt-6 flex-end'>
            <Button
              className='button lg:px-6 text-white max-md:flex-1'
              disabled={isLoadingRepositories || !isChanged || isLoading}
              onClick={onSubmit}>
              {isLoading && <CircularProgress size={20} className='text-text-1 mr-2' />}
              {t('Save')} <span className='ripple-overlay'></span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
