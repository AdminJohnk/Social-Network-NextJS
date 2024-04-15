import createMiddleware from 'next-intl/middleware';
import { NextFetchEvent, NextRequest } from 'next/server';

import { localePrefix } from '@/navigation';
import { DEFAULT_LANGUAGE, LIST_LANGUAGE } from '@/lib/utils/constants/SettingSystem';
import { MiddlewareFactory } from './types';

export const withIntl: MiddlewareFactory = (next) => async (req: NextRequest, _next: NextFetchEvent) =>
  createMiddleware({
    locales: LIST_LANGUAGE,
    defaultLocale: DEFAULT_LANGUAGE,
    localePrefix
  })(req);
