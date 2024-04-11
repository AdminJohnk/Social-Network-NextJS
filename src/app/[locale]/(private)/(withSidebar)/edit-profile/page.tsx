import { unstable_setRequestLocale } from 'next-intl/server';

import TabCover from '@/components/pages/EditProfile/TabCover';
import TabContent from '@/components/pages/EditProfile/TabContent';

export interface IEditProfileProps {
  params: {
    locale: string;
  };
}

export default function EditProfile({ params: { locale } }: IEditProfileProps) {
  unstable_setRequestLocale(locale);
  return (
    <div className='flex flex-1 mt-16 *:w-full *:max-w-2xl flex-col items-center gap-3 px-5 py-10 md:p-14 custom-scrollbar-bg overflow-scroll'>
      <TabCover />
      <TabContent />
    </div>
  );
}
