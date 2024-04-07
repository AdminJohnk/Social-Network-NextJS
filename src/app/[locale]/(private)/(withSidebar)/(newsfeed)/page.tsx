'use client';

import NewPost from '@/components/shared/NewPost/NewPost';
import OnlineFriend from '@/components/pages/Home/OnlineFriend';
import Post from '@/components/shared/Post/Post';
import PostSkeleton from '@/components/shared/Post/PostSkeleton';
import ProMember from '@/components/pages/Home/ProMember';
import Story from '@/components/pages/Home/Story';
import SuggestFollow from '@/components/pages/Home/SuggestFollow';
import TrendForYou from '@/components/pages/Home/TrendForYou';
import CreateStatus from '@/components/pages/Home/CreateStatus';
import CreateStory from '@/components/pages/Home/CreateStory';
import { useAllNewsfeedPostsData } from '@/hooks/query';
import { useSession } from 'next-auth/react';

export interface INewFeedProps {
  params: {
    locale: string;
  };
}

export default function NewFeed({ params: { locale } }: INewFeedProps) {
  const {
    allNewsfeedPosts: posts,
    isFetchingNextNewsfeedPosts: isFetchingNextPosts,
    fetchNextNewsfeedPosts: fetchNextPosts,
    hasNextNewsfeedPosts: hasNextPosts,
    isLoadingAllNewsfeedPosts: isLoading
  } = useAllNewsfeedPostsData();

  const { data: session } = useSession();
  console.log('session:: ', session);

  return (
    <div className='ms-60 mt-16 max-lg:ms-0'>
      <div className='newsfeed px-2 py-10 2xl:px-32 xl:px-24 lg:px-14'>
        <div className='max-md:hidden'>
          <Story />
          <CreateStory />
        </div>
        <div
          className='newsfeed-content mt-14 max-md:mt-0 flex w-full'
          id='newsfeed'
        >
          <div className='post w-3/5 max-lg:w-full px-9'>
            <div className='new-post mb-8'>
              <NewPost />
              <CreateStatus />
            </div>
            {isLoading ? (
              <div className='post-skeleton *:mb-6'>
                <PostSkeleton />
              </div>
            ) : (
              <div className='post *:mb-6'>
                {posts ? (
                  posts.map(post => {
                    if (post.type === 'Post') return <Post key={post._id} post={post} />;
                  })
                ) : (
                  <div className='flex-center'>
                    <span className='text-text-2'>No posts</span>
                  </div>
                )}
              </div>
            )}
          </div>
          {isLoading ? (
            <></>
          ) : (
            <div className='more-info w-2/5 max-lg:hidden'>
              <div
                className='space-y-6'
                data-uk-sticky='media: 1024; end: #newsfeed; offset: 80'
              >
                <SuggestFollow />

                <OnlineFriend />

                <ProMember />

                <TrendForYou />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
