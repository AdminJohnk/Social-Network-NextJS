import { unstable_setRequestLocale } from 'next-intl/server';

import FloatTool from '@/components/shared/FloatTool';
import ToTop from '@/components/shared/ToTop';

export interface IPrivateLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function PrivateLayout({ children, params: { locale } }: IPrivateLayoutProps) {
  unstable_setRequestLocale(locale);
  return (
    <main className='flex-center w-full'>
      <div className='h-full w-1/2 max-md:w-11/12'>
        <FloatTool />
        {children}
        <ToTop />
      </div>
    </main>
  );
}
