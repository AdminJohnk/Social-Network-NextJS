'use client';

import TagItem from '@/components/pages/QuestionTag/TagItem';
import { useFindTagsQuestions, useGetAllTagQuestions, useGetNumberTagQuestions } from '@/hooks/query';
import { useDebounce } from '@/hooks/special';
import { cn } from '@/lib/utils';
import { CircularProgress, Pagination } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

export default function Tags() {
  const t = useTranslations();

  const [sortBy, setSortBy] = useState<'popular' | 'name' | 'new'>('popular');
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');

  const searchDebounce = useDebounce(search, 500);

  const { allTagQuestions, refetchAllTagQuestions, isFetchingAllTagQuestions } = useGetAllTagQuestions(
    sortBy,
    page
  );

  const { findTagsQuestions, isFetchingFindTagsQuestions, refetchFindTagsQuestions } = useFindTagsQuestions(
    searchDebounce,
    sortBy,
    page
  );

  const { numberTagQuestions } = useGetNumberTagQuestions(searchDebounce);
  const page_number = Math.ceil(numberTagQuestions / 24) || 1;

  useEffect(() => {
    refetchAllTagQuestions();
    if (searchDebounce) {
      refetchFindTagsQuestions();
    }
  }, [sortBy, page]);

  return (
    <div className='ms-60 mt-16 pb-5 pt-5 max-lg/2:ms-0'>
      <div className='mx-auto max-w-[1070px]'>
        <div className='h3-semibold mt-3'>{t('Tags')}</div>
        <div className='mt-4 w-[60%]'>
          {t('A tag is a keyword or label that categorizes your question with other, similar questions')}
          .&nbsp;
          {t('Using the right tags makes it easier for others to find and answer your question')}.
        </div>
        <div className='flex-between mt-5'>
          <div className='flex-start gap-2 rounded-md border border-border-1 px-2 py-1'>
            <span className='px-2 py-1'>
              <IoSearchSharp className='size-5 text-text-2' />
            </span>
            <input
              className='w-full bg-transparent outline-none'
              placeholder={t('Filter by tag name')}
              onChange={(e) => {
                setSearch(e.target.value);
                if (page !== 1) setPage(1);
              }}
            />
          </div>
          <div className='flex-start gap-2 rounded-md border border-border-1 px-3 py-1 *:cursor-pointer *:rounded-md *:px-3 *:py-1 *:duration-300 hover:*:bg-hover-1'>
            <span
              className={cn(sortBy === 'popular' && 'bg-hover-1')}
              onClick={() => {
                if (sortBy === 'popular') return;
                setSortBy('popular');
              }}>
              {t('Popular')}
            </span>
            <span
              className={cn(sortBy === 'name' && 'bg-hover-1')}
              onClick={() => {
                if (sortBy === 'name') return;
                setSortBy('name');
              }}>
              {t('Name')}
            </span>
            <span
              className={cn(sortBy === 'new' && 'bg-hover-1')}
              onClick={() => {
                if (sortBy === 'new') return;
                setSortBy('new');
              }}>
              {t('New')}
            </span>
          </div>
        </div>
        {isFetchingAllTagQuestions || isFetchingFindTagsQuestions ? (
          <div className='flex-center my-8'>
            <CircularProgress className='!text-text-1' size={35} />
          </div>
        ) : (
          <div className='mt-5 grid grid-cols-4 gap-3'>
            {searchDebounce
              ? findTagsQuestions.map((tag, index) => (
                  <div key={index} className='col-span-1 mb-3'>
                    <TagItem tag={tag} />
                  </div>
                ))
              : allTagQuestions.map((tag, index) => (
                  <div key={index} className='col-span-1 mb-3'>
                    <TagItem tag={tag} />
                  </div>
                ))}
          </div>
        )}
        <div className='flex-between mt-10'>
          <div>
            <Pagination
              count={page_number}
              variant='outlined'
              shape='rounded'
              page={page}
              onChange={(_, pageMUI) => {
                if (pageMUI === page) return;
                setPage(pageMUI);
              }}
              sx={{
                '& .MuiPaginationItem-root': {
                  backgroundColor: 'var(--foreground1)',
                  color: 'var(--text2)'
                },
                '& .MuiPaginationItem-root:hover': {
                  backgroundColor: 'var(--hover1)',
                  color: 'var(--text1)'
                },
                '& .MuiPaginationItem-root:focus': {
                  backgroundColor: 'var(--hover2)',
                  color: 'var(--text1)'
                },
                '& .Mui-selected': {
                  backgroundColor: 'var(--hover2)',
                  color: 'var(--text1)'
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
