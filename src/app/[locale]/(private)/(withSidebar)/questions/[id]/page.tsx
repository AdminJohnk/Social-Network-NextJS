'use client';

import QuestionItem from '@/components/pages/Question/QuestionItem';
import Divider from '@/components/shared/Divider';
import { Button } from '@/components/ui/button';
import { useFormatter, useNow, useTranslations } from 'next-intl';
import { Label, Select } from 'flowbite-react';
import AnswerItem from '@/components/pages/Question/AnswerItem';
import WriteAnswer from '@/components/pages/Question/WriteAnswer';
import Menu from '@/components/pages/Question/Menu';
import { useEffect, useState } from 'react';
import Modal from '@/components/shared/Modal';
import CreateEditQuestion from '@/components/pages/Question/CreateEditQuestion';
import { useCurrentUserInfo, useGetQuestionByID } from '@/hooks/query';
import { useViewQuestion } from '@/hooks/mutation';
import { notFound } from 'next/navigation';
import RelatedQuestions from '@/components/pages/Question/RelatedQuestions';
import HotQuestions from '@/components/pages/Question/HotQuestions';

export interface IQuestionDetailProps {
  params: {
    id: string;
  };
}

export default function QuestionDetail({ params: { id } }: IQuestionDetailProps) {
  const t = useTranslations();
  const format = useFormatter();
  useNow({ updateInterval: 1000 * 30 });

  const [sortBy, setSortBy] = useState('scoredesc');

  // Modal
  const [openCreateQuestion, setOpenCreateQuestion] = useState(false);

  const { currentUserInfo } = useCurrentUserInfo();
  const { question, isLoadingQuestion, isErrorQuestion } = useGetQuestionByID(id);

  const { mutateViewQuestion } = useViewQuestion();

  useEffect(() => {
    mutateViewQuestion(id);
  }, []);

  useEffect(() => {
    UIkit.sticky('#question-side')?.$emit('update');
  }, [question, sortBy]);

  const isQuestionOwner = question?.user?._id === currentUserInfo._id;

  if (isErrorQuestion) notFound();

  return (
    <>
      {isLoadingQuestion ? (
        <></>
      ) : (
        <div className='ms-60 mt-16 pb-5 pt-5 max-lg/2:ms-0'>
          <div className='mx-auto max-w-[1070px]' id='question'>
            <div>
              <div className='flex justify-between'>
                <div className='h3-semibold me-10'>{question.title}</div>
                <div>
                  <Button className='text-nowrap' onClick={() => setOpenCreateQuestion(true)}>
                    {t('Ask a question')}
                  </Button>
                  <Modal open={openCreateQuestion} handleClose={() => setOpenCreateQuestion(false)}>
                    <CreateEditQuestion handleClose={() => setOpenCreateQuestion(false)} />
                  </Modal>
                </div>
              </div>
              <div className='flex-start mt-1 gap-5 text-[0.8rem]'>
                <div>
                  <span className='me-1'>{t('Asked')}</span>
                  <span className='text-text-2'>
                    {format.relativeTime(new Date(question.createdAt), new Date())}
                  </span>
                </div>
                <div>
                  <span className='me-1'>{t('Modified')}</span>
                  <span className='text-text-2'>
                    {format.relativeTime(new Date(question.update_at), new Date())}
                  </span>
                </div>
                <div>
                  <span className='me-1'>{t('Viewed')}</span>
                  <span className='text-text-2'>
                    <span className='me-1'>
                      {format.number(question.view, { notation: 'compact', compactDisplay: 'long' })}
                    </span>
                    <span>{t('times', { count: question.view })}</span>
                  </span>
                </div>
              </div>
            </div>
            <Divider className='my-4' />
            <div className='grid grid-cols-3 gap-8'>
              <div className='left col-span-2'>
                <QuestionItem question={question} />
                <div className='flex-between mb-5'>
                  <div className='h4-regular space-x-1'>
                    <span>
                      {format.number(question.answers.length, {
                        notation: 'compact',
                        compactDisplay: 'long'
                      })}
                    </span>
                    <span>{t('answers', { count: question.answers.length })}</span>
                  </div>
                  {question.answers.length > 0 && (
                    <div className='flex-start w-[50%]'>
                      <Label htmlFor='sortBy' value={`${t('Sort by')}:`} />
                      <Select
                        id='sortBy'
                        required
                        className='ms-1 grow *:*:!bg-transparent *:*:!ring-transparent'
                        onChange={(e) => setSortBy(e.target.value)}>
                        <option className='bg-foreground-1' value='scoredesc'>
                          {t('Highest score')} ({t('default')})
                        </option>
                        <option className='bg-foreground-1' value='modifieddesc'>
                          {t('Date modified')} ({t('latest first')})
                        </option>
                        <option className='bg-foreground-1' value='createdasc'>
                          {t('Date created')} ({t('oldest first')})
                        </option>
                      </Select>
                    </div>
                  )}
                </div>
                <div>
                  {question.answers
                    .sort((a, b) => {
                      if (sortBy === 'scoredesc') {
                        return b.vote_score - a.vote_score;
                      } else if (sortBy === 'modifieddesc') {
                        return new Date(b.update_at).getTime() - new Date(a.update_at).getTime();
                      } else if (sortBy === 'createdasc') {
                        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                      }
                      return 0;
                    })
                    .map((answer) => (
                      <AnswerItem
                        key={answer._id}
                        answer={answer}
                        questionID={question._id}
                        isQuestionOwner={isQuestionOwner}
                      />
                    ))}
                </div>
                <WriteAnswer questionID={question._id} />
              </div>
              <div className='max-lg:hidden'>
                <div
                  className='right'
                  id='question-side'
                  data-uk-sticky='media: 1024; end: #question; offset: 80'>
                  <Menu currentMenu='question' />
                  <RelatedQuestions questionID={id} />
                  <Divider className='my-4' />
                  <HotQuestions />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
