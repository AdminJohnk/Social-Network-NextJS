import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

interface IIndexPageProps {
  params: {
    locale: string;
  };
}

export default function Index({ params: { locale } }: IIndexPageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
  return <>
  <h1>{t('title')}</h1>
  <h2>{t('content')}</h2>
  </>;
}
