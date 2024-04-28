'use client';

import { useRef } from 'react';
import { useCurrentUserInfo, useGetPostsBySearchKey, useGetUsersByName } from '@/hooks/query';
import { CircularProgress } from '@mui/material';
import Post from '@/components/shared/Post';
import { getImageURL } from '@/lib/utils';
import AvatarMessage from '@/components/pages/Chat/Avatar/AvatarMessage';

export interface ISearchProps {
}

export default function Search({ }: ISearchProps) {

  const { currentUserInfo } = useCurrentUserInfo();

  const searchValue = new URLSearchParams(window.location.search).get('search') || '';

  const bottomRef = useRef<HTMLDivElement>(null);

  const { postsBySearchKey, isLoadingPostsBySearchKey, isFetchingPostsBySearchKey } = useGetPostsBySearchKey(searchValue);
  const { usersByName, isLoadingUsersByName } = useGetUsersByName(searchValue);

  return (
    <>
      {isLoadingPostsBySearchKey || isLoadingUsersByName ? (
        <div className='flex justify-center items-center h-96'>
          <div className='flex flex-col items-center'>
            <CircularProgress />
            <span className='mt-4'>Loading...</span>
          </div>
        </div>
      ) : (
        <div className='ms-60 mt-16 max-lg:ms-0'>
          <div className='px-2 pt-10 2xl:px-32 xl:px-24 lg:px-14'>
            <div className='mt-14 max-md:mt-0 flex-col flex-center w-full *:mb-6'>
              {usersByName.length > 0 && (
                <div className='w-3/5 max-lg:w-full px-9 max-md:px-2'>
                  <div className='bg-foreground-1 rounded-lg p-4'>
                    <span className='text-text-2'>Users</span>
                    <div className='mt-4'>
                      {usersByName.map((item) => {
                        return (
                          <div key={item._id} className='flex items-center gap-4'>
                            <AvatarMessage user={item} />
                            <span>{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              {postsBySearchKey.length > 0 && (
                <div className='w-3/5 max-lg:w-full px-9 max-md:px-2'>
                  {postsBySearchKey.map((item, index) => {
                    return (
                      <div key={item._id} className='*:mb-6'>
                        {index === postsBySearchKey.length - 3 && (
                          <div className='absolute max-h-[130rem] w-full -z-10' ref={bottomRef} />
                        )}
                        <Post key={item._id} post={item} />
                      </div>
                    );
                  })}
                  {isFetchingPostsBySearchKey && (
                    <div className='flex flex-col items-center'>
                      <CircularProgress />
                      <span className='mt-4'>Loading...</span>
                    </div>
                  )}
                </div>
              )}
              {usersByName.length === 0 && postsBySearchKey.length === 0 && (
                <div className='w-3/5 max-lg:w-full px-9 max-md:px-2 flex-center'>
                  <span className='bg-foreground-1 w-full text-center rounded-lg p-4 text-text-2'>No result found!!!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </>
  );
}
