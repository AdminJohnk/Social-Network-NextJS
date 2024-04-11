'use client';

import * as React from 'react';
import { useCurrentUserInfo } from '@/hooks/query';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export interface IPasswordTabProps {}

export default function PasswordTab(props: IPasswordTabProps) {
  const { data: session } = useSession();
  return (
    <div>
      <div className='space-y-6'>
        <div className='md:flex items-center gap-16 justify-between max-md:space-y-3'>
          <label className='md:w-40 text-right'> Current Password </label>
          <div className='flex-1 max-md:mt-4'>
            <input
              type='password'
              placeholder='******'
              className='w-full rounded-lg bg-foreground-2 border-none'
            />
          </div>
        </div>

        <div className='md:flex items-center gap-16 justify-between max-md:space-y-3'>
          <label className='md:w-40 text-right'> New password </label>
          <div className='flex-1 max-md:mt-4'>
            <input
              type='password'
              placeholder='******'
              className='w-full rounded-lg bg-foreground-2 border-none'
            />
          </div>
        </div>

        <div className='md:flex items-center gap-16 justify-between max-md:space-y-3'>
          <label className='md:w-40 text-right'> Repeat password </label>
          <div className='flex-1 max-md:mt-4'>
            <input
              type='password'
              placeholder='******'
              className='w-full rounded-lg bg-foreground-2 border-none'
            />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 mt-16'>
        <Button variant='destructive' className='button lg:px-6 max-md:flex-1'>
          Cancel
        </Button>
        <Button
          type='submit'
          className='button lg:px-6 text-white max-md:flex-1'
        >
          Save
        </Button>
      </div>
    </div>
  );
}
