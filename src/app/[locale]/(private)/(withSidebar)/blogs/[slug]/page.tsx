import BlogComment from '@/components/pages/Blog/Slug/BlogComment';
import BlogContent from '@/components/pages/Blog/Slug/BlogContent';
import TrendingArticle from '@/components/pages/Blog/TrendingArticle';
import SuggestFollow from '@/components/shared/SuggestFollow/SuggestFollow';
import { unstable_setRequestLocale } from 'next-intl/server';

export interface IBlogDetailProps {
  params: {
    locale: string;
  };
}

export default function BlogDetail({params: { locale }}: IBlogDetailProps) {
  unstable_setRequestLocale(locale);
  return (
    <div className='ms-60 mt-16 max-lg/2:ms-20 z-[1]'>
      <div className='groups px-10 py-5'>
        <main id='site__main'>
          <div
            className='flex 2xl:gap-12 max-lg:flex-col gap-10'
            id='js-oversized'
          >
            <div className='flex-1'>
              <BlogContent />
              <br />
              <BlogComment />
            </div>

            <div className='2xl:w-[380px] lg:w-[330px] w-full'>
              <div
                className='lg:space-y-6 space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                data-uk-sticky='media: 1024; end: #js-oversized; offset: 80'
              >
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
