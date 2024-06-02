'use client';

import TagItem from '@/components/pages/QuestionTag/TagItem';
import { useGetAllTagQuestions } from '@/hooks/query';
import { cn } from '@/lib/utils';
import { Pagination } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

export interface ITagsProps {}

export default function Tags(props: ITagsProps) {
  const t = useTranslations();

  const [searchBy, setSearchBy] = useState<'popular' | 'name' | 'new'>(
    'popular'
  );
  const [questionPerPage, setQuestionPerPage] = useState(15);

  const { allTagQuestions } = useGetAllTagQuestions();

  console.log(allTagQuestions);

  return (
    <div className='ms-60 max-lg:ms-0 mt-16 pt-5 pb-5'>
      <div className='max-w-[1070px] mx-auto'>
        <div className='mt-3 h3-semibold'>{t('Tags')}</div>
        <div className='mt-4 w-[55%]'>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </div>
        <div className='flex-between mt-5'>
          <div className='flex-start gap-2 px-2 py-1 border border-border-1 rounded-md'>
            <span className='px-2 py-1'>
              <IoSearchSharp className='size-5 text-text-2' />
            </span>
            <input
              className='w-full bg-transparent outline-none'
              placeholder='Fillter by tag name'
            />
          </div>
          <div className='px-3 py-1 border border-border-1 rounded-md flex-start gap-2 hover:*:bg-hover-1 *:duration-300 *:cursor-pointer *:px-3 *:py-1 *:rounded-md'>
            <span
              className={cn(searchBy === 'popular' && 'bg-hover-1')}
              onClick={() => {
                setSearchBy('popular');
              }}
            >
              Popular
            </span>
            <span
              className={cn(searchBy === 'name' && 'bg-hover-1')}
              onClick={() => {
                setSearchBy('name');
              }}
            >
              Name
            </span>
            <span
              className={cn(searchBy === 'new' && 'bg-hover-1')}
              onClick={() => {
                setSearchBy('new');
              }}
            >
              New
            </span>
          </div>
        </div>
        <div className='mt-5 grid grid-cols-4 gap-3'>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className='col-span-1 mb-3'>
              <TagItem />
            </div>
          ))}
        </div>
        <div className='mt-10 flex-between'>
          <div>
            <Pagination
              count={10}
              variant='outlined'
              shape='rounded'
              sx={{
                '& .MuiPaginationItem-root': {
                  backgroundColor: 'var(--foreground1)',
                  color: 'var(--text2)'
                },
                '& .MuiPaginationItem-root:hover': {
                  backgroundColor: 'var(--hover2)'
                },
                '& .MuiPaginationItem-root:focus': {
                  backgroundColor: 'var(--hover2)'
                },
                '& .Mui-selected': {
                  backgroundColor: 'var(--hover2)',
                  color: 'var(--text1)'
                }
              }}
            />
          </div>
          <div className='flex-start gap-2'>
            <div className='space-x-2 *:py-[6px] *:w-[32px] *:text-center *:inline-block *:bg-foreground-1 hover:*:bg-hover-2 *:rounded-md *:duration-300 *:text-1'>
              <span
                className={cn(
                  questionPerPage === 1 && '!bg-hover-2 !text-text-1'
                )}
                onClick={() => {
                  setQuestionPerPage(1);
                }}
              >
                1
              </span>
              <span
                className={cn(
                  questionPerPage === 2 && '!bg-hover-2 !text-text-1'
                )}
                onClick={() => {
                  setQuestionPerPage(2);
                }}
              >
                2
              </span>
              <span
                className={cn(
                  questionPerPage === 50 && '!bg-hover-2 !text-text-1'
                )}
                onClick={() => {
                  setQuestionPerPage(50);
                }}
              >
                50
              </span>
            </div>
            <div className='text-[0.8rem]'>per page</div>
          </div>
        </div>
      </div>
    </div>
  );
}
