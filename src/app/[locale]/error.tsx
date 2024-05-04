'use client';

import { useEffect } from 'react';
import { signOut } from 'next-auth/react';

import { ErrorResponse } from '@/types';

export default function Error({ error }: { error: ErrorResponse & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    if (
      error?.response?.data?.message?.includes('invalid') ||
      error?.response?.data?.message?.includes('expired')
    ) {
      signOut();
    }
  }, [error]);

  return <div className='flex-center h1-bold w-full h-full'>Lỗi mẹ rồi, ok!!!!</div>;
}
