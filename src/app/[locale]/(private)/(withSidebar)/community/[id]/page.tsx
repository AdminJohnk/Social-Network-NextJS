import { unstable_setRequestLocale } from 'next-intl/server';

import NewPost from '@/components/shared/NewPost/NewPost';
import About from '@/components/pages/Community/Id/About';
import RecentImage from '@/components/pages/Community/Id/RecentImage';
import SuggestGroup from '@/components/pages/Community/Id/SuggestGroup';
import ComCover from '@/components/pages/Community/Id/ComCover';
import PostList from '@/components/pages/Community/Id/PostList';
import { TabsContent } from '@/components/ui/tabs';
import RequestList from '@/components/pages/Community/Id/RequestList';
import Members from '@/components/pages/Community/Id/Members';
import PhotoTab from '@/components/pages/Community/Id/PhotoTab';

export interface ICommunityProps {
  params: {
    locale: string;
    id: string;
  };
  searchParams: {
    tab: string;
  };
}

export default function Community({ params: { locale, id }, searchParams: { tab } }: ICommunityProps) {
  unstable_setRequestLocale(locale);

  return (
    <main className='ms-60 max-lg:ms-0 mt-16'>
      <div className='max-w-[1065px] mx-auto'>
        <ComCover communityID={id} tabParam={tab} />

        <TabsContent id='tabs-community' className='mt-4 !border-none'>
          <div className='flex 2xl:gap-12 gap-10 mt-8 max-lg:flex-col-reverse' id='community-side'>
            <div className='flex-1 xl:space-y-6 space-y-3'>
              <NewPost communityID={id} />
              <PostList communityID={id} />
            </div>
            <div className='lg:w-[400px]'>
              <div
                className='lg:space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
                data-uk-sticky='media: 1024; end: #community-side; offset: 80'>
                <About communityID={id} />
                <RecentImage communityID={id} />
                <SuggestGroup />
              </div>
            </div>
          </div>
          {/* only admin and creator can see request tab */}
          <RequestList communityID={id} />
          <PhotoTab communityID={id} />
          <div className='events'></div>
          <Members communityID={id} />
        </TabsContent>
      </div>
    </main>
  );
}
