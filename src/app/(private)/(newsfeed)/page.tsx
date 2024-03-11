import * as React from 'react';

import NewPost from '@/components/NewPost/NewPost';
import OnlineFriend from '@/components/OnlineFriend/OnlineFriend';
import Post from '@/components/Post/Post';
import PostSkeleton from '@/components/Post/PostSkeleton';
import ProMember from '@/components/ProMember/ProMember';
import Story from '@/components/Story/Story';
import SuggestFollow from '@/components/SuggestFollow/SuggestFollow';
import TrendForYou from '@/components/TrendForYou/TrendForYou';

export interface INewFeedProps {}

export default function NewFeed(props: INewFeedProps) {
  return (
    <div className='ms-60 mt-16 max-lg:ms-0 @container/pri z-[1]'>
      <div
        className='newsfeed px-40 py-10 @6xl/pri:px-32 @5xl/pri:px-24 @xl/pri:px-14 @sm/pri:px-2'
        style={{ height: '5000px' }}>
        <div className='max-md:hidden'>
          <Story />
        </div>
        <div className='newsfeed-content mt-14 max-md:mt-0 flex w-full'>
          <div className='post w-3/5 max-lg:w-full px-9'>
            <div className='new-post mb-8'>
              <NewPost />
            </div>
            <div className='post *:mb-6'>
              <Post />
              <Post />
              <Post />
            </div>
            <div className='post-skeleton *:mb-6'>
              <PostSkeleton />
            </div>
          </div>
          <div className='more-info w-2/5 max-lg:hidden'>
            <div>
              <SuggestFollow />
            </div>
            <div className='mt-6'>
              <OnlineFriend />
            </div>
            <div className='mt-6'>
              <ProMember />
            </div>
            <div className='mt-6'>
              <TrendForYou />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
