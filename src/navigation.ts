import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './i18n';

export const localePrefix = 'never';

export const { Link, redirect, usePathname, useRouter, permanentRedirect } = createSharedPathnamesNavigation({
  locales,
  localePrefix
});
