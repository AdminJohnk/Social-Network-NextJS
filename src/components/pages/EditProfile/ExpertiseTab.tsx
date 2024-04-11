'use client';

import * as React from 'react';
import { useCurrentUserInfo } from '@/hooks/query';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import descArrays from '@/lib/descriptions/Tags';
import { cn } from '@/lib/utils';

export interface IExpertiseTabProps {}

export default function ExpertiseTab(props: IExpertiseTabProps) {
  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');
  return (
    <div className='flex-center flex-col'>
      <div className='flex flex-wrap gap-4'>
        {descArrays.map((item, index) => (
          <div
            key={index}
            className={cn(
              'itemAddTag border-[0.5px] border-border-1 select-none px-4 py-2'
              // addTagArr.indexOf(item.title) !== -1 && 'active'
            )}
            onClick={() => {
              // if (addTagArr.includes(item.title)) {
              //   setAddTagArr(addTagArrTemp.filter((i) => i !== item.title));
              //   return;
              // } else {
              //   setAddTagArr([...addTagArr, item.title]);
              //   addTagArrTemp = [...addTagArr, item.title];
              //   return;
              // }
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
        <Button type='submit' className='button lg:px-6 max-md:flex-1'>
          Save
        </Button>
      </div>
    </div>
  );
}
