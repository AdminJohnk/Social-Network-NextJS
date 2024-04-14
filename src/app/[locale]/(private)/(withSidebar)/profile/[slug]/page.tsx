import { unstable_setRequestLocale } from 'next-intl/server';

import { TabsContent } from '@/components/ui/tabs';
import Cover from '@/components/pages/Profile/Cover';
import TimelineTab from '@/components/pages/Profile/TimelineTab';

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
          <TimelineTab profileID={slug} />
        </TabsContent>
      </div>
    </div>
  );
}
