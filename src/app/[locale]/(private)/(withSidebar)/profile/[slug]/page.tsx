import { unstable_setRequestLocale } from 'next-intl/server';

import NewPost from '@/components/shared/NewPost/NewPost';
import CreateStatus from '@/components/pages/Home/CreateStatus';
import { TabsContent } from '@/components/ui/tabs';
import PostsList from '@/components/pages/Profile/PostsList';
import Cover from '@/components/pages/Profile/Cover';
import ProfileSide from '@/components/pages/Profile/ProfileSide';

export interface IProfileProps {
  params: { slug: string; locale: string };
}

export default function Profile({ params: { slug, locale } }: IProfileProps) {
  unstable_setRequestLocale(locale);

  return (
    <div className='ms-60 max-lg:ms-0 mt-16'>
      <div className='max-w-[1065px] mx-auto'>
        <div className='bg-foreground-1 shadow lg:rounded-b-2xl'>
          <Cover profileID={slug} />
        </div>

        <TabsContent id='tabs-profile' className='!border-none'>
          <div className='flex 2xl:gap-12 gap-10 mt-8 max-lg:flex-col-reverse' id='profile-side'>
            <div className='flex-1 xl:space-y-6 space-y-3'>
              <NewPost profileID={slug} />
              <CreateStatus />
              <PostsList profileID={slug} />
            </div>

            <ProfileSide profileID={slug} />
          </div>
        </TabsContent>
      </div>
    </div>
  );
}
