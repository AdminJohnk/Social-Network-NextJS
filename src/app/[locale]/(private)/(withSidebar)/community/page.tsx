import ComCategory from '@/components/pages/Community/ComCategory';
import ComPopularList from '@/components/pages/Community/ComPopularList';
import ComSuggestionList from '@/components/pages/Community/ComSuggestionList';
import ComMineList from '@/components/pages/Community/ComMineList';
import { TabTitle, Tabs } from '@/components/ui/tabs';
import ComSuggestion from '@/components/pages/Community/ComSuggestion';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

const LoadMoreButton = () => {
  const t = useTranslations();
  return (
    <div className='flex justify-center my-6'>
      <button
        type='button'
        className='bg-foreground-2 hover:bg-hover-2 duration-300 py-2 px-5 rounded-full shadow-md font-semibold text-sm '
      >
        {t('Load more...')}
      </button>
    </div>
  );
};

export interface ICommunityProps {
  params: {
    locale: string;
  };
}

export default function Community({ params: { locale } }: ICommunityProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <div className='ms-60 mt-16 max-lg/2:ms-20 @container/pri z-[1]'>
      <div className='communities px-40 py-5'>
        <main id='site__main' className=''>
          <div className='2xl:max-w-[1220px]'>
            <div className='page-heading'>
              <h1 className='page-title'> {t('Communities')} </h1>

              <Tabs id='community-tabs' disableChevron>
                <TabTitle>{t('Suggestions')}</TabTitle>
                <TabTitle>{t('Popular')}</TabTitle>
                <TabTitle>{t('My communities')}</TabTitle>
              </Tabs>
            </div>

            <div className='uk-switcher' id='community-tabs'>
              <ComSuggestionList />
              <ComPopularList />
              <ComMineList />
            </div>

            <ComCategory />
            <ComSuggestion />

            <LoadMoreButton />
          </div>
        </main>
      </div>
    </div>
  );
}
