'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useUpdateUser } from '@/hooks/mutation';
import { useSession } from 'next-auth/react';
import { useCurrentUserInfo } from '@/hooks/query';
import RenderRepositoryIem from '@/components/shared/RenderRepositoryIem/RenderRepositoryIem';

export interface IRepositoryTabProps {}

export default function RepositoryTab(props: IRepositoryTabProps) {
  const t = useTranslations();
  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateUpdateUser } = useUpdateUser();

  return (
    <div className='flex flex-wrap justify-between mt-5'>
      {currentUserInfo.repositories.map((item, index) => {
        return RenderRepositoryIem(item, index);
      })}
    </div>
  );
}
