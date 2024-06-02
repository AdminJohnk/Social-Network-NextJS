'use client';

import CreateEditQuestion from '@/components/pages/Question/CreateEditQuestion';
import Divider from '@/components/shared/Divider';
import Modal from '@/components/shared/Modal';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { Button } from '@/components/ui/button';
import { useGetAllQuestions, useGetNumberQuestions } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { Avatar, Pagination } from '@mui/material';
import { useFormatter, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

export interface IQuestionsProps {}

export default function Questions(props: IQuestionsProps) {
  const t = useTranslations();

  const format = useFormatter();

  const { allQuestions, isLoadingAllQuestions } = useGetAllQuestions();
  const { numberQuestions } = useGetNumberQuestions();

  const [openCreateQuestion, setOpenCreateQuestion] = useState(false);
  const [questionPerPage, setQuestionPerPage] = useState(15);
  const page_number = Math.ceil(numberQuestions / questionPerPage) || 10;
  const [sortBy, setSortBy] = useState('score');

  const getFormattedDate = (date: string) => {
    return format.dateTime(new Date(date), {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <>
      {isLoadingAllQuestions ? (
        <>Loading...</>
      ) : (
        <div className='ms-60 max-lg:ms-0 mt-16 pt-5 pb-5'>
          <div className='max-w-[1070px] mx-auto'>
            <div className='grid grid-cols-3 gap-5'>
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
                    <span className='me-1'>24,173,264</span>
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
                  {allQuestions.map((question, index) => {
                    const titleLimit =
                      question.title.split(' ').slice(0, 20).join(' ') +
                      (question.title.split(' ').length > 20 ? ' ...' : '');
                    const text =
                      question.text.split(' ').slice(0, 25).join(' ') +
                      (question.text.split(' ').length > 25 ? ' ...' : '');

                    return (
                      <div key={index}>
                        <div className='flex gap-3'>
                          <div className='text-[0.8rem] text-right w-[15%] space-y-1'>
                            <div>{question.vote_score + ' ' + t('votes')}</div>
                            <div className='flex-end'>
                              <div className='flex-start gap-2 px-2 py-1 bg-green-400 dark:bg-green-500 text-black rounded-lg'>
                                <FaCheck className='size-3' />
                                <span>
                                  {question.answer_number + ' ' + t('answers')}
                                </span>
                              </div>
                            </div>
                            <div>{question.view + ' ' + t('views')}</div>
                          </div>
                          <div className='w-[85%]'>
                            <Link
                              href={`/questions/${question._id}`}
                              className='text-[1rem] cursor-pointer text-blue-500 hover:text-blue-400 duration-300 mb-2'
                            >
                              {titleLimit}
                            </Link>
                            <div className='text-[0.8rem]'>
                              <ShowContent content={text} />
                            </div>
                            <div className='mt-2'>
                              <div className='flex-start gap-2'>
                                {question.hashtags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className='tag px-1 bg-1 rounded-md'
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className='mt-3 flex-end text-[0.8rem] gap-1'>
                                <Avatar
                                  sx={{ width: 17, height: 17 }}
                                  src={getImageURL(question.user.user_image)}
                                />
                                <Link
                                  href={`/users/${question.user._id}`}
                                  className='text-blue-500 hover:text-blue-400 duration-300'
                                >
                                  {question.user.name}
                                </Link>
                                <span className='text-text-2'>
                                  {t('asked')}
                                </span>
                                <span className='text-text-2'>
                                  {getFormattedDate(question.createdAt)}
                                </span>
                                <span className='text-text-2'>{t('at1')}</span>
                                <span className='text-text-2'>
                                  {format.dateTime(
                                    new Date(question.createdAt),
                                    {
                                      hour: 'numeric',
                                      minute: 'numeric'
                                    }
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Divider className='my-4' />
                      </div>
                    );
                  })}
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
                          questionPerPage === 1 &&
                            '!bg-hover-2 !text-text-1'
                        )}
                        onClick={() => {
                          setQuestionPerPage(1);
                        }}
                      >
                        1
                      </span>
                      <span
                        className={cn(
                          questionPerPage === 2 &&
                            '!bg-hover-2 !text-text-1'
                        )}
                        onClick={() => {
                          setQuestionPerPage(2);
                        }}
                      >
                        2
                      </span>
                      <span
                        className={cn(
                          questionPerPage === 50 &&
                            '!bg-hover-2 !text-text-1'
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
              <div className='right col-span-1'></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
