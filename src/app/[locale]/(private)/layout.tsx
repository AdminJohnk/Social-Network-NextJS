'use client';

import { ChatService, PresenceService } from '@/components/ActiveService';
import LoadingLogo from '@/components/shared/LoadingLogo';
import PhotoProvider from '@/components/shared/PhotoProvider';
import { useCurrentUserInfo } from '@/hooks/query';

export interface IPrivateLayoutProps {
  children: React.ReactNode;
}

export default function PrivateLayout({ children }: IPrivateLayoutProps) {
  const { isLoadingCurrentUserInfo } = useCurrentUserInfo();

  return (
    <>
      {isLoadingCurrentUserInfo ? (
        <LoadingLogo />
      ) : (
        <PhotoProvider>
          <ChatService />
          <PresenceService />
          {children}
        </PhotoProvider>
      )}
    </>
  );
}
