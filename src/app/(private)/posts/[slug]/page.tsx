import Post from '@/components/Post/Post';
import * as React from 'react';

export interface IPostDetailProps {}

export default function PostDetail(props: IPostDetailProps) {
  return (
    <div
      className='ms-60 max-lg/2:ms-20 @container/pri'
      style={{
        zIndex: 10,
      }}
    >
      <div className='newfeed px-40 py-10 @6xl/pri:px-32 @5xl/pri:px-24 @xl/pri:px-14 @sm/pri:px-2'>
        <Post />
      </div>
    </div>
  );
}
