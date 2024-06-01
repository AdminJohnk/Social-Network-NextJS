import { Avatar, CircularProgress } from '@mui/material';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa6';
import CommentItem from './CommentItem';
import Divider from '@/components/shared/Divider';
import { Link } from '@/navigation';
import { IAnswerQuestion } from '@/types';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import QuestionDialog from '@/components/shared/QuestionDialog';
import Modal from '@/components/shared/Modal';
import { useFormatter, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import {
  useCommentAnswer,
  useDeleteAnswer,
  useVoteAnswer
} from '@/hooks/mutation';
import EditAnswer from './EditAnswer';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { IoMdSend } from 'react-icons/io';
import { cn } from '@/lib/utils';
import { useCurrentUserInfo } from '@/hooks/query';

export interface IAnswerItemProps {
  answer: IAnswerQuestion;
  questionID: string;
}

export default function AnswerItem({ answer, questionID }: IAnswerItemProps) {
  const t = useTranslations();
  const format = useFormatter();

  const [openDeleteAnswer, setOpenDeleteAnswer] = useState(false);
  const [isAddComment, setIsAddComment] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');

  const [vote, setVote] = useState<string>('cancel');
  const [voteNumber, setVoteNumber] = useState<number>(0);

  const { currentUserInfo } = useCurrentUserInfo();
  const { mutateDeleteAnswer, isLoadingDeleteAnswer } = useDeleteAnswer();
  const { mutateCommentAnswer, isLoadingCommentAnswer } = useCommentAnswer();
  const { mutateVoteAnswer } = useVoteAnswer();

  // Modal
  const [openEditAnswer, setOpenEditAnswer] = useState(false);

  useEffect(() => {
    if (currentUserInfo) {
      const voteUp = answer.vote_up.find(item => item === currentUserInfo._id);
      const voteDown = answer.vote_down.find(
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
    setVoteNumber(answer.vote_score);
  }, [answer, currentUserInfo]);

  const getFormattedDate = (date: string) => {
    return format.dateTime(new Date(date), {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleDeleteComment = () => {
    mutateDeleteAnswer(
      { question_id: questionID, answer_id: answer._id },
      {
        onSuccess: () => {
          showSuccessToast(t('Answer deleted successfully!'));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled: () => {
          setOpenDeleteAnswer(false);
        }
      }
    );
  };

  const handleAddComment = () => {
    if (!comment) {
      showErrorToast(t('Please write your comment'));
      return;
    }
    mutateCommentAnswer(
      { question_id: questionID, answer_id: answer._id, content: comment },
      {
        onSuccess: () => {
          showSuccessToast(t('Comment added successfully!'));
          setComment('');
          setIsAddComment(false);
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        }
      }
    );
  };

  return (
    <>
      {!answer ? (
        <></>
      ) : (
        <div>
          <div className='flex'>
            <div className='flex flex-col gap-2 mr-3 text-center'>
              <span
                className={cn(
                  'p-2 rounded-full border border-border-1 cursor-pointer'
                )}
              >
                <BiSolidUpArrow
                  className={cn(
                    'size-5 text-1',
                    vote === 'up' && 'text-green-400'
                  )}
                  onClick={() => {
                    if (vote === 'up') {
                      mutateVoteAnswer({
                        question_id: questionID,
                        answer_id: answer._id,
                        type: 'cancel'
                      });
                      setVoteNumber(voteNumber - 1);
                      setVote('cancel');
                      return;
                    }
                    mutateVoteAnswer({
                      question_id: questionID,
                      answer_id: answer._id,
                      type: 'up'
                    });
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
                      mutateVoteAnswer({
                        question_id: questionID,
                        answer_id: answer._id,
                        type: 'cancel'
                      });
                      setVoteNumber(voteNumber + 1);
                      setVote('cancel');
                      return;
                    }
                    mutateVoteAnswer({
                      question_id: questionID,
                      answer_id: answer._id,
                      type: 'down'
                    });
                    if (vote === 'up') {
                      setVoteNumber(voteNumber - 2);
                    } else if (vote === 'cancel') {
                      setVoteNumber(voteNumber - 1);
                    }
                    setVote('down');
                  }}
                />
              </span>
            </div>
            <div className='grow'>
              <ShowContent content={answer.content} />
              <div className='flex justify-between mt-10 small-regular'>
                <div className='*:text-1 space-x-2'>
                  <span onClick={() => setOpenEditAnswer(true)}>
                    {t('Edit')}
                  </span>
                  <Modal
                    open={openEditAnswer}
                    handleClose={() => setOpenEditAnswer(false)}
                  >
                    <EditAnswer
                      handleClose={() => setOpenEditAnswer(false)}
                      answer={answer}
                      questionID={questionID}
                    />
                  </Modal>
                  <QuestionDialog
                    open={openDeleteAnswer}
                    setOpen={setOpenDeleteAnswer}
                    handleFunction={handleDeleteComment}
                    isLoading={isLoadingDeleteAnswer}
                    question='Are you absolutely sure delete this answer?'
                    content='You will not be able to recover answer after deletion!'
                    component={<span>{t('Delete')}</span>}
                  />
                </div>
                <div className='flex justify-between w-[70%]'>
                  <div className='text-text-2 pt-2'>
                    <span className='me-1'>{t('edited')}</span>
                    <span className='me-1'>
                      {getFormattedDate(answer.update_at)}
                    </span>
                    <span className='space-x-1'>
                      <span>{t('at1')}</span>
                      <span>
                        {format.dateTime(new Date(answer.update_at), {
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
                        {getFormattedDate(answer.createdAt)}
                      </span>
                      <span className='space-x-1'>
                        <span>{t('at1')}</span>
                        <span>
                          {format.dateTime(new Date(answer.createdAt), {
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
                          href={`/profile/${answer.user._id}`}
                          className='text-blue-400 hover:text-blue-500 duration-300'
                        >
                          {answer.user.name}
                        </Link>
                        <span>{answer.user.experiences[0].position_name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className='mt-10' />
              <div className='py-2 text-pretty'>
                {answer.comment
                  .sort((a, b) => b.vote.length - a.vote.length)
                  .map((comment, index) => (
                    <CommentItem
                      key={index}
                      comment={comment}
                      questionID={questionID}
                      answerID={answer._id}
                      type='ans'
                    />
                  ))}
              </div>
              <div className='text-1 text-[0.8rem]'>
                {!isAddComment ? (
                  <span
                    className='cursor-pointer'
                    onClick={() => setIsAddComment(true)}
                  >
                    {t('Add a comment')}
                  </span>
                ) : (
                  <div>
                    <textarea
                      className='w-full border border-border-1 rounded-lg p-2 resize-none bg-transparent custom-scrollbar-bg text-[0.8rem]'
                      rows={3}
                      onChange={e => setComment(e.target.value)}
                    />
                    <div className='flex-between'>
                      <div
                        className='text-blue-500 hover:text-blue-600 duration-300 small-regular cursor-pointer px-1'
                        onClick={() => setIsAddComment(false)}
                      >
                        {t('Cancel')}
                      </div>
                      <div className='flex-start gap-2'>
                        <IoMdSend
                          className={cn(
                            'size-5 text-blue-500 hover:text-blue-600 duration-300 cursor-pointer',
                            isLoadingCommentAnswer && 'select-none'
                          )}
                          onClick={() => handleAddComment()}
                        />
                        {isLoadingCommentAnswer && (
                          <CircularProgress
                            size={20}
                            className='!text-text-1 mr-2'
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Divider className='mt-2 mb-8' />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
