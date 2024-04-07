import createMiddleware from 'next-intl/middleware';
import { NextFetchEvent } from 'next/server';

import { localePrefix } from '@/navigation';
import { DEFAULT_LANGUAGE, LIST_LANGUAGE } from '@/lib/constants/SettingSystem';
import { MiddlewareFactory } from './types';

export const withIntl: MiddlewareFactory = (next) => (req: any, _next: NextFetchEvent) =>
  createMiddleware({
    locales: LIST_LANGUAGE,
    defaultLocale: DEFAULT_LANGUAGE,
    localePrefix
  })(req);
