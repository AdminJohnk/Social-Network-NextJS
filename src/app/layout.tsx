import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';
import Header from '@/components/Header/Header';
import SessionProvider from '@/wrapper/SessionWrapper';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <ThemeRegistry> */}
      <body className={font.className}>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
      {/* </ThemeRegistry> */}
    </html>
  );
}
