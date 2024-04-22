'use client';

import { useSession } from 'next-auth/react';

import SuggestFollow from './SuggestFollow';
import OnlineFriend from './OnlineFriend';
import TrendForYou from './TrendForYou';
import SideSkeleton from '@/components/shared/SideSkeleton';
import { useAllNewsfeedPostsData, useCurrentUserInfo } from '@/hooks/query';

export default function NewsfeedSide() {
  const { data: session } = useSession();

  const { isLoadingAllNewsfeedPosts } = useAllNewsfeedPostsData();
  const { isLoadingCurrentUserInfo } = useCurrentUserInfo(session?.id || '');

  return (
    <div className='more-info w-2/5 max-lg:hidden'>
      {isLoadingAllNewsfeedPosts || isLoadingCurrentUserInfo ? (
        <SideSkeleton />
      ) : (
        <div className='space-y-6 pb-8' data-uk-sticky='media: 1024; end: #newsfeed; offset: 80'>
          <SuggestFollow />

          <OnlineFriend />

          <TrendForYou />
        </div>
      )}
    </div>
  );
}
