'use client';

import Image from 'next/image';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Children, useMemo } from 'react';

import { useConversationsData, useCurrentUserInfo } from '@/hooks/query';
import { Sidebar } from '@/lib/navigator/Sidebar';
import { cn } from '@/lib/utils';

export default function MainNavigate() {
  const t = useTranslations();
  const pathName = usePathname();

  const { currentUserInfo } = useCurrentUserInfo();
  const { conversations } = useConversationsData();

  const notSeenCount = useMemo(() => {
    if (!currentUserInfo || !conversations) return 0;
    return conversations.reduce((count, conversation) => {
      if (
        conversation.lastMessage.seen.some((user) => user._id === currentUserInfo._id) ||
        conversation.lastMessage?.sender?._id === currentUserInfo._id ||
        !conversation.lastMessage
      )
        return count;

      return count + 1;
    }, 0);
  }, [conversations, currentUserInfo]);

  return (
    <nav id='side'>
      <ul>
        {Children.toArray(
          Sidebar.map((item) => (
            <li id={cn(item.showMore && 'show_more')} className={cn(item.showMore && '!hidden', 'my-1')}>
              <Link
                href={item.href}
                className={cn(
                  'duration-300 flex-between',
                  (pathName === item.href || (pathName.startsWith(item.href) && item.href !== '/')) &&
                    'bg-foreground-1'
                )}>
                <div className='flex-start gap-3'>
                  <Image src={item.image} alt={item.label} width={24} height={24} />
                  <span> {t(item.label)} </span>
                </div>
                {item.href === '/messages' && notSeenCount > 0 && (
                  <span className='bg-red-700 rounded-md px-1'>{notSeenCount}</span>
                )}
              </Link>
            </li>
          ))
        )}
      </ul>

      {/* <button
        type='button'
        className='flex items-center gap-4 py-2 px-4 w-full font-medium text-sm text-text-1'
        data-uk-toggle='target: #show_more; cls: !hidden uk-animation-fade'>
        <svg
          id='show_more'
          className='bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
        <svg
          id='show_more'
          className='bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700 rotate-180 !hidden'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
        <span id='show_more'> {t('See More')} </span>
        <span className='!hidden' id='show_more'>
          {t('See Less')}
        </span>
      </button> */}
    </nav>
  );
}
