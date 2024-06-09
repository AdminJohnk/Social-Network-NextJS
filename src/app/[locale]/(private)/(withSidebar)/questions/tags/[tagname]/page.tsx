'use client';

import { useEffect, useState } from 'react';
import CreateEditQuestion from '@/components/pages/Question/CreateEditQuestion';
import Modal from '@/components/shared/Modal';
import { Button } from '@/components/ui/button';
import { useFormatter, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { useGetAllQuestionByTag, useGetNumberQuestionByTag } from '@/hooks/query';
import Divider from '@/components/shared/Divider';
import { CircularProgress, Pagination, Skeleton } from '@mui/material';
import QuestionSummaryItem from '@/components/pages/Question/QuestionSummaryItem';
import Menu from '@/components/pages/Question/Menu';
import RelatedQuestions from '@/components/pages/Question/RelatedQuestions';
import HotQuestions from '@/components/pages/Question/HotQuestions';

export interface ITagDetailProps {
  params: {
    tagname: string;
  };
}

export default function TagDetail({ params: { tagname } }: ITagDetailProps) {
  const t = useTranslations();
  const format = useFormatter();

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('score');

  const { questionByTag, isFetchingQuestionByTag, refetchQuestionByTag } = useGetAllQuestionByTag(
    tagname,
    page,
    sortBy
  );
  const { numberQuestionByTag, isFetchingNumberQuestionByTag } = useGetNumberQuestionByTag(tagname, sortBy);

  const page_number = Math.ceil(numberQuestionByTag / 20) || 1;
  const [openCreateQuestion, setOpenCreateQuestion] = useState(false);

  useEffect(() => {
    refetchQuestionByTag();
  }, [sortBy, page]);

  useEffect(() => {
    UIkit.sticky('#tag-question-side')?.$emit('update');
  }, [questionByTag]);

  return (
    <div className='ms-60 mt-16 pb-5 pt-5 max-lg/2:ms-0'>
      <div className='mx-auto max-w-[1070px]' id='tag-question'>
        <div className='grid grid-cols-3 gap-8'>
          <div className='left col-span-2'>
            <div className='mt-3 flex justify-between'>
              <div className='h3-semibold me-10'>{t('Questions tagged') + ' ' + `[${tagname}]`}</div>
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
              {isFetchingNumberQuestionByTag ? (
                <Skeleton className='!bg-foreground-1' variant='rectangular' width={80} />
              ) : (
                <div>
                  <span className='me-1'>
                    {format.number(numberQuestionByTag, { notation: 'compact', compactDisplay: 'long' })}
                  </span>
                  <span>{t('questions', { count: numberQuestionByTag })}</span>
                </div>
              )}
              <div className='flex-start gap-2 rounded-lg border border-border-1 p-1 *:cursor-pointer *:select-none *:rounded-lg *:px-3 *:py-1 *:duration-300 hover:*:bg-hover-1'>
                <span
                  className={cn(sortBy === 'score' && 'bg-hover-1')}
                  onClick={() => {
                    if (sortBy === 'score') return;
                    setSortBy('score');
                  }}>
                  {t('Score')}
                </span>
                <span
                  className={cn(sortBy === 'latest' && 'bg-hover-1')}
                  onClick={() => {
                    if (sortBy === 'latest') return;
                    setSortBy('latest');
                  }}>
                  {t('Latest')}
                </span>
                <span
                  className={cn(sortBy === 'oldest' && 'bg-hover-1')}
                  onClick={() => {
                    if (sortBy === 'oldest') return;
                    setSortBy('oldest');
                  }}>
                  {t('Oldest')}
                </span>
                <span
                  className={cn(sortBy === 'unanswered' && 'bg-hover-1')}
                  onClick={() => {
                    if (sortBy === 'unanswered') return;
                    setSortBy('unanswered');
                  }}>
                  {t('Unanswered')}
                </span>
                <span
                  className={cn(sortBy === 'frequent' && 'bg-hover-1')}
                  onClick={() => {
                    if (sortBy === 'frequent') return;
                    setSortBy('frequent');
                  }}>
                  {t('Frequent')}
                </span>
              </div>
            </div>
            <Divider className='my-4' />
            {isFetchingQuestionByTag ? (
              <div className='flex-center my-8'>
                <CircularProgress
                  sx={{
                    color: 'var(--text-1)'
                  }}
                  size={35}
                />
              </div>
            ) : (
              <div>
                {questionByTag?.map((question, index) => (
                  <QuestionSummaryItem key={index} question={question} />
                ))}
              </div>
            )}
            <div>
              <Pagination
                count={page_number}
                variant='outlined'
                onChange={(_, pageMUI) => {
                  if (pageMUI === page) return;
                  setPage(pageMUI);
                }}
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
          </div>
          <div className='max-lg:hidden'>
            <div
              className='right'
              id='tag-question-side'
              data-uk-sticky='media: 1024; end: #tag-question; offset: 80'>
              <Menu currentMenu='tag' />
              <RelatedQuestions />
              <Divider className='my-4' />
              <HotQuestions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
