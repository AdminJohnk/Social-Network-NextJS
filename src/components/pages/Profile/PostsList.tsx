'use client';

import { useSession } from 'next-auth/react';

import {
  useCurrentUserInfo,
  useOtherUserInfo,
  useUserPostsData
} from '@/hooks/query';
import PostSkeleton from '@/components/shared/Post/PostSkeleton';
import Post from '@/components/shared/Post/Post';

interface PostsListProps {
  profileID: string;
}

export default function PostsList({ profileID }: PostsListProps) {
  const { data: session } = useSession();

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
  return (
    <>
      {isLoadingUserPosts ? (
        <PostSkeleton />
      ) : userPosts?.length === 0 ? (
        <>No Post</>
      ) : (
        userPosts?.map(post => <Post key={post._id} post={post}></Post>)
      )}
    </>
  );
}
