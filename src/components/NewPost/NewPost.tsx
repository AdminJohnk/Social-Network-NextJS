/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { FaImages } from 'react-icons/fa';
import { RiLiveFill } from 'react-icons/ri';

export interface INewPostProps {}

export default function NewPost(props: INewPostProps) {
  return (
    <div className='new-post px-4 py-5 bg-foreground-1 flex-between gap-1 rounded-lg'>
      <div className='text-center py-2 bg-hover-1 basis-9/12 rounded-lg hover:bg-hover-2 cursor-pointer'>
        What do you have in mind?
      </div>
      <div className='basis-1/12 bg-blue-2 hover:bg-blue-3 flex-center py-2 rounded-lg duration-300 cursor-pointer'>
        <FaImages className='size-5 text-blue-1' />
      </div>
      <div className='basis-1/12 bg-pink-2 hover:bg-pink-3 flex-center py-2 rounded-lg duration-300 cursor-pointer'>
        <RiLiveFill className='size-5 text-pink-1' />
      </div>
    </div>
  );
}
