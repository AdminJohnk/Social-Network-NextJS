'use client';

import { useRef } from 'react';
import { useGetPostsByHashtag } from '@/hooks/query';
import { CircularProgress } from '@mui/material';
import { Post } from '@/components/shared/Post';
import { useTranslations } from 'next-intl';

export interface IHashTagsProps {
  params: { slug: string };
}

export default function HashTags({ params: { slug } }: IHashTagsProps) {
  const t = useTranslations();
  const { postsByHashtag, isLoadingPostsByHashtag, isFetchingPostsByHashtag } = useGetPostsByHashtag(slug);

  const bottomRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {isLoadingPostsByHashtag ? (
        <div className='flex h-96 items-center justify-center'>
          <div className='flex flex-col items-center'>
            <CircularProgress />
            <span className='mt-4'>Loading...</span>
          </div>
        </div>
      ) : (
        <div className='ms-60 mt-16 max-lg/2:ms-0'>
          <div className='px-22xl:px-32 lg:px-14 xl:px-24'>
            <div className='mt-10 flex h-fit min-h-28 w-full flex-col items-start justify-center rounded-b-lg bg-foreground-2 px-8 py-4'>
              <span className='max-w-full whitespace-break-spaces break-words text-4xl font-bold text-text-1'>
                #{slug}
              </span>
              {postsByHashtag.length > 0 && (
                <span className='text-2xl font-semibold text-text-2'>
                  {t('posts', { count: postsByHashtag.length })}
                </span>
              )}
            </div>
            <div className='flex-center mt-6 w-full flex-col *:mb-6 max-md:mt-2'>
              {postsByHashtag.length > 0 && (
                <div className='w-3/5 px-9 max-lg:w-full max-md:px-2'>
                  {postsByHashtag.map((item, index) => {
                    return (
                      <div key={item._id} className='*:mb-6'>
                        {index === postsByHashtag.length - 3 && (
                          <div className='absolute -z-10 max-h-[130rem] w-full' ref={bottomRef} />
                        )}
                        <Post key={item._id} post={item} />
                      </div>
                    );
                  })}
                  {isFetchingPostsByHashtag && (
                    <div className='flex flex-col items-center'>
                      <CircularProgress />
                      <span className='mt-4'>Loading...</span>
                    </div>
                  )}
                </div>
              )}
              {postsByHashtag.length === 0 && (
                <div className='flex-center w-3/5 px-9 max-lg:w-full max-md:px-2'>
                  <span className='w-full rounded-lg bg-foreground-1 p-4 text-center text-text-2'>
                    No result found!!!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
