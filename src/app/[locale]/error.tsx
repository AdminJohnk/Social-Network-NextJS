'use client';

import { useEffect } from 'react';

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {}, [error]);

  return <div className='flex-center h1-bold w-full h-full'>Lỗi mẹ rồi, ok!!!!</div>;
}
