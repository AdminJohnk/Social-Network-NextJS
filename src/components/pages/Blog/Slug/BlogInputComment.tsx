import Image from 'next/image';
import * as React from 'react';

export interface IBlogInputCommentProps {}

export default function BlogInputComment(props: IBlogInputCommentProps) {
  return (
    <div className='sm:px-4 sm:py-3 p-2.5 border-t border-border-1 flex items-center gap-1 -m-6 mt-0 bg-foreground-2'>
      <Image
        src='/images/avatars/avatar-7.jpg'
        alt=''
        className='w-6 h-6 rounded-full'
        width={50}
        height={50}
      />

      <div className='flex-1 relative overflow-hidden h-10'>
        <textarea
          placeholder='Add Comment....'
          rows={1}
          className='w-full resize-none !bg-transparent px-4 py-2 !border-transparent !ring-transparent placeholder:text-text-1 placeholder:base-regular'
          aria-haspopup='true'
          aria-expanded='false'
        />
        <div className='!top-2 pr-2 uk-drop' data-uk-drop='pos: bottom-right; mode: click'>
          <div
            className='flex items-center gap-2'
            data-uk-scrollspy='target: > svg; cls: uk-animation-slide-right-small; delay: 100 ;repeat: true'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6 fill-sky-600'
              style={{ opacity: 0 }}>
              <path
                fillRule='evenodd'
                d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                clipRule='evenodd'></path>
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 fill-pink-600'
              style={{ opacity: 0 }}>
              <path d='M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z'></path>
            </svg>
          </div>
        </div>
      </div>

      <button
        type='submit'
        className='rounded-full border border-text-3 py-1.5 px-3.5 bg-foreground-2 hover:bg-hover-2 duration-300'>
        Replay
      </button>
    </div>
  );
}
