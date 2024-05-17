import { unstable_setRequestLocale } from 'next-intl/server';

import NewPost from '@/components/shared/NewPost/NewPost';
import About from '@/components/pages/Community/Id/About';
import RecentMedia from '@/components/pages/Community/Id/RecentMedia';
import SuggestGroup from '@/components/pages/Community/Id/SuggestGroup';
import ComCover from '@/components/pages/Community/Id/ComCover';
import PostList from '@/components/pages/Community/Id/PostList';
import { TabsContent } from '@/components/ui/tabs';
import RequestList from '@/components/pages/Community/Id/RequestList';

export interface ICommunityProps {
  params: {
    locale: string;
    id: string;
  };
}

export default function Community({ params: { locale, id } }: ICommunityProps) {
  unstable_setRequestLocale(locale);

  return (
    <main className='ms-60 max-lg:ms-0 mt-16'>
      <div className='max-w-[1065px] mx-auto'>
        <ComCover communityID={id} />
        <TabsContent id='tabs-community' className='mt-4 !border-none'>
          <div className='flex 2xl:gap-12 gap-10 mt-8 max-lg:flex-col-reverse' id='community-side'>
            <div className='flex-1 xl:space-y-6 space-y-3'>
              <NewPost />
              <PostList communityID={id} />
            </div>
            <div className='lg:w-[400px]'>
              <div
                className='lg:space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                data-uk-sticky='media: 1024; end: #community-side; offset: 80'>
                <About communityID={id} />
                <RecentMedia />
                <SuggestGroup />
              </div>
            </div>
          </div>
          <div className='tab-request mt-8'>
            <RequestList communityID={id} />
          </div>
        </TabsContent>
      </div>
    </main>
  );
}
