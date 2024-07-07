import Divider from '@/components/shared/Divider';
import Modal from '@/components/shared/Modal';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { cn, getImageURL, truncateText } from '@/lib/utils';
import { Link } from '@/navigation';
import { IAllListQuestion, IQuestionSummaryItem } from '@/types';
import { Avatar } from '@mui/material';
import { useFormatter, useTranslations } from 'next-intl';
import { FaCheck } from 'react-icons/fa';
import { IoIosMore } from 'react-icons/io';
import MoveToList from '../QuestionSave/MoveToList';
import { useEffect, useState } from 'react';
import { useRemoveFromListQuestion, useRemoveFromSavedQuestion } from '@/hooks/mutation';

export interface IQuestionSummaryItemProps {
  question: IQuestionSummaryItem;
  allListQuestion?: IAllListQuestion;
  setAllQuestions?: (value: IAllListQuestion) => void;
  savedQuestionsState?: IQuestionSummaryItem[];
  setSavedQuestionsState?: (value: IQuestionSummaryItem[]) => void;
  feature?: 'saves';
  isInList?: boolean;
  list_name?: string[];
}

export default function QuestionSummaryItem({
  question,
  feature,
  isInList,
  allListQuestion,
  setAllQuestions,
  savedQuestionsState,
  setSavedQuestionsState
}: IQuestionSummaryItemProps) {
  const t = useTranslations();
  const format = useFormatter();

  const text = question.text && truncateText(question.text, 170);
  const [openMoveToList, setOpenMoveToList] = useState(false);
  const list_name = allListQuestion?.list_name;

  const [from, setFrom] = useState('all_save');

  const { mutateRemoveFromListQuestion } = useRemoveFromListQuestion();
  const { mutateRemoveFromSaved } = useRemoveFromSavedQuestion();

  useEffect(() => {
    // Kiểm tra xem question hiện tại ở trong danh sách nào
    if (question && allListQuestion) {
      allListQuestion.list_category.find((list) => {
        const id = question._id;
        if (list.questions.find((question) => question._id === id)) {
          setFrom(list.name);
        }
      });
    }
  }, [allListQuestion]);

  const getFormattedDate = (date: string) => {
    return format.dateTime(new Date(date), {
      dateStyle: 'long',
      timeStyle: 'short'
    });
  };

  const handleRemoveFromList = () => {
    const newAllListQuestion = { ...allListQuestion } as IAllListQuestion;
    newAllListQuestion.list_category.find((list) => {
      list.name === from && list.questions.splice(list.questions.indexOf(question), 1);
    });
    setAllQuestions && setAllQuestions(newAllListQuestion);

    mutateRemoveFromListQuestion({
      from,
      question_id: question._id
    });
  };

  const handleRemoveFromSaved = () => {
    const newSavedQuestions = savedQuestionsState?.filter((item) => item._id !== question._id);
    setSavedQuestionsState && setSavedQuestionsState(newSavedQuestions as IQuestionSummaryItem[]);

    mutateRemoveFromSaved(question._id);
  };

  const handleUnSave = () => {
    handleRemoveFromList();
    handleRemoveFromSaved();
  };

  return (
    <div>
      <div className='flex gap-3'>
        <div className='w-[20%] space-y-1 text-right text-[0.8rem]'>
          <div>
            {format.number(question.vote_score, { notation: 'compact', compactDisplay: 'long' }) +
              ' ' +
              t('votes', { count: question.vote_score })}
          </div>
          <div className='flex-end'>
            <div className='flex-start gap-1 rounded-lg bg-green-400 px-2 py-1 text-black dark:bg-green-500'>
              <FaCheck className='size-3' />
              <span>
                {format.number(question.answer_number, { notation: 'compact', compactDisplay: 'long' }) +
                  ' ' +
                  t('answers', { count: question.answer_number })}
              </span>
            </div>
          </div>
          <div>
            {format.number(question.view, { notation: 'compact', compactDisplay: 'long' }) +
              ' ' +
              t('views', { count: question.view })}
          </div>
        </div>
        <div className='w-[80%]'>
          <div className={cn(feature === 'saves' && 'flex justify-between')}>
            <Link
              href={`/questions/${question._id}`}
              className='mb-2 line-clamp-1 cursor-pointer text-[1rem] text-blue-500 duration-300 hover:text-blue-400'>
              {question.title}
            </Link>
            {feature === 'saves' && (
              <div className='text-1 mx-1 cursor-pointer py-1'>
                <IoIosMore className='size-5' />
                <div data-uk-drop='offset: 4; pos: right-right; mode: click; shift: false; flip: false; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right'>
                  <div className='*:uk-drop-close flex min-w-[120px] flex-col gap-0.5 rounded-lg bg-foreground-1 p-1 shadow-lg *:cursor-pointer *:rounded-lg *:px-2.5 *:py-1.5 hover:*:!bg-hover-1'>
                    <div className='uk-drop-close' onClick={() => handleUnSave()}>
                      {t('UnSave')}
                    </div>
                    {isInList && (
                      <div className='uk-drop-close' onClick={() => handleRemoveFromList()}>
                        {t('Remove from list')}
                      </div>
                    )}
                    <div className='uk-drop-close' onClick={() => setOpenMoveToList(true)}>
                      {t('Move to')}...
                    </div>
                    <Modal open={openMoveToList} handleClose={() => setOpenMoveToList(false)}>
                      <MoveToList
                        handleClose={() => setOpenMoveToList(false)}
                        list_name={list_name}
                        from={from}
                        questionID={question._id}
                      />
                    </Modal>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='text-[0.8rem]'>
            <ShowContent content={text} className='*:line-clamp-2' />
          </div>
          <div className='mt-2'>
            <div className='flex-start gap-2'>
              {question.hashtags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/questions/tags/${encodeURIComponent(tag.replace(/\./g, '%2E'))}`}
                  className='tag bg-1 rounded-md px-1'>
                  {tag}
                </Link>
              ))}
            </div>
            <div className='flex-end mt-3 gap-1 text-[0.8rem]'>
              <Avatar sx={{ width: 17, height: 17 }} src={getImageURL(question.user.user_image)} />
              <Link
                href={`/users/${question.user._id}`}
                className='text-blue-500 duration-300 hover:text-blue-400'>
                {question.user.name}
              </Link>
              <span className='text-text-2'>{t('asked')}</span>
              <span className='text-text-2'>{getFormattedDate(question.createdAt)}</span>
            </div>
          </div>
        </div>
      </div>
      <Divider className='my-4' />
    </div>
  );
}
