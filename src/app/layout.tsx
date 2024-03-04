import type { Metadata } from 'next';
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import { QueryProvider, SessionProvider } from './provider';
import './uk.css';
import './globals.css';

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

      <Script src='https://cdn.jsdelivr.net/npm/uikit@3.19.1/dist/js/uikit.min.js' defer />

      <body className={font.className}>
        <QueryProvider>
          <SessionProvider>
            <main className='flex h-dvh custom-scrollbar-fg'>
              <Flowbite>{children}</Flowbite>
            </main>
          </SessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
