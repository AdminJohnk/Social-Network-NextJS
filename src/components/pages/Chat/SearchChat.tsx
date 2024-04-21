'use client';

import { useTranslations } from 'next-intl';
import { IoSearchOutline } from 'react-icons/io5';

interface ISearchChatProps {
  setSearch: (value: string) => void;
}

export default function SearchChat({ setSearch }: ISearchChatProps) {
  const t = useTranslations();

  return (
    <div className='relative mt-4'>
      <div className='absolute left-3 bottom-1/2 translate-y-1/2 flex'>
        <IoSearchOutline className='text-xl' />
      </div>
      <input
        type='text'
        placeholder={t('Search')}
        className='w-full !pl-10 !py-2 !rounded-lg bg-foreground-1'
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
