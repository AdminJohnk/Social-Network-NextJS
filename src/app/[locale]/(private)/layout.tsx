'use client';

import { useSession } from 'next-auth/react';

import { ChatService, PresenceService } from '@/components/ActiveService';
import LoadingLogo from '@/components/shared/LoadingLogo';
import { useCurrentUserInfo } from '@/hooks/query';

export interface IPrivateLayoutProps {
  children: React.ReactNode;
}

export default function PrivateLayout({ children }: IPrivateLayoutProps) {
  const { data: session } = useSession();
  const { isLoadingCurrentUserInfo } = useCurrentUserInfo(session?.id || '');

  return (
    <>
      {isLoadingCurrentUserInfo ? (
        <LoadingLogo />
      ) : (
        <>
          <ChatService />
          <PresenceService />
          {children}
        </>
      )}
    </>
  );
}
