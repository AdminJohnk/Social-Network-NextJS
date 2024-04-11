'use client';

import * as React from 'react';
import { useCurrentUserInfo } from '@/hooks/query';
import { useSession } from 'next-auth/react';
import { Avatar } from '@mui/material';
import { getImageURL } from '@/lib/utils';
import { Tabs, TabTitle } from '@/components/ui/tabs';

export interface ITabCoverProps {}

export default function TabCover(props: ITabCoverProps) {
  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');
  return (
    <div className='rounded-xl border border-border-1 bg-foreground-1 shadow-sm'>
      <div className='flex relative space-y-4'>
        <div className='flex-start gap-4 p-8'>
          <div className='relative md:w-20 md:h-20 w-12 h-12 shrink-0'>
            <label htmlFor='file' className='cursor-pointer'>
              <Avatar
                sx={{ width: 80, height: 80 }}
                src={getImageURL(currentUserInfo?.user_image)}
              />
              <input type='file' id='file' className='hidden' />
            </label>

            <label
              htmlFor='file'
              className='md:p-1 p-0.5 rounded-full bg-slate-600 md:border-4 border-white absolute -bottom-2 -right-2 cursor-pointer dark:border-slate-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='md:w-4 md:h-4 w-3 h-3 fill-white'
              >
                <path d='M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z'></path>
                <path
                  fillRule='evenodd'
                  d='M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z'
                  clipRule='evenodd'
                ></path>
              </svg>

              <input id='file' type='file' className='hidden' />
            </label>
          </div>
          <div className='flex flex-col'>
            <span className='h5-bold mb-2'>{currentUserInfo?.name}</span>
            <span className='small-regular text-text-2'>
              @{currentUserInfo?.name}
            </span>
          </div>
        </div>
      </div>

      <hr className='m-0 border-t border-gray-100 dark:border-slate-700' />

      <Tabs id='setting_tab' disableChevron>
        <TabTitle>General</TabTitle>
        <TabTitle>Social links</TabTitle>
        <TabTitle>Expertise</TabTitle>
        <TabTitle>Experience</TabTitle>
        <TabTitle>Repository</TabTitle>
        <TabTitle>Password</TabTitle>
      </Tabs>
    </div>
  );
}
