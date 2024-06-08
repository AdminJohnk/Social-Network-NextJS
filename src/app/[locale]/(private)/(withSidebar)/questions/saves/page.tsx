'use client';

import HotQuestions from '@/components/pages/Question/HotQuestions';
import Menu from '@/components/pages/Question/Menu';
import QuestionSummaryItem from '@/components/pages/Question/QuestionSummaryItem';
import RelatedQuestions from '@/components/pages/Question/RelatedQuestions';
import Divider from '@/components/shared/Divider';
import { useGetSavedQuestions } from '@/hooks/query';
import { CircularProgress } from '@mui/material';
import { useFormatter, useTranslations } from 'next-intl';
import { useEffect } from 'react';

export interface ISavesProps {}

export default function Saves(props: ISavesProps) {
  const t = useTranslations();
  const format = useFormatter();

  const { savedQuestions, isLoadingSavedQuestions } = useGetSavedQuestions();

  useEffect(() => {
    UIkit.sticky('#save-questions-side')?.$emit('update');
  }, [savedQuestions]);

  return (
    <div className='ms-60 mt-16 pb-5 pt-5 max-lg:ms-0'>
      <div className='mx-auto max-w-[1070px]' id='save-questions'>
        <div className='grid grid-cols-3 gap-8'>
          <div className='left col-span-2'>
            <div className='h3-semibold me-10'>{t('Saved Questions')}</div>
            <Divider className='my-4' />
            <div></div>
            {isLoadingSavedQuestions ? (
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
                {savedQuestions.map((question, index) => (
                  <QuestionSummaryItem key={index} question={question} />
                ))}
              </div>
            )}
          </div>
          <div className='max-lg:hidden'>
            <div
              className='right'
              id='save-questions-side'
              data-uk-sticky='media: 1024; end: #save-questions; offset: 80'>
              <Menu currentMenu='save' />
              <Divider className='my-4' />
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
