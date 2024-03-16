import NewPost from '@/components/shared/NewPost/NewPost';
import Post from '@/components/shared/Post/Post';
import PostSkeleton from '@/components/shared/Post/PostSkeleton';
import About from '@/components/pages/Community/Id/About';
import RecentMedia from '@/components/pages/Community/Id/RecentMedia';
import SuggestGroup from '@/components/pages/Community/Id/SuggestGroup';

import { TabsContent } from '@/components/ui/tabs';
import ComCover from '@/components/pages/Community/Id/ComCover';
import { unstable_setRequestLocale } from 'next-intl/server';

export interface ICommunityProps {
  params: {
    locale: string;
  };
}

export default function Community({ params: { locale } }: ICommunityProps) {
  unstable_setRequestLocale(locale);
  
  return (
    <main className='ms-60 max-lg:ms-0 mt-16'>
      <div className='max-w-[1065px] mx-auto'>
        <ComCover />
        <TabsContent id='tabs-community' className='mt-4 !border-none'>
          <div
            className='flex 2xl:gap-12 gap-10 mt-8 max-lg:flex-col-reverse'
            id='js-oversized'
          >
            <div className='flex-1 xl:space-y-6 space-y-3'>
              <NewPost />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <PostSkeleton />
            </div>
            <div className='lg:w-[400px]'>
              <div
                className='lg:space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                data-uk-sticky='media: 1024; end: #js-oversized; offset: 80'
              >
                <About />
                <RecentMedia />
                <SuggestGroup />
              </div>
            </div>
          </div>
        </TabsContent>
      </div>
    </main>
  );
}
