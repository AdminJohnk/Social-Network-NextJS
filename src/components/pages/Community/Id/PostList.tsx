'use client';

import { useInView } from 'react-intersection-observer';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { Post } from '@/components/shared/Post';
import { PostSkeleton } from '@/components/shared/Post';
import { useCurrentUserInfo, useGetCommunityByID } from '@/hooks/query';

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

  const { currentUserInfo } = useCurrentUserInfo();

  const isMember = useMemo(() => {
    if (currentUserInfo && community) {
      return community.members.some((member) => member._id === currentUserInfo._id);
    }
    return false;
  }, [currentUserInfo, community]);

  return (
    <>
      {isLoadingCommunity ? (
        <div className='post-skeleton *:mb-6'>
          <PostSkeleton />
        </div>
      ) : !isMember && community.visibility === 'private' ? (
        <div className='flex-center'>
          <span className='text-text-2'>{t('You must join in this community to see post!')}</span>
        </div>
      ) : (
        <div className='post *:mb-6'>
          {community.posts.length ? (
            <>
              {community.posts.map((post) => (
                <Post key={post._id} post={post} feature='community' communityID={communityID} />
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
