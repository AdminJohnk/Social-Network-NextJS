import { unstable_setRequestLocale } from 'next-intl/server';

export interface IChatLayoutProps {
  params: {
    locale: string;
  };
  children: React.ReactNode;
}

export default function ChatLayout({ children, params: { locale } }: IChatLayoutProps) {
  unstable_setRequestLocale(locale);

  return children;
}
