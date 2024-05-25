'use client';

import { notFound } from 'next/navigation';

import { usePostData } from '@/hooks/query';
import { Post, PostSkeleton } from '@/components/shared/Post';

export interface IPostDetailWrapProps {
  postID: string;
}

export default function PostDetailWrap({ postID }: IPostDetailWrapProps) {
  const { post, isLoadingPost, isErrorPost } = usePostData(postID as string);

  if (isErrorPost || (post && !Object.keys(post).length)) notFound();

  return <>{isLoadingPost ? <PostSkeleton /> : post && <Post post={post} />}</>;
}
