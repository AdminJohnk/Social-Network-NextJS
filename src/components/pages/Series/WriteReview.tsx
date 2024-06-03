import { Button } from '@/components/ui/button';
import { showErrorToast, showSuccessToast } from '@/components/ui/toast';
import { useReviewSeries } from '@/hooks/mutation';
import { useCurrentUserInfo } from '@/hooks/query';
import { cn } from '@/lib/utils';
import { CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

export interface IWriteReviewProps {
  handleClose: () => void;
  series_id: string;
}

export default function WriteReview({ handleClose, series_id }: IWriteReviewProps) {
  const t = useTranslations();

  const { mutateReviewSeries } = useReviewSeries();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [numberStar, setNumberStar] = useState<number>(0);
  const [review, setReview] = useState<string>('');

  const handleSubmit = async () => {
    setIsLoading(true);

    if (numberStar === 0) {
      showErrorToast(t('Please select your rating!'));
      setIsLoading(false);
      return;
    } else if (review.trim().length === 0) {
      showErrorToast(t('Please write your review!'));
      setIsLoading(false);
      return;
    }

    mutateReviewSeries(
      {
        series_id: series_id,
        rating: numberStar,
        content: review
      },
      {
        onSuccess: () => {
          showSuccessToast(t('Review has been submitted!'));
        },
        onError: () => {
          showErrorToast(t('Something went wrong! Please try again!'));
        },
        onSettled() {
          setIsLoading(false);
          handleClose();
        }
      }
    );
  };

  return (
    <div className='relative mx-auto bg-background-1 shadow-xl rounded-lg w-[760px] animate-fade-up'>
      <div className='text-center py-4 border-b mb-0 border-border-1'>
        <h2 className='text-sm font-medium text-text-1'>{t('Create Review')}</h2>
      </div>
      <div className='max-h-[500px] overflow-y-scroll custom-scrollbar-bg px-5 pt-4 pb-7 *:mt-7'>
        <div className='mb-4'>
          <div className='mb-3 base-semibold'>{t('Your Rating')}</div>
          <div className='flex-center *:size-10 *:text-yellow-400 gap-4 *:cursor-pointer'>
            {Array.from({ length: 5 }).map((_, index) => (
              <>
                {index < numberStar ? (
                  <FaStar key={index} onClick={() => setNumberStar(index + 1)} />
                ) : (
                  <FaRegStar key={index} onClick={() => setNumberStar(index + 1)} />
                )}
              </>
            ))}
          </div>
        </div>
        <div>
          <div className='mb-3 base-semibold'>{t('Leave a Review')}</div>
          <div>
            <textarea
              className='w-full border border-border-1 rounded-lg p-2 resize-none bg-transparent custom-scrollbar-bg'
              rows={4}
              onChange={(e) => setReview(e.target.value)}
              maxLength={330}
            />
          </div>
        </div>
      </div>
      <div className='p-5 flex justify-end items-center'>
        <div className='flex items-center gap-2'>
          <Button
            type='button'
            className={cn('button lg:px-6 text-white max-md:flex-1', isLoading && 'select-none')}
            disabled={isLoading}
            onClick={handleSubmit}>
            {isLoading && <CircularProgress size={20} className='!text-text-1 mr-2' />}
            {t('Submit Review')} <span className='ripple-overlay'></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
