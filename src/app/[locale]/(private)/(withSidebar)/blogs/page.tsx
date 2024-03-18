import { TabTitle, Tabs } from '@/components/ui/tabs';
import BlogSlideList from '@/components/pages/Blog/BlogSlideList';
import BlogMain from '@/components/pages/Blog/BlogMain';
import RecommendWriter from '@/components/pages/Blog/RecommendWriter';
import ArticleForYou from '@/components/pages/Blog/ArticleForYou';
import BlogSlideThumbnail from '@/components/pages/Blog/BlogSlideThumbnail';
import TrendingArticle from '@/components/pages/Blog/TrendingArticle';
import SuggestFollow from '@/components/pages/Home/SuggestFollow';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export interface IBlogProps {
  params: {
    locale: string;
  };
}

export default function Blog({ params: { locale } }: IBlogProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  const LoadMoreButton = () => {
    return (
      <div className='flex justify-center my-6'>
        <button
          type='button'
          className='py-2 px-5 rounded-full shadow-md font-semibold text-sm bg-foreground-1 hover:bg-hover-1 duration-300 '>
          {t('Load more')}...
        </button>
      </div>
    );
  };

  unstable_setRequestLocale(locale);

  return (
    <div className='ms-60 mt-16 max-lg/2:ms-20'>
      <div className='groups px-10 py-5'>
        <main id='site__main'>
          <div className='flex max-lg:flex-col 2xl:gap-12 gap-10' id='blog-side'>
            <div className='flex-1'>
              <div className='page-heading'>
                <h1 className='page-title'> Articles </h1>

                <Tabs id='ttabs' disableChevron>
                  <TabTitle>{t('Suggestions')}</TabTitle>
                  <TabTitle>{t('Popular')}</TabTitle>
                  <TabTitle>{t('My article')}</TabTitle>
                </Tabs>
              </div>

              <BlogSlideList />

              <BlogMain />

              <RecommendWriter />

              <ArticleForYou />

              <LoadMoreButton />
            </div>

            <div className='2xl:w-[380px] lg:w-[330px] w-full'>
              <div
                className='lg:space-y-6 space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                data-uk-sticky='media: 1024; end: #blog-side; offset: 80'>
                <BlogSlideThumbnail />

                <TrendingArticle />

                <SuggestFollow />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
