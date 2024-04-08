'use client';

import { useTranslations } from 'next-intl';
import { FaSearch } from 'react-icons/fa';

export default function SearchChat() {
  const t = useTranslations();

  return (
    <div className='relative mt-4'>
      <div className='absolute left-3 bottom-1/2 translate-y-1/2 flex'>
        <FaSearch className='text-xl' />
      </div>
      <input
        type='text'
        placeholder={t('Search')}
        className='w-full !pl-10 !py-2 !rounded-lg bg-foreground-1'
      />
    </div>
  );
}