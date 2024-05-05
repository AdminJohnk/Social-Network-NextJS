'use client';

import { useTransition } from 'react';
import { IoLanguage, IoLanguageOutline } from 'react-icons/io5';
import { useTranslations, useLocale } from 'next-intl';

import { useRouter } from '@/navigation';
import { cn } from '@/lib/utils';

interface ILanguageProps {
  className?: string;
  position?: 'bottom-right' | 'right-bottom';
  animation?: 'top-right' | 'bottom-left';
  arrow?: boolean;
  withText?: boolean;
  tooltip?: boolean;
}

export default function Language({
  className,
  position = 'bottom-right',
  animation = 'top-right',
  arrow = true,
  withText = false,
  tooltip = true
}: ILanguageProps) {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
      router.refresh();
    });
  };

  return (
    <>
      <button
        type='button'
        className={cn('sm:p-2 p-1 rounded-full relative sm:bg-foreground-1', className)}
        data-uk-tooltip={
          tooltip ? `title: ${t('Change language')}; pos: bottom; offset:6; delay: 300` : undefined
        }>
        <IoLanguage className='w-5 h-5 max-sm:hidden' />
        <IoLanguageOutline className='sm:hidden text-2xl' />
        {withText && t('Change language')}
      </button>

      <div
        className='hidden bg-foreground-2 rounded-lg drop-shadow-xl md:w-[250px] w-screen border-border-1'
        data-uk-drop={`offset:6;pos: ${position}; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-${animation} `}>
        <div className='flex items-center justify-between p-4 pb-1'>
          <h3 className='font-bold text-xl text-text-1'>{t('Change language')}</h3>
        </div>

        <ul
          className='p-2 text-xs hover:*:bg-hover-1 *:p-2 *:rounded-lg *:cursor-pointer *:duration-300 space-y-2'
          data-uk-scrollspy='target: > li; cls: uk-animation-scale-up , uk-animation-slide-bottom-small ;repeat: true'>
          <li
            className={cn(
              'font-medium text-sm',
              isPending && 'cursor-not-allowed opacity-30',
              locale === 'vi' && 'text-blue-500 select-none !cursor-default bg-hover-1'
            )}
            onClick={() => onSelectChange('vi')}>
            Tiếng Việt
          </li>
          <li
            className={cn(
              'font-medium text-sm',
              isPending && 'cursor-not-allowed opacity-30',
              locale === 'en' && 'text-blue-500 select-none !cursor-default bg-hover-1'
            )}
            onClick={() => onSelectChange('en')}>
            English
          </li>
          <li
            className={cn(
              'font-medium text-sm',
              isPending && 'cursor-not-allowed opacity-30',
              locale === 'zh' && 'text-blue-500 select-none !cursor-default bg-hover-1'
            )}
            onClick={() => onSelectChange('zh')}>
            中文 – 简体
          </li>
        </ul>

        {arrow && (
          <div className='w-3 h-3 absolute -top-1.5 right-3 border-l border-t rotate-45 max-md:hidden bg-foreground-2 dark:border-transparent' />
        )}
      </div>
    </>
  );
}
