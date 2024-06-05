'use client';

import Menu from '@/components/pages/Question/Menu';
import QuestionSummaryItem from '@/components/pages/Question/QuestionSummaryItem';
import Divider from '@/components/shared/Divider';
import { useGetSavedQuestions } from '@/hooks/query';
import { CircularProgress } from '@mui/material';
import { useFormatter, useTranslations } from 'next-intl';

export interface ISavesProps {}

export default function Saves(props: ISavesProps) {
  const t = useTranslations();
  const format = useFormatter();

  const { savedQuestions, isLoadingSavedQuestions } = useGetSavedQuestions();

  return (
    <div className='ms-60 mt-16 pb-5 pt-5 max-lg:ms-0'>
      <div className='mx-auto max-w-[1070px]' id='questions'>
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
  );
}
