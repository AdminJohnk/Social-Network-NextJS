import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './i18n';

export const localePrefix = 'as-needed'; // Default

export const { Link, redirect, usePathname, useRouter, permanentRedirect } = createSharedPathnamesNavigation({
  locales,
  localePrefix
});
