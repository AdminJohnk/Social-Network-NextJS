'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useInView } from 'react-intersection-observer';

import NewPost from '@/components/shared/NewPost/NewPost';
import CreateNewPost from '@/components/pages/Home/CreateNewPost';
import Post, { PostSkeleton } from '@/components/shared/Post';
import SideSkeleton from '@/components/shared/SideSkeleton';
import Intro from './Intro';
import Friends from './Friends';
import {
  useCurrentUserInfo,
  useOtherUserInfo,
  useUserPostsData
} from '@/hooks/query';

export interface ITimelineTabProps {
  profileID: string;
}

export default function TimelineTab({ profileID }: ITimelineTabProps) {
  const { data: session } = useSession();
  const [postsRef, inPostsView] = useInView({ threshold: 0 });

  const userID = session?.id || '';

  const {
    isLoadingUserPosts,
    userPosts,
    isFetchingNextUserPosts,
    hasNextUserPosts,
    fetchNextUserPosts
  } = useUserPostsData(profileID);

  const { currentUserInfo } = useCurrentUserInfo(userID);
  const { otherUserInfo, isLoadingOtherUserInfo } = useOtherUserInfo(profileID);

  useEffect(() => {
    if (inPostsView && hasNextUserPosts && !isFetchingNextUserPosts) {
      fetchNextUserPosts();
    }
  }, [
    inPostsView,
    hasNextUserPosts,
    isFetchingNextUserPosts,
    fetchNextUserPosts
  ]);

  return (
    <div
      className='flex 2xl:gap-12 gap-10 mt-8 max-lg:flex-col-reverse'
      id='profile-side'
    >
      <div className='flex-1 xl:space-y-6 space-y-3'>
        <NewPost profileID={profileID} />
        <CreateNewPost />
        <div className='post *:mb-6'>
          {isLoadingUserPosts ? (
            <PostSkeleton />
          ) : userPosts ? (
            <>
              {userPosts.map(post => (
                <Post key={post._id} post={post} />
              ))}
              {hasNextUserPosts && (
                <div className='post-skeleton *:mb-6' ref={postsRef}>
                  <PostSkeleton />
                </div>
              )}
            </>
          ) : (
            <div className='flex-center'>
              <span className='text-text-2'>No post available!!!</span>
            </div>
          )}
        </div>
      </div>

      <div className='lg:w-[400px]'>
        {isLoadingUserPosts ? (
          <SideSkeleton />
        ) : (
          <div
            className='lg:space-y-6 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6'
            data-uk-sticky='media: 1024; end: #profile-side; offset: 80'
          >
            <Intro profileID={profileID} />

            <Friends  profileID={profileID}/>
          </div>
        )}
      </div>
    </div>
  );
}
