'use client';

import Nodata from '@/components/shared/Nodata';
import Repository from '@/components/shared/Repository/Repository';
import { useOtherUserInfo } from '@/hooks/query';
import * as React from 'react';

export interface IRepositoryTabProps {
  profileID: string;
}

export default function RepositoryTab({ profileID }: IRepositoryTabProps) {
  const { otherUserInfo, isLoadingOtherUserInfo } = useOtherUserInfo(profileID);

  return (
    <div className='bg-foreground-1 my-8 w-full rounded-md'>
      {otherUserInfo?.repositories.length <= 0 ? (
        <div className='w-full px-10 py-8 flex-center'>
          <Nodata
            width={150}
            height={150}
            title={'No repository found'}
          ></Nodata>
        </div>
      ) : (
        <div className='flex flex-wrap px-10 py-8 gap-10 w-full'>
          {otherUserInfo?.repositories.map((repo, index) => (
            <div className='w-[calc(50%-2.5rem)] border-b border-border-1 pb-3'>
              <Repository key={repo.id} item={repo} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
