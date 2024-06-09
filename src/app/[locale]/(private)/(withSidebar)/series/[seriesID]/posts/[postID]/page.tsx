'use client';

import { useEffect, useState } from 'react';
import CreateEditPostSeries from '@/components/pages/Series/CreateEditPostSeries';
import EditButton from '@/components/pages/Series/EditButton';
import Editor from '@/components/shared/Editor/Editor';
import Modal from '@/components/shared/Modal';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { Button } from '@/components/ui/button';
import { useCurrentUserInfo, useGetSeriesByID } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { Link } from '@/navigation';
import { Avatar, CircularProgress } from '@mui/material';
import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Editor as EditorProps } from '@tiptap/react';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { BiCommentDetail } from 'react-icons/bi';
import { FiFileText } from 'react-icons/fi';
import { CiShare2 } from 'react-icons/ci';
import { IUpdateSeriesPost } from '@/types';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import DeleteButton from '@/components/pages/Series/DeleteButton';
import {
  useCommentPostSeries,
  useDeleteImage,
  useDeletePostToSeries,
  useIncreaseViewSeries,
  useLikePostSeries,
  useSavePostSeries
} from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useRouter } from '@/navigation';
import { FaSwatchbook } from 'react-icons/fa';
import { SiGoogledocs } from 'react-icons/si';
import FriendButton from '@/components/pages/Profile/FriendButton';
import CommentItem from '@/components/pages/Series/CommentItem';
import { GoBookmark, GoBookmarkFill } from 'react-icons/go';

export interface IPostSeriesProps {
  params: {
    seriesID: string;
    postID: string;
  };
}

