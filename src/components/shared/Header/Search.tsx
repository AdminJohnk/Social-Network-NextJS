'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from '@/navigation';
import { IoClose, IoSearch, IoSearchOutline, IoTrash } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import { useQueryClient } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';

import { useCurrentUserInfo, useGetSearchLogs, useGetUsersByName } from '@/hooks/query';
import { useCreateSearchLog, useDeleteSearchLog } from '@/hooks/mutation';
import { useDebounce } from '@/hooks/special';
import { IUserInfo } from '@/types';
import { getImageURL } from '@/lib/utils';

export default function SearchHeader() {
  const t = useTranslations();
  const queryClient = useQueryClient();
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<IUserInfo[]>([]);

  const searchDebounce = useDebounce(search, 500);

  const { searchLogs, isLoadingSearchLogs } = useGetSearchLogs();
  const { currentUserInfo } = useCurrentUserInfo();
  const { usersByName, isLoadingUsersByName } = useGetUsersByName(searchDebounce);

  const { mutateCreateSearchLog } = useCreateSearchLog();
  const { mutateDeleteSearchLog, isLoadingDeleteSearchLog } = useDeleteSearchLog();

  const handleDeleteSearchLog = (
    e: React.MouseEvent<Element, MouseEvent>,
    type = 'keyword' || 'recently_search',
    value: string
  ) => {
    e.stopPropagation();
    mutateDeleteSearchLog({
      user: currentUserInfo._id,
      [type]: value
    }).then(() => {
      queryClient.refetchQueries({ queryKey: ['searchLogs'] });
    });
  };

  const handleShowUserProfile = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
    e.stopPropagation();
    mutateCreateSearchLog({
      user: currentUserInfo._id,
      recently_search: id
    }).then(() => {
      queryClient.refetchQueries({ queryKey: ['searchLogs'] });
    });
    router.push(`/profile/${id}`);
  };

  const getSearchPage = (search: string) => {
    if (search.trim() === '') return;
    mutateCreateSearchLog({
      user: currentUserInfo._id,
      keyword: search.trim()
    }).then(() => {
      queryClient.refetchQueries({ queryKey: ['searchLogs'] });
    });
    router.push(`/search/top?search=${search}`);
  };

  useEffect(() => {
    if (searchDebounce !== '' && usersByName) {
      setUsers(usersByName);
    } else {
      setUsers([]);
    }
  }, [usersByName, searchDebounce]);

  return (
    <>
      <div
        id='search-box'
        className='xl:w-[680px] sm:w-96 lg:w-[560px] sm:relative rounded-xl overflow-hidden z-20 bg-foreground-1 max-md/2:hidden w-screen left-0 max-sm:fixed max-sm:top-2'>
        <IoSearch className='absolute left-4 top-1/2 -translate-y-1/2' />
        <input
          type='text'
          placeholder={`${t('Search Friends, Posts')}..`}
          className='w-full !pl-10 !font-normal !bg-transparent h-12 !text-sm border-none'
          onChange={(e) => { setSearch(e.target.value.trim()) }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              getSearchPage(search);
            }
          }}
        />
      </div>
      <div
        id='search-box2'
        className='hidden !z-10'
        data-uk-drop='pos: bottom-center; animation: uk-animation-slide-bottom-small; mode:click; animate-out: true'>
        <div className='xl:w-[694px] sm:w-96 lg:w-[574px] bg-foreground-1 w-screen p-2 rounded-lg shadow-lg -mt-14 pt-14'>
          {searchDebounce === '' ? (
            isLoadingSearchLogs || isLoadingDeleteSearchLog ? (
              <div className='flex-center w-full h-full p-5'>
                <CircularProgress size={20} className='!text-text-1' />
              </div>
            ) : (searchLogs &&
              searchLogs.keywords.length === 0 &&
              searchLogs.recently_search_list.length === 0) ||
              !searchLogs ? (
              <div className='flex-center w-full h-full p-5'>
                {t('You have not searched for anything yet')}
              </div>
            ) : (
              <>
                <div className='flex justify-between px-2 py-2.5 text-sm font-medium'>
                  <div className='text-black dark:text-white'>{t('Recent')}</div>
                  <button type='button' className='text-blue-500 hover:underline'>
                    {t('Clear')}
                  </button>
                </div>
                <nav className='text-sm font-medium'>
                  {searchLogs.keywords.map((item) => (
                    <div
                      key={item}
                      onClick={() => getSearchPage(item)}
                      className='relative px-3 py-1.5 cursor-pointer flex items-center gap-4 hover:bg-hover-1 rounded-lg'>
                      <IoSearchOutline className='text-2xl' />
                      {item}
                      <IoClose
                        className='text-lg absolute p-0.5 rounded-full hover:bg-hover-2 z-10 right-3 top-1/2 -translate-y-1/2'
                        onClick={(e) => handleDeleteSearchLog(e, 'keyword', item)}
                      />
                    </div>
                  ))}
                  {searchLogs.recently_search_list.map((user) => (
                    <div
                      key={user._id}
                      className='relative px-3 py-1.5 cursor-pointer flex items-center gap-4 hover:bg-hover-1 rounded-lg'
                      onClick={(e) => handleShowUserProfile(e, user._id)}>
                      <Image
                        src={getImageURL(user.user_image, 'avatar')}
                        className='w-9 h-9 rounded-full'
                        alt=''
                        width={50}
                        height={50}
                      />
                      <div>
                        <div>{user.name}</div>
                        <div className='text-xs text-blue-500 font-medium mt-0.5'>{t('Friend')}</div>
                      </div>
                      <IoClose
                        className='text-lg absolute p-0.5 rounded-full hover:bg-hover-2 z-10 right-3 top-1/2 -translate-y-1/2'
                        onClick={(e) => handleDeleteSearchLog(e, 'recently_search', user._id)}
                      />
                    </div>
                  ))}
                </nav>
              </>
            )
          ) : (
            <>
              <div className='flex justify-start px-2 py-2.5 text-sm font-medium'>
                <div className='text-black dark:text-white'>{t('Search')}</div>
              </div>
              <nav className='text-sm font-medium'>
                {isLoadingUsersByName ? (
                  <div className='flex-center w-full h-full p-5'>
                    <CircularProgress size={20} className='!text-text-1' />
                  </div>
                ) : users.length === 0 ? (
                  <div className='flex-center w-full h-full p-5'>
                    {t('Cannot find anyone named')} "{searchDebounce}"
                  </div>
                ) : (
                  users.map((user) => (
                    <div
                      key={user._id}
                      className='relative px-3 py-1.5 cursor-pointer flex items-center gap-4 hover:bg-hover-1 rounded-lg'
                      onClick={(e) => handleShowUserProfile(e, user._id)}>
                      <Image
                        src={getImageURL(user.user_image, 'avatar')}
                        className='w-9 h-9 rounded-full'
                        alt=''
                        width={50}
                        height={50}
                      />
                      <div>
                        <div>{user.name}</div>
                        <div className='text-xs text-blue-500 font-medium mt-0.5'>{t('Friend')}</div>
                      </div>
                    </div>
                  ))
                )}
              </nav>
              <div
                className='flex gap-1.5 mt-2 items-center cursor-pointer p-2 hover:bg-hover-1 rounded-lg'
                onClick={() => getSearchPage(searchDebounce)}>
                <div className='avatar relative'>
                  <IoSearchOutline className='text-xl' />
                </div>
                <div className='name text-center ml-2'>
                  {t('Search for')} "{searchDebounce}"
                </div>
              </div>
            </>
          )}
          <div className='flex justify-end pr-2 text-sm font-medium text-red-500'>
            <div className='flex hover:bg-red-200 cursor-pointer p-1.5 rounded'>
              <IoTrash className='mr-2 text-lg' />
              {t('Clear your history')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
