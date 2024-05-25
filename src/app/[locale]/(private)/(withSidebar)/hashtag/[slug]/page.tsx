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
        <div className='flex justify-center items-center h-96'>
          <div className='flex flex-col items-center'>
            <CircularProgress />
            <span className='mt-4'>Loading...</span>
          </div>
        </div>
      ) : (
        <div className='ms-60 mt-16 max-lg:ms-0'>
          <div className='px-22xl:px-32 xl:px-24 lg:px-14'>
            <div className='bg-foreground-2 w-full h-28 flex flex-col items-start justify-center mt-10 rounded-b-lg'>
              <span className='text-text-2 text-4xl font-bold ml-8'>#{slug}</span>
              {postsByHashtag.length > 0 && (
                <span className='text-text-2 text-2xl font-semibold ml-8'>
                  {t('posts', { count: postsByHashtag.length })}
                </span>
              )}
            </div>
            <div className='mt-6 max-md:mt-2 flex-col flex-center w-full *:mb-6'>
              {postsByHashtag.length > 0 && (
                <div className='w-3/5 max-lg:w-full px-9 max-md:px-2'>
                  {postsByHashtag.map((item, index) => {
                    return (
                      <div key={item._id} className='*:mb-6'>
                        {index === postsByHashtag.length - 3 && (
                          <div className='absolute max-h-[130rem] w-full -z-10' ref={bottomRef} />
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
                <div className='w-3/5 max-lg:w-full px-9 max-md:px-2 flex-center'>
                  <span className='bg-foreground-1 w-full text-center rounded-lg p-4 text-text-2'>
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
