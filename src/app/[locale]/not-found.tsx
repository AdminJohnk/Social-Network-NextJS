import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function NotFound() {
  const t = useTranslations();

  return (
    <section className='flex-center h-dvh bg-background-1'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl'>404</h1>
          <p className='mb-4 text-3xl font-bold tracking-tight text-text-1 md:text-4xl'>
            {t("Something's missing")}
          </p>
          <p className='mb-4 text-lg font-light text-text-2'>
            {t("Sorry, we can't find that page You'll find lots to explore on the home page")}
          </p>
          <Link
            href='/'
            className='my-4 inline-flex rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-text-1 text-white duration-300 hover:bg-primary/90 focus:ring-4'>
            {t('Back to Homepage')}
          </Link>
        </div>
      </div>
    </section>
  );
}
