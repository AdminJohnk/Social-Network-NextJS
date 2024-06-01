'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import descArrays from '@/lib/descriptions/Tags';
import SlideHeader from '@/components/pages/Register/SlideHeader';
import { Button } from '@/components/ui/button';
import { useRouter } from '@/navigation';

export interface ISelectInterestedProps {
}

export default function SelectInterested({ }: ISelectInterestedProps) {
  const t = useTranslations();
  const router = useRouter();

  const [addTagArr, setAddTagArr] = useState<string[]>([]);


  return (
    <div>
      <SlideHeader step={2} />
      <div className='mt-4'>
        <span className='font-bold text-3xl max-md:text-lg'> {t('Select your interest')}</span>
        <p className='mt-2 text-white/75'>
          {t('Choose at least 5 interest to get started')}.
        </p>

        <div className='flex flex-wrap gap-4 mt-3'>
          {descArrays.map((item, index) => (
            <div
              key={index}
              className={cn(
                'itemTag border-[0.5px] border-border-1 select-none px-4 py-2',
                addTagArr.indexOf(item.title) !== -1 && 'bg-foreground-2'
              )}
              onClick={() => {
                if (addTagArr.includes(item.title)) {
                  setAddTagArr(addTagArr.filter((tag) => tag !== item.title));
                  return;
                } else {
                  setAddTagArr([...addTagArr, item.title]);
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

        <div className='mt-2 flex justify-end p-4'>
          <div className='*:mr-2'>
            <Button variant={'ghost'} onClick={() => router.push('/get-started')}>{t('Back')}</Button>
            <Button onClick={() => router.push('/select-communities')} disabled={addTagArr.length < 5}>{t('Continue')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
