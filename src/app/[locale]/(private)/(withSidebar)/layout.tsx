import { unstable_setRequestLocale } from 'next-intl/server';

import FloatTool from '@/components/shared/FloatTool';
import Header from '@/components/shared/Header';
import SideBar from '@/components/shared/SideBar';
import ToTop from '@/components/shared/ToTop';
import { ChatService, PresenceService } from '@/components/ActiveService';

export interface IPrivateLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function PrivateLayout({ children, params: { locale } }: IPrivateLayoutProps) {
  unstable_setRequestLocale(locale);

  return (
    <main className='w-full overflow-hidden'>
      <ChatService />
      <PresenceService />

      <Header />
      <SideBar />
      <div className='h-full'>
        <FloatTool />
        {children}
        <ToTop />
      </div>
    </main>
  );
}
