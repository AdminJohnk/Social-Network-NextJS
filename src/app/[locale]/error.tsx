'use client';

import { signOut } from 'next-auth/react';

import LoadingLogo from '@/components/shared/LoadingLogo';
import { ErrorResponse } from '@/types';

export default function Error({ error }: { error: ErrorResponse & { digest?: string }; reset: () => void }) {
  if (
    error?.response?.data?.message?.includes('invalid') ||
    error?.response?.data?.message?.includes('expired')
  ) {
    signOut();
    return <LoadingLogo />;
  }

  return <div className='flex-center h1-bold w-full h-full'>Lỗi mẹ rồi, ok!!!!</div>;
}
