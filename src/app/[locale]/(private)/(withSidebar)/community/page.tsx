import { unstable_setRequestLocale } from 'next-intl/server';

import ComCategory from '@/components/pages/Community/ComCategory';
import ComPopularList from '@/components/pages/Community/ComPopularList';
import ComSuggestionList from '@/components/pages/Community/ComSuggestionList';
import ComMineList from '@/components/pages/Community/ComMineList';
import ComSuggestion from '@/components/pages/Community/ComSuggestion';
import Header from '@/components/pages/Community/Header';

export interface ICommunityProps {
  params: {
    locale: string;
  };
}

export default function Community({ params: { locale } }: ICommunityProps) {
  unstable_setRequestLocale(locale);

  return (
    <div className='ms-60 mt-16 max-lg/2:ms-0'>
      <div className='communities px-40 py-5'>
        <main id='site__main' className=''>
          <div className='2xl:max-w-[1220px]'>
            <Header />

            <div className='uk-switcher' id='community-tabs'>
              <ComSuggestionList />
              <ComPopularList />
              <ComMineList />
            </div>

            <ComCategory />
            <ComSuggestion />

            {/* <div className='flex justify-center my-6'>
              <button
                type='button'
                className='bg-foreground-2 hover:bg-hover-2 duration-300 py-2 px-5 rounded-full shadow-md font-semibold text-sm '>
                {t('Load more')}...
              </button>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}
