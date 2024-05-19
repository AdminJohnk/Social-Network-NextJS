'use client';

import { notFound } from 'next/navigation';

import Post from './Post';
import { usePostData } from '@/hooks/query';
import { IPost } from '@/types';

export interface IPostDetailWrapProps {
  postID: string;
}

export default function PostDetailWrap({ postID }: IPostDetailWrapProps) {
  const { post, isLoadingPost, isErrorPost } = usePostData(postID as string);

  if (isErrorPost) notFound();

  return <>{isLoadingPost ? <></> : post && <Post post={post as IPost} feature={'detail'}></Post>}</>;
}
