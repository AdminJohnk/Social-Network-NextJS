'use client';

import { useSavedPostsData } from '@/hooks/query';
import PostSkeleton from '@/components/shared/Post/PostSkeleton';
import Post from '@/components/shared/Post/Post';

export default function PostsList() {
  const { savedPosts, isLoadingSavedPosts } = useSavedPostsData();

  return (
    <>
      {isLoadingSavedPosts ? (
        <PostSkeleton />
      ) : savedPosts?.length === 0 ? (
        <>No Post</>
      ) : (
        <div className='post *:mb-6'>
          {savedPosts?.map((post) => (
            <Post key={post._id} post={post}></Post>
          ))}
        </div>
      )}
    </>
  );
}
