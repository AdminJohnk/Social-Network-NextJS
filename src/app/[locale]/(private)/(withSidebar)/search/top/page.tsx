'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useQueryClient } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';

import Post from '@/components/shared/Post';
import AvatarMessage from '@/components/pages/Chat/Avatar/AvatarMessage';
import FriendButton from '@/components/pages/Profile/FriendButton';
import HoverUser from '@/components/shared/Post/HoverUser';
import { useRouter } from '@/navigation';
import { useCurrentUserInfo, useGetPostsBySearchKey, useGetUsersByName } from '@/hooks/query';
import { useCreateSearchLog } from '@/hooks/mutation';

export interface ISearchProps {
  searchParams: {
    search: string;
  };
}

export default function Search({ searchParams: { search } }: ISearchProps) {
  const t = useTranslations();
  const queryClient = useQueryClient();
  const router = useRouter();

  const bottomRef = useRef<HTMLDivElement>(null);

  const { currentUserInfo } = useCurrentUserInfo();
  const { postsBySearchKey, isLoadingPostsBySearchKey, isFetchingPostsBySearchKey } =
    useGetPostsBySearchKey(search);
  const { usersByName, isLoadingUsersByName } = useGetUsersByName(search);

  const { mutateCreateSearchLog } = useCreateSearchLog();

  useEffect(() => {
    if (search) {
      mutateCreateSearchLog({
        user: currentUserInfo._id,
        keyword: search.trim()
      }).then(() => {
        queryClient.refetchQueries({ queryKey: ['searchLogs'] });
      });
    }
  }, []);

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
                    <span className='text-text-2'>{t('People')}</span>
                    <div className='mt-4'>
                      {usersByName.map((item) => {
                        return (
                          <div key={item._id} className='*:mb-2 flex-between'>
                            <div key={item._id} className='flex items-center gap-4'>
                              <HoverUser user={item}>
                                <div
                                  className='cursor-pointer'
                                  onClick={() => {
                                    router.push(`/profile/${item._id}`);
                                  }}>
                                  <AvatarMessage user={item} />
                                </div>
                              </HoverUser>
                              <div className='flex flex-col'>
                                <HoverUser user={item}>
                                  <span
                                    className='font-bold cursor-pointer hover:underline'
                                    onClick={() => {
                                      router.push(`/profile/${item._id}`);
                                    }}>
                                    {item.name}
                                  </span>
                                </HoverUser>
                                <span className='font-semibold text-text-2'>{item.email}</span>
                              </div>
                            </div>
                            <div>
                              <FriendButton profileID={item._id} />
                            </div>
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
                  <span className='bg-foreground-1 w-full text-center rounded-lg p-4 text-text-2'>
                    {t('No result found')}!!!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
