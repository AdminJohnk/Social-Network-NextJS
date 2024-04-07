'use client';

import Post from '@/components/shared/Post/Post';
import PostSkeleton from '@/components/shared/Post/PostSkeleton';
import { useAllNewsfeedPostsData, useUserPostsData } from '@/hooks/query';
import { getSession, useSession } from 'next-auth/react';

export default function PostsList() {
  const { data: session } = useSession();

  const {
    isLoadingUserPosts,
    userPosts,
    isFetchingNextUserPosts,
    hasNextUserPosts,
    fetchNextUserPosts
  } = useUserPostsData(session?.id || '');

  return (
    <>
      {isLoadingUserPosts ? (
        <div className='post-skeleton *:mb-6'>
          <PostSkeleton />
        </div>
      ) : (
        <div className='post *:mb-6'>
          {userPosts?.length === 0 ? (
            <>No Post</>
          ) : (
            userPosts?.map((item, index) => (
              <Post
                key={item._id}
                post={item}
              ></Post>
            ))
          )}
        </div>
      )}
    </>
  );
}
