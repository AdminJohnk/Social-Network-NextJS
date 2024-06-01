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
import { useGetQuestionByID } from '@/hooks/query';
import { useViewQuestion } from '@/hooks/mutation';

export interface IQuestionDetailProps {
  params: {
    id: string;
  };
}

export default function QuestionDetail({
  params: { id }
}: IQuestionDetailProps) {
  const t = useTranslations();
  const format = useFormatter();
  useNow({ updateInterval: 1000 * 30 });

  const [sortBy, setSortBy] = useState('scoredesc');

  const { question, isLoadingQuestion } = useGetQuestionByID(id);
  const { mutateViewQuestion } = useViewQuestion();

  useEffect(() => {
    if (question?._id) {
      mutateViewQuestion(question._id);
    }
  }, [question]);

  const caculateView = (view: number) => {
    if (view < 1000) {
      return view;
    } else if (view < 1000000) {
      return `${Math.floor(view / 1000)}k`;
    } else if (view < 1000000000) {
      return `${Math.floor(view / 1000000)}m`;
    } else {
      return `${Math.floor(view / 1000000000)}b`;
    }
  };

  // Modal
  const [openCreateQuestion, setOpenCreateQuestion] = useState(false);

  return (
    <>
      {isLoadingQuestion ? (
        <></>
      ) : (
        <div className='ms-60 max-lg:ms-0 mt-16 pt-5 pb-5'>
          <div className='max-w-[1070px] mx-auto'>
            <div>
              <div className='flex justify-between'>
                <div className='h3-semibold me-10'>{question.title}</div>
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
              <div className='flex-start gap-5 mt-1 text-[0.8rem]'>
                <div>
                  <span className='me-1'>{t('Asked')}</span>
                  <span className='text-text-2'>
                    {format.relativeTime(
                      new Date(question.createdAt),
                      new Date()
                    )}
                  </span>
                </div>
                <div>
                  <span className='me-1'>{t('Modified')}</span>
                  <span className='text-text-2'>
                    {format.relativeTime(
                      new Date(question.update_at),
                      new Date()
                    )}
                  </span>
                </div>
                <div>
                  <span className='me-1'>{t('Viewed')}</span>
                  <span className='text-text-2'>
                    <span className='me-1'>{caculateView(question.view)}</span>
                    <span>{t('times')}</span>
                  </span>
                </div>
              </div>
            </div>
            <Divider className='my-4' />
            <div className='grid grid-cols-3 gap-5'>
              <div className='left col-span-2'>
                <QuestionItem question={question} />
                <div className='flex-between mb-5'>
                  <div className='space-x-1 h4-regular'>
                    <span>{question.answers.length}</span>
                    <span>{t('Answers')}</span>
                  </div>
                  {question.answers.length > 0 && (
                    <div className='w-[50%] flex-start'>
                      <Label htmlFor='countries' value='Sort by:' />
                      <Select
                        id='countries'
                        required
                        className='*:*:!ring-transparent *:*:!bg-transparent grow ms-3'
                        onChange={e => setSortBy(e.target.value)}
                      >
                        <option className='bg-foreground-1' value='scoredesc'>
                          Highest score (default)
                        </option>
                        <option
                          className='bg-foreground-1'
                          value='modifieddesc'
                        >
                          Date modified (newest first)
                        </option>
                        <option className='bg-foreground-1' value='createdasc'>
                          Date created (oldest first)
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
                        return (
                          new Date(b.update_at).getTime() -
                          new Date(a.update_at).getTime()
                        );
                      } else if (sortBy === 'createdasc') {
                        return (
                          new Date(a.createdAt).getTime() -
                          new Date(b.createdAt).getTime()
                        );
                      }
                      return 0;
                    })
                    .map(answer => (
                      <AnswerItem
                        key={answer._id}
                        answer={answer}
                        questionID={question._id}
                      />
                    ))}
                </div>
                <WriteAnswer questionID={question._id} />
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
