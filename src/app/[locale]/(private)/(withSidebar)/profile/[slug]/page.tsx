import { unstable_setRequestLocale } from 'next-intl/server';

import { TabsContent } from '@/components/ui/tabs';
import Cover from '@/components/pages/Profile/Cover';
import TimelineTab from '@/components/pages/Profile/TimelineTab';
import RepositoryTab from '@/components/pages/Profile/RepositoryTab';
import FriendTab from '@/components/pages/Profile/FriendTab';
import PhotoTab from '@/components/pages/Profile/PhotoTab';
import SeriesTab from '@/components/pages/Profile/SeriesTab';

export interface IProfileProps {
  params: { slug: string; locale: string };
  searchParams: {
    tab: string;
  };
}

export default function Profile({ params: { slug, locale }, searchParams: { tab } }: IProfileProps) {
  unstable_setRequestLocale(locale);

  return (
    <div className='ms-60 max-lg:ms-0 mt-16'>
      <div className='max-w-[1065px] mx-auto'>
        <div className='bg-foreground-1 shadow lg:rounded-b-2xl'>
          <Cover profileID={slug} tabParam={tab} />
        </div>

        <TabsContent id='tabs-profile' className='!border-none'>
          <TimelineTab profileID={slug} />
          <FriendTab profileID={slug} />
          <SeriesTab profileID={slug} />
          <PhotoTab profileID={slug} />
          <RepositoryTab profileID={slug} />
        </TabsContent>
      </div>
    </div>
  );
}
