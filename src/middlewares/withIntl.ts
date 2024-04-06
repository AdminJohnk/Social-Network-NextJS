import createMiddleware from 'next-intl/middleware';

import { localePrefix } from '@/navigation';
import { MiddlewareFactory } from './types';
import { DEFAULT_LANGUAGE, LIST_LANGUAGE } from '@/lib/constants/SettingSystem';

export const withIntl: MiddlewareFactory = (next) => {
  return createMiddleware({
    locales: LIST_LANGUAGE,
    defaultLocale: DEFAULT_LANGUAGE,
    localePrefix
  });
};
