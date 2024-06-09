'use client';

import { useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { Skeleton } from '@mui/material';
import { IoSearchOutline } from 'react-icons/io5';
import { useTranslations } from 'next-intl';

import { useGetCalled } from '@/hooks/query';
import { ICalled } from '@/types';
import { cn } from '@/lib/utils';
import CalledBox from './CalledBox';

export interface ICalledListProps {
}

export default function CalledList({ }: ICalledListProps) {
  const t = useTranslations();
  const { calledList, isLoadingGetCalled } = useGetCalled();
  const [calledLists, setCalledLists] = useState<ICalled[]>([]);
  useEffect(() => {
    setCalledLists(calledList);
  }, [calledList]);
  return (
    <>
      {/* <!-- heading title --> */}
      <div className='p-4'>
        <div className='flex mt-2 items-center justify-between'>
          <h2 className='text-2xl font-bold text-black ml-1 dark:text-white'> {t('Calls')} </h2>
          {/* <!-- right action buttons --> */}
          <div className='p-2 rounded-full hover:bg-hover-1'>
            <FaPlusCircle className='text-2xl rounded-lg' />
          </div>
        </div>

        {/* <!-- search --> */}
        <div className='relative mt-4'>
          <div className='absolute left-3 bottom-1/2 translate-y-1/2 flex'>
            <IoSearchOutline className='text-xl' />
          </div>
          <input
            type='text'
            placeholder={t('Search')}
            className='w-full !pl-10 !py-2 !rounded-lg bg-foreground-1'
            onChange={() => {
              // setSearch(e.target.value);
              // if (!isLoadingSearch) setIsLoadingSearch(true);
            }}
          />
        </div>
      </div>
      {isLoadingGetCalled ? (
        <div className='w-full flex-center flex-col gap-4 space-y-2 p-2'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className='w-full flex justify-between items-center px-2'>
              <div className="w-11/12 flex gap-3 items-center">
                <Skeleton variant="circular" width={40} height={40} className='!bg-foreground-1' />
                <div className='w-4/6 flex flex-col py-1'>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} className='!bg-foreground-1' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} className='!bg-foreground-1' />
                </div>
              </div>
              <Skeleton variant="circular" width={30} height={30} className='!bg-foreground-1' />
            </div>
          ))}
        </div>
      ) : (
        <div className='space-y-2 p-2 md:h-[calc(100vh-137px)] h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar-fg'>
          {calledLists?.map((called) => (
            <div
              key={called._id}
              className={cn('rounded-xl')}>
              <CalledBox key={called._id} called={called} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
