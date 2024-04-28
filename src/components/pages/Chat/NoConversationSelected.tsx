'use client';

import { useTranslations } from 'next-intl';

export default function NoConversationSelected() {
  const t = useTranslations();
  return <div className='w-full h-dvh flex-center h3-semibold'>{t('Select a conversation to start chatting')}</div>;
}
