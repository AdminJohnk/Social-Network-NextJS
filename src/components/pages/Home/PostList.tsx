'use client';

import Post from '@/components/shared/Post/Post';
import PostSkeleton from '@/components/shared/Post/PostSkeleton';
import { useAllNewsfeedPostsData } from '@/hooks/query';

export default function PostList() {
  const {
    allNewsfeedPosts: posts,
    isFetchingNextNewsfeedPosts: isFetchingNextPosts,
    fetchNextNewsfeedPosts: fetchNextPosts,
    hasNextNewsfeedPosts: hasNextPosts,
    isLoadingAllNewsfeedPosts: isLoading
  } = useAllNewsfeedPostsData();

  return (
    <>
      {isLoading ? (
        <div className='post-skeleton *:mb-6'>
          <PostSkeleton />
        </div>
      ) : (
        <div className='post *:mb-6'>
          {posts ? (
            posts.map((post) => {
              if (post.type === 'Post') return <Post key={post._id} post={post} />;
            })
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
