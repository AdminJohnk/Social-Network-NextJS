import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { CircularProgress } from '@mui/material';
import { useTranslations } from 'next-intl';

export interface IYesNoQuestionProps {
  title: string;
  content: string;
  type: string;
  isLoading?: boolean;
  action: () => void;
  cancel: () => void;
}

export default function YesNoQuestion({
  title,
  content,
  type,
  isLoading,
  action,
  cancel
}: IYesNoQuestionProps) {
  const t = useTranslations();
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
      <div className='flex-end'>
        <Button
        variant='destructive'
          className={cn(
            'button lg:px-6 text-white max-md:flex-1',
            isLoading && 'select-none'
          )}
          disabled={isLoading}
          onClick={() => {
            console.log(cancel);
            cancel();
          }}
        >
          {t('Cancel')} <span className='ripple-overlay'></span>
        </Button>
        <Button
          className={cn(
            'button lg:px-6 text-white max-md:flex-1',
            isLoading && 'select-none'
          )}
          disabled={isLoading}
          onClick={action}
        >
          {isLoading && (
            <CircularProgress size={20} className='text-text-1 mr-2' />
          )}
          {t('Save')} <span className='ripple-overlay'></span>
        </Button>
      </div>
    </div>
  );
}
