'use client';

import { useSession } from 'next-auth/react';
import { TabsContent } from '@/components/ui/tabs';
import GeneralTab from './GeneralTab';
import SocialTab from './SocialTab';
import ExpertiseTab from './ExpertiseTab';
import ExperienceTab from './ExperienceTab';
import RepositoryTab from './RepositoryTab';
import PasswordTab from './PasswordTab';
import { useCurrentUserInfo } from '@/hooks/query';
import TabContentSkeleton from './TabContentSkeleton';

export default function TabContent() {
  const { data: session } = useSession();
  const { isLoadingCurrentUserInfo } = useCurrentUserInfo(session?.id || '');

  return (
    <div className='bg-foreground-1 mb-20 mt-6 text-sm font-medium rounded-xl text-text-1'>
      {isLoadingCurrentUserInfo ? (
        <TabContentSkeleton />
      ) : (
        <TabsContent id='setting_tab' className='p-6 md:px-20 md:py-12'>
          <GeneralTab />
          <SocialTab />
          <ExpertiseTab />
          <ExperienceTab />
          <RepositoryTab />
          <PasswordTab />
        </TabsContent>
      )}
    </div>
  );
}
