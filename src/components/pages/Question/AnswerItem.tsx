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
import { useCommentAnswer, useDeleteAnswer, useVoteAnswer } from '@/hooks/mutation';
import EditAnswer from './EditAnswer';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { IoMdSend } from 'react-icons/io';
import { cn, getImageURL } from '@/lib/utils';
import { useCurrentUserInfo, useGetReputation } from '@/hooks/query';

export interface IAnswerItemProps {
  answer: IAnswerQuestion;
  questionID: string;
  isQuestionOwner: boolean;
}

export default function AnswerItem({ answer, questionID, isQuestionOwner }: IAnswerItemProps) {
  const t = useTranslations();
  const format = useFormatter();

  const [openDeleteAnswer, setOpenDeleteAnswer] = useState(false);
  const [isAddComment, setIsAddComment] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');

  const [vote, setVote] = useState<string>('cancel');
  const [voteNumber, setVoteNumber] = useState<number>(0);

  const { currentUserInfo } = useCurrentUserInfo();
  const { reputation } = useGetReputation();

  const { mutateDeleteAnswer, isLoadingDeleteAnswer } = useDeleteAnswer();
  const { mutateCommentAnswer, isLoadingCommentAnswer } = useCommentAnswer();
  const { mutateVoteAnswer } = useVoteAnswer();

  const isAuthor = currentUserInfo._id === answer.user._id;

  // Modal
  const [openEditAnswer, setOpenEditAnswer] = useState(false);

  useEffect(() => {
    if (currentUserInfo) {
      const voteUp = answer.vote_up.find((item) => item === currentUserInfo._id);
      const voteDown = answer.vote_down.find((item) => item === currentUserInfo._id);
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
      dateStyle: 'long',
      timeStyle: 'short'
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
            <div className='mr-3 flex flex-col gap-2 text-center'>
              <span className={cn('cursor-pointer rounded-full border border-border-1 p-2')}>
                <BiSolidUpArrow
                  className={cn('text-1 size-5', vote === 'up' && 'text-green-400')}
                  onClick={() => {
                    if (vote === 'up') {
                      mutateVoteAnswer({
                        question_id: questionID,
                        answer_id: answer._id,
                        old: 'up',
                        type: 'cancel'
                      });
                      setVoteNumber(voteNumber - reputation.level);
                      setVote('cancel');
                      return;
                    }
                    mutateVoteAnswer({
                      question_id: questionID,
                      answer_id: answer._id,
                      type: 'up',
                      old: vote
                    });
                    if (vote === 'down') {
                      setVoteNumber(voteNumber + reputation.level * 2);
                    } else if (vote === 'cancel') {
                      setVoteNumber(voteNumber + reputation.level);
                    }
                    setVote('up');
                  }}
                />
              </span>
              <span className='h5-semibold'>{voteNumber}</span>
              <span className={cn('cursor-pointer rounded-full border border-border-1 p-2')}>
                <BiSolidDownArrow
                  className={cn('text-1 size-5', vote === 'down' && 'text-green-400')}
                  onClick={() => {
                    if (vote === 'down') {
                      mutateVoteAnswer({
                        question_id: questionID,
                        answer_id: answer._id,
                        old: 'down',
                        type: 'cancel'
                      });
                      setVoteNumber(voteNumber + reputation.level);
                      setVote('cancel');
                      return;
                    }
                    mutateVoteAnswer({
                      question_id: questionID,
                      answer_id: answer._id,
                      type: 'down',
                      old: vote
                    });
                    if (vote === 'up') {
                      setVoteNumber(voteNumber - reputation.level * 2);
                    } else if (vote === 'cancel') {
                      setVoteNumber(voteNumber - reputation.level);
                    }
                    setVote('down');
                  }}
                />
              </span>
            </div>
            <div className='grow'>
              <ShowContent content={answer.content} />
              <div
                className={cn(
                  'small-regular mt-10 flex justify-between',
                  !isQuestionOwner && !isAuthor && 'justify-end'
                )}>
                {(isQuestionOwner || isAuthor) && (
                  <div className={cn('*:text-1 space-x-2')}>
                    {isAuthor && (
                      <>
                        <span onClick={() => setOpenEditAnswer(true)}>{t('Edit')}</span>
                        <Modal open={openEditAnswer} handleClose={() => setOpenEditAnswer(false)}>
                          <EditAnswer
                            handleClose={() => setOpenEditAnswer(false)}
                            answer={answer}
                            questionID={questionID}
                          />
                        </Modal>
                      </>
                    )}
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
                )}
                <div className='flex w-[70%] justify-between'>
                  <div className='pt-2 text-text-2'>
                    <span className='me-1'>{t('edited')}</span>
                    <span className='me-1'>{getFormattedDate(answer.update_at)}</span>
                  </div>
                  <div className='rounded-lg bg-blue-200 p-2 dark:bg-blue-950'>
                    <div className='text-text-2'>
                      <span className='me-1'>{t('asked')}</span>
                      <span className='me-1'>{getFormattedDate(answer.createdAt)}</span>
                    </div>
                    <div className='flex-start mt-2'>
                      <Link href={`/profile/${answer.user._id}`}>
                        <Avatar sx={{ width: 30, height: 30 }} src={getImageURL(answer.user.user_image)} />
                      </Link>

                      <div className='ms-2 flex flex-col'>
                        <Link
                          href={`/profile/${answer.user._id}`}
                          className='text-blue-400 duration-300 hover:text-blue-500'>
                          {answer.user.name}
                        </Link>
                        <span>{answer.user.experiences[0]?.position_name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className='mt-10' />
              <div className='text-pretty py-2'>
                {answer.comment
                  .sort((a, b) => b.vote.length - a.vote.length)
                  .map((comment, index) => (
                    <CommentItem
                      key={index}
                      comment={comment}
                      questionID={questionID}
                      answerID={answer._id}
                      type='ans'
                      isQuestionOwner={isQuestionOwner}
                    />
                  ))}
              </div>
              <div className='text-1 text-[0.8rem]'>
                {!isAddComment ? (
                  <span className='cursor-pointer' onClick={() => setIsAddComment(true)}>
                    {t('Add a comment')}
                  </span>
                ) : (
                  <div>
                    <textarea
                      className='custom-scrollbar-bg w-full resize-none rounded-lg border border-border-1 bg-transparent p-2 text-[0.8rem]'
                      rows={3}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <div className='flex-between'>
                      <div
                        className='small-regular cursor-pointer px-1 text-blue-500 duration-300 hover:text-blue-600'
                        onClick={() => setIsAddComment(false)}>
                        {t('Cancel')}
                      </div>
                      <div className='flex-start gap-2'>
                        <IoMdSend
                          className={cn(
                            'size-5 cursor-pointer text-blue-500 duration-300 hover:text-blue-600',
                            isLoadingCommentAnswer && 'select-none'
                          )}
                          onClick={() => handleAddComment()}
                        />
                        {isLoadingCommentAnswer && (
                          <CircularProgress size={20} className='mr-2 !text-text-1' />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Divider className='mb-8 mt-2' />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
