'use client';

import { notFound } from 'next/navigation';

import { useGetCommunityPostByID } from '@/hooks/query';
import { Post, PostSkeleton } from '@/components/shared/Post';

export interface IPostDetailWrapProps {
  postID: string;
  communityID: string;
}

export default function CommunityPostDetailWrap({ postID, communityID }: IPostDetailWrapProps) {
  const { communityPost, isLoadingCommunityPost, isErrorCommunityPost } = useGetCommunityPostByID(
    communityID,
    postID
  );

  if (isErrorCommunityPost || (communityPost && !Object.keys(communityPost).length)) notFound();

  return (
    <>
      {isLoadingCommunityPost ? (
        <PostSkeleton />
      ) : (
        communityPost && <Post post={communityPost} feature='community' communityID={communityID} />
      )}
    </>
  );
}
