import { TabTitle, Tabs, TabsContent } from '@/components/ui/tabs';
import BlogSlideList from '@/components/pages/Series/BlogSlideList';
import BlogMain from '@/components/pages/Series/BlogMain';
import RecommendWriter from '@/components/pages/Series/RecommendWriter';
import ArticleForYou from '@/components/pages/Series/ArticleForYou';
import BlogSlideThumbnail from '@/components/pages/Series/BlogSlideThumbnail';
import TrendingSeries from '@/components/pages/Series/TrendingSeries';
import SuggestFollow from '@/components/pages/Home/SuggestFollow';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import MySeries from '@/components/pages/Series/MySeries';

export interface IBlogProps {
  params: {
    locale: string;
  };
}

export default function Blog({ params: { locale } }: IBlogProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div className='ms-60 mt-16 max-lg/2:ms-0'>
      <div className='groups px-10 py-5'>
        <main id='site__main'>
          <div className='flex gap-10 max-lg:flex-col 2xl:gap-12' id='blog-side'>
            <div className='flex-1'>
              <div className='page-heading'>
                <h1 className='page-title'>{t('Series')}</h1>

                <Tabs id='blog-tabs' disableChevron>
                  <TabTitle>{t('Popular')}</TabTitle>
                  <TabTitle>{t('My series')}</TabTitle>
                </Tabs>
              </div>

              <TabsContent id='blog-tabs' className='mt-8 !border-none'>
                <div>
                  <BlogSlideList />
                  <BlogMain />
                  <RecommendWriter />
                  <ArticleForYou />
                </div>
                <MySeries />
              </TabsContent>
            </div>

            <div className='w-full lg:w-[330px] 2xl:w-[380px]'>
              <div
                className='space-y-4 max-lg:grid max-lg:gap-6 sm:grid-cols-2 lg:space-y-6 lg:pb-8'
                data-uk-sticky='media: 1024; end: #blog-side; offset: 80'>
                <BlogSlideThumbnail />

                <TrendingSeries />

                <SuggestFollow />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
