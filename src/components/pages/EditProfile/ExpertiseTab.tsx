'use client';

import { useMemo, useState } from 'react';
import { useCurrentUserInfo } from '@/hooks/query';
import { Button } from '@/components/ui/button';
import descArrays from '@/lib/descriptions/Tags';
import { cn } from '@/lib/utils';
import { useUpdateUser } from '@/hooks/mutation';
import { CircularProgress } from '@mui/material';
import { showSuccessToast } from '@/components/ui/toast';
import { useTranslations } from 'next-intl';

export default function ExpertiseTab() {
  const t = useTranslations();
  const { currentUserInfo } = useCurrentUserInfo();
  const [addTagArr, setAddTagArr] = useState<string[]>(currentUserInfo.tags || []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mutateUpdateUser } = useUpdateUser();

  async function onSubmit() {
    setIsLoading(true);
    const updateResult = await mutateUpdateUser({
      tags: addTagArr
    });

    setIsLoading(false);

    showSuccessToast(t('Your profile has been updated successfully!'));

    // OK
    if (updateResult) {
      // Show success notification
    } else {
      // Set error
    }
  }

  const isChanged = useMemo(
    () => JSON.stringify(addTagArr) !== JSON.stringify(currentUserInfo.tags),
    [addTagArr, currentUserInfo.tags]
  );

  return (
    <div className='flex-center flex-col'>
      <div className='flex flex-wrap gap-4'>
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

      <div className='flex items-center justify-center gap-4 mt-10'>
        <Button
          type='submit'
          className={cn(
            'button lg:px-6 text-white max-md:flex-1',
            (!isChanged || isLoading) && 'select-none'
          )}
          onClick={onSubmit}
          disabled={!isChanged || isLoading}>
          {isLoading && <CircularProgress size={20} className='!text-text-1 mr-2' />}
          {t('Save')} <span className='ripple-overlay'></span>
        </Button>
      </div>
    </div>
  );
}
