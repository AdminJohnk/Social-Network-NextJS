'use client';

import { useTransition } from 'react';
import { IoLanguage, IoLanguageOutline } from 'react-icons/io5';
import { useTranslations, useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { usePathname, useRouter } from '@/navigation';
import { cn } from '@/lib/utils';

interface ILanguageProps {
  className?: string;
  position?: 'bottom-right' | 'right-bottom';
  arrow?: boolean;
  withText?: boolean;
  tooltip?: boolean;
}

export default function Language({
  className,
  position = 'bottom-right',
  arrow = true,
  withText = false,
  tooltip = true
}: ILanguageProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const params = new URLSearchParams(searchParams.toString()).toString();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`${pathname}?${params || ''}`, { locale: nextLocale });
    });
  };

  return (
    <>
      <button
        type='button'
        className={cn('sm:p-2 p-1 rounded-full relative sm:bg-foreground-1', className)}
        data-uk-tooltip={tooltip && `title: ${t('Change language')}; pos: bottom; offset:6`}>
        <IoLanguage className='w-5 h-5 max-sm:hidden' />
        <IoLanguageOutline className='sm:hidden text-2xl' />
        {withText && t('Change language')}
      </button>

      <div
        className='hidden bg-foreground-2 rounded-lg drop-shadow-xl md:w-[250px] w-screen border-border-1'
        data-uk-drop={`offset:6;pos: ${position}; mode: click; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right `}>
        <div className='flex items-center justify-between p-4 pb-1'>
          <h3 className='font-bold text-xl text-text-1'>{t('Change language')}</h3>
        </div>

        <ul
          className='p-2 text-xs hover:*:bg-hover-2 *:p-2 *:rounded-lg *:cursor-pointer *:duration-300 space-y-2'
          data-uk-scrollspy='target: > li; cls: uk-animation-scale-up , uk-animation-slide-bottom-small ;repeat: true'>
          <li
            className={cn(
              'font-medium text-sm',
              isPending && 'cursor-not-allowed opacity-30',
              locale === 'vi' && 'text-blue-500 bg-hover-2'
            )}
            onClick={() => onSelectChange('vi')}>
            Tiếng Việt
          </li>
          <li
            className={cn(
              'font-medium text-sm',
              isPending && 'cursor-not-allowed opacity-30',
              locale === 'en' && 'text-blue-500 bg-hover-2'
            )}
            onClick={() => onSelectChange('en')}>
            English
          </li>
          <li
            className={cn(
              'font-medium text-sm',
              isPending && 'cursor-not-allowed opacity-30',
              locale === 'zh' && 'text-blue-500 bg-hover-2'
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
