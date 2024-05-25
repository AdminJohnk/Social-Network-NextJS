'use client';

import { useEffect } from 'react';

import About from './About';
import RecentImage from './RecentImage';
import SuggestGroup from './SuggestGroup';
import { useGetPostsByCommunityID } from '@/hooks/query';

export interface IDiscussionTabProps {
  communityID: string;
}

export default function CommunitySide({ communityID }: IDiscussionTabProps) {
  const { postsByCommunity } = useGetPostsByCommunityID(communityID);

  useEffect(() => {
    UIkit.sticky('#community-side-id')?.$emit('update');
  }, [postsByCommunity]);

  return (
    <div className='lg:w-[400px]'>
      <div
        id='community-side-id'
        className='lg:space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
        data-uk-sticky='media: 1024; end: #community-side; offset: 80'>
        <About communityID={communityID} />
        <RecentImage communityID={communityID} />
        <SuggestGroup />
      </div>
    </div>
  );
}
