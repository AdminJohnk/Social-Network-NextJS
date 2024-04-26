'use client';

import SuggestFollow from './SuggestFollow';
import OnlineFriend from './OnlineFriend';
import TrendForYou from './TrendForYou';
import SideSkeleton from '@/components/shared/SideSkeleton';
import { useAllNewsfeedPostsData, useCurrentUserInfo } from '@/hooks/query';
import { useEffect } from 'react';

export default function NewsfeedSide() {
  const { isLoadingAllNewsfeedPosts, allNewsfeedPosts } = useAllNewsfeedPostsData();
  const { isLoadingCurrentUserInfo } = useCurrentUserInfo();

  useEffect(() => {
    UIkit.sticky('#newsfeed-side')?.$emit('update');
  }, [allNewsfeedPosts]);

  return (
    <div className='more-info w-2/5 max-lg:hidden'>
      {isLoadingAllNewsfeedPosts || isLoadingCurrentUserInfo ? (
        <SideSkeleton />
      ) : (
        <div
          id='newsfeed-side'
          className='space-y-6 pb-8'
          data-uk-sticky='media: 1024; end: #newsfeed; offset: 80'>
          <SuggestFollow />

          <OnlineFriend />

          <TrendForYou />
        </div>
      )}
    </div>
  );
}
