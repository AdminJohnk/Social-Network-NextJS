'use client';

import Nodata from '@/components/shared/Nodata';
import Repository from '@/components/shared/Repository/Repository';
import { useOtherUserInfo } from '@/hooks/query';
import { Skeleton } from '@mui/material';
import * as React from 'react';
import { RiGitRepositoryLine } from 'react-icons/ri';

export interface IRepositoryTabProps {
  profileID: string;
}

export default function RepositoryTab({ profileID }: IRepositoryTabProps) {
  const { otherUserInfo, isLoadingOtherUserInfo } = useOtherUserInfo(profileID);

  return (
    <div className='bg-foreground-1 my-8 w-full rounded-md'>
      {isLoadingOtherUserInfo ? (
        <div className='flex-center flex-wrap px-10 py-8 gap-10 w-full'>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className='w-[calc(50%-2.5rem)] border-b border-border-1 pb-3'>
              <div
                className='mb-5 border-b border-border-1'
                style={{
                  width: '48%'
                }}
              >
                <div className='top flex-start'>
                  <RiGitRepositoryLine className='text-text-1 size-6' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} className='!w-full !bg-foreground-2' />
                  <Skeleton variant="rounded" className='!w-full !bg-foreground-2' />
                </div>
                <div className='bottom mt-3 flex items-center text-text-2'>
                  <div className='language mr-4 flex items-center'>
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} className='!w-full !bg-foreground-2' />
                  </div>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} className='!w-full !bg-foreground-2' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} className='!w-full !bg-foreground-2' />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) :
        otherUserInfo?.repositories.length <= 0 ? (
          <div className='w-full px-10 py-8 flex-center'>
            <Nodata width={150} height={150} title={'No repository found'}></Nodata>
          </div>
        ) : (
          <div className='flex flex-wrap px-10 py-8 gap-10 w-full'>
            {otherUserInfo?.repositories.map((repo) => (
              <div key={repo.id} className='w-[calc(50%-2.5rem)] border-b border-border-1 pb-3'>
                <Repository key={repo.id} item={repo} />
              </div>
            ))}
          </div>
        )}
    </div>
  );
}
