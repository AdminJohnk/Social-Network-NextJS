'use client';

import { useSession } from 'next-auth/react';

import {
  useCurrentUserInfo,
  useOtherUserInfo,
  useSavedPostsData,
  useUserPostsData
} from '@/hooks/query';
import PostSkeleton from '@/components/shared/Post/PostSkeleton';
import Post from '@/components/shared/Post/Post';

interface PostsListProps {}

export default function PostsList(props: PostsListProps) {
  const { savedPosts, isLoadingSavedPosts } = useSavedPostsData();

  return (
    <>
      {isLoadingSavedPosts ? (
        <PostSkeleton />
      ) : savedPosts?.length === 0 ? (
        <>No Post</>
      ) : (
        <div className='post *:mb-6'>
          {savedPosts?.map(post => (
            <Post key={post._id} post={post}></Post>
          ))}
        </div>
      )}
    </>
  );
}
