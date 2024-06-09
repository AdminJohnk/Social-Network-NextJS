import { unstable_setRequestLocale } from 'next-intl/server';

import ComCover from '@/components/pages/Community/Id/ComCover';
import { TabsContent } from '@/components/ui/tabs';
import RequestList from '@/components/pages/Community/Id/RequestList';
import Members from '@/components/pages/Community/Id/Members';
import PhotoTab from '@/components/pages/Community/Id/PhotoTab';
import NewPost from '@/components/shared/NewPost/NewPost';
import CommunitySide from '@/components/pages/Community/Id/CommunitySide';
import PostList from '@/components/pages/Community/Id/PostList';

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
    <main className='ms-60 mt-16 max-lg/2:ms-0'>
      <div className='mx-auto max-w-[1065px]'>
        <ComCover communityID={id} tabParam={tab} />

        <TabsContent id='tabs-community' className='mt-4 !border-none'>
          <div className='mt-8 flex gap-10 max-lg:flex-col-reverse 2xl:gap-12' id='community-side'>
            <div className='max-w-[617px] flex-1 space-y-3 xl:space-y-6'>
              <NewPost communityID={id} />
              <PostList communityID={id} />
            </div>
            <CommunitySide communityID={id} />
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
