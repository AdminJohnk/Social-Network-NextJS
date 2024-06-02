'use client';

import CreateEditQuestion from '@/components/pages/Question/CreateEditQuestion';
import Menu from '@/components/pages/Question/Menu';
import QuestionSummaryItem from '@/components/pages/Question/QuestionSummaryItem';
import Divider from '@/components/shared/Divider';
import Modal from '@/components/shared/Modal';
import { Button } from '@/components/ui/button';
import { useGetAllQuestions, useGetNumberQuestions } from '@/hooks/query';
import { cn } from '@/lib/utils';
import { IAllQuestionItem } from '@/types';
import { Pagination } from '@mui/material';
import { useFormatter, useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

export default function Questions() {
  const t = useTranslations();
  const format = useFormatter();

  const { numberQuestions } = useGetNumberQuestions();

  const [openCreateQuestion, setOpenCreateQuestion] = useState(false);
  const [questionPerPage, setQuestionPerPage] = useState(15);
  const [page, setPage] = useState(1);
  const page_number = Math.ceil(numberQuestions / questionPerPage) || 10;
  const [sortBy, setSortBy] = useState('score');

  const pageParam = Math.ceil((questionPerPage * page) / 20);

  const { allQuestions, isLoadingAllQuestions, isFetchingAllQuestions } = useGetAllQuestions(pageParam);

  const sortQuestions = useCallback(
    (a: IAllQuestionItem, b: IAllQuestionItem) => {
      if (sortBy === 'score') {
        return b.vote_score - a.vote_score;
      } else if (sortBy === 'latest') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      } else if (sortBy === 'unanswered') {
        return a.answer_number - b.answer_number;
      } else if (sortBy === 'frequent') {
        return b.view - a.view;
      }
      return b.vote_score - a.vote_score;
    },
    [sortBy]
  );

  const startSlice = (page - 1) * questionPerPage;
  const endSlice = startSlice + questionPerPage;

  return (
    <>
      {isLoadingAllQuestions ? (
        <>Loading...</>
      ) : (
        <div className='ms-60 mt-16 pb-5 pt-5 max-lg:ms-0'>
          <div className='mx-auto max-w-[1070px]'>
            <div className='flex w-full gap-8' id='questions'>
              <div className='left flex-1 space-y-3 xl:space-y-6'>
                <div className='flex justify-between'>
                  <div className='h3-semibold me-10'>{t('All Questions')}</div>
                  <div>
                    <Button className='text-nowrap' onClick={() => setOpenCreateQuestion(true)}>
                      {t('Ask a question')}
                    </Button>
                    <Modal open={openCreateQuestion} handleClose={() => setOpenCreateQuestion(false)}>
                      <CreateEditQuestion handleClose={() => setOpenCreateQuestion(false)} />
                    </Modal>
                  </div>
                </div>
                <div className='flex-between mt-8'>
                  <div>
                    <span className='me-1'>{format.number(numberQuestions, { notation: 'compact' })}</span>
                    <span>{t('questions', { count: numberQuestions })}</span>
                  </div>
                  <div className='flex-start gap-2 rounded-lg border border-border-1 p-1 *:cursor-pointer *:select-none *:rounded-lg *:px-3 *:py-1 *:duration-300 hover:*:bg-hover-1'>
                    <span
                      className={cn(sortBy === 'score' && 'bg-hover-1')}
                      onClick={() => setSortBy('score')}>
                      {t('Score')}
                    </span>
                    <span
                      className={cn(sortBy === 'latest' && 'bg-hover-1')}
                      onClick={() => setSortBy('latest')}>
                      {t('Latest')}
                    </span>
                    <span
                      className={cn(sortBy === 'oldest' && 'bg-hover-1')}
                      onClick={() => setSortBy('oldest')}>
                      {t('Oldest')}
                    </span>
                    <span
                      className={cn(sortBy === 'unanswered' && 'bg-hover-1')}
                      onClick={() => setSortBy('unanswered')}>
                      {t('Unanswered')}
                    </span>
                    <span
                      className={cn(sortBy === 'frequent' && 'bg-hover-1')}
                      onClick={() => setSortBy('frequent')}>
                      {t('Frequent')}
                    </span>
                  </div>
                </div>
                <Divider className='my-4' />
                <div>
                  {allQuestions
                    .sort(sortQuestions)
                    .slice(startSlice, endSlice)
                    .map((question, index) => (
                      <QuestionSummaryItem key={index} question={question} />
                    ))}
                </div>
                <div className='flex-between mt-10'>
                  <div>
                    <Pagination
                      count={page_number}
                      variant='outlined'
                      onChange={(_, page) => setPage(page)}
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
                    <div className='*:text-1 space-x-2 *:inline-block *:w-[32px] *:rounded-md *:bg-foreground-1 *:py-[6px] *:text-center *:duration-300 hover:*:bg-hover-2'>
                      <span
                        className={cn(questionPerPage === 5 && '!bg-hover-2 !text-text-1')}
                        onClick={() => setQuestionPerPage(5)}>
                        5
                      </span>
                      <span
                        className={cn(questionPerPage === 10 && '!bg-hover-2 !text-text-1')}
                        onClick={() => setQuestionPerPage(10)}>
                        10
                      </span>
                      <span
                        className={cn(questionPerPage === 50 && '!bg-hover-2 !text-text-1')}
                        onClick={() => setQuestionPerPage(50)}>
                        20
                      </span>
                    </div>
                    <div className='text-[0.8rem]'>{t('per page')}</div>
                  </div>
                </div>
              </div>
              <div className='max-lg:hidden'>
                <div
                  className='right'
                  id='questions-side'
                  data-uk-sticky='media: 1024; end: #questions; offset: 80'>
                  <Menu currentMenu={'question'} />
                  <Divider className='my-4' />
                  <div>
                    <div className='h4-regular'>{t('Related Questions')}</div>
                    <div className='*:flex-start mt-4 *:mb-2 *:cursor-pointer *:gap-3 *:text-[0.8rem]'>
                      <div>
                        <span className='min-w-10 rounded-md bg-green-400 px-2 py-1 text-center text-black'>
                          250
                        </span>
                        <div className='text-blue-400 duration-300 hover:text-blue-500'>
                          Why is processing a sorted array slower than an unsorted array?
                        </div>
                      </div>
                      <div>
                        <span className='min-w-10 rounded-md bg-foreground-2 px-2 py-1 text-center'>6</span>
                        <div className='text-blue-400 duration-300 hover:text-blue-500'>
                          Complexity of comparison operators
                        </div>
                      </div>
                      <div>
                        <span className='min-w-10 rounded-md bg-green-400 px-2 py-1 text-center text-black'>
                          137
                        </span>
                        <div className='text-blue-400 duration-300 hover:text-blue-500'>
                          Why is printing B dramatically slower than printing #?
                        </div>
                      </div>
                    </div>
                  </div>
                  <Divider className='my-4' />
                  <div>
                    <div className='h4-regular'>Host Question</div>
                    <div className='*:flex-start mt-4 *:mb-2 *:cursor-pointer *:gap-3 *:text-[0.8rem]'>
                      <div>
                        <span className='min-w-10 rounded-md bg-green-400 px-2 py-1 text-center text-black'>
                          250
                        </span>
                        <div className='text-blue-400 duration-300 hover:text-blue-500'>
                          Why is processing a sorted array slower than an unsorted array?
                        </div>
                      </div>
                      <div>
                        <span className='min-w-10 rounded-md bg-foreground-2 px-2 py-1 text-center'>6</span>
                        <div className='text-blue-400 duration-300 hover:text-blue-500'>
                          Complexity of comparison operators
                        </div>
                      </div>
                      <div>
                        <span className='min-w-10 rounded-md bg-green-400 px-2 py-1 text-center text-black'>
                          137
                        </span>
                        <div className='text-blue-400 duration-300 hover:text-blue-500'>
                          Why is printing B dramatically slower than printing #?
                        </div>
                      </div>
                      <div>
                        <span className='min-w-10 rounded-md bg-green-400 px-2 py-1 text-center text-black'>
                          250
                        </span>
                        <div className='text-blue-400 duration-300 hover:text-blue-500'>
                          Why is processing a sorted array slower than an unsorted array?
                        </div>
                      </div>
                      <div>
                        <span className='min-w-10 rounded-md bg-foreground-2 px-2 py-1 text-center'>6</span>
                        <div className='text-blue-400 duration-300 hover:text-blue-500'>
                          Complexity of comparison operators
                        </div>
                      </div>
                      <div>
                        <span className='min-w-10 rounded-md bg-green-400 px-2 py-1 text-center text-black'>
                          137
                        </span>
                        <div className='text-blue-400 duration-300 hover:text-blue-500'>
                          Why is printing B dramatically slower than printing #?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
