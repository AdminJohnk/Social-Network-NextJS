import { TabsContent } from '@/components/ui/tabs';
import GeneralTab from '@/components/pages/EditProfile/GeneralTab';
import SocialTab from '@/components/pages/EditProfile/SocialTab';
import ExpertiseTab from '@/components/pages/EditProfile/ExpertiseTab';
import PasswordTab from '@/components/pages/EditProfile/PasswordTab';
import TabCover from '@/components/pages/EditProfile/TabCover';
import { unstable_setRequestLocale } from 'next-intl/server';
import ExperienceTab from '@/components/pages/EditProfile/ExperienceTab';
import RepositoryTab from '@/components/pages/EditProfile/RepositoryTab';

export interface IEditProfileProps {
  params: {
    locale: string;
  };
}

export default function EditProfile({ params: { locale } }: IEditProfileProps) {
  unstable_setRequestLocale(locale);
  return (
    <div className='flex flex-1 mt-16 *:w-full *:max-w-2xl flex-col items-center gap-10 px-5 py-10 md:p-14 custom-scrollbar-bg overflow-scroll'>
      <TabCover />
      <div className='mb-20 mt-6 text-sm font-medium text-text-1'>
        <TabsContent id='setting_tab' className='bg-foreground-1 p-6 md:px-20 md:py-12'>
          <GeneralTab />
          <SocialTab />
          <ExpertiseTab />
          <ExperienceTab />
          <RepositoryTab />
          <PasswordTab />
        </TabsContent>
      </div>
    </div>
  );
}
