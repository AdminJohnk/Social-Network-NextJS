import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

import MainNavigate from './MainNavigate';
import Shortcuts from './Shortcuts';
import SubNavigate from './SubNavigate';

export default function SideBar() {
  const t = useTranslations();

  return (
    <div
      id='site_sidebar'
      className='fixed top-0 left-0 z-50 mt-[--m-top] overflow-hidden transition-transform duration-500 max-lg/2:w-full max-lg/2:-translate-x-full'>
      <div className='p-2 max-lg/2:bg-background-1 shadow-sm sm:w-64 h-[calc(100vh-64px)] relative z-30'>
        <div className='h-full pr-4 overflow-scroll custom-scrollbar-bg'>
          <MainNavigate />
          <Shortcuts />
          <SubNavigate />

          <div className='text-xs font-medium flex flex-wrap gap-2 gap-y-0.5 p-2 mt-2'>
            <Link href='' className='hover:underline'>
              {t('About')}
            </Link>
            <Link href='' className='hover:underline'>
              {t('Blog')}
            </Link>
            <Link href='' className='hover:underline'>
              {t('Careers')}
            </Link>
            <Link href='' className='hover:underline'>
              {t('Support')}
            </Link>
            <Link href='' className='hover:underline'>
              {t('Contact Us')}
            </Link>
            <Link href='' className='hover:underline'>
              {t('Developer')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
