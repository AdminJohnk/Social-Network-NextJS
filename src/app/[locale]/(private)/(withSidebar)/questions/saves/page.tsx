'use client';

import { cn } from '@/lib/utils';
import HotQuestions from '@/components/pages/Question/HotQuestions';
import Menu from '@/components/pages/Question/Menu';
import QuestionSummaryItem from '@/components/pages/Question/QuestionSummaryItem';
import RelatedQuestions from '@/components/pages/Question/RelatedQuestions';
import CreateEditList from '@/components/pages/QuestionSave/CreateEditList';
import Divider from '@/components/shared/Divider';
import Modal from '@/components/shared/Modal';
import { useGetAllListQuestions, useGetSavedQuestions } from '@/hooks/query';
import { IAllListQuestion, IQuestionSummaryItem } from '@/types';
import { CircularProgress } from '@mui/material';
import { Select } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { FaPencilAlt } from 'react-icons/fa';
import { IoAdd } from 'react-icons/io5';
import QuestionDialog from '@/components/shared/QuestionDialog';
import { useDeleteListQuestion } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

export interface ISavesProps {}

export default function Saves(props: ISavesProps) {
  const t = useTranslations();

  const { savedQuestions, isLoadingSavedQuestions } = useGetSavedQuestions();
  const { allListQuestions, isLoadingAllListQuestions } = useGetAllListQuestions();
  const { mutateDeleteListQuestion, isLoadingDeleteListQuestion } = useDeleteListQuestion();

  const [allQuestionsState, setAllQuestionsState] = useState<IAllListQuestion>();
  const [savedQuestionsState, setSavedQuestionsState] = useState<IQuestionSummaryItem[]>();
  const [listName, setListName] = useState('allsaves');
  const [openCreateList, setOpenCreateList] = useState(false);
  const [openEditList, setOpenEditList] = useState(false);

  const [openDeleteListQuestion, setOpenDeleteListQuestion] = useState(false);

  useEffect(() => {
    savedQuestions && setSavedQuestionsState(savedQuestions);
  }, [savedQuestions]);

  useEffect(() => {
    allListQuestions && setAllQuestionsState(allListQuestions);
  }, [allListQuestions]);

  useEffect(() => {
    UIkit.sticky('#save-questions-side')?.$emit('update');
  }, [savedQuestions]);

  const handleDeleteComment = () => {
    mutateDeleteListQuestion(listName, {
      onSuccess: () => {
        showSuccessToast(t('Delete List Successfully'));
      },
      onError: () => {
        showErrorToast(t('Something went wrong! Please try again!'));
      },
      onSettled: () => {
        setOpenDeleteListQuestion(false);
      }
    });
  };

  return (
    <div className='ms-60 mt-16 pb-5 pt-5 max-lg/2:ms-0'>
      <div className='mx-auto max-w-[1070px]' id='save-questions'>
        <div className='grid grid-cols-3 gap-8'>
          <div className='left col-span-2'>
            <div className='flex-between'>
              <div className='h3-semibold me-10'>{t('Saved Questions')}</div>
              <div className='flex-start gap-2'>
                <FaPencilAlt
                  className={cn('text-1 inline-block size-4', listName == 'allsaves' && 'hidden')}
                  onClick={() => setOpenEditList(true)}
                />
                <Modal open={openEditList} handleClose={() => setOpenEditList(false)}>
                  <CreateEditList
                    handleClose={() => setOpenEditList(false)}
                    dataEdit={{
                      listNameCurrent: listName,
                      setListName: setListName
                    }}
                  />
                </Modal>

                <QuestionDialog
                  open={openDeleteListQuestion}
                  setOpen={setOpenDeleteListQuestion}
                  handleFunction={handleDeleteComment}
                  isLoading={isLoadingDeleteListQuestion}
                  question='Are you absolutely sure delete this list?'
                  content='You will not be able to recover list after deletion!'
                  component={
                    <BiSolidTrashAlt
                      className={cn('text-1 inline-block size-4', listName == 'allsaves' && 'hidden')}
                    />
                  }
                />
                <div className='flex-center'>
                  <span
                    className='rounded-full bg-foreground-1 p-1'
                    data-uk-tooltip={`title: ${t('Create New List')}; pos: top; offset:6; delay: 300`}
                    onClick={() => setOpenCreateList(true)}>
                    <IoAdd className='text-1 size-5' />
                  </span>
                  <Modal open={openCreateList} handleClose={() => setOpenCreateList(false)}>
                    <CreateEditList handleClose={() => setOpenCreateList(false)} />
                  </Modal>
                </div>
                <Select
                  required
                  className='ms-1 grow *:*:!bg-transparent *:*:!ring-transparent'
                  onChange={(e) => setListName(e.target.value)}>
                  <option className='bg-foreground-1' value='allsaves'>
                    {t('All Saves')} ({t('default')})
                  </option>
                  {allQuestionsState &&
                    allQuestionsState.list_name.map((list, index) => (
                      <option key={index} value={list} className='bg-foreground-1'>
                        {list}
                      </option>
                    ))}
                </Select>
              </div>
            </div>
            <Divider className='my-4' />
            <div></div>
            {isLoadingSavedQuestions || isLoadingAllListQuestions ? (
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
                {listName === 'allsaves' &&
                  savedQuestionsState?.map((question, index) => {
                    return (
                      <QuestionSummaryItem
                        key={index}
                        question={question}
                        feature='saves'
                        setAllQuestions={setAllQuestionsState}
                        allListQuestion={allQuestionsState as IAllListQuestion}
                        savedQuestionsState={savedQuestionsState}
                        setSavedQuestionsState={setSavedQuestionsState}
                      />
                    );
                  })}
                {listName !== 'allsaves' &&
                  allQuestionsState?.list_category
                    .find((list) => list.name === listName)
                    ?.questions.map((question, index) => {
                      return (
                        <QuestionSummaryItem
                          key={index}
                          question={question}
                          feature='saves'
                          setAllQuestions={setAllQuestionsState}
                          isInList={true}
                          allListQuestion={allQuestionsState}
                          savedQuestionsState={savedQuestionsState}
                          setSavedQuestionsState={setSavedQuestionsState}
                        />
                      );
                    })}
              </div>
            )}
          </div>
          <div className='max-lg:hidden'>
            <div
              className='right'
              id='save-questions-side'
              data-uk-sticky='media: 1024; end: #save-questions; offset: 80'>
              <Menu currentMenu='save' />
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
