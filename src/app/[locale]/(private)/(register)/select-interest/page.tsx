'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import descArrays from '@/lib/descriptions/Tags';
import SlideHeader from '@/components/pages/Register/SlideHeader';
import { Button } from '@/components/ui/button';
import { useRouter } from '@/navigation';
import { useUpdateUser } from '@/hooks/mutation';
import { useCurrentUserInfo } from '@/hooks/query';
import { showErrorToast } from '@/components/ui/toast';
import { CircularProgress } from '@mui/material';

export interface ISelectInterestedProps {
}

export default function SelectInterested({ }: ISelectInterestedProps) {
  const t = useTranslations();
  const router = useRouter();
  const { currentUserInfo } = useCurrentUserInfo();
  const { mutateUpdateUser, isLoadingUpdateUser } = useUpdateUser();

  const [addTagArr, setAddTagArr] = useState<string[]>(currentUserInfo.tags || []);

  const isChanged = useMemo(
    () => JSON.stringify(addTagArr) !== JSON.stringify(currentUserInfo.tags),
    [addTagArr, currentUserInfo.tags]
  );

  const handleSetTags = async () => {

    if (!isChanged) {
      router.push('/select-communities');
      return;
    }
    await mutateUpdateUser({
      tags: addTagArr
    }, {
      onSuccess: () => {
        router.push('/select-communities');
      },
      onError: () => {
        showErrorToast('Error updating tags!');
      }
    });
  }

  return (
    <div>
      <SlideHeader step={2} canRoute={addTagArr.length > 5 && !isChanged} />
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
            <Button onClick={handleSetTags} disabled={addTagArr.length < 5 || isLoadingUpdateUser}>
              {isLoadingUpdateUser && <CircularProgress size={20} className='!text-text-1 mr-2' />}
              {t('Save and Continue')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
