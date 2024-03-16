import FloatTool from '@/components/shared/FloatTool/FloatTool';
import Header from '@/components/shared/Header';
import SideBar from '@/components/shared/SideBar';
import ToTop from '@/components/shared/ToTop';
import { unstable_setRequestLocale } from 'next-intl/server';

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
        {children}
        <ToTop />
      </div>
    </main>
  );
}
