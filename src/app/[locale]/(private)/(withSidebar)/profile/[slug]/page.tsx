import { unstable_setRequestLocale } from 'next-intl/server';

import Cover from '@/components/pages/Profile/Cover';
import Content from '@/components/pages/Profile/Content';

export interface IProfileProps {
  params: { slug: string; locale: string };
  searchParams: {
    tab: string;
  };
}

export default function Profile({ params: { slug, locale }, searchParams: { tab } }: IProfileProps) {
  unstable_setRequestLocale(locale);

  return (
    <div className='ms-60 mt-16 max-lg/2:ms-0'>
      <div className='mx-auto max-w-[1065px]'>
        <div className='bg-foreground-1 shadow lg:rounded-b-2xl'>
          <Cover profileID={slug} tabParam={tab} />
        </div>

        <Content profileID={slug} />
      </div>
    </div>
  );
}
