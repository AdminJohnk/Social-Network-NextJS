'use client';

import { useEffect } from 'react';

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {}, [error]);

  return <>Lỗi mẹ rồi, ok!!!!</>;
}
