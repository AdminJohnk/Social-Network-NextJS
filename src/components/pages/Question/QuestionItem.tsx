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
import {
  useCommentQuestion,
  useDeleteQuestion,
  useSaveQuestion,
  useVoteQuestion
} from '@/hooks/mutation';
import { useCurrentUserInfo } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { useFormatter, useTranslations } from 'next-intl';
import Modal from '@/components/shared/Modal';
import CreateEditQuestion from './CreateEditQuestion';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { IoMdSend } from 'react-icons/io';
import { set } from 'lodash';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import QuestionDialog from '@/components/shared/QuestionDialog';

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

  const { currentUserInfo } = useCurrentUserInfo();
  const { mutateVoteQuestion } = useVoteQuestion();
  const { mutateDeleteQuestion, isLoadingDeleteQuestion } = useDeleteQuestion();
  const { mutateCommentQuestion, isLoadingCommentQuestion } =
    useCommentQuestion();
  const { mutateSaveQuestion } = useSaveQuestion();

  const [vote, setVote] = useState<string>('cancel');
  const [voteNumber, setVoteNumber] = useState<number>(0);

  const [isSave, setIsSave] = useState<boolean>(false);

  const [isAddComment, setIsAddComment] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');

  const isAuthor = currentUserInfo?._id === question.user._id;

  // Modal
  const [openEditQuestion, setOpenEditQuestion] = useState(false);

  // Dialog Delete Question
  const [openDeleteQuestion, setOpenDeleteQuestion] = useState(false);

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
    setVoteNumber(question?.vote_score);
    setIsSave(question?.save?.includes(currentUserInfo?._id));
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
        setOpenDeleteQuestion(false);
      }
    });
  };

  const handleAddComment = () => {
    if (comment.trim().length === 0) {
      showErrorToast(t('Please write your comment!'));
      return;
    }
    mutateCommentQuestion(
      {
        question_id: question._id,
        content: comment
      },
      {
        onSuccess: () => {
          showSuccessToast(t('Commented successfully!'));
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
            {!isSave ? (
              <IoBookmarkOutline
                className='size-5 cursor-pointer text-text-2 hover:text-yellow-400 duration-300'
                onClick={() => {
                  mutateSaveQuestion(question._id);
                  setIsSave(true);
                }}
              />
            ) : (
              <IoBookmark
                className='size-5 cursor-pointer text-yellow-400'
                onClick={() => {
                  mutateSaveQuestion(question._id);
                  setIsSave(false);
                }}
              />
            )}
          </span>
        </div>
        <div className='grow'>
          <ShowContent content={question.problem + question.expect} />
          <div className='mt-6 flex-start gap-3 *:p-1 *:bg-1'>
            {question.hashtags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div
            className={cn(
              'flex justify-between mt-10 small-regular',
              !isAuthor && 'justify-end'
            )}
          >
            <div className={cn('*:text-1 space-x-2', !isAuthor && 'hidden')}>
              <span onClick={() => setOpenEditQuestion(true)}>{t('Edit')}</span>
              <Modal
                open={openEditQuestion}
                handleClose={() => setOpenEditQuestion(false)}
              >
                <CreateEditQuestion
                  handleClose={() => setOpenEditQuestion(false)}
                  dataEdit={question}
                />
              </Modal>
              <QuestionDialog
                open={openDeleteQuestion}
                setOpen={setOpenDeleteQuestion}
                handleFunction={handleDeleteQuestion}
                isLoading={isLoadingDeleteQuestion}
                question='Are you absolutely sure delete this comment?'
                content='You will not be able to recover comment after deletion!'
                component={<span>{t('Delete')}</span>}
              />
            </div>
            <div className='flex justify-between w-[70%]'>
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
                    <Link href={`/profile/${question.user._id}`}>
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={getImageURL(question.user.user_image)}
                      />
                    </Link>
                  </div>
                  <div className='flex flex-col ms-2'>
                    <Link
                      href={`/profile/${question.user._id}`}
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
            {question.comment
              .sort((a, b) => b.vote.length - a.vote.length)
              .map(comment => (
                <CommentItem
                  key={question._id}
                  comment={comment}
                  questionID={question._id}
                  type='que'
                />
              ))}
          </div>
          {/* Add comment */}
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
                        isLoadingCommentQuestion && 'select-none'
                      )}
                      onClick={() => handleAddComment()}
                    />
                    {isLoadingCommentQuestion && (
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
  );
}