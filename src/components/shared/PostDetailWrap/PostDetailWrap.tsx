'use client';

import { usePostData } from '@/hooks/query';
import * as React from 'react';
import Post from '../Post/Post';
import { IPost } from '@/types';

export interface IPostDetailWrapProps {
  postID: string;
}

export default function PostDetailWrap({ postID }: IPostDetailWrapProps) {
  const { post, isLoadingPost } = usePostData(postID as string);

  return (
    <>
      {isLoadingPost ? (
        <></>
      ) : (
        post && <Post post={post as IPost} feature={'detail'}></Post>
      )}
    </>
  );
}
