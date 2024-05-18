'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import Post from '@/components/shared/Post/Post';
import { PostSkeleton } from '@/components/shared/Post';
import { useAllNewsfeedPostsData, useGetCommunityByID } from '@/hooks/query';

interface IPostListProps {
  communityID: string;
}

export default function PostList({ communityID }: IPostListProps) {
  const t = useTranslations();
  const [postsRef, inPostsView] = useInView({ threshold: 0 });

  const { community, isLoadingCommunity } = useGetCommunityByID(communityID);

  //   useEffect(() => {
  //     if (inPostsView && hasNextPosts && !isFetchingNextPosts) {
  //       fetchNextPosts();
  //     }
  //   }, [inPostsView, hasNextPosts, isFetchingNextPosts, fetchNextPosts]);

  return (
    <>
      {isLoadingCommunity ? (
        <div className='post-skeleton *:mb-6'>
          <PostSkeleton />
        </div>
      ) : (
        <div className='post *:mb-6'>
          {community.posts.length ? (
            <>
              {community.posts.map((post) => (
                <Post key={post._id} post={post} />
              ))}
              {/* {hasNextPosts && (
                <div ref={postsRef}>
                  <PostSkeleton />
                </div>
              )} */}
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
