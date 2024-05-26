import { useEffect, useState } from 'react';
import { Avatar, CircularProgress } from '@mui/material';
import {
  BiSolidDownArrow,
  BiSolidTrashAlt,
  BiSolidUpArrow
} from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa6';
import CommentItem from './CommentItem';
import Divider from '@/components/shared/Divider';
import { Link } from '@/navigation';
import { IQuestion } from '@/types';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { useDeleteQuestion, useVoteQuestion } from '@/hooks/mutation';
import { useCurrentUserInfo } from '@/hooks/query';
import { cn } from '@/lib/utils';
import { useFormatter, useTranslations } from 'next-intl';
import Modal from '@/components/shared/Modal';
import CreateEditQuestion from './CreateEditQuestion';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

export interface IQuestionItemProps {
  question: IQuestion;
}

export default function QuestionItem({ question }: IQuestionItemProps) {
  const t = useTranslations();
  const format = useFormatter();

  const getFormattedDate = (date: string) => {
    return format.dateTime(new Date(date), {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const { mutateVoteQuestion } = useVoteQuestion();
  const { mutateDeleteQuestion, isLoadingDeleteQuestion } = useDeleteQuestion();
  const { currentUserInfo } = useCurrentUserInfo();

  const [vote, setVote] = useState<string>('cancel');
  const [voteNumber, setVoteNumber] = useState<number>(0);

  // Modal
  const [openEditQuestion, setOpenEditQuestion] = useState(false);

  // Dialog Delete Question
  const [openDeleteQuestion, setOpenDeleteQuestion] = useState(false);
  const handleOpenDeleteQuestion = () => setOpenDeleteQuestion(true);
  const handleCloseDeleteQuestion = () => setOpenDeleteQuestion(false);

  useEffect(() => {
    if (currentUserInfo) {
      const voteUp = question.vote_up.find(
        item => item === currentUserInfo._id
      );
      const voteDown = question.vote_down.find(
        item => item === currentUserInfo._id
      );
      if (voteUp) {
        setVote('up');
      } else if (voteDown) {
        setVote('down');
      } else {
        setVote('cancel');
      }
    }
    setVoteNumber(question.vote_score);
  }, [question, currentUserInfo]);

  const handleDeleteQuestion = () => {
    mutateDeleteQuestion(question._id, {
      onSuccess: () => {
        showSuccessToast(t('Question deleted successfully!'));
      },
      onError: () => {
        showErrorToast(t('Something went wrong! Please try again!'));
      },
      onSettled() {
        handleCloseDeleteQuestion();
      }
    });
  };

  return (
    <div>
      <div className='flex'>
        <div className='flex flex-col gap-2 mr-3 text-center'>
          <span
            className={cn(
              'p-2 rounded-full border border-border-1 cursor-pointer'
            )}
          >
            <BiSolidUpArrow
              className={cn('size-5 text-1', vote === 'up' && 'text-green-400')}
              onClick={() => {
                if (vote === 'up') {
                  mutateVoteQuestion({
                    question_id: question._id,
                    type: 'cancel'
                  });
                  setVoteNumber(voteNumber - 1);
                  setVote('cancel');
                  return;
                }
                mutateVoteQuestion({ question_id: question._id, type: 'up' });
                if (vote === 'down') {
                  setVoteNumber(voteNumber + 2);
                } else if (vote === 'cancel') {
                  setVoteNumber(voteNumber + 1);
                }
                setVote('up');
              }}
            />
          </span>
          <span className='h5-semibold'>{voteNumber}</span>
          <span
            className={cn(
              'p-2 rounded-full border border-border-1 cursor-pointer'
            )}
          >
            <BiSolidDownArrow
              className={cn(
                'size-5 text-1',
                vote === 'down' && 'text-green-400'
              )}
              onClick={() => {
                if (vote === 'down') {
                  mutateVoteQuestion({
                    question_id: question._id,
                    type: 'cancel'
                  });
                  setVoteNumber(voteNumber + 1);
                  setVote('cancel');
                  return;
                }
                mutateVoteQuestion({ question_id: question._id, type: 'down' });
                if (vote === 'up') {
                  setVoteNumber(voteNumber - 2);
                } else if (vote === 'cancel') {
                  setVoteNumber(voteNumber - 1);
                }
                setVote('down');
              }}
            />
          </span>
          <span className='p-2 rounded-full'>
            <FaRegBookmark className='size-4 cursor-pointer text-1' />
          </span>
        </div>
        <div className='grow'>
          <ShowContent content={question.problem + question.expect} />
          <div className='mt-6 flex-start gap-3 *:p-1 *:bg-1'>
            {question.hashtags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className='flex justify-between mt-10 small-regular'>
            <div className='*:text-1 flex gap-2'>
              <span onClick={() => setOpenEditQuestion(true)}>{t('Edit')}</span>
              <AlertDialog
                open={openDeleteQuestion}
                onOpenChange={setOpenDeleteQuestion}
              >
                <AlertDialogTrigger
                  className='uk-drop-close h-fit'
                  onClick={handleOpenDeleteQuestion}
                >
                  <span>{t('Delete')}</span>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      {t('Are you absolutely sure delete this post?')}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {t(
                        'You will not be able to recover post after deletion!'
                      )}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <Button
                      variant='destructive'
                      className={cn(isLoadingDeleteQuestion && 'select-none')}
                      disabled={isLoadingDeleteQuestion}
                      onClick={handleCloseDeleteQuestion}
                    >
                      {t('Cancel')}
                    </Button>
                    <Button
                      className={cn(isLoadingDeleteQuestion && 'select-none')}
                      disabled={isLoadingDeleteQuestion}
                      onClick={handleDeleteQuestion}
                    >
                      {isLoadingDeleteQuestion && (
                        <CircularProgress
                          size={20}
                          className='!text-text-1 mr-2'
                        />
                      )}
                      {t('Delete')}
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <Modal
              open={openEditQuestion}
              handleClose={() => setOpenEditQuestion(false)}
            >
              <CreateEditQuestion
                handleClose={() => setOpenEditQuestion(false)}
                dataEdit={question}
              />
            </Modal>
            <div className='flex justify-between w-[60%]'>
              <div className='text-text-2 pt-2'>
                <span className='me-1'>{t('edited')}</span>
                <span className='me-1'>
                  {getFormattedDate(question.update_at)}
                </span>
                <span className='space-x-1'>
                  <span>{t('at1')}</span>
                  <span>
                    {format.dateTime(new Date(question.update_at), {
                      hour: 'numeric',
                      minute: 'numeric'
                    })}
                  </span>
                </span>
              </div>
              <div className='p-2 bg-blue-200 dark:bg-blue-950 rounded-lg'>
                <div className='text-text-2'>
                  <span className='me-1'>{t('asked')}</span>
                  <span className='me-1'>
                    {getFormattedDate(question.createdAt)}
                  </span>
                  <span className='space-x-1'>
                    <span>{t('at1')}</span>
                    <span>
                      {format.dateTime(new Date(question.createdAt), {
                        hour: 'numeric',
                        minute: 'numeric'
                      })}
                    </span>
                  </span>
                </div>
                <div className='flex-start'>
                  <div className='mt-2'>
                    <Avatar sx={{ width: 30, height: 30 }} />
                  </div>
                  <div className='flex flex-col ms-2'>
                    <Link
                      href={''}
                      className='text-blue-400 hover:text-blue-500 duration-300'
                    >
                      {question.user.name}
                    </Link>
                    <span>{question.user.experiences[0].position_name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider className='mt-10' />
          <div className='py-2 text-pretty'>
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </div>
          <div className='text-1 text-[0.8rem] cursor-pointer'>
            Add a comment
          </div>
          <Divider className='mt-2 mb-8' />
        </div>
      </div>
    </div>
  );
}
