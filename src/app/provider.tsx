'use client';

import React, { useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ErrorResponse } from '@/types';

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            retry: 1,
            refetchOnWindowFocus: false,
            throwOnError: (error) => {
              const errorResponse = error as ErrorResponse;

              if (errorResponse?.response?.status === 401) {
                return true;
              }

              return false;
            }
          }
        }
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ProgressBar color='#00b7ff' />
      <HydrationBoundary>{children}</HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
    </QueryClientProvider>
  );
};

export { SessionProvider };
