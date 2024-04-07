import createMiddleware from 'next-intl/middleware';

import { localePrefix } from '@/navigation';
import { locales } from '@/i18n';
import { MiddlewareFactory } from './types';
import { DEFAULT_LANGUAGE } from '@/lib/constants/SettingSystem';

export const withIntl: MiddlewareFactory = (next) => {
  return createMiddleware({
    locales,
    defaultLocale: DEFAULT_LANGUAGE,
    localePrefix
  });
};