export default function PostSeries({ params: { seriesID, postID } }: IPostSeriesProps) {
  const t = useTranslations();
  const router = useRouter();

  const { series } = useGetSeriesByID(seriesID);
  const post = series?.posts.find((p) => p._id === postID);
  const indexPost = series?.posts.findIndex((p) => p._id === postID);
  // Get the following post
  const nextPost = series?.posts[indexPost + 1];

  const author = series?.user;

  const { currentUserInfo } = useCurrentUserInfo();
  const isSeriesOwner = series?.user?._id === currentUserInfo?._id || false;
  const [editor, setEditor] = useState<EditorProps>();

  const { mutateIncreaseViewSeries } = useIncreaseViewSeries();
  const { mutateDeletePostToSeries } = useDeletePostToSeries();
  const { mutateDeleteImage } = useDeleteImage();
  const { mutateCommentPostSeries } = useCommentPostSeries();
  const { mutateLikePostSeries } = useLikePostSeries();
  const { mutateSavePostSeries } = useSavePostSeries();

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [numberLikes, setNumberLikes] = useState<number>(0);

  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    setIsLiked(post?.likes.some((liker) => liker._id === currentUserInfo?._id) || false);
    setNumberLikes(post?.likes.length || 0);
    setIsSaved(post?.saves.some((saver) => saver._id === currentUserInfo?._id) || false);
  }, [post]);

  useEffect(() => {
    mutateIncreaseViewSeries(seriesID);
  }, []);

  // Delete Post
  const [openDeletePost, setOpenDeletePost] = useState(false);
  const handleOpenDeletePost = () => setOpenDeletePost(true);
  const handleCloseDeletePost = () => setOpenDeletePost(false);

  const [isLoadingDis, setIsLoadingDis] = useState<boolean>(false);

  const getFormattedDate = (date: string) => {
    const format = useFormatter();
    return format.dateTime(new Date(date), {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handlePostDiscussion = () => {
    setIsLoadingDis(true);
    const content: string = editor?.getHTML() || '';

    mutateCommentPostSeries(
      {
        series_id: seriesID,
        post_id: postID,
        content
      },
      {
        onSuccess: () => {
          showSuccessToast(t('Comment posted successfully!'));
          editor?.commands.clearContent();
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsLoadingDis(false);
        }
      }
    );
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDeletePost = () => {
    setIsLoading(true);
    mutateDeletePostToSeries(
      { id: postID, series_id: seriesID },
      {
        onSuccess: () => {
          showSuccessToast(t('Post deleted successfully!'));
          mutateDeleteImage([post?.cover_image!]);
          router.push(`/series/${seriesID}`);
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsLoading(false);
          handleCloseDeletePost();
        }
      }
    );
  };

  // Modal
  const [openEdit, setOpenEdit] = useState(false);

  const InteractComponent = () => {
    return (
      <div className='flex-start gap-3'>
        <div
          className='flex-start cursor-pointer gap-1 duration-300 hover:text-red-500'
          onClick={() => {
            setIsLiked(!isLiked);
            setNumberLikes(isLiked ? numberLikes - 1 : numberLikes + 1);
            mutateLikePostSeries({
              series_id: seriesID,
              post_id: postID
            });
          }}>
          {isLiked ? <IoHeartSharp className='size-4 text-red-500' /> : <IoHeartOutline className='size-4' />}
          <span>{numberLikes}</span>
        </div>
        <a
          href={'#discussion'}
          className='flex-start cursor-pointer gap-1 duration-300 hover:text-teal-400'
          onClick={() => {
            editor?.commands.focus();
          }}>
          <BiCommentDetail className='size-4' />
          <span>{post?.comments.length}</span>
        </a>
        <div
          onClick={() => {
            setIsSaved(!isSaved);
            mutateSavePostSeries({
              series_id: seriesID,
              post_id: postID
            });
          }}>
          {isSaved ? (
            <GoBookmarkFill className='size-4 cursor-pointer text-yellow-400' />
          ) : (
            <GoBookmark className='size-4 cursor-pointer duration-300 hover:text-yellow-400' />
          )}
        </div>
        <CiShare2 className='text-1 size-4 cursor-pointer' />
      </div>
    );
  };

  return (
    <div className='ms-60 mt-16 pb-5 pt-5 max-lg/2:ms-0'>
      {isSeriesOwner && (
        <>
          <EditButton
            className='fixed right-4 top-[20%] z-50'
            onClick={() => {
              setOpenEdit(true);
            }}
          />
          <AlertDialog open={openDeletePost} onOpenChange={setOpenDeletePost}>
            <AlertDialogTrigger onClick={handleOpenDeletePost} asChild>
              <DeleteButton className='fixed right-4 top-[calc(20%+4rem)] z-50' />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{t('Are you absolutely sure delete this post?')}</AlertDialogTitle>
                <AlertDialogDescription>
                  {t('You will not be able to recover post after deletion!')}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button
                  variant='destructive'
                  className={cn(isLoading && 'select-none')}
                  disabled={isLoading}
                  onClick={handleCloseDeletePost}>
                  {t('Cancel')}
                </Button>
                <Button
                  className={cn(isLoading && 'select-none')}
                  disabled={isLoading}
                  onClick={handleDeletePost}>
                  {isLoading && <CircularProgress size={20} className='mr-2 !text-text-1' />}
                  {t('Delete')}
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
      <Modal open={openEdit} handleClose={() => setOpenEdit(false)}>
        <CreateEditPostSeries
          handleClose={() => setOpenEdit(false)}
          series_id={seriesID}
          dataEdit={
            {
              id: post?._id,
              series_id: seriesID,
              title: post?.title,
              description: post?.description,
              cover_image: post?.cover_image,
              content: post?.content,
              read_time: post?.read_time,
              visibility: post?.visibility
            } as IUpdateSeriesPost
          }
        />
      </Modal>
      <div className='mx-auto max-w-[730px]'>
        <div className='flex-start mb-5 flex-wrap gap-3'>
          <Link href={`/series/${seriesID}`} className='flex-start text-1 gap-2'>
            <FaSwatchbook className='size-5' />
            <span className='base-semibold'>{series?.title}</span>
          </Link>
          <span className='text-xl'>/</span>
          <div className='flex-start text-1 gap-2'>
            <SiGoogledocs className='size-5' />
            <span className='base-semibold'>{post?.title}</span>
          </div>
        </div>
        <Image
          src={getImageURL(post?.cover_image) || '/images/no-image.png'}
          className='h-[370px] w-full rounded-lg object-fill'
          width={1500}
          height={1500}
          alt='cover-image'
          priority
        />
        <div className='h2-semibold mt-7'>{post?.title}</div>
        <div className='mt-4 text-pretty text-[1rem] text-text-2'>{post?.description}</div>
        <div className='flex-between mb-6 mt-6 text-text-2'>
          <div className='flex-start gap-3'>
            <div className='flex-start items-center gap-2 rounded-lg border-2 border-sky-100 bg-sky-50 px-2 py-1 text-sky-600 duration-300 hover:bg-sky-200 dark:border-sky-900 dark:bg-sky-950 dark:hover:bg-sky-900'>
              <FiFileText className='size-3' />
              <span className='base-semibold'>{t('Blog')}</span>
            </div>
            <div>{getFormattedDate(post?.createdAt!)}</div>
            <span>•</span>
            <div>{post?.read_time + t(' min read')}</div>
          </div>
          <InteractComponent />
        </div>
        <div>
          <div className='small-semibold mb-2 text-text-2'>{t('Contributors')}</div>
          <div className='flex-start gap-2'>
            <Avatar src={getImageURL(author?.user_image)} />
            <div>
              <div className='base-semibold'>{author?.name}</div>
              <div className='small-regular'>{author?.alias}</div>
            </div>
          </div>
        </div>
        <div className='my-5 text-pretty px-2 text-[1rem] leading-relaxed'>
          <ShowContent content={post?.content!} />
        </div>
        <div className='author flex-between mb-6 mt-10'>
          <div className='flex-start gap-2'>
            <Link href={`/profile/${author?._id}`}>
              <Avatar src={getImageURL(author?.user_image)} />
            </Link>
            <div className='flex-col'>
              <Link href={`/profile/${author?._id}`}>
                <div>{author?.name}</div>
              </Link>
              {author?.experiences?.length > 0 && (
                <div className='small-regular space-x-1 text-text-2'>
                  <span>
                    {author?.experiences[0].position_name} {t('at')}
                  </span>
                  <span>{author?.experiences[0].company_name}</span>
                </div>
              )}
            </div>
          </div>
          {!isSeriesOwner && <FriendButton profileID={author?._id} variant='default' />}
        </div>
        <div className='flex-end text-text-2'>
          <InteractComponent />
        </div>
        {nextPost && (
          <div className='bg-2 mt-10 space-y-2 rounded-lg px-5 py-5'>
            <Link href={`/series/${seriesID}/posts/${nextPost?._id}`}>
              <div className='base-semibold mb-2 text-end'>{t('Next')}</div>
              <div className='base-bold text-end'>{nextPost?.title}</div>
            </Link>
          </div>
        )}
        <div className='mt-10'>
          <div className='base-bold' id='#discussion'>
            {t('Discussion')}
          </div>
          <div className='editor mt-3 space-y-5 rounded-lg border border-border-1 px-2 py-3'>
            <Editor setEditor={setEditor} placeholder={t('Write something nice')} autofocus={false} />
          </div>
          <div className='flex-end'>
            <Button
              className={cn('mt-3', isLoadingDis && 'select-none')}
              disabled={isLoadingDis}
              onClick={() => handlePostDiscussion()}>
              {isLoadingDis && <CircularProgress size={20} className='mr-2 !text-text-1' />}
              {t('Post Discussion')}
            </Button>
          </div>
          <div className='mt-7'>
            {post?.comments
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .sort((a, b) => b.like.length - a.like.length)
              .map((comment, index) => (
                <div className='mb-6' key={index}>
                  <CommentItem
                    comment={comment}
                    series_id={seriesID}
                    post_id={postID}
                    isSeriesOwner={isSeriesOwner}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
