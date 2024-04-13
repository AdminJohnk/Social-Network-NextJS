'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import Post from '@/components/shared/Post/Post';
import { PostSkeleton } from '@/components/shared/Post';
import { useAllNewsfeedPostsData } from '@/hooks/query';
import { BiLoader } from 'react-icons/bi';

export default function PostList() {
  const [postsRef, inPostsView] = useInView({ threshold: 0 });

  const {
    allNewsfeedPosts: posts,
    isFetchingNextNewsfeedPosts: isFetchingNextPosts,
    fetchNextNewsfeedPosts: fetchNextPosts,
    hasNextNewsfeedPosts: hasNextPosts,
    isLoadingAllNewsfeedPosts: isLoading
  } = useAllNewsfeedPostsData();

  useEffect(() => {
    if (inPostsView && hasNextPosts && !isFetchingNextPosts) {
      fetchNextPosts();
    }
  }, [inPostsView, hasNextPosts, isFetchingNextPosts, fetchNextPosts]);

  return (
    <>
      {isLoading ? (
        <div className='post-skeleton *:mb-6'>
          <PostSkeleton />
        </div>
      ) : (
        <div className='post *:mb-6'>
          {posts ? (
            <>
              {posts.map((post) => (
                <Post key={post._id} post={post} />
              ))}
              {hasNextPosts && (
                <div ref={postsRef}>
                  <BiLoader className='animate-spin' />
                </div>
              )}
            </>
          ) : (
            <div className='flex-center'>
              <span className='text-text-2'>No post available!!!</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
