'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
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

  const searchRef = useRef<HTMLInputElement>(null);

  const [cursor, setCursor] = useState(0);
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<IUserInfo[]>([]);

  const searchDebounce = useDebounce(search, 500);

  const { searchLogs, isLoadingSearchLogs } = useGetSearchLogs();
  const { currentUserInfo } = useCurrentUserInfo();
  const { usersByName, isLoadingUsersByName } = useGetUsersByName(searchDebounce.trim());

  const { mutateCreateSearchLog } = useCreateSearchLog();
  const { mutateDeleteSearchLog } = useDeleteSearchLog();

  const closeSearchDropdown = () => {
    UIkit.drop('#search-box2').hide();
  };

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
    closeSearchDropdown();
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
    closeSearchDropdown();
  };

  useEffect(() => {
    if (searchDebounce !== '' && usersByName) {
      setUsers(usersByName);
    } else {
      setUsers([]);
    }
  }, [usersByName, searchDebounce]);

  useEffect(() => {
    UIkit.util.on('#search-box2', 'beforehide', function (e: Event) {
      if (searchRef.current && searchRef.current.isSameNode(document.activeElement)) {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <>
      <div
        id='search-box'
        className='left-0 z-20 w-screen overflow-hidden rounded-xl bg-foreground-1 max-md/2:hidden max-sm:fixed max-sm:top-2 sm:relative sm:w-96 lg:w-[560px] xl:w-[680px]'>
        <IoSearch className='absolute left-4 top-1/2 -translate-y-1/2' />
        <input
          ref={searchRef}
          type='text'
          value={search}
          placeholder={`${t('Search Friends, Posts')}..`}
          className='h-12 w-full border-none !bg-transparent !pl-10 !text-sm !font-normal'
          onChange={(e) => {
            setSearch(e.currentTarget.value);
          }}
          onClick={(e) => {
            const currentCursor = e.currentTarget.selectionStart;
            setCursor(currentCursor || 0);
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              getSearchPage(search);
            }
            if (e.key === ' ') {
              setSearch((pre) => pre.slice(0, cursor) + ' ' + pre.slice(cursor));
            }
            const currentCursor = e.currentTarget.selectionStart;
            setCursor(currentCursor || 0);
          }}
        />
      </div>
      <div
        id='search-box2'
        className='!z-10'
        data-uk-drop='pos: bottom-center; animation: uk-animation-slide-bottom-small; mode:click; animate-out: true'
        hidden>
        <div className='-mt-14 w-screen rounded-lg bg-foreground-1 p-2 pt-14 shadow-lg sm:w-96 lg:w-[574px] xl:w-[694px]'>
          {searchDebounce === '' ? (
            isLoadingSearchLogs ? (
              <div className='flex-center h-full w-full p-5'>
                <CircularProgress size={20} className='!text-text-1' />
              </div>
            ) : (searchLogs &&
                searchLogs.keywords.length === 0 &&
                searchLogs.recently_search_list.length === 0) ||
              !searchLogs ? (
              <div className='flex-center h-full w-full p-5'>
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
                      className='relative flex cursor-pointer items-center gap-4 rounded-lg px-3 py-1.5 hover:bg-hover-1'>
                      <IoSearchOutline className='text-2xl' />
                      {item}
                      <IoClose
                        className='absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-0.5 text-lg hover:bg-hover-2'
                        onClick={(e) => handleDeleteSearchLog(e, 'keyword', item)}
                      />
                    </div>
                  ))}
                  {searchLogs.recently_search_list.map((user) => (
                    <div
                      key={user._id}
                      className='relative flex cursor-pointer items-center gap-4 rounded-lg px-3 py-1.5 hover:bg-hover-1'
                      onClick={(e) => handleShowUserProfile(e, user._id)}>
                      <Image
                        src={getImageURL(user.user_image, 'avatar')}
                        className='h-9 w-9 rounded-full'
                        alt=''
                        width={50}
                        height={50}
                      />
                      <div>
                        <div>{user.name}</div>
                        {user.is_friend && (
                          <div className='mt-0.5 text-xs font-medium text-blue-500'>{t('Friend')}</div>
                        )}
                      </div>
                      <IoClose
                        className='absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-0.5 text-lg hover:bg-hover-2'
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
                  <div className='flex-center h-full w-full p-5'>
                    <CircularProgress size={20} className='!text-text-1' />
                  </div>
                ) : users.length === 0 ? (
                  <div className='flex-center h-full w-full p-5'>
                    {t('Cannot find anyone named')} &quot;{searchDebounce}&quot;
                  </div>
                ) : (
                  users.map((user) => (
                    <div
                      key={user._id}
                      className='relative flex cursor-pointer items-center gap-4 rounded-lg px-3 py-1.5 hover:bg-hover-1'
                      onClick={(e) => handleShowUserProfile(e, user._id)}>
                      <Image
                        src={getImageURL(user.user_image, 'avatar')}
                        className='h-9 w-9 rounded-full'
                        alt=''
                        width={50}
                        height={50}
                      />
                      <div>
                        <div>{user.name}</div>
                        {user.is_friend && (
                          <div className='mt-0.5 text-xs font-medium text-blue-500'>{t('Friend')}</div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </nav>
              <div
                className='mt-2 flex cursor-pointer items-center gap-1.5 rounded-lg p-2 hover:bg-hover-1'
                onClick={() => getSearchPage(searchDebounce)}>
                <div className='avatar relative'>
                  <IoSearchOutline className='text-xl' />
                </div>
                <div className='name ml-2 text-center'>
                  {t('Search for')} &quot;{searchDebounce}&quot;
                </div>
              </div>
            </>
          )}
          <div className='flex justify-end pr-2 text-sm font-medium text-red-500'>
            <div className='flex cursor-pointer rounded p-1.5 hover:bg-red-200'>
              <IoTrash className='mr-2 text-lg' />
              {t('Clear your history')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
