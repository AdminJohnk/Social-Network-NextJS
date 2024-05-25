import { unstable_setRequestLocale } from 'next-intl/server';

import CommunityPostDetailWrap from '@/components/pages/Community/Id/Post/CommunityPostDetailWrap';

export interface IPostDetailProps {
  params: {
    id: string;
    locale: string;
    slug: string;
  };
}

export default function PostDetail({ params: { locale, slug, id } }: IPostDetailProps) {
  unstable_setRequestLocale(locale);

  return (
    <div className='ms-60 max-lg/2:ms-0 z-[1]'>
      <div className='newsfeed mt-16 3xl:px-40 py-10 px-2 sm:px-14 xl:px-24 2xl:px-32'>
        <CommunityPostDetailWrap postID={slug} communityID={id} />
      </div>
    </div>
  );
}
