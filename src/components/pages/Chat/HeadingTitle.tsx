'use client';

import { useTranslations } from 'next-intl';

export default function HeadingTitle() {
  const t = useTranslations();

  return <h2 className='text-2xl font-bold text-black ml-1 dark:text-white'> {t('Chats')} </h2>;
}
