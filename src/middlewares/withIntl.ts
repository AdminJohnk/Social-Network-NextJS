import createMiddleware from 'next-intl/middleware';

import { localePrefix } from '@/navigation';
import { MiddlewareFactory } from './types';

export const withIntl: MiddlewareFactory = (next) => {
  return createMiddleware({
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    localePrefix
  });
};
