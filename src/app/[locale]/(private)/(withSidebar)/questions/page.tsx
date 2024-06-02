'use client';

import CreateEditQuestion from '@/components/pages/Question/CreateEditQuestion';
import Menu from '@/components/pages/Question/Menu';
import QuestionSummaryItem from '@/components/pages/Question/QuestionSummaryItem';
import Divider from '@/components/shared/Divider';
import Modal from '@/components/shared/Modal';
import { Button } from '@/components/ui/button';
import { useGetAllQuestions, useGetNumberQuestions } from '@/hooks/query';
import { cn } from '@/lib/utils';
import { Pagination } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export interface IQuestionsProps {}

export default function Questions(props: IQuestionsProps) {
  const t = useTranslations();

  const { allQuestions, isLoadingAllQuestions } = useGetAllQuestions();
  const { numberQuestions } = useGetNumberQuestions();

  const [openCreateQuestion, setOpenCreateQuestion] = useState(false);
  const [questionPerPage, setQuestionPerPage] = useState(15);
  const page_number = Math.ceil(numberQuestions / questionPerPage) || 10;
  const [sortBy, setSortBy] = useState('score');

  return (
    <>
      {isLoadingAllQuestions ? (
        <>Loading...</>
      ) : (
        <div className='ms-60 max-lg:ms-0 mt-16 pt-5 pb-5'>
          <div className='max-w-[1070px] mx-auto'>
            <div className='grid grid-cols-3 gap-8'>
              <div className='left col-span-2'>
                <div className='flex justify-between'>
                  <div className='h3-semibold me-10'>{t('All Questions')}</div>
                  <div>
                    <Button
                      className='text-nowrap'
                      onClick={() => setOpenCreateQuestion(true)}
                    >
                      {t('Ask Question')}
                    </Button>
                    <Modal
                      open={openCreateQuestion}
                      handleClose={() => setOpenCreateQuestion(false)}
                    >
                      <CreateEditQuestion
                        handleClose={() => setOpenCreateQuestion(false)}
                      />
                    </Modal>
                  </div>
                </div>
                <div className='flex-between mt-8'>
                  <div>
                    <span className='me-1'>{numberQuestions}</span>
                    <span>questions</span>
                  </div>
                  <div className='px-3 py-1 border border-border-1 flex-start gap-2 hover:*:bg-hover-1 *:duration-300 *:cursor-pointer *:px-3 *:py-1 *:rounded-md'>
                    <span
                      className={cn(sortBy === 'score' && 'bg-hover-1')}
                      onClick={() => {
                        setSortBy('score');
                      }}
                    >
                      Score
                    </span>
                    <span
                      className={cn(sortBy === 'newest' && 'bg-hover-1')}
                      onClick={() => {
                        setSortBy('newest');
                      }}
                    >
                      Newest
                    </span>
                    <span
                      className={cn(sortBy === 'oldest' && 'bg-hover-1')}
                      onClick={() => {
                        setSortBy('oldest');
                      }}
                    >
                      Oldest
                    </span>
                    <span
                      className={cn(sortBy === 'unanswer' && 'bg-hover-1')}
                      onClick={() => {
                        setSortBy('unanswer');
                      }}
                    >
                      UnAnswer
                    </span>
                    <span
                      className={cn(sortBy === 'frequent' && 'bg-hover-1')}
                      onClick={() => {
                        setSortBy('frequent');
                      }}
                    >
                      Frequent
                    </span>
                  </div>
                </div>
                <Divider className='my-4' />
                <div>
                  {allQuestions.map((question, index) => (
                    <QuestionSummaryItem key={index} question={question} />
                  ))}
                </div>
                <div className='mt-10 flex-between'>
                  <div>
                    <Pagination
                      count={page_number}
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
              <div className='right col-span-1'>
                <Menu currentMenu={'question'} />
                <Divider className='my-4' />
                <div>
                  <div className='h4-regular'>Related</div>
                  <div className='mt-4 *:mb-2 *:flex-start *:gap-3 *:cursor-pointer *:text-[0.8rem]'>
                    <div>
                      <span className='min-w-10 text-center px-2 py-1 rounded-md bg-green-400 text-black'>
                        250
                      </span>
                      <div className='text-blue-400 hover:text-blue-500 duration-300'>
                        Why is processing a sorted array slower than an unsorted
                        array?
                      </div>
                    </div>
                    <div>
                      <span className='min-w-10 text-center px-2 py-1 rounded-md bg-foreground-2'>
                        6
                      </span>
                      <div className='text-blue-400 hover:text-blue-500 duration-300'>
                        Complexity of comparison operators
                      </div>
                    </div>
                    <div>
                      <span className='min-w-10 text-center px-2 py-1 rounded-md bg-green-400 text-black'>
                        137
                      </span>
                      <div className='text-blue-400 hover:text-blue-500 duration-300'>
                        Why is printing B dramatically slower than printing #?
                      </div>
                    </div>
                  </div>
                </div>
                <Divider className='my-4' />
                <div>
                  <div className='h4-regular'>Host Question</div>
                  <div className='mt-4 *:mb-2 *:flex-start *:gap-3 *:cursor-pointer *:text-[0.8rem]'>
                    <div>
                      <span className='min-w-10 text-center px-2 py-1 rounded-md bg-green-400 text-black'>
                        250
                      </span>
                      <div className='text-blue-400 hover:text-blue-500 duration-300'>
                        Why is processing a sorted array slower than an unsorted
                        array?
                      </div>
                    </div>
                    <div>
                      <span className='min-w-10 text-center px-2 py-1 rounded-md bg-foreground-2'>
                        6
                      </span>
                      <div className='text-blue-400 hover:text-blue-500 duration-300'>
                        Complexity of comparison operators
                      </div>
                    </div>
                    <div>
                      <span className='min-w-10 text-center px-2 py-1 rounded-md bg-green-400 text-black'>
                        137
                      </span>
                      <div className='text-blue-400 hover:text-blue-500 duration-300'>
                        Why is printing B dramatically slower than printing #?
                      </div>
                    </div>
                    <div>
                      <span className='min-w-10 text-center px-2 py-1 rounded-md bg-green-400 text-black'>
                        250
                      </span>
                      <div className='text-blue-400 hover:text-blue-500 duration-300'>
                        Why is processing a sorted array slower than an unsorted
                        array?
                      </div>
                    </div>
                    <div>
                      <span className='min-w-10 text-center px-2 py-1 rounded-md bg-foreground-2'>
                        6
                      </span>
                      <div className='text-blue-400 hover:text-blue-500 duration-300'>
                        Complexity of comparison operators
                      </div>
                    </div>
                    <div>
                      <span className='min-w-10 text-center px-2 py-1 rounded-md bg-green-400 text-black'>
                        137
                      </span>
                      <div className='text-blue-400 hover:text-blue-500 duration-300'>
                        Why is printing B dramatically slower than printing #?
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
