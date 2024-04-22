'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Link, useRouter } from '@/navigation';
import { IoClose, IoSearch, IoSearchOutline, IoTrash } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import { useSession } from 'next-auth/react';
import { useQueryClient } from '@tanstack/react-query';
import { FaSpinner } from 'react-icons/fa';

import { useCurrentUserInfo, useGetSearchLogs, useGetUsersByName } from '@/hooks/query';
import { useCreateSearchLog, useDeleteSearchLog } from '@/hooks/mutation';
import { useDebounce } from '@/hooks/special';
import { IUserInfo } from '@/types';
import { CgTrashEmpty } from 'react-icons/cg';
import { getImageURL } from '@/lib/utils';

export default function SearchHeader() {
  const t = useTranslations();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<IUserInfo[]>([]);

  const searchDebounce = useDebounce(search, 500);

  const { searchLogs, isLoadingSearchLogs } = useGetSearchLogs();
  const { currentUserInfo } = useCurrentUserInfo(session?.id || '');
  const { usersByName } = useGetUsersByName(searchDebounce);

  const { mutateCreateSearchLog } = useCreateSearchLog();
  const { mutateDeleteSearchLog } = useDeleteSearchLog();

  const handleDeleteSearchLog = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    type = 'keyword' || 'recently_search',
    value: string
  ) => {
    e.stopPropagation();
    mutateDeleteSearchLog({
      user: currentUserInfo._id,
      [type]: value
    }).then(() => {
      queryClient.resetQueries({ queryKey: ['searchLogs'] });
    });
  };

  const handleShowUserProfile = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
    e.stopPropagation();
    mutateCreateSearchLog({
      user: currentUserInfo._id,
      recently_search: id
    }).then(() => {
      queryClient.resetQueries({ queryKey: ['searchLogs'] });
    });
    router.push(`/profile/${id}`);
  };

  const getSearchPage = (search: string) => {
    if (search.trim() === '') return;
    mutateCreateSearchLog({
      user: currentUserInfo._id,
      keyword: search.trim()
    }).then(() => {
      queryClient.resetQueries({ queryKey: ['searchLogs'] });
    });
    router.push(`/search/top?search=${search}`);
    // setIsListVisible(false);
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
          onChange={(e) => setSearch(e.target.value.trim())}
        />
      </div>
      <div
        className='hidden !z-10'
        data-uk-drop='pos: bottom-center; animation: uk-animation-slide-bottom-small; mode:click; animate-out: true'>
        <div className='xl:w-[694px] sm:w-96 lg:w-[574px] bg-foreground-1 w-screen p-2 rounded-lg shadow-lg -mt-14 pt-14'>
          {searchDebounce === '' ? (
            isLoadingSearchLogs ? (
              <div className='py-20'>
                <FaSpinner>
                  <div className='content' />
                </FaSpinner>
              </div>
            ) : (searchLogs &&
                searchLogs.keywords.length === 0 &&
                searchLogs.recently_search_list.length === 0) ||
              !searchLogs ? (
              <CgTrashEmpty className='cursor-default px-40' />
            ) : (
              <>
                <div className='flex justify-between px-2 py-2.5 text-sm font-medium'>
                  <div className='text-black dark:text-white'>{t('Recent')}</div>
                  <button type='button' className='text-blue-500'>
                    {t('Clear')}
                  </button>
                </div>
                <nav className='text-sm font-medium'>
                  {searchLogs.keywords.map((item) => (
                    <Link
                      key={item}
                      href=''
                      className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-1 rounded-lg'>
                      <IoSearchOutline className='text-2xl' />
                      {item}
                      <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
                    </Link>
                  ))}
                  {searchLogs.recently_search_list.map((user) => (
                    <Link
                      key={user._id}
                      href={`/profile/${user._id}`}
                      className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-1 rounded-lg'>
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
                      <IoClose className='text-base absolute right-3 top-1/2 -translate-y-1/2' />
                    </Link>
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
                {users.map((user) => (
                  <Link
                    key={user._id}
                    href={`/profile/${user._id}`}
                    className='relative px-3 py-1.5 flex items-center gap-4 hover:bg-hover-1 rounded-lg'>
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
                  </Link>
                ))}
              </nav>
              <div
                className='flex gap-1.5 mt-2 items-center cursor-pointer p-2 hover:bg-hover-1 rounded-lg'
                onClick={() => getSearchPage(searchDebounce)}>
                <div className='avatar relative'>
                  <IoSearchOutline className='text-xl' />
                </div>
                <div className='name text-center ml-2'>Search for "{searchDebounce}"</div>
              </div>
            </>
          )}
          <div className='flex justify-end pr-2 text-sm font-medium text-red-500'>
            <Link href='' className='flex hover:bg-red-50 dark:hover:bg-slate-800 p-1.5 rounded'>
              <IoTrash className='mr-2 text-lg' />
              {t('Clear your history')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
