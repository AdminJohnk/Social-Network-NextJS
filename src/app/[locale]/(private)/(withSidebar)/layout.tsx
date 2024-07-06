import { unstable_setRequestLocale } from 'next-intl/server';

import FloatTool from '@/components/shared/FloatTool';
import Header from '@/components/shared/Header';
import SideBar from '@/components/shared/SideBar';
import ToTop from '@/components/shared/ToTop';
import AIChat from '@/components/shared/AIChat';

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
      <Header />
      <SideBar />
      <div className='h-full'>
        <FloatTool />
        <AIChat />
        {children}
        <ToTop />
      </div>
    </main>
  );
}
