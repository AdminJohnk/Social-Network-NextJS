'use client';

import { Avatar, CircularProgress } from '@mui/material';
import { notFound } from 'next/navigation';
import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPen, FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { IoAdd } from 'react-icons/io5';
import { Timeline } from 'flowbite-react';

import CreateEditSeries from '@/components/pages/Series/CreateEditSeries';
import CreateEditPostSeries from '@/components/pages/Series/CreateEditPostSeries';
import FriendButton from '@/components/pages/Profile/FriendButton';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useRouter } from '@/navigation';
import WriteReview from '@/components/pages/Series/WriteReview';
import { PostItem } from '@/components/pages/Series/PostItem';
import ReviewItem from '@/components/pages/Series/ReviewItem';
import EditButton from '@/components/pages/Series/EditButton';
import Divider from '@/components/shared/Divider';
import Modal from '@/components/shared/Modal';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { Link } from '@/navigation';
import { Button } from '@/components/ui/button';
import { useDeleteImage, useDeleteSeries, useIncreaseViewSeries } from '@/hooks/mutation';
import { useCurrentUserInfo, useGetSeriesByID } from '@/hooks/query';
import { cn, getImageURL } from '@/lib/utils';
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

export interface ISeriesProps {
  params: {
    seriesID: string;
  };
}

