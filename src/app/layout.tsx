import type { Metadata } from 'next';
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import { QueryProvider, SessionProvider } from './provider';
import ToTop from '@/components/ToTop';
import { cn } from '@/lib/utils';
import './uk.css';
import './globals.css';
import FloatTool from '@/components/FloatTool/FloatTool';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Devhub',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>

      <Script src='/js/uikit.min.js' defer />

      <body className={cn(font.className, 'h-dvh custom-scrollbar-fg')}>
        <QueryProvider>
          <SessionProvider>
            <Flowbite>
              {children}
              <ToTop />
            </Flowbite>
          </SessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
