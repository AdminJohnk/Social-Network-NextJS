import { ChatService, PresenceService } from '@/components/ActiveService';

export interface IPrivateLayoutProps {
  children: React.ReactNode;
}

export default function PrivateLayout({ children }: IPrivateLayoutProps) {
  return (
    <>
      <ChatService />
      <PresenceService />
      {children}
    </>
  );
}
