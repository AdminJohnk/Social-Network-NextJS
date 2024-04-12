'use client';

import { useGetRepository } from '@/hooks/query';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

export interface IAddNewRepositoryProps {}

export default function AddNewRepository(props: IAddNewRepositoryProps) {
  const { repository, isLoadingRepository } = useGetRepository();

  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.access_token_github) {
      signIn('github', {}, {type: 'repos11'});
    }
  }, [session]);

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground-1 border border-border-1 shadow-lg min-w-[300px]'>
      <div>Con heo</div>
    </div>
  );
}
