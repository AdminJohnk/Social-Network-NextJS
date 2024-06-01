import Divider from '@/components/shared/Divider';
import QuestionDialog from '@/components/shared/QuestionDialog';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import {
  useDeleteCommentAnswer,
  useDeleteCommentQuestion,
  useUpdateCommentAnswer,
  useUpdateCommentQuestion,
  useVoteCommentAnswer,
  useVoteCommentQuestion
} from '@/hooks/mutation';
import { useCurrentUserInfo } from '@/hooks/query';
import { cn } from '@/lib/utils';
import { ICommentQuestion } from '@/types';
import { CircularProgress } from '@mui/material';
import { useFormatter, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { FaPencilAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { IoMdSend } from 'react-icons/io';

export interface ICommentItemProps {
  comment: ICommentQuestion;
  questionID: string;
  answerID?: string;
  type: 'que' | 'ans';
}

export default function CommentItem({
  comment,
  questionID,
  answerID,
  type
}: ICommentItemProps) {
  const t = useTranslations();
  const format = useFormatter();

  const { currentUserInfo } = useCurrentUserInfo();

  const [isEditComment, setIsEditComment] = useState<boolean>(false);
  const [commentContent, setCommentContent] = useState<string>('');

  const [isVote, setIsVote] = useState<boolean>(false);
  const [vote_number, setVote_number] = useState<number>(0);

  const [openDeleteComment, setOpenDeleteComment] = useState(false);

  // Comment Question
  const { mutateUpdateCommentQuestion, isLoadingUpdateCommentQuestion } =
    useUpdateCommentQuestion();
  const { mutateDeleteCommentQuestion, isLoadingDeleteCommentQuestion } =
    useDeleteCommentQuestion();
  const { mutateVoteCommentQuestion, isLoadingVoteCommentQuestion } =
    useVoteCommentQuestion();

  // Comment Answer
  const { mutateUpdateCommentAnswer, isLoadingUpdateCommentAnswer } =
    useUpdateCommentAnswer();
  const { mutateDeleteCommentAnswer, isLoadingDeleteCommentAnswer } =
    useDeleteCommentAnswer();
  const { mutateVoteCommentAnswer, isLoadingVoteCommentAnswer } =
    useVoteCommentAnswer();

  useEffect(() => {
    const checkVoted: boolean = comment?.vote.some(
      voteItem => voteItem === currentUserInfo?._id
    );
    setIsVote(checkVoted);
    setVote_number(comment?.vote.length);
  }, [comment]);

  const getFormattedDate = (date: string) => {
    return format.dateTime(new Date(date), {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleEditComment = () => {
    if (commentContent.trim().length === 0) {
      showErrorToast(t('Please write your comment!'));
      return;
    }

    const handleFunction =
      type === 'que' ? mutateUpdateCommentQuestion : mutateUpdateCommentAnswer;

    handleFunction(
      {
        question_id: questionID,
        answer_id: type === 'ans' ? answerID : undefined,
        comment_id: comment._id,
        content: commentContent
      },
      {
        onSuccess: () => {
          showSuccessToast(t('Comment updated successfully!'));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsEditComment(false);
          setCommentContent('');
        }
      }
    );
  };

  const handleDeleteComment = () => {
    const handleFunction =
      type === 'que' ? mutateDeleteCommentQuestion : mutateDeleteCommentAnswer;

    handleFunction(
      {
        question_id: questionID,
        answer_id: type === 'ans' ? answerID : undefined,
        comment_id: comment._id
      },
      {
        onSuccess: () => {
          showSuccessToast(t('Comment deleted successfully!'));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setOpenDeleteComment(false);
        }
      }
    );
  };

  const handleVoteComment = () => {
    const handleFunction =
      type === 'que' ? mutateVoteCommentQuestion : mutateVoteCommentAnswer;

      handleFunction({
      question_id: questionID,
      answer_id: type === 'ans' ? answerID : undefined,
      comment_id: comment._id
    });
  };

  return (
    <>
      {!comment ? (
        <>Loading ...</>
      ) : (
        <div className='text-[0.8rem]'>
          <div className='flex gap-5 px-5'>
            <div className='text-orange-400'>{vote_number}</div>
            {!isEditComment ? (
              <div>
                {comment.content + ' – '}
                <Link
                  href={`/profile/${comment.user._id}`}
                  className='text-blue-400 hover:text-blue-500 duration-300'
                >
                  {comment.user.name}
                </Link>
                <span className='ms-1 text-text-2'>
                  <span className='me-1'>
                    {getFormattedDate(comment.createdAt)}
                  </span>
                  <span className='space-x-1'>
                    <span>{t('at1')}</span>
                    <span>
                      {format.dateTime(new Date(comment.createdAt), {
                        hour: 'numeric',
                        minute: 'numeric'
                      })}
                    </span>
                  </span>
                </span>
                <span className='ms-4'>
                  <FaPencilAlt
                    className='inline-block size-3 text-1'
                    onClick={() => setIsEditComment(true)}
                  />
                </span>
                <span className='ms-2'>
                  <QuestionDialog
                    open={openDeleteComment}
                    setOpen={setOpenDeleteComment}
                    handleFunction={handleDeleteComment}
                    isLoading={
                      type === 'que'
                        ? isLoadingDeleteCommentQuestion
                        : isLoadingDeleteCommentAnswer
                    }
                    question='Are you absolutely sure delete this comment?'
                    content='You will not be able to recover comment after deletion!'
                    component={
                      <BiSolidTrashAlt className='inline-block size-3.5 text-1' />
                    }
                  />
                </span>
                <span className='ms-2'>
                  <FaCheck
                    className={cn(
                      'inline-block size-4 text-text-2 hover:text-green-500 duration-300 cursor-pointer',
                      isVote && 'text-green-500',
                      (type === 'que'
                        ? isLoadingVoteCommentQuestion
                        : isLoadingVoteCommentAnswer) && 'select-none'
                    )}
                    onClick={() => {
                      setIsVote(!isVote);
                      setVote_number(
                        isVote ? vote_number - 1 : vote_number + 1
                      );
                      handleVoteComment();
                    }}
                  />
                </span>
              </div>
            ) : (
              <div className='w-full'>
                <textarea
                  className='w-full border border-border-1 rounded-lg p-2 resize-none bg-transparent custom-scrollbar-bg text-[0.8rem]'
                  rows={3}
                  onChange={e => setCommentContent(e.target.value)}
                  defaultValue={comment.content}
                />
                <div className='flex-between'>
                  <div
                    className='text-blue-500 hover:text-blue-600 duration-300 small-regular cursor-pointer px-1'
                    onClick={() => setIsEditComment(false)}
                  >
                    {t('Cancel')}
                  </div>
                  <div className='flex-start gap-2'>
                    <IoMdSend
                      className={cn(
                        'size-5 text-blue-500 hover:text-blue-600 duration-300 cursor-pointer',
                        (type === 'que'
                          ? isLoadingUpdateCommentQuestion
                          : isLoadingUpdateCommentAnswer) && 'select-none'
                      )}
                      onClick={() => handleEditComment()}
                    />
                    {(type === 'que'
                      ? isLoadingUpdateCommentQuestion
                      : isLoadingUpdateCommentAnswer) && (
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
          <Divider className='my-2' />
        </div>
      )}
    </>
  );
}
