import { unstable_setRequestLocale } from 'next-intl/server';

export interface ILocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({ children, params: { locale } }: ILocaleLayoutProps) {
  unstable_setRequestLocale(locale);
  return <>{children}</>;
}

const locales = ['en', 'vi'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
