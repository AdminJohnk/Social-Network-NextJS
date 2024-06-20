'use client';

import { } from 'react';
import { FaTags } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';
import descArrays from '@/lib/descriptions/Tags';
import { cn } from '@/lib/utils';
import { DescArray } from '@/types';

export interface IPostTagsProps {
  tags: DescArray[];
  setTags: (tags: DescArray[]) => void;
}

export default function PostTags({ tags, setTags }: IPostTagsProps) {
  const t = useTranslations();
  return (
    <div>
      <button
        type='button'
        className='flex items-center gap-1.5 bg-teal-50 hover:bg-teal-200 text-teal-600 rounded-full py-1 px-2 border-2 border-teal-100 dark:bg-teal-950 dark:hover:bg-teal-900 dark:border-teal-900'>
        <FaTags className='text-base' />
        {t('Tags')}
      </button>
      <div data-uk-drop='offset: 6; pos: right-right; mode: click; shift: false; flip: false; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-left'>
        <div className='p-2 bg-foreground-1 rounded-lg shadow-lg *:px-4 *:py-1.5 hover:*:bg-hover-1 *:cursor-pointer *:rounded-lg max-h-[480px] overflow-auto custom-scrollbar-fg'>
          {descArrays.map((item, index) => (
            <div
              key={index}
              className={cn(
                'itemTag border-[0.5px] border-border-1 select-none px-4 py-2 my-1',
                tags.indexOf(item) !== -1 && 'bg-foreground-2'
              )}
              onClick={() => {
                if (tags.includes(item)) {
                  setTags(tags.filter((tag) => tag !== item));
                  return;
                } else {
                  setTags([...tags, item]);
                  return;
                }
              }}>
              <div className='flex-start'>
                <span className='*:size-5 mr-2'>{item.svg}</span>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
