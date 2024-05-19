import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { useCurrentUserInfo } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { ICommentSeriesPost } from '@/types';
import { Avatar, CircularProgress } from '@mui/material';
import { useFormatter, useTranslations } from 'next-intl';
import { BiCommentDetail, BiSolidTrashAlt } from 'react-icons/bi';
import { IoIosMore, IoMdSend } from 'react-icons/io';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { Editor as EditorProps } from '@tiptap/react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Editor from '@/components/shared/Editor/Editor';
import {
  useDeleteCommentPostSeries,
  useDeleteReplyCommentPostSeries,
  useLikeCommentSeriesPost,
  useLikeReplyCommentSeriesPost,
  useUpdateCommentPostSeries,
  useUpdateReplyCommentPostSeries
} from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import ReplyComment from './ReplyComment';

export interface ICommentItemProps {
  comment: ICommentSeriesPost;
  series_id: string;
  post_id: string;
  type?: 'comment' | 'reply';
  parent_id?: string;
}

export default function CommentItem({
  comment,
  series_id,
  post_id,
  type = 'comment',
  parent_id
}: ICommentItemProps) {
  const t = useTranslations();

  const { currentUserInfo } = useCurrentUserInfo();
  const isAuthor = currentUserInfo?._id === comment.user._id;

  const getFormattedDate = (date: string) => {
    const format = useFormatter();
    return format.dateTime(new Date(date), {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const { mutateUpdateCommentPostSeries } = useUpdateCommentPostSeries();
  const { mutateDeleteCommentPostSeries } = useDeleteCommentPostSeries();
  const { mutateLikeCommentSeriesPost } = useLikeCommentSeriesPost();

  // Child Comment
  const { mutateUpdateReplyCommentPostSeries } =
    useUpdateReplyCommentPostSeries();
  const { mutateDeleteReplyCommentPostSeries } =
    useDeleteReplyCommentPostSeries();
  const { mutateLikeReplyCommentSeriesPost } = useLikeReplyCommentSeriesPost();

  const [isLoadingDeleteComment, setIsLoadingDeleteComment] =
    useState<boolean>(false);
  const [isLoadingUpdateComment, setIsLoadingUpdateComment] =
    useState<boolean>(false);
  const [isEditComment, setIsEditComment] = useState<boolean>(false);
  const [isReplyComment, setIsReplyComment] = useState<boolean>(false);
  const [numberChildCommentShow, setNumberChildCommentShow] =
    useState<number>(3);

  const [editor, setEditor] = useState<EditorProps>();

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [numberLikes, setNumberLikes] = useState<number>(0);

  useEffect(() => {
    setIsLiked(
      comment.like.some(liker => liker._id === currentUserInfo?._id) || false
    );
    setNumberLikes(comment.like.length || 0);
  }, [comment]);

  // Dialog Delete Comment
  const [openDeleteComment, setOpenDeleteComment] = useState(false);
  const handleOpenDeleteComment = () => setOpenDeleteComment(true);
  const handleCloseDeleteComment = () => setOpenDeleteComment(false);

  const handleLikeComment = () => {
    if (type == 'comment') {
      mutateLikeCommentSeriesPost({
        series_id,
        post_id,
        comment_id: comment._id
      });
    } else {
      mutateLikeReplyCommentSeriesPost({
        series_id,
        post_id,
        comment_id: parent_id as string,
        child_id: comment._id
      });
    }
  };

  const handleDeleteComment = () => {
    if (type == 'comment') {
      setIsLoadingDeleteComment(true);
      mutateDeleteCommentPostSeries(
        {
          series_id,
          post_id,
          comment_id: comment._id
        },
        {
          onSuccess: () => {
            showSuccessToast(t('Comment deleted successfully!'));
          },
          onError: () => {
            showErrorToast(t('Something went wrong! Please try again!'));
          },
          onSettled: () => {
            setIsLoadingDeleteComment(false);
            handleCloseDeleteComment();
          }
        }
      );
    } else {
      setIsLoadingDeleteComment(true);
      mutateDeleteReplyCommentPostSeries(
        {
          series_id,
          post_id,
          comment_id: parent_id as string,
          child_id: comment._id
        },
        {
          onSuccess: () => {
            showSuccessToast(t('Comment deleted successfully!'));
          },
          onError: () => {
            showErrorToast(t('Something went wrong! Please try again!'));
          },
          onSettled: () => {
            setIsLoadingDeleteComment(false);
            handleCloseDeleteComment();
          }
        }
      );
    }
  };

  const handleUpdateComment = () => {
    if (type == 'comment') {
      setIsLoadingUpdateComment(true);
      mutateUpdateCommentPostSeries(
        {
          series_id,
          post_id,
          comment_id: comment._id,
          content: editor?.getHTML() as string
        },
        {
          onSuccess: () => {
            showSuccessToast(t('Comment updated successfully!'));
          },
          onError: () => {
            showErrorToast(t('Something went wrong! Please try again!'));
          },
          onSettled: () => {
            editor?.commands.clearContent();
            setIsEditComment(false);
            setIsLoadingUpdateComment(false);
          }
        }
      );
    } else {
      setIsLoadingUpdateComment(true);
      mutateUpdateReplyCommentPostSeries(
        {
          series_id,
          post_id,
          comment_id: parent_id as string,
          child_id: comment._id,
          content: editor?.getHTML() as string
        },
        {
          onSuccess: () => {
            showSuccessToast(t('Comment updated successfully!'));
          },
          onError: () => {
            showErrorToast(t('Something went wrong! Please try again!'));
          },
          onSettled: () => {
            editor?.commands.clearContent();
            setIsEditComment(false);
            setIsLoadingUpdateComment(false);
          }
        }
      );
    }
  };

  return (
    <div className='flex gap-4'>
      <Avatar src={getImageURL(comment.user.user_image)} />
      <div className='flex-col'>
        <div className='flex-start gap-2'>
          <div className='base-semibold'>{comment.user.name}</div>
          <div className='small-regular text-text-2'>
            {getFormattedDate(comment.createdAt)}
          </div>
        </div>
        <div className='text-text-2 mt-1 mb-2'>
          {!isEditComment ? (
            <ShowContent content={comment.content} />
          ) : (
            <div className='my-2'>
              <Editor setEditor={setEditor} content={comment.content} />
            </div>
          )}
        </div>
        {!isEditComment ? (
          <div className='flex-start gap-4'>
            <div
              className='flex-start gap-1 cursor-pointer hover:text-red-500 duration-300'
              onClick={() => {
                setIsLiked(!isLiked);
                setNumberLikes(isLiked ? numberLikes - 1 : numberLikes + 1);
                handleLikeComment();
              }}
            >
              {isLiked ? (
                <IoHeartSharp className='size-4 text-red-500' />
              ) : (
                <IoHeartOutline className='size-4' />
              )}
              <span>{numberLikes}</span>
              <span>{t('Likes')}</span>
            </div>
            {type === 'comment' && (
              <div
                className='flex-start gap-1 cursor-pointer hover:text-teal-400 duration-300'
                onClick={() => setIsReplyComment(true)}
              >
                <BiCommentDetail className='size-4' />
                <span>{comment.child.length}</span>
              </div>
            )}
          </div>
        ) : (
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
                  isLoadingUpdateComment && 'select-none'
                )}
                onClick={() => handleUpdateComment()}
              />
              {isLoadingUpdateComment && (
                <CircularProgress size={20} className='!text-text-1 mr-2' />
              )}
            </div>
          </div>
        )}
        {
          // Show Reply Comment
          type == 'comment' &&
            comment.child
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .slice(0, numberChildCommentShow)
              .map(replyComment => (
                <div key={replyComment._id} className='my-5'>
                  <CommentItem
                    comment={replyComment}
                    series_id={series_id}
                    post_id={post_id}
                    type='reply'
                    parent_id={comment._id}
                  />
                </div>
              ))
        }
        {
          // Show More Reply Comment
          type == 'comment' &&
            comment.child.length > numberChildCommentShow && (
              <div
                className='text-blue-500 hover:text-blue-600 duration-300 cursor-pointer'
                onClick={() =>
                  setNumberChildCommentShow(numberChildCommentShow + 3)
                }
              >
                {t('Show more reply comment')}
              </div>
            )
        }
        {isReplyComment && (
          <div className='mt-3'>
            <ReplyComment
              setIsReplyComment={setIsReplyComment}
              series_id={series_id}
              post_id={post_id}
              comment_id={comment._id}
            />
          </div>
        )}
      </div>
      {isAuthor && !isEditComment && (
        <div>
          <IoIosMore className='size-5 text-1 outline-none' />
          <div data-uk-drop='offset: 4; pos: right-right; mode: click; shift: false; flip: false; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right'>
            <div className='flex flex-col gap-0.5 p-1 bg-foreground-1 rounded-lg shadow-lg *:px-2.5 *:py-1.5 hover:*:!bg-hover-1 *:cursor-pointer *:rounded-lg *:uk-drop-close'>
              <div
                className='flex-start gap-2 uk-drop-close'
                onClick={() => {
                  setIsEditComment(true);
                }}
              >
                <FaPencilAlt className='size-5 text-text-1' />
                <span>{t('Edit')}</span>
              </div>
              <AlertDialog
                open={openDeleteComment}
                onOpenChange={setOpenDeleteComment}
              >
                <AlertDialogTrigger
                  className='w-full text-1 uk-drop-close'
                  onClick={handleOpenDeleteComment}
                >
                  <div className='flex-start gap-2'>
                    <BiSolidTrashAlt className='size-5 text-text-1' />
                    <span>{t('Delete')}</span>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      {t('Are you absolutely sure delete this comment?')}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {t(
                        'You will not be able to recover comment after deletion!'
                      )}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <Button
                      variant='destructive'
                      className={cn(isLoadingDeleteComment && 'select-none')}
                      disabled={isLoadingDeleteComment}
                      onClick={handleCloseDeleteComment}
                    >
                      {t('Cancel')}
                    </Button>
                    <Button
                      className={cn(isLoadingDeleteComment && 'select-none')}
                      disabled={isLoadingDeleteComment}
                      onClick={handleDeleteComment}
                    >
                      {isLoadingDeleteComment && (
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
          </div>
        </div>
      )}
    </div>
  );
}