export default function Series({ params: { seriesID } }: ISeriesProps) {
  const t = useTranslations();
  const format = useFormatter();
  const router = useRouter();

  const { series, isErrorSeries, isLoadingSeries } = useGetSeriesByID(seriesID);
  const { currentUserInfo } = useCurrentUserInfo();

  const { mutateIncreaseViewSeries } = useIncreaseViewSeries();
  const { mutateDeleteSeries } = useDeleteSeries();
  const { mutateDeleteImage } = useDeleteImage();

  const isSeriesOwner = series ? series.user._id === currentUserInfo._id : false;

  const author = series && series.user;

  const getFormattedDate = (date: string) => {
    return format.dateTime(new Date(date), {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const numberReview = series
    ? series.rating.star_1 +
      series.rating.star_2 +
      series.rating.star_3 +
      series.rating.star_4 +
      series.rating.star_5
    : 0;

  const numberReviewNonZero = numberReview || 1;

  // Modal
  const [openEdit, setOpenEdit] = useState(false);
  const [openAddPost, setOpenAddPost] = useState(false);
  const [openReview, setOpenReview] = useState(false);

  // Dialog Delete Series
  const [openDeleteSeries, setOpenDeleteSeries] = useState(false);
  const handleOpenDeleteSeries = () => setOpenDeleteSeries(true);
  const handleCloseDeleteSeries = () => setOpenDeleteSeries(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDeleteSeries = () => {
    setIsLoading(true);
    mutateDeleteSeries(seriesID, {
      onSuccess: () => {
        const listImagePost = series.posts.map((post) => post.cover_image);
        mutateDeleteImage([series.cover_image, ...listImagePost]);
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

  useEffect(() => {
    mutateIncreaseViewSeries(seriesID);
  }, []);

  if (isErrorSeries) notFound();

  return (
    <div className='ms-60 mt-16 pb-5 pt-5 max-lg/2:ms-0'>
      {isLoadingSeries ? (
        <div className='flex items-center justify-center'>
          <CircularProgress />
        </div>
      ) : (
        <>
          {isSeriesOwner && (
            <>
              <EditButton
                className='fixed right-4 top-[20%] z-50'
                onClick={() => {
                  setOpenEdit(true);
                }}
              />

              <AlertDialog open={openDeleteSeries} onOpenChange={setOpenDeleteSeries}>
                <AlertDialogTrigger className='text-1 uk-drop-close w-full' onClick={handleOpenDeleteSeries}>
                  <DeleteButton className='fixed right-4 top-[calc(20%+4rem)] z-50' />
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{t('Are you absolutely sure delete this series?')}</AlertDialogTitle>
                    <AlertDialogDescription>
                      {t('You will not be able to recover series after deletion!')}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <Button
                      variant='destructive'
                      className={cn(isLoading && 'select-none')}
                      disabled={isLoading}
                      onClick={handleCloseDeleteSeries}>
                      {t('Cancel')}
                    </Button>
                    <Button
                      className={cn(isLoading && 'select-none')}
                      disabled={isLoading}
                      onClick={handleDeleteSeries}>
                      {isLoading && <CircularProgress size={20} className='mr-2 !text-text-1' />}
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
              dataEdit={{ ...series, id: series._id }}
            />
          </Modal>
          <div className='mx-auto max-w-[730px]'>
            <Image
              src={getImageURL(series.cover_image)}
              className='h-[370px] w-full rounded-lg object-fill'
              width={1500}
              height={1500}
              alt='cover-image'
              priority
            />
            <div className='h3-semibold mt-7'>{series.title}</div>
            <div className='mt-4 text-pretty text-[1rem] text-text-2'>{series.description}</div>
            <Link href={`/series/${seriesID}/posts/${series.posts[0]?._id}`}>
              <Button className='my-7 w-full py-3'>{t('Start Series')}</Button>
            </Link>
            <div>
              <div className='base-semibold flex-start gap-2'>
                <span>{t('Series Content')}</span>
                {isSeriesOwner && (
                  <>
                    <span className='rounded-full bg-foreground-1 p-0.5'>
                      <IoAdd
                        className='text-1 size-5'
                        onClick={() => {
                          setOpenAddPost(true);
                        }}
                      />
                    </span>
                    {/* Add Post */}
                    <Modal open={openAddPost} handleClose={() => setOpenAddPost(false)}>
                      <CreateEditPostSeries
                        handleClose={() => setOpenAddPost(false)}
                        series_id={series._id}
                      />
                    </Modal>
                  </>
                )}
              </div>
              <Timeline className='mt-6 border-border-1'>
                {series.posts.map((post) => (
                  <PostItem key={post._id} post={post} series_id={series._id} isMe={isSeriesOwner} />
                ))}
              </Timeline>
            </div>
            <Divider className='mb-6 mt-8' />
            <div className='my-5 text-pretty px-2 text-[1rem] leading-relaxed'>
              <ShowContent content={series.introduction} />
            </div>
            <div className='author flex-between mt-10'>
              <div className='flex-start gap-2'>
                <Link href={`/profile/${author._id}`}>
                  <Avatar src={getImageURL(author.user_image)} />
                </Link>
                <div className='flex-col'>
                  <Link href={`/profile/${author._id}`}>
                    <div>{author.name}</div>
                  </Link>
                  {author.experiences?.length > 0 && (
                    <div className='small-regular space-x-1 text-text-2'>
                      <span>
                        {author.experiences[0].position_name} {t('at')}
                      </span>
                      <span>{author.experiences[0].company_name}</span>
                    </div>
                  )}
                </div>
              </div>
              {!isSeriesOwner && <FriendButton profileID={author._id} variant='default' />}
            </div>
            <Divider className='mb-6 mt-12' />
            <div className='info flex-around mt-10'>
              <div className='flex flex-col gap-2'>
                <span className='base-semibold'>{t('Level')}</span>
                <span className='text-text-2'>
                  {t(series.level.charAt(0).toUpperCase() + series.level.slice(1))}
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='base-semibold'>{t('Date Published')}</span>
                <span className='text-text-2'>{getFormattedDate(series.createdAt)}</span>
              </div>
            </div>
            <Divider className='mb-12 mt-8' />
            <div className='review'>
              <div className='base-semibold mb-5'>{t('Ratings & Reviews')}</div>
              <div className='grid grid-cols-4'>
                <div className='col-span-1'>
                  {series.rating.avg % 1 === 0 ? (
                    <div className='text-[60px]'>{series.rating.avg}.0</div>
                  ) : (
                    <div className='text-[60px]'>{series.rating.avg.toFixed(1)}</div>
                  )}
                  <div className='flex-start gap-2 *:size-5 *:text-yellow-400'>
                    {Array.from({ length: Math.floor(series.rating.avg) }).map((_, index) => {
                      return <FaStar key={index} />;
                    })}
                    {series.rating.avg % 1 > 0 && <FaStarHalfAlt />}
                  </div>

                  <div className='mt-3 text-text-2'>{`${t('Based on')} ${numberReview} ${t('reviews')}`}</div>
                </div>
                <div className='col-span-3 space-y-2'>
                  <div className='flex-start gap-4'>
                    <span className='text-text-2'>5</span>
                    <div className='h-2 w-full rounded-full bg-foreground-1'>
                      <div
                        className='h-2 rounded-full bg-yellow-400'
                        style={{
                          width: `${(series.rating.star_5 / numberReviewNonZero) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                  <div className='flex-start gap-4'>
                    <span className='text-text-2'>4</span>
                    <div className='h-2 w-full rounded-full bg-foreground-1'>
                      <div
                        className='h-2 rounded-full bg-yellow-400'
                        style={{
                          width: `${(series.rating.star_4 / numberReviewNonZero) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                  <div className='flex-start gap-4'>
                    <span className='text-text-2'>3</span>
                    <div className='h-2 w-full rounded-full bg-foreground-1'>
                      <div
                        className='h-2 rounded-full bg-yellow-400'
                        style={{
                          width: `${(series.rating.star_3 / numberReviewNonZero) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                  <div className='flex-start gap-4'>
                    <span className='text-text-2'>2</span>
                    <div className='h-2 w-full rounded-full bg-foreground-1'>
                      <div
                        className='h-2 rounded-full bg-yellow-400'
                        style={{
                          width: `${(series.rating.star_2 / numberReviewNonZero) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                  <div className='flex-start gap-4'>
                    <span className='text-text-2'>1</span>
                    <div className='h-2 w-full rounded-full bg-foreground-1'>
                      <div
                        className='h-2 rounded-full bg-yellow-400'
                        style={{
                          width: `${(series.rating.star_1 / numberReviewNonZero) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className='my-9 w-full py-2'
              preIcon={<FaPen className='size-4' />}
              onClick={() => setOpenReview(true)}>
              {t('Write Review')}
            </Button>
            <Modal open={openReview} handleClose={() => setOpenReview(false)}>
              <WriteReview handleClose={() => setOpenReview(false)} series_id={seriesID} />
            </Modal>
            <div className='render-review'>
              {series.reviews
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .sort((a, b) => b.rating - a.rating)
                .map((review) => (
                  <div className='mb-6' key={review._id}>
                    <ReviewItem review={review} series_id={seriesID} isSeriesOwner={isSeriesOwner} />
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
