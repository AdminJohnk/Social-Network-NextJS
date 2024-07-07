import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { unstable_noStore } from 'next/cache';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'highlight.js/styles/default.css';
import '@/app/animate.css';
import '@/app/uk.css';
import '@/app/globals.css';

import { QueryProvider, SessionProvider } from '@/app/provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { locales } from '@/i18n';
import { cn } from '@/lib/utils';

export interface ILocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const font = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'Devhub',
  description:
    'Devhub is a social network for developers to share and stay up to date with the latest trends in the tech industry.'
};

export default async function LocaleLayout({ children, params: { locale } }: ILocaleLayoutProps) {
  unstable_noStore();
  unstable_setRequestLocale(locale);
  const message = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ThemeModeScript />
        <link rel='icon' href='/icon.png' type='image/png' sizes='png' />
      </head>

      <Script src='/js/uikit.min.js' />

      <body className={cn(font.className, 'custom-scrollbar-bg h-dvh')}>
        <QueryProvider>
          <SessionProvider>
            <NextIntlClientProvider messages={message} locale={locale}>
              <Flowbite theme={{ mode: 'dark' }}>
                <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
                <ToastContainer />
              </Flowbite>
            </NextIntlClientProvider>
          </SessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
