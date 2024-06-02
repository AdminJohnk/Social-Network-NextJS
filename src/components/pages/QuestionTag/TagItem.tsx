import { cn } from '@/lib/utils';
import { Pagination } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export interface ITagItemProps {}

export default function TagItem(props: ITagItemProps) {
  const t = useTranslations();

  const today = 56;
  const week = 695;
  return (
    <div className='border border-border-1 px-3 py-4 rounded-md'>
      <div className='flex-between'>
        <span className='px-2 py-1 bg-1 rounded-md font-semibold'>
          javascript
        </span>
        <div>{'253104' + ' ' + t('questions')}</div>
      </div>
      <div className='mt-3'>
        {today + ' ' + t('asked today') + ', ' + week + ' ' + 'this week'}
      </div>
    </div>
  );
}
