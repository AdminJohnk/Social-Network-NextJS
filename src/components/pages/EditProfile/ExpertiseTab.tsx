'use client';

import React, { useState } from 'react';
import { useCurrentUserInfo } from '@/hooks/query';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import descArrays from '@/lib/descriptions/Tags';
import { cn } from '@/lib/utils';
import { useUpdateUser } from '@/hooks/mutation';
import { CircularProgress } from '@mui/material';
import { showSuccessToast } from '@/components/ui/toast';
import { useTranslations } from 'next-intl';

export interface IExpertiseTabProps {}

export default function ExpertiseTab(props: IExpertiseTabProps) {
  const t = useTranslations();
  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');
  const [addTagArr, setAddTagArr] = useState<string[]>(
    currentUserInfo?.tags || []
  );
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

  return (
    <div className='flex-center flex-col'>
      <div className='flex flex-wrap gap-4'>
        {descArrays.map((item, index) => (
          <div
            key={index}
            className={cn(
              'itemAddTag border-[0.5px] border-border-1 select-none px-4 py-2',
              addTagArr.indexOf(item.title) !== -1 && 'bg-foreground-2'
            )}
            onClick={() => {
              if (addTagArr.includes(item.title)) {
                setAddTagArr(addTagArr.filter(tag => tag !== item.title));
                return;
              } else {
                setAddTagArr([...addTagArr, item.title]);
                return;
              }
            }}
          >
            <div className='flex-start'>
              <span className='*:size-5 mr-2'>{item.svg}</span>
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center gap-4 mt-10'>
        <Button variant='destructive' className='button lg:px-6 max-md:flex-1'>
          Cancel
        </Button>
        <Button
          type='submit'
          className='button lg:px-6 text-white max-md:flex-1'
          onClick={onSubmit}
        >
          {isLoading && (
            <CircularProgress size={20} className='text-text-1 mr-2' />
          )}
          Save <span className='ripple-overlay'></span>
        </Button>
      </div>
    </div>
  );
}
