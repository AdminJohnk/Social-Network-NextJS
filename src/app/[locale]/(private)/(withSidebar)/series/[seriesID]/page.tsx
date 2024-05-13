'use client';

import EditButton from '@/components/pages/Series/EditButton';
import Divider from '@/components/shared/Divider';
import Modal from '@/components/shared/Modal';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { Button } from '@/components/ui/button';
import { useCurrentUserInfo, useGetSeriesByID } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
import { Link } from '@/navigation';
import { ISeriesPost, IUpdateSeries, IUpdateSeriesPost } from '@/types';
import { Avatar, CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { FaPen, FaPencilAlt, FaRegCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { IoAdd } from 'react-icons/io5';
import CreateEditSeries from '@/components/pages/Series/CreateEditSeries';
import CreateEditPostSeries from '@/components/pages/Series/CreateEditPostSeries';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import {
  useDeleteImage,
  useDeletePostToSeries,
  useDeleteSeries
} from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import DeleteButton from '@/components/pages/Series/DeleteButton';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { getFormattedDate } from '@/lib/utils/formatDateTime';

export interface IPostItemProps {
  post: ISeriesPost;
  series_id: string;
  isMe: boolean;
}

export function PostItem({ post, series_id, isMe }: IPostItemProps) {
  const t = useTranslations();

  const [openEditPost, setOpenEditPost] = useState(false);

  const { mutateDeletePostToSeries } = useDeletePostToSeries();
  const { mutateDeleteImage } = useDeleteImage();

  // Dialog Delete Post
  const [openDeletePost, setOpenDeletePost] = useState(false);
  const handleOpenDeletePost = () => setOpenDeletePost(true);
  const handleCloseDeletePost = () => setOpenDeletePost(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDeletePost = () => {
    setIsLoading(true);
    mutateDeletePostToSeries(
      { id: post._id, series_id },
      {
        onSuccess: () => {
          showSuccessToast(t('Post deleted successfully!'));
          mutateDeleteImage([post.cover_image]);
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

  return (
    <div key={post._id} className='flex items-center w-full'>
      <FaRegCircle className='text-blue-500 size-3' />
      <div className='ms-3 text-text-2'>
        <div className='flex-start gap-3'>
          <Link
            href={`/series/${series_id}/posts/${post._id}`}
            className='h5-semibold  cursor-pointer'
          >
            {post.title}
          </Link>
          {isMe && (
            <div className='flex-start gap-2'>
              <div>
                <FaPencilAlt
                  className='size-4 text-1'
                  onClick={() => {
                    setOpenEditPost(true);
                  }}
                />
                <Modal
                  open={openEditPost}
                  handleClose={() => setOpenEditPost(false)}
                >
                  <CreateEditPostSeries
                    handleClose={() => setOpenEditPost(false)}
                    series_id={series_id}
                    dataEdit={
                      {
                        id: post._id,
                        series_id: series_id,
                        title: post.title,
                        description: post.description,
                        cover_image: post.cover_image,
                        content: post.content,
                        read_time: post.read_time,
                        visibility: post.visibility
                      } as IUpdateSeriesPost
                    }
                  />
                </Modal>
              </div>
              <AlertDialog
                open={openDeletePost}
                onOpenChange={setOpenDeletePost}
              >
                <AlertDialogTrigger
                  className='w-full text-1 uk-drop-close'
                  onClick={handleOpenDeletePost}
                >
                  <BiSolidTrashAlt className='size-5 text-1' />
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
                      className={cn(isLoading && 'select-none')}
                      disabled={isLoading}
                      onClick={handleCloseDeletePost}
                    >
                      {t('Cancel')}
                    </Button>
                    <Button
                      className={cn(isLoading && 'select-none')}
                      disabled={isLoading}
                      onClick={handleDeletePost}
                    >
                      {isLoading && (
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
          )}
        </div>
        <p className='small-regular'>{post.read_time}</p>
      </div>
    </div>
  );
}

export interface ISeriesProps {
  params: {
    seriesID: string;
  };
}

export default function Series({ params: { seriesID } }: ISeriesProps) {
  const t = useTranslations();
  const router = useRouter();

  const { series } = useGetSeriesByID(seriesID);
  const { currentUserInfo } = useCurrentUserInfo();

  const { mutateDeleteSeries } = useDeleteSeries();
  const { mutateDeleteImage } = useDeleteImage();

  const isMe = series?.user?._id === currentUserInfo?._id || false;

  const author = series?.user;

  const numberReview: number =
    series?.rating.star_1 +
      series?.rating.star_2 +
      series?.rating.star_3 +
      series?.rating.star_4 +
      series?.rating.star_5 || 0;

  const dataEdit: IUpdateSeries = useMemo(() => {
    if (!series) return {} as IUpdateSeries;
    return {
      id: series._id,
      title: series.title,
      description: series.description,
      introduction: series.introduction,
      cover_image: series.cover_image,
      level: series.level,
      visibility: series.visibility
    };
  }, [series]);

  // Modal
  const [openEdit, setOpenEdit] = useState(false);
  const [openAddPost, setOpenAddPost] = useState(false);

  // Dialog Delete Series
  const [openDeleteSeries, setOpenDeleteSeries] = useState(false);
  const handleOpenDeleteSeries = () => setOpenDeleteSeries(true);
  const handleCloseDeleteSeries = () => setOpenDeleteSeries(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDeleteSeries = () => {
    setIsLoading(true);
    mutateDeleteSeries(seriesID, {
      onSuccess: () => {
        const listImagePost = series?.posts.map(post => post.cover_image);
        mutateDeleteImage([series?.cover_image, ...listImagePost]);
        showSuccessToast(t('Series deleted successfully!'));
        router.push('/');
      },
      onError: () => {
        showErrorToast(t('Something went wrong! Please try again!'));
      },
      onSettled() {
        setIsLoading(false);
        handleCloseDeleteSeries();
      }
    });
  };

  return (
    <div className='ms-60 max-lg:ms-0 mt-16 pt-5 pb-5'>
      {isMe && (
        <>
          <EditButton
            className='fixed top-[20%] right-4 z-50'
            onClick={() => {
              setOpenEdit(true);
            }}
          />

          <AlertDialog
            open={openDeleteSeries}
            onOpenChange={setOpenDeleteSeries}
          >
            <AlertDialogTrigger
              className='w-full text-1 uk-drop-close'
              onClick={handleOpenDeleteSeries}
            >
              <DeleteButton className='fixed top-[calc(20%+4rem)] right-4 z-50' />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {t('Are you absolutely sure delete this series?')}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {t('You will not be able to recover series after deletion!')}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button
                  variant='destructive'
                  className={cn(isLoading && 'select-none')}
                  disabled={isLoading}
                  onClick={handleCloseDeleteSeries}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  className={cn(isLoading && 'select-none')}
                  disabled={isLoading}
                  onClick={handleDeleteSeries}
                >
                  {isLoading && (
                    <CircularProgress size={20} className='!text-text-1 mr-2' />
                  )}
                  {t('Delete')}
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
      <Modal open={openEdit} handleClose={() => setOpenEdit(false)}>
        <CreateEditSeries
          handleClose={() => setOpenEdit(false)}
          dataEdit={dataEdit}
        />
      </Modal>
      <div className='max-w-[730px] mx-auto'>
        <Image
          src={getImageURL(series?.cover_image) || '/images/no-image.png'}
          className='rounded-lg w-full object-fill h-[370px]'
          width={1500}
          height={1500}
          alt='cover-image'
          priority
        />
        <div className='h3-semibold mt-7'>{series?.title}</div>
        <div className='text-text-2 text-[1rem] text-pretty mt-4'>
          {series?.description}
        </div>
        <Button className='w-full my-7 py-3'>{t('Start Series')}</Button>
        <div>
          <div className='base-semibold flex-start gap-2'>
            <span>{t('Series Content')}</span>
            {isMe && (
              <>
                <span className='p-0.5 rounded-full bg-foreground-1'>
                  <IoAdd
                    className='size-5 text-1'
                    onClick={() => {
                      setOpenAddPost(true);
                    }}
                  />
                </span>
                {/* Add Post */}
                <Modal
                  open={openAddPost}
                  handleClose={() => setOpenAddPost(false)}
                >
                  <CreateEditPostSeries
                    handleClose={() => setOpenAddPost(false)}
                    series_id={series?._id}
                  />
                </Modal>
              </>
            )}
          </div>
          <div className='space-y-5 mt-6'>
            {series?.posts.map(post => (
              <PostItem
                key={post._id}
                post={post}
                series_id={series._id}
                isMe={isMe}
              />
            ))}
          </div>
        </div>
        <Divider className='mt-8 mb-6' />
        <div className='text-pretty text-[1rem] leading-relaxed'>
          <ShowContent content={series?.introduction} />
        </div>
        <div className='author mt-10 flex-between'>
          <div className='flex-start gap-2'>
            <Link href={`/profile/${author?._id}`}>
              <Avatar src={getImageURL(author?.user_image)} />
            </Link>
            <div className='flex-col'>
              <Link href={`/profile/${author?._id}`}>
                <div>{author?.name}</div>{' '}
              </Link>
              {author?.experiences?.length > 0 && (
                <div className='small-regular text-text-2 space-x-1'>
                  <span>
                    {author?.experiences[0].position_name} {t('at')}
                  </span>
                  <span>{author?.experiences[0].company_name}</span>
                </div>
              )}
            </div>
          </div>
          <Button>Follow</Button>
        </div>
        <Divider className='mt-12 mb-6' />
        <div className='info flex-around mt-10'>
          <div className='flex flex-col gap-2'>
            <span className='base-semibold'>{t('Level')}</span>
            <span className='text-text-2'>Intermediate</span>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='base-semibold'>{t('Date Published')}</span>
            <span className='text-text-2'>
              {getFormattedDate(series?.createdAt)}
            </span>
          </div>
        </div>
        <Divider className='mt-8 mb-12' />
        <div className='review'>
          <div className='base-semibold mb-5'>{t('Ratings & Reviews')}</div>
          <div className='grid grid-cols-4'>
            <div className='col-span-1'>
              {series?.rating.avg % 1 === 0 ? (
                <div className='text-[60px]'>{series?.rating.avg}.0</div>
              ) : (
                <div className='text-[60px]'>{series?.rating.avg}</div>
              )}
              <div className='flex-start *:size-5 *:text-yellow-400 gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-3 text-text-2'>{`${t(
                'Based on'
              )} ${numberReview} ${t('Reviews')}`}</div>
            </div>
            <div className='col-span-3 space-y-2'>
              <div className='flex-start gap-4'>
                <span className='text-text-2'>5</span>
                <div className='h-2 rounded-full bg-gray-200 w-full'>
                  <div className='h-2 rounded-full bg-yellow-400 w-[50%]'></div>
                </div>
              </div>
              <div className='flex-start gap-4'>
                <span className='text-text-2'>4</span>
                <div className='h-2 rounded-full bg-gray-200 w-full'>
                  <div className='h-2 rounded-full bg-yellow-400 w-[50%]'></div>
                </div>
              </div>
              <div className='flex-start gap-4'>
                <span className='text-text-2'>3</span>
                <div className='h-2 rounded-full bg-gray-200 w-full'>
                  <div className='h-2 rounded-full bg-yellow-400 w-[50%]'></div>
                </div>
              </div>
              <div className='flex-start gap-4'>
                <span className='text-text-2'>2</span>
                <div className='h-2 rounded-full bg-gray-200 w-full'>
                  <div className='h-2 rounded-full bg-yellow-400 w-[50%]'></div>
                </div>
              </div>
              <div className='flex-start gap-4'>
                <span className='text-text-2'>1</span>
                <div className='h-2 rounded-full bg-gray-200 w-full'>
                  <div className='h-2 rounded-full bg-yellow-400 w-[50%]'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className='w-full my-9 py-2'
          preIcon={<FaPen className='size-4' />}
        >
          {t('Write Review')}
        </Button>
        <div className='render-review'>
          <div className='flex gap-4'>
            <Avatar />
            <div className='flex-col'>
              <div className='flex-start gap-2'>
                <div className='base-semibold'>John Doe</div>
                <div className='small-regular text-text-2'>29 Jun, 2022</div>
              </div>
              <div className='text-text-2 mt-1 mb-2'>Thanks for sharing</div>
              <div className='flex-start *:size-4 *:text-yellow-400 gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
