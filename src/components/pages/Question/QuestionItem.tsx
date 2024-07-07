import { useEffect, useState } from 'react';
import { Avatar, CircularProgress } from '@mui/material';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import CommentItem from './CommentItem';
import Divider from '@/components/shared/Divider';
import { Link, useRouter } from '@/navigation';
import { IQuestion } from '@/types';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { useCommentQuestion, useDeleteQuestion, useSaveQuestion, useVoteQuestion } from '@/hooks/mutation';
import { useCurrentUserInfo, useGetReputation } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { useFormatter, useTranslations } from 'next-intl';
import Modal from '@/components/shared/Modal';
import CreateEditQuestion from './CreateEditQuestion';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { IoMdSend } from 'react-icons/io';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import QuestionDialog from '@/components/shared/QuestionDialog';

export interface IQuestionItemProps {
  question: IQuestion;
}

export default function QuestionItem({ question }: IQuestionItemProps) {
  const t = useTranslations();
  const format = useFormatter();
  const router = useRouter();

  const getFormattedDate = (date: string) => {
    return format.dateTime(new Date(date), {
      dateStyle: 'long',
      timeStyle: 'short'
    });
  };

  const { currentUserInfo } = useCurrentUserInfo();
  const { reputation } = useGetReputation();
  const { mutateVoteQuestion, isLoadingVoteQuestion } = useVoteQuestion();
  const { mutateDeleteQuestion, isLoadingDeleteQuestion } = useDeleteQuestion();
  const { mutateCommentQuestion, isLoadingCommentQuestion } = useCommentQuestion();
  const { mutateSaveQuestion } = useSaveQuestion();

  const [vote, setVote] = useState<string>('cancel');
  const [voteNumber, setVoteNumber] = useState<number>(0);

  const [isSave, setIsSave] = useState<boolean>(false);

  const [isAddComment, setIsAddComment] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');

  const isOwnerQuestion = currentUserInfo._id === question.user._id;

  // Modal
  const [openEditQuestion, setOpenEditQuestion] = useState(false);

  // Dialog Delete Question
  const [openDeleteQuestion, setOpenDeleteQuestion] = useState(false);

  useEffect(() => {
    if (currentUserInfo) {
      const voteUp = question.vote_up.find((item) => item === currentUserInfo._id);
      const voteDown = question.vote_down.find((item) => item === currentUserInfo._id);
      if (voteUp) {
        setVote('up');
      } else if (voteDown) {
        setVote('down');
      } else {
        setVote('cancel');
      }
    }
    setVoteNumber(question?.vote_score);
    setIsSave(question?.saves?.includes(currentUserInfo?._id));
  }, [question, currentUserInfo]);

  const handleDeleteQuestion = () => {
    mutateDeleteQuestion(question._id, {
      onSuccess: () => {
        router.push('/questions');
        showSuccessToast(t('Question deleted successfully!'));
        router.push('/questions');
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
        <div className='mr-3 flex flex-col gap-2 text-center'>
          <span className={cn('cursor-pointer rounded-full border border-border-1 p-2')}>
            <BiSolidUpArrow
              className={cn('text-1 size-5', vote === 'up' && 'text-green-400')}
              onClick={() => {
                if (isLoadingVoteQuestion) return;
                if (vote === 'up') {
                  mutateVoteQuestion({
                    question_id: question._id,
                    type: 'cancel',
                    old: 'up'
                  });
                  setVoteNumber(voteNumber - reputation.level);
                  setVote('cancel');
                  return;
                }
                mutateVoteQuestion({ question_id: question._id, type: 'up', old: vote });
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
                if (isLoadingVoteQuestion) return;
                if (vote === 'down') {
                  mutateVoteQuestion({
                    question_id: question._id,
                    type: 'cancel',
                    old: 'down'
                  });
                  setVoteNumber(voteNumber + reputation.level);
                  setVote('cancel');
                  return;
                }
                mutateVoteQuestion({ question_id: question._id, type: 'down', old: vote });
                if (vote === 'up') {
                  setVoteNumber(voteNumber - reputation.level * 2);
                } else if (vote === 'cancel') {
                  setVoteNumber(voteNumber - reputation.level);
                }
                setVote('down');
              }}
            />
          </span>
          <span className='rounded-full p-2'>
            {!isSave ? (
              <IoBookmarkOutline
                className='size-5 cursor-pointer text-text-2 duration-300 hover:text-yellow-400'
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
          <div className='flex-start *:bg-1 mt-6 gap-3 *:rounded-sm *:p-1'>
            {question.hashtags.map((tag, index) => (
              <Link key={index} href={`/questions/tags/${encodeURIComponent(tag)}`}>
                {tag}
              </Link>
            ))}
          </div>
          <div className={cn('small-regular mt-10 flex justify-between', !isOwnerQuestion && 'justify-end')}>
            <div className={cn('*:text-1 space-x-2', !isOwnerQuestion && 'hidden')}>
              <span onClick={() => setOpenEditQuestion(true)}>{t('Edit')}</span>
              <Modal open={openEditQuestion} handleClose={() => setOpenEditQuestion(false)}>
                <CreateEditQuestion handleClose={() => setOpenEditQuestion(false)} dataEdit={question} />
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
            <div className='flex w-[70%] justify-between'>
              <div className='pt-2 text-text-2'>
                <span className='me-1'>{t('edited')}</span>
                <span className='me-1'>{getFormattedDate(question.update_at)}</span>
              </div>
              <div className='rounded-lg bg-blue-200 p-2 dark:bg-blue-950'>
                <div className='text-text-2'>
                  <span className='me-1'>{t('asked')}</span>
                  <span className='me-1'>{getFormattedDate(question.createdAt)}</span>
                </div>
                <div className='flex-start mt-2'>
                  <Link href={`/profile/${question.user._id}`}>
                    <Avatar sx={{ width: 30, height: 30 }} src={getImageURL(question.user.user_image)} />
                  </Link>

                  <div className='ms-2 flex flex-col'>
                    <Link
                      href={`/profile/${question.user._id}`}
                      className='text-blue-400 duration-300 hover:text-blue-500'>
                      {question.user.name}
                    </Link>
                    <span>{question.user.experiences[0]?.position_name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider className='mt-10' />
          <div className='text-pretty py-2'>
            {question.comment
              .sort((a, b) => b.vote.length - a.vote.length)
              .map((comment) => (
                <CommentItem
                  key={question._id}
                  comment={comment}
                  questionID={question._id}
                  type='que'
                  isQuestionOwner={isOwnerQuestion}
                />
              ))}
          </div>
          {/* Add comment */}
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
                        isLoadingCommentQuestion && 'select-none'
                      )}
                      onClick={() => handleAddComment()}
                    />
                    {isLoadingCommentQuestion && <CircularProgress size={20} className='mr-2 !text-text-1' />}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Divider className='mb-8 mt-2' />
        </div>
      </div>
    </div>
  );
}
