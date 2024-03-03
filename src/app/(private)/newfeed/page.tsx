import NewPost from '@/components/NewPost/NewPost';
import OnlineFriend from '@/components/OnlineFriend/OnlineFriend';
import Post from '@/components/Post/Post';
import PostSkeleton from '@/components/Post/PostSkeleton';
import ProMember from '@/components/ProMember/ProMember';
import Story from '@/components/Story/Story';
import SuggestFollow from '@/components/SuggestFollow/SuggestFollow';
import TrendForYou from '@/components/TrendForYou/TrendForYou';
import * as React from 'react';

export interface INewFeedProps {}

export default function NewFeed(props: INewFeedProps) {
  return (
    <div className='newfeed' style={{ height: '5000px' }}>
      <Story />
      <div className='newfeed-content flex w-full mt-14'>
        <div className='post w-3/5 px-9'>
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
        <div className='more-info w-2/5'>
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
  );
}
