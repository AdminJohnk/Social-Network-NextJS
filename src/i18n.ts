import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { LIST_LANGUAGE } from '@/lib/utils/constants/SettingSystem';

export const locales = LIST_LANGUAGE;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`./locales/${locale}/common.json`)).default
  };
});
