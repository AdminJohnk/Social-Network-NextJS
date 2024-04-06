import createMiddleware from 'next-intl/middleware';

import { localePrefix } from '@/navigation';
import { locales } from '@/i18n';
import { MiddlewareFactory } from './types';

export const withIntl: MiddlewareFactory = (next) =>
  createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix
  });
