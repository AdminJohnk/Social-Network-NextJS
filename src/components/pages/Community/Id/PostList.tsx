'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { Post } from '@/components/shared/Post';
import { PostSkeleton } from '@/components/shared/Post';
import { useCurrentUserInfo, useGetCommunityByID, useGetPostsByCommunityID } from '@/hooks/query';

interface IPostListProps {
  communityID: string;
}

export default function PostList({ communityID }: IPostListProps) {
  const t = useTranslations();
  const [postsRef, inPostsView] = useInView({ threshold: 0 });

  const { community, isLoadingCommunity } = useGetCommunityByID(communityID);

  const {
    postsByCommunity,
    isLoadingPostsByCommunity,
    isFetchingNextPostsByCommunity,
    hasNextPostsByCommunity,
    fetchNextPostsByCommunity
  } = useGetPostsByCommunityID(communityID);

  useEffect(() => {
    if (inPostsView && hasNextPostsByCommunity && !isFetchingNextPostsByCommunity) {
      fetchNextPostsByCommunity();
    }
  }, [inPostsView, hasNextPostsByCommunity, isFetchingNextPostsByCommunity, fetchNextPostsByCommunity]);

  const { currentUserInfo } = useCurrentUserInfo();

  const isMember = useMemo(() => {
    if (currentUserInfo && community) {
      return community.members.some((member) => member._id === currentUserInfo._id);
    }
    return false;
  }, [currentUserInfo, community]);

  return (
    <>
      {isLoadingCommunity || isLoadingPostsByCommunity ? (
        <div className='post-skeleton *:mb-6'>
          <PostSkeleton />
        </div>
      ) : !isMember && community.visibility === 'private' ? (
        <div className='flex-center'>
          <span className='text-text-2'>{t('You must join in this community to see posts!')}</span>
        </div>
      ) : (
        <div className='post *:mb-6'>
          {postsByCommunity.length ? (
            <>
              {postsByCommunity.map((post) => (
                <Post key={post._id} post={post} feature='community' communityID={communityID} />
              ))}
              {hasNextPostsByCommunity && (
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
