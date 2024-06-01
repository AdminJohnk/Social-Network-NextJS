import { cn, getImageURL } from '@/lib/utils';
import { IReview, IUserInfo } from '@/types';
import { Avatar, CircularProgress } from '@mui/material';
import { FaStar } from 'react-icons/fa';
import { IoIosMore } from 'react-icons/io';
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
import { useFormatter, useTranslations } from 'next-intl';
import { useState } from 'react';
import { useDeleteReviewSeries } from '@/hooks/mutation';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useCurrentUserInfo } from '@/hooks/query';
import { BiSolidTrashAlt } from 'react-icons/bi';

export interface IReviewItemProps {
  review: IReview;
  series_id: string;
}

export default function ReviewItem({ review, series_id }: IReviewItemProps) {
  const t = useTranslations();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { currentUserInfo } = useCurrentUserInfo();

  const { mutateDeleteReviewSeries } = useDeleteReviewSeries();

  const isAuthor = currentUserInfo?._id === review.user._id;

  const getFormattedDate = (date: string) => {
    const format = useFormatter();
    return format.dateTime(new Date(date), {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Dialog Delete Review
  const [openDeleteReview, setOpenDeleteReview] = useState(false);
  const handleOpenDeleteReview = () => setOpenDeleteReview(true);
  const handleCloseDeleteReview = () => setOpenDeleteReview(false);

  const handleDeleteReview = () => {
    setIsLoading(true);
    mutateDeleteReviewSeries(
      {
        review_id: review._id,
        series_id: series_id
      },
      {
        onSuccess: () => {
          showSuccessToast(t('Review deleted successfully!'));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsLoading(false);
          handleCloseDeleteReview();
        }
      }
    );
  };

  return (
    <div className='flex gap-4'>
      <Avatar src={getImageURL(review.user.user_image)} />
      <div className='flex-col'>
        <div className='flex-start gap-2'>
          <div className='base-semibold'>{review.user.name}</div>
          <div className='small-regular text-text-2'>
            {getFormattedDate(review.createdAt)}
          </div>
        </div>
        <div className='text-text-2 mt-1 mb-2'>{review.content}</div>
        <div className='flex-start *:size-4 *:text-yellow-400 gap-2'>
          {Array.from({ length: review.rating }).map((_, index) => {
            return <FaStar key={index} />;
          })}
        </div>
      </div>
      {isAuthor && (
        <div>
          <IoIosMore className='size-5 text-1 outline-none' />
          <div data-uk-drop='offset: 4; pos: right-right; mode: click; shift: false; flip: false; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right'>
            <div className='flex flex-col gap-0.5 p-1 bg-foreground-1 rounded-lg shadow-lg *:px-2.5 *:py-1.5 hover:*:!bg-hover-1 *:cursor-pointer *:rounded-lg *:uk-drop-close'>
              <AlertDialog
                open={openDeleteReview}
                onOpenChange={setOpenDeleteReview}
              >
                <AlertDialogTrigger
                  className='w-full text-1 uk-drop-close'
                  onClick={handleOpenDeleteReview}
                >
                  <div className='flex-start gap-2'>
                    <BiSolidTrashAlt className='size-5 text-text-1' />
                    <span>{t('Delete')}</span>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      {t('Are you absolutely sure delete this review?')}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {t(
                        'You will not be able to recover review after deletion!'
                      )}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <Button
                      variant='destructive'
                      className={cn(isLoading && 'select-none')}
                      disabled={isLoading}
                      onClick={handleCloseDeleteReview}
                    >
                      {t('Cancel')}
                    </Button>
                    <Button
                      className={cn(isLoading && 'select-none')}
                      disabled={isLoading}
                      onClick={handleDeleteReview}
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
          </div>
        </div>
      )}
    </div>
  );
}
