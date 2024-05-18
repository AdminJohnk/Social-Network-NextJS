'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import Post from '@/components/shared/Post/Post';
import { PostSkeleton } from '@/components/shared/Post';
import { useAllNewsfeedPostsData } from '@/hooks/query';

export default function PostList() {
  const t = useTranslations();
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
          {posts.length ? (
            <>
              {posts.map((post) => (
                <Post key={post._id} post={post} />
              ))}
              {hasNextPosts && (
                <div ref={postsRef}>
                  <PostSkeleton />
                </div>
              )}
            </>
          ) : (
            <div className='flex-center'>
              <span className='text-text-2'>{t('No post available')}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
